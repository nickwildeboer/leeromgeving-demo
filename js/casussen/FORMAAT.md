# Formaat van een casus

Eén bestand per module: `js/casussen/<module-id>.js`, met `export default { ... }`. Het voorbeeld is `rapporteren.js`. Kijk daar eerst.

```js
export default {
  id: 'klinimetrie',                 // gelijk aan de bestandsnaam en aan het id in js/data.js
  stapNamen: ['Situatie', 'Meten', 'Signaleren'], // 'Situatie' plus één korte naam per stap
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

Met `ons` staat de stap in een scherm dat één op één is nagebouwd naar Nedap ONS. Kies alleen een scherm waarvan een schermafdruk uit de testomgeving bestaat. Nu zijn dat `nieuwe-episode` en `zorgplan`. `naam` is de cliënt zoals ONS hem toont: voorletter en achternaam. Zonder `ons` krijgt de stap het neutrale oefenscherm.

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
