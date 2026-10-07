// Zoeken in het handboek, zonder server en zonder taalmodel.
// Pure functies, geen DOM. Getest in tests/zoeken.test.js.
//
// Hoe het werkt:
// 1. Elke passage (een sectie uit het handboek, een regel uit Wie doet wat, of een stuk uit
//    een geüpload document) wordt een lijst woordstammen: kleine letters, accenten weg,
//    stopwoorden weg, meervoud en verkleinwoord eraf.
// 2. Een vraag gaat door dezelfde molen. Elk woord krijgt er synoniemen uit de zorg bij,
//    met een lager gewicht.
// 3. BM25 rangschikt de passages. De kop telt drie keer zo zwaar als de lopende tekst.
// 4. Het antwoord is letterlijk de best passende zin (of twee) uit de beste passage.
//    Dekt die passage te weinig van de vraag, dan is het antwoord niet zeker.

const K1 = 1.2;
const B = 0.75;
const GEWICHT_KOP = 3;
const GEWICHT_SYNONIEM = 0.5;
const MIN_DEKKING = 0.5;
const GEWICHT_ZACHT = 0.3;

// Woorden die bij een vraag horen, maar zelden in het antwoord staan. Ze tellen licht mee.
const ZACHTE_WOORDEN = new Set(['vaak', 'wanneer', 'lang', 'snel', 'precies', 'mevrouw', 'meneer', 'graag', 'nodig', 'eigenlijk'].map((w) => stam(w)));

const STOPWOORDEN = new Set(`
  de het een en of in op aan van voor met bij naar uit om te tot over door na als dan maar want dus
  ik je jij jou jouw u uw mijn me mij we wij onze hij zij ze haar hem hun zich zelf men
  is ben bent was waren wordt worden word werd heb hebt heeft hebben had kan kun kunt kunnen
  moet moeten mag mogen wil wilt willen zal zult zullen zou zouden doe doet doen ga gaat gaan
  dat dit die deze er hier daar wat hoe waar wie welk welke waarom
  niet geen ook nog al toch even wel zo nu heel veel meer iets iemand eens weer mee af toe
  elk elke alle alles andere ander dezelfde hetzelfde zijn s t
`.split(/\s+/).filter(Boolean));

// Woorden die een vraag naar een persoon maken: wie, bellen, contact.
const WIE_WOORDEN = /\b(wie|bel|bellen|contact|bereik|bereiken|toestel|nummer|telefoonnummer|mail|mailen|aanspreekpunt|terecht|terechtkunnen)\b/;
const MIJN_WOORDEN = /\b(mijn|onze|ons|eigen)\b/;
const AFDELINGEN = ['De Linde', 'De Eik', 'De Beuk'];

const SYNONIEM_GROEPEN = [
  ['melding', 'mic', 'incident', 'melden', 'meld', 'incidentmelding'],
  ['overdracht', 'dienstwissel', 'overdragen', 'overdrachtsrapportage', 'overdrachtsagenda'],
  ['inloggen', 'inlog', 'wachtwoord', 'authenticator', 'code', 'inlogcode', 'tweestapsverificatie'],
  ['familie', 'naasten', 'naaste', 'contactpersoon', 'mantelzorger', 'dochter', 'zoon'],
  ['wond', 'decubitus', 'doorligplek', 'wondfoto', 'wondzorg'],
  ['pijn', 'pijnscore'],
  ['val', 'valincident', 'gevallen', 'vallen', 'valt'],
  ['keyuser', 'superuser', 'supergebruiker', 'aanspreekpunt'],
  ['storing', 'plat', 'offline', 'eruit', 'storingslijn'],
  ['arts', 'dokter', 'huisarts', 'specialist', 'ouderengeneeskunde'],
  ['gewicht', 'wegen', 'weeg', 'afvallen', 'afgevallen'],
  ['privacy', 'datalek', 'avg', 'vertrouwelijk'],
  ['teamleider', 'leidinggevende', 'manager'],
  ['evver', 'eerstverantwoordelijke', 'evv'],
  ['stervensfase', 'sterven', 'zp10', 'palliatief', 'zorgpad', 'overlijden', 'stervende'],
  ['escaleren', 'toegang', 'autoriseren', 'rechten', 'escalatie'],
  ['episode', 'kortdurend', 'kortdurende', 'tijdelijk'],
  ['telefoon', 'mobiel', 'gsm', 'smartphone'],
  ['client', 'bewoner'],
  ['medicatie', 'medicijn', 'medicijnen', 'pillen', 'zakje'],
  ['rapporteren', 'rapportage', 'rapport'],
  ['opzoeken', 'zoeken', 'vinden'],
  ['bellen', 'gebeld', 'bel', 'opbellen'],
];

