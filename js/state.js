// De demo onthoudt alles in de browser. Als opslag ontbreekt, blijft de sessiestand werken.
import { DELEN, HUISSTIJL_VOORBEELDEN, MODULES, PROFIELEN, TOEWIJZING, TIPS } from './data.js';
import { analyseerBron, BRONNEN, beginMaatwerk } from './maatwerk.js';

const SLEUTEL = 'leeromgeving-demo-v1';
const MAX_OPSLAGTEKENS = 2_000_000;
const MAX_DAGEN = 3660;
const MAX_LOGO_TEKENS = 410_000;
const MAX_BRON_BYTES = 200 * 1024;
const STATUSES = new Set(['bezig', 'klaar']);
const ROLLEN = new Set(['medewerker', 'opleider', 'beheer']);
const MODULE_IDS = MODULES.map(({ id }) => id);
const MODULE_ID_SET = new Set(MODULE_IDS);
const SCORE_IDS = new Set(MODULES.filter(({ toets }) => toets).map(({ id }) => id));
const BADGE_IDS = new Set(DELEN.map(({ id }) => id));
const KLEUR_IDS = new Set(['paneel', 'merk', 'actie', 'zacht', 'grond', 'tekst', 'vlak2', 'signaal']);
const VOORBEELD_IDS = new Set(HUISSTIJL_VOORBEELDEN.map(({ id }) => id));
const DATUM = /^\d{4}-\d{2}-\d{2}$/;
const KLEUR = /^#[0-9a-f]{6}$/i;

function leeg() {
  return {
    rol: null,
    welkomGezien: false,
    rondleidingKlaar: false,
    voortgang: {},
    scores: {},
    metingen: {},
    laatst: null,
    dagen: [],
    gevierd: [],
    toewijzing: { vig: [...TOEWIJZING.vig], helpende: [...TOEWIJZING.helpende] },
    huisstijl: { voorbeeld: 'onsopmaat', kleuren: {}, logo: null, naam: 'De Wilgenhof' },
  };
}

let staat = leeg();

function record(waarde) {
  return waarde !== null && typeof waarde === 'object' && !Array.isArray(waarde);
}

function eigen(waarde, sleutel) {
  return record(waarde) && Object.hasOwn(waarde, sleutel);
}

function echteDatum(waarde) {
  if (typeof waarde !== 'string' || !DATUM.test(waarde)) return false;
  const datum = new Date(`${waarde}T00:00:00.000Z`);
  return Number.isFinite(datum.getTime()) && datum.toISOString().slice(0, 10) === waarde;
}

function tekst(waarde, max, { leegToestaan = false, regelsToestaan = false } = {}) {
  if (typeof waarde !== 'string' || waarde.length > max) return null;
  if (!leegToestaan && !waarde.trim()) return null;
  if (/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(waarde)) return null;
  if (!regelsToestaan && /[\r\n\t]/.test(waarde)) return null;
  for (let i = 0; i < waarde.length; i += 1) {
    const code = waarde.charCodeAt(i);
    if (code >= 0xd800 && code <= 0xdbff) {
      const volgende = waarde.charCodeAt(i + 1);
      if (!(volgende >= 0xdc00 && volgende <= 0xdfff)) return null;
      i += 1;
    } else if (code >= 0xdc00 && code <= 0xdfff) return null;
  }
  return waarde;
}

function boundedInteger(waarde, minimum, maximum) {
  return Number.isSafeInteger(waarde) && waarde >= minimum && waarde <= maximum ? waarde : null;
}

function bronTekst(waarde) {
  const schoon = tekst(waarde, MAX_BRON_BYTES, { regelsToestaan: true });
  if (schoon === null || new TextEncoder().encode(schoon).length > MAX_BRON_BYTES) return null;
  return schoon;
}

function normaliseerBron(waarde) {
  if (!record(waarde)) return null;
  const naam = tekst(waarde.naam, 255);
  const hoofdstuk = tekst(waarde.hoofdstuk, 300);
  const inhoud = bronTekst(waarde.tekst);
  const versie = waarde.versie === 'eigen' || boundedInteger(waarde.versie, 1, 2) !== null ? waarde.versie : null;
  if (!naam || !hoofdstuk || inhoud === null || versie === null) return null;
  const schoon = { versie, naam, hoofdstuk, tekst: inhoud };
  if (versie === 'eigen') return schoon;
  return BRONNEN.some((bron) => bron.versie === versie
    && bron.naam === naam && bron.hoofdstuk === hoofdstuk && bron.tekst === inhoud) ? schoon : null;
}

