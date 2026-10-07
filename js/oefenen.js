// Vrije oefenomgeving in Nedap ONS Dossier. De medewerker klikt overal rond, er kan niets kapot.
// Elk scherm is nagebouwd naar een schermafdruk uit de testomgeving (kennisbank, middelen/ons-schermen).
// Waar geen afdruk van is, laten we weg of tonen we de lege staat zoals ONS die toont.
// Alle cliënten zijn verzonnen. De enige medewerker in beeld is Sanne Visser.
// Event listeners hangen aan de container en luisteren op data-oefen, niet op data-actie (dat is van app.js).

const SLEUTEL = 'leeromgeving-oefenen-v1';
const MEDEWERKER = 'Sanne Visser';

// ---------- teksten van Ons Op Maat (opdrachten en meldingen) ----------

export const TEKSTEN = {
  kop: 'Oefenen in Nedap ONS',
  intro: 'Klik overal rond. Er kan niets kapot. Wat je hier doet, komt niet in een echt dossier.',
  opdrachten: [
    { id: 'a', tekst: 'Zoek cliënt J de Vries en open het dossier.' },
    { id: 'b', tekst: 'Lees het zorgplan van J de Vries.', tip: 'Tip: klik bij het concept zorgplan op Wijzigen.' },
    { id: 'c', tekst: 'Schrijf een rapportage bij J de Vries en sla hem op.' },
    { id: 'd', tekst: 'Zoek in Cliëntnetwerk wie de eerste contactpersoon van J de Vries is.', vraag: 'Wie is het?' },
  ],
  opnieuw: 'Begin opnieuw',
  niet: 'Dit deel zit niet in de oefenomgeving. Kies iets anders.',
  module: 'Deze module zit niet in de oefenomgeving. Je oefent hier in Dossier.',
  type: 'Kies hier SOEP. Een gewone rapportage maak je met het tweede icoon bovenaan.',
  klaar: 'Opdracht gedaan. Goed bezig.',
  alles: 'Je hebt alle opdrachten gedaan. Klik gerust nog verder rond.',
  iceFout: 'Dat klopt nog niet. Kijk bij Persoonlijke contacten in Cliëntnetwerk.',
  reset: 'Je begint opnieuw. Alles staat weer zoals het was.',
  doel: 'Het doel staat nu in het zorgplan. Dat blijft alleen in deze oefening.',
};
const ICE_KEUZES = ['K de Vries', 'P de Vries', MEDEWERKER];
const ICE_GOED = 'P de Vries';

// ---------- testdata ----------

const LABELS = {
  benadering: { tekst: 'Benaderingsplan', kleur: 'oranje', icoon: 'hand' },
  besmetting: { tekst: 'Besmettingsgevaar', kleur: 'oranje', icoon: 'zon' },
  geenzorg: { tekst: 'Geen actieve zorgopname', kleur: 'blauw', icoon: 'zandloper' },
};

export const CLIENTEN = [
  {
    id: 'tt', naam: 'T Tester', nummer: '12345', status: 'geen', labels: ['benadering', 'besmetting', 'geenzorg'],
    episode: { start: '08-09-2026', titel: 'Testepisode e-learning: ontbijt' },
    rapportages: [
      { soort: 'vrij', auteur: MEDEWERKER, datum: '08-09-2026', tijd: '15:46:12', tekst: 'Tweede testregistratie voor e-learning: ontbijt. Uitsluitend oefentekst voor de zoekfunctie.' },
      { soort: 'vrij', auteur: MEDEWERKER, datum: '08-09-2026', tijd: '15:41:03', tekst: 'Testregistratie om het koppelen aan een episode te oefenen.' },
    ],
    contacten: [], ice: null,
    plan: [{ domein: 'A - Mijn Verhaal en Mijn Wensen', onderwerp: 'Mijn Verhaal en Mijn Wensen', antwoord: 'x', doelen: [] }],
  },
  {
    id: 'jdv', naam: 'J de Vries', nummer: '20417', status: 'geen', labels: ['benadering', 'geenzorg'],
    episode: { start: '01-10-2026', titel: 'Valrisico na verhuizing' },
    rapportages: [
      { soort: 'vrij', auteur: MEDEWERKER, datum: '06-10-2026', tijd: '21:12:40', tekst: 'Meneer heeft goed gegeten. Hij liep met de rollator naar de huiskamer. Geen klachten.' },
      { soort: 'vrij', auteur: MEDEWERKER, datum: '05-10-2026', tijd: '08:31:05', tekst: 'Meneer was vanochtend onrustig. Na een kop koffie en een praatje werd hij rustiger.' },
    ],
    contacten: [
      { naam: 'P de Vries', relatie: 'Dochter', ice: true },
      { naam: 'K de Vries', relatie: 'Zoon', ice: false },
    ],
    ice: 'P de Vries',
    plan: [
      {
        domein: 'A - Mijn Verhaal en Mijn Wensen', onderwerp: 'Mijn Verhaal en Mijn Wensen',
        antwoord: 'Meneer wil zelf kiezen hoe laat hij opstaat. Hij leest graag de krant bij de koffie.',
        doelen: [{ doel: "Ondersteuning volgens 'Mijn Verhaal en Mijn Wensen'.", actie: 'Vraag elke ochtend hoe laat meneer wil opstaan.' }],
      },
      {
        domein: 'D - Mijn Gezondheid', onderwerp: 'Mijn Gezondheid - Persoonlijke zorg',
        antwoord: 'Ja, ik heb hulp nodig bij wassen en aankleden.',
        doelen: [{ doel: "Ondersteuning volgens 'Persoonlijke zorg'.", actie: 'Help bij wassen en aankleden. Meneer doet zelf zijn gezicht en handen.' }],
      },
    ],
  },
  {
    id: 'ab', naam: 'A Bakker', nummer: '20388', status: 'geen', labels: ['geenzorg'],
    episode: { start: '14-09-2026', titel: 'Wondzorg linkerbeen' },
    rapportages: [{ soort: 'vrij', auteur: MEDEWERKER, datum: '06-10-2026', tijd: '10:05:51', tekst: 'Wond verzorgd volgens het plan. Wond is rustig.' }],
    contacten: [], ice: null,
    plan: [{ domein: 'A - Mijn Verhaal en Mijn Wensen', onderwerp: 'Mijn Verhaal en Mijn Wensen', antwoord: 'Mevrouw wil graag zo lang mogelijk zelf blijven koken.', doelen: [] }],
  },
  {
    id: 'mj', naam: 'M Jansen', nummer: '19962', status: 'uit', labels: [],
    episode: { start: '02-06-2026', titel: 'Herstel na heupoperatie' },
    rapportages: [{ soort: 'vrij', auteur: MEDEWERKER, datum: '30-09-2026', tijd: '16:20:00', tekst: 'Laatste dag in zorg. Mevrouw gaat weer zelfstandig naar huis.' }],
    contacten: [], ice: null,
    plan: [{ domein: 'A - Mijn Verhaal en Mijn Wensen', onderwerp: 'Mijn Verhaal en Mijn Wensen', antwoord: 'x', doelen: [] }],
  },
];

