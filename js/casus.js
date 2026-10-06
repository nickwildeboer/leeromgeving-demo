// De uitgewerkte casus voor de demo: Rapporteren bij De Wilgenhof.
// Fictieve cliënt, fictieve werkafspraken. Elke keuze heeft een eigen vervolg (variant).

export const RAPPORTEREN = {
  id: 'rapporteren',
  intro: {
    tijd: 'Dinsdag 10.40 uur, vroege dienst op De Linde',
    kop: 'Mevrouw Bakker had een onrustige ochtend',
    tekst: [
      'Mevrouw Bakker is 84 en woont sinds een half jaar op De Linde. Vannacht heeft ze slecht geslapen.',
      'Bij de ochtendzorg is ze onrustig en wil ze eerst niet ontbijten. Je praat even met haar over haar kleindochter, en daarna eet ze toch een halve boterham.',
      'Bij het wassen zie je een rode plek op haar rechterhiel. De huid is niet open. De plek is ongeveer zo groot als een euro.',
    ],
    noot: 'Mevrouw Bakker is verzonnen. In deze leeromgeving staan nooit echte cliënten.',
  },
  stappen: [
    {
      type: 'keuze',
      vraag: 'Je gaat rapporteren. Welke tekst zet jij in Nedap ONS?',
      opties: [
        {
          tekst: 'Mevrouw was onrustig vanochtend. Verder geen bijzonderheden.',
          goed: false,
          variant: {
            kop: 'Om 15.20 uur gaat je telefoon',
            tekst: 'Het is Joost van de avonddienst: "Wat bedoel je met onrustig? Heeft ze gegeten? En de dochter vraagt of er iets met haar voet is, ze zag mama hinken." Je staat al bij je fiets.',
          },
          uitleg: 'Onrustig zegt weinig, en de rode plek op de hiel staat er niet in. De volgende dienst moet je dan bellen of het zelf opnieuw ontdekken.',
        },
        {
          tekst: 'Mevrouw onrustig na een slechte nacht, wilde eerst niet ontbijten. Na een gesprek over haar kleindochter een halve boterham gegeten. Rode plek rechterhiel, huid heel, ongeveer 2 cm. Hiel vrijgelegd.',
          goed: true,
          variant: {
            kop: 'Om 15.20 uur blijft je telefoon stil',
            tekst: 'Joost leest je rapportage bij de overdracht. Hij weet wat werkte bij het ontbijt, en hij kijkt bij de avondzorg meteen naar de hiel.',
          },
          uitleg: 'Je schrijft wat je zag en wat je deed. Daar kan de volgende dienst mee verder.',
        },
        {
          tekst: 'Mevrouw had een slechte bui en was lastig bij de zorg.',
          goed: false,
          variant: {
            kop: 'Een dag later belt de dochter',
            tekst: 'Ze heeft de rapportage gelezen en is boos: "Lastig? Mijn moeder is gewoon bang als ze slecht geslapen heeft." Ze wil een gesprek met de teamleider.',
          },
          uitleg: 'Lastig en slechte bui zijn een oordeel. Bij De Wilgenhof leest de familie mee. Schrijf wat je zag, en de rode plek mist ook.',
        },
      ],
    },
    {
      type: 'koppel',
      vraag: 'Bij De Wilgenhof rapporteer je op het doel in het zorgplan. Bij welk Mikzo-domein hoort elke waarneming?',
      uitleg: 'Mevrouw Bakker heeft in haar zorgplan een doel voor haar huid (gezondheid) en een doel voor rust en stemming (welzijn).',
      regels: [
        { waarneming: 'Rode plek op de rechterhiel', goed: 'gezondheid' },
        { waarneming: 'Onrustig, eerst niet willen ontbijten', goed: 'welzijn' },
      ],
      domeinen: [
        { id: 'persoonsgericht', naam: 'Persoonsgerichte zorg' },
        { id: 'wonen', naam: 'Wonen' },
        { id: 'welzijn', naam: 'Welzijn' },
        { id: 'veiligheid', naam: 'Veiligheid' },
        { id: 'gezondheid', naam: 'Gezondheid' },
      ],
      goedTekst: 'Goed gekoppeld. Nu ziet de EVV\'er bij het doel precies wat er speelt.',
      foutTekst: 'Nog niet helemaal. De plek op de hiel hoort bij het doel voor de huid, dus bij gezondheid. De onrust hoort bij het doel voor rust en stemming, dus bij welzijn.',
    },
    {
      type: 'keuze',
      vraag: 'Zet je de rode plek ook in de overdracht voor de avonddienst?',
      opties: [
        {
          tekst: 'Ja, als aandachtspunt: hiel bekijken bij de avondzorg.',
          goed: true,
          variant: {
            kop: 'De volgende ochtend',
            tekst: 'De avonddienst heeft de hiel bekeken en vrijgelegd. De plek is minder rood. In de rapportage staat het allemaal.',
          },
          uitleg: 'Een rapportage lees je terug. Een overdracht zorgt dat de volgende dienst er vandaag nog iets mee doet.',
        },
        {
          tekst: 'Nee, het staat al in de rapportage.',
          goed: false,
          variant: {
            kop: 'De volgende ochtend',
            tekst: 'Niemand heeft de hiel bekeken. De plek is nu open. Er moet een wondzorgplan komen en de familie wordt gebeld.',
          },
          uitleg: 'De rapportage lees je terug als je zoekt. Voor iets wat vandaag aandacht nodig heeft, gebruik je bij De Wilgenhof de overdracht.',
        },
      ],
    },
  ],
  toets: [
    {
      vraag: 'Welke zin is een goede waarneming?',
      opties: ['Meneer was chagrijnig.', 'Meneer at twee boterhammen en dronk een kop thee.', 'Meneer had geen zin vandaag.'],
      goed: 1,
    },
    {
      vraag: 'Waar koppel je bij De Wilgenhof een rapportage aan?',
      opties: ['Aan het doel in het zorgplan.', 'Aan je eigen naam.', 'Nergens aan, het is een losse notitie.'],
      goed: 0,
    },
    {
      vraag: 'Je ziet iets wat de volgende dienst vandaag nog moet bekijken. Wat doe je?',
      opties: ['Ik zet het alleen in de rapportage.', 'Ik zet het in de rapportage en in de overdracht.', 'Ik onthoud het en zeg het morgen.'],
      goed: 1,
    },
    {
      vraag: 'Wie kunnen bij De Wilgenhof je rapportage lezen?',
      opties: ['Alleen jij.', 'Alleen je teamleider.', 'Je collega\'s, en de familie leest mee.'],
      goed: 2,
    },
    {
      vraag: 'Een cliënt heeft drie dagen een verkoudheid. Hoe leg je dat vast?',
      opties: ['Als episode, een kortdurende zorgbehoefte.', 'Ik pas het zorgplan aan.', 'Niet, het gaat vanzelf over.'],
      goed: 0,
    },
  ],
};

export const NORM = 0.8;
