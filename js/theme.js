// Huisstijl per klant: vier verplichte kleuren, vier optionele, en een contrastcontrole.
// Een optionele kleur die leeg blijft, rekenen we uit de vier verplichte.

export const STANDAARD = {
  paneel: '#14493B',
  merk: '#1F6B5C',
  actie: '#F7C948',
  zacht: '#E6EFE8',
  grond: '#F5F2EB',
  tekst: '#12211C',
  vlak2: '#F0E8D6',
  signaal: '#C8622A',
};

export const VERPLICHT = ['paneel', 'merk', 'actie', 'zacht'];
export const OPTIONEEL = ['grond', 'tekst', 'vlak2', 'signaal'];

export const LABELS = {
  paneel: { naam: 'Paneelkleur', waar: 'het grote vlak met de kop en de bovenbalk' },
  merk: { naam: 'Merkkleur', waar: 'links, vinkjes en de voortgangsbalk' },
  actie: { naam: 'Actiekleur', waar: 'de ene hoofdknop per scherm' },
  zacht: { naam: 'Zacht vlak', waar: 'achtergrond van secties en kaarten' },
  grond: { naam: 'Grondkleur', waar: 'de achtergrond van de hele pagina' },
  tekst: { naam: 'Tekstkleur', waar: 'alle lopende tekst' },
  vlak2: { naam: 'Tweede vlak', waar: 'afwisseling tussen secties en het tipvak' },
  signaal: { naam: 'Signaalkleur', waar: 'let op, en feedback bij een fout antwoord' },
};

const WIT = '#FFFFFF';
const NORM = 4.5;

export function isHex(waarde) {
  return typeof waarde === 'string' && /^#[0-9a-fA-F]{6}$/.test(waarde.trim());
}

export function naarRgb(hex) {
  const h = hex.replace('#', '');
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
}

export function naarHex([r, g, b]) {
  return '#' + [r, g, b].map((v) => Math.round(Math.min(255, Math.max(0, v))).toString(16).padStart(2, '0')).join('').toUpperCase();
}

export function meng(a, b, t) {
  const x = naarRgb(a);
  const y = naarRgb(b);
  return naarHex(x.map((v, i) => v + (y[i] - v) * t));
}

export function luminantie(hex) {
  const [r, g, b] = naarRgb(hex).map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrast(a, b) {
  const la = luminantie(a);
  const lb = luminantie(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

// Maakt een kleur stap voor stap donkerder (of lichter) tot hij de norm haalt op de achtergrond.
export function haalNorm(kleur, achtergrond, norm = NORM) {
  if (contrast(kleur, achtergrond) >= norm) return kleur;
  const richting = luminantie(achtergrond) > 0.4 ? '#000000' : WIT;
  for (let t = 0.05; t <= 1; t += 0.05) {
    const kandidaat = meng(kleur, richting, t);
    if (contrast(kandidaat, achtergrond) >= norm) return kandidaat;
  }
  return richting;
}

// Kiest witte of donkere tekst, wat het beste leest op deze kleur.
export function tekstOp(achtergrond, donker) {
  return contrast(WIT, achtergrond) >= contrast(donker, achtergrond) ? WIT : donker;
}

export function vulAan(invoer = {}) {
  const k = {};
  for (const sleutel of VERPLICHT) k[sleutel] = isHex(invoer[sleutel]) ? invoer[sleutel].toUpperCase() : STANDAARD[sleutel];
  // Zijn de vaste kleuren die van Ons Op Maat, dan zijn de extra kleuren dat ook.
  const eigen = VERPLICHT.some((s) => k[s] !== STANDAARD[s]);
  const uit = (s, reken) => (isHex(invoer[s]) ? invoer[s].toUpperCase() : eigen ? reken() : STANDAARD[s]);
  k.grond = uit('grond', () => meng(k.zacht, WIT, 0.45));
  k.tekst = uit('tekst', () => meng(k.paneel, '#000000', 0.62));
  k.vlak2 = uit('vlak2', () => meng(k.actie, WIT, 0.8));
  k.signaal = uit('signaal', () => STANDAARD.signaal);
  return k;
}

// Alles wat de pagina nodig heeft: de kleuren, de afgeleide tekstkleuren en de waarschuwingen.
export function bereken(invoer = {}) {
  const k = vulAan(invoer);
  const tekst = haalNorm(k.tekst, k.grond);
  const afgeleid = {
    ...k,
    tekst,
    tekstZacht: haalNorm(meng(tekst, k.grond, 0.3), k.grond),
    opPaneel: tekstOp(k.paneel, tekst),
    opActie: tekstOp(k.actie, tekst),
    opMerk: tekstOp(k.merk, tekst),
    merkTekst: haalNorm(k.merk, k.grond),
    signaalTekst: haalNorm(k.signaal, WIT),
    paneelDiep: meng(k.paneel, '#000000', 0.28),
    lijn: meng(k.grond, tekst, 0.14),
  };
  const waarschuwingen = [];
  const check = (naam, voor, achter, wat) => {
    const c = contrast(voor, achter);
    if (c < NORM) waarschuwingen.push({ kleur: naam, contrast: Math.round(c * 10) / 10, wat });
  };
  check('paneel', afgeleid.opPaneel, k.paneel, 'Tekst op de paneelkleur is slecht leesbaar.');
  check('actie', afgeleid.opActie, k.actie, 'De tekst op de hoofdknop is slecht leesbaar.');
  check('merk', afgeleid.opMerk, k.merk, 'Tekst op de merkkleur is slecht leesbaar.');
  if (contrast(k.merk, k.grond) < 3) {
    waarschuwingen.push({ kleur: 'merk', contrast: Math.round(contrast(k.merk, k.grond) * 10) / 10, wat: 'De merkkleur valt weg op de grond. Voor links gebruiken we automatisch een donkerder tint.' });
  }
  if (contrast(k.tekst, k.grond) < NORM) {
    waarschuwingen.push({ kleur: 'tekst', contrast: Math.round(contrast(k.tekst, k.grond) * 10) / 10, wat: 'De tekstkleur is te licht op de grond. We gebruiken automatisch een donkerder tint.' });
  }
  return { kleuren: afgeleid, waarschuwingen };
}

export function cssVariabelen(kleuren) {
  return {
    '--paneel': kleuren.paneel,
    '--paneel-diep': kleuren.paneelDiep,
    '--merk': kleuren.merk,
    '--merk-tekst': kleuren.merkTekst,
    '--actie': kleuren.actie,
    '--zacht': kleuren.zacht,
    '--grond': kleuren.grond,
    '--tekst': kleuren.tekst,
    '--tekst-zacht': kleuren.tekstZacht,
    '--vlak2': kleuren.vlak2,
    '--signaal': kleuren.signaal,
    '--signaal-tekst': kleuren.signaalTekst,
    '--op-paneel': kleuren.opPaneel,
    '--op-actie': kleuren.opActie,
    '--op-merk': kleuren.opMerk,
    '--lijn': kleuren.lijn,
  };
}