const norm = (t) => String(t ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();

// Pure zoekfunctie: op naam (zonder hoofdletters en accenten, ook zonder spaties) of op cliëntnummer.
// `statussen` is een lijst als ['uit', 'geen']. Leeg betekent: alle statussen.
export function filterClienten(zoek = '', statussen = []) {
  const z = norm(zoek);
  const zonder = z.replace(/ /g, '');
  return CLIENTEN.filter((c) => {
    const naam = norm(c.naam);
    const past = !z || naam.includes(z) || naam.replace(/ /g, '').includes(zonder) || c.nummer.includes(z);
    return past && (!statussen.length || statussen.includes(c.status));
  });
}

const VRAGENLIJSTEN = [
  { titel: 'Mikzo Kompas® (2025.1)', omschrijving: 'Mikzo Kompas® (2025.1)' },
  { titel: 'Omaha inventarisatie', omschrijving: 'Vragenlijst ter inventarisatie van zorgbehoefte volgens Omaha systematiek' },
];

const RAPPORTAGETYPEN = [
  ['Gewicht', '#1EB5C9'], ['Bloeddruk', '#E43F7A'], ['Temperatuur', '#E8B400'], ['Bloedsuiker', '#E43F7A'],
  ['Vocht inname', '#1A8FD8'], ['Vocht uitscheiding', '#E8B400'], ['Defecatie', '#1EB5C9'], ['Medisch', '#E43F7A'],
  ['Familie communicatie', '#E43F7A'], ['Keten communicatie', '#11A889'], ['Stemming', '#1A8FD8'], ['Saturatie', '#1A8FD8'],
  ['Pijnscore', '#E43F7A'], ['SOEP', '#E8B400'], ['Bristol-stoelgangschaal', '#11A889'], ['Klinimetrie', '#11A889'], ['Fotorapportage', '#1A8FD8'],
];

const MODULES = [
  ['Voor mij', [['Medewerkerportaal', '#EE4E9B'], ['Notities', '#4346B7']]],
  ['Cliënten', [['Dossier', '#507AFF'], ['Kwaliteitsmonitor', '#1EB58F'], ['Groepszorg', '#35B6E0'], ['Toedienlijsten', '#F08A24'], ['Ons Client', '#EC3E9A']]],
  ['Agenda', [['Agenda', '#D6246E'], ['Planning', '#F06BA8'], ['Rooster', '#9C6CC9'], ['Groepsplanning', '#C5157A'], ['Plannen & Roosteren', '#7A2E8C']]],
  ['Mijn organisatie', [['Administratie', '#3E6F8E'], ['Werkstaat', '#5BB07E'], ['Smoelenboek', '#1FA59A'], ['Mini Moves', '#9DBFE3'], ['Financieel', '#7E8D99'], ['Ketenverkeer', '#11A889'], ['Capaciteitsmanagement', '#8E57B5'], ['Import', '#1E8C7E']]],
  ['Beheer', [['Autorisatie', '#8CC63F'], ['Aankondigingen', '#F37B57'], ['Diensten', '#3E6F8E'], ['Podium', '#2BB3C4']]],
];

// ---------- iconen (zelfde lijnstijl als de oefenschermen in app.js) ----------

const IC = {
  overzicht: '<path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/>',
  vragenlijst: '<path d="M6 3h9l4 4v6M6 3v18h7M14 3v5h5"/><circle cx="17" cy="17" r="3"/>',
  plan: '<path d="M3 15h4l5 3 7-4M12 11c-3-2-5-4-5-6a2.5 2.5 0 0 1 5-1 2.5 2.5 0 0 1 5 1c0 2-2 4-5 6z"/>',
  rapportage: '<path d="M6 3h9l4 4v5M6 3v18h6M14 3v5h5M14 20l6-6 2 2-6 6h-2z"/>',
  agenda: '<path d="M4 6h16v15H4zM4 10h16M8 3v5M16 3v5"/><path d="M12 15h3v3h-3z"/>',
  klinimetrie: '<path d="M5 20V12M10 20V6M15 20v-9M20 20V9M3 21h19"/>',
  link: '<path d="M10 14a4 4 0 0 1 0-6l2-2a4 4 0 0 1 6 6l-1 1M14 10a4 4 0 0 1 0 6l-2 2a4 4 0 0 1-6-6l1-1"/>',
  algemeen: '<path d="M4 4h16v16H4z"/><circle cx="12" cy="10" r="3"/><path d="M7 18c1-3 9-3 10 0"/>',
  netwerk: '<circle cx="8" cy="9" r="3"/><circle cx="16" cy="9" r="3"/><path d="M3 19c1-4 9-4 10 0M11 19c1-4 9-4 10 0"/>',
  financieel: '<path d="M17 6a7 7 0 1 0 0 12M4 10h9M4 14h9"/>',
  documenten: '<path d="M3 6h7l2 2h9v11H3zM6 6V4h6"/>',
  inklappen: '<path d="M3 6h12M3 12h9M3 18h12M21 8l-4 4 4 4"/>',
  terug: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  zoek: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m20 20-4.8-4.8"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  pluscirkel: '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
  pijl: '<path d="m9 6 6 6-6 6"/>',
  pijlL: '<path d="m15 6-6 6 6 6"/>',
  omlaag: '<path d="m6 9 6 6 6-6"/>',
  omhoog: '<path d="m6 15 6-6 6 6"/>',
  oog: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  slot: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0"/>',
  ster: '<path d="m12 3 2.8 5.8 6.2.9-4.5 4.4 1 6.2L12 17.4l-5.5 2.9 1-6.2L3 9.7l6.2-.9z"/>',
  verberg: '<path d="M3 3l18 18M10.6 6.1A10 10 0 0 1 12 6c6 0 10 6 10 6a17 17 0 0 1-3 3.5M6.6 6.6A17 17 0 0 0 2 12s4 6 10 6a9.8 9.8 0 0 0 4.4-1"/>',
  prullenbak: '<path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14"/>',
  print: '<path d="M7 9V3h10v6M7 17H4v-7h16v7h-3M7 14h10v7H7z"/>',
  pen: '<path d="M4 20h4L19 9l-4-4L4 16zM13 7l4 4"/>',
  sluit: '<path d="M6 6l12 12M18 6 6 18"/>',
  bericht: '<path d="M4 4h16v12H9l-5 4z"/>',
  bel: '<path d="M6 17V11a6 6 0 0 1 12 0v6l2 2H4zM10 21h4"/>',
  hand: '<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v8c0 4-2.5 7-6 7-2.5 0-4-1.5-5.5-4L4 14a1.5 1.5 0 0 1 2.5-1.5L8 14"/>',
  zon: '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>',
  zandloper: '<path d="M7 3h10M7 21h10M8 3c0 5 8 5 8 9s-8 4-8 9M16 3c0 5-8 5-8 9s8 4 8 9"/>',
  uploaden: '<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',
  document: '<path d="M6 3h9l4 4v14H6zM14 3v5h5M9 13h6M9 17h6"/>',
  module: '<path d="M7 5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM9 12l2 2 4-4"/>',
  vink: '<path d="M5 12.5 10 17 19 7"/>',
  waarschuwing: '<path d="M12 4l9 16H3zM12 10v4M12 17v.2"/>',
};
const icoon = (naam, klasse = 'oef-ic') => `<svg class="${klasse}" viewBox="0 0 24 24" aria-hidden="true">${IC[naam] || ''}</svg>`;

const MENU_DOSSIER = [
  ['overzicht', 'Overzicht', 'overzicht'], ['vragenlijsten', 'Vragenlijsten', 'vragenlijst'], ['plan', 'Plan', 'plan'],
  ['rapportages', 'Rapportages', 'rapportage'], ['agenda', 'Agenda', 'agenda'], ['klinimetrie', 'Klinimetrie', 'klinimetrie'],
  ['snelkoppelingen', 'Snelkoppelingen', 'link'],
];
const MENU_ADMIN = [
  ['a-overzicht', 'Overzicht', 'overzicht'], ['a-algemeen', 'Algemeen', 'algemeen'], ['a-netwerk', 'Cliëntnetwerk', 'netwerk'],
  ['a-financieel', 'Financieel', 'financieel'], ['a-documenten', 'Documenten', 'documenten'],
];

// ---------- state ----------

const esc = (t) => String(t ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function nieuweState() {
  return {
    scherm: 'zoeken', zoek: '', mijn: false, statussen: [], clientId: null, pagina: 'overzicht', laatst: ['tt', 'mj'],
    venster: null, terugFocus: null, meerInfo: false, ingeklapt: false, agendaMenu: false, week: 0,
    vlTab: 'actueel', vlOpen: null, vlZoek: '', vensterZoek: '',
    planTab: 'zorgplan', planStap: null, planDomein: 0,
    rapTab: 'lijst', rapZoek: '', rapSoort: 'alle', metingen: true,
    concept: { tekst: '', s: '', o: '', e: '', p: '' },
    docTab: 'actueel', onsMelding: null, focus: null,
    extraDoelen: {},
    opgeslagen: { rapportages: {}, vragenlijsten: {}, klaar: {} },
  };
}

let S = nieuweState();
let huidig = null;
const gekoppeld = new WeakSet();

function laad() {
  try {
    const ruw = localStorage.getItem(SLEUTEL);
    if (!ruw) return;
    const d = JSON.parse(ruw);
    S.opgeslagen = { rapportages: d.rapportages || {}, vragenlijsten: d.vragenlijsten || {}, klaar: d.klaar || {} };
  } catch { /* geen opslag beschikbaar, de oefening werkt dan zonder geheugen */ }
}

function bewaar() {
  try { localStorage.setItem(SLEUTEL, JSON.stringify(S.opgeslagen)); } catch { /* idem */ }
}

export function resetOefenen() {
  S = nieuweState();
  try { localStorage.removeItem(SLEUTEL); } catch { /* idem */ }
  if (huidig) render();
}

const client = () => CLIENTEN.find((c) => c.id === S.clientId);
const rapportagesVan = (c) => [...(S.opgeslagen.rapportages[c.id] || []), ...c.rapportages];
const vragenlijstenVan = (c) => [
  ...(S.opgeslagen.vragenlijsten[c.id] || []),
  { titel: 'Mikzo Kompas® (2025.1)', door: MEDEWERKER, aangepast: '06-10-2026', gemaakt: '08-09-2026' },
];

function klaar(id) {
  if (S.opgeslagen.klaar[id]) return;
  S.opgeslagen.klaar[id] = true;
  bewaar();
  const alles = TEKSTEN.opdrachten.every((o) => S.opgeslagen.klaar[o.id]);
  huidig?.opties.meld?.(alles ? TEKSTEN.alles : TEKSTEN.klaar);
  huidig?.opties.onOpdracht?.(id);
}

const twee = (n) => String(n).padStart(2, '0');
const datum = (d) => `${twee(d.getDate())}-${twee(d.getMonth() + 1)}-${d.getFullYear()}`;
const tijd = (d) => `${twee(d.getHours())}:${twee(d.getMinutes())}:${twee(d.getSeconds())}`;
function weekNr(d) {
  const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dag = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - dag);
  const jaarStart = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  return { nr: Math.ceil(((t - jaarStart) / 86400000 + 1) / 7), jaar: t.getUTCFullYear() };
}
const DAGEN = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
const MAANDEN = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];

// ---------- bouwstenen ----------

const knop = (actie, inhoud, { waarde, klasse = '', label, extra = '' } = {}) =>
  `<button type="button" class="${klasse}" data-oefen="${actie}"${waarde !== undefined ? ` data-waarde="${esc(waarde)}"` : ''}${label ? ` aria-label="${esc(label)}"` : ''} ${extra}>${inhoud}</button>`;

function isAdmin() { return S.scherm === 'dossier' && S.pagina.startsWith('a-'); }

function bovenbalk() {
  const admin = isAdmin();
  return `
    <div class="ons__balk oef-balk">
      <span class="ons__logo" aria-hidden="true"></span>
      ${knop('modules', `${admin ? 'Administratie' : 'Dossier'} <span class="ons__raster" aria-hidden="true"></span>`, { klasse: `ons__app oef-pil${admin ? ' oef-pil--admin' : ''}`, extra: `aria-expanded="${S.venster === 'modules'}" aria-haspopup="true"` })}
      <form class="ons__zoek oef-balkzoek" data-oefen-form="balkzoek" role="search">
        <label class="sr" for="oef-balkzoek">Zoeken naar cliënten</label>
        <input id="oef-balkzoek" type="search" placeholder="Zoeken naar cliënten..." autocomplete="off">
      </form>
      <span class="ons__rechts">
        ${knop('niet', `<svg viewBox="0 0 24 24" aria-hidden="true">${IC.bericht}</svg>`, { klasse: 'oef-balkknop', label: 'Berichten' })}
        ${knop('niet', `<span class="ons__bel"><svg viewBox="0 0 24 24" aria-hidden="true">${IC.bel}</svg></span>`, { klasse: 'oef-balkknop', label: 'Meldingen' })}
        ${knop('niet', '<span class="ons__avatar" aria-hidden="true"></span>', { klasse: 'oef-balkknop', label: `Profiel van ${MEDEWERKER}` })}
      </span>
    </div>`;
}

