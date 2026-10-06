// Casus Authenticator bij De Wilgenhof.
// Fictieve werkafspraken. Er komt geen cliënt in voor.

export default {
  id: 'authenticator',
  stapNamen: ['Situatie', 'Nieuwe telefoon', 'Inloggen'],
  startKnop: 'Ik ga inloggen',
  intro: {
    tijd: 'Maandag 7.05 uur, vroege dienst op De Linde',
    kop: 'Je nieuwe telefoon geeft geen code',
    tekst: [
      'Dit weekend heb je een nieuwe telefoon gekocht. Je oude telefoon heb je ingeleverd.',
      'Je wilt inloggen op Nedap ONS om de overdracht te lezen. Je vult je wachtwoord in en Nedap ONS vraagt om de code uit de authenticator-app. Op je nieuwe telefoon staat die app nog niet goed.',
    ],
    noot: 'De werkafspraken in deze casus zijn verzonnen voor De Wilgenhof.',
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
