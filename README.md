# Leren bij De Wilgenhof, de demo

Klikbare demo van de leeromgeving van Ons Op Maat. Bedoeld voor gesprekken met zorgorganisaties. Alle namen, cliënten en cijfers zijn verzonnen. De Wilgenhof bestaat niet.

## Wat je kunt laten zien

- **Medewerker** (Sanne Visser, verzorgende IG): inloggen, welkom, een rondleiding door het scherm, het overzicht met 15 modules in 5 delen, en de uitgewerkte casus **Rapporteren** met varianten en een toets.
- **Opleider van de klant**: dashboard met nieuwe medewerkers en vinkjes per deel, en per profiel modules aan- en uitzetten. Wat Sanne in de demo doet, zie je hier meteen terug.
- **Beheercentrum** (alleen Ons Op Maat): modulebibliotheek, klanten, en de huisstijl per klant met acht kleuren, een logo en een leesbaarheidscheck.

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

Bedoeld voor Vercel, net als de website. `vercel.json` zet `noindex` op alles. Publiceren gebeurt alleen met de ja van Nick of Erwin.

## Opbouw

| Bestand | Wat |
|---|---|
| `index.html` | de schil |
| `styles.css` | alle vormgeving, kleuren via CSS-variabelen |
| `js/app.js` | router, schermen en acties |
| `js/data.js` | profielen, modules, toewijzing en verzonnen medewerkers |
| `js/casus.js` | de casus Rapporteren |
| `js/theme.js` | huisstijl: kleuren aanvullen en contrast bewaken |
| `js/tour.js` | de rondleiding |
| `js/state.js` | de stand in de browser |