function menu() {
  const item = ([id, naam, ic]) => `<li>${knop('pagina', `${icoon(ic, 'ons__icoon')}<span class="oef-menu__tekst">${esc(naam)}</span>`, {
    waarde: id, klasse: `ons__menu-item${S.pagina === id ? ' is-actief' : ''}`, extra: S.pagina === id ? 'aria-current="page"' : '', label: S.ingeklapt ? naam : undefined,
  })}</li>`;
  return `
    <nav class="ons__menu oef-menu" aria-label="Dossier van ${esc(client().naam)}">
      ${knop('start', `${icoon('terug', 'ons__icoon')}<span class="oef-menu__tekst">Cliënt zoeken</span>`, { klasse: 'ons__terug oef-menu__terug', label: S.ingeklapt ? 'Cliënt zoeken' : undefined })}
      <p class="ons__groep">Dossier</p>
      <ul>${MENU_DOSSIER.map(item).join('')}</ul>
      <p class="ons__groep">Administratie</p>
      <ul>${MENU_ADMIN.map(item).join('')}</ul>
      ${knop('inklappen', `${icoon('inklappen', 'ons__icoon')}<span class="oef-menu__tekst">${S.ingeklapt ? 'Uitklappen' : 'Inklappen'}</span>`, { klasse: 'ons__inklappen oef-menu__inklappen', extra: `aria-pressed="${S.ingeklapt}"` })}
      <p class="ons__nedap" aria-hidden="true">☆ nedap</p>
    </nav>`;
}

function label(id) {
  const l = LABELS[id];
  return `<span class="oef-label oef-label--${l.kleur}">${icoon(l.icoon)}${esc(l.tekst)}</span>`;
}

function clientKop(c) {
  const initialen = c.naam.split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();
  const ice = c.ice || 'ICE onbekend';
  return `
    <div class="oef-kop${S.meerInfo ? ' is-open' : ''}">
      <div class="ons__client oef-kop__boven">
        <span class="ons__initialen" aria-hidden="true">${esc(initialen)}</span>
        <div class="ons__client-tekst">
          <h3 class="ons__naam oef-kop__naam">${esc(c.naam)} ${c.labels.map(label).join(' ')}</h3>
          <p class="ons__gegevens">Geboortedatum is onbekend | ${esc(c.nummer)} | <span aria-label="BSN verborgen">•••••••••</span> ${icoon('oog')} | <u>Adres is onbekend</u></p>
        </div>
        ${knop('meer-info', `${S.meerInfo ? 'Minder info' : 'Meer info'} ${icoon(S.meerInfo ? 'omhoog' : 'omlaag')}`, { klasse: 'oef-meer', extra: `aria-expanded="${S.meerInfo}" aria-controls="oef-meerinfo"` })}
      </div>
      ${S.meerInfo ? `
      <div class="oef-meerinfo" id="oef-meerinfo">
        <div class="oef-meerinfo__links">
          <p class="oef-meerinfo__kop">Personalia</p>
          ${knop('pagina', 'Personalia bewerken', { waarde: 'a-algemeen', klasse: 'oef-link' })}
          <p class="oef-meerinfo__kop">Locatie</p>
          ${knop('niet', 'Geen locatiekoppeling aanwezig', { klasse: 'oef-link' })}
        </div>
        <div class="oef-meerinfo__rechts">
          <p class="oef-meerinfo__kop">Cliëntnetwerk</p>
          <dl class="oef-meerinfo__lijst">
            <div><dt>Eerste contactpersoon (ICE)</dt><dd>${esc(ice)}</dd></div>
            <div><dt>Caren status</dt><dd>Niet gekoppeld</dd></div>
            <div><dt>Huisarts</dt><dd>Huisarts onbekend</dd></div>
            <div><dt class="sr">Meer</dt><dd>${knop('pagina', 'Volledig cliëntnetwerk bekijken', { waarde: 'a-netwerk', klasse: 'oef-link' })}</dd></div>
          </dl>
        </div>
        <div class="oef-meerinfo__onder">
          ${knop('niet', `Meer acties ${icoon('omlaag')}`, { klasse: 'oef-knop oef-knop--wit' })}
          ${knop('niet', `${icoon('document')} Document aanmaken`, { klasse: 'oef-knop oef-knop--paars' })}
        </div>
      </div>` : ''}
    </div>`;
}

const kaart = (titel, inhoud, { plus = false, admin = false, rechts = '' } = {}) => `
  <section class="ons__kaart oef-kaart${admin ? ' oef-kaart--admin' : ''}">
    <div class="oef-kaart__kop"><h4 class="oef-kaart__titel">${esc(titel)}</h4>${rechts}${plus ? knop('niet', icoon(admin ? 'pluscirkel' : 'plus'), { klasse: admin ? 'oef-rondplus' : 'oef-vierkantplus', label: `${titel} toevoegen` }) : ''}</div>
    ${inhoud}
  </section>`;
const leeg = (t) => `<p class="oef-leeg">${esc(t)}</p>`;

// ---------- startscherm: Cliënt zoeken ----------

function resultaten() {
  const toon = S.zoek.trim() || S.mijn || S.statussen.length;
  if (!toon) return '';
  const lijst = filterClienten(S.zoek, S.statussen);
  if (!lijst.length) return `<p class="oef-leeg oef-resultaten__leeg">Geen cliënten gevonden</p>`;
  return `<ul class="oef-resultaten__lijst">${lijst.map((c) => `<li>${knop('client', `<span class="oef-resultaat__naam">${esc(c.naam)}</span><span class="oef-resultaat__nr">${esc(c.nummer)}</span>`, { waarde: c.id, klasse: 'oef-resultaat' })}</li>`).join('')}</ul>`;
}

function startscherm() {
  const vink = (waarde, tekst) => `<label class="oef-vink"><input type="checkbox" data-oefen-status="${waarde}" ${S.statussen.includes(waarde) ? 'checked' : ''}> ${tekst}</label>`;
  return `
    <div class="oef-start">
      <aside class="oef-start__filters" aria-label="Filters">
        ${knop('mijn', 'Mijn cliënten', { klasse: `oef-start__mijn${S.mijn ? ' is-actief' : ''}`, extra: `aria-pressed="${S.mijn}"` })}
        <fieldset class="oef-start__groep"><legend>Met status</legend>${vink('uit', 'Uit zorg')}${vink('geen', 'Geen actieve zorgopname')}</fieldset>
        <p class="oef-start__groep-kop">Met locatie</p>
        <ul class="oef-start__boom" aria-hidden="true"><li>${icoon('omlaag')}</li><li>${icoon('pijl')} Dagcentrum A</li><li>${icoon('pijl')} Dagcentrum B</li></ul>
      </aside>
      <div class="oef-start__midden">
        <h3 class="oef-start__titel" tabindex="-1">Cliënt zoeken</h3>
        <label class="sr" for="oef-zoek">Zoek naar cliënten</label>
        <div class="oef-start__zoek">${icoon('zoek')}<input id="oef-zoek" type="search" placeholder="Zoek naar cliënten" autocomplete="off" value="${esc(S.zoek)}" data-oefen-invoer="zoek"></div>
        <div class="oef-resultaten" data-oefen-regio="resultaten" aria-live="polite">${resultaten()}</div>
      </div>
      <div class="oef-start__kaarten">
        <section class="oef-bkaart"><h4>Taken</h4><div>
          ${knop('niet', 'Acties voor mijn deskundigheid (0)', { klasse: 'oef-blink' })}
          ${knop('niet', 'Mijn uitgezette acties (0)', { klasse: 'oef-blink' })}
          <p class="oef-bkaart__sub">Kwaliteitsmonitor</p>
          ${knop('niet', 'Zorgplan 0/1', { klasse: 'oef-blink' })}
          ${knop('niet', 'Onvrijwillige zorg - opnemen in plan 1/1', { klasse: 'oef-blink' })}
        </div></section>
        <section class="oef-bkaart"><h4>Overdracht</h4><div class="oef-bkaart__rijen">
          ${knop('niet', `${icoon('rapportage')} Rapportages`, { klasse: 'oef-blink oef-blink--rij' })}
          ${knop('niet', `${icoon('agenda')} Agenda`, { klasse: 'oef-blink oef-blink--rij' })}
        </div></section>
        <section class="oef-bkaart"><h4>Laatst bezochte cliënten</h4><div>
          ${S.laatst.map((id) => CLIENTEN.find((c) => c.id === id)).map((c) => knop('client', esc(c.naam), { waarde: c.id, klasse: 'oef-blink' })).join('')}
        </div></section>
        <section class="oef-overleg"><div class="oef-overleg__kop"><h4>Mijn overleggen</h4>${knop('niet', icoon('plus'), { klasse: 'oef-vierkantplus', label: 'Overleg toevoegen' })}</div><p>We konden geen overleggen vinden</p></section>
      </div>
    </div>`;
}

// ---------- dossier ----------

function pOverzicht(c) {
  const waarsch = c.labels.filter((l) => l !== 'geenzorg');
  return `
    <div class="oef-twee">
      <div class="oef-kolom">
        ${kaart('Waarschuwingen', waarsch.length ? `<ul class="oef-waarsch">${waarsch.map((l) => `<li>${icoon(LABELS[l].icoon)}${esc(LABELS[l].tekst)}</li>`).join('')}</ul>` : leeg('Geen waarschuwingen'))}
        ${kaart('Zorgstatus', `<p class="oef-zin">De cliënt heeft <strong>geen actieve zorgopname</strong></p>`)}
        ${kaart('Episodes', `<p class="oef-subkop">Relevante episodes</p>
          <div class="oef-tabelwrap"><table class="oef-mini"><thead><tr><th>Startdatum</th><th>Code</th><th>Titel</th></tr></thead>
          <tbody><tr><td>${esc(c.episode.start)}</td><td></td><td>${knop('niet', esc(c.episode.titel), { klasse: 'oef-link oef-link--plat' })}</td></tr></tbody></table></div>`)}
        ${kaart('Medische voorgeschiedenis', leeg('Geen relevante medische problemen'))}
        ${kaart('Allergieën en overgevoeligheden', `${leeg('Geen actieve allergieën of overgevoeligheden')}<p class="oef-subtitel">Verpleegkundige notities</p>${leeg('Geen verpleegkundige notities')}`)}
        ${kaart('Labuitslagen', leeg('Geen beschikbare labuitslagen'))}
        ${kaart('Locatie', leeg('Geen locaties'))}
      </div>
      <div class="oef-kolom">
        ${kaart('Proactieve zorg', `<p class="oef-zin">Geen medisch beleid</p><p class="oef-subtitel">Wilsverklaring</p><p class="oef-zin">Onbekend</p>`)}
        ${kaart('Juridische statussen', `<p class="oef-zin">Geen juridische statussen</p>`)}
        ${kaart('Wilsonbekwaamheden', leeg('Geen wilsonbekwaamheden'))}
        ${kaart('Betrokken medewerkers', leeg('Geen actieve relevante betrokken medewerkers'))}
        ${kaart('Medische notities', leeg('Geen medische notities'))}
        ${kaart('Belangrijke rapportages', leeg('Geen belangrijke rapportages'))}
        ${kaart('Zorgtechnologie', `<p class="oef-zin">Er zijn geen zorgtechnologieën geregistreerd voor deze cliënt.</p>`, { plus: true })}
        ${kaart('Groepsdeelnames', leeg('Deze cliënt zit nog niet in een groep'), { plus: true })}
        <section class="ons__kaart oef-kaart"><div class="oef-kaart__kop"><h4 class="oef-kaart__titel oef-kaart__titel--grijs">Cliënt overleggen</h4></div>${leeg('Geen overleggen gevonden voor deze cliënt')}</section>
      </div>
    </div>`;
}

