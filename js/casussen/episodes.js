// Casus Kortdurende zorgbehoefte (episodes) bij De Wilgenhof.
// Fictieve cliënt, fictieve werkafspraken. Elke keuze heeft een eigen vervolg (variant).

export default {
  id: 'episodes',
  stapNamen: ['Situatie', 'Vastleggen', 'Indelen', 'Afsluiten'],
  startKnop: 'Ik ga het vastleggen',
  intro: {
    tijd: 'Donderdag 8.05 uur, vroege dienst op De Linde',
    kop: 'Mevrouw Kok moet steeds naar het toilet',
    tekst: [
      'Mevrouw Kok is 88. Sinds twee dagen moet ze vaak plassen, en het doet pijn. Haar urine is troebel en ruikt sterk.',
      'Gisteren heeft de huisarts gezegd dat het een blaasontsteking is. Mevrouw Kok krijgt een antibioticakuur van vijf dagen. De huisarts wil dat ze extra drinkt.',
      'Bij de overdracht zegt Fatima: "Kun jij dit vastleggen? Dan weet iedereen deze week wat er moet gebeuren."',
    ],
  },
  stappen: [
    {
      type: 'keuze',
      vraag: 'Hoe leg je de blaasontsteking vast in Nedap ONS?',
      opties: [
        {
          tekst: 'Ik pas het zorgplan aan en zet er een nieuw doel in voor de blaasontsteking.',
          goed: false,
          variant: {
            kop: 'Twee weken later',
            tekst: 'De blaasontsteking is allang over. Toch staat het doel nog in het zorgplan. Joost biedt mevrouw Kok nog steeds extra drinken aan en tekent het af. De EVV\'er moet uitzoeken waarom het doel er staat en het weer weghalen.',
          },
          uitleg: 'Het zorgplan is voor zorg die blijft. Een blaasontsteking speelt een paar dagen. Daarvoor gebruik je bij De Wilgenhof een episode, dan hoeft niemand het zorgplan op te ruimen.',
        },
        {
          tekst: 'Ik maak een episode aan voor de blaasontsteking, met de kuur en het extra drinken erin.',
          goed: true,
          variant: {
            kop: 'De rest van de week',
            tekst: 'Elke dienst ziet de episode bij mevrouw Kok staan. Iedereen biedt extra drinken aan en let op de kuur. Het zorgplan blijft zoals het was.',
          },
          uitleg: 'Een episode is voor iets wat een paar dagen of weken speelt. Iedereen ziet het, en als het over is sluit je het af.',
        },
        {
          tekst: 'Ik schrijf het alleen in de rapportage. Dat leest iedereen toch.',
          goed: false,
          variant: {
            kop: 'Zaterdagavond',
            tekst: 'Anouk werkt dit weekend voor het eerst weer. Ze leest de rapportages van vandaag, maar niet die van donderdag. Ze weet niets van het extra drinken. Mevrouw Kok drinkt die avond maar twee kopjes thee.',
          },
          uitleg: 'Een rapportage zakt weg tussen nieuwe rapportages. Een episode blijft zichtbaar zolang de blaasontsteking speelt.',
        },
      ],
    },
    {
      type: 'koppel',
      vraag: 'Je zit in de episode van mevrouw Kok. Wat hoort waar?',
      uitleg: 'Bij De Wilgenhof zet je in de episode alleen wat bij de blaasontsteking hoort. Wat je vandaag zag, gaat in de rapportage. Wat altijd geldt, staat in het zorgplan.',
      scherm: 'Episode · mevrouw Kok',
      ons: { scherm: 'nieuwe-episode', naam: 'G Kok', titel: 'Blaasontsteking' },
      kiesTekst: 'Kies een plek',
      regels: [
        { waarneming: 'Antibioticakuur van vijf dagen, tot en met maandag', goed: 'episode' },
        { waarneming: 'Elke dienst extra drinken aanbieden, minstens 1,5 liter per dag', goed: 'episode' },
        { waarneming: 'Vanochtend drie keer naar het toilet, urine troebel', goed: 'rapportage' },
        { waarneming: 'Mevrouw Kok wil al jaren eerst koffie, en dan pas gewassen worden', goed: 'zorgplan' },
      ],
      opties: [
        { id: 'episode', naam: 'Episode' },
        { id: 'rapportage', naam: 'Rapportage' },
        { id: 'zorgplan', naam: 'Zorgplan' },
      ],
      goedTekst: 'Goed ingedeeld. In de episode staat nu precies wat iedereen deze week moet doen.',
      foutTekst: 'Nog niet helemaal. De kuur en het extra drinken horen bij de blaasontsteking, dus in de episode. Wat je vanochtend zag, gaat in de rapportage. De koffie voor het wassen geldt altijd, dat staat in het zorgplan.',
    },
    {
      type: 'keuze',
      vraag: 'Een week later is de kuur klaar. Mevrouw Kok heeft geen klachten meer. Wat doe je met de episode?',
      opties: [
        {
          tekst: 'Ik laat hem staan. Misschien komt het terug.',
          goed: false,
          variant: {
            kop: 'Drie weken later',
            tekst: 'De episode staat nog open. Een nieuwe collega denkt dat mevrouw Kok nog ziek is en vraagt aan de familie hoe het met de blaasontsteking gaat. De dochter schrikt: "Is het weer mis?"',
          },
          uitleg: 'Een open episode zegt: dit speelt nu. Is het over, sluit hem dan af. Komt het terug, dan maak je een nieuwe.',
        },
        {
          tekst: 'Ik sluit de episode af en schrijf in de rapportage dat de klachten over zijn.',
          goed: true,
          variant: {
            kop: 'Bij de volgende overdracht',
            tekst: 'Iedereen ziet dat de blaasontsteking voorbij is. Het extra drinken stopt. Wil iemand later weten wat er was, dan staat de afgesloten episode er nog.',
          },
          uitleg: 'Afsluiten houdt het dossier actueel. De episode blijft terug te lezen.',
        },
      ],
    },
  ],
  samenvatting: [
    'Speelt iets maar een paar dagen of weken, leg het dan vast als episode.',
    'In de episode staat wat iedereen moet doen zolang het speelt.',
    'Is het over, sluit de episode af. Komt het steeds terug, bespreek dan met de EVV\'er of het in het zorgplan hoort.',
  ],
};
