// Casus Werken met Mikzo bij De Wilgenhof.
// Fictieve cliënt, fictieve werkafspraken. Elke keuze heeft een eigen vervolg (variant).

export default {
  id: 'mikzo',
  stapNamen: ['Situatie', 'Domeinen', 'Welzijn', 'Veiligheid'],
  startKnop: 'Ik ga aan de slag',
  intro: {
    tijd: 'Vrijdag 14.15 uur, middag op De Linde',
    kop: 'Meneer Hendriks woont hier drie weken',
    tekst: [
      'Meneer Hendriks is 79. Drie weken geleden verhuisde hij naar De Linde. Thuis lukte het niet meer, na de dood van zijn vrouw.',
      'Vandaag vertelt hij veel. Hij mist zijn tuin. Hij wil zijn eigen leunstoel op zijn kamer. En hij wil zelf weten wanneer hij naar bed gaat.',
      'In de overdracht staat dat hij vannacht twee keer op de gang stond, zonder licht en zonder pantoffels. Zijn bloedsuiker was vanochtend hoger dan normaal voor hem.',
    ],
    noot: 'Meneer Hendriks is verzonnen. In deze leeromgeving staan nooit echte cliënten.',
  },
  stappen: [
    {
      type: 'koppel',
      vraag: 'Bij De Wilgenhof werk je met de vijf domeinen van Mikzo. Bij welk domein hoort elke waarneming?',
      uitleg: 'Met de vijf domeinen kijk je naar het hele leven van een cliënt. Gezondheid is daar één deel van.',
      scherm: 'Rapportage · meneer Hendriks',
      kiesTekst: 'Kies een domein',
      regels: [
        { waarneming: 'Meneer wil zelf bepalen wanneer hij naar bed gaat', goed: 'persoonsgericht' },
        { waarneming: 'Meneer wil zijn eigen leunstoel op zijn kamer', goed: 'wonen' },
        { waarneming: 'Meneer mist zijn tuin en zegt dat hij zich verveelt', goed: 'welzijn' },
        { waarneming: 'Meneer stond vannacht op de gang, zonder licht en zonder pantoffels', goed: 'veiligheid' },
        { waarneming: 'Bloedsuiker vanochtend hoger dan normaal voor hem', goed: 'gezondheid' },
      ],
      opties: [
        { id: 'persoonsgericht', naam: 'Persoonsgerichte zorg' },
        { id: 'wonen', naam: 'Wonen' },
        { id: 'welzijn', naam: 'Welzijn' },
        { id: 'veiligheid', naam: 'Veiligheid' },
        { id: 'gezondheid', naam: 'Gezondheid' },
      ],
      goedTekst: 'Goed. Eén middag, en meneer Hendriks raakt alle vijf de domeinen. Zo ziet de EVV\'er het hele plaatje.',
      foutTekst: 'Nog niet helemaal. Zelf bepalen wanneer hij naar bed gaat is persoonsgerichte zorg. Zijn eigen stoel hoort bij wonen. De tuin en de verveling horen bij welzijn. Opstaan in het donker hoort bij veiligheid. De bloedsuiker hoort bij gezondheid.',
    },
    {
      type: 'keuze',
      vraag: 'Meneer zegt: "Ik zit hier maar. Thuis was ik altijd in de tuin." Wat doe je?',
      opties: [
        {
          tekst: 'Ik schrijf in de rapportage: meneer verveelt zich. Dan ga ik verder met mijn werk.',
          goed: false,
          variant: {
            kop: 'Twee weken later',
            tekst: 'Meneer Hendriks komt steeds later uit zijn kamer. Hij eet minder en zegt bijna niets meer. Zijn zoon vraagt aan Joost: "Doen jullie eigenlijk iets met wat mijn vader vertelt?"',
          },
          uitleg: 'Verveelt zich is een begin, maar niemand kan er iets mee. Vraag door en geef het door, zodat er een doel bij welzijn kan komen.',
        },
        {
          tekst: 'Ik zet hem vanmiddag bij de bingo in de huiskamer.',
          goed: false,
          variant: {
            kop: 'Om 15.30 uur',
            tekst: 'Meneer zit stil aan tafel. Na tien minuten staat hij op. "Ik ben geen bingoman." Hij gaat terug naar zijn kamer en doet de deur dicht.',
          },
          uitleg: 'Bezig zijn is niet hetzelfde als iets doen wat bij hem past. Vraag eerst wat hij graag deed.',
        },
        {
          tekst: 'Ik vraag wat hij in de tuin deed. Ik rapporteer het bij welzijn en stel de EVV\'er voor om er een doel van te maken.',
          goed: true,
          variant: {
            kop: 'Een week later',
            tekst: 'Meneer kweekte thuis tomaten. Er staan nu twee plantenbakken op het terras van De Linde. Elke ochtend gaat hij even kijken. Hij vertelt Anouk hoe je tomaten water geeft.',
          },
          uitleg: 'Je vraagt door, je schrijft op wat hij zegt, en je koppelt het aan welzijn. Zo kan de EVV\'er er een doel van maken.',
        },
      ],
    },
    {
      type: 'volgorde',
      vraag: 'Meneer stond vannacht twee keer in het donker op de gang. In welke volgorde pak je dit aan?',
      uitleg: 'Bij De Wilgenhof zoek je bij veiligheid een oplossing die past bij wat de cliënt zelf wil.',
      items: [
        'Vraag meneer waarom hij vannacht opstond.',
        'Rapporteer wat de nachtdienst zag en wat meneer zegt, bij veiligheid.',
        'Bespreek het met de EVV\'er.',
        'De EVV\'er spreekt samen met meneer een maatregel af, zoals een nachtlampje en pantoffels naast het bed.',
        'De afspraak komt in het zorgplan, zodat ook de nachtdienst hem kent.',
      ],
      start: [2, 4, 0, 3, 1],
      goedTekst: 'Goed. Je begint bij meneer zelf. Hij zocht de wc en vond de lichtknop niet. Een nachtlampje helpt al veel.',
      foutTekst: 'Nog niet helemaal. Je vraagt eerst aan meneer waarom hij opstond. Dan rapporteer je het en bespreek je het met de EVV\'er. Zij maakt samen met meneer een afspraak, en die komt in het zorgplan.',
    },
  ],
  toets: [
    {
      vraag: 'Welke vijf domeinen gebruik je bij De Wilgenhof?',
      opties: [
        'Ochtend, middag, avond, nacht en weekend.',
        'Persoonsgerichte zorg, wonen, welzijn, veiligheid en gezondheid.',
        'Eten, drinken, slapen, wassen en lopen.',
      ],
      goed: 1,
    },
    {
      vraag: 'Een cliënt wil zelf bepalen hoe laat hij opstaat. Bij welk domein hoort dat?',
      opties: ['Gezondheid.', 'Veiligheid.', 'Persoonsgerichte zorg.'],
      goed: 2,
    },
    {
      vraag: 'Een cliënt mist haar hobby en zegt dat ze zich verveelt. Bij welk domein hoort dat?',
      opties: ['Welzijn.', 'Wonen.', 'Gezondheid.'],
      goed: 0,
    },
    {
      vraag: 'Waarom werk je met vijf domeinen?',
      opties: [
        'Zodat je minder hoeft te rapporteren.',
        'Zodat je naar het hele leven van de cliënt kijkt.',
        'Omdat Nedap ONS anders niet werkt.',
      ],
      goed: 1,
    },
    {
      vraag: 'Een cliënt staat \'s nachts op in het donker. Wat doe je eerst?',
      opties: [
        'Ik vraag hem waarom hij opstaat.',
        'Ik zet zijn deur op slot.',
        'Ik schrijf alleen in de rapportage dat hij onrustig was.',
      ],
      goed: 0,
    },
  ],
  samenvatting: [
    'Met de vijf domeinen kijk je naar het hele leven van een cliënt.',
    'Koppel wat je ziet en hoort aan het goede domein, dan ziet de EVV\'er het hele plaatje.',
    'Vraag door bij de cliënt zelf. Zijn antwoord is de basis voor een goed doel.',
  ],
};