function vlRijen(c) {
  const z = norm(S.vlZoek);
  const rijen = S.vlTab === 'archief' ? [] : vragenlijstenVan(c).filter((v) => !z || norm(v.titel).includes(z));
  if (!rijen.length) return `<tr><td colspan="6" class="oef-leeg">Geen vragenlijsten gevonden</td></tr>`;
  return rijen.map((v, i) => `<tr><td><span class="oef-status">Concept</span></td><td>${knop('vl-open', esc(v.titel), { waarde: i, klasse: 'oef-link' })}</td><td>${esc(v.door)}</td><td>${esc(v.aangepast)}</td><td>${esc(v.gemaakt)}</td><td></td></tr>`).join('');
}

function pVragenlijsten(c) {
  if (S.vlOpen !== null) {
    const v = vragenlijstenVan(c)[S.vlOpen] || vragenlijstenVan(c)[0];
    const deel = c.plan[0];
    return `
      ${knop('vl-terug', `${icoon('terug')} Vragenlijsten - Overzicht`, { klasse: 'oef-kruimel' })}
      ${clientKop(c)}
      <h3 class="oef-vl__titel" tabindex="-1">${esc(v.titel)}</h3>
      <p class="oef-vl__meta"><strong>Gemaakt op:</strong> ${esc(v.gemaakt)} <strong>Auteur:</strong> ${esc(v.door)}</p>
      <div class="oef-vl__status">
        <p class="oef-stappen"><span class="is-nu">Concept</span><i></i><span>Actueel</span><i></i><span>Gearchiveerd</span></p>
        ${knop('niet', 'Volgende status', { klasse: 'oef-knop oef-knop--rand' })}
        <span class="oef-vl__rechts">${knop('niet', `${icoon('omlaag')} Meer`, { klasse: 'oef-knop oef-knop--rand' })}${knop('niet', `${icoon('pen')} Wijzig`, { klasse: 'oef-knop oef-knop--blauw' })}</span>
      </div>
      <p class="oef-vl__score">De totale score van deze vragenlijst is <u>1</u></p>
      <section class="ons__kaart oef-kaart">
        <h4 class="oef-domein">${esc(deel.domein)}</h4>
        <details class="oef-vl__sectie" open>
          <summary>${esc(deel.onderwerp)} <span class="oef-score">SCORE: 1</span></summary>
          <p class="oef-vraag">${esc(deel.onderwerp)}</p>
          <p class="oef-antwoord">${esc(deel.antwoord)}</p>
          <div class="oef-vl__blok"><p class="oef-vraag">Ik wil '${esc(deel.onderwerp)}' opnemen in het Plan?</p><p class="oef-antwoord">Ja, opnemen in het Plan</p></div>
        </details>
      </section>
      <p class="oef-vl__score">De totale score van deze vragenlijst is <u>1</u></p>`;
  }
  return `
    ${clientKop(c)}
    <div class="ons__kopregel"><h3 class="ons__titel" tabindex="-1">Vragenlijsten</h3>${knop('vl-nieuw', `${icoon('plus')} Nieuwe vragenlijst`, { klasse: 'oef-knop oef-knop--paars oef-knop--groot', extra: 'aria-haspopup="dialog"' })}</div>
    ${tabs('vl-tab', [['actueel', 'Actueel'], ['archief', 'Archief']], S.vlTab)}
    <label class="oef-veldlabel" for="oef-vlzoek">Zoeken</label>
    <div class="oef-zoekveld">${icoon('zoek')}<input id="oef-vlzoek" type="search" placeholder="Zoeken op titel" value="${esc(S.vlZoek)}" data-oefen-invoer="vl-zoek"></div>
    <div class="oef-tabelwrap"><table class="oef-tabel">
      <thead><tr><th>Status</th><th>Titel</th><th>Gemaakt door</th><th>Aangepast op</th><th>Gemaakt op</th><th>Episodes</th></tr></thead>
      <tbody data-oefen-regio="vl-rijen">${vlRijen(c)}</tbody>
    </table></div>`;
}

function tabs(actie, lijst, actief) {
  return `<div class="ons__tabs oef-tabs" role="tablist">${lijst.map(([id, naam]) => knop(actie, esc(naam), { waarde: id, klasse: `oef-tab${id === actief ? ' is-actief' : ''}`, extra: `role="tab" aria-selected="${id === actief}"` })).join('')}</div>`;
}

function conceptKaart(knoppen) {
  return `
    <div class="ons__kaart ons__concept oef-concept">
      <div><p class="ons__concept-kop">Concept zorgplan</p>
      <p>Geldig vanaf onbekend tot en met onbekend<br>Laatst bijgewerkt op 06-10-2026 door ${MEDEWERKER}</p></div>
      <div class="ons__concept-knoppen">${knop('niet', icoon('print'), { klasse: 'oef-icoonknop', label: 'Afdrukken' })}${knoppen}</div>
    </div>`;
}

function pPlan(c) {
  const kruimel = (t) => knop('plan-terug', `${icoon('terug')} ${t}`, { klasse: 'oef-kruimel' });
  if (S.planStap === 'plan') {
    const extra = S.extraDoelen[c.id] || [];
    return `
      ${kruimel('Zorgplan - Overzicht')}
      ${clientKop(c)}
      ${conceptKaart(`${knop('plan-doel', 'Voeg doel toe', { waarde: 0, klasse: 'ons__knop ons__knop--rand' })}${knop('niet', 'Afronden', { klasse: 'ons__knop ons__knop--groen' })}${knop('niet', 'Verwijder', { klasse: 'ons__knop oef-knop--rood' })}`)}
      ${c.plan.map((d, i) => {
        const doelen = [...d.doelen, ...extra.filter((x) => x.domein === i)];
        return `
        <h4 class="oef-domein" ${i === 0 ? 'tabindex="-1" id="oef-plan-start"' : ''}>${esc(d.domein)}</h4>
        <section class="ons__kaart oef-plan">
          <p class="oef-plan__onderwerp">${esc(d.onderwerp)}</p>
          <div class="oef-plan__rechts">
            ${doelen.length ? doelen.map((x) => `
              <div class="oef-plan__doel">
                <div><p class="oef-plan__lbl">Doel</p><p>${esc(x.doel)}</p></div>
                <div><p class="oef-plan__lbl">Actie</p><p>${esc(x.actie)}</p></div>
              </div>`).join('') : `<div class="oef-plan__doel oef-plan__doel--leeg">${knop('plan-doel', 'Kies doel', { waarde: i, klasse: 'ons__knop ons__knop--blauw' })}</div>`}
            <div class="oef-plan__kader">
              <p class="oef-vraag">Mikzo Kompas® (2025.1)</p>
              <p>${esc(d.onderwerp)}</p>
              <p class="oef-vraag oef-plan__in">${esc(d.onderwerp)}</p>
              <p class="oef-antwoord oef-plan__in">${esc(d.antwoord)}</p>
              <div class="oef-vl__blok"><p class="oef-vraag">Ik wil '${esc(d.onderwerp)}' opnemen in het Plan?</p><p class="oef-antwoord">Ja, opnemen in het Plan</p></div>
            </div>
            ${knop('plan-doel', `${icoon('plus')} Doel toevoegen`, { waarde: i, klasse: 'oef-knop oef-knop--klein' })}
          </div>
        </section>`;
      }).join('')}
      <p class="oef-rechtslink">${knop('niet', 'Toon alle zorgplannen (1)', { klasse: 'oef-blink' })}</p>`;
  }
  if (S.planStap === 'doel' || S.planStap === 'actie') {
    const d = c.plan[S.planDomein];
    const doel = `Ondersteuning volgens '${d.onderwerp}'.`;
    const pad = `${esc(d.domein)} &gt; ${esc(d.onderwerp)} &gt; `;
    return `
      ${knop('plan-wijzig', `${icoon('terug')} Zorgplan - Wijzig`, { klasse: 'oef-kruimel' })}
      ${clientKop(c)}
      <section class="ons__kaart oef-kaart">
        <p class="oef-vraag" tabindex="-1" id="oef-kies-kop">Voeg een doel en bijbehorende actie toe aan het zorgplan</p>
        <p class="oef-pad">${pad}${S.planStap === 'doel' ? 'Kies een doel' : `<span class="oef-pad__blauw">${esc(doel)} &gt;</span> Kies een actie`}</p>
        ${S.planStap === 'doel'
          ? knop('plan-kies-doel', `<span>${esc(doel)}</span>${icoon('pijl')}`, { klasse: 'oef-keuzerij' })
          : knop('plan-kies-actie', `<span>Bekijk de inhoud van de Vragenlijst 'Mikzo Kompas - ${esc(d.onderwerp)}'.</span>${icoon('pijl')}`, { klasse: 'oef-keuzerij oef-keuzerij--actief' })}
      </section>`;
  }
  return `
    ${clientKop(c)}
    ${tabs('plan-tab', [['zorgplan', 'Zorgplan'], ['ovz', 'Onvrijwillige zorg(0)']], S.planTab)}
    ${S.planTab === 'zorgplan' ? `
      <div class="ons__kopregel ons__kopregel--lijn"><h3 class="ons__titel" tabindex="-1">Zorgplan</h3>${knop('niet', 'Dagoverzicht', { klasse: 'ons__knop ons__knop--blauw' })}</div>
      ${conceptKaart(`${knop('niet', 'Afronden', { klasse: 'ons__knop ons__knop--groen' })}${knop('plan-wijzig', 'Wijzigen', { klasse: 'ons__knop ons__knop--rand' })}${knop('niet', 'Verwijder', { klasse: 'ons__knop oef-knop--rood' })}`)}
      <p class="oef-rechtslink">${knop('niet', 'Toon alle zorgplannen (1)', { klasse: 'oef-blink' })}</p>` : ''}
    <div class="oef-ovz">
      <div class="ons__kopregel ons__kopregel--lijn oef-ovz__kop"><h3 class="ons__titel">Onvrijwillige zorg</h3>
        <span class="oef-knoppen">${knop('niet', 'Tijdlijn', { klasse: 'oef-knop oef-knop--wit' })}${knop('niet', 'Onvoorziene zorg registreren', { klasse: 'oef-knop oef-knop--wit' })}${knop('niet', 'Nieuwe onvrijwillige zorg', { klasse: 'oef-knop oef-knop--paars' })}</span></div>
      <div class="ons__kaart oef-ovz__juridisch">Juridische status</div>
      <p class="oef-leeg oef-ovz__leeg">Er is geen onvrijwillige zorg opgegeven</p>
    </div>`;
}

