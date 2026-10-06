// Casus Wondzorgapp bij De Wilgenhof.
// Fictieve cliënt, fictieve werkafspraken. Elke keuze heeft een eigen vervolg (variant).

export default {
  id: 'wondzorg',
  stapNamen: ['Situatie', 'Foto maken', 'Beschrijven'],
  les: [
    {
      kop: 'Waarom wondfoto\'s in de app',
      beeld: 'wond',
      tekst: [
        'Een foto laat beter zien hoe een wond verandert dan alleen tekst. De wondverpleegkundige legt de foto\'s naast elkaar en ziet of de wond geneest.',
        'Een wondfoto is een gegeven over de gezondheid van een cliënt. Daarom maak je hem in de wondzorgapp. De foto gaat dan naar het dossier en blijft niet op je telefoon staan.',
      ],
      punten: [
        'Nooit met de gewone camera van je telefoon.',
        'Nooit via WhatsApp of mail.',
      ],
    },
    {
      kop: 'Een foto die je kunt vergelijken',
      beeld: 'meten',
      tekst: [
        'Een foto is pas bruikbaar als je hem kunt vergelijken met de vorige. Maak hem daarom elke keer op dezelfde manier.',
      ],
      punten: [
        'Leg een meetlatje naast de wond.',
        'Zorg voor goed licht, zonder flits die weerkaatst.',
        'Zet alleen de wond in beeld, geen gezicht.',
        'Fotografeer recht van voren, zoals de vorige keer.',
      ],
    },
    {
      kop: 'De wond beschrijven',
      beeld: 'rapport',
      tekst: [
        'Bij de foto schrijf je wat je zag. De app vraagt dat per onderdeel. Bij de grootte noteer je lengte en breedte in centimeters. Het wondbed is de bodem van de wond, met zijn kleur. Wondvocht zie je in de wond en in het oude verband.',
        'De wondrand is de rand van de wond en de huid eromheen. Vraag de cliënt ook of het verwisselen pijn doet, en schrijf op wat ze zegt.',
      ],
    },
    {
      kop: 'Hoe het gaat in de app',
      beeld: 'wond',
      tekst: [
        'Je opent de wondzorgapp op je telefoon, kiest de cliënt en de wond. Dan maak je de foto en vul je de beschrijving in.',
        'In het volgende deel doen we dat samen een keer in de app.',
      ],
    },
  ],
  doorklik: {
    plek: 'telefoon',
    app: 'Wondzorgapp',
    klaar: 'Zo leg je een wond vast: cliënt kiezen, de wond kiezen, foto maken met meetlatje, beschrijven en opslaan.',
    stappen: [
      {
        zeg: 'Je opent de wondzorgapp. Je ziet de cliënten van jouw afdeling met een wond.',
        doe: 'Tik op mevrouw Van Dam',
        doel: { regel: 'M van Dam' },
        pagina: {
          balk: 'Wondzorgapp',
          kaarten: [{ kop: 'De Linde', regels: ['M van Dam', 'H Smit'] }],
        },
      },
      {
        zeg: 'Mevrouw Van Dam heeft één wond in de app. Je ziet ook wanneer de laatste foto is gemaakt.',
        doe: 'Tik op de wond aan het onderbeen',
        doel: { regel: 'Wond onderbeen' },
        pagina: {
          balk: 'M van Dam',
          kaarten: [{ kop: 'Wonden', regels: ['Wond onderbeen', 'Laatste foto: vorige week woensdag'] }],
        },
      },
      {
        zeg: 'Hier zie je de vorige foto\'s en het wondzorgplan. Het oude verband is eraf en de wond is schoon.',
        doe: 'Tik op Foto maken',
        doel: { knop: 'Foto maken' },
        pagina: {
          balk: 'Wond onderbeen',
          knoppen: ['Foto maken'],
          kaarten: [{ kop: 'Wondzorgplan', regels: ['Verband wisselen op maandag en woensdag', 'Foto bij de wissel op woensdag'] }],
        },
      },
      {
        zeg: 'De camera van de app staat open. Leg het meetlatje naast de wond en kijk of het licht goed is. Ziet het er goed uit, dan gebruik je de foto.',
        doe: 'Tik op Foto gebruiken',
        doel: { knop: 'Foto gebruiken' },
        pagina: {
          balk: 'Foto',
          knoppen: ['Opnieuw', 'Foto gebruiken'],
          kaarten: [{ kop: 'Controleer de foto', regels: ['Meetlatje in beeld?', 'Genoeg licht?', 'Alleen de wond in beeld?'] }],
        },
      },
      {
        zeg: 'Nu beschrijf je de wond, onderdeel voor onderdeel. Daarna sla je op en staat alles in het dossier.',
        doe: 'Tik op Opslaan',
        doel: { knop: 'Opslaan' },
        pagina: {
          balk: 'Wondbeschrijving',
          knoppen: ['Opslaan'],
          velden: [
            { label: 'Grootte', waarde: 'Lengte en breedte in cm' },
            { label: 'Wondbed', waarde: 'Kies een kleur' },
            { label: 'Wondvocht', waarde: 'Kies hoeveel en welke kleur' },
            { label: 'Wondrand en huid', waarde: 'Wat zie je?' },
            { label: 'Pijn', waarde: 'Wat zegt de cliënt?' },
          ],
        },
      },
    ],
  },
  startKnop: 'Ik ga de wond vastleggen',
  intro: {
    tijd: 'Woensdag 9.30 uur, vroege dienst op De Linde',
    kop: 'Mevrouw Van Dam heeft een wond aan haar onderbeen',
    tekst: [
      'Mevrouw Van Dam stootte vorige week haar onderbeen tegen de rolstoel. Er zit een wond. In het wondzorgplan staat dat je bij elke verbandwissel op woensdag een foto maakt.',
      'Bij De Wilgenhof maak je wondfoto\'s alleen in de wondzorgapp. Zo komt de foto in het dossier en niet op je telefoon.',
    ],
  },
  stappen: [
    {
      type: 'keuze',
      vraag: 'Het oude verband is eraf en de wond is schoongemaakt. Hoe maak je de foto?',
      opties: [
        {
          tekst: 'Met de camera van je telefoon. Je stuurt de foto via WhatsApp naar de wondverpleegkundige.',
          goed: false,
          variant: {
            kop: 'Die avond',
            tekst: 'Je laat thuis vakantiefoto\'s zien en daar staat ineens het been van mevrouw Van Dam tussen. De foto staat ook in WhatsApp. Je teamleider vraagt je een datalek te melden.',
          },
          uitleg: 'Een wondfoto is een gegeven over de gezondheid van een cliënt. Die hoort in het dossier, niet in je eigen fotomap of in WhatsApp.',
        },
        {
          tekst: 'In de wondzorgapp, met een meetlatje naast de wond, bij goed licht en alleen de wond in beeld.',
          goed: true,
          variant: {
            kop: 'Volgende week',
            tekst: 'De wondverpleegkundige legt de foto naast die van vandaag. Door het meetlatje ziet ze dat de wond een halve centimeter kleiner is.',
          },
          uitleg: 'Zo is elke foto te vergelijken met de vorige, en blijft hij in het dossier.',
        },
        {
          tekst: 'In de wondzorgapp, snel van bovenaf, zonder meetlatje.',
          goed: false,
          variant: {
            kop: 'Volgende week',
            tekst: 'De wondverpleegkundige kijkt naar de foto\'s en kan niet zien of de wond groter of kleiner wordt. Ze vraagt een nieuwe foto en moet zelf langskomen.',
          },
          uitleg: 'Zonder meetlatje en goed licht kun je foto\'s niet met elkaar vergelijken. Bij De Wilgenhof leg je altijd een meetlatje naast de wond.',
        },
      ],
    },
    {
      type: 'koppel',
      vraag: 'Je beschrijft de wond bij de foto. Bij welk onderdeel hoort elke waarneming?',
      scherm: 'Wondbeschrijving · mevrouw Van Dam',
      kiesTekst: 'Kies een onderdeel',
      regels: [
        { waarneming: '3 bij 2 centimeter', goed: 'grootte' },
        { waarneming: 'Het wondbed is rood', goed: 'wondbed' },
        { waarneming: 'Geel vocht in het oude verband', goed: 'vocht' },
        { waarneming: 'De huid rond de wond is wit en week', goed: 'wondrand' },
        { waarneming: 'Mevrouw zegt dat het verwisselen pijn doet', goed: 'pijn' },
      ],
      opties: [
        { id: 'grootte', naam: 'Grootte' },
        { id: 'wondbed', naam: 'Wondbed' },
        { id: 'vocht', naam: 'Wondvocht' },
        { id: 'wondrand', naam: 'Wondrand en huid' },
        { id: 'pijn', naam: 'Pijn' },
      ],
      goedTekst: 'Goed beschreven. Met de foto erbij ziet de wondverpleegkundige precies hoe de wond eruitziet.',
      foutTekst: 'Nog niet helemaal. De maat is de grootte. De kleur van de wond zelf is het wondbed. Vocht in het verband is wondvocht. Witte, weke huid rond de wond hoort bij de wondrand. Wat mevrouw zegt over het verwisselen is pijn.',
    },
  ],
  samenvatting: [
    'Maak een wondfoto alleen in de wondzorgapp, nooit met je eigen camera.',
    'Leg altijd een meetlatje naast de wond en zorg voor goed licht.',
    'Beschrijf bij de foto de grootte, het wondbed, het vocht, de wondrand en de pijn.',
  ],
};
