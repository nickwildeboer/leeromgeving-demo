import { metMaatwerk } from './maatwerk.js';
import { nu } from './state.js';
// "Vraag het": zoeken in het handboek van de organisatie, met een kort antwoord en de bron erbij.
// Twee mount-functies die zelf renderen en hun eigen listeners aan hun container hangen.
// Ze gebruiken data-vraag-* attributen, zodat ze niet botsen met data-actie in app.js.
//
//   mountVraag(container, { esc, beginVraag, naarModule })  het zoekveld voor de medewerker
//   mountBronnen(container, { esc, meld })                  bronnen en vragenregister in het beheercentrum
//   alleBronnen()                                           alle passages, om elders in te zoeken

import { HANDBOEK, WIE_DOET_WAT } from './handboek.js';
import { maakIndex, antwoord, leesDocument } from './zoeken.js';
import { MODULES, MEDEWERKER } from './data.js';

const SLEUTEL_VRAGEN = 'leeromgeving-vragen-v1';
const SLEUTEL_BRONNEN = 'leeromgeving-bronnen-v1';
const MAX_BESTAND = 200 * 1024;
const MAX_VRAGEN = 300;
const sessieCollecties = new Map();
const sessieOpslag = new Set();
const lopendeUploads = new Set();
let uploadResetGeneratie = 0;

export const VOORBEELDVRAGEN = [
  'Wie is mijn key-user?',
  'Wanneer maak ik een MIC-melding?',
  'Hoe vaak meet ik pijn?',
  'Ik ben mijn Authenticator kwijt',
];

/** Heuristische signalering; geen volledige controle op persoonsgegevens. */
export function detecteerPersoonsgegevens(tekst) {
  if (typeof tekst !== 'string') return [];
  const bron = tekst.normalize('NFKC');
  const soorten = new Set();
  for (const match of bron.matchAll(/(?<!\d)\d{9}(?!\d)/g)) {
    const cijfers = [...match[0]].map(Number);
    const som = cijfers.slice(0, 8).reduce((totaal, cijfer, i) => totaal + cijfer * (9 - i), 0) - cijfers[8];
    if (som > 0 && som % 11 === 0 && !/^0+$/.test(match[0])) soorten.add('bsn');
  }
  if (/\b(?:geboortedatum|geboren|geb\.?|dob)\s*[:=]?\s*(?:\d{1,2}[-/.]\d{1,2}[-/.](?:19|20)\d{2}|(?:19|20)\d{2}[-/.]\d{1,2}[-/.]\d{1,2})\b/iu.test(bron)) soorten.add('geboortedatum');
  if (/\b[1-9]\d{3}\s?[A-Z]{2}\s*[,;]?\s*(?:(?:huisnummer|nr\.?)\s*[:=]?\s*)?\d{1,5}[A-Z]?\b/iu.test(bron)) soorten.add('adres');
  if (/[\w.+-]+@[\w-]+(?:\.[\w-]+)+/u.test(bron)) soorten.add('e-mailadres');
  if (/(?<!\d)(?:(?:\+31|0031)[\s()-]*[1-9]|0[\s()-]*[1-9])(?:[\s()-]*\d){8}(?!\d)/u.test(bron)) soorten.add('telefoonnummer');
  return [...soorten].sort();
}

const ICOON = {
  zoek: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/></svg>',
  pijl: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  boek: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/></svg>',
  mensen: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.6-3.6 3.2-5.5 6.5-5.5s5.9 1.9 6.5 5.5"/><circle cx="17" cy="9" r="2.6"/><path d="M16.5 14.6c2.6.2 4.4 1.9 5 4.9"/></svg>',
  bestand: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>',
  plus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
  vink: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
  open: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v5.5M12 16.5v.01"/></svg>',
};