function rapRegels(c) {
  const z = norm(S.rapZoek);
  const lijst = rapportagesVan(c).filter((r) => (S.rapSoort === 'alle' || r.soort === S.rapSoort) && (!z || norm(r.tekst).includes(z) || norm(r.auteur).includes(z)));
  if (!lijst.length) return `<li class="oef-leeg">Geen rapportages gevonden</li>`;
  return lijst.map((r, i) => `
    <li class="oef-rap"${i === 0 && r.eigen ? ' id="oef-nieuwste" tabindex="-1"' : ''}>
      ${icoon(r.soort === 'soep' ? 'document' : 'rapportage', `oef-ic oef-rap__ic${r.soort === 'soep' ? ' is-soep' : ''}`)}
      <p class="oef-rap__wie">${esc(r.auteur)}<br>${esc(r.datum)}<br>${esc(r.tijd)}</p>
      <div class="oef-rap__tekst">${r.soort === 'soep'
        ? [['S', r.s], ['O', r.o], ['E', r.e], ['P', r.p]].filter(([, t]) => t).map(([k, t]) => `<p><strong>${k}:</strong> ${esc(t)}</p>`).join('')
        : `<p>${esc(r.tekst)}</p>`}</div>
      <span class="oef-rap__iconen" aria-hidden="true">${icoon('slot')}${icoon('ster')}${icoon('verberg')}${icoon('prullenbak')}</span>
    </li>`).join('');
}

const kanOpslaan = () => (S.rapTab === 'soep' ? ['s', 'o', 'e', 'p'].some((k) => S.concept[k].trim()) : S.concept.tekst.trim().length > 0);

function opslaanKnop() {
  return knop('rap-opslaan', `${icoon('vink')} Opslaan`, { klasse: 'ons__knop ons__knop--groen oef-opslaan', extra: kanOpslaan() ? '' : 'disabled' });
}

function pRapportages(c) {
  const rtab = (id, ic, lbl, klasse = '') => knop('rap-tab', icoon(ic), { waarde: id, klasse: `oef-rtab${S.rapTab === id ? ' is-actief' : ''}${klasse}`, label: lbl, extra: `aria-pressed="${S.rapTab === id}"` });
  const zichtbaar = '<span class="ons__nep-select">Iedereen (of kies deskundigheden)</span>';
  let formulier = '';
  if (S.rapTab === 'vrij') {
    formulier = `
      <div class="ons__kopregel"><h3 class="ons__titel ons__titel--klein" tabindex="-1" id="oef-rap-kop">Nieuw - Rapportage</h3><span class="ons__kop-rechts">${knop('niet', `${icoon('ster')} Markeer als belangrijk`, { klasse: 'oef-ster' })}${opslaanKnop()}</span></div>
      <label class="sr" for="oef-rap-tekst">Rapportage</label>
      <textarea id="oef-rap-tekst" class="oef-tekstvak oef-tekstvak--groot" data-oefen-invoer="tekst">${esc(S.concept.tekst)}</textarea>
      <p class="ons__schakel">${knop('metingen', '<span class="ons__toggle"></span>', { klasse: `oef-schakel${S.metingen ? '' : ' is-uit'}`, label: 'Metingenherkenning', extra: `aria-pressed="${S.metingen}"` })}Metingenherkenning <span class="ons__info" aria-hidden="true">i</span></p>
      <p class="ons__uitleg">Metingen worden tijdens het schrijven automatisch herkend en als losse metingen toegevoegd. Je hoeft deze dus niet meer apart in te voeren.</p>
      <div class="ons__links">
        <div class="ons__veld"><span class="ons__lbl">Acties voor:</span><span class="ons__nep-select">Selecteer deskundigheden</span></div>
        <div class="ons__veld"><span class="ons__lbl">Zichtbaar voor:</span>${zichtbaar}</div>
        <div class="ons__veld"><span class="ons__lbl">Koppel aan episodes</span><span class="ons__nep-select">Selecteer episodes</span></div>
      </div>`;
  } else if (S.rapTab === 'soep') {
    const veld = (k, naam) => `
      <div class="oef-soep__rij"><label for="oef-soep-${k}">${naam}</label><textarea id="oef-soep-${k}" class="oef-tekstvak" data-oefen-invoer="${k}">${esc(S.concept[k])}</textarea></div>
      <div class="oef-soep__rij"><span class="ons__lbl">Zichtbaar voor</span>${zichtbaar}</div>`;
    formulier = `
      <div class="ons__kopregel"><h3 class="ons__titel ons__titel--klein" tabindex="-1" id="oef-rap-kop">Nieuw - SOEP</h3><span class="ons__kop-rechts">${knop('niet', `${icoon('ster')} Markeer als belangrijk`, { klasse: 'oef-ster' })}${opslaanKnop()}</span></div>
      <div class="oef-soep">
        ${veld('s', 'Subjectief')}${veld('o', 'Objectief')}${veld('e', 'Evaluatie')}${veld('p', 'Plan')}
        <div class="oef-soep__rij"><label for="oef-soep-tijd">Starttijd</label><span class="oef-soep__tijd"><input id="oef-soep-tijd" class="oef-klein-invoer" placeholder="HH:MM" inputmode="numeric" maxlength="5"> <em>vandaag</em></span></div>
      </div>`;
  }
  return `
    ${clientKop(c)}
    <section class="ons__kaart oef-rapkaart">
      <div class="oef-rtabs">
        ${rtab('lijst', 'document', 'Rapportages')}${rtab('vrij', 'rapportage', 'Nieuwe rapportage')}${S.rapTab === 'soep' ? rtab('soep', 'document', 'Nieuwe SOEP-rapportage', ' is-soep') : ''}
        ${knop('rap-plus', icoon('plus'), { klasse: 'oef-rplus', label: 'Rapportagetype toevoegen', extra: 'aria-haspopup="dialog"' })}
      </div>
      ${formulier}
      ${S.rapTab === 'lijst' ? rapLijst(c) : ''}
    </section>
    ${S.rapTab !== 'lijst' ? `<section class="ons__kaart oef-rapkaart">${rapLijst(c)}</section>` : ''}`;
}

function rapLijst(c) {
  return `
    <div class="oef-rapfilter">
      <div class="oef-zoekveld oef-zoekveld--rond">${icoon('zoek')}<label class="sr" for="oef-rapzoek">Zoeken in rapportages</label><input id="oef-rapzoek" type="search" placeholder="Zoeken" value="${esc(S.rapZoek)}" data-oefen-invoer="rap-zoek"></div>
      <label class="sr" for="oef-rapsoort">Soort rapportage</label>
      <select id="oef-rapsoort" class="ons__select" data-oefen-invoer="rap-soort">
        <option value="alle" ${S.rapSoort === 'alle' ? 'selected' : ''}>Alle rapportages</option>
        <option value="vrij" ${S.rapSoort === 'vrij' ? 'selected' : ''}>Rapportage</option>
        <option value="soep" ${S.rapSoort === 'soep' ? 'selected' : ''}>SOEP</option>
      </select>
      <span class="ons__nep-select">Alle deskundigheden (of kies deskundigheid)</span>
      ${knop('niet', 'Acties bekijken', { klasse: 'oef-knop oef-knop--wit' })}
    </div>
    <div class="oef-rapdatum">
      <label class="sr" for="oef-van">Vanaf datum</label><input id="oef-van" class="oef-klein-invoer" placeholder="DD-MM-YYYY"> t/m
      <label class="sr" for="oef-tot">Tot en met datum</label><input id="oef-tot" class="oef-klein-invoer" placeholder="DD-MM-YYYY">
      <label class="oef-vink oef-vink--klein"><input type="checkbox"> verborgen rapportages</label>
    </div>
    <ul class="oef-raplijst" data-oefen-regio="rap-lijst">${rapRegels(c)}</ul>`;
}

