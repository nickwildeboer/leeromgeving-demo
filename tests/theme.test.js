import { test } from 'node:test';
import assert from 'node:assert/strict';
import { bereken, contrast, haalNorm, STANDAARD, vulAan } from '../js/theme.js';
import { HUISSTIJL_VOORBEELDEN } from '../js/data.js';

test('de standaardhuisstijl is die van Ons Op Maat en haalt de norm', () => {
  const { kleuren, waarschuwingen } = bereken({});
  assert.equal(kleuren.paneel, STANDAARD.paneel);
  assert.equal(kleuren.actie, STANDAARD.actie);
  assert.deepEqual(waarschuwingen, []);
});

test('optionele kleuren worden uitgerekend als ze leeg zijn', () => {
  const k = vulAan({ paneel: '#3D2A55', merk: '#6A4C93', actie: '#F2B33D', zacht: '#EFE9F5' });
  for (const sleutel of ['grond', 'tekst', 'vlak2', 'signaal']) assert.match(k[sleutel], /^#[0-9A-F]{6}$/);
});

test('elk voorbeeld haalt 4,5 : 1 voor tekst op paneel, knop en grond', () => {
  for (const v of HUISSTIJL_VOORBEELDEN) {
    const { kleuren } = bereken(v.kleuren);
    assert.ok(contrast(kleuren.opPaneel, kleuren.paneel) >= 4.5, `${v.id} paneel`);
    assert.ok(contrast(kleuren.opActie, kleuren.actie) >= 4.5, `${v.id} actie`);
    assert.ok(contrast(kleuren.tekst, kleuren.grond) >= 4.5, `${v.id} tekst`);
    assert.ok(contrast(kleuren.merkTekst, kleuren.grond) >= 4.5, `${v.id} links`);
  }
});

test('een te lichte merkkleur geeft een waarschuwing en een donkerder tint voor links', () => {
  const { kleuren, waarschuwingen } = bereken({ merk: '#FFE680' });
  assert.ok(waarschuwingen.some((w) => w.kleur === 'merk'));
  assert.ok(contrast(kleuren.merkTekst, kleuren.grond) >= 4.5);
});

test('haalNorm laat een kleur staan die al goed genoeg is', () => {
  assert.equal(haalNorm('#12211C', '#FFFFFF'), '#12211C');
});

test('ongeldige invoer valt terug op de standaard', () => {
  const { kleuren } = bereken({ paneel: 'rood', actie: '#12' });
  assert.equal(kleuren.paneel, STANDAARD.paneel);
  assert.equal(kleuren.actie, STANDAARD.actie);
});

test('zonder eigen kleuren zijn ook de extra kleuren die van Ons Op Maat', () => {
  const k = vulAan({});
  assert.equal(k.grond, STANDAARD.grond);
  assert.equal(k.tekst, STANDAARD.tekst);
  assert.equal(k.vlak2, STANDAARD.vlak2);
});
