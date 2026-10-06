// Casus Rapporteren bij De Wilgenhof.
// Fictieve cliënt, fictieve werkafspraken. Elke keuze heeft een eigen vervolg (variant).

export default {
  id: 'rapporteren',
  stapNamen: ['Situatie', 'Rapporteren', 'Koppelen', 'Overdracht'],
  les: [
    {
      kop: 'Waarom je rapporteert',
      beeld: 'rapport',
      tekst: [
        'Na jouw dienst neemt een collega het over. Die collega weet alleen wat jij opschrijft. Wat niet in Nedap ONS staat, is voor de volgende dienst niet gebeurd.',
        'Een goede rapportage scheelt een telefoontje na je dienst. En de cliënt hoeft niet twee keer hetzelfde te vertellen.',
      ],
      punten: [
        'Je rapporteert in je eigen dienst, niet pas de volgende dag.',
        'Je schrijft over wat afwijkt van het gewone, en over wat je deed.',
      ],
    },
    {
      kop: 'Schrijf wat je ziet',
      beeld: 'overdracht',
      tekst: [
        'Schrijf op wat je zag, hoorde en deed. Een collega moet het kunnen lezen alsof die er zelf bij was.',
        'Laat een oordeel weg. "Lastig" of "slechte bui" zegt niets over wat er gebeurde. Bij De Wilgenhof leest de familie ook mee.',
      ],
      punten: [
        'Niet: "Mevrouw was lastig." Wel: "Mevrouw wilde eerst niet ontbijten."',
        'Niet: "Plekje op de voet." Wel: "Rode plek rechterhiel, huid heel, ongeveer 2 cm."',
      ],
    },
    {
      kop: 'Waar het staat in Nedap ONS',
      beeld: 'ons',
      tekst: [
        'Je rapporteert in het dossier van de cliënt. Links in het menu staat Rapportages. Met de blauwe plusknop maak je een nieuwe rapportage.',
        'Daarna kies je het soort rapportage. Voor een gewone rapportage kies je Rapportage. Je schrijft je tekst en klikt op Opslaan.',
        'In het volgende deel klikken we dat samen een keer door.',
      ],
    },
  ],
  doorklik: {
    client: 'A Bakker',
    klaar: 'Zo maak je een rapportage: Rapportages in het menu, de plusknop, het soort kiezen, schrijven en opslaan.',
    stappen: [
      {
        zeg: 'Je hebt het dossier van mevrouw Bakker open. Je ziet eerst het overzicht. Links staat het menu van het dossier.',
        doe: 'Klik in het menu op Rapportages',
        menu: 'Overzicht',
        doel: { menu: 'Rapportages' },
        pagina: {
          kaarten: [
            { kop: 'Waarschuwingen', regels: ['Geen waarschuwingen'] },
            { kop: 'Episodes', regels: ['Decubitus voorkomen, sinds 12-09-2026'] },
            { kop: 'Belangrijke rapportages', regels: ['Geen belangrijke rapportages'] },
          ],
        },
      },
      {
        zeg: 'Hier staan alle rapportages van mevrouw Bakker, de nieuwste bovenaan. Lees ze aan het begin van je dienst. Rechtsboven staat de blauwe plusknop.',
        doe: 'Klik op de plusknop',
        menu: 'Rapportages',
        doel: { knop: '+', label: 'Nieuwe rapportage' },
        pagina: {
          titel: 'Rapportages',
          knoppen: ['Acties bekijken', '+'],
          kaarten: [
            { kop: 'Joost Hendriks · gisteren 21.40', regels: ['Mevrouw rustig gaan slapen. Wilde de deur op een kier.'] },
            { kop: 'Fatma Yilmaz · gisteren 13.15', regels: ['Middageten goed gegeten. Bezoek van dochter.'] },
          ],
        },
      },
      {
        zeg: 'Nedap ONS vraagt welk soort rapportage je maakt. Voor een meting kies je bijvoorbeeld Gewicht of Bloeddruk. Jij schrijft een gewone rapportage.',
        doe: 'Kies Rapportage',
        menu: 'Rapportages',
        doel: { optie: 'Rapportage' },
        pagina: {
          venster: { titel: 'Rapportagetype toevoegen', opties: ['Rapportage', 'SOEP', 'Gewicht', 'Bloeddruk', 'Pijnscore', 'Fotorapportage'] },
        },
      },
      {
        zeg: 'Je tekst staat erin: wat je zag en wat je deed. Onder het tekstvak kies je voor wie hij zichtbaar is en aan welke episode hij hoort.',
        doe: 'Klik op Opslaan',
        menu: 'Rapportages',
        doel: { knop: 'Opslaan' },
        pagina: {
          titel: 'Nieuw - Rapportage',
          knoppen: ['Opslaan'],
          velden: [
            { label: 'Tekst', waarde: 'Rode plek rechterhiel, huid heel, ongeveer 2 cm. Hiel vrijgelegd.' },
            { label: 'Zichtbaar voor', waarde: 'Iedereen' },
            { label: 'Koppel aan episodes', waarde: 'Decubitus voorkomen' },
          ],
        },
      },
    ],
  },
  startKnop: 'Ik ga rapporteren',
  intro: {
    tijd: 'Dinsdag 10.40 uur, vroege dienst op De Linde',
    kop: 'Mevrouw Bakker had een onrustige ochtend',
    tekst: [
      'Mevrouw Bakker is 84 en woont sinds een half jaar op De Linde. Vannacht heeft ze slecht geslapen.',
      'Bij de ochtendzorg is ze onrustig en wil ze eerst niet ontbijten. Je praat even met haar over haar kleindochter, en daarna eet ze toch een halve boterham.',
      'Bij het wassen zie je een rode plek op haar rechterhiel. De huid is niet open. De plek is ongeveer zo groot als een euro.',
    ],
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
      scherm: 'Rapportage · mevrouw Bakker',
      ons: { scherm: 'nieuwe-rapportage', naam: 'A Bakker', tekst: 'Mevrouw onrustig na een slechte nacht, wilde eerst niet ontbijten. Na een gesprek over haar kleindochter een halve boterham gegeten. Rode plek rechterhiel, huid heel, ongeveer 2 cm. Hiel vrijgelegd.' },
      kiesTekst: 'Kies een domein',
      opties: [
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
  samenvatting: [
    'Schrijf wat je zag en wat je deed, geen oordeel.',
    'Koppel je rapportage aan het doel in het zorgplan.',
    'Moet de volgende dienst er vandaag iets mee, zet het dan ook in de overdracht.',
  ],
};
