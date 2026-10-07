# UI en UX van de leeromgeving

Afspraken voor de gedeelde stijl en componenten. Getoetst aan de checklist van de skill UI/UX Pro Max (nextlevelbuilder/ui-ux-pro-max-skill) op 6 oktober 2026. De oefenschermen van Nedap ONS (`.ons`) vallen hier buiten: die volgen ONS.

## Vaste regels

- **Eén hoofdknop per scherm.** Dat is `btn--actie`. De rest is `btn--rand` of `btn--stil`.
- **Raakvlak minstens 44 bij 44 px.** Knoppen, chips, menulinks en `linkknop` hebben `min-height:44px`.
- **Focusring haalt 3:1.** Gebruik `var(--focus)`, nooit een vaste kleur. Op lichte vlakken is dat de merktekstkleur, op het paneel de actiekleur.
- **Hover alleen waar een muis is.** Optillen bij hover staat in `@media (hover:hover)`. Indrukken (`:active`) geeft altijd een kleine krimp, zodat je op een telefoon voelt dat je tikte.
- **Kleur nooit alleen.** Goed en fout hebben altijd ook een icoon en een woord.
- **Beweging met reden** en altijd uit bij `prefers-reduced-motion`.
- **Geen horizontale scroll op 390 px.** Tabellen met veel kolommen worden op een telefoon kaarten (`tabel--kaarten` met `data-label` per cel).

## Casusflow

- De kop krimpt zodra de casus loopt (`module-kop--compact`). Zo staat de vraag meteen in beeld.
- Bij elke nieuwe stap gaat de focus naar de vraag. Op een telefoon schuift de pagina naar de vraag.
- Na een keuze gaat de focus naar de afloop. Na "Probeer een ander antwoord" gaat hij terug naar de eerste keuze.
- In de toets staat naast "Lever in" hoeveel vragen nog open staan. De knop blijft uit tot alles is ingevuld.

## Kleuren en tokens

- De standaard volgt de merkstrategie van 6 oktober 2026: paneel `#1B4A3C`, merk `#1E6E58`, terracotta `#B9471F` als enige knopkleur, salie `#E3EFE6`, grond `#FAF6EE`, tekst `#1B1A17`, rood `#A4261B` voor let op. Nick heeft die richting nog niet formeel gekozen. Terugdraaien kan in `js/theme.js` en `:root`.
- `--actie-op-paneel` is de actiekleur als accent op het donkere paneel. Is de actiekleur daar te donker, dan rekent `theme.js` een lichtere tint uit die 4,5:1 haalt. Gebruik hem voor bovenregels, tellers, de voortgangsbalk en de focusring op het paneel.
- `--actie-diep` is de hoverkleur van de hoofdknop.
- Beweging: `--t-snel` voor feedback, `--t-normaal` voor wisselingen, `--t-rustig` voor een groot moment.
- Lagen: `--z-balk`, `--z-rondleiding`, `--z-melding`, `--z-moment`, `--z-naar-inhoud`. Geen losse getallen meer.

## Dashboard

- De tegel "lopen achter" is een knop. Hij filtert de tabel op wie achterloopt en zet de focus op de tabel. Nog een keer klikken laat iedereen weer zien.

## Telefoon

- De leeromgeving is gemaakt voor laptop en tablet. Op een scherm smaller dan 768 px krijg je bij het eerste bezoek één keer een melding dat het daar het best werkt. Wegklikken onthoudt de browser apart van de demo (`leeromgeving-schermtip-gezien`), dus "Demo opnieuw beginnen" laat hem niet terugkomen.
- Alles moet op 390 px wel werken. De bovenbalk scrolt daar mee in plaats van vast te staan, zodat de vraag niet onder de balk verdwijnt.
- De Profielen-tabel en de bibliotheek in het beheercentrum worden op een telefoon kaarten, net als het dashboard.
- De nagebouwde schermen van Nedap ONS hoeven op een telefoon niet perfect. Ze mogen alleen niet buiten beeld lopen.
