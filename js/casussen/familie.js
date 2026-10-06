// Casus Afspraken met familie vastleggen bij De Wilgenhof.
// Fictieve cliënt, fictieve werkafspraken. Elke keuze heeft een eigen vervolg (variant).

export default {
  id: 'familie',
  stapNamen: ['Situatie', 'Vastleggen', 'Uitzoeken', 'Opschrijven'],
  les: [
    {
      kop: 'Familie maakt afspraken met jou',
      beeld: 'familie',
      tekst: [
        'Familie kent de cliënt het langst. Ze vertellen je wat hij gewend is en wat ze graag willen. Vaak doen ze dat even tussendoor, op de gang of bij de koffie.',
        'Zo\'n afspraak geldt voor alle diensten, ook voor de nacht en het weekend. Wat alleen in jouw hoofd zit, weet je collega niet.',
      ],
    },
    {
      kop: 'Wat je zelf toezegt, en wat niet',
      beeld: 'overdracht',
      tekst: [
        'Niet elk verzoek kun je zelf regelen. Kijk eerst wat voor verzoek het is.',
      ],
      punten: [
        'Een vaste afspraak over de dagelijkse zorg: leg je vast en geef je door aan de EVV\'er.',
        'Iets wat al in de volgende dienst speelt: zet je ook in de overdracht.',
        'Iets over medicijnen of behandeling: zeg je niet toe. Dat overleg je eerst, want daar beslist de arts over.',
      ],
    },
    {
      kop: 'Schrijf het zo dat iedereen het snapt',
      beeld: 'rapport',
      tekst: [
        'Een collega die de cliënt niet kent, moet precies weten wat er moet gebeuren. Schrijf daarom op wie, wat en wanneer. En met wie je het hebt afgesproken.',
      ],
      punten: [
        'Niet: "Zoon komt soms helpen." Wel: "Zoon helpt elke dinsdag om 17.30 uur bij het avondeten."',
        'Niet: "Familie wil foto\'s." Wel: "Kleindochter krijgt elke zondag een foto van oma via de app, afgesproken met de zoon."',
      ],
    },
    {
      kop: 'Waar het staat in Nedap ONS',
      beeld: 'ons',
      tekst: [
        'Bij De Wilgenhof schrijf je een afspraak met familie als rapportage in Nedap ONS. Je markeert hem als belangrijk en zet een actie voor de EVV\'er. Die zet de afspraak daarna in het zorgplan.',
        'In het volgende deel klikken we dat samen door bij mevrouw Dijkstra.',
      ],
    },
  ],
  doorklik: {
    client: 'M Dijkstra',
    klaar: 'Zo leg je een afspraak met familie vast: Rapportages, de plusknop, Rapportage kiezen, de afspraak opschrijven met een actie voor de EVV\'er, markeren als belangrijk en opslaan.',
    stappen: [
      {
        zeg: 'Je hebt het dossier van mevrouw Dijkstra open op het Overzicht. Een afspraak met familie leg je vast als rapportage.',
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
        zeg: 'Hier staan de rapportages van mevrouw Dijkstra. Rechtsboven staat de blauwe plusknop.',
        doe: 'Klik op de plusknop',
        menu: 'Rapportages',
        doel: { knop: '+', label: 'Nieuwe rapportage' },
        pagina: {
          titel: 'Rapportages',
          knoppen: ['Acties bekijken', '+'],
          kaarten: [
            { kop: 'Joost de Vries · gisteren 21.50', regels: ['Mevrouw heeft na het avondeten met haar dochter gebeld. Daarna rustig gaan slapen.'] },
          ],
        },
      },
      {
        zeg: 'Nedap ONS vraagt welk soort rapportage je maakt. Een afspraak met familie is een gewone rapportage.',
        doe: 'Kies Rapportage',
        menu: 'Rapportages',
        doel: { optie: 'Rapportage' },
        pagina: {
          venster: { titel: 'Rapportagetype toevoegen', opties: ['Rapportage', 'SOEP', 'Gewicht', 'Bloeddruk', 'Pijnscore', 'Fotorapportage'] },
        },
      },
      {
        zeg: 'De afspraak staat erin, met wie en wanneer. Bij Acties voor staat de EVV\'er, zo krijgt zij een taak. Markeer de rapportage als belangrijk, dan blijft hij op het Overzicht staan.',
        doe: 'Klik op Markeer als belangrijk',
        menu: 'Rapportages',
        doel: { knop: 'Markeer als belangrijk' },
        pagina: {
          titel: 'Nieuw - Rapportage',
          knoppen: ['Markeer als belangrijk', 'Opslaan'],
          velden: [
            { label: 'Tekst', waarde: 'Afspraak met familie: de dochter haalt mevrouw elke zondag om 9.30 uur op voor de kerk. Mevrouw zit dan aangekleed klaar. Afgesproken met de dochter, vrijdag 9 oktober, door Sanne Visser.' },
            { label: 'Acties voor', waarde: 'EVV' },
            { label: 'Zichtbaar voor', waarde: 'Iedereen' },
          ],
        },
      },
      {
        zeg: 'De ster staat aan. Je rapportage is klaar.',
        doe: 'Klik op Opslaan',
        menu: 'Rapportages',
        doel: { knop: 'Opslaan' },
        pagina: {
          titel: 'Nieuw - Rapportage',
          knoppen: ['★ Belangrijk', 'Opslaan'],
          velden: [
            { label: 'Tekst', waarde: 'Afspraak met familie: de dochter haalt mevrouw elke zondag om 9.30 uur op voor de kerk. Mevrouw zit dan aangekleed klaar. Afgesproken met de dochter, vrijdag 9 oktober, door Sanne Visser.' },
            { label: 'Acties voor', waarde: 'EVV' },
            { label: 'Zichtbaar voor', waarde: 'Iedereen' },
          ],
        },
      },
      {
        zeg: 'Je rapportage staat bovenaan, met een ster. Op het Overzicht staat hij nu bij Belangrijke rapportages. Zondag ziet de collega van de vroege dienst hem daar meteen.',
        doe: 'Klik in het menu op Overzicht',
        menu: 'Rapportages',
        doel: { menu: 'Overzicht' },
        pagina: {
          titel: 'Rapportages',
          knoppen: ['Acties bekijken', '+'],
          kaarten: [
            { kop: '★ Sanne Visser · vandaag 14.20', regels: ['Afspraak met familie: de dochter haalt mevrouw elke zondag om 9.30 uur op voor de kerk.'] },
            { kop: 'Joost de Vries · gisteren 21.50', regels: ['Mevrouw heeft na het avondeten met haar dochter gebeld. Daarna rustig gaan slapen.'] },
          ],
        },
      },
    ],
  },
  startKnop: 'Ik ga het vastleggen',
  intro: {
    tijd: 'Vrijdag 14.15 uur, vroege dienst op De Linde',
    kop: 'De dochter van mevrouw Dijkstra heeft een paar vragen',
    tekst: [
      'Mevrouw Dijkstra is 79 en woont sinds drie weken op De Linde. Haar dochter komt elke vrijdag op bezoek.',
      'Vlak voor het einde van je dienst houdt de dochter je aan op de gang. "Mijn moeder gaat graag naar de kerk. Vanaf nu haal ik haar elke zondag om 9.30 uur op. Kan ze dan aangekleed klaarzitten?"',
      'Ze heeft nog meer: "En als ze valt, wil ik meteen gebeld worden. Ook als het \'s nachts is."',
    ],
  },
  stappen: [
    {
      type: 'keuze',
      vraag: 'Je dienst is bijna voorbij. Wat doe je met de afspraken?',
      opties: [
        {
          tekst: 'Ik onthoud het en zeg het maandag tegen de EVV\'er.',
          goed: false,
          variant: {
            kop: 'Zondag 9.30 uur',
            tekst: 'De dochter staat in de gang met haar jas aan. Mevrouw Dijkstra zit nog in haar ochtendjas aan het ontbijt. Joost wist van niets. Ze komen te laat in de kerk, en de dochter vraagt boos wat er met haar afspraak is gebeurd.',
          },
          uitleg: 'Wat je onthoudt, weet je collega niet. Het weekend begint al voordat jij weer werkt.',
        },
        {
          tekst: 'Ik schrijf het op een briefje en leg het in het kantoortje.',
          goed: false,
          variant: {
            kop: 'Zaterdagnacht',
            tekst: 'Mevrouw Dijkstra valt om 3.00 uur naast haar bed. Ze heeft niets gebroken. De nachtdienst belt de dochter niet, want in Nedap ONS staat nergens dat dat moet. Het briefje ligt onder een stapel post. Zondag hoort de dochter het pas bij het ophalen.',
          },
          uitleg: 'Een briefje raakt kwijt en de nachtdienst kijkt er niet naar. Bij De Wilgenhof leg je afspraken met familie vast in Nedap ONS.',
        },
        {
          tekst: 'Ik leg het vast in Nedap ONS en stuur de EVV\'er een bericht. Het zondagse ophalen zet ik ook in de overdracht.',
          goed: true,
          variant: {
            kop: 'Zondag 9.30 uur',
            tekst: 'Mevrouw Dijkstra zit klaar met haar jas en haar tas. De dochter zegt: "Wat fijn dat het meteen geregeld is." De EVV\'er zet de afspraken maandag in het zorgplan.',
          },
          uitleg: 'Bij De Wilgenhof zet je een afspraak met familie in Nedap ONS en geef je het door aan de EVV\'er. Die zet het in het zorgplan. Geldt het al voor de volgende dienst, zet het dan ook in de overdracht.',
        },
      ],
    },
    {
      type: 'koppel',
      vraag: 'Voor ze weggaat, vraagt de dochter nog meer. Wat doe je met elk verzoek?',
      uitleg: 'Niet alles kun je zelf toezeggen. Over medicatie beslist de arts.',
      scherm: 'Afspraken familie · mevrouw Dijkstra',
      kiesTekst: 'Kies wat je doet',
      regels: [
        { waarneming: 'Elke zondag om 9.30 uur aangekleed klaar voor de kerk', goed: 'afspraak' },
        { waarneming: 'Bij een val direct de dochter bellen, ook \'s nachts', goed: 'afspraak' },
        { waarneming: 'Vanavond om 19.00 uur belt de dochter, mama graag helpen met de telefoon', goed: 'overdracht' },
        { waarneming: 'Mama mag haar slaappil voortaan een uur eerder krijgen', goed: 'overleggen' },
      ],
      opties: [
        { id: 'afspraak', naam: 'Vastleggen als afspraak met familie' },
        { id: 'overdracht', naam: 'Alleen in de overdracht' },
        { id: 'overleggen', naam: 'Niet toezeggen, eerst overleggen' },
      ],
      goedTekst: 'Goed. Vaste afspraken leg je vast, iets voor vanavond gaat in de overdracht, en over medicatie overleg je eerst.',
      foutTekst: 'Nog niet helemaal. De kerk en het bellen bij een val zijn vaste afspraken. Het telefoontje van vanavond is eenmalig, dat gaat in de overdracht. De slaappil gaat over medicatie. Dat zeg je niet zelf toe, dat bespreek je met de arts.',
    },
    {
      type: 'keuze',
      vraag: 'Hoe schrijf je de afspraak over vallen op?',
      opties: [
        {
          tekst: 'Familie wil op de hoogte blijven.',
          goed: false,
          variant: {
            kop: 'Twee weken later',
            tekst: 'Mevrouw Dijkstra struikelt om 23.00 uur in de badkamer. Fatima leest de afspraak en denkt: dan bel ik morgenochtend. De dochter hoort het pas de volgende dag en zegt: "Ik had toch gezegd dat ik meteen gebeld wilde worden?"',
          },
          uitleg: 'Op de hoogte blijven kan alles betekenen. Schrijf op wie je belt, wanneer en hoe.',
        },
        {
          tekst: 'Bij een val direct de dochter bellen, ook \'s nachts. Afgesproken met de dochter op vrijdag, door Sanne.',
          goed: true,
          variant: {
            kop: 'Twee weken later',
            tekst: 'Mevrouw Dijkstra struikelt om 23.00 uur in de badkamer. Fatima leest de afspraak en belt de dochter meteen. De dochter is blij dat het zo is gegaan zoals ze vroeg.',
          },
          uitleg: 'Een collega die mevrouw Dijkstra niet kent, weet nu precies wat ze moet doen.',
        },
      ],
    },
  ],
  toets: [
    {
      vraag: 'Familie maakt een afspraak met je op de gang. Wat doe je?',
      opties: ['Ik leg het vast in Nedap ONS en geef het door aan de EVV\'er.', 'Ik onthoud het en zeg het later.', 'Ik vraag de familie het zelf aan de EVV\'er te mailen.'],
      goed: 0,
    },
    {
      vraag: 'Welke afspraak is goed opgeschreven?',
      opties: ['Familie wil betrokken worden.', 'Familie graag bellen als er iets is.', 'Bij koorts boven 38 graden de zoon bellen, tussen 8.00 en 22.00 uur.'],
      goed: 2,
    },
    {
      vraag: 'De familie vraagt of een medicijn op een ander tijdstip mag. Wat doe je?',
      opties: ['Ik zeg ja, dat is makkelijk te regelen.', 'Ik zeg het niet toe en overleg eerst, want de arts beslist.', 'Ik zeg nee, dat mag nooit.'],
      goed: 1,
    },
    {
      vraag: 'Een afspraak geldt al voor de volgende dienst. Waar zet je hem ook?',
      opties: ['In de overdracht.', 'Op een briefje bij de koffie.', 'Nergens, de EVV\'er regelt het wel.'],
      goed: 0,
    },
    {
      vraag: 'Wie zet bij De Wilgenhof een vaste afspraak met familie in het zorgplan?',
      opties: ['De familie zelf.', 'De EVV\'er.', 'De nachtdienst.'],
      goed: 1,
    },
  ],
  samenvatting: [
    'Een afspraak met familie leg je meteen vast in Nedap ONS, niet in je hoofd en niet op een briefje.',
    'Schrijf op wie, wat en wanneer, zodat een collega die de cliënt niet kent het ook snapt.',
    'Geldt het al voor de volgende dienst, zet het ook in de overdracht. Over medicatie zeg je niets toe zonder overleg.',
  ],
};
