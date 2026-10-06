// Casus ZP10, zorgpad stervensfase, bij De Wilgenhof.
// Fictieve cliënt, fictieve werkafspraken. Elke keuze heeft een eigen vervolg (variant).

export default {
  id: 'zp10',
  stapNamen: ['Situatie', 'Waarnemen', 'Vastleggen', 'Familie'],
  les: [
    {
      kop: 'Wat het zorgpad stervensfase is',
      beeld: 'zp10',
      tekst: [
        'Soms besluiten de arts en het team samen dat een cliënt in de stervensfase is. Vanaf dat moment start het zorgpad stervensfase. Iedereen werkt dan met dezelfde lijst.',
        'Het doel is nu dat de cliënt zo comfortabel mogelijk is, en dat de familie zich gesteund voelt.',
      ],
      punten: [
        'Je kijkt elke dienst hoe het met de cliënt gaat.',
        'Je legt dat vast in het zorgpad, per onderwerp.',
      ],
    },
    {
      kop: 'Wat je kunt zien',
      beeld: 'dienst',
      tekst: [
        'In de laatste dagen verandert er veel. De ademhaling kan anders klinken. Iemand kan onrustig worden of pijn hebben, ook als hij dat niet meer kan zeggen. Let dan op het gezicht en op hoe iemand ligt.',
        'Slikken gaat vaak slecht. De mond droogt dan snel uit. Mondverzorging doe je met een nat gaasje of mondspray.',
        'Over medicatie tegen pijn of onrust beslist de verpleegkundige met de arts. Zij moeten dus weten wat jij ziet.',
      ],
    },
    {
      kop: 'De familie',
      beeld: 'familie',
      tekst: [
        'Familie zit vaak lang aan het bed en heeft vragen. Niemand weet precies hoe lang het sterven duurt. Een schatting klopt vaak niet.',
        'Je hoeft niet alle antwoorden te hebben. Blijf even, vertel wat je ziet en vraag of ze iemand willen spreken.',
      ],
    },
    {
      kop: 'Waar het staat in Nedap ONS',
      beeld: 'ons',
      tekst: [
        'Bij De Wilgenhof staat het zorgpad stervensfase als vragenlijst in het dossier. Je vindt het onder Vragenlijsten. Per onderwerp vul je in wat je zag.',
        'In het volgende deel klikken we dat samen een keer door.',
      ],
    },
  ],
  doorklik: {
    client: 'H Koster',
    klaar: 'Zo leg je een waarneming vast in het zorgpad: Vragenlijsten in het menu, het zorgpad openen, Wijzig, per onderwerp invullen en opslaan.',
    stappen: [
      {
        zeg: 'Je hebt het dossier van meneer Koster open. Bij Episodes zie je dat het zorgpad stervensfase loopt.',
        doe: 'Klik in het menu op Vragenlijsten',
        menu: 'Overzicht',
        doel: { menu: 'Vragenlijsten' },
        pagina: {
          kaarten: [
            { kop: 'Waarschuwingen', regels: ['Geen waarschuwingen'] },
            { kop: 'Episodes', regels: ['Zorgpad stervensfase, sinds 07-10-2026'] },
            { kop: 'Belangrijke rapportages', regels: ['Geen belangrijke rapportages'] },
          ],
        },
      },
      {
        zeg: 'Onder Actueel staan de vragenlijsten die nu lopen. Het zorgpad staat bovenaan. Je maakt geen nieuwe lijst aan, je werkt in deze.',
        doe: 'Open het zorgpad stervensfase',
        menu: 'Vragenlijsten',
        doel: { regel: 'Zorgpad stervensfase' },
        pagina: {
          titel: 'Vragenlijsten',
          tabs: ['Actueel', 'Archief'],
          knoppen: ['+ Nieuwe vragenlijst'],
          kaarten: [
            { kop: 'Actueel', regels: ['Zorgpad stervensfase', 'Mikzo Kompas® (2025.1)'] },
          ],
        },
      },
      {
        zeg: 'Je ziet de onderwerpen van het zorgpad en wat de vorige dienst invulde. Lees dat eerst. Daarna vul je jouw dienst in.',
        doe: 'Klik op Wijzig',
        menu: 'Vragenlijsten',
        doel: { knop: 'Wijzig' },
        pagina: {
          titel: 'Zorgpad stervensfase',
          knoppen: ['Meer', 'Wijzig'],
          kaarten: [
            { kop: 'Pijn', regels: ['Vroege dienst: geen tekenen van pijn'] },
            { kop: 'Onrust', regels: ['Vroege dienst: ligt rustig'] },
            { kop: 'Ademhaling', regels: ['Vroege dienst: rustig, soms een pauze'] },
            { kop: 'Mondverzorging', regels: ['Vroege dienst: mond verzorgd met gaasje'] },
          ],
        },
      },
      {
        zeg: 'Per onderwerp schrijf je kort wat je zag en wat je deed. Wijkt er iets af, dan bel je ook de verpleegkundige.',
        doe: 'Klik op Opslaan',
        menu: 'Vragenlijsten',
        doel: { knop: 'Opslaan' },
        pagina: {
          titel: 'Zorgpad stervensfase, late dienst',
          knoppen: ['Opslaan'],
          velden: [
            { label: 'Pijn', waarde: 'Wat zag je, wat deed je?' },
            { label: 'Onrust', waarde: 'Wat zag je, wat deed je?' },
            { label: 'Ademhaling', waarde: 'Wat zag je, wat deed je?' },
            { label: 'Mondverzorging', waarde: 'Wat zag je, wat deed je?' },
          ],
        },
      },
    ],
  },
  startKnop: 'Ik ga naar meneer Koster',
  intro: {
    tijd: 'Donderdag 19.30 uur, late dienst op De Linde',
    kop: 'Meneer Koster is in de stervensfase',
    tekst: [
      'Meneer Koster is 91. Gisteren hebben de arts en het team besloten dat hij in de stervensfase is. Sinds die dag loopt bij hem het zorgpad stervensfase in Nedap ONS.',
      'Zijn dochter zit bij hem. Als je binnenkomt, hoor je dat zijn ademhaling rochelt. Hij fronst en trekt aan het laken. Zijn lippen zijn droog.',
    ],
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