function normaliseerPassage(waarde) {
  if (!record(waarde)) return null;
  const id = tekst(waarde.id, 80);
  const inhoud = tekst(waarde.tekst, 2000, { regelsToestaan: true });
  const plek = tekst(waarde.plek, 200);
  const regel = boundedInteger(waarde.regel, 1, 10_000);
  if (!id || !inhoud || !plek || regel === null) return null;
  return { id, tekst: inhoud, plek, regel };
}

function normaliseerMaatwerk(waarde) {
  if (!record(waarde)) return beginMaatwerk();
  const bron = normaliseerBron(waarde.bron) || beginMaatwerk().bron;
  const canonical = analyseerBron(bron);
  const voorstellen = Array.isArray(waarde.voorstellen)
    ? waarde.voorstellen.slice(0, 20).map(normaliseerPassage).filter(Boolean)
    : [];
  const voorstellenGeldig = voorstellen.length === 0
    || (canonical.length > 0 && JSON.stringify(voorstellen) === JSON.stringify(canonical));
  const veiligeVoorstellen = voorstellenGeldig ? voorstellen : [];
  const akkoord = Array.isArray(waarde.akkoord)
    ? [...new Set(waarde.akkoord.filter((id) => typeof id === 'string' && veiligeVoorstellen.some((v) => v.id === id)))].slice(0, 20)
    : [];

  let actief = null;
  if (record(waarde.actief)) {
    const actieveBron = normaliseerBron(waarde.actief.bron);
    const afspraken = Array.isArray(waarde.actief.afspraken)
      ? waarde.actief.afspraken.slice(0, 20).map(normaliseerPassage).filter(Boolean)
      : [];
    const actieveVoorstellen = actieveBron ? analyseerBron(actieveBron) : [];
    if (actieveBron?.versie !== 'eigen' && actieveVoorstellen.length > 0
      && afspraken.length === actieveVoorstellen.length
      && JSON.stringify(afspraken) === JSON.stringify(actieveVoorstellen)) {
      actief = { bron: actieveBron, afspraken };
    }
  }

  let stap = boundedInteger(waarde.stap, 0, 4) ?? 0;
  if (stap > 1 && veiligeVoorstellen.length === 0) stap = 1;
  if (stap > 2 && !actief) stap = 2;
  const antwoorden = new Set(['los', 'doel', 'doel-actie']);
  return {
    stap,
    bron,
    voorstellen: veiligeVoorstellen,
    akkoord,
    actief,
    antwoord: actief && antwoorden.has(waarde.antwoord) ? waarde.antwoord : null,
    fout: tekst(waarde.fout, 500, { leegToestaan: true, regelsToestaan: true }) ?? '',
    gewijzigd: waarde.gewijzigd === true,
  };
}

function normaliseerMoment(waarde) {
  if (!record(waarde)) return null;
  const sec = boundedInteger(waarde.sec, 0, 10_000_000);
  const fouten = boundedInteger(waarde.fouten, 0, 1_000_000);
  const hints = boundedInteger(waarde.hints, 0, 1_000_000);
  if (sec === null || fouten === null || hints === null || !echteDatum(waarde.datum)) return null;
  return { sec, fouten, hints, datum: waarde.datum };
}

function normaliseerMeting(waarde) {
  if (!record(waarde)) return null;
  const eerste = normaliseerMoment(waarde.eerste);
  const laatste = normaliseerMoment(waarde.laatste);
  const keer = boundedInteger(waarde.keer, 1, 1_000_000);
  if (!eerste || !laatste || keer === null) return null;
  return { eerste, laatste, keer };
}

function normaliseerMap(bron, toegestaneKeys, schoonmaak) {
  const resultaat = {};
  if (!record(bron)) return resultaat;
  for (const sleutel of toegestaneKeys) {
    if (!eigen(bron, sleutel)) continue;
    const schoon = schoonmaak(bron[sleutel]);
    if (schoon !== null && schoon !== undefined) resultaat[sleutel] = schoon;
  }
  return resultaat;
}

function normaliseerDagen(waarde) {
  if (!Array.isArray(waarde)) return [];
  return [...new Set(waarde.filter(echteDatum))].sort().slice(-MAX_DAGEN);
}

function normaliseerToewijzing(waarde, standaard) {
  const resultaat = {};
  for (const profiel of Object.keys(PROFIELEN)) {
    const lijst = eigen(waarde, profiel) ? waarde[profiel] : null;
    if (!Array.isArray(lijst)) {
      resultaat[profiel] = [...standaard[profiel]];
      continue;
    }
    const uniek = new Set(lijst.filter((id) => MODULE_ID_SET.has(id)));
    resultaat[profiel] = MODULE_IDS.filter((id) => uniek.has(id));
  }
  return resultaat;
}

