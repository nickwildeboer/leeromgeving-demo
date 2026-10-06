// Casus Ons Dossier bij De Wilgenhof.
// Fictieve cliënt, fictieve werkafspraken. Elke keuze heeft een eigen vervolg (variant).

export default {
  id: 'onsdossier',
  stapNamen: ['Situatie', 'Aftekenen', 'Rapporteren'],
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
