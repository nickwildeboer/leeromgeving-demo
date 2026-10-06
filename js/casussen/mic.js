// Casus MIC-meldingen bij De Wilgenhof.
// Fictieve cliënt, fictieve werkafspraken. Elke keuze heeft een eigen vervolg (variant).

export default {
  id: 'mic',
  stapNamen: ['Situatie', 'Eerst de cliënt', 'Melden', 'Daarna'],
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
