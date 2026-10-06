import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { MODULES, DELEN, TOEWIJZING } from '../js/data.js';
import { RAPPORTEREN } from '../js/casus.js';

test('de verzorgende IG heeft de 15 modules uit Nicks opzet, in vijf delen', () => {
  assert.equal(TOEWIJZING.vig.length, 15);
  assert.equal(DELEN.length, 5);
  for (const m of MODULES) assert.ok(DELEN.some((d) => d.id === m.deel), m.id);
});

test('toewijzingen verwijzen alleen naar bestaande modules', () => {
  const ids = new Set(MODULES.map((m) => m.id));
  for (const lijst of Object.values(TOEWIJZING)) for (const id of lijst) assert.ok(ids.has(id), id);
});

test('de casus heeft per keuze precies één goed antwoord en een variant', () => {
  for (const stap of RAPPORTEREN.stappen.filter((s) => s.type === 'keuze')) {
    assert.equal(stap.opties.filter((o) => o.goed).length, 1);
    for (const o of stap.opties) assert.ok(o.variant.kop && o.variant.tekst && o.uitleg);
  }
  for (const v of RAPPORTEREN.toets) assert.ok(v.goed >= 0 && v.goed < v.opties.length);
});

test('geen em-dashes en geen puntkomma\'s in de teksten', () => {
  const bestanden = ['js/data.js', 'js/casus.js', 'js/app.js', 'index.html'];
  for (const b of bestanden) {
    const inhoud = readFileSync(new URL('../' + b, import.meta.url), 'utf8');
    assert.ok(!inhoud.includes('—'), `em-dash in ${b}`);
  }
  const zichtbaar = [JSON.stringify(MODULES), JSON.stringify(RAPPORTEREN)].join(' ');
  assert.ok(!zichtbaar.includes(';'), 'puntkomma in teksten');
});

test('het woord leerlijn en andere verboden woorden staan nergens in de teksten', () => {
  const tekst = readdirSync(new URL('../js/', import.meta.url)).map((f) => readFileSync(new URL('../js/' + f, import.meta.url), 'utf8')).join(' ').toLowerCase();
  for (const woord of ['leerlijn', 'leeroplossing', 'empowerment', 'digitale transformatie']) assert.ok(!tekst.includes(woord), woord);
});
