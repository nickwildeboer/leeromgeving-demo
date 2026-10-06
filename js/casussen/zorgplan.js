// Casus Het zorgplan bij De Wilgenhof.
// Fictieve cliënt, fictieve werkafspraken. Elke keuze heeft een eigen vervolg (variant).

export default {
  id: 'zorgplan',
  stapNamen: ['Situatie', 'Voorbereiden', 'Lezen', 'Bijsturen'],
  startKnop: 'Ik ga naar mevrouw Peters',
  intro: {
    tijd: 'Donderdag 7.30 uur, vroege dienst op De Linde',
    kop: 'Mevrouw Peters is terug uit het ziekenhuis',
    tekst: [
      'Je bent twee weken met vakantie geweest. Vandaag help je mevrouw Peters weer bij de ochtendzorg. Ze is 81.',
      'Bij de overdracht hoor je dat ze vorige week een paar dagen in het ziekenhuis lag, na een kleine beroerte. Sinds maandag is ze weer op De Linde.',
      'De EVV\'er heeft haar zorgplan aangepast. Je weet nog niet wat er veranderd is.',
    ],
    noot: 'Mevrouw Peters is verzonnen. In deze leeromgeving staan nooit echte cliënten.',
  },
  stappen: [
    {
      type: 'keuze',
      vraag: 'Je staat op de gang bij de kamer van mevrouw Peters. Wat doe je eerst?',
      opties: [
        {
          tekst: 'Ik ga naar binnen. Ik ken mevrouw Peters goed.',
          goed: false,
          variant: {
            kop: 'Bij het ontbijt',
            tekst: 'Je geeft mevrouw haar kop koffie, zoals altijd. Ze verslikt zich en hoest lang. Ze schrikt ervan. Anouk komt aanlopen: "Ze krijgt sinds maandag alles verdikt. Stond dat niet in haar zorgplan?"',
          },
          uitleg: 'Na een ziekenhuisopname verandert er vaak veel. Wat je van vroeger weet, klopt dan misschien niet meer.',
        },
        {
          tekst: 'Ik vraag aan Joost hoe het gaat met mevrouw.',
          goed: false,
          variant: {
            kop: 'Joost weet het ook niet precies',
            tekst: 'Joost werkte deze week vooral op de avond. "Gewoon zoals altijd, denk ik." Je laat mevrouw zonder rollator naar de badkamer lopen. Bij de deur zwikt ze en kun je haar net opvangen.',
          },
          uitleg: 'Een collega helpt je op weg, maar weet niet altijd wat er nieuw is. Wat er is afgesproken, staat in het zorgplan.',
        },
        {
          tekst: 'Ik lees eerst haar zorgplan in Nedap ONS: wat is er veranderd?',
          goed: true,
          variant: {
            kop: 'Vijf minuten later',
            tekst: 'Je weet nu dat mevrouw alleen loopt met de rollator en met iemand naast zich. Ze krijgt haar drinken verdikt. En ze wast zelf haar gezicht en bovenlichaam. Je gaat naar binnen en de ochtend gaat rustig.',
          },
          uitleg: 'In het zorgplan staat wat je met mevrouw hebt afgesproken. Bij De Wilgenhof lees je het na elke opname, en als je een cliënt een tijd niet hebt gezien.',
        },
      ],
    },
    {
      type: 'koppel',
      vraag: 'In het zorgplan staan doelen en acties. Wat is een doel en wat is een actie?',
      uitleg: 'Bij De Wilgenhof is een doel wat je samen met de cliënt wilt bereiken. Een actie is wat jij doet om daar te komen.',
      scherm: 'Zorgplan · mevrouw Peters',
      kiesTekst: 'Doel of actie?',
      regels: [
        { waarneming: 'Mevrouw verslikt zich niet bij het eten en drinken.', goed: 'doel' },
        { waarneming: 'Geef alle dranken verdikt.', goed: 'actie' },
        { waarneming: 'Mevrouw houdt zelf de regie over haar ochtendzorg.', goed: 'doel' },
        { waarneming: 'Geef mevrouw het washandje en wacht tot ze klaar is met haar bovenlichaam.', goed: 'actie' },
        { waarneming: 'Loop naast mevrouw als ze met de rollator loopt.', goed: 'actie' },
      ],
      opties: [
        { id: 'doel', naam: 'Doel' },
        { id: 'actie', naam: 'Actie' },
      ],
      goedTekst: 'Goed. Het doel zegt waarom. De actie zegt wat jij doet. Zo snap je ook waarom je iets doet.',
      foutTekst: 'Nog niet helemaal. Niet verslikken en zelf de regie houden zijn doelen: dat wil mevrouw bereiken. Verdikt drinken geven, het washandje geven en naast haar lopen zijn acties: dat doe jij.',
    },
    {
      type: 'keuze',
      vraag: 'Na het ontbijt loopt mevrouw stevig met haar rollator. Ze zegt: "Ik kan het echt weer alleen hoor." Wat doe je?',
      opties: [
        {
          tekst: 'Ik laat haar vanaf nu alleen lopen. Ze kan het duidelijk weer.',
          goed: false,
          variant: {
            kop: 'Om 13.10 uur',
            tekst: 'Mevrouw loopt na het eten alleen naar haar kamer. Ze is moe en valt in de gang. Ze heeft een schaafwond op haar arm. Haar zoon belt: "In het zorgplan staat toch dat er iemand naast haar loopt?"',
          },
          uitleg: 'Wat jij ziet is belangrijk, maar een afspraak in het zorgplan verander je niet op eigen houtje. Mevrouw is na het eten vaak moe.',
        },
        {
          tekst: 'Ik houd me aan het zorgplan. Ik rapporteer wat ik zag bij het doel en bespreek het met de EVV\'er.',
          goed: true,
          variant: {
            kop: 'Volgende week',
            tekst: 'De EVV\'er vraagt de fysiotherapeut om mee te kijken. Mevrouw mag overdag weer alleen lopen, na het eten nog niet. Het zorgplan is aangepast en mevrouw is er blij mee.',
          },
          uitleg: 'Jouw waarneming helpt om het zorgplan bij te stellen. Bij De Wilgenhof past de EVV\'er het zorgplan aan, samen met de cliënt.',
        },
        {
          tekst: 'Ik pas het zorgplan zelf aan: mevrouw loopt weer alleen.',
          goed: false,
          variant: {
            kop: 'Diezelfde middag',
            tekst: 'De EVV\'er ziet de wijziging en belt je. "De fysiotherapeut heeft haar nog niet gezien. En met mevrouw en haar zoon is er niet over gepraat." Ze zet het zorgplan terug.',
          },
          uitleg: 'Bij De Wilgenhof past de EVV\'er het zorgplan aan, na overleg met de cliënt en zo nodig de familie of de fysiotherapeut. Jij levert de waarneming.',
        },
      ],
    },
  ],
  toets: [
    {
      vraag: 'Wanneer lees je bij De Wilgenhof het zorgplan van een cliënt na?',
      opties: ['Alleen bij de eerste kennismaking.', 'Na een opname, en als je de cliënt een tijd niet hebt gezien.', 'Eén keer per jaar.'],
      goed: 1,
    },
    {
      vraag: 'Welke zin is een doel?',
      opties: ['Mevrouw verslikt zich niet bij het eten en drinken.', 'Geef alle dranken verdikt.', 'Loop naast mevrouw als ze loopt.'],
      goed: 0,
    },
    {
      vraag: 'Je ziet dat een afspraak in het zorgplan niet meer past. Wat doe je?',
      opties: ['Ik doe het voortaan op mijn eigen manier.', 'Ik pas het zorgplan zelf aan.', 'Ik rapporteer wat ik zag en bespreek het met de EVV\'er.'],
      goed: 2,
    },
    {
      vraag: 'Wie past bij De Wilgenhof het zorgplan aan?',
      opties: ['De EVV\'er, samen met de cliënt.', 'Iedere collega die iets ziet.', 'De familie.'],
      goed: 0,
    },
    {
      vraag: 'Een collega zegt: "Gewoon zoals altijd." Maar mevrouw komt net uit het ziekenhuis. Wat doe je?',
      opties: ['Ik doe het zoals altijd.', 'Ik lees eerst het zorgplan in Nedap ONS.', 'Ik vraag het aan mevrouw en doe wat zij zegt.'],
      goed: 1,
    },
  ],
  samenvatting: [
    'Lees het zorgplan voor je begint, zeker na een opname of een tijd weg.',
    'Een doel zegt wat de cliënt wil bereiken. Een actie zegt wat jij doet.',
    'Past een afspraak niet meer, rapporteer het en bespreek het met de EVV\'er.',
  ],
};
