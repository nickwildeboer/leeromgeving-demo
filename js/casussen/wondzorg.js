// Casus Wondzorgapp bij De Wilgenhof.
// Fictieve cliënt, fictieve werkafspraken. Elke keuze heeft een eigen vervolg (variant).

export default {
  id: 'wondzorg',
  stapNamen: ['Situatie', 'Foto maken', 'Beschrijven'],
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
