// Casus MIC-meldingen bij De Wilgenhof.
// Fictieve cliënt, fictieve werkafspraken. Elke keuze heeft een eigen vervolg (variant).

export default {
  id: 'mic',
  stapNamen: ['Situatie', 'Eerst de cliënt', 'Melden', 'Daarna'],
  les: [
    {
      kop: 'Wat een MIC-melding is',
      beeld: 'mic',
      tekst: [
        'MIC staat voor Melding Incidenten Cliëntenzorg. Je maakt een melding als er iets misging bij de zorg, of als het bijna misging. Denk aan een val, een vergeten medicijn of een verkeerd zakje.',
        'Een melding is om van te leren. Het team zoekt uit hoe het kon gebeuren en wat er beter kan. Het gaat niet om de schuld van een collega.',
      ],
    },
    {
      kop: 'Eerst de cliënt',
      beeld: 'escaleren',
      tekst: [
        'Merk je dat er iets misging, zorg dan eerst voor de cliënt. Bij medicatie weet je niet altijd wat er in een zakje zit, en of je het later nog mag geven.',
        'Daarom overleg je bij De Wilgenhof altijd met de verpleegkundige. Zij beslist wat er nu moet gebeuren, zo nodig samen met de apotheek of de arts.',
      ],
      punten: [
        'Los het niet alleen op.',
        'Leg vast wat je uiteindelijk gaf.',
      ],
    },
    {
      kop: 'Wat je in een melding schrijft',
      beeld: 'rapport',
      tekst: [
        'Schrijf op wat er gebeurde, hoe laat, en wat je daarna deed. Een collega die er niet bij was, moet het kunnen begrijpen.',
        'Noem geen namen van collega\'s en geef geen oordeel. Wie bang is om genoemd te worden, meldt minder. Dan leert het team ook minder.',
        'Na je melding gaat de teamleider ermee aan de slag. Het team bespreekt de melding, en jij hoort terug wat ermee gebeurd is.',
      ],
    },
    {
      kop: 'Waar het staat in Nedap ONS',
      beeld: 'ons',
      tekst: [
        'Bij De Wilgenhof maak je een MIC-melding als vragenlijst in het dossier van de cliënt. Onder Vragenlijsten maak je een nieuwe aan en kies je MIC-melding.',
        'In het volgende deel klikken we dat samen een keer door.',
      ],
    },
  ],
  doorklik: {
    client: 'J Willems',
    klaar: 'Zo maak je een MIC-melding: Vragenlijsten in het menu, Nieuwe vragenlijst, MIC-melding kiezen, invullen, opslaan en op Volgende status zetten.',
    stappen: [
      {
        zeg: 'Je hebt het dossier van mevrouw Willems open. De melding hoort bij haar, dus je maakt hem in haar dossier.',
        doe: 'Klik in het menu op Vragenlijsten',
        menu: 'Overzicht',
        doel: { menu: 'Vragenlijsten' },
        pagina: {
          kaarten: [
            { kop: 'Waarschuwingen', regels: ['Geen waarschuwingen'] },
            { kop: 'Episodes', regels: ['Geen relevante episodes'] },
            { kop: 'Allergieën en overgevoeligheden', regels: ['Geen actieve allergieën of overgevoeligheden'] },
          ],
        },
      },
      {
        zeg: 'Hier staan de vragenlijsten van mevrouw Willems. Rechtsboven staat de knop voor een nieuwe.',
        doe: 'Klik op Nieuwe vragenlijst',
        menu: 'Vragenlijsten',
        doel: { knop: '+ Nieuwe vragenlijst' },
        pagina: {
          titel: 'Vragenlijsten',
          tabs: ['Actueel', 'Archief'],
          knoppen: ['+ Nieuwe vragenlijst'],
          kaarten: [
            { kop: 'Actueel', regels: ['Mikzo Kompas® (2025.1)'] },
          ],
        },
      },
      {
        zeg: 'Nedap ONS vraagt welke vragenlijst je wilt maken. Je kunt ook zoeken op de naam.',
        doe: 'Kies MIC-melding',
        menu: 'Vragenlijsten',
        doel: { optie: 'MIC-melding' },
        pagina: {
          venster: { titel: 'Maak een nieuwe vragenlijst aan', opties: ['Mikzo Kompas® (2025.1)', 'Omaha inventarisatie', 'MIC-melding'] },
        },
      },
      {
        zeg: 'Je vult in wanneer het was, wat voor incident het was en wat er gebeurde. Bij wat er gebeurde schrijf je wat je zag en wat je deed.',
        doe: 'Klik op Opslaan',
        menu: 'Vragenlijsten',
        doel: { knop: 'Opslaan' },
        pagina: {
          titel: 'MIC-melding',
          knoppen: ['Opslaan'],
          velden: [
            { label: 'Datum en tijd', waarde: 'Vandaag, 12.10 uur' },
            { label: 'Soort incident', waarde: 'Medicatie' },
            { label: 'Wat is er gebeurd?', waarde: 'Wat zag je, wanneer, en wat deed je?' },
            { label: 'Gevolg voor de cliënt', waarde: 'Kies een gevolg' },
          ],
        },
      },
      {
        zeg: 'Je melding staat nu op Concept. Pas als je hem doorzet, komt hij bij de teamleider.',
        doe: 'Klik op Volgende status',
        menu: 'Vragenlijsten',
        doel: { knop: 'Volgende status' },
        pagina: {
          titel: 'MIC-melding',
          knoppen: ['Volgende status', 'Meer', 'Wijzig'],
          kaarten: [
            { kop: 'Status', regels: ['Concept'] },
          ],
        },
      },
    ],
  },
  startKnop: 'Ik ga het oplossen',
  intro: {
    tijd: 'Maandag 12.10 uur, vroege dienst op De Linde',
    kop: 'Het ochtendzakje van mevrouw Willems ligt er nog',
    tekst: [
      'Je pakt de medicatie voor de middag. In de medicijnkar ligt nog het zakje van 8.00 uur van mevrouw Willems. Het is dicht en niet afgetekend.',
      'Mevrouw Willems zit in de huiskamer en voelt zich goed. Je weet niet wie vanochtend de medicatie heeft gedaan.',
    ],
  },
  stappen: [
    {
      type: 'keuze',
      vraag: 'Wat doe je eerst?',
      opties: [
        {
          tekst: 'Je geeft het ochtendzakje nu alsnog.',
          goed: false,
          variant: {
            kop: 'Om 15.00 uur',
            tekst: 'Mevrouw Willems krijgt om 13.00 uur ook haar middagzakje. Halverwege de middag is ze duizelig en wil ze niet opstaan. De verpleegkundige vraagt wat ze vandaag allemaal gekregen heeft.',
          },
          uitleg: 'Sommige medicijnen mag je niet zomaar later geven, zeker niet vlak voor de volgende ronde. Overleg eerst wat het beste is voor de cliënt.',
        },
        {
          tekst: 'Je belt de verpleegkundige en vraagt wat er nu met de medicatie moet.',
          goed: true,
          variant: {
            kop: 'Samen beslist',
            tekst: 'De verpleegkundige kijkt welke medicijnen in het zakje zitten en overlegt met de apotheek. Een deel geef je nu, de rest slaat mevrouw vandaag over. Je legt vast wat je gaf.',
          },
          uitleg: 'Eerst de cliënt. Bij De Wilgenhof overleg je bij een vergeten zakje altijd met de verpleegkundige. Daarna meld je het.',
        },
        {
          tekst: 'Je gooit het zakje weg. Mevrouw voelt zich goed, dus het maakt niet uit.',
          goed: false,
          variant: {
            kop: 'Vrijdag',
            tekst: 'Bij de weekcontrole klopt de medicatie van mevrouw Willems niet. Niemand weet wat er is gebeurd. Twee weken later gebeurt het weer bij een andere cliënt.',
          },
          uitleg: 'Mevrouw kan haar medicijnen nodig hebben, ook als ze zich goed voelt. En zonder melding kan het team niet leren waarom het misging.',
        },
      ],
    },
    {
      type: 'keuze',
      vraag: 'Je maakt een MIC-melding. Welke tekst zet je erin?',
      opties: [
        {
          tekst: 'Joost heeft vanochtend de medicatie van mevrouw Willems vergeten. Dit gebeurt vaker.',
          goed: false,
          variant: {
            kop: 'Een week later',
            tekst: 'Joost hoort via een collega wat er in de melding staat. Hij voelt zich aangevallen. Hij twijfelt nu of hij zelf nog iets durft te melden.',
          },
          uitleg: 'Een MIC-melding gaat over wat er gebeurde, niet over wie het deed. Een naam en een oordeel maken het team bang om te melden.',
        },
        {
          tekst: 'Om 12.10 uur lag het zakje van 8.00 uur van mevrouw Willems dicht en niet afgetekend in de kar. Overlegd met de verpleegkundige, een deel alsnog gegeven. Mevrouw had geen klachten.',
          goed: true,
          variant: {
            kop: 'De melding is binnen',
            tekst: 'Je teamleider leest de melding nog dezelfde dag. Ze ziet precies wat er gebeurde en wat je deed.',
          },
          uitleg: 'Je schrijft wat je zag, wanneer, en wat je deed. Daar kan het team van leren.',
        },
      ],
    },
    {
      type: 'volgorde',
      vraag: 'Wat gebeurt er bij De Wilgenhof met je melding? Zet het in de goede volgorde.',
      items: [
        'Je maakt de MIC-melding.',
        'De teamleider leest de melding.',
        'Het team bespreekt in het teamoverleg hoe het kon gebeuren.',
        'Het team spreekt een verbetering af.',
        'Jij hoort terug wat er met je melding is gedaan.',
      ],
      start: [3, 0, 4, 2, 1],
      goedTekst: 'Klopt. Bij De Wilgenhof spraken ze af: wie de medicatie geeft, tekent meteen af, bij elke cliënt.',
      foutTekst: 'Nog niet. Eerst meld je, dan leest de teamleider het. Daarna bespreekt het team de oorzaak en spreekt een verbetering af. Tot slot hoor jij terug wat ermee is gedaan.',
    },
  ],
  samenvatting: [
    'Eerst de cliënt: overleg met de verpleegkundige wat er nu moet.',
    'Meld wat er gebeurde, niet wie het deed.',
    'Een melding is om te leren. Het team bespreekt hem en jij hoort terug wat ermee gebeurt.',
  ],
};
