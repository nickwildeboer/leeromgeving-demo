// Casus Klinimetrie bij De Wilgenhof.
// Fictieve cliënten, fictieve werkafspraken. Elke keuze heeft een eigen vervolg (variant).

export default {
  id: 'klinimetrie',
  stapNamen: ['Situatie', 'Wegen', 'Signaleren', 'Actie'],
  les: [
    {
      kop: 'Waarom je meet',
      beeld: 'meten',
      tekst: [
        'Met een meting zie je hoe het gaat met een cliënt. Gewicht en pijn zijn de metingen die je het meest doet.',
        'Eén meting zegt weinig. Je ziet pas iets als je hem vergelijkt met de vorige. Dat lukt alleen als je elke keer op dezelfde manier meet.',
      ],
      punten: [
        'Dezelfde weegschaal.',
        'Hetzelfde moment van de dag, bijvoorbeeld voor het ontbijt.',
        'Dezelfde kleding.',
      ],
    },
    {
      kop: 'Pijn meten',
      beeld: 'vragenlijst',
      tekst: [
        'Pijn meet je met een score van 0 tot 10. De cliënt zegt zelf hoeveel pijn hij heeft. 0 is geen pijn, 10 is de ergste pijn die hij kan bedenken.',
        'Kan een cliënt dat niet zeggen, bijvoorbeeld door dementie? Dan kijk je naar zijn gedrag. Bij De Wilgenhof gebruik je daar een observatielijst voor pijn voor.',
      ],
    },
    {
      kop: 'Een meting vraagt soms om actie',
      beeld: 'escaleren',
      tekst: [
        'Een getal in Nedap ONS helpt niemand als niemand ernaar kijkt. Na elke meting vergelijk je met de vorige en vraag je je af of er iets moet gebeuren.',
        'Schrijf er in de rapportage bij wat je ziet. Eet een cliënt minder of zit zijn kleding losser? Dan helpt dat de EVV\'er en de diëtist.',
      ],
      punten: [
        'Meer dan 2 kilo eraf in een maand: melden bij de EVV\'er.',
        'Pijnscore 4 of hoger, of veel hoger dan eerst: overleggen met de EVV\'er.',
        'Iets acuuts, zoals pijn na een val: meteen de arts bellen.',
      ],
    },
    {
      kop: 'Waar het staat in Nedap ONS',
      beeld: 'ons',
      tekst: [
        'Een gewicht of een pijnscore leg je vast als rapportage. Bij Rapportages klik je op de blauwe plusknop en kies je het soort, zoals Gewicht of Pijnscore.',
        'Onder Klinimetrie in het menu staan de meetinstrumenten, zoals de observatielijst voor pijn.',
        'In het volgende deel klikken we dat samen door.',
      ],
    },
  ],
  doorklik: {
    client: 'K de Vries',
    klaar: 'Zo leg je een meting vast: Rapportages, de plusknop, het soort meting kiezen en opslaan. Daarna vergelijk je met de vorige meting. Meetinstrumenten vind je onder Klinimetrie.',
    stappen: [
      {
        zeg: 'Je hebt het dossier van meneer De Vries open. Je hebt hem net gewogen en het gewicht opgeschreven. Nu zet je het in Nedap ONS.',
        doe: 'Klik in het menu op Rapportages',
        menu: 'Overzicht',
        doel: { menu: 'Rapportages' },
        pagina: {
          kaarten: [
            { kop: 'Waarschuwingen', regels: ['Geen waarschuwingen'] },
            { kop: 'Belangrijke rapportages', regels: ['Geen belangrijke rapportages'] },
          ],
        },
      },
      {
        zeg: 'Hier staan de rapportages van meneer De Vries. Een meting is ook een rapportage. Rechtsboven staat de blauwe plusknop.',
        doe: 'Klik op de plusknop',
        menu: 'Rapportages',
        doel: { knop: '+', label: 'Nieuwe rapportage' },
        pagina: {
          titel: 'Rapportages',
          knoppen: ['Acties bekijken', '+'],
          kaarten: [
            { kop: 'Joost Hendriks · gisteren 18.30', regels: ['Meneer heeft de helft van zijn warme maaltijd laten staan.'] },
          ],
        },
      },
      {
        zeg: 'Nedap ONS vraagt welk soort rapportage je maakt. Voor een gewicht kies je Gewicht. Dan komt het getal ook in het overzicht van zijn metingen.',
        doe: 'Kies Gewicht',
        menu: 'Rapportages',
        doel: { optie: 'Gewicht' },
        pagina: {
          venster: { titel: 'Rapportagetype toevoegen', opties: ['Gewicht', 'Bloeddruk', 'Temperatuur', 'Bloedsuiker', 'Pijnscore', 'Rapportage'] },
        },
      },
      {
        zeg: 'Je vult het gewicht in, zoals je het hebt afgelezen. Bij de opmerking schrijf je hoe je gewogen hebt.',
        doe: 'Klik op Opslaan',
        menu: 'Rapportages',
        doel: { knop: 'Opslaan' },
        pagina: {
          titel: 'Nieuw - Gewicht',
          knoppen: ['Opslaan'],
          velden: [
            { label: 'Gewicht (kg)', waarde: '64,2' },
            { label: 'Opmerking', waarde: 'Stoelweegschaal, voor het ontbijt, in pyjama.' },
          ],
        },
      },
      {
        zeg: 'Het gewicht staat erin. Kijk nu naar de vorige keer: vorige maand woog meneer 67,5 kilo. Meetinstrumenten, zoals de observatielijst voor pijn, staan onder Klinimetrie.',
        doe: 'Klik in het menu op Klinimetrie',
        menu: 'Rapportages',
        doel: { menu: 'Klinimetrie' },
        pagina: {
          titel: 'Rapportages',
          knoppen: ['Acties bekijken', '+'],
          kaarten: [
            { kop: 'Gewicht · vandaag 7.50', regels: ['64,2 kg'] },
            { kop: 'Gewicht · 2 september 7.45', regels: ['67,5 kg'] },
          ],
        },
      },
      {
        zeg: 'Hier staan de metingen met een meetinstrument. Met de knop rechtsboven start je een nieuwe meting, bijvoorbeeld de observatielijst voor pijn.',
        doe: 'Klik op + Nieuwe meting',
        menu: 'Klinimetrie',
        doel: { knop: '+ Nieuwe meting' },
        pagina: {
          tabs: ['Klinimetrie', 'Zorgvraagtypering', 'Tijdlijn'],
          titel: 'Klinimetrie',
          knoppen: ['+ Nieuwe meting'],
          kaarten: [{ regels: ['Er zijn nog geen metingen'] }],
        },
      },
    ],
  },
  startKnop: 'Ik ga wegen',
  intro: {
    tijd: 'Woensdag 7.45 uur, vroege dienst op De Linde',
    kop: 'Meneer De Vries eet minder',
    tekst: [
      'Meneer De Vries is 88. Hij woont al twee jaar op De Linde. De laatste week laat hij vaak de helft van zijn warme maaltijd staan.',
      'Vanochtend zie je dat zijn broek losser zit dan eerst. Hij trekt hem steeds omhoog.',
      'Het is de eerste woensdag van de maand. Bij De Wilgenhof is dat de dag waarop je de cliënten op De Linde weegt.',
    ],
  },
  stappen: [
    {
      type: 'volgorde',
      vraag: 'Je gaat meneer De Vries wegen. In welke volgorde doe je dit?',
      uitleg: 'Bij De Wilgenhof weeg je elke maand op dezelfde manier. Alleen dan kun je de metingen goed vergelijken.',
      items: [
        'Vertel meneer wat je gaat doen en waarom.',
        'Laat meneer eerst plassen, nog voor het ontbijt.',
        'Weeg hem op de stoelweegschaal, in zijn pyjama.',
        'Lees het gewicht af en schrijf het meteen op.',
        'Leg het gewicht vast in Nedap ONS en vergelijk het met vorige maand.',
      ],
      start: [3, 1, 4, 0, 2],
      goedTekst: 'Goed. Elke maand dezelfde weegschaal, hetzelfde moment en dezelfde kleding. Dan zegt een verschil echt iets.',
      foutTekst: 'Nog niet helemaal. Je legt eerst uit wat je doet. Dan laat je meneer plassen en weeg je hem voor het ontbijt. Je schrijft het gewicht meteen op. Daarna leg je het vast in Nedap ONS en vergelijk je het met vorige maand.',
    },
    {
      type: 'keuze',
      vraag: 'Meneer weegt 64,2 kilo. Vorige maand woog hij 67,5 kilo. Wat doe je?',
      opties: [
        {
          tekst: 'Ik leg het gewicht vast. Verder doe ik niets, het staat er nu in.',
          goed: false,
          variant: {
            kop: 'Een maand later',
            tekst: 'Anouk weegt meneer De Vries. Hij weegt nu 61 kilo. Zijn dochter schrikt als ze hem helpt met aankleden: "Hij is zo mager geworden. Waarom heeft niemand iets gezegd?"',
          },
          uitleg: 'Een gewicht in Nedap ONS zegt niets als niemand er iets mee doet. Meneer is ruim 3 kilo afgevallen in een maand. Dat vraagt om actie.',
        },
        {
          tekst: 'Ik leg het gewicht vast. Ik rapporteer dat hij minder eet en dat zijn broek los zit. Ik meld het bij de EVV\'er.',
          goed: true,
          variant: {
            kop: 'Diezelfde middag',
            tekst: 'De EVV\'er belt de diëtist. Meneer krijgt een eetlijst en tussendoor een extra drinkvoeding. Bij de overdracht weet Joost precies waar hij op moet letten.',
          },
          uitleg: 'Bij De Wilgenhof meld je het bij de EVV\'er als een cliënt in een maand meer dan 2 kilo afvalt. Jouw waarneming over het eten helpt de diëtist.',
        },
        {
          tekst: 'De weegschaal klopt vast niet. Ik weeg hem morgen nog een keer.',
          goed: false,
          variant: {
            kop: 'Morgen ben je vrij',
            tekst: 'Niemand weet dat je meneer opnieuw wilde wegen. Er staat geen gewicht in Nedap ONS en er is niets gemeld. Een week later eet meneer nog steeds de helft.',
          },
          uitleg: 'Twijfel je aan de weegschaal, weeg dan meteen nog een keer. Leg het gewicht vast en meld het. Zijn losse broek en het eten wijzen dezelfde kant op.',
        },
      ],
    },
    {
      type: 'koppel',
      vraag: 'Je ziet vandaag meer metingen langskomen. Wat doe je bij elke meting?',
      uitleg: 'Bij De Wilgenhof meet je pijn met een score van 0 tot 10. Bij een score van 4 of hoger, of als de score veel hoger is dan eerst, overleg je met de EVV\'er. Is er iets acuuts, zoals na een val, dan bel je meteen de arts.',
      scherm: 'Metingen · De Linde',
      kiesTekst: 'Kies een actie',
      regels: [
        { waarneming: 'Meneer De Vries: 3,3 kilo lichter dan vorige maand', goed: 'evv' },
        { waarneming: 'Meneer Hendriks: pijnscore 2 bij het douchen, vorige week ook 2', goed: 'vastleggen' },
        { waarneming: 'Mevrouw Peters: pijnscore 8 in haar heup, ze viel vannacht en kan haar been niet belasten', goed: 'arts' },
        { waarneming: 'Meneer Hendriks: 81,9 kilo, vorige maand 81,6 kilo', goed: 'vastleggen' },
      ],
      opties: [
        { id: 'vastleggen', naam: 'Alleen vastleggen' },
        { id: 'evv', naam: 'Vastleggen en melden bij de EVV\'er' },
        { id: 'arts', naam: 'Vastleggen en meteen de arts bellen' },
      ],
      goedTekst: 'Goed. Een stabiele meting leg je vast. Een duidelijke verandering meld je. En bij pijn na een val wacht je niet.',
      foutTekst: 'Nog niet helemaal. Het gewicht en de pijnscore van meneer Hendriks zijn stabiel, die leg je alleen vast. Het gewichtsverlies van meneer De Vries meld je bij de EVV\'er. Mevrouw Peters kan na een val haar been niet belasten, dan bel je meteen de arts.',
    },
  ],
  toets: [
    {
      vraag: 'Waarom weeg je een cliënt elke keer op hetzelfde moment en met dezelfde weegschaal?',
      opties: ['Dan gaat het sneller.', 'Dan kun je de metingen goed met elkaar vergelijken.', 'Dat staat zo in Nedap ONS.'],
      goed: 1,
    },
    {
      vraag: 'Een cliënt is in een maand 3 kilo afgevallen. Wat doe je bij De Wilgenhof?',
      opties: ['Ik leg het vast en meld het bij de EVV\'er.', 'Ik leg het vast, de arts ziet het vanzelf.', 'Ik wacht de meting van volgende maand af.'],
      goed: 0,
    },
    {
      vraag: 'Mevrouw kan door haar dementie niet zeggen hoeveel pijn ze heeft. Wat doe je?',
      opties: ['Ik vul een 0 in, ze klaagt niet.', 'Ik sla de pijnmeting over.', 'Ik kijk naar haar gedrag, met de observatielijst voor pijn die De Wilgenhof gebruikt.'],
      goed: 2,
    },
    {
      vraag: 'Een cliënt geeft een pijnscore van 6. Vorige week was het een 2. Wat doe je bij De Wilgenhof?',
      opties: ['Ik leg het vast en overleg met de EVV\'er.', 'Ik leg het vast, verder niets.', 'Ik vraag morgen nog een keer.'],
      goed: 0,
    },
    {
      vraag: 'Wat schrijf je naast een gewicht in de rapportage?',
      opties: ['Niets, het getal zegt genoeg.', 'Wat je ziet, zoals dat hij minder eet en zijn broek los zit.', 'Dat meneer er slecht uitziet.'],
      goed: 1,
    },
  ],
  samenvatting: [
    'Meet elke keer op dezelfde manier, dan kun je vergelijken.',
    'Leg de meting vast in Nedap ONS en kijk naar de vorige meting.',
    'Een duidelijke verandering meld je bij de EVV\'er. Bij acute pijn bel je de arts.',
  ],
};
