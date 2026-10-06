// Casus Ons Dossier bij De Wilgenhof.
// Fictieve cliënt, fictieve werkafspraken. Elke keuze heeft een eigen vervolg (variant).

export default {
  id: 'onsdossier',
  stapNamen: ['Situatie', 'Aftekenen', 'Rapporteren'],
  les: [
    {
      kop: 'Nedap ONS op je telefoon',
      beeld: 'dossier-app',
      tekst: [
        'Ons Dossier is de app van Nedap ONS voor op je telefoon. Je ziet daarin je cliënten, hun agenda en hun rapportages. Je hoeft dus niet naar de pc in het kantoor.',
        'Bij De Wilgenhof gebruik je de app aan het bed. Je tekent af wat je deed en je rapporteert wat je zag, meteen na de zorg.',
      ],
      punten: [
        'Wat je meteen opschrijft, klopt beter.',
        'De volgende dienst ziet het direct.',
      ],
    },
    {
      kop: 'Veilig werken met de app',
      beeld: 'authenticator',
      tekst: [
        'In de app staan gegevens van cliënten. Je werkt daarom alleen in de app, en niet in WhatsApp of in je notities.',
        'Kijk altijd eerst of je in het goede dossier zit. Controleer de naam en de geboortedatum. Twee cliënten kunnen dezelfde achternaam hebben.',
      ],
      punten: [
        'Vergrendel je telefoon als je de kamer uitloopt.',
        'Laat de app niet open liggen op de kamer.',
      ],
    },
    {
      kop: 'Aftekenen en rapporteren',
      beeld: 'dossier-app',
      tekst: [
        'In de agenda van de cliënt staan de handelingen van vandaag, zoals steunkousen of medicatie. Heb je een handeling gedaan, dan teken je hem af. Teken alleen af wat je echt deed.',
        'Zie je iets wat afwijkt, dan maak je in de app een rapportage. Kort en concreet: wat zag je, wanneer, en wat deed je.',
        'In het volgende deel doen we dat samen een keer in de app.',
      ],
    },
  ],
  doorklik: {
    plek: 'telefoon',
    app: 'Ons Dossier',
    klaar: 'Zo werk je aan het bed: cliënt kiezen, naam en geboortedatum controleren, de handeling aftekenen en daarna een rapportage maken.',
    stappen: [
      {
        zeg: 'Je opent Ons Dossier. Je ziet de cliënten van jouw dienst.',
        doe: 'Tik op meneer Vermeulen',
        doel: { regel: 'P Vermeulen' },
        pagina: {
          balk: 'Ons Dossier',
          kaarten: [{ kop: 'Mijn cliënten', regels: ['A Bakker', 'P Vermeulen', 'J Willems'] }],
        },
      },
      {
        zeg: 'Bovenaan staan de naam en de geboortedatum. Kijk of dat klopt. Daaronder zie je de handelingen van vandaag.',
        doe: 'Tik op Steunkousen aantrekken',
        doel: { regel: '8.00 uur Steunkousen aantrekken' },
        pagina: {
          balk: 'P Vermeulen',
          tabs: ['Agenda', 'Rapportages'],
          kaarten: [
            { kop: 'P Vermeulen', regels: ['Geboren 14-03-1941'] },
            { kop: 'Vandaag', regels: ['8.00 uur Steunkousen aantrekken', '12.00 uur Medicatie'] },
          ],
        },
      },
      {
        zeg: 'Je ziet wat er bij deze handeling hoort. Je hebt de kousen net aangetrokken, dus je tekent af.',
        doe: 'Tik op Aftekenen',
        doel: { knop: 'Aftekenen' },
        pagina: {
          balk: 'Steunkousen aantrekken',
          knoppen: ['Aftekenen'],
          kaarten: [{ kop: 'Handeling', regels: ['Steunkousen aantrekken, beide benen', 'Elke ochtend, 8.00 uur'] }],
        },
      },
      {
        zeg: 'De handeling is afgetekend en staat op jouw naam. Wil je iets opschrijven, dan ga je naar de rapportages.',
        doe: 'Tik op Rapportages',
        doel: { tab: 'Rapportages' },
        pagina: {
          balk: 'P Vermeulen',
          tabs: ['Agenda', 'Rapportages'],
          kaarten: [
            { kop: 'Vandaag', regels: ['8.00 uur Steunkousen aantrekken, afgetekend', '12.00 uur Medicatie'] },
          ],
        },
      },
      {
        zeg: 'Hier staan de rapportages van meneer Vermeulen, de nieuwste bovenaan. Met de plusknop maak je een nieuwe.',
        doe: 'Tik op de plusknop',
        doel: { knop: '+', label: 'Nieuwe rapportage' },
        pagina: {
          balk: 'P Vermeulen',
          tabs: ['Agenda', 'Rapportages'],
          knoppen: ['+'],
          kaarten: [{ kop: 'Joost Hendriks · gisteren 21.30', regels: ['Meneer rustig gaan slapen.'] }],
        },
      },
      {
        zeg: 'Je schrijft kort wat je zag en wat je deed. Daarna sla je op. De rapportage staat meteen in Nedap ONS.',
        doe: 'Tik op Opslaan',
        doel: { knop: 'Opslaan' },
        pagina: {
          balk: 'Nieuwe rapportage',
          knoppen: ['Opslaan'],
          velden: [
            { label: 'Tekst', waarde: 'Wat zag je, wanneer, en wat deed je?' },
            { label: 'Zichtbaar voor', waarde: 'Iedereen' },
          ],
        },
      },
    ],
  },
  startKnop: 'Ik pak mijn telefoon',
  intro: {
    tijd: 'Vrijdag 8.20 uur, vroege dienst op De Linde',
    kop: 'Meneer Vermeulen is duizelig',
    tekst: [
      'Je helpt meneer Vermeulen met zijn steunkousen. Bij De Wilgenhof teken je dat af met Ons Dossier op je telefoon, aan het bed.',
      'Als hij opstaat, pakt hij de rand van de tafel vast. "Even duizelig," zegt hij. Na een minuut gaat het weer.',
    ],
  },
  stappen: [
    {
      type: 'volgorde',
      vraag: 'Hoe teken je de steunkousen af? Zet de stappen in de goede volgorde.',
      items: [
        'Je helpt meneer met zijn steunkousen.',
        'Je opent Ons Dossier en kiest meneer Vermeulen.',
        'Je controleert naam en geboortedatum: zit je in het goede dossier?',
        'Je tekent de steunkousen af.',
        'Je vergrendelt je telefoon voor je de kamer uitloopt.',
      ],
      start: [3, 1, 4, 0, 2],
      goedTekst: 'Goed. Je tekent af wat je echt deed, in het goede dossier, en niemand kan daarna in je telefoon kijken.',
      foutTekst: 'Nog niet. Eerst de zorg, dan open je het dossier en controleer je of het de goede cliënt is. Pas dan teken je af. Tot slot vergrendel je je telefoon.',
    },
    {
      type: 'keuze',
      vraag: 'En de duizeligheid? Wat doe je?',
      opties: [
        {
          tekst: 'Je onthoudt het en schrijft het straks op de pc in het kantoor.',
          goed: false,
          variant: {
            kop: 'Om 14.30 uur',
            tekst: 'Het was een drukke ochtend. Pas bij de overdracht denk je eraan. Je weet niet meer of hij duizelig was bij het opstaan of al in bed.',
          },
          uitleg: 'Wat je later opschrijft, wordt vaag of je vergeet het. Met Ons Dossier rapporteer je het meteen, aan het bed.',
        },
        {
          tekst: 'Je rapporteert het meteen in Ons Dossier: duizelig bij opstaan, hield zich vast aan de tafel, na een minuut over.',
          goed: true,
          variant: {
            kop: 'Bij de overdracht',
            tekst: 'De verpleegkundige leest je rapportage en meet bij de lunch de bloeddruk van meneer Vermeulen, liggend en staand.',
          },
          uitleg: 'Je schrijft kort wat je zag, terwijl het nog vers is. De volgende collega kan er meteen mee verder.',
        },
        {
          tekst: 'Je spreekt een berichtje in voor Joost via WhatsApp.',
          goed: false,
          variant: {
            kop: 'Om 15.00 uur',
            tekst: 'Joost heeft het bericht gehoord, maar in het dossier staat niets. De nachtdienst weet van niets. En de gegevens van meneer staan nu in WhatsApp.',
          },
          uitleg: 'Informatie over een cliënt hoort in Nedap ONS, niet in WhatsApp. Daar leest het hele team het terug.',
        },
      ],
    },
  ],
  samenvatting: [
    'Teken af en rapporteer met Ons Dossier aan het bed, meteen na de zorg.',
    'Controleer eerst of je in het goede dossier zit.',
    'Vergrendel je telefoon voor je de kamer uitloopt.',
  ],
};
