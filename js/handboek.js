// Het interne handboek van Zorggroep De Wilgenhof, als losse passages.
// Fictieve organisatie, fictieve mensen. De werkafspraken sluiten aan op de casussen in js/casussen/.
// "Vraag het" zoekt hierin (js/zoeken.js). In de echte versie komt dit uit SharePoint.

const BRON = 'Handboek De Wilgenhof';
const SHAREPOINT = 'Wie doet wat (SharePoint)';

export const HANDBOEK = [
  // ---------- Welkom en hulp ----------
  {
    id: 'key-user',
    hoofdstuk: 'Welkom en hulp',
    kop: 'Je key-user: de eerste hulp bij Nedap ONS',
    tekst: [
      'Elke afdeling heeft een key-user. Dat is een collega die Nedap ONS en de apps goed kent. Met een vraag over het werken in Nedap ONS ga je eerst naar de key-user van je eigen afdeling.',
      'De key-user van De Linde is Fatima el Amrani. Ze werkt op maandag, woensdag en vrijdag. De key-user van De Eik is Wendy Schouten, op dinsdag en donderdag. De key-user van De Beuk is Esther Wouters, op maandag en donderdag.',
      'Is je eigen key-user er niet, vraag het dan de key-user van een andere afdeling. Kun je door een probleem niet verder werken, bel dan de servicedesk op toestel 2140.',
    ],
    module: 'rondleiding',
    bron: BRON,
  },
  {
    id: 'leeromgeving',
    hoofdstuk: 'Welkom en hulp',
    kop: 'Zo werkt de leeromgeving',
    tekst: [
      'In de leeromgeving staan de modules die bij jouw werk horen. Elke module begint met uitleg. Daarna klik je samen met ons door Nedap ONS. Tot slot oefen je met een situatie uit je eigen werk.',
      'Je opleider ziet welke modules je af hebt. Zo blijft je inwerkchecklist vanzelf bij. Bij De Wilgenhof rond je de modules af in je eerste zes weken.',
    ],
    module: 'rondleiding',
    bron: BRON,
  },
  {
    id: 'vraag-stellen',
    hoofdstuk: 'Welkom en hulp',
    kop: 'Bij wie je terechtkunt met een vraag',
    tekst: [
      'Kijk eerst in dit handboek. Hier staan de werkafspraken van De Wilgenhof. Staat je antwoord er niet in, vraag het dan de key-user van je afdeling.',
      'Gaat je vraag over de zorg voor een cliënt, dan ga je naar de EVV\'er van die cliënt. Over je rooster, je contract of ziek melden praat je met je teamleider. Over je inwerkprogramma praat je met de opleider.',
    ],
    module: 'rondleiding',
    bron: BRON,
  },

  // ---------- Je dienst starten ----------
  {
    id: 'dienst-starten',
    hoofdstuk: 'Je dienst starten',
    kop: 'Zo start je een dienst',
    tekst: [
      'Je begint elke dienst op dezelfde manier. Je logt in op Nedap ONS met je eigen naam en je eigen code. Daarna lees je de overdracht, voordat je de eerste kamer in gaat.',
      'Je leest terug tot je eigen laatste dienst, ook als je een paar dagen vrij was. De vorige dienst is er nog even. Wat je niet snapt, vraag je nu.',
    ],
    module: 'overdracht',
    bron: BRON,
  },
  {
    id: 'overdracht-lezen',
    hoofdstuk: 'Je dienst starten',
    kop: 'De overdracht lezen: rapportages en agenda',
    tekst: [
      'De overdracht heeft twee delen. In de overdrachtsrapportages staat wat er gebeurd is. In de overdrachtsagenda staat wat er vandaag moet gebeuren, zoals een bezoek van de huisarts of een meting.',
      'Op het startscherm van Ons Dossier staat rechts het blok Overdracht. Daarin vind je Rapportages en Agenda voor jouw cliënten.',
      'Begin bij wat niet kan wachten, zoals een cliënt die vannacht gevallen is. Een afspraak op een vaste tijd zet je in je planning voor vandaag.',
    ],
    module: 'overdracht',
    bron: BRON,
  },
  {
    id: 'overdracht-schrijven',
    hoofdstuk: 'Je dienst starten',
    kop: 'De overdracht aan het eind van je dienst',
    tekst: [
      'Moet de volgende dienst vandaag nog iets doen, dan zet je het in de overdracht. Een rapportage alleen is dan niet genoeg. Die lees je pas terug als je zoekt.',
      'Schrijf in de overdracht wat er moet gebeuren en bij wie. Bijvoorbeeld: hiel van mevrouw bekijken bij de avondzorg. Heb je geëscaleerd, vertel dan ook bij wie en waarom.',
    ],
    module: 'overdracht',
    bron: BRON,
  },
  {
    id: 'client-opzoeken',
    hoofdstuk: 'Je dienst starten',
    kop: 'De goede cliënt opzoeken',
    tekst: [
      'Bij De Wilgenhof wonen meer cliënten met dezelfde achternaam. Kies daarom nooit op naam alleen. Controleer altijd de afdeling, het kamernummer en de geboortedatum.',
      'Bovenaan elk scherm in Nedap ONS staat het zoekveld. Je zoekt op achternaam en kiest de cliënt uit de lijst. Onder Algemeen in het dossier controleer je of je goed zit.',
    ],
    module: 'opzoeken',
    bron: BRON,
  },
  {
    id: 'invallen',
    hoofdstuk: 'Je dienst starten',
    kop: 'Invallen op een andere afdeling',
    tekst: [
      'Val je in op een afdeling die je niet kent? Vraag dan eerst aan een collega van die afdeling wie je zoekt. Zo open je niet het dossier van een cliënt met dezelfde naam op je eigen afdeling.',
      'Staat de cliënt niet in jouw lijst, dan mag je escaleren. Je legt zelf vast wat je deed, ook als je invalt.',
    ],
    module: 'opzoeken',
    bron: BRON,
  },

  // ---------- Vastleggen in Nedap ONS ----------
  {
    id: 'rapporteren-wat',
    hoofdstuk: 'Vastleggen in Nedap ONS',
    kop: 'Wat je rapporteert',
    tekst: [
      'Je rapporteert in je eigen dienst, niet pas de volgende dag. Je schrijft over wat afwijkt van het gewone, en over wat je deed.',
      'Schrijf op wat je zag, hoorde en deed. Laat een oordeel weg. "Mevrouw wilde eerst niet ontbijten" zegt meer dan "mevrouw was lastig". Bij De Wilgenhof leest de familie mee.',
    ],
    module: 'rapporteren',
    bron: BRON,
  },
  {
    id: 'rapporteren-hoe',
    hoofdstuk: 'Vastleggen in Nedap ONS',
    kop: 'Een rapportage maken in Nedap ONS',
    tekst: [
      'Open het dossier van de cliënt en klik links in het menu op Rapportages. Met de blauwe plusknop maak je een nieuwe rapportage. Kies het soort, schrijf je tekst en klik op Opslaan.',
      'Bij De Wilgenhof koppel je een rapportage aan het doel in het zorgplan. Zo ziet de EVV\'er bij het doel wat er speelt. Hoort de rapportage bij een episode, kies die dan onder Koppel aan episodes.',
    ],
    module: 'rapporteren',
    bron: BRON,
  },
  {
    id: 'meten-wegen',
    hoofdstuk: 'Vastleggen in Nedap ONS',
    kop: 'Wegen en het gewicht vastleggen',
    tekst: [
      'Op De Linde weeg je de cliënten op de eerste woensdag van de maand. Je weegt voor het ontbijt, op de stoelweegschaal, in pyjama. Zo kun je de metingen goed vergelijken.',
      'Een gewicht leg je vast als rapportage van het soort Gewicht. Vergelijk het daarna met de vorige meting. Is een cliënt in een maand meer dan 2 kilo afgevallen, meld het dan bij de EVV\'er.',
    ],
    module: 'klinimetrie',
    bron: BRON,
  },
  {
    id: 'meten-pijn',
    hoofdstuk: 'Vastleggen in Nedap ONS',
    kop: 'Pijn meten',
    tekst: [
      'Pijn meet je met een score van 0 tot 10. De cliënt zegt zelf hoeveel pijn hij heeft. Kan een cliënt dat niet zeggen, bijvoorbeeld door dementie, dan gebruik je de observatielijst voor pijn onder Klinimetrie.',
      'Hoe vaak je pijn meet, hangt af van de cliënt. Bij een cliënt met pijn of pijnmedicatie meet je minstens één keer per dag. Na een val meet je drie dagen lang elke dienst. Staat er in het zorgplan iets anders, dan volg je het zorgplan.',
      'Bij een pijnscore van 4 of hoger, of veel hoger dan eerst, overleg je met de EVV\'er. Pijn na een val is acuut. Dan bel je meteen de arts.',
    ],
    module: 'klinimetrie',
    bron: BRON,
  },
  {
    id: 'zorgplan-lezen',
    hoofdstuk: 'Vastleggen in Nedap ONS',
    kop: 'Het zorgplan lezen',
    tekst: [
      'In het zorgplan staat wat je met een cliënt hebt afgesproken. Lees het voor je begint, zeker na een ziekenhuisopname of als je een tijd weg was. Wat je van vroeger weet, klopt dan misschien niet meer.',
      'Het zorgplan vind je in het dossier onder Plan, op de tab Zorgplan. Daar staan de doelen. Klik je op een doel, dan zie je de acties die erbij horen.',
    ],
    module: 'zorgplan',
    bron: BRON,
  },
  {
    id: 'zorgplan-aanpassen',
    hoofdstuk: 'Vastleggen in Nedap ONS',
    kop: 'Wie het zorgplan aanpast',
    tekst: [
      'Bij De Wilgenhof past de EVV\'er het zorgplan aan, samen met de cliënt. Soms praten de familie of de fysiotherapeut mee.',
      'Past een afspraak niet meer? Houd je dan eerst aan het zorgplan. Rapporteer wat je zag en bespreek het met de EVV\'er.',
    ],
    module: 'zorgplan',
    bron: BRON,
  },
  {
    id: 'evv',
    hoofdstuk: 'Vastleggen in Nedap ONS',
    kop: 'De EVV\'er van een cliënt',
    tekst: [
      'Elke cliënt heeft een EVV\'er. Dat is de eerst verantwoordelijk verzorgende. De EVV\'er houdt het zorgplan bij en is het aanspreekpunt voor de familie.',
      'Wie de EVV\'er van een cliënt is, staat bovenaan het zorgplan. Is de EVV\'er er niet en kan het niet wachten, overleg dan met de dienstdoende verpleegkundige.',
    ],
    module: 'zorgplan',
    bron: BRON,
  },
  {
    id: 'mikzo-domeinen',
    hoofdstuk: 'Vastleggen in Nedap ONS',
    kop: 'De vijf domeinen van Mikzo',
    tekst: [
      'Bij De Wilgenhof werk je met Mikzo. Mikzo deelt het leven van een cliënt op in vijf domeinen: persoonsgerichte zorg, wonen, welzijn, veiligheid en gezondheid.',
      'Wat je ziet en hoort, past bijna altijd bij één domein. Een rode plek op de huid hoort bij gezondheid. Onrust en stemming horen bij welzijn. Lopen zonder rollator hoort bij veiligheid.',
    ],
    module: 'mikzo',
    bron: BRON,
  },
  {
    id: 'mikzo-kompas',
    hoofdstuk: 'Vastleggen in Nedap ONS',
    kop: 'Doorvragen en het Mikzo Kompas',
    tekst: [
      'Zegt een cliënt iets wat ertoe doet, vraag dan door. Wat deed hij vroeger graag? Zijn antwoord is de basis voor een goed doel.',
      'Het Mikzo Kompas staat bij Vragenlijsten. Dat vult de EVV\'er samen met de cliënt in. Jij rapporteert wat de cliënt zegt bij het goede domein.',
    ],
    module: 'mikzo',
    bron: BRON,
  },
  {
    id: 'episode-wanneer',
    hoofdstuk: 'Vastleggen in Nedap ONS',
    kop: 'Wanneer je een episode maakt',
    tekst: [
      'Speelt er iets wat na een paar dagen of weken weer over is? Leg het dan vast als episode, een kortdurende zorgbehoefte. Denk aan een blaasontsteking, griep of een wondje na een val.',
      'In de episode staat wat iedereen moet doen zolang het speelt. Zorg die blijft, hoort in het zorgplan. Wat jij vandaag zag en deed, hoort in de rapportage.',
    ],
    module: 'episodes',
    bron: BRON,
  },
  {
    id: 'episode-afsluiten',
    hoofdstuk: 'Vastleggen in Nedap ONS',
    kop: 'Een episode maken en afsluiten',
    tekst: [
      'Op het Overzicht van het dossier staat de kaart Episodes. Daar maak je een nieuwe episode met een titel, een startdatum en een hoofddoel.',
      'Is het over, sluit de episode dan af en schrijf dat in de rapportage. Komt hetzelfde steeds terug, bespreek dan met de EVV\'er of het in het zorgplan hoort.',
    ],
    module: 'episodes',
    bron: BRON,
  },

  // ---------- Toegang en privacy ----------
  {
    id: 'escaleren-wanneer',
    hoofdstuk: 'Toegang en privacy',
    kop: 'Escaleren: wanneer het mag',
    tekst: [
      'In Nedap ONS zie je alleen de dossiers van de cliënten op jouw afdeling. Wil je in het dossier kijken van een cliënt op een andere afdeling, dan geef je jezelf toegang. Dat heet escaleren.',
      'Je escaleert alleen als je nu zorg geeft aan een cliënt die niet in jouw lijst staat, en je de gegevens daarvoor nodig hebt. Bijvoorbeeld als je invalt of als het acuut is. Nieuwsgierigheid is nooit een reden.',
    ],
    module: 'escaleren',
    bron: BRON,
  },
  {
    id: 'escaleren-hoe',
    hoofdstuk: 'Toegang en privacy',
    kop: 'Zo escaleer je in Nedap ONS',
    tekst: [
      'Open je een dossier dat niet in jouw lijst staat, dan zie je de knop Escaleren. Je schrijft een reden, bijvoorbeeld: invallen op De Eik. Dan gaat het dossier open.',
      'Wie er keek, wanneer en waarom, wordt bewaard. De privacyfunctionaris bekijkt elke week wie er geëscaleerd heeft. Lees alleen wat je nodig hebt en vertel het bij de overdracht.',
    ],
    module: 'escaleren',
    bron: BRON,
  },
  {
    id: 'vertrouwelijk',
    hoofdstuk: 'Toegang en privacy',
    kop: 'Vertrouwelijk omgaan met gegevens van cliënten',
    tekst: [
      'Gegevens van cliënten deel je alleen met collega\'s die ze nodig hebben voor de zorg. Je praat niet over cliënten in de lift, in de kantine of op sociale media.',
      'Loop je weg van de pc, vergrendel dan het scherm. Je werkt nooit op het account van een collega. Gegevens van cliënten stuur je nooit via WhatsApp of je eigen mail.',
    ],
    module: 'escaleren',
    bron: BRON,
  },
  {
    id: 'datalek',
    hoofdstuk: 'Toegang en privacy',
    kop: 'Een datalek melden',
    tekst: [
      'Een datalek is als gegevens van een cliënt bij iemand komen die ze niet mag zien. Bijvoorbeeld een wondfoto in WhatsApp, of een mail aan de verkeerde persoon.',
      'Meld een datalek dezelfde dag bij de privacyfunctionaris, via toestel 2180 of privacy@dewilgenhof.nl. Vertel het ook aan je teamleider. Hoe sneller je meldt, hoe meer de privacyfunctionaris kan doen.',
    ],
    module: null,
    bron: BRON,
  },
  {
    id: 'inloggen',
    hoofdstuk: 'Toegang en privacy',
    kop: 'Inloggen met de Authenticator',
    tekst: [
      'Je logt in op Nedap ONS met je wachtwoord en een code uit de authenticator-app op je telefoon. De code is maar kort geldig. Wie alleen je wachtwoord heeft, komt er dus niet in.',
      'Alles wat je doet, staat op naam van wie is ingelogd. Daarom deel je je wachtwoord en je code met niemand. En je logt nooit in voor een ander.',
    ],
    module: 'authenticator',
    bron: BRON,
  },
  {
    id: 'authenticator-kwijt',
    hoofdstuk: 'Toegang en privacy',
    kop: 'Wachtwoord of Authenticator kwijt',
    tekst: [
      'Ben je je wachtwoord vergeten, of werkt de authenticator-app niet meer? Bel dan de servicedesk op toestel 2140. Die is er op werkdagen van 7.30 tot 17.00 uur. Buiten kantoortijd bel je de storingslijn op toestel 2199.',
      'Heb je een nieuwe telefoon, of ben je je telefoon kwijt? De koppeling gaat niet vanzelf mee. De servicedesk koppelt de app opnieuw. Op de pc verschijnt dan een QR-code die je scant met de app.',
      'Regel een nieuwe koppeling het liefst voor je dienst begint. Werk tot die tijd nooit met de inlog van een collega.',
    ],
    module: 'authenticator',
    bron: BRON,
  },
  {
    id: 'storing',
    hoofdstuk: 'Toegang en privacy',
    kop: 'Als Nedap ONS niet werkt',
    tekst: [
      'Bij een storing kijk je eerst of Nedap ONS bij je collega\'s ook niet werkt. Werkt het bij niemand, bel dan de servicedesk op toestel 2140. Buiten kantoortijd bel je de storingslijn op toestel 2199.',
      'Duurt de storing langer dan een half uur, pak dan de noodmap op de afdeling. Daarin zitten papieren formulieren om te rapporteren en af te tekenen. De overdracht doe je dan mondeling.',
      'Werkt Nedap ONS weer, zet dan alles wat je op papier schreef in het dossier. Schrijf erbij dat je het later invoerde, en hoe laat het gebeurde.',
    ],
    module: null,
    bron: BRON,
  },

  // ---------- Familie ----------
  {
    id: 'familie-afspraak',
    hoofdstuk: 'Familie',
    kop: 'Afspraken met familie vastleggen',
    tekst: [
      'Een afspraak met familie geldt voor alle diensten, ook voor de nacht en het weekend. Leg hem daarom meteen vast in Nedap ONS, niet in je hoofd en niet op een briefje.',
      'Je schrijft de afspraak als rapportage. Je markeert hem als belangrijk en zet een actie voor de EVV\'er. Die zet de afspraak daarna in het zorgplan. Geldt hij al voor de volgende dienst, zet hem dan ook in de overdracht.',
    ],
    module: 'familie',
    bron: BRON,
  },
  {
    id: 'familie-toezeggen',
    hoofdstuk: 'Familie',
    kop: 'Wat je de familie toezegt',
    tekst: [
      'Een vaste afspraak over de dagelijkse zorg mag je vastleggen en doorgeven. Over medicijnen of behandeling zeg je niets toe. Daar beslist de arts over, dus dat overleg je eerst.',
      'Schrijf op wie, wat en wanneer, en met wie je het afsprak. Bijvoorbeeld: zoon helpt elke dinsdag om 17.30 uur bij het avondeten.',
    ],
    module: 'familie',
    bron: BRON,
  },
  {
    id: 'familie-contactpersoon',
    hoofdstuk: 'Familie',
    kop: 'De contactpersoon van een cliënt bellen',
    tekst: [
      'Elke cliënt heeft een eerste contactpersoon. Die staat in het dossier onder Cliëntnetwerk. Bij iets belangrijks bel je eerst deze persoon. Die zorgt dat de rest van de familie het hoort.',
      'Wil de familie bij een val of een ziekenhuisopname meteen gebeld worden, ook \'s nachts? Dan staat dat als afspraak in het dossier. Daar houd je je aan.',
    ],
    module: 'familie',
    bron: BRON,
  },

  // ---------- Laatste levensfase ----------
  {
    id: 'zp10-wat',
    hoofdstuk: 'Laatste levensfase',
    kop: 'Het zorgpad stervensfase (ZP10)',
    tekst: [
      'Besluiten de arts en het team dat een cliënt in de stervensfase is, dan start het zorgpad stervensfase. Iedereen werkt dan met dezelfde lijst. Het doel is dat de cliënt zo comfortabel mogelijk is, en dat de familie zich gesteund voelt.',
      'Het zorgpad staat als vragenlijst in het dossier, onder Vragenlijsten. Je kijkt elke dienst hoe het met de cliënt gaat en vult per onderwerp in wat je zag.',
    ],
    module: 'zp10',
    bron: BRON,
  },
  {
    id: 'zp10-zorg',
    hoofdstuk: 'Laatste levensfase',
    kop: 'Zorg in de laatste dagen',
    tekst: [
      'Zie je in de stervensfase pijn, onrust of benauwdheid, schakel dan de dienstdoende verpleegkundige in. Over medicatie beslist de verpleegkundige samen met de arts.',
      'Gaat slikken slecht, verzorg de mond dan met een nat gaasje of mondspray. Geef geen drinken als slikken moeilijk is.',
      'Vraagt de familie hoe lang het nog duurt? Zeg eerlijk dat niemand dat precies weet. Blijf even, vertel wat je ziet en vraag of ze iemand willen spreken.',
    ],
    module: 'zp10',
    bron: BRON,
  },

  // ---------- Incidenten melden ----------
  {
    id: 'mic-wanneer',
    hoofdstuk: 'Incidenten melden',
    kop: 'Wanneer je een MIC-melding maakt',
    tekst: [
      'Je maakt een MIC-melding als er iets misging bij de zorg, of als het bijna misging. Denk aan een val, een vergeten medicijn of een verkeerd zakje. Twijfel je? Meld het.',
      'Maak de melding in je eigen dienst, nadat je eerst voor de cliënt hebt gezorgd. Een melding is om van te leren. Het gaat niet om de schuld van een collega.',
    ],
    module: 'mic',
    bron: BRON,
  },
  {
    id: 'mic-val',
    hoofdstuk: 'Incidenten melden',
    kop: 'Na een val',
    tekst: [
      'Is een cliënt gevallen, zorg dan eerst voor de cliënt. Kijk of hij pijn heeft of iets niet kan bewegen. Heeft hij veel pijn of kan hij een been niet belasten, bel dan meteen de arts.',
      'Maak daarna een MIC-melding van de val. Zet de val ook in de rapportage en in de overdracht. Heeft de familie gevraagd om gebeld te worden, bel dan de contactpersoon.',
    ],
    module: 'mic',
    bron: BRON,
  },
  {
    id: 'mic-medicatie',
    hoofdstuk: 'Incidenten melden',
    kop: 'Een fout met medicatie',
    tekst: [
      'Vind je een zakje medicatie dat vergeten is, of dat niet is afgetekend? Los het niet alleen op. Overleg met de dienstdoende verpleegkundige. Zij beslist wat er nu moet gebeuren, zo nodig samen met de apotheek of de arts.',
      'Leg vast wat je uiteindelijk gaf. Maak daarna een MIC-melding.',
    ],
    module: 'mic',
    bron: BRON,
  },
  {
    id: 'mic-hoe',
    hoofdstuk: 'Incidenten melden',
    kop: 'Zo maak je een MIC-melding',
    tekst: [
      'Je maakt de melding als vragenlijst in het dossier van de cliënt. Onder Vragenlijsten maak je een nieuwe aan en kies je MIC-melding. Pas als je hem doorzet, komt hij bij de teamleider.',
      'Schrijf op wat er gebeurde, hoe laat, en wat je daarna deed. Noem geen namen van collega\'s en geef geen oordeel.',
      'De teamleider leest je melding. Het team bespreekt hem en jij hoort terug wat ermee gebeurd is. De MIC-commissie kijkt elk kwartaal naar alle meldingen samen.',
    ],
    module: 'mic',
    bron: BRON,
  },

  // ---------- Apps ----------
  {
    id: 'wondfoto',
    hoofdstuk: 'Apps',
    kop: 'Een wondfoto maken',
    tekst: [
      'Een wondfoto maak je alleen in de wondzorgapp. Dan gaat de foto naar het dossier en blijft hij niet op je telefoon. Gebruik nooit de gewone camera, en stuur nooit een foto via WhatsApp of mail.',
      'Maak de foto elke keer op dezelfde manier. Leg een meetlatje naast de wond, zorg voor goed licht zonder flits, en zet alleen de wond in beeld.',
    ],
    module: 'wondzorg',
    bron: BRON,
  },
  {
    id: 'wond-beschrijven',
    hoofdstuk: 'Apps',
    kop: 'Een wond of decubitus beschrijven',
    tekst: [
      'Bij de foto beschrijf je de grootte in centimeters, het wondbed, het wondvocht, de wondrand en de pijn. De app vraagt dat per onderdeel.',
      'Zie je een rode plek die niet wegtrekt, of een nieuwe wond? Leg de plek vrij, rapporteer het en zet het in de overdracht. Vraag de EVV\'er of de wondverpleegkundige moet komen kijken.',
      'De wondverpleegkundige vergelijkt de foto\'s en past het wondzorgplan aan. Ze komt op dinsdag en donderdag langs.',
    ],
    module: 'wondzorg',
    bron: BRON,
  },
  {
    id: 'onsdossier-app',
    hoofdstuk: 'Apps',
    kop: 'Ons Dossier op je telefoon',
    tekst: [
      'Ons Dossier is de app van Nedap ONS voor je telefoon. Bij De Wilgenhof gebruik je hem aan het bed. Je tekent af wat je deed en je rapporteert wat je zag, meteen na de zorg.',
      'Teken alleen af wat je echt deed. Zie je iets wat afwijkt, maak dan in de app een rapportage. Kort en concreet: wat zag je, wanneer, en wat deed je.',
    ],
    module: 'onsdossier',
    bron: BRON,
  },
  {
    id: 'onsdossier-veilig',
    hoofdstuk: 'Apps',
    kop: 'Veilig werken met je telefoon',
    tekst: [
      'Kijk altijd eerst of je in het goede dossier zit. Controleer de naam en de geboortedatum.',
      'Vergrendel je telefoon als je de kamer uitloopt. Werk alleen in de app, niet in WhatsApp of in je notities. Ben je je telefoon kwijt, bel dan meteen de servicedesk op toestel 2140.',
    ],
    module: 'onsdossier',
    bron: BRON,
  },
];

