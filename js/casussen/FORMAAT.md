# Formaat van een casus

Eén bestand per module: `js/casussen/<module-id>.js`, met `export default { ... }`. Het voorbeeld is `rapporteren.js`. Kijk daar eerst.

```js
export default {
  id: 'klinimetrie',                 // gelijk aan de bestandsnaam en aan het id in js/data.js
  stapNamen: ['Situatie', 'Meten', 'Signaleren'], // 'Situatie' plus één korte naam per stap
  les: [ /* uitleg, zie hieronder */ ],
  doorklik: { /* samen door ONS, zie hieronder */ },
  startKnop: 'Ik ga meten',          // tekst op de knop onder de situatie
  intro: {
    tijd: 'Woensdag 8.15 uur, vroege dienst op De Linde',
    kop: 'Meneer De Vries eet minder',
    tekst: ['alinea', 'alinea'],     // 1 tot 4 alinea's
  },
  stappen: [ /* 2 tot 4 stappen, zie hieronder */ ],
  toets: [ /* precies 5 vragen als de module een toets heeft, anders weglaten */ ],
  samenvatting: ['regel', 'regel'],  // 2 tot 4 regels: wat je meeneemt naar je volgende dienst
};
```

## Opbouw: eerst uitleg, dan samen klikken, dan de vragen

Elke module begint met uitleg (`les`), daarna klikt de medewerker samen met ons door Nedap ONS of door de app (`doorklik`). Pas daarna komt de situatie (`intro`) met de vragen (`stappen`) en de toets. Besluit van Nick, 6 oktober 2026: niet meteen de vragen in.

```js
  les: [ // 2 tot 4 pagina's
    {
      kop: 'Waarom je rapporteert',
      beeld: 'rapport',               // naam van een tekening in js/illustraties.js
      tekst: ['alinea', 'alinea'],    // 1 tot 3 alinea's
      punten: ['punt', 'punt'],       // mag weg, 1 tot 4 korte punten in een groen kader
    },
  ],
  doorklik: {
    plek: 'ons',                      // 'ons' (standaard) of 'telefoon' voor een app
    client: 'A Bakker',               // bij 'ons': de cliënt zoals ONS hem toont
    app: 'Wondzorgapp',               // bij 'telefoon': naam van de app
    klaar: 'Zo maak je een rapportage: ...', // één zin die de route samenvat
    stappen: [ // 3 tot 6
      {
        zeg: 'Wat de medewerker ziet en waarom.',
        doe: 'Klik in het menu op Rapportages', // de opdracht, wordt de kop
        menu: 'Overzicht',            // bij 'ons': het actieve menu-item op dit scherm
        doel: { menu: 'Rapportages' }, // waar je op klikt, zie hieronder
        pagina: {                      // wat er in het scherm staat, alles mag weg
          titel: 'Rapportages',
          tabs: ['Actueel', 'Archief'],
          knoppen: ['Acties bekijken', '+'],
          kaarten: [{ kop: 'Waarschuwingen', regels: ['Geen waarschuwingen'] }],
          velden: [{ label: 'Tekst', waarde: '...' }],
          venster: { titel: 'Rapportagetype toevoegen', opties: ['Rapportage', 'SOEP'] },
          balk: 'Wondfoto',            // bij 'telefoon': titel boven in de app
        },
      },
    ],
  },
```

Het `doel` is precies één van `menu`, `knop`, `tab`, `regel` of `optie`, met de tekst zoals die op het scherm staat. Dat onderdeel licht op en is het enige waar je op kunt klikken. Bij de plusknop schrijf je `knop: '+'` met `label: 'Nieuwe rapportage'` voor de schermlezer. `menu` bestaat alleen bij `ons`. De menunamen zijn die van Nedap ONS: Overzicht, Vragenlijsten, Plan, Rapportages, Agenda, Klinimetrie, Snelkoppelingen, Algemeen, Cliëntnetwerk, Financieel, Documenten.

De tekeningen voor `beeld`: rapport, overdracht, zoeken, meten, zorgplan, vragenlijst, episode, escaleren, familie, zp10, mic, authenticator, wond, dossier-app, dienst, ons.

## Soorten stappen

**keuze**: de medewerker kiest, en elke optie heeft een eigen afloop.

```js
{
  type: 'keuze',
  vraag: 'Wat doe je?',
  opties: [ // 2 tot 4
    { tekst: 'optie', goed: true, variant: { kop: 'Wat er daarna gebeurt', tekst: '...' }, uitleg: 'waarom' },
  ],
}
```

Een foute keuze heeft een eigen, geloofwaardige afloop. Daarna kiest de medewerker opnieuw. Alleen een goede keuze gaat verder.

**koppel**: waarnemingen of onderdelen koppelen aan een categorie, in een nagebouwd scherm.

```js
{
  type: 'koppel',
  vraag: '...',
  uitleg: '...',                     // mag weg
  scherm: 'Klinimetrie · meneer De Vries', // titel van het nagebouwde scherm
  kiesTekst: 'Kies een actie',       // lege keuze in de lijst
  regels: [{ waarneming: '...', goed: 'id-van-optie' }], // 2 tot 5
  opties: [{ id: 'id', naam: 'Naam' }],                  // 2 tot 6
  goedTekst: '...',
  foutTekst: '...',                  // legt uit wat waar hoort
  ons: { scherm: 'nieuwe-episode', naam: 'G Kok', titel: 'Blaasontsteking' }, // mag weg, zie hieronder
}
```

Met `ons` staat de stap in een scherm dat één op één is nagebouwd naar Nedap ONS. Kies alleen een scherm waarvan een schermafdruk uit de testomgeving bestaat. Nu zijn dat `nieuwe-episode`, `zorgplan` en `nieuwe-rapportage`. Bij `nieuwe-rapportage` mag `tekst` erbij: wat er in het tekstvak staat. `naam` is de cliënt zoals ONS hem toont: voorletter en achternaam. Zonder `ons` krijgt de stap het neutrale oefenscherm.

**volgorde**: stappen in de goede volgorde zetten met pijltjes.

```js
{
  type: 'volgorde',
  vraag: 'In welke volgorde doe je dit?',
  uitleg: '...',                     // mag weg
  items: ['eerste', 'tweede', 'derde'], // 3 tot 6, in de GOEDE volgorde
  start: [2, 0, 1],                  // hoe ze eerst op het scherm staan, een herschikking
  goedTekst: '...',
  foutTekst: '...',
}
```

## Toets

```js
{ vraag: '...', opties: ['a', 'b', 'c'], goed: 1 } // precies 3 opties, goed is 0, 1 of 2
```

Wissel de plek van het goede antwoord af.

## Controle

`npm test` controleert het formaat en de schrijfregels van elk bestand in deze map.