function pAgenda(c) {
  const maandag = new Date(2026, 9, 5 + 7 * S.week);
  const { nr, jaar } = weekNr(maandag);
  const dagen = Array.from({ length: 7 }, (_, i) => new Date(maandag.getFullYear(), maandag.getMonth(), maandag.getDate() + i));
  const vandaag = new Date(2026, 9, 7);
  const item = (sleutel, extraKlasse = '') => `
    <li class="oef-agitem${extraKlasse}">
      <label class="oef-agitem__vink"><input type="checkbox" data-oefen-ag="${sleutel}"><span class="sr">Afvinken: Wassen</span></label>
      <span class="oef-agitem__tijd">Hele dag<br>± 15m</span>
      <span class="oef-agitem__wat"><span class="oef-agitem__ic" aria-hidden="true"></span>Wassen</span>
      <span class="oef-agitem__acties">${knop('niet', icoon('pen'), { klasse: 'oef-icoonknop oef-icoonknop--grijs', label: 'Wijzigen' })}${knop('niet', icoon('prullenbak'), { klasse: 'oef-icoonknop oef-icoonknop--grijs', label: 'Verwijderen' })}</span>
    </li>`;
  return `
    ${clientKop(c)}
    <div class="oef-agbalk">
      <div class="oef-week">${knop('agenda-week', icoon('pijlL'), { waarde: -1, klasse: 'oef-icoonknop', label: 'Vorige week' })}<span class="oef-week__tekst" aria-live="polite">Week ${nr} - ${jaar}</span>${knop('agenda-week', icoon('pijl'), { waarde: 1, klasse: 'oef-icoonknop', label: 'Volgende week' })}</div>
      <div class="oef-agfilter" aria-label="Filters">${['Afspraken', 'Planning', 'Handelingen', 'Signaleringen'].map((f) => `<span class="oef-chip">${f} ×</span>`).join('')}${icoon('omlaag')}</div>
      ${knop('niet', 'Afdrukken', { klasse: 'oef-knop oef-knop--wit' })}
      <div class="oef-menuwrap">
        ${knop('agenda-menu', `Toevoegen ${icoon(S.agendaMenu ? 'omhoog' : 'omlaag')}`, { klasse: 'oef-knop oef-knop--donkerpaars', extra: `aria-expanded="${S.agendaMenu}" aria-controls="oef-agmenu"` })}
        ${S.agendaMenu ? `<ul class="oef-dropdown" id="oef-agmenu">${['Afspraak', 'Handeling', 'Afwezigheid'].map((t) => `<li>${knop('agenda-kies', t, { waarde: t })}</li>`).join('')}</ul>` : ''}
      </div>
    </div>
    ${dagen.map((d) => `
      <section class="oef-dag">
        <h4>${DAGEN[d.getDay()]} ${d.getDate()} ${MAANDEN[d.getMonth()]}</h4>
        <ul>
          ${d.getTime() === vandaag.getTime() ? `
          <li class="oef-agitem oef-agitem--signaal">
            <span class="oef-agitem__vink"><input type="checkbox" disabled aria-label="Signalering"></span>
            <span class="oef-agitem__tijd">Hele dag</span>
            <span class="oef-agitem__wat"><span class="oef-agitem__ic oef-agitem__ic--groen" aria-hidden="true"></span>Onvrijwillige zorg moet geactiveerd worden (opnemen in plan)<small>De cliënt heeft onvrijwillige zorg in het zorgplan die geactiveerd moet worden</small></span>
            <span class="oef-agitem__acties">${knop('niet', icoon('link'), { klasse: 'oef-icoonknop', label: 'Openen' })}</span>
          </li>` : ''}
          ${item(datum(d))}
        </ul>
      </section>`).join('')}`;
}

function pAdminOverzicht(c) {
  const a = { admin: true };
  const ap = { admin: true, plus: true };
  return `
    ${clientKop(c)}
    <div class="oef-twee">
      <div class="oef-kolom">
        ${kaart('Zorgarrangement', `${leeg('Er is geen zorgarrangement voor deze cliënt.')}${knop('niet', 'Maak een nieuw zorgpad', { klasse: 'oef-link oef-link--oranje' })}`, ap)}
        <section class="ons__kaart oef-kaart oef-kaart--admin">
          <div class="oef-kaart__kop"><h4 class="oef-kaart__titel">Zorglegitimaties</h4>${knop('niet', icoon('pluscirkel'), { klasse: 'oef-rondplus', label: 'Zorglegitimatie toevoegen' })}</div>${leeg('Er zijn geen zorglegitimaties voor deze cliënt.')}
          <div class="oef-kaart__kop"><h4 class="oef-kaart__titel">Aangevraagde legitimaties</h4>${knop('niet', icoon('pluscirkel'), { klasse: 'oef-rondplus', label: 'Aangevraagde legitimatie toevoegen' })}</div>${leeg('Er zijn geen aangevraagde zorglegitimaties voor deze cliënt.')}
        </section>
        ${kaart('Zorgtrajecten', leeg('Er zijn geen zorgtrajecten voor deze cliënt.'), a)}
        ${kaart('Zorgregels', leeg('Er zijn geen zorgregels voor deze cliënt.'), { admin: true, rechts: '<span class="oef-nepkeuze">september 2026 ⌄</span>' })}
        ${kaart('Cliëntnetwerk', c.ice ? `<p class="oef-zin">Eerste contactpersoon: ${knop('pagina', esc(c.ice), { waarde: 'a-netwerk', klasse: 'oef-link' })}</p>` : leeg('Er zijn geen eerste verantwoordelijken in het cliëntnetwerk van deze cliënt.'), a)}
      </div>
      <div class="oef-kolom">
        ${kaart('Notities', leeg('Er zijn geen notities voor deze cliënt.'), ap)}
        ${kaart('Locaties', leeg('Er zijn geen locaties voor deze cliënt.'), a)}
        ${kaart('Zorgstatus', leeg('Geen actieve zorgopname'), ap)}
        ${kaart('Declaraties en aanvullende diensten', leeg('De cliënt heeft geen declaraties en aanvullende diensten.'), a)}
        ${kaart('Zorgtechnologie', `<p class="oef-zin">Er zijn geen zorgtechnologieën geregistreerd voor deze cliënt.</p>`, { plus: true })}
      </div>
    </div>`;
}

function pAlgemeen(c) {
  const a = { admin: true };
  const ap = { admin: true, plus: true };
  const rij = (k, v, klasse = '') => `<div><dt>${k}</dt><dd class="${klasse}">${esc(v)}</dd></div>`;
  return `
    ${clientKop(c)}
    <div class="oef-twee">
      <div class="oef-kolom">
        ${kaart('Personalia', `<dl class="oef-dl">${rij('Naam', c.naam)}${rij('Cliëntnummer', c.nummer)}${rij('Burgerlijke staat', 'Onbekend')}${rij('Nationaliteit', 'NL')}${rij('Spreektaal', 'Nederlands')}${rij('Caren status', 'Niet gekoppeld', 'is-oranje')}</dl>`, a)}
        ${kaart('Locaties', leeg('Er zijn geen locaties voor deze cliënt.'), a)}
        ${kaart('Vervoersinstellingen', `<dl class="oef-dl oef-dl--onder"><div><dt>Individueel vervoer</dt><dd>Nee</dd></div><div><dt>Gecontracteerd vervoer</dt><dd>Nee</dd></div></dl>`, a)}
        ${kaart('Gebruik dossier- en persoonsgegevens', leeg('Geen dossier- en persoonsgegevens gevonden voor deze cliënt'), a)}
      </div>
      <div class="oef-kolom">
        ${kaart('Identiteitsgegevens', leeg('Geen identiteitsgegevens beschikbaar voor deze cliënt.'), a)}
        ${kaart('Adressen', leeg('Er zijn geen adressen voor deze cliënt.'), ap)}
        ${kaart('Zorgstatus', leeg('Geen actieve zorgopname'), ap)}
        ${kaart('Gekoppelde passen', leeg('Er zijn geen gekoppelde passen voor deze cliënt.'), ap)}
      </div>
    </div>`;
}

function pNetwerk(c) {
  const ap = { admin: true, plus: true };
  const contacten = c.contacten.length
    ? `<ul class="oef-contacten">${c.contacten.map((p) => `
        <li><p class="oef-contact__naam">${esc(p.naam)}</p>
        <p class="oef-contact__rel">${esc(p.relatie)}</p>
        ${p.ice ? '<span class="oef-label oef-label--blauw">Eerste contactpersoon</span>' : ''}</li>`).join('')}</ul>`
    : leeg('Er zijn geen contactpersonen voor deze cliënt.');
  return `
    ${clientKop(c)}
    <div class="oef-twee">
      <div class="oef-kolom">
        ${kaart('Persoonlijke contacten', contacten, ap)}
        ${kaart('Betrokken medewerkers', leeg('Er zijn geen betrokken medewerkers voor deze cliënt.'), ap)}
        ${kaart('Professionele contacten', leeg('Er zijn geen professionele contacten voor deze cliënt.'), ap)}
      </div>
      <div class="oef-kolom">
        ${kaart('Verwijzingen', leeg('Er zijn geen verwijzingen voor deze cliënt.'), ap)}
        ${kaart('Caren', '<dl class="oef-dl"><div><dt>Status</dt><dd>Niet gekoppeld</dd></div></dl>', { admin: true })}
      </div>
    </div>`;
}

function pFinancieel(c) {
  const a = { admin: true };
  const ap = { admin: true, plus: true };
  const jaar = '<span class="oef-nepkeuze">2026 ⌄</span>';
  return `
    ${clientKop(c)}
    <div class="oef-twee">
      <div class="oef-kolom">
        ${kaart('Verzekeringen', leeg('Er zijn geen verzekeringen voor deze cliënt.'), ap)}
        ${kaart('Uitkeringsgegevens', leeg('De cliënt heeft geen uitkeringen.'), ap)}
        ${kaart('Factuur- en declaratieoverzicht', leeg('Er zijn geen facturen of declaraties.'), { admin: true, rechts: jaar })}
        ${kaart('Ongedeclareerde financiële boekingen', leeg('Er zijn geen boekingen.'), { admin: true, rechts: jaar })}
      </div>
      <div class="oef-kolom">
        ${kaart('Bankgegevens', leeg('Er zijn geen bankgegevens voor deze cliënt.'), a)}
        ${kaart('Beleidsprofieltoekenningen', leeg('Er zijn geen beleidsprofieltoekenningen voor deze cliënt.'), ap)}
        ${kaart('Declaraties en aanvullende diensten', leeg('De cliënt heeft geen declaraties en aanvullende diensten.'), a)}
        ${kaart('Financiële boekingen', '', a)}
        ${kaart('Facturen', '', a)}
      </div>
    </div>`;
}

const PLANT = `<svg class="oef-plant" viewBox="0 0 240 210" aria-hidden="true">
  <path d="M60 40c30-40 110-30 120 20 10 40-10 80-40 90-50 15-100 0-100-50 0-25 5-45 20-60z" fill="#D7EBFA"/>
  <path d="M120 120c-20-30-30-60-20-90M124 120c5-40 20-70 40-85M116 122c-30-15-50-40-55-70M128 122c25-15 45-30 60-35" stroke="#2E8B6E" stroke-width="10" stroke-linecap="round" fill="none"/>
  <circle cx="122" cy="112" r="16" fill="#F07A55"/><path d="M110 100l4-10 6 8M134 100l-4-10-6 8" fill="#F07A55"/>
  <path d="M86 125h72l-8 70H94z" fill="#F7C35E"/><rect x="82" y="118" width="80" height="12" rx="4" fill="#F9D27F"/>
  <path d="M92 155c10-10 20 10 30 0s20 10 30 0" stroke="#E8487A" stroke-width="5" fill="none"/>
  <path d="M30 195c5-15 25-20 40-10l-5 10z" fill="#BFC4CC"/><circle cx="62" cy="178" r="9" fill="none" stroke="#E8487A" stroke-width="4"/>
</svg>`;

