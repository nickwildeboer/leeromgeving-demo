import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { MODULES, DELEN, TOEWIJZING } from '../js/data.js';

test('de verzorgende IG heeft de 15 modules uit Nicks opzet, in vijf delen', () => {
  assert.equal(TOEWIJZING.vig.length, 15);
  assert.equal(DELEN.length, 5);
  for (const m of MODULES) assert.ok(DELEN.some((d) => d.id === m.deel), m.id);
});

test('toewijzingen verwijzen alleen naar bestaande modules', () => {
  const ids = new Set(MODULES.map((m) => m.id));
  for (const lijst of Object.values(TOEWIJZING)) for (const id of lijst) assert.ok(ids.has(id), id);
});

test('geen em-dashes en geen puntkomma\'s in de teksten', () => {
  const bestanden = ['js/data.js', 'js/app.js', 'index.html'];
  for (const b of bestanden) {
    const inhoud = readFileSync(new URL('../' + b, import.meta.url), 'utf8');
    assert.ok(!inhoud.includes('—'), `em-dash in ${b}`);
  }
  const zichtbaar = JSON.stringify(MODULES);
  assert.ok(!zichtbaar.includes(';'), 'puntkomma in teksten');
});

test('het woord leerlijn en andere verboden woorden staan nergens in de teksten', () => {
  const lees = (map) => readdirSync(new URL(map, import.meta.url)).filter((f) => f.endsWith('.js')).map((f) => readFileSync(new URL(map + f, import.meta.url), 'utf8'));
  const tekst = [...lees('../js/'), ...lees('../js/casussen/')].join(' ').toLowerCase();
  for (const woord of ['leerlijn', 'leeroplossing', 'empowerment', 'digitale transformatie']) assert.ok(!tekst.includes(woord), woord);
});
