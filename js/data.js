// Alle demogegevens. Fictieve organisatie, fictieve mensen, geen cliëntgegevens.

export const ORGANISATIE = {
  naam: 'De Wilgenhof',
  voluit: 'Zorggroep De Wilgenhof',
  ecd: 'Nedap ONS',
};

export const PROFIELEN = {
  vig: { id: 'vig', naam: 'Verzorgende IG', meervoud: 'verzorgenden IG', jij: 'verzorgende IG' },
  helpende: { id: 'helpende', naam: 'Helpende en woonzorgondersteuner', meervoud: 'helpenden en woonzorgondersteuners', jij: 'helpende' },
};

export const DELEN = [
  { id: 'welkom', titel: 'Welkom', uitleg: 'Even rondkijken voordat je begint.' },
  { id: 'start', titel: 'Hoe start je een dienst?', uitleg: 'Wat je doet in de eerste tien minuten.' },
  { id: 'tijdens', titel: 'Tijdens je dienst', uitleg: 'Het werk aan het bed, en hoe je het vastlegt.' },
  { id: 'afspraken', titel: 'Algemene werkafspraken', uitleg: 'Afspraken die voor iedereen gelden.' },
  { id: 'apps', titel: 'Apps', uitleg: 'De apps op je telefoon voor je werk.' },
];

// minuten zijn een indicatie voor de demo
export const MODULES = [
  { id: 'rondleiding', deel: 'welkom', titel: 'Rondleiding: zo werken wij bij De Wilgenhof', min: 3, toets: false, varianten: 0, leer: 'Waar je alles vindt in deze leeromgeving en in Nedap ONS, en bij wie je terechtkunt met een vraag.' },
  { id: 'overdracht', deel: 'start', titel: 'Bekijk de overdrachts\u00ADagenda en de overdrachts\u00ADrapportages', min: 6, toets: false, varianten: 2, leer: 'Wat er de vorige dienst is gebeurd, en wat je daarmee doet voordat je de eerste kamer in gaat.' },
  { id: 'opzoeken', deel: 'start', titel: 'Cliënten opzoeken', min: 5, toets: false, varianten: 1, leer: 'Snel de goede cliënt vinden, ook als je op een andere afdeling invalt.' },
  { id: 'rapporteren', deel: 'tijdens', titel: 'Rapporteren', min: 7, toets: true, varianten: 3, leer: 'Rapporteren zoals wij dat bij De Wilgenhof doen: wat je zag, wat je deed, en op welk doel het hoort.' },
  { id: 'klinimetrie', deel: 'tijdens', titel: 'Klinimetrie', min: 7, toets: true, varianten: 2, leer: 'Metingen vastleggen, zoals pijn en gewicht, en wanneer een uitslag een actie vraagt.' },
  { id: 'zorgplan', deel: 'tijdens', titel: 'Het zorgplan', min: 7, toets: true, varianten: 2, leer: 'Het zorgplan lezen en gebruiken, zodat je weet wat er per cliënt is afgesproken.' },
  { id: 'mikzo', deel: 'tijdens', titel: 'Werken met Mikzo', min: 6, toets: true, varianten: 2, leer: 'De vijf domeinen van Mikzo, en hoe ze terugkomen in je dagelijkse werk.' },
  { id: 'episodes', deel: 'tijdens', titel: 'Kortdurende zorgbehoefte (episodes)', min: 6, toets: false, varianten: 2, leer: 'Iets wat een paar dagen speelt, zoals een blaasontsteking, vastleggen zonder het zorgplan aan te passen.' },
  { id: 'escaleren', deel: 'tijdens', titel: 'Escaleren: jezelf autoriseren voor een cliënt', min: 6, toets: true, varianten: 3, leer: 'Wat je doet als je bij een cliënt moet die niet in jouw lijst staat, en wanneer dat mag.' },
  { id: 'familie', deel: 'tijdens', titel: 'Afspraken met familie vastleggen', min: 6, toets: true, varianten: 2, leer: 'Afspraken met familie zo vastleggen dat je collega ze morgen ook kent.' },
  { id: 'zp10', deel: 'afspraken', titel: 'ZP10: zorgpad stervensfase', min: 7, toets: false, varianten: 1, leer: 'Hoe het zorgpad werkt, en wat je vastlegt in de laatste levensfase.' },
  { id: 'mic', deel: 'afspraken', titel: 'MIC-meldingen', min: 6, toets: false, varianten: 2, leer: 'Een incident melden om van te leren, en wat er daarna met je melding gebeurt.' },
  { id: 'authenticator', deel: 'apps', titel: 'Authenticator', min: 5, toets: false, varianten: 0, leer: 'Inloggen met de code op je telefoon, en wat je doet als je een nieuwe telefoon hebt.' },
  { id: 'wondzorg', deel: 'apps', titel: 'Wondzorgapp', min: 6, toets: false, varianten: 1, leer: 'Een wond fotograferen en vastleggen, volgens onze afspraak.' },
  { id: 'onsdossier', deel: 'apps', titel: 'Ons Dossier', min: 6, toets: false, varianten: 1, leer: 'Rapporteren en aftekenen vanaf je telefoon, aan het bed.' },
];