function pDocumenten(c) {
  return `
    ${clientKop(c)}
    <div class="ons__kopregel"><h3 class="ons__titel" tabindex="-1">Documenten</h3>${knop('niet', `${icoon('document')} Document aanmaken`, { klasse: 'oef-knop oef-knop--paars oef-knop--groot' })}</div>
    ${tabs('doc-tab', [['actueel', 'Actueel'], ['archief', 'Archief'], ['prullenbak', 'Prullenbak']], S.docTab)}
    <div class="oef-docfilter">
      <div><label class="oef-veldlabel" for="oef-doczoek">Zoeken</label><div class="oef-zoekveld">${icoon('zoek')}<input id="oef-doczoek" type="search" placeholder="Zoeken op bestandsnaam of beschrijving"></div></div>
      <div><span class="oef-veldlabel">Filter op label</span><span class="ons__nep-select">Filter op label</span></div>
      ${knop('niet', `${icoon('uploaden')} Uploaden`, { klasse: 'oef-knop oef-knop--paars oef-knop--groot' })}
    </div>
    <div class="oef-leegstaat">${PLANT}<p class="oef-leegstaat__kop">Geen resultaten gevonden</p><p>Probeer je zoekterm of filters aan te passen om te vinden wat je zoekt.</p></div>`;
}

// Klinimetrie en Snelkoppelingen: in de testomgeving bleef de pagina leeg onder de cliëntkop.
const pLeeg = (c) => clientKop(c);

const PAGINAS = {
  overzicht: (c) => `${clientKop(c)}${pOverzicht(c)}`,
  vragenlijsten: pVragenlijsten,
  plan: pPlan,
  rapportages: pRapportages,
  agenda: pAgenda,
  klinimetrie: pLeeg,
  snelkoppelingen: pLeeg,
  'a-overzicht': pAdminOverzicht,
  'a-algemeen': pAlgemeen,
  'a-netwerk': pNetwerk,
  'a-financieel': pFinancieel,
  'a-documenten': pDocumenten,
};

// ---------- vensters ----------

function vensterVragenlijst() {
  const z = norm(S.vensterZoek);
  const lijst = VRAGENLIJSTEN.filter((v) => !z || norm(v.titel).includes(z) || norm(v.omschrijving).includes(z));
  return `
    <div class="oef-venster oef-venster--wit" role="dialog" aria-modal="true" aria-labelledby="oef-venster-kop">
      <div class="oef-venster__kop"><h3 id="oef-venster-kop">Maak een nieuwe vragenlijst aan</h3>${knop('sluit', icoon('sluit'), { klasse: 'oef-sluit', label: 'Sluiten' })}</div>
      <div class="oef-venster__lijf">
        <div class="oef-zoekveld oef-zoekveld--paars">${icoon('zoek')}<label class="sr" for="oef-vlvenster">Zoek vragenlijst</label><input id="oef-vlvenster" type="search" placeholder="Zoek vragenlijst" value="${esc(S.vensterZoek)}" data-oefen-invoer="venster-zoek"></div>
        <div class="oef-vlkeuzes" data-oefen-regio="vl-keuzes">${lijst.length ? lijst.map((v) => knop('vl-kies', `<span class="oef-vlkeuze__titel">${esc(v.titel)}</span><span class="oef-vlkeuze__tekst">${esc(v.omschrijving)}</span>`, { waarde: v.titel, klasse: 'oef-vlkeuze' })).join('') : leeg('Geen vragenlijsten gevonden')}</div>
      </div>
    </div>`;
}

function vensterRapportagetype() {
  return `
    <div class="oef-venster" role="dialog" aria-modal="true" aria-labelledby="oef-venster-kop">
      <div class="oef-venster__kop oef-venster__kop--blauw"><h3 id="oef-venster-kop">Rapportagetype toevoegen</h3>${knop('sluit', icoon('sluit'), { klasse: 'oef-sluit', label: 'Sluiten' })}</div>
      <div class="oef-typen">${RAPPORTAGETYPEN.map(([naam, kleur]) => knop('rap-type', `<span class="oef-type__ic" style="--k:${kleur}" aria-hidden="true">${naam === 'SOEP' ? '<b>SO<br>EP</b>' : icoon(TYPE_IC[naam] || 'document')}</span>${esc(naam)}`, { waarde: naam, klasse: 'oef-type' })).join('')}</div>
    </div>`;
}
const TYPE_IC = { Bloeddruk: 'ster', Temperatuur: 'klinimetrie', Medisch: 'plus', Stemming: 'zon', Klinimetrie: 'klinimetrie', Fotorapportage: 'document', 'Keten communicatie': 'netwerk', 'Familie communicatie': 'netwerk' };

function modulekiezer() {
  return `
    <div class="oef-modules" role="dialog" aria-modal="true" aria-label="Modules">
      <p class="oef-modules__test">${icoon('waarschuwing')} Testomgeving</p>
      <div class="oef-modules__lijf">
        ${MODULES.map(([groep, lijst], i) => `
          <div class="oef-modules__kolom${i === 0 ? ' is-eerste' : ''}">
            <h3>${esc(groep)}</h3>
            <ul>${lijst.map(([naam, kleur]) => `<li>${knop('module', `<span class="oef-module__ic" style="--k:${kleur}">${icoon('module')}</span>${esc(naam)}`, { waarde: naam, klasse: 'oef-module' })}</li>`).join('')}</ul>
          </div>`).join('')}
      </div>
    </div>`;
}

// ---------- opdrachten ----------

function opdrachtenPaneel() {
  const k = S.opgeslagen.klaar;
  const aantal = TEKSTEN.opdrachten.filter((o) => k[o.id]).length;
  return `
    <section class="oef__opdrachten" aria-labelledby="oef-opdr-kop">
      <div class="oef__opdr-kop">
        <div>
          <h2 id="oef-opdr-kop">${TEKSTEN.kop}</h2>
          <p>${TEKSTEN.intro}</p>
        </div>
        <p class="oef__teller" aria-live="polite"><strong>${aantal}</strong> van ${TEKSTEN.opdrachten.length} gedaan</p>
      </div>
      <ol class="oef__lijst">
        ${TEKSTEN.opdrachten.map((o, i) => `
          <li class="oef__opdracht${k[o.id] ? ' is-klaar' : ''}">
            <span class="oef__vink" aria-hidden="true">${k[o.id] ? icoon('vink') : i + 1}</span>
            <div>
              <p>${esc(o.tekst)}<span class="sr">${k[o.id] ? ' Gedaan.' : ' Nog niet gedaan.'}</span></p>
              ${o.tip && !k[o.id] ? `<p class="oef__tip">${esc(o.tip)}</p>` : ''}
              ${o.vraag && !k[o.id] ? `<div class="oef__vraag" role="group" aria-label="${esc(o.vraag)}"><span>${esc(o.vraag)}</span>${ICE_KEUZES.map((n) => knop('ice', esc(n), { waarde: n, klasse: 'oef__keuze' })).join('')}</div>` : ''}
              ${o.vraag && k[o.id] ? `<p class="oef__tip">Goed: ${ICE_GOED}.</p>` : ''}
            </div>
          </li>`).join('')}
      </ol>
      <button type="button" class="btn btn--rand oef__opnieuw" data-oefen="reset">${TEKSTEN.opnieuw}</button>
    </section>`;
}

// ---------- render ----------

function render() {
  const { container } = huidig;
  const c = client();
  const dossier = S.scherm === 'dossier' && c;
  const venster = S.venster === 'vragenlijst' ? vensterVragenlijst() : S.venster === 'rapportagetype' ? vensterRapportagetype() : '';
  container.innerHTML = `
    <div class="oef">
      ${opdrachtenPaneel()}
      <div class="ons ons--oefen${S.ingeklapt ? ' is-ingeklapt' : ''}${S.venster ? ' heeft-venster' : ''}" role="region" aria-label="Oefenomgeving Nedap ONS">
        ${bovenbalk()}
        ${S.venster === 'modules' ? modulekiezer() : ''}
        ${dossier ? `
          <div class="ons__lijf">
            ${menu()}
            <main class="ons__inhoud oef-inhoud" data-oefen-regio="inhoud">${PAGINAS[S.pagina](c)}</main>
          </div>` : `<div class="oef-startlijf">${startscherm()}</div>`}
        ${venster ? `<div class="oef-dimmer">${venster}</div>` : ''}
        ${S.onsMelding ? `<p class="ons__melding" role="status"><span aria-hidden="true">✓</span> ${esc(S.onsMelding)}</p>` : ''}
      </div>
    </div>`;
  if (S.onsMelding) {
    S.onsMelding = null;
    const el = container.querySelector('.ons__melding');
    setTimeout(() => el?.remove(), 3200);
  }
  // Op een telefoon is het menu een rij om te schuiven. Houd het actieve item in beeld.
  const nav = container.querySelector('.oef-menu');
  const actief = nav?.querySelector('.is-actief');
  if (nav && actief && nav.scrollWidth > nav.clientWidth) nav.scrollLeft = actief.offsetLeft - nav.offsetLeft - 48;
  if (S.focus) {
    const el = container.querySelector(S.focus);
    S.focus = null;
    el?.focus();
  }
}

// ---------- gedrag ----------

function opDossier(id) {
  S.scherm = 'dossier';
  S.clientId = id;
  S.laatst = [id, ...S.laatst.filter((x) => x !== id)].slice(0, 4);
  naarPagina('overzicht');
  S.focus = '[data-oefen="pagina"][data-waarde="overzicht"]';
  if (id === 'jdv') klaar('a');
}

function naarPagina(p) {
  Object.assign(S, {
    pagina: p, venster: null, meerInfo: false, agendaMenu: false, vlOpen: null, vlZoek: '', planStap: null, planTab: 'zorgplan',
    rapTab: 'lijst', rapZoek: '', rapSoort: 'alle', docTab: 'actueel',
  });
}