// Wie doet wat. In de echte versie komt deze lijst uit SharePoint.
export const WIE_DOET_WAT = [
  {
    id: 'keyuser-linde',
    rol: 'Key-user De Linde',
    naam: 'Fatima el Amrani',
    afdeling: 'De Linde',
    wanneer: 'Maandag, woensdag en vrijdag',
    bereik: 'Op de afdeling, of toestel 2311',
    waarvoor: ['key-user', 'Nedap ONS', 'Ons Dossier', 'vraag over het werken in Nedap ONS', 'leeromgeving', 'rapporteren', 'hoe werkt het'],
    bron: SHAREPOINT,
  },
  {
    id: 'keyuser-eik',
    rol: 'Key-user De Eik',
    naam: 'Wendy Schouten',
    afdeling: 'De Eik',
    wanneer: 'Dinsdag en donderdag',
    bereik: 'Op de afdeling, of toestel 2321',
    waarvoor: ['key-user', 'Nedap ONS', 'Ons Dossier', 'vraag over het werken in Nedap ONS', 'leeromgeving', 'rapporteren', 'hoe werkt het'],
    bron: SHAREPOINT,
  },
  {
    id: 'keyuser-beuk',
    rol: 'Key-user De Beuk',
    naam: 'Esther Wouters',
    afdeling: 'De Beuk',
    wanneer: 'Maandag en donderdag',
    bereik: 'Op de afdeling, of toestel 2331',
    waarvoor: ['key-user', 'Nedap ONS', 'Ons Dossier', 'vraag over het werken in Nedap ONS', 'leeromgeving', 'rapporteren', 'hoe werkt het'],
    bron: SHAREPOINT,
  },
  {
    id: 'evv',
    rol: 'EVV\'er',
    naam: 'De EVV\'er van de cliënt',
    afdeling: 'Alle afdelingen',
    wanneer: 'Volgens het rooster',
    bereik: 'De naam staat bovenaan het zorgplan',
    waarvoor: ['zorgplan', 'doel', 'afspraak met familie', 'gewicht', 'afgevallen', 'pijnscore', 'episode', 'Mikzo', 'eerst verantwoordelijk verzorgende'],
    bron: SHAREPOINT,
  },
  {
    id: 'teamleider',
    rol: 'Teamleider wonen',
    naam: 'Marieke de Boer',
    afdeling: 'De Linde, De Eik en De Beuk',
    wanneer: 'Maandag tot en met donderdag',
    bereik: 'Toestel 2300, m.deboer@dewilgenhof.nl',
    waarvoor: ['rooster', 'ziek melden', 'verlof', 'contract', 'MIC-melding lezen', 'terugkoppeling melding', 'datalek', 'conflict'],
    bron: SHAREPOINT,
  },
  {
    id: 'servicedesk',
    rol: 'Servicedesk en applicatiebeheer',
    naam: 'Servicedesk ICT',
    afdeling: 'Hele organisatie',
    wanneer: 'Werkdagen van 7.30 tot 17.00 uur. Daarna de storingslijn op toestel 2199',
    bereik: 'Toestel 2140, servicedesk@dewilgenhof.nl',
    waarvoor: ['wachtwoord', 'authenticator', 'inloggen', 'nieuwe telefoon', 'telefoon kwijt', 'storing', 'Nedap ONS werkt niet', 'account', 'applicatiebeheer'],
    bron: SHAREPOINT,
  },
  {
    id: 'verpleegkundige',
    rol: 'Dienstdoende verpleegkundige',
    naam: 'Wie dienst heeft, staat op het rooster',
    afdeling: 'Alle afdelingen',
    wanneer: 'Dag en nacht',
    bereik: 'Toestel 2120',
    waarvoor: ['medicatie', 'zakje', 'medicatiefout', 'pijn', 'onrust', 'benauwd', 'stervensfase', 'EVV\'er niet aanwezig'],
    bron: SHAREPOINT,
  },
  {
    id: 'arts',
    rol: 'Specialist ouderengeneeskunde',
    naam: 'Via de dienstdoende arts',
    afdeling: 'Alle afdelingen',
    wanneer: 'Overdag de vaste arts, buiten kantoortijd de dienstdoende arts',
    bereik: 'Toestel 2100, de receptie verbindt je door',
    waarvoor: ['arts', 'dokter', 'acuut', 'val', 'pijn na een val', 'medicijnen', 'behandeling', 'stervensfase'],
    bron: SHAREPOINT,
  },
  {
    id: 'wondverpleegkundige',
    rol: 'Wondverpleegkundige',
    naam: 'Ingrid Post',
    afdeling: 'Alle afdelingen',
    wanneer: 'Dinsdag en donderdag',
    bereik: 'Toestel 2160, of een vraag in de wondzorgapp',
    waarvoor: ['wond', 'decubitus', 'wondfoto', 'wondzorgplan', 'verband', 'rode plek', 'huid'],
    bron: SHAREPOINT,
  },
  {
    id: 'mic-commissie',
    rol: 'MIC-commissie',
    naam: 'MIC-commissie De Wilgenhof',
    afdeling: 'Hele organisatie',
    wanneer: 'Bespreekt elk kwartaal alle meldingen samen',
    bereik: 'mic@dewilgenhof.nl',
    waarvoor: ['MIC', 'melding', 'incident', 'val', 'medicatiefout', 'verbeteren'],
    bron: SHAREPOINT,
  },
  {
    id: 'opleider',
    rol: 'Opleider',
    naam: 'Karin Meijer',
    afdeling: 'Hele organisatie',
    wanneer: 'Dinsdag, woensdag en donderdag',
    bereik: 'Toestel 2250, opleiding@dewilgenhof.nl',
    waarvoor: ['leeromgeving', 'modules', 'inwerken', 'inwerkchecklist', 'certificaat', 'scholing'],
    bron: SHAREPOINT,
  },
  {
    id: 'privacy',
    rol: 'Privacyfunctionaris',
    naam: 'Joris Hermans',
    afdeling: 'Hele organisatie',
    wanneer: 'Werkdagen',
    bereik: 'Toestel 2180, privacy@dewilgenhof.nl',
    waarvoor: ['privacy', 'datalek melden', 'datalek', 'escaleren', 'vertrouwelijk', 'WhatsApp', 'foto'],
    bron: SHAREPOINT,
  },
];