const escStandaard = (t) => String(t ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// ---------- opslag met een eerlijke sessiefallback ----------

function normaleTekst(waarde) {
  return typeof waarde === 'string' ? waarde : '';
}

function normaliseerVraagRecord(record) {
  if (!record || typeof record !== 'object' || Array.isArray(record)) return null;
  if (typeof record.vraag !== 'string' || !record.vraag.trim()) return null;
  if (typeof record.tijd !== 'string' || Number.isNaN(Date.parse(record.tijd))) return null;
  if (typeof record.antwoord !== 'boolean') return null;
  const optioneelTekst = (waarde) => waarde == null || typeof waarde === 'string';
  if (!optioneelTekst(record.sectie) || !optioneelTekst(record.kop) || !optioneelTekst(record.bron)) return null;
  return {
    tijd: record.tijd,
    vraag: record.vraag.slice(0, 300),
    sectie: record.sectie || null,
    kop: record.kop || null,
    bron: record.bron || null,
    antwoord: record.antwoord,
  };
}

function normaliseerBronRecord(record) {
  if (!record || typeof record !== 'object' || Array.isArray(record)) return null;
  if (typeof record.id !== 'string' || !record.id.trim() || typeof record.naam !== 'string' || !record.naam.trim()) return null;
  if (!Array.isArray(record.secties)) return null;
  const secties = record.secties.flatMap((passage) => {
    if (!passage || typeof passage !== 'object' || Array.isArray(passage)) return [];
    if (typeof passage.id !== 'string' || !passage.id.trim() || !Array.isArray(passage.tekst)) return [];
    const tekst = passage.tekst.filter((alinea) => typeof alinea === 'string' && alinea.trim());
    if (!tekst.length) return [];
    return [{
      id: passage.id,
      hoofdstuk: normaleTekst(passage.hoofdstuk),
      kop: normaleTekst(passage.kop),
      tekst,
      module: typeof passage.module === 'string' ? passage.module : null,
      bron: typeof passage.bron === 'string' ? passage.bron : record.naam,
    }];
  });
  if (!secties.length) return null;
  const grootte = Number(record.grootte);
  return [{
    id: record.id,
    naam: record.naam.trim(),
    datum: typeof record.datum === 'string' && !Number.isNaN(Date.parse(record.datum)) ? record.datum : new Date(0).toISOString(),
    grootte: Number.isFinite(grootte) && grootte >= 0 ? grootte : 0,
    secties,
  }];
}

function normaliseerCollectie(sleutel, waarde) {
  if (!Array.isArray(waarde)) return [];
  const gezien = new Set();
  return waarde.flatMap((record) => {
    const lijst = sleutel === SLEUTEL_VRAGEN
      ? [normaliseerVraagRecord(record)].filter(Boolean)
      : normaliseerBronRecord(record) || [];
    return lijst.filter((item) => {
      const id = sleutel === SLEUTEL_VRAGEN ? null : item.id;
      if (!id) return true;
      if (gezien.has(id)) return false;
      gezien.add(id);
      return true;
    });
  });
}

function alleenSessie(sleutel) {
  return sessieOpslag.has(sleutel);
}

function lees(sleutel) {
  if (sessieCollecties.has(sleutel)) return sessieCollecties.get(sleutel);
  try {
    const opslag = globalThis.localStorage;
    const ruw = opslag.getItem(sleutel);
    const origineel = ruw ? JSON.parse(ruw) : [];
    const data = normaliseerCollectie(sleutel, origineel);
    if (JSON.stringify(data) !== JSON.stringify(origineel)) {
      try { opslag.setItem(sleutel, JSON.stringify(data)); }
      catch {
        sessieCollecties.set(sleutel, data);
        sessieOpslag.add(sleutel);
      }
    }
    return data;
  } catch {
    sessieOpslag.add(sleutel);
    return [];
  }
}

function schrijf(sleutel, data) {
  const veilig = normaliseerCollectie(sleutel, data);
  try {
    globalThis.localStorage.setItem(sleutel, JSON.stringify(veilig));
    sessieCollecties.delete(sleutel);
    sessieOpslag.delete(sleutel);
    return { opgeslagen: true, alleenSessie: false };
  } catch {
    sessieCollecties.set(sleutel, veilig);
    sessieOpslag.add(sleutel);
    return { opgeslagen: true, alleenSessie: true };
  }
}

function wisCollectie(sleutel) {
  try {
    globalThis.localStorage.removeItem(sleutel);
    sessieCollecties.delete(sleutel);
    sessieOpslag.delete(sleutel);
  } catch {
    sessieCollecties.set(sleutel, []);
    sessieOpslag.add(sleutel);
  }
}

function opslagmelding() {
  const bronnen = alleenSessie(SLEUTEL_BRONNEN);
  const vragen = alleenSessie(SLEUTEL_VRAGEN);
  if (!bronnen && !vragen) return '';
  const wat = bronnen && vragen ? 'Bronnen en vragen' : bronnen ? 'Bronnen' : 'Vragen';
  return `<p class="bron__opslagmelding" role="status" data-vraag-opslagmelding>${wat} worden alleen in deze sessie bewaard. Ze verdwijnen als je deze sessie afsluit.</p>`;
}

export function resetVraag() {
  uploadResetGeneratie += 1;
  for (const lezer of lopendeUploads) {
    try { lezer.abort(); } catch { /* Een reeds afgeronde read hoeft niet te worden afgebroken. */ }
  }
  lopendeUploads.clear();
  for (const sleutel of [SLEUTEL_VRAGEN, SLEUTEL_BRONNEN]) wisCollectie(sleutel);
  cache = { sleutel: null, index: null };
}

export function leesVragen() {
  return lees(SLEUTEL_VRAGEN);
}

function registreer(vraag, a) {
  const lijst = leesVragen();
  lijst.push({
    tijd: new Date().toISOString(),
    vraag: vraag.slice(0, 300),
    sectie: a.sectieId || (a.zeker ? a.personen[0]?.id || null : null),
    kop: a.zeker ? a.kop : null,
    bron: a.zeker ? a.bron : null,
    antwoord: Boolean(a.zeker),
  });
  const resultaat = schrijf(SLEUTEL_VRAGEN, lijst.slice(-MAX_VRAGEN));
  return resultaat;
}

function leesUploads() {
  return lees(SLEUTEL_BRONNEN);
}

/** Alle passages: het handboek, Wie doet wat en de geüploade documenten. */
export function alleBronnen() {
  return [...metMaatwerk(HANDBOEK, nu().maatwerk), ...WIE_DOET_WAT, ...leesUploads().flatMap((b) => b.secties)];
}

// De index bouwen we opnieuw zodra er een document bij komt of af gaat.
let cache = { sleutel: null, index: null };
function huidigeIndex() {
  const sleutel = JSON.stringify(leesUploads()) + JSON.stringify(nu().maatwerk?.actief || null);
  if (cache.sleutel !== sleutel || !cache.index) cache = { sleutel, index: maakIndex(alleBronnen()) };
  return cache.index;
}

// ---------- weergave ----------

const moduleTitel = (id) => (MODULES.find((m) => m.id === id)?.titel || id).replace(/­/g, '');

function bronRegel(a, esc) {
  if (!a.bron) return '';
  const waar = a.bron === 'Handboek De Wilgenhof' && a.hoofdstuk ? `${a.bron}, hoofdstuk ${a.hoofdstuk}` : a.hoofdstuk && a.hoofdstuk !== a.bron ? `${a.bron}, ${a.hoofdstuk}` : a.bron;
  return `<p class="vraag-bron">${ICOON.boek}<span>Uit: ${esc(waar)}</span></p>`;
}

function persoonKaart(p, esc) {
  const letter = /^[A-Z]/.test(p.naam) && !/^(De|Via|Wie|Servicedesk|MIC)\b/.test(p.naam) ? p.naam.charAt(0) : '';
  return `
    <li class="vraag-persoon">
      <span class="vraag-persoon__avatar" aria-hidden="true">${letter ? esc(letter) : ICOON.mensen}</span>
      <div class="vraag-persoon__info">
        <p class="vraag-persoon__naam">${esc(p.naam)}</p>
        <p class="vraag-persoon__rol">${esc(p.rol)}${p.afdeling ? ` · ${esc(p.afdeling)}` : ''}</p>
        <dl class="vraag-persoon__gegevens">
          <div><dt>Wanneer</dt><dd>${esc(p.wanneer)}</dd></div>
          <div><dt>Bereik</dt><dd>${esc(p.bereik)}</dd></div>
        </dl>
      </div>
    </li>`;
}

function personenBlok(personen, esc, kop = 'Bij wie je terechtkunt', getoondeBron = null) {
  if (!personen?.length) return '';
  return `
    <div class="vraag-blok">
      <h4 class="vraag-blok__kop">${esc(kop)}</h4>
      <ul class="vraag-personen">${personen.map((p) => persoonKaart(p, esc)).join('')}</ul>
      ${getoondeBron === personen[0].bron ? '' : `<p class="vraag-bron">${ICOON.mensen}<span>Uit: ${esc(personen[0].bron || 'Wie doet wat (voorbeeld)')}</span></p>`}
    </div>`;
}

function modulesBlok(modules, esc) {
  if (!modules?.length) return '';
  return `
    <div class="vraag-blok">
      <h4 class="vraag-blok__kop">Oefen het in de leeromgeving</h4>
      <div class="vraag-modules">
        ${modules.map((id) => `<button type="button" class="btn btn--rand btn--klein vraag-module" data-vraag-module="${esc(id)}"><span>${esc(moduleTitel(id))}</span>${ICOON.pijl}</button>`).join('')}
      </div>
    </div>`;
}

function passage(t, esc) {
  return (t.tekst || []).map((al) => `<p>${esc(al)}</p>`).join('');
}

function meerBlok(treffers, esc, kop) {
  if (!treffers?.length) return '';
  return `
    <section class="vraag-meer" aria-label="${esc(kop)}">
      <h4 class="vraag-blok__kop">${esc(kop)}</h4>
      <ul class="vraag-meer__lijst">
        ${treffers.map((t) => `
          <li>
            <details class="vraag-meer__item">
              <summary><span class="vraag-meer__kop">${esc(t.kop)}</span><span class="vraag-meer__waar">${esc(t.bron === 'Handboek De Wilgenhof' ? t.hoofdstuk : t.bron)}</span></summary>
              <div class="vraag-meer__tekst">${passage(t, esc)}
                <p class="vraag-bron">${ICOON.boek}<span>Uit: ${esc(t.bron)}${t.hoofdstuk && t.hoofdstuk !== t.bron ? `, ${t.bron === 'Handboek De Wilgenhof' ? 'hoofdstuk ' : ''}${esc(t.hoofdstuk)}` : ''}</span></p>
                ${t.module ? `<button type="button" class="linkknop" data-vraag-module="${esc(t.module)}">Oefen dit: ${esc(moduleTitel(t.module))}</button>` : ''}
              </div>
            </details>
          </li>`).join('')}
      </ul>
    </section>`;
}

function antwoordHtml(vraag, a, esc, index, { alleenSessie: vraagAlleenSessie = false } = {}) {
  if (!a.zeker) {
    const saveMessage = vraagAlleenSessie ? 'Je vraag blijft alleen in deze sessie bewaard.' : 'Je vraag is bewaard.';
    return `
      <article class="vraag-antwoord vraag-antwoord--open" tabindex="-1" data-vraag-antwoord>
        <p class="vraag-antwoord__label">${ICOON.open}<span>Geen passend antwoord gevonden</span></p>
        <h3 class="vraag-antwoord__vraag">${esc(vraag)}</h3>
        <p class="vraag-antwoord__tekst">${esc(a.tekst)} ${saveMessage} Zo kun je controleren of de informatie ontbreekt of lastig te vinden is.</p>
        <p>Kun je door een probleem niet verder werken? Bel dan de servicedesk op toestel 2140.</p>
        ${personenBlok(a.personen, esc, 'Je key-user')}
      </article>
      ${meerBlok(a.treffers, esc, 'Misschien helpt dit')}`;
  }
  const sectie = a.sectieId ? index.docs.find((d) => d.item.id === a.sectieId)?.item : null;
  return `
    <article class="vraag-antwoord" tabindex="-1" data-vraag-antwoord>
      <p class="vraag-antwoord__label">${ICOON.vink}<span>Antwoord</span></p>
      <h3 class="vraag-antwoord__vraag">${esc(a.kop)}</h3>
      <blockquote class="vraag-antwoord__tekst"><p>${esc(a.tekst)}</p></blockquote>
      ${bronRegel(a, esc)}
      ${sectie ? `<details class="vraag-heel"><summary>Lees het hele stuk</summary><div class="vraag-heel__tekst">${passage(sectie, esc)}</div></details>` : ''}
      ${personenBlok(a.personen, esc, 'Bij wie je terechtkunt', a.bron)}
      ${modulesBlok(a.modules, esc)}
    </article>
    ${meerBlok(a.treffers, esc, 'Ook gevonden')}`;
}

let teller = 0;

/**
 * Het zoekveld "Vraag het" voor de medewerker.
 * @param {HTMLElement} container
 * @param {{esc?: Function, beginVraag?: string|Function, naarModule?: Function}} opties
 *   beginVraag: een vraag om meteen te stellen (tekst), of een functie die bij elke vraag de vraag krijgt.
 *   naarModule: wordt aangeroepen met een module-id als iemand op "oefen" klikt.
 */
export function mountVraag(container, { esc = escStandaard, beginVraag, naarModule } = {}) {
  if (!container) return null;
  const nr = ++teller;
  container.innerHTML = `
    <section class="vraag-het" aria-labelledby="vraag-kop-${nr}">
      <form class="vraag-het__form" role="search" data-vraag-form>
        <label class="vraag-het__label" id="vraag-kop-${nr}" for="vraag-veld-${nr}">Stel je vraag of zoek in het handboek</label>
        <div class="vraag-het__rij">
          <input class="vraag-het__veld" id="vraag-veld-${nr}" name="vraag" type="search" autocomplete="off" enterkeyhint="search" maxlength="200"
            placeholder="Bijvoorbeeld: bij wie meld ik een val?" data-vraag-veld>
          <button type="submit" class="btn btn--merk vraag-het__knop">${ICOON.zoek}<span>Zoek</span></button>
        </div>
      </form>
      <div class="vraag-het__voorbeelden" role="group" aria-label="Voorbeeldvragen">
        ${VOORBEELDVRAGEN.map((v) => `<button type="button" class="chip" data-vraag-voorbeeld="${esc(v)}">${esc(v)}</button>`).join('')}
      </div>
      <div class="vraag-het__uitkomst" aria-live="polite" data-vraag-uitkomst></div>
    </section>`;

  const veld = container.querySelector('[data-vraag-veld]');
  const uitkomst = container.querySelector('[data-vraag-uitkomst]');

  function stel(vraag, { focus = true } = {}) {
    const v = String(vraag || '').trim();
    if (!v) {
      uitkomst.innerHTML = '<p class="vraag-het__leeg">Typ eerst je vraag, of kies een voorbeeld.</p>';
      veld.focus();
      return;
    }
    if (detecteerPersoonsgegevens(v).length) {
      veld.value = '';
      uitkomst.innerHTML = `<article class="vraag-antwoord vraag-antwoord--open" tabindex="-1" data-vraag-antwoord><p class="vraag-antwoord__label">${ICOON.let}<span>Zoeken gestopt</span></p><p class="vraag-antwoord__tekst">Deze tekst bevat patronen die op persoonsgegevens kunnen lijken. Verwijder die gegevens en probeer het opnieuw. Deze controle is een hulpmiddel en herkent niet alle persoonsgegevens.</p><p>Bij een inhoudelijke vraag kun je terecht bij de key-user van je afdeling.</p></article>`;
      if (focus) uitkomst.querySelector('[data-vraag-antwoord]')?.focus({ preventScroll: true });
      return { geblokkeerd: true };
    }
    veld.value = v;
    const index = huidigeIndex();
    const a = antwoord(index, v, { afdeling: MEDEWERKER.afdeling });
    const opgeslagen = registreer(v, a);
    uitkomst.innerHTML = antwoordHtml(v, a, esc, index, { alleenSessie: opgeslagen.alleenSessie });
    if (a.zeker && opgeslagen.alleenSessie) {
      uitkomst.insertAdjacentHTML('beforeend', opslagmelding());
    }
    if (typeof beginVraag === 'function') beginVraag(v, a);
    if (focus) uitkomst.querySelector('[data-vraag-antwoord]')?.focus({ preventScroll: true });
    uitkomst.querySelector('[data-vraag-antwoord]')?.scrollIntoView?.({ block: 'nearest', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }

  container.addEventListener('submit', (e) => {
    if (!e.target.closest('[data-vraag-form]')) return;
    e.preventDefault();
    stel(veld.value);
  });

  container.addEventListener('click', (e) => {
    const voorbeeld = e.target.closest('[data-vraag-voorbeeld]');
    if (voorbeeld) { stel(voorbeeld.dataset.vraagVoorbeeld); return; }
    const mod = e.target.closest('[data-vraag-module]');
    if (mod) {
      const id = mod.dataset.vraagModule;
      if (typeof naarModule === 'function') naarModule(id);
      else location.hash = `#/module/${id}`;
    }
  });

  if (typeof beginVraag === 'string' && beginVraag.trim()) stel(beginVraag, { focus: false });
  return { stel };
}

// ---------- beheercentrum ----------

function datum(iso, metTijd = false) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  const dag = d.toLocaleDateString('nl-NL', { day: 'numeric', month: 'short', year: metTijd ? undefined : 'numeric' });
  if (!metTijd) return dag;
  return `${dag}, ${String(d.getHours()).padStart(2, '0')}.${String(d.getMinutes()).padStart(2, '0')} uur`;
}

function grootte(bytes) {
  return bytes < 1024 ? `${bytes} bytes` : `${Math.round(bytes / 1024)} kB`;
}

/**
 * De bronnen en het vragenregister, voor het beheercentrum.
 * @param {HTMLElement} container
 * @param {{esc?: Function, meld?: Function}} opties meld(tekst) toont een korte melding
 */
export function mountBronnen(container, { esc = escStandaard, meld = () => {} } = {}) {
  if (!container) return null;
  const nr = ++teller;
  let destroyed = false;
  let uploadVolgnummer = 0;
  const readers = new Set();
  const nieuwstePerNaam = new Map();
  const hashBijMount = globalThis.location?.hash || '';

  const isConnected = () => !destroyed && container.isConnected && (globalThis.location?.hash || '') === hashBijMount;

  function verwijderLezer(lezer) {
    readers.delete(lezer);
    lopendeUploads.delete(lezer);
  }

  function render() {
    const uploads = leesUploads();
    const vragen = leesVragen().slice().reverse();
    const zonder = vragen.filter((v) => !v.antwoord).length;
    const toon = vragen.slice(0, 50);
    const voorbeelden = HANDBOEK.flatMap(({ kop, tekst }) => tekst.flatMap((alinea) =>
      (alinea.match(/[^.!?]*\?/g) || []).map((vraag) => ({ vraag: vraag.trim(), kop }))))
      .slice(0, 4);

    container.innerHTML = `
      <section class="bronnen" aria-labelledby="bronnen-kop-${nr}">
        <div class="tabelkop">
          <div>
            <p class="bovenregel bovenregel--merk">Vraag het</p>
            <h2 id="bronnen-kop-${nr}">Bronnen</h2>
          </div>
          <label class="btn btn--rand btn--klein bronnen__upload">
            ${ICOON.plus}<span>Document toevoegen</span>
            <input class="sr" type="file" accept=".txt,.md,.markdown,text/plain,text/markdown" data-vraag-upload>
          </label>
        </div>
        <p class="bronnen__uitleg">In deze demo zoek je in deze voorbeeldbronnen. Voeg alleen verzonnen testtekst toe. Je kunt een .txt- of .md-bestand toevoegen, tot 200 kB. Elke kop wordt een eigen stuk tekst.</p>
        ${opslagmelding()}
        <ul class="bronnen__lijst">
          <li class="bron">
            <span class="bron__icoon" aria-hidden="true">${ICOON.boek}</span>
            <div class="bron__info">
              <p class="bron__naam">Handboek De Wilgenhof</p>
              <p class="bron__meta">${HANDBOEK.length} stukken tekst · werkafspraken per onderwerp</p>
            </div>
            <span class="bron__labels"><span class="bron__label">Voorbeeldbron</span><span class="bron__status">${ICOON.vink}beschikbaar</span></span>
          </li>
          <li class="bron">
            <span class="bron__icoon" aria-hidden="true">${ICOON.mensen}</span>
            <div class="bron__info">
              <p class="bron__naam">Wie doet wat</p>
              <p class="bron__meta">${WIE_DOET_WAT.length} personen en rollen · key-users, EVV'ers, servicedesk</p>
            </div>
            <span class="bron__labels"><span class="bron__label">Voorbeeldbron</span><span class="bron__status">${ICOON.vink}beschikbaar</span></span>
          </li>
          ${uploads.map((b) => `
          <li class="bron">
            <span class="bron__icoon" aria-hidden="true">${ICOON.bestand}</span>
            <div class="bron__info">
              <p class="bron__naam">${esc(b.naam)}</p>
              <p class="bron__meta">${b.secties.length} ${b.secties.length === 1 ? 'stuk' : 'stukken'} tekst · ${esc(grootte(b.grootte || 0))} · toegevoegd op ${esc(datum(b.datum))}</p>
            </div>
            <span class="bron__labels"><span class="bron__label bron__label--eigen">Geüpload</span>
              <button type="button" class="btn btn--stil bron__weg" data-vraag-verwijder="${esc(b.id)}">Verwijder<span class="sr"> ${esc(b.naam)}</span></button>
            </span>
          </li>`).join('')}
        </ul>

        <div class="tabelkop bronnen__registerkop">
          <h2>Wat medewerkers vroegen</h2>
          <p class="bronnen__telling">${vragen.length} ${vragen.length === 1 ? 'vraag' : 'vragen'}, waarvan ${zonder} zonder antwoord</p>
        </div>
        <p class="bronnen__uitleg">Geen antwoord gevonden? Controleer of de informatie ontbreekt of lastig te vinden is. Vul het handboek zo nodig aan.</p>
        ${toon.length ? `
        <div class="tabelwrap">
          <table class="tabel tabel--kaarten bronnen__tabel">
            <thead><tr><th scope="col">Vraag</th><th scope="col">Tijd</th><th scope="col">Antwoord</th><th scope="col">Gevonden in</th></tr></thead>
            <tbody>
              ${toon.map((v) => `
              <tr class="${v.antwoord ? '' : 'is-open'}">
                <th scope="row">${esc(v.vraag)}</th>
                <td data-label="Tijd">${esc(datum(v.tijd, true))}</td>
                <td data-label="Antwoord"><span class="bronnen__antwoord ${v.antwoord ? 'is-ja' : 'is-nee'}">${v.antwoord ? ICOON.vink : ICOON.open}${v.antwoord ? 'Ja' : 'Nee'}</span></td>
                <td data-label="Gevonden in" class="tabel__breed">${v.kop ? esc(v.kop) : 'Nog niet in het handboek'}</td>
              </tr>`).join('')}
            </tbody>
          </table>
        </div>
        ${vragen.length > toon.length ? `<p class="opmerking">Je ziet de laatste ${toon.length} vragen.</p>` : ''}` : `<p class="bronnen__leeg">Er zijn nog geen medewerkersvragen geregistreerd. Deze voorbeelden zijn zinnen uit het handboek, geen gebruiksregistraties.</p>
          <ul class="bronnen__voorbeelden">${voorbeelden.map((voorbeeld) => `<li><span>${esc(voorbeeld.vraag)}</span><small>Uit: ${esc(voorbeeld.kop)}</small></li>`).join('')}</ul>`}
      </section>`;
  }

  function voegToe(bestand) {
    if (!isConnected()) return;
    const naam = bestand.name || 'Document';
    const basis = naam.replace(/\.[^.]+$/, '');
    const token = ++uploadVolgnummer;
    nieuwstePerNaam.set(basis, token);
    if (!/\.(txt|md|markdown)$/i.test(naam)) {
      meld('Je kunt alleen een .txt- of .md-bestand toevoegen.');
      return;
    }
    if (bestand.size > MAX_BESTAND) {
      meld(`${naam} is ${grootte(bestand.size)}. Dat is te groot, het mag tot 200 kB zijn. Knip het op in kleinere delen.`);
      return;
    }
    const resetGeneratie = uploadResetGeneratie;
    const lezer = new FileReader();
    readers.add(lezer);
    lopendeUploads.add(lezer);
    const actueel = () => isConnected()
      && resetGeneratie === uploadResetGeneratie
      && nieuwstePerNaam.get(basis) === token;
    lezer.onerror = () => {
      verwijderLezer(lezer);
      if (actueel()) meld(`${naam} kon niet worden gelezen. Probeer het nog een keer.`);
    };
    lezer.onload = () => {
      verwijderLezer(lezer);
      if (!actueel()) return;
      const tekst = String(lezer.result || '');
      if (tekst.includes('\uFFFD') || /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(tekst)) {
        meld(`${naam} bevat tekst die niet betrouwbaar als UTF-8 kan worden gelezen. Controleer het bestand en probeer het opnieuw.`);
        return;
      }
      const secties = leesDocument(tekst, naam);
      if (!secties.length) {
        meld(`In ${naam} staat geen tekst die we kunnen gebruiken.`);
        return;
      }
      const uploads = leesUploads();
      const id = `upload-${Date.now().toString(36)}-${nr.toString(36)}-${token.toString(36)}`;
      const bron = { id, naam: basis, datum: new Date().toISOString(), grootte: bestand.size, secties: secties.map((s) => ({ ...s, id: `${id}-${s.id}` })) };
      const zelfde = uploads.findIndex((b) => b.naam === basis);
      if (zelfde >= 0) uploads.splice(zelfde, 1, bron); else uploads.push(bron);
      const opslag = schrijf(SLEUTEL_BRONNEN, uploads);
      render();
      meld(`${basis} is toegevoegd, met ${secties.length} ${secties.length === 1 ? 'stuk' : 'stukken'} tekst. Je vindt het nu bij Vraag het in deze browser.${opslag.alleenSessie ? ' Deze bron wordt alleen in deze sessie bewaard.' : ''}`);
    };
    lezer.onabort = () => verwijderLezer(lezer);
    lezer.readAsText(bestand);
  }

  function handleChange(e) {
    if (!isConnected()) return;
    const input = e.target.closest('[data-vraag-upload]');
    if (!input) return;
    const [bestand] = input.files || [];
    input.value = '';
    if (bestand) voegToe(bestand);
  }

  function handleClick(e) {
    if (!isConnected()) return;
    const weg = e.target.closest('[data-vraag-verwijder]');
    if (!weg) return;
    const id = weg.dataset.vraagVerwijder;
    const uploads = leesUploads();
    const bron = uploads.find((b) => b.id === id);
    if (!bron) return;
    nieuwstePerNaam.set(bron.naam, ++uploadVolgnummer);
    const opslag = schrijf(SLEUTEL_BRONNEN, uploads.filter((b) => b.id !== id));
    render();
    meld(`${bron.naam} is verwijderd. Vraag het zoekt er in deze browser niet meer in.${opslag.alleenSessie ? ' De bronnenlijst wordt alleen in deze sessie bewaard.' : ''}`);
    container.querySelector('[data-vraag-upload]')?.focus();
  }

  container.addEventListener('change', handleChange);
  container.addEventListener('click', handleClick);

  render();
  return {
    render,
    destroy() {
      if (destroyed) return;
      destroyed = true;
      container.removeEventListener('change', handleChange);
      container.removeEventListener('click', handleClick);
      for (const lezer of readers) {
        try { lezer.abort(); } catch { /* Abort is best effort; generation checks remain authoritative. */ }
        lopendeUploads.delete(lezer);
      }
      readers.clear();
      nieuwstePerNaam.clear();
    },
  };
}
