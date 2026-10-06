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

## Nog niet gedaan, wel geadviseerd

- Kleurrollen opnieuw indelen (geel als knopkleur eruit). Wacht op de keuze van Nick, zie het huisstijlhandboek.
- In het dashboard de tegel "lopen achter" klikbaar maken als filter.
- Een vaste z-index-schaal en bewegingstokens (`--t-snel`, `--t-normaal`) in `:root`.
