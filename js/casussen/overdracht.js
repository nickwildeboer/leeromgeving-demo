// Casus Overdracht bij De Wilgenhof.
// Fictieve cliënten, fictieve werkafspraken. Elke keuze heeft een eigen vervolg (variant).

export default {
  id: 'overdracht',
  stapNamen: ['Situatie', 'Opstarten', 'Wat eerst', 'Eerste kamer'],
  startKnop: 'Ik lees de overdracht',
  intro: {
    tijd: 'Donderdag 7.00 uur, vroege dienst op De Linde',
    kop: 'Je dienst begint, de nachtdienst gaat bijna naar huis',
    tekst: [
      'Je hangt je jas op en pakt een kop koffie. Je hebt twee dagen vrij gehad. Er kan in die tijd veel gebeurd zijn op De Linde.',
      'Bij De Wilgenhof lees je eerst de overdrachtsagenda en de overdrachtsrapportages in Nedap ONS. Pas daarna ga je de eerste kamer in.',
      'In de overdracht van vannacht staat onder andere: "Meneer Jansen om 3.40 uur naast zijn bed gevonden. Geen letsel gezien. MIC gemeld. Graag goed observeren."',
    ],
    noot: 'Meneer Jansen, mevrouw Smit en meneer Van Leeuwen zijn verzonnen. In deze leeromgeving staan nooit echte cliënten.',
  },
  stappen: [
    {
      type: 'volgorde',
      vraag: 'Hoe start je je dienst? Zet de stappen in de goede volgorde.',
      uitleg: 'Dit is de werkafspraak van De Wilgenhof voor het begin van elke dienst.',
      items: [
        'Inloggen in Nedap ONS',
        'De overdrachtsagenda van vandaag bekijken',
        'De overdrachtsrapportages lezen sinds je laatste dienst',
        'Vragen stellen aan de nachtdienst zolang die er nog is',
        'Kiezen bij welke cliënt je als eerste gaat',
      ],
      start: [2, 4, 0, 3, 1],
      goedTekst: 'Goed zo. Je weet nu wat er speelt, en je kunt je vragen nog kwijt bij de nachtdienst voordat die naar huis gaat.',
      foutTekst: 'Nog niet. Je logt eerst in, dan lees je de agenda en de rapportages. Met wat je gelezen hebt, stel je je vragen aan de nachtdienst. Daarna kies je pas waar je begint.',
    },
    {
      type: 'koppel',
      vraag: 'In de overdracht staan vier punten. Wat doe je met elk punt?',
      uitleg: 'Niet alles is even dringend. Sommige dingen doe je meteen, sommige plan je in, en sommige hoef je alleen te weten.',
      scherm: 'Overdracht · De Linde · donderdag',
      kiesTekst: 'Kies wat je doet',
      regels: [
        { waarneming: 'Meneer Jansen vannacht naast zijn bed gevonden, observeren', goed: 'meteen' },
        { waarneming: 'Mevrouw Smit: bloedsuiker prikken voor het ontbijt', goed: 'meteen' },
        { waarneming: 'Meneer Van Leeuwen: de huisarts komt om 11.00 uur', goed: 'inplannen' },
        { waarneming: 'Mevrouw Smit: dochter neemt zondag nieuwe pantoffels mee', goed: 'weten' },
      ],
      opties: [
        { id: 'meteen', naam: 'Meteen doen, aan het begin van je dienst' },
        { id: 'inplannen', naam: 'Inplannen voor later vandaag' },
        { id: 'weten', naam: 'Alleen weten, er hoeft nu niets' },
      ],
      goedTekst: 'Goed gekozen. Je begint met wat niet kan wachten, je weet hoe laat de huisarts komt, en de pantoffels onthoud je voor zondag.',
      foutTekst: 'Kijk nog eens. Na een val en voor een bloedsuiker voor het ontbijt kun je niet wachten. De huisarts om 11.00 uur zet je in je planning. De pantoffels hoef je alleen te weten.',
    },
    {
      type: 'keuze',
      vraag: 'Je gaat de gang op. Bij wie begin je?',
      opties: [
        {
          tekst: 'Bij meneer Jansen. Je vraagt hoe het gaat, kijkt naar pijn en bewegen, en schrijft op wat je ziet.',
          goed: true,
          variant: {
            kop: 'Om 7.25 uur zit je bij meneer Jansen',
            tekst: 'Hij zegt dat zijn linkerheup een beetje zeurt. Je ziet een blauwe plek die de nachtdienst in het donker niet zag. Je rapporteert het en belt de verpleegkundige. Die komt nog voor de ochtendzorg kijken.',
          },
          uitleg: 'Na een val kan pijn pas later komen. Door eerst te gaan, zie je het op tijd en kan de verpleegkundige meekijken.',
        },
        {
          tekst: 'Bij meneer Van Leeuwen, die is altijd vroeg wakker. Meneer Jansen komt later in je ronde.',
          goed: false,
          variant: {
            kop: 'Om 8.40 uur hoor je een bel',
            tekst: 'Meneer Jansen heeft geprobeerd zelf op te staan. Hij heeft veel pijn in zijn heup en kan niet goed staan. De verpleegkundige vraagt waarom niemand eerder bij hem is geweest. Je hebt geen antwoord.',
          },
          uitleg: 'De overdracht vroeg om observeren na een val. Dan ga je eerst naar die cliënt, ook als je vaste ronde anders loopt.',
        },
        {
          tekst: 'Je vraagt de nachtdienst hoe het met meneer Jansen ging. Die zegt "prima", dus je begint je vaste ronde.',
          goed: false,
          variant: {
            kop: 'Om 9.15 uur belt de zoon van meneer Jansen',
            tekst: 'Hij heeft gehoord dat zijn vader gevallen is en wil weten hoe het nu met hem gaat. Je hebt meneer Jansen nog niet gezien. Er staat sinds 3.40 uur niets nieuws in het dossier.',
          },
          uitleg: 'Een collega die vannacht weinig zag, kan nu niet zeggen hoe het gaat. Je kijkt zelf en schrijft het op. Dan kan iedereen het teruglezen, ook de familie.',
        },
      ],
    },
  ],
  samenvatting: [
    'Lees de overdrachtsagenda en de overdrachtsrapportages voordat je de eerste kamer in gaat.',
    'Stel je vragen aan de nachtdienst zolang die er nog is.',
    'Begin bij wat niet kan wachten, zoals een cliënt die gevallen is.',
  ],
};
