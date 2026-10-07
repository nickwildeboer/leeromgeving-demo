# Leren bij De Wilgenhof, de demo

Klikbare demo van de leeromgeving van Ons Op Maat. Bedoeld voor gesprekken met zorgorganisaties. Alle namen, cliënten en cijfers zijn verzonnen. De Wilgenhof bestaat niet.

## Wat je kunt laten zien

- **Medewerker** (Sanne Visser, verzorgende IG): inloggen, welkom, een rondleiding door het scherm, het overzicht met 15 modules in 5 delen, en alle 14 modules als casus met varianten. Modules met een toets eindigen met 5 vragen, de andere met een korte samenvatting.
  - Het klikdeel in ONS heeft drie standen: **kijk** (het gaat vanzelf), **doe mee** (met aanwijzing) en **doe zelf** (zonder hulp, met tijd, mis geklikt en hulp gevraagd). De eerste keer zelf is de nulmeting, de laatste keer de nameting.
  - Per module een knop **Zo werkt ONS / Zo doen wij het bij De Wilgenhof**, met de werkafspraak uit het handboek.
  - **Oefenen in ONS** (`#/oefenen`): vrij rondklikken in de kernschermen van Nedap ONS, met vier opdrachten.
  - **Vraag het** (`#/vraag`): zoeken in het handboek en in "wie doet wat", met de bron bij elk antwoord.
- **Opleider van de klant**: dashboard met nieuwe medewerkers en vinkjes per deel, en per profiel modules aan- en uitzetten. Wat Sanne in de demo doet, zie je hier meteen terug.
- **Beheercentrum** (alleen Ons Op Maat): modulebibliotheek, de schermkaart met releasecheck (`#/beheer/schermen`), de bronnen voor Vraag het (`#/beheer/bronnen`), klanten, en de huisstijl per klant met acht kleuren, een logo en een leesbaarheidscheck.

De demo onthoudt de stand in de browser. "Demo opnieuw beginnen" onderaan zet alles terug, de huisstijl blijft staan.

## Lokaal draaien

Geen build-stap. Elke statische server werkt:

```
python3 -m http.server 8090
```

Open dan http://localhost:8090.

## Testen

```
npm test
```

Test de kleurberekening (contrast, afgeleide kleuren) en de demodata.

## Hosting

Bedoeld voor Vercel, net als de website. Vercel importeert de kopie `nickwildeboer/leeromgeving-demo`, omdat het gratis account geen repo van een organisatie aankan. Push daarom naar beide repo's. `vercel.json` zet `noindex` op alles. Publiceren gebeurt alleen met de ja van Nick of Erwin.

## Opbouw

| Bestand | Wat |
|---|---|
| `index.html` | de schil |
| `styles.css` | alle vormgeving, kleuren via CSS-variabelen |
| `js/app.js` | router, schermen en acties |
| `js/data.js` | profielen, modules, toewijzing en verzonnen medewerkers |
| `js/casussen/` | één casus per module, formaat in `FORMAAT.md` |
| `docs/zorginhoud-check.md` | punten die Erwin nog nakijkt |
| `js/theme.js` | huisstijl: kleuren aanvullen en contrast bewaken |
| `js/tour.js` | de rondleiding |
| `js/state.js` | de stand in de browser |
| `js/doorklik.js` | het klikdeel in ONS met kijk, doe mee en doe zelf |
| `js/schermkaart.js` | welk ONS-scherm in welke module zit, voor de releasecheck |
| `js/oefenen.js`, `oefenen.css` | de vrije oefenomgeving |
| `js/handboek.js` | het handboek en wie doet wat van De Wilgenhof |
| `js/zoeken.js` | zoeken en antwoorden in de browser, zonder server |
| `js/vraag.js`, `vraag.css` | de schermen Vraag het en Bronnen |
