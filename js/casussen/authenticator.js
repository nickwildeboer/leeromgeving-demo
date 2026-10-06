// Casus Authenticator bij De Wilgenhof.
// Fictieve werkafspraken. Er komt geen cliënt in voor.

export default {
  id: 'authenticator',
  stapNamen: ['Situatie', 'Nieuwe telefoon', 'Inloggen'],
  les: [
    {
      kop: 'Waarom je een code nodig hebt',
      beeld: 'authenticator',
      tekst: [
        'In Nedap ONS staan gegevens over de gezondheid van cliënten. Daarom is een wachtwoord niet genoeg. Na je wachtwoord vraagt Nedap ONS ook om een code.',
        'Die code staat in de authenticator-app op je telefoon. De code is maar kort geldig en daarna komt er een nieuwe. Wie alleen je wachtwoord heeft, komt er dus niet in.',
      ],
    },
    {
      kop: 'Jouw inlog is van jou',
      beeld: 'ons',
      tekst: [
        'Alles wat je in Nedap ONS doet, staat op naam van wie is ingelogd. Een rapportage, een aftekening, een meting. Zo weet iedereen wie wat deed.',
        'Werk je met de inlog van een collega, dan staat jouw werk op haar naam. Daar is zij dan verantwoordelijk voor.',
      ],
      punten: [
        'Je deelt je wachtwoord en je code met niemand.',
        'Je logt niet in voor een ander.',
      ],
    },
    {
      kop: 'Een nieuwe telefoon',
      beeld: 'authenticator',
      tekst: [
        'De koppeling met Nedap ONS zit in de app op je oude telefoon. Die gaat niet vanzelf mee naar een nieuwe telefoon.',
        'Bij De Wilgenhof koppelt de servicedesk de app opnieuw. Op de pc verschijnt dan een QR-code die je scant met de app. Regel dat het liefst voor je dienst begint.',
        'In het volgende deel doen we dat samen een keer in de app.',
      ],
    },
  ],
  doorklik: {
    plek: 'telefoon',
    app: 'Authenticator',
    klaar: 'Zo koppel je de app op een nieuwe telefoon: de plusknop, QR-code scannen, De Wilgenhof kiezen en de code overnemen.',
    stappen: [
      {
        zeg: 'De servicedesk heeft een nieuwe koppeling klaargezet. Op de pc zie je een QR-code. Op je telefoon open je de authenticator-app. Die is nog leeg.',
        doe: 'Tik op de plusknop',
        doel: { knop: '+', label: 'Account toevoegen' },
        pagina: {
          balk: 'Authenticator',
          knoppen: ['+'],
          kaarten: [{ kop: 'Accounts', regels: ['Nog geen accounts'] }],
        },
      },
      {
        zeg: 'De app vraagt hoe je het account wilt toevoegen. De QR-code staat al op de pc.',
        doe: 'Kies QR-code scannen',
        doel: { optie: 'QR-code scannen' },
        pagina: {
          balk: 'Authenticator',
          venster: { titel: 'Account toevoegen', opties: ['QR-code scannen', 'Code handmatig invoeren'] },
        },
      },
      {
        zeg: 'Je hebt de QR-code gescand. Het account van De Wilgenhof staat nu in de lijst.',
        doe: 'Tik op De Wilgenhof',
        doel: { regel: 'De Wilgenhof' },
        pagina: {
          balk: 'Authenticator',
          knoppen: ['+'],
          kaarten: [{ kop: 'Accounts', regels: ['De Wilgenhof'] }],
        },
      },
      {
        zeg: 'Je ziet een code van zes cijfers. De cirkel ernaast laat zien hoe lang hij nog geldig is. Neem hem meteen over in Nedap ONS.',
        doe: 'Tik op Code kopiëren',
        doel: { knop: 'Code kopiëren' },
        pagina: {
          balk: 'De Wilgenhof',
          knoppen: ['Code kopiëren'],
          kaarten: [{ kop: 'Eenmalige code', regels: ['482 913', 'Nog 21 seconden geldig'] }],
        },
      },
    ],
  },
  startKnop: 'Ik ga inloggen',
  intro: {
    tijd: 'Maandag 7.05 uur, vroege dienst op De Linde',
    kop: 'Je nieuwe telefoon geeft geen code',
    tekst: [
      'Dit weekend heb je een nieuwe telefoon gekocht. Je oude telefoon heb je ingeleverd.',
      'Je wilt inloggen op Nedap ONS om de overdracht te lezen. Je vult je wachtwoord in en Nedap ONS vraagt om de code uit de authenticator-app. Op je nieuwe telefoon staat die app nog niet goed.',
    ],
  },
  stappen: [
    {
      type: 'keuze',
      vraag: 'De dienst begint zo. Wat doe je?',
      opties: [
        {
          tekst: 'Je vraagt Fatima of je even met haar inlog mag werken.',
          goed: false,
          variant: {
            kop: 'Aan het eind van de dienst',
            tekst: 'Alles wat jij vandaag rapporteerde en aftekende, staat op naam van Fatima. Ook de medicatie die zij niet gaf. De teamleider vraagt haar om uitleg.',
          },
          uitleg: 'Bij De Wilgenhof werk je altijd onder je eigen naam. Wat je vastlegt, staat op naam van wie is ingelogd.',
        },
        {
          tekst: 'Je belt de servicedesk van De Wilgenhof om de app op je nieuwe telefoon te koppelen. Tot die tijd leest Fatima de overdracht voor.',
          goed: true,
          variant: {
            kop: 'Om 7.25 uur',
            tekst: 'De servicedesk helpt je de app opnieuw te koppelen. Je logt in met je eigen code en leest de rest van de overdracht zelf.',
          },
          uitleg: 'Bij een nieuwe telefoon moet de authenticator-app opnieuw gekoppeld worden. Dat regelt de servicedesk. Bel liefst al voor je dienst.',
        },
        {
          tekst: 'Je werkt vandaag zonder Nedap ONS en schrijft alles op een briefje.',
          goed: false,
          variant: {
            kop: 'Om 14.30 uur',
            tekst: 'Je briefje is vol. Je moet alles nog overtypen en de late dienst wacht op de overdracht. Een aftekening van vanochtend ontbreekt.',
          },
          uitleg: 'Een briefje raakt kwijt en de volgende dienst ziet niets. Laat de app opnieuw koppelen, dan kun je gewoon werken.',
        },
      ],
    },
    {
      type: 'volgorde',
      vraag: 'De app werkt weer. Hoe log je in? Zet de stappen in de goede volgorde.',
      items: [
        'Je vult je gebruikersnaam en wachtwoord in.',
        'Je opent de authenticator-app op je telefoon.',
        'Je neemt de code uit de app over.',
        'Je bent ingelogd in Nedap ONS.',
      ],
      start: [2, 0, 3, 1],
      goedTekst: 'Goed. De code verandert steeds, dus neem hem meteen over. Je code deel je met niemand.',
      foutTekst: 'Nog niet. Eerst je wachtwoord, dan open je de app en neem je de code over. Daarna ben je ingelogd.',
    },
  ],
  samenvatting: [
    'Log altijd in met je eigen naam en je eigen code.',
    'Nieuwe telefoon? Laat de authenticator-app koppelen door de servicedesk, liefst voor je dienst.',
    'Je code deel je met niemand.',
  ],
};