function normaliseerHuisstijl(waarde, standaard) {
  if (!record(waarde)) return standaard;
  const kleuren = {};
  if (record(waarde.kleuren)) {
    for (const sleutel of KLEUR_IDS) {
      const kleur = waarde.kleuren[sleutel];
      if (typeof kleur === 'string' && kleur.length <= 7 && KLEUR.test(kleur)) kleuren[sleutel] = kleur.toUpperCase();
    }
  }

  let logo = null;
  if (waarde.logo === 'wilg') logo = 'wilg';
  else if (typeof waarde.logo === 'string' && waarde.logo.length <= MAX_LOGO_TEKENS
    && /^data:image\/(?:png|jpeg|webp|svg\+xml);base64,[a-z0-9+/]*={0,2}$/i.test(waarde.logo)) logo = waarde.logo;

  return {
    voorbeeld: waarde.voorbeeld === null ? null : VOORBEELD_IDS.has(waarde.voorbeeld) ? waarde.voorbeeld : standaard.voorbeeld,
    kleuren,
    logo,
    naam: tekst(waarde.naam, 40)?.trim() || standaard.naam,
  };
}

function normaliseer(waarde) {
  const standaard = leeg();
  const invoer = record(waarde) ? waarde : {};
  const staatNieuw = {
    ...standaard,
    rol: invoer.rol === null || ROLLEN.has(invoer.rol) ? invoer.rol : null,
    welkomGezien: invoer.welkomGezien === true,
    rondleidingKlaar: invoer.rondleidingKlaar === true,
    voortgang: normaliseerMap(invoer.voortgang, MODULE_IDS, (status) => STATUSES.has(status) ? status : null),
    scores: normaliseerMap(invoer.scores, SCORE_IDS, (score) => boundedInteger(score, 0, 100)),
    metingen: normaliseerMap(invoer.metingen, MODULE_IDS.filter((id) => id !== 'rondleiding'), normaliseerMeting),
    laatst: MODULE_ID_SET.has(invoer.laatst) ? invoer.laatst : null,
    dagen: normaliseerDagen(invoer.dagen),
    gevierd: Array.isArray(invoer.gevierd)
      ? [...new Set(invoer.gevierd.filter((id) => BADGE_IDS.has(id)))].slice(0, BADGE_IDS.size)
      : [],
    toewijzing: normaliseerToewijzing(invoer.toewijzing, standaard.toewijzing),
    huisstijl: normaliseerHuisstijl(invoer.huisstijl, standaard.huisstijl),
  };

  const filters = new Set(['alle', 'vig', 'helpende', 'achter']);
  if (filters.has(invoer.filter)) staatNieuw.filter = invoer.filter;
  if (boundedInteger(invoer.tip, 0, TIPS.length - 1) !== null) staatNieuw.tip = invoer.tip;
  if (eigen(invoer, 'maatwerk')) staatNieuw.maatwerk = normaliseerMaatwerk(invoer.maatwerk);
  return staatNieuw;
}

export function laad() {
  staat = leeg();
  let ruw;
  try {
    if (typeof window === 'undefined') return staat;
    ruw = window.localStorage.getItem(SLEUTEL);
  } catch {
    return staat;
  }
  if (!ruw) return staat;
  if (typeof ruw !== 'string' || ruw.length > MAX_OPSLAGTEKENS) return staat;

  let gelezen;
  try {
    gelezen = JSON.parse(ruw);
  } catch {
    return staat;
  }
  staat = normaliseer(gelezen);
  const genormaliseerd = JSON.stringify(staat);
  if (genormaliseerd !== ruw) {
    try { window.localStorage.setItem(SLEUTEL, genormaliseerd); } catch { /* De sessiestand blijft bruikbaar. */ }
  }
  return staat;
}

export function bewaar() {
  try {
    if (typeof window === 'undefined') return false;
    const ruw = JSON.stringify(staat);
    if (ruw.length > MAX_OPSLAGTEKENS) return false;
    window.localStorage.setItem(SLEUTEL, ruw);
    return true;
  } catch {
    // Een privévenster of volle opslag mag de huidige sessie niet blokkeren.
    return false;
  }
}

export function zet(wijziging) {
  if (!record(wijziging)) return staat;
  const toegestaan = {};
  const velden = new Set([
    'rol', 'welkomGezien', 'rondleidingKlaar', 'voortgang', 'scores', 'metingen', 'laatst',
    'dagen', 'gevierd', 'toewijzing', 'huisstijl', 'maatwerk', 'filter', 'tip',
  ]);
  for (const sleutel of Object.keys(wijziging)) {
    if (velden.has(sleutel)) toegestaan[sleutel] = wijziging[sleutel];
  }
  staat = normaliseer({ ...staat, ...toegestaan });
  bewaar();
  return staat;
}

export function nu() {
  return staat;
}

export function opnieuw() {
  const huisstijl = normaliseer(staat).huisstijl;
  staat = normaliseer({ ...leeg(), huisstijl });
  bewaar();
  return staat;
}
