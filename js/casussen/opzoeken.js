// Casus Cliënten opzoeken bij De Wilgenhof.
// Fictieve cliënten, fictieve werkafspraken. Elke keuze heeft een eigen vervolg (variant).

export default {
  id: 'opzoeken',
  stapNamen: ['Situatie', 'Zoeken', 'Controleren', 'Werkwijze'],
  les: [
    {
      kop: 'Eén naam, meer cliënten',
      beeld: 'zoeken',
      tekst: [
        'Bij De Wilgenhof wonen meer cliënten met dezelfde achternaam. Soms op dezelfde afdeling, soms op een andere.',
        'Open je het verkeerde dossier, dan staat jouw werk bij de verkeerde cliënt. De ene cliënt lijkt dan iets te missen. Bij de andere staat iets wat niet klopt.',
      ],
    },
    {
      kop: 'Zo weet je zeker dat je goed zit',
      beeld: 'dienst',
      tekst: [
        'Een naam alleen is niet genoeg. Je kijkt naar meer gegevens die bij één cliënt horen.',
        'Val je in op een afdeling die je niet kent? Vraag dan eerst aan een collega van die afdeling wie je zoekt.',
      ],
      punten: [
        'De afdeling waar de cliënt woont.',
        'Het kamernummer.',
        'De geboortedatum.',
      ],
    },
    {
      kop: 'Waar het staat in Nedap ONS',
      beeld: 'ons',
      tekst: [
        'Bovenaan elk scherm staat het zoekveld "Zoeken naar cliënten...". Op het startscherm staat ook Cliënt zoeken. Je typt de achternaam en kiest een cliënt uit de lijst.',
        'In het dossier zie je bovenaan de naam van de cliënt. Onder Algemeen staan de persoonsgegevens en de locatie. Daar controleer je of je goed zit.',
        'In het volgende deel klikken we dat samen door.',
      ],
    },
  ],
  doorklik: {
    client: 'H Jansen',
    klaar: 'Zo weet je dat je bij de goede cliënt bent: Algemeen in het menu, afdeling, kamer en geboortedatum controleren, en pas dan de rapportages lezen en vastleggen.',
    stappen: [
      {
        zeg: 'Je hebt "Jansen" gezocht en een meneer Jansen geopend. Bovenaan staat zijn naam. Of het de goede is, weet je nog niet.',
        doe: 'Klik in het menu op Algemeen',
        menu: 'Overzicht',
        doel: { menu: 'Algemeen' },
        pagina: {
          kaarten: [
            { kop: 'Waarschuwingen', regels: ['Geen waarschuwingen'] },
            { kop: 'Belangrijke rapportages', regels: ['Geen belangrijke rapportages'] },
          ],
        },
      },
      {
        zeg: 'Onder Algemeen staan zijn persoonsgegevens en waar hij woont. Lieke zei: De Eik, kamer 4, geboren 12 maart 1941. Dat klopt hier alle drie. Nu lees je wat er vandaag speelt.',
        doe: 'Klik in het menu op Rapportages',
        menu: 'Algemeen',
        doel: { menu: 'Rapportages' },
        pagina: {
          kaarten: [
            { kop: 'Personalia', regels: ['Naam: H Jansen', 'Geboortedatum: 12-03-1941'] },
            { kop: 'Locaties', regels: ['De Eik, kamer 4'] },
          ],
        },
      },
      {
        zeg: 'Lieke heeft vanmiddag geschreven dat meneer weinig drinkt. Na het eten leg jij vast hoeveel hij gedronken heeft. Rechtsboven staat de blauwe plusknop.',
        doe: 'Klik op de plusknop',
        menu: 'Rapportages',
        doel: { knop: '+', label: 'Nieuwe rapportage' },
        pagina: {
          titel: 'Rapportages',
          knoppen: ['Acties bekijken', '+'],
          kaarten: [
            { kop: 'Lieke Hoekstra · vandaag 14.20', regels: ['Meneer heeft vanmiddag weinig gedronken. Graag bijhouden hoeveel hij drinkt.'] },
          ],
        },
      },
      {
        zeg: 'Voor wat een cliënt drinkt, is er een eigen soort rapportage. Dan kan een collega later zien hoeveel hij op een dag binnenkreeg.',
        doe: 'Kies Vocht inname',
        menu: 'Rapportages',
        doel: { optie: 'Vocht inname' },
        pagina: {
          venster: { titel: 'Rapportagetype toevoegen', opties: ['Rapportage', 'Gewicht', 'Bloeddruk', 'Vocht inname', 'Vocht uitscheiding', 'Pijnscore'] },
        },
      },
      {
        zeg: 'Je vult in hoeveel meneer gedronken heeft en wanneer. Je slaat het op bij de goede meneer Jansen.',
        doe: 'Klik op Opslaan',
        menu: 'Rapportages',
        doel: { knop: 'Opslaan' },
        pagina: {
          titel: 'Nieuw - Vocht inname',
          knoppen: ['Opslaan'],
          velden: [
            { label: 'Hoeveelheid', waarde: '300 ml' },
            { label: 'Tijd', waarde: '17.45' },
          ],
        },
      },
    ],
  },
  startKnop: 'Ik ga zoeken',
  intro: {
    tijd: 'Zaterdag 16.30 uur, avonddienst op De Eik',
    kop: 'Je valt in op een afdeling die je niet kent',
    tekst: [
      'Op De Eik is een collega ziek. Jij valt vanavond in. Je kent de cliënten hier niet.',
      'Lieke Hoekstra werkt op De Eik. Ze vraagt: "Wil jij meneer Jansen op kamer 4 helpen met eten? Hij heeft vanmiddag weinig gedronken. Wil je bijhouden hoeveel hij drinkt?"',
      'Je kent zelf ook een meneer Jansen. Die woont op De Linde, jouw eigen afdeling.',
    ],
  },
  stappen: [
    {
      type: 'keuze',
      vraag: 'Je wilt na het eten vastleggen hoeveel meneer Jansen gedronken heeft. Hoe zoek je hem op in Nedap ONS?',
      opties: [
        {
          tekst: 'Je typt "Jansen" en opent de eerste meneer Jansen die je ziet.',
          goed: false,
          variant: {
            kop: 'Om 21.00 uur kijkt Lieke mee',
            tekst: 'Ze ziet geen drinklijst bij haar meneer Jansen. Jouw notitie staat bij meneer Jansen van De Linde. Morgen denkt jouw eigen team dat hun meneer Jansen te weinig drinkt. Bij de meneer Jansen van De Eik lijkt het alsof hij niets gedronken heeft.',
          },
          uitleg: 'Bij De Wilgenhof wonen meer cliënten met dezelfde achternaam. De eerste naam in de lijst is niet altijd de goede.',
        },
        {
          tekst: 'Je zoekt op achternaam en kiest de meneer Jansen die bij De Eik en kamer 4 hoort. Je checkt ook zijn geboortedatum.',
          goed: true,
          variant: {
            kop: 'Om 21.00 uur kijkt Lieke mee',
            tekst: 'De drinklijst staat bij de goede meneer Jansen. Lieke ziet dat hij bij het eten twee bekers thee en een schaaltje vla op heeft. Ze hoeft de huisartsenpost niet te bellen.',
          },
          uitleg: 'Een naam alleen is niet genoeg. Met de afdeling, het kamernummer en de geboortedatum weet je zeker dat je de goede cliënt hebt.',
        },
        {
          tekst: 'Je schrijft het op een briefje en vraagt Lieke het straks in te voeren. Zij kent de cliënten.',
          goed: false,
          variant: {
            kop: 'Om 22.45 uur ligt het briefje nog in je zak',
            tekst: 'Lieke had het druk met een nieuwe cliënt. Niemand heeft de drinklijst ingevuld. De nachtdienst weet niet dat meneer Jansen weinig dronk en let er niet op.',
          },
          uitleg: 'Wat je zelf ziet en doet, leg je zelf vast. Een briefje kan zoekraken, en je collega moet dan jouw werk doen.',
        },
      ],
    },
    {
      type: 'koppel',
      vraag: 'Je zoekt op "Jansen" en krijgt drie resultaten. Je vraagt Lieke zijn geboortedatum. Ze zegt: 12 maart 1941. Welke cliënt zoek je?',
      scherm: 'Zoekresultaten · Jansen',
      kiesTekst: 'Is dit hem?',
      regels: [
        { waarneming: 'Meneer Jansen, De Linde, kamer 12, geboren 3 juni 1938', goed: 'nee' },
        { waarneming: 'Meneer Jansen, De Eik, kamer 4, geboren 12 maart 1941', goed: 'ja' },
        { waarneming: 'Meneer Jansen, De Eik, kamer 14, geboren 8 oktober 1936', goed: 'nee' },
      ],
      opties: [
        { id: 'ja', naam: 'Ja, dit is hem' },
        { id: 'nee', naam: 'Nee, andere cliënt' },
      ],
      goedTekst: 'Klopt. Alleen bij de tweede passen afdeling, kamer en geboortedatum alle drie.',
      foutTekst: 'Kijk nog eens naar alle drie de gegevens. De eerste woont op De Linde. De derde woont wel op De Eik, maar op kamer 14 en met een andere geboortedatum. Alleen de tweede klopt helemaal.',
    },
    {
      type: 'volgorde',
      vraag: 'Zo zoek je bij De Wilgenhof een cliënt op als je invalt. In welke volgorde?',
      items: [
        'Vraag aan een collega de naam en het kamernummer',
        'Zoek in Nedap ONS op achternaam',
        'Controleer afdeling, kamer en geboortedatum',
        'Lees de overdracht van deze cliënt',
        'Leg vast wat je gezien en gedaan hebt',
      ],
      start: [3, 0, 4, 2, 1],
      goedTekst: 'Goed. Zo weet je zeker dat je bij de goede cliënt bent, en je weet wat er vandaag speelt voordat je iets vastlegt.',
      foutTekst: 'Nog niet. Je begint met wat je collega weet, dan zoek je en controleer je. Pas als je zeker bent van de cliënt, lees je de overdracht en leg je vast wat je deed.',
    },
  ],
  samenvatting: [
    'Zoek op achternaam en controleer altijd afdeling, kamer en geboortedatum.',
    'Bij De Wilgenhof wonen cliënten met dezelfde achternaam. Kies dus nooit op naam alleen.',
    'Leg zelf vast wat je deed, ook als je invalt.',
  ],
};
