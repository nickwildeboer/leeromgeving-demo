// Casus ZP10, zorgpad stervensfase, bij De Wilgenhof.
// Fictieve cliënt, fictieve werkafspraken. Elke keuze heeft een eigen vervolg (variant).

export default {
  id: 'zp10',
  stapNamen: ['Situatie', 'Waarnemen', 'Vastleggen', 'Familie'],
  startKnop: 'Ik ga naar meneer Koster',
  intro: {
    tijd: 'Donderdag 19.30 uur, late dienst op De Linde',
    kop: 'Meneer Koster is in de stervensfase',
    tekst: [
      'Meneer Koster is 91. Gisteren hebben de arts en het team besloten dat hij in de stervensfase is. Sinds die dag loopt bij hem het zorgpad stervensfase in Nedap ONS.',
      'Zijn dochter zit bij hem. Als je binnenkomt, hoor je dat zijn ademhaling rochelt. Hij fronst en trekt aan het laken. Zijn lippen zijn droog.',
    ],
    noot: 'Meneer Koster is verzonnen. In deze leeromgeving staan nooit echte cliënten.',
  },
  stappen: [
    {
      type: 'keuze',
      vraag: 'Je ziet dat meneer Koster onrustig is. Wat doe je?',
      opties: [
        {
          tekst: 'Je kijkt rustig wat je ziet, legt het vast in het zorgpad en belt de verpleegkundige van dienst.',
          goed: true,
          variant: {
            kop: 'Een halfuur later',
            tekst: 'De verpleegkundige komt kijken en overlegt met de arts. Meneer krijgt iets tegen de onrust. Je maakt zijn mond nat met een gaasje. Hij ligt stiller en zijn dochter houdt zijn hand vast.',
          },
          uitleg: 'Bij De Wilgenhof kijk je elke dienst of de cliënt comfortabel is. Wijkt iets af, dan leg je het vast en schakel je de verpleegkundige in. Zij beslist met de arts over medicatie.',
        },
        {
          tekst: 'Je zet hem wat rechter en geeft hem een slokje water.',
          goed: false,
          variant: {
            kop: 'Meneer verslikt zich',
            tekst: 'Hij hoest en wordt benauwder. Zijn dochter schrikt en staat op. Je belt alsnog de verpleegkundige.',
          },
          uitleg: 'In de stervensfase kan een cliënt vaak niet meer goed slikken. Drinken geeft dan kans op verslikken. Een droge mond verzorg je met een nat gaasje of mondspray.',
        },
        {
          tekst: 'Je doet niets. Rochelen en onrust horen bij sterven.',
          goed: false,
          variant: {
            kop: 'Om 22.00 uur',
            tekst: 'De nachtdienst vindt meneer Koster nog steeds onrustig. Zijn dochter vraagt waarom niemand iets deed. Er staat niets in het zorgpad over de avond.',
          },
          uitleg: 'Rochelen kan bij sterven horen. Onrust en pijn wil je wel zo veel mogelijk verlichten. Daarvoor moet de verpleegkundige het weten, en moet het in het zorgpad staan.',
        },
      ],
    },
    {
      type: 'koppel',
      vraag: 'Bij De Wilgenhof leg je je waarnemingen vast bij het onderwerp in het zorgpad. Waar hoort elke waarneming?',
      uitleg: 'Het zorgpad heeft een onderwerp per soort klacht. Zo ziet de volgende dienst snel wat er speelt.',
      scherm: 'Zorgpad stervensfase · meneer Koster',
      kiesTekst: 'Kies een onderwerp',
      regels: [
        { waarneming: 'Rochelende ademhaling', goed: 'ademhaling' },
        { waarneming: 'Fronst als je hem draait', goed: 'pijn' },
        { waarneming: 'Trekt aan het laken, ligt niet stil', goed: 'onrust' },
        { waarneming: 'Droge lippen en droge mond', goed: 'mond' },
      ],
      opties: [
        { id: 'pijn', naam: 'Pijn' },
        { id: 'onrust', naam: 'Onrust' },
        { id: 'ademhaling', naam: 'Ademhaling' },
        { id: 'mond', naam: 'Mondverzorging' },
        { id: 'uitscheiding', naam: 'Plassen en ontlasting' },
      ],
      goedTekst: 'Goed vastgelegd. De verpleegkundige ziet nu per onderwerp hoe het met meneer gaat.',
      foutTekst: 'Nog niet helemaal. Rochelen hoort bij ademhaling. Fronsen bij het draaien kan pijn zijn. Trekken aan het laken is onrust. Een droge mond hoort bij mondverzorging.',
    },
    {
      type: 'keuze',
      vraag: 'De dochter vraagt zacht: "Hoe lang duurt het nog?" Wat zeg je?',
      opties: [
        {
          tekst: '"Een paar uur nog, denk ik."',
          goed: false,
          variant: {
            kop: 'Twee dagen later',
            tekst: 'Meneer Koster leeft nog. De dochter heeft die avond haar broer uit Groningen laten komen. Ze is moe en weet niet meer wat ze moet geloven.',
          },
          uitleg: 'Niemand weet precies hoe lang het duurt. Een schatting geeft verwachtingen die vaak niet kloppen.',
        },
        {
          tekst: '"Dat weet ik niet. Wel zie ik dat zijn ademhaling verandert. Wilt u dat ik de verpleegkundige vraag om met u te praten?"',
          goed: true,
          variant: {
            kop: 'De dochter knikt',
            tekst: 'De verpleegkundige praat even met haar op de gang. Daarna gaat ze weer bij haar vader zitten. Jij zet in de rapportage dat het gesprek is geweest.',
          },
          uitleg: 'Je bent eerlijk, je vertelt wat je ziet en je zorgt dat de dochter iemand kan spreken. Zo laat je haar niet alleen met haar vraag.',
        },
        {
          tekst: '"Daar kan ik niets over zeggen." En je gaat verder met je ronde.',
          goed: false,
          variant: {
            kop: 'Later op de avond',
            tekst: 'De dochter loopt naar de huiskamer en vraagt een andere collega of er iemand met haar kan praten. Ze voelt zich alleen gelaten.',
          },
          uitleg: 'Je hoeft het antwoord niet te weten. Blijf wel even, vertel wat je ziet en zorg dat ze iemand kan spreken.',
        },
      ],
    },
  ],
  samenvatting: [
    'Kijk elke dienst of de cliënt comfortabel is en leg dat vast in het zorgpad.',
    'Zie je pijn, onrust of benauwdheid, schakel dan de verpleegkundige in.',
    'Verzorg een droge mond met een nat gaasje, geef geen drinken als slikken moeilijk is.',
    'Op de vraag hoe lang het nog duurt, ben je eerlijk en zorg je dat de familie iemand kan spreken.',
  ],
};