// ---------- taal ----------

export function normaliseer(tekst) {
  return String(tekst ?? '')
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/['’`]/g, '')
    .replace(/\bkey[\s-]?users?\b/g, 'keyuser')
    .replace(/\bsuper[\s-]?users?\b/g, 'superuser')
    .replace(/\bzp[\s-]?10\b/g, 'zp10')
    .replace(/\be-?mail/g, 'mail')
    .replace(/\b(doet|werkt)( het)? niet\b/g, 'storing')
    .replace(/\bligt eruit\b/g, 'storing');
}

export function stam(woord) {
  let w = woord;
  if (w.length > 4 && /[aeolnrm]s$/.test(w)) w = w.slice(0, -1);
  else if (w.length > 4 && w.endsWith('en')) w = w.slice(0, -2);
  if (w.length > 4 && w.endsWith('je')) w = w.slice(0, -2);
  if (w.length >= 6 && w.endsWith('ing')) w = w.slice(0, -3);
  // werkwoord met -t: maakt, weegt, rapporteert
  if (w.length >= 4 && /[^aeiout]t$/.test(w)) w = w.slice(0, -1);
  w = w.replace(/([bcdfgklmnprst])\1$/, '$1');
  w = w.replace(/([aeou])\1/g, '$1');
  return w;
}

function woorden(tekst) {
  return normaliseer(tekst).split(/[^a-z0-9]+/).filter(Boolean);
}

export function tokens(tekst) {
  return woorden(tekst).filter((w) => !STOPWOORDEN.has(w)).map(stam);
}

const SYNONIEMEN = (() => {
  const kaart = new Map();
  for (const groep of SYNONIEM_GROEPEN) {
    const stammen = [...new Set(groep.map((w) => stam(normaliseer(w))))];
    for (const s of stammen) {
      const set = kaart.get(s) || new Set();
      stammen.filter((x) => x !== s).forEach((x) => set.add(x));
      kaart.set(s, set);
    }
  }
  return kaart;
})();

// Een samengesteld woord dat niet in de bronnen staat, knippen we in twee bekende delen.
// "mondverzorging" wordt "mond" en "verzorg".
function splits(index, t) {
  if (!index || index.df.has(t) || SYNONIEMEN.has(t) || t.length < 7) return [t];
  for (let i = 3; i <= t.length - 3; i++) {
    const a = t.slice(0, i);
    const b = t.slice(i);
    const b2 = stam(b);
    if (index.df.has(a) && (index.df.has(b) || index.df.has(b2))) return [a, index.df.has(b) ? b : b2];
  }
  return [t];
}

const zwaarte = (t) => (ZACHTE_WOORDEN.has(t) ? GEWICHT_ZACHT : 1);

// De vraag als gewogen termen: eigen woorden tellen 1, synoniemen tellen minder.
function vraagTermen(vraag, index) {
  const eigen = [...new Set(tokens(vraag).flatMap((t) => splits(index, t)))];
  const gewicht = new Map(eigen.map((t) => [t, zwaarte(t)]));
  for (const t of eigen) {
    for (const s of SYNONIEMEN.get(t) || []) if (!gewicht.has(s)) gewicht.set(s, GEWICHT_SYNONIEM);
  }
  return { eigen, gewicht };
}

// ---------- index ----------

function velden(item) {
  if (item.rol) {
    return {
      kop: `${item.rol} ${item.naam}`,
      romp: [item.afdeling, item.wanneer, item.bereik, ...(item.waarvoor || []), ...(item.waarvoor || [])].join(' '),
    };
  }
  return { kop: item.kop || '', romp: [item.hoofdstuk, ...(item.tekst || [])].join(' ') };
}

export function maakIndex(bronnen) {
  const docs = [];
  const df = new Map();
  for (const item of bronnen || []) {
    if (!item || !item.id) continue;
    const { kop, romp } = velden(item);
    const tf = new Map();
    const kopT = tokens(kop);
    const rompT = tokens(romp);
    for (const t of kopT) tf.set(t, (tf.get(t) || 0) + GEWICHT_KOP);
    for (const t of rompT) tf.set(t, (tf.get(t) || 0) + 1);
    for (const t of tf.keys()) df.set(t, (df.get(t) || 0) + 1);
    docs.push({ item, soort: item.rol ? 'persoon' : 'sectie', tf, kop: new Set(kopT), len: kopT.length * GEWICHT_KOP + rompT.length });
  }
  const avgdl = docs.reduce((s, d) => s + d.len, 0) / (docs.length || 1);
  return { docs, df, N: docs.length, avgdl };
}

function idf(index, term) {
  const n = index.df.get(term) || 0;
  return Math.log(1 + (index.N - n + 0.5) / (n + 0.5));
}

function bm25(index, doc, gewicht) {
  let score = 0;
  for (const [t, w] of gewicht) {
    const f = doc.tf.get(t);
    if (!f) continue;
    score += w * idf(index, t) * (f * (K1 + 1)) / (f + K1 * (1 - B + B * doc.len / index.avgdl));
  }
  return score;
}

// Welk deel van de vraag staat in deze passage? Een synoniem telt voor een deel mee.
function dekking(index, doc, eigen) {
  if (!eigen.length) return 0;
  let totaal = 0;
  let raak = 0;
  for (const t of eigen) {
    const w = idf(index, t) * zwaarte(t);
    totaal += w;
    if (doc.tf.has(t)) raak += w;
    else if ([...(SYNONIEMEN.get(t) || [])].some((s) => doc.tf.has(s))) raak += w * 0.6;
  }
  return totaal ? raak / totaal : 0;
}

/**
 * Zoek in de index. Geeft passages terug, beste eerst.
 * @param {object} index uit maakIndex
 * @param {string} vraag
 * @param {number} max hoeveel treffers
 * @param {{soort?: 'sectie'|'persoon'}} opties alleen secties of alleen personen
 */
export function zoek(index, vraag, max = 5, opties = {}) {
  const { eigen, gewicht } = vraagTermen(vraag, index);
  if (!eigen.length || !index?.docs?.length) return [];
  return index.docs
    .filter((d) => !opties.soort || d.soort === opties.soort)
    .map((d) => ({
      ...d.item,
      soort: d.soort,
      score: bm25(index, d, gewicht),
      dekking: dekking(index, d, eigen),
      inKop: eigen.filter((t) => zwaarte(t) === 1).every((t) => d.kop.has(t)),
    }))
    .filter((r) => r.score > 0)
    // Een passage die meer van de vraag dekt, schuift omhoog.
    .map((r) => ({ ...r, score: r.score * (0.4 + 0.6 * r.dekking) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, max);
}

// ---------- antwoord ----------

function zinnen(alinea) {
  return String(alinea).split(/(?<=[.!?])\s+(?=[A-Z0-9"'(À-Ý])/u).map((z) => z.trim()).filter(Boolean);
}

function besteZinnen(index, sectie, gewicht, extra) {
  // Past de vraag helemaal bij de kop, dan begint het antwoord bij het begin van de passage.
  if (sectie.inKop && !extra.length && ![...gewicht.values()].includes(GEWICHT_ZACHT)) {
    const lijst = zinnen((sectie.tekst || [])[0] || '');
    if (lijst.length) return lijst[0].length < 90 && lijst[1] ? `${lijst[0]} ${lijst[1]}` : lijst[0];
  }
  let beste = null;
  (sectie.tekst || []).forEach((alinea, a) => {
    const lijst = zinnen(alinea);
    lijst.forEach((zin, z) => {
      const ts = new Set(tokens(zin));
      let score = 0;
      for (const [t, w] of gewicht) if (ts.has(t)) score += w * idf(index, t);
      for (const t of extra) if (ts.has(t)) score += 0.8;
      if (!beste || score > beste.score) beste = { score, lijst, z, a };
    });
  });
  if (!beste) return '';
  const { lijst, z } = beste;
  const eerste = lijst[z];
  const volgende = lijst[z + 1];
  if (!volgende) return eerste;
  const ts = new Set(tokens(volgende));
  const raakt = [...gewicht.keys()].some((t) => ts.has(t));
  if (!(eerste.length < 90 || raakt)) return eerste;
  // Een korte vraag als tweede zin heeft zijn antwoord nodig: "Twijfel je? Meld het."
  if (volgende.endsWith('?') && lijst[z + 2]) return `${eerste} ${volgende} ${lijst[z + 2]}`;
  return `${eerste} ${volgende}`;
}

function persoonTekst(p) {
  const zin = (t) => (/[.!?]$/.test(t) ? t : `${t}.`);
  return [`${p.naam}, ${p.rol.charAt(0).toLowerCase()}${p.rol.slice(1)}.`, zin(p.wanneer), zin(p.bereik)].join(' ');
}

function afdelingUitVraag(vraag) {
  const n = normaliseer(vraag);
  return AFDELINGEN.find((a) => n.includes(normaliseer(a)) || new RegExp(`\\b${normaliseer(a).split(' ')[1]}\\b`).test(n)) || null;
}

const vasteAfdeling = (p) => AFDELINGEN.includes(p.afdeling);

function personenVoor(index, vraag, { wieVraag, afdeling }) {
  const genoemd = afdelingUitVraag(vraag);
  const voorkeur = genoemd || afdeling;
  let lijst = zoek(index, vraag, 12, { soort: 'persoon' });
  if (!lijst.length) return [];
  // Iemand van een andere afdeling valt weg, tenzij de vraag die afdeling noemt.
  if (voorkeur) lijst = lijst.filter((p) => !vasteAfdeling(p) || p.afdeling === voorkeur);
  if (!lijst.length) return [];
  const top = lijst[0].score;
  const drempel = wieVraag ? 0.5 : 0.75;
  return lijst
    .filter((p) => p.score >= top * drempel && p.dekking >= MIN_DEKKING)
    .slice(0, wieVraag ? 3 : 2);
}

function keyUsers(index, afdeling) {
  const alle = index.docs.filter((d) => d.soort === 'persoon' && /key-?user/i.test(d.item.rol)).map((d) => d.item);
  const eigen = alle.filter((p) => p.afdeling === afdeling);
  return eigen.length ? eigen : alle;
}

/**
 * Een kort antwoord op een vraag, letterlijk uit de beste passage.
 * @param {object} index uit maakIndex
 * @param {string} vraag
 * @param {{afdeling?: string}} opties de afdeling van de medewerker, voor "mijn key-user"
 * @returns {{tekst: string, bron: string|null, kop: string|null, hoofdstuk: string|null, sectieId: string|null,
 *   personen: object[], modules: string[], zeker: boolean, treffers: object[]}}
 */
export function antwoord(index, vraag, opties = {}) {
  const afdeling = opties.afdeling || null;
  const n = normaliseer(vraag);
  const wieVraag = WIE_WOORDEN.test(n);
  const { gewicht } = vraagTermen(vraag, index);
  const treffers = zoek(index, vraag, 6, { soort: 'sectie' });
  // De beste passage is de hoogste die genoeg van de vraag dekt, en niet ver achter de top zit.
  const top = treffers[0]?.score || 0;
  const goed = treffers.find((t) => t.dekking >= MIN_DEKKING && t.score >= top * 0.6);
  const beste = goed || treffers[0];
  const zeker = Boolean(goed);
  const extra = tokens(MIJN_WOORDEN.test(n) || wieVraag ? (afdelingUitVraag(vraag) || afdeling || '') : (afdelingUitVraag(vraag) || ''));

  let personen = personenVoor(index, vraag, { wieVraag, afdeling });

  // Vraagt iemand naar een persoon of een rol, en past Wie doet wat beter dan het handboek?
  // Dan komt het antwoord uit Wie doet wat.
  const p = personen[0];
  if (p && p.dekking >= MIN_DEKKING && (!zeker || (p.inKop && p.score >= beste.score * 0.8))) {
    return {
      tekst: persoonTekst(p),
      bron: p.bron, kop: p.rol, hoofdstuk: null, sectieId: null,
      personen, modules: zeker && beste.module ? [beste.module] : [], zeker: true,
      treffers: treffers.filter((t) => t.dekking >= 0.25).slice(0, 4),
    };
  }

  if (!zeker) {
    return {
      tekst: 'Dit staat niet in het handboek. Vraag het de key-user van je afdeling.',
      bron: null, kop: null, hoofdstuk: null, sectieId: null,
      personen: keyUsers(index, afdeling),
      modules: [],
      zeker: false,
      treffers: treffers.filter((t) => t.dekking >= 0.25).slice(0, 3),
    };
  }

  const modules = beste.module ? [beste.module] : [];
  for (const t of treffers) {
    if (t === beste || t.score < beste.score * 0.7 || t.dekking < MIN_DEKKING) continue;
    if (t.module && !modules.includes(t.module)) modules.push(t.module);
    if (modules.length === 2) break;
  }

  return {
    tekst: besteZinnen(index, beste, gewicht, extra),
    bron: beste.bron || null,
    kop: beste.kop,
    hoofdstuk: beste.hoofdstuk || null,
    sectieId: beste.id,
    personen,
    modules,
    zeker: true,
    treffers: treffers.filter((t) => t !== beste),
  };
}

// ---------- eigen documenten ----------

function schoon(regel) {
  return regel
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`]+/g, '')
    .replace(/^\s*(?:[-*+]|\d+[.)])\s+/, '')
    .replace(/^>\s?/, '')
    .trim();
}

function lijktKop(regel) {
  const r = regel.trim();
  if (!r || r.length > 70) return false;
  if (/[.!?:,]$/.test(r)) return false;
  if (/^(?:[-*+]|\d+[.)])\s/.test(r)) return false;
  return r.split(/\s+/).length <= 9;
}

function slug(t) {
  return normaliseer(t).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || 'document';
}

/**
 * Knip een geüpload tekstbestand (.txt of .md) op in secties, als extra bron voor het zoeken.
 * Een kop is een regel met # ervoor, of een korte regel zonder punt aan het eind
 * die los staat of boven een alinea staat. Een kop zonder eigen tekst wordt het hoofdstuk.
 * @param {string} tekst
 * @param {string} naam de naam van het bestand of de bron
 * @returns {Array<{id, hoofdstuk, kop, tekst: string[], module: null, bron: string}>}
 */
export function leesDocument(tekst, naam = 'Document') {
  const bron = String(naam).replace(/\.(md|markdown|txt)$/i, '').trim() || 'Document';
  const basis = slug(bron);
  const regels = String(tekst ?? '').replace(/\r\n?/g, '\n').split('\n');

  // Blokken: regels tussen lege regels.
  const blokken = [];
  let blok = [];
  for (const r of regels) {
    if (r.trim() === '') { if (blok.length) blokken.push(blok); blok = []; } else blok.push(r.trim());
  }
  if (blok.length) blokken.push(blok);

  const secties = [];
  let hoofdstuk = bron;
  let huidig = null;
  const kop = (titel, niveau = 2) => {
    // Een kop zonder tekst eronder is een hoofdstuktitel.
    if (huidig && !huidig.tekst.length) hoofdstuk = huidig.kop;
    if (niveau === 1) hoofdstuk = titel;
    huidig = { kop: titel, hoofdstuk, tekst: [] };
    secties.push(huidig);
  };
  const isLijst = (r) => /^(?:[-*+]|\d+[.)])\s/.test(r);

  for (const b of blokken) {
    let alinea = [];
    const sluit = () => {
      if (!alinea.length) return;
      if (!huidig) kop(bron);
      huidig.tekst.push(alinea.join(' '));
      alinea = [];
    };
    b.forEach((r, i) => {
      const md = r.match(/^(#{1,6})\s+(.*)$/);
      if (md) { sluit(); kop(schoon(md[2]), md[1].length); return; }
      if (i === 0 && lijktKop(r) && !isLijst(r)) { kop(schoon(r)); return; }
      if (isLijst(r)) { sluit(); alinea.push(schoon(r)); sluit(); return; }
      const t = schoon(r);
      if (t) alinea.push(t);
    });
    sluit();
  }

  let nr = 0;
  return secties
    .filter((s) => s.tekst.length)
    .map((s) => ({ id: `${basis}-${++nr}`, hoofdstuk: s.hoofdstuk, kop: s.kop, tekst: s.tekst, module: null, bron }));
}
