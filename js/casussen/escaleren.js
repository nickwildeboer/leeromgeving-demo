// Casus Escaleren: jezelf autoriseren voor een cliënt bij De Wilgenhof.
// Fictieve cliënt, fictieve werkafspraken. Elke keuze heeft een eigen vervolg (variant).

export default {
  id: 'escaleren',
  stapNamen: ['Situatie', 'Toegang', 'Mag het?', 'Stappen', 'Daarna'],
  startKnop: 'Ik ga naar meneer Bos',
  intro: {
    tijd: 'Zaterdag 16.50 uur, late dienst op De Eik',
    kop: 'Je valt in, en meneer Bos staat niet in jouw lijst',
    tekst: [
      'Mehmet is ziek. Je valt vandaag in op De Eik, een afdeling waar je normaal niet werkt.',
      'Om 17.00 uur is het avondeten. Meneer Bos zit al aan tafel. Een collega zegt: "Pas op met meneer Bos, hij verslikt zich snel. Er staat iets over in zijn dossier."',
      'Je opent Nedap ONS. Meneer Bos staat niet in jouw lijst. Je kunt zijn dossier niet openen.',
    ],
  },
  stappen: [
    {
      type: 'keuze',
      vraag: 'Je hebt het slikadvies van meneer Bos nodig. Wat doe je?',
      opties: [
        {
          tekst: 'Ik vraag Lieke of ik even op haar account mag kijken. Zij staat wel ingelogd.',
          goed: false,
          variant: {
            kop: 'Maandagochtend',
            tekst: 'De teamleider belt Lieke. In Nedap ONS staat dat Lieke om 16.55 uur in het dossier keek, terwijl ze op dat moment pauze had. Lieke moet uitleggen waarom. Ze is boos op je.',
          },
          uitleg: 'Op het account van een ander werken mag nooit. Alles wat je doet, staat dan op haar naam. Bij De Wilgenhof gebruik je altijd je eigen account.',
        },
        {
          tekst: 'Ik geef meneer Bos gewoon zijn eten. Ik let goed op.',
          goed: false,
          variant: {
            kop: 'Om 17.20 uur',
            tekst: 'Meneer Bos krijgt een gewone boterham met thee. Na een paar happen begint hij te hoesten en wordt hij rood. Je collega komt aanrennen. In zijn dossier staat dat hij gemalen eten en verdikte drank krijgt.',
          },
          uitleg: 'Een slikadvies is er niet voor niets. Als je zorg geeft, moet je weten wat er voor deze cliënt is afgesproken.',
        },
        {
          tekst: 'Ik escaleer mijn toegang voor meneer Bos en schrijf als reden: invallen op De Eik.',
          goed: true,
          variant: {
            kop: 'Om 17.05 uur',
            tekst: 'Je leest dat meneer Bos gemalen eten krijgt en verdikte drank. Je maakt zijn bord klaar zoals het hoort. Hij eet rustig en verslikt zich niet.',
          },
          uitleg: 'Bij De Wilgenhof mag je jezelf autoriseren als je invalt of als het acuut is. Je geeft altijd een reden op. Daarna kun je het dossier lezen dat je nodig hebt.',
        },
        {
          tekst: 'Ik wacht tot de teamleider maandag mijn toegang regelt.',
          goed: false,
          variant: {
            kop: 'Om 17.30 uur',
            tekst: 'Je durft meneer Bos niets te geven. Zijn eten wordt koud. Hij wordt onrustig en vraagt steeds waarom hij niet mag eten. Je collega moet het van je overnemen, terwijl zij zelf ook acht cliënten heeft.',
          },
          uitleg: 'Wachten helpt meneer Bos niet. Daarom is er escaleren: voor als je nu toegang nodig hebt om zorg te geven.',
        },
      ],
    },
    {
      type: 'koppel',
      vraag: 'Wanneer mag je jezelf bij De Wilgenhof autoriseren voor een cliënt die niet in jouw lijst staat?',
      uitleg: 'De afspraak is: je escaleert alleen als je zorg moet geven en je de gegevens daarvoor nodig hebt.',
      scherm: 'Escaleren · reden opgeven',
      kiesTekst: 'Mag het?',
      regels: [
        { waarneming: 'Je valt in op een andere afdeling en hebt het zorgplan nodig', goed: 'mag' },
        { waarneming: 'Een cliënt van een andere groep valt, en jij bent als eerste bij hem', goed: 'mag' },
        { waarneming: 'Je wilt weten hoe het gaat met je oude buurvrouw, die op De Beuk woont', goed: 'magniet' },
        { waarneming: 'Je bent benieuwd waarom een cliënt van een andere afdeling naar het ziekenhuis ging', goed: 'magniet' },
      ],
      opties: [
        { id: 'mag', naam: 'Mag, met reden' },
        { id: 'magniet', naam: 'Mag niet' },
      ],
      goedTekst: 'Klopt. Je escaleert alleen als je zorg moet geven aan deze cliënt.',
      foutTekst: 'Nog niet helemaal. Invallen en een acute situatie zijn een goede reden. Nieuwsgierigheid is dat nooit, ook niet als je de cliënt kent.',
    },
    {
      type: 'volgorde',
      vraag: 'In welke volgorde doe je dit bij meneer Bos?',
      items: [
        'Je ziet dat meneer Bos niet in jouw lijst staat',
        'Je escaleert en schrijft de reden erbij: invallen op De Eik',
        'Je leest alleen wat je nodig hebt: het slikadvies',
        'Je rapporteert hoe het eten ging',
        'Je meldt bij de overdracht dat je geëscaleerd hebt',
      ],
      start: [2, 4, 0, 3, 1],
      goedTekst: 'Goed. Je kijkt eerst of het nodig is, je geeft een reden, en je laat zien wat je gedaan hebt.',
      foutTekst: 'Nog niet. Eerst zie je dat je geen toegang hebt. Dan escaleer je met een reden. Je leest alleen wat je nodig hebt. Daarna rapporteer je en meld je het bij de overdracht.',
    },
    {
      type: 'keuze',
      vraag: 'Dinsdag werk je weer op De Linde. Je vraagt je af hoe het met meneer Bos gaat. Wat doe je?',
      opties: [
        {
          tekst: 'Ik escaleer nog een keer en kijk even in zijn rapportage.',
          goed: false,
          variant: {
            kop: 'Een week later',
            tekst: 'Bij De Wilgenhof bekijkt de privacyfunctionaris elke week wie er geëscaleerd heeft, en waarom. Jouw reden van dinsdag past niet bij je rooster. Je krijgt een gesprek met de teamleider.',
          },
          uitleg: 'Elke keer dat je escaleert, wordt vastgelegd en gecontroleerd. Je mag het alleen als je zorg geeft aan deze cliënt.',
        },
        {
          tekst: 'Ik vraag het aan Mehmet als ik hem zie.',
          goed: true,
          variant: {
            kop: 'Woensdag in de pauze',
            tekst: 'Mehmet is weer beter. Hij vertelt dat meneer Bos het goed maakt. Hij bedankt je dat je het slikadvies hebt opgezocht.',
          },
          uitleg: 'Je geeft geen zorg meer aan meneer Bos, dus je hebt geen reden om in zijn dossier te kijken.',
        },
      ],
    },
  ],
  toets: [
    {
      vraag: 'Wanneer mag je bij De Wilgenhof escaleren?',
      opties: ['Als je nieuwsgierig bent naar een cliënt.', 'Als je invalt of als het acuut is, en je de gegevens nodig hebt voor de zorg.', 'Altijd, als je bij De Wilgenhof werkt.'],
      goed: 1,
    },
    {
      vraag: 'Wat schrijf je erbij als je escaleert?',
      opties: ['De reden, bijvoorbeeld: invallen op De Eik.', 'Niets, dat is niet nodig.', 'De naam van je teamleider.'],
      goed: 0,
    },
    {
      vraag: 'Je collega biedt aan dat je op haar account kijkt. Wat doe je?',
      opties: ['Dat is prima, het gaat sneller.', 'Ik doe het alleen als het druk is.', 'Ik weiger, en ik gebruik mijn eigen account.'],
      goed: 2,
    },
    {
      vraag: 'Wat gebeurt er met een escalatie bij De Wilgenhof?',
      opties: ['Niets, niemand ziet het.', 'Hij wordt vastgelegd en elke week gecontroleerd.', 'Hij wordt na een dag gewist.'],
      goed: 1,
    },
    {
      vraag: 'Je hebt geëscaleerd voor een cliënt. Wat lees je in zijn dossier?',
      opties: ['Alles, nu je toch binnen bent.', 'Alleen wat de familie heeft geschreven.', 'Alleen wat je nodig hebt voor de zorg die je nu geeft.'],
      goed: 2,
    },
  ],
  samenvatting: [
    'Staat een cliënt niet in jouw lijst en moet je zorg geven, dan mag je escaleren. Bijvoorbeeld als je invalt of als het acuut is.',
    'Geef altijd een reden op en lees alleen wat je nodig hebt.',
    'Elke escalatie wordt vastgelegd en gecontroleerd. Nieuwsgierigheid is nooit een reden.',
    'Werk nooit op het account van een collega.',
  ],
};