function sluitVenster() {
  const terug = S.terugFocus;
  S.venster = null;
  S.vensterZoek = '';
  S.focus = terug;
}

function opslaan() {
  const c = client();
  if (!c || !kanOpslaan()) return;
  const nu = new Date();
  const basis = { auteur: MEDEWERKER, datum: datum(nu), tijd: tijd(nu), eigen: true };
  const r = S.rapTab === 'soep'
    ? { ...basis, soort: 'soep', s: S.concept.s.trim(), o: S.concept.o.trim(), e: S.concept.e.trim(), p: S.concept.p.trim(), tekst: ['s', 'o', 'e', 'p'].map((k) => S.concept[k]).join(' ') }
    : { ...basis, soort: 'vrij', tekst: S.concept.tekst.trim() };
  S.opgeslagen.rapportages[c.id] = [r, ...(S.opgeslagen.rapportages[c.id] || [])];
  bewaar();
  S.concept = { tekst: '', s: '', o: '', e: '', p: '' };
  S.rapZoek = '';
  S.rapSoort = 'alle';
  S.onsMelding = 'Rapportage is opgeslagen';
  S.focus = '#oef-nieuwste';
  if (c.id === 'jdv') klaar('c');
}

function actie(a, w, el) {
  const { meld } = huidig.opties;
  S.focus = `[data-oefen="${a}"]${w !== undefined ? `[data-waarde="${CSS.escape(w)}"]` : ''}`;
  switch (a) {
    case 'start': S.scherm = 'zoeken'; S.clientId = null; S.venster = null; S.focus = '#oef-zoek'; break;
    case 'mijn': S.mijn = !S.mijn; break;
    case 'client': opDossier(w); break;
    case 'pagina': naarPagina(w); S.focus = `[data-oefen="pagina"][data-waarde="${w}"]`; break;
    case 'inklappen': S.ingeklapt = !S.ingeklapt; break;
    case 'modules':
      if (S.venster === 'modules') sluitVenster();
      else { S.venster = 'modules'; S.terugFocus = '.oef-pil'; S.focus = '[data-oefen="module"][data-waarde="Dossier"]'; }
      break;
    case 'module':
      if (w === 'Dossier') { sluitVenster(); if (S.scherm === 'dossier' && isAdmin()) naarPagina('overzicht'); }
      else { meld?.(TEKSTEN.module); S.focus = null; return; }
      break;
    case 'sluit': sluitVenster(); break;
    case 'niet': meld?.(TEKSTEN.niet); S.focus = null; return;
    case 'meer-info': S.meerInfo = !S.meerInfo; break;
    case 'vl-tab': S.vlTab = w; break;
    case 'vl-open': S.vlOpen = Number(w); S.focus = '.oef-vl__titel'; break;
    case 'vl-terug': S.vlOpen = null; S.focus = '.ons__titel'; break;
    case 'vl-nieuw': S.venster = 'vragenlijst'; S.terugFocus = '[data-oefen="vl-nieuw"]'; S.focus = '#oef-vlvenster'; break;
    case 'vl-kies': {
      const c = client();
      const vandaag = datum(new Date());
      S.opgeslagen.vragenlijsten[c.id] = [{ titel: w, door: MEDEWERKER, aangepast: vandaag, gemaakt: vandaag }, ...(S.opgeslagen.vragenlijsten[c.id] || [])];
      bewaar();
      sluitVenster();
      S.vlTab = 'actueel';
      S.onsMelding = 'Vragenlijst is aangemaakt';
      break;
    }
    case 'plan-tab': S.planTab = w; break;
    case 'plan-wijzig':
      S.planStap = 'plan'; S.focus = '#oef-plan-start';
      if (S.clientId === 'jdv') klaar('b');
      break;
    case 'plan-terug': S.planStap = S.planStap === 'plan' ? null : 'plan'; S.focus = S.planStap ? '#oef-plan-start' : '.ons__titel'; break;
    case 'plan-doel': S.planStap = 'doel'; S.planDomein = Number(w) || 0; S.focus = '#oef-kies-kop'; break;
    case 'plan-kies-doel': S.planStap = 'actie'; S.focus = '[data-oefen="plan-kies-actie"]'; break;
    case 'plan-kies-actie': {
      const d = client().plan[S.planDomein];
      const lijst = S.extraDoelen[S.clientId] || [];
      lijst.push({ domein: S.planDomein, doel: `Ondersteuning volgens '${d.onderwerp}'.`, actie: `Bekijk de inhoud van de Vragenlijst 'Mikzo Kompas - ${d.onderwerp}'.` });
      S.extraDoelen[S.clientId] = lijst;
      S.planStap = 'plan';
      S.focus = '#oef-plan-start';
      meld?.(TEKSTEN.doel);
      break;
    }
    case 'rap-tab': S.rapTab = w; S.focus = w === 'lijst' ? `[data-oefen="rap-tab"][data-waarde="lijst"]` : '#oef-rap-kop'; break;
    case 'rap-plus': S.venster = 'rapportagetype'; S.terugFocus = '[data-oefen="rap-plus"]'; S.focus = '[data-oefen="rap-type"]'; break;
    case 'rap-type':
      if (w === 'SOEP') { S.venster = null; S.rapTab = 'soep'; S.focus = '#oef-soep-s'; }
      else { meld?.(TEKSTEN.type); S.focus = null; return; }
      break;
    case 'rap-opslaan': opslaan(); break;
    case 'metingen': S.metingen = !S.metingen; break;
    case 'agenda-week': S.week += Number(w); break;
    case 'agenda-menu': S.agendaMenu = !S.agendaMenu; if (S.agendaMenu) S.focus = '[data-oefen="agenda-kies"]'; break;
    case 'agenda-kies': S.agendaMenu = false; S.focus = '[data-oefen="agenda-menu"]'; meld?.(TEKSTEN.niet); break;
    case 'doc-tab': S.docTab = w; break;
    case 'ice':
      if (w === ICE_GOED) { klaar('d'); S.focus = '.oef__opnieuw'; }
      else { meld?.(TEKSTEN.iceFout); S.focus = null; return; }
      break;
    case 'reset': resetOefenen(); meld?.(TEKSTEN.reset); huidig.container.querySelector('.oef__opnieuw')?.focus(); return;
    default: return;
  }
  render();
}

function opInvoer(e) {
  const el = e.target;
  const soort = el.dataset?.oefenInvoer;
  if (!soort) return;
  const c = client();
  const regio = (naam, html) => { const r = huidig.container.querySelector(`[data-oefen-regio="${naam}"]`); if (r) r.innerHTML = html; };
  if (soort === 'zoek') { S.zoek = el.value; regio('resultaten', resultaten()); return; }
  if (soort === 'vl-zoek') { S.vlZoek = el.value; regio('vl-rijen', vlRijen(c)); return; }
  if (soort === 'rap-zoek') { S.rapZoek = el.value; regio('rap-lijst', rapRegels(c)); return; }
  if (soort === 'rap-soort') { S.rapSoort = el.value; regio('rap-lijst', rapRegels(c)); return; }
  if (soort === 'venster-zoek') { S.vensterZoek = el.value; render(); S.focus = null; const i = huidig.container.querySelector('#oef-vlvenster'); i?.focus(); i?.setSelectionRange(i.value.length, i.value.length); return; }
  if (['tekst', 's', 'o', 'e', 'p'].includes(soort)) {
    S.concept[soort] = el.value;
    huidig.container.querySelectorAll('.oef-opslaan').forEach((b) => { b.disabled = !kanOpslaan(); });
  }
}

function opWijziging(e) {
  const st = e.target.dataset?.oefenStatus;
  if (st) {
    S.statussen = e.target.checked ? [...S.statussen, st] : S.statussen.filter((x) => x !== st);
    huidig.container.querySelector('[data-oefen-regio="resultaten"]').innerHTML = resultaten();
    return;
  }
  if (e.target.dataset?.oefenInvoer === 'rap-soort') opInvoer(e);
}

function opToets(e) {
  if (e.key === 'Escape') {
    if (S.venster) { e.preventDefault(); sluitVenster(); render(); }
    else if (S.agendaMenu) { e.preventDefault(); S.agendaMenu = false; S.focus = '[data-oefen="agenda-menu"]'; render(); }
    return;
  }
  // Houd de focus binnen een open venster.
  if (e.key === 'Tab' && S.venster) {
    const v = huidig.container.querySelector(S.venster === 'modules' ? '.oef-modules' : '.oef-venster');
    if (!v) return;
    const f = [...v.querySelectorAll('button:not([disabled]),input,select,textarea')];
    if (!f.length) return;
    const eerste = f[0];
    const laatste = f[f.length - 1];
    if (e.shiftKey && document.activeElement === eerste) { e.preventDefault(); laatste.focus(); }
    else if (!e.shiftKey && document.activeElement === laatste) { e.preventDefault(); eerste.focus(); }
  }
}

function koppel(container) {
  if (gekoppeld.has(container)) return;
  gekoppeld.add(container);
  container.addEventListener('click', (e) => {
    if (huidig?.container !== container) return;
    if (e.target.classList?.contains('oef-dimmer')) { sluitVenster(); render(); return; }
    const el = e.target.closest('[data-oefen]');
    if (!el || !container.contains(el) || el.disabled) return;
    actie(el.dataset.oefen, el.dataset.waarde, el);
  });
  container.addEventListener('input', (e) => { if (huidig?.container === container && e.target.dataset?.oefenInvoer !== 'rap-soort') opInvoer(e); });
  container.addEventListener('change', (e) => { if (huidig?.container === container) opWijziging(e); });
  container.addEventListener('keydown', (e) => { if (huidig?.container === container) opToets(e); });
  container.addEventListener('submit', (e) => {
    if (huidig?.container !== container) return;
    const f = e.target.closest('[data-oefen-form="balkzoek"]');
    if (!f) return;
    e.preventDefault();
    S.zoek = f.querySelector('input').value;
    S.scherm = 'zoeken';
    S.clientId = null;
    S.venster = null;
    S.focus = '#oef-zoek';
    render();
  });
}

export function mountOefenen(container, opties = {}) {
  if (!container) return;
  const eerste = !huidig;
  huidig = { container, opties };
  if (eerste) laad();
  koppel(container);
  render();
}
