# Agentinstructies, leeromgeving

Dit is de klikbare demo van de leeromgeving van Ons Op Maat. De kennis staat in de kennisbank: `onsopmaat/onsopmaat-kennisbank`. Lees daar eerst `00-canon/hot.md` en `00-canon/besluiten-log.md` (6 oktober 2026) voor je iets aan het product verandert.

## Harde grenzen

- **Uitsluitend testdata.** Geen echte cliënten, medewerkers, dossiers of exports uit een ECD. Alle namen zijn verzonnen.
- **Geen materiaal van een opdrachtgever van Nick** zonder schriftelijke toestemming.
- **Publiceren en deployen** gebeurt alleen met de ja van Nick of Erwin.
- **Geen prijzen** uit `00-canon/prijzen.md` in de demo.
- **Nedap-uiterlijk alleen in de oefenschermen.** Die bouwen we één op één na zoals Nedap ONS eruitziet, met logo en kleuren (besluit Nick, 6 oktober 2026). De rest van de leeromgeving blijft in de stijl van Ons Op Maat of de klant. Schrijf "Nedap ONS" voluit.
- Geen harde garanties over effect of besparing in de teksten.

## Schrijfregels

Nederlands, B1, korte actieve zinnen, "je" en "jouw". Geen em-dashes en geen puntkomma's. Volledige regels: `00-canon/merk-en-stem.md` in de kennisbank.

## Werkwijze

- Alles gaat naar `main`. Commit en push zodra iets af is, naar beide repo's: `onsopmaat/leeromgeving` en de kopie `nickwildeboer/leeromgeving-demo`. Die kopie bestaat omdat Vercel op het gratis account geen repo van een organisatie kan importeren. Houd ze gelijk.
- Raakt een wijziging hier het product of een besluit, werk dan de kennisbank in dezelfde beurt bij en zet een regel in `00-canon/log.md`.
- Draai `npm test` voor je pusht. Kijk na een wijziging in de vormgeving op 390 px breed of de pagina niet horizontaal scrolt.