// Welke modules standaard bij welk profiel horen. De opleider kan dit aanpassen.
export const TOEWIJZING = {
  vig: MODULES.map((m) => m.id),
  helpende: ['rondleiding', 'overdracht', 'opzoeken', 'rapporteren', 'zorgplan', 'familie', 'mic', 'authenticator', 'onsdossier'],
};

export const MEDEWERKER = { naam: 'Sanne', achternaam: 'Visser', profiel: 'vig', afdeling: 'De Linde' };

// Verzonnen collega's voor het dashboard. "klaar" is het aantal afgeronde modules.
export const COLLEGAS = [
  { naam: 'Fatima el Amrani', profiel: 'vig', afdeling: 'De Linde', start: '2026-09-01', klaar: 15, toets: 92 },
  { naam: 'Joost de Graaf', profiel: 'vig', afdeling: 'De Linde', start: '2026-09-08', klaar: 12, toets: 84 },
  { naam: 'Lieke Hoekstra', profiel: 'helpende', afdeling: 'De Eik', start: '2026-09-08', klaar: 9, toets: 88 },
  { naam: 'Mehmet Yilmaz', profiel: 'vig', afdeling: 'De Eik', start: '2026-09-15', klaar: 6, toets: 76 },
  { naam: 'Anouk Brink', profiel: 'helpende', afdeling: 'De Linde', start: '2026-09-22', klaar: 4, toets: 90 },
  { naam: 'Daan Kuipers', profiel: 'vig', afdeling: 'De Beuk', start: '2026-09-22', klaar: 2, toets: null },
  { naam: 'Ilse Mulder', profiel: 'helpende', afdeling: 'De Beuk', start: '2026-09-29', klaar: 1, toets: null },
];

export const TIPS = [
  { kop: 'Schrijf voor de volgende dienst', tekst: 'Schrijf je rapportage zo dat je collega van de avond er zonder te bellen mee verder kan.' },
  { kop: 'Wat je ziet, niet wat je denkt', tekst: '"Mevrouw at een halve boterham" zegt meer dan "mevrouw at slecht". Bij De Wilgenhof leest de familie mee.' },
  { kop: 'Een melding is om te leren', tekst: 'Een MIC-melding gaat over wat er gebeurde, niet over wie het deed. Twijfel je? Meld het.' },
  { kop: 'Speelt het maar een paar dagen?', tekst: 'Leg het vast als episode. Duurt het langer, bespreek dan met de EVV\'er of het in het zorgplan hoort.' },
  { kop: 'Loop je weg van de pc?', tekst: 'Vergrendel het scherm. Cliëntgegevens horen niet op een scherm dat openstaat in de huiskamer.' },
];

export const HUISSTIJL_VOORBEELDEN = [
  { id: 'onsopmaat', naam: 'Ons Op Maat, standaard', kleuren: {} },
  { id: 'wilgenhof', naam: 'De Wilgenhof, voorbeeld', kleuren: { paneel: '#3D2A55', merk: '#6A4C93', actie: '#F2B33D', zacht: '#EFE9F5' }, logo: 'wilg' },
  { id: 'kustzorg', naam: 'Zorggroep Aan Zee, voorbeeld', kleuren: { paneel: '#0F3D5C', merk: '#1F6F9F', actie: '#F08A5D', zacht: '#E4F0F7' } },
];
