import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { CLIENTEN, TEKSTEN, filterClienten } from '../js/oefenen.js';

const namen = (lijst) => lijst.map((c) => c.naam);

test('de oefenomgeving heeft precies de vier verzonnen testcliënten', () => {
  assert.deepEqual(namen(CLIENTEN).sort(), ['A Bakker', 'J de Vries', 'M Jansen', 'T Tester']);
  assert.equal(new Set(CLIENTEN.map((c) => c.id)).size, CLIENTEN.length);
  assert.equal(new Set(CLIENTEN.map((c) => c.nummer)).size, CLIENTEN.length);
});

test('zoeken vindt een cliënt op naam, zonder hoofdletters en spaties', () => {
  assert.deepEqual(namen(filterClienten('J de Vries')), ['J de Vries']);
  assert.deepEqual(namen(filterClienten('vries')), ['J de Vries']);
  assert.deepEqual(namen(filterClienten('DEVRIES')), ['J de Vries']);
  assert.deepEqual(namen(filterClienten('  jansen ')), ['M Jansen']);
});

test('zoeken vindt een cliënt op cliëntnummer', () => {
  assert.deepEqual(namen(filterClienten('12345')), ['T Tester']);
});

test('zoeken zonder zoekterm geeft iedereen, een onbekende naam niemand', () => {
  assert.equal(filterClienten('').length, CLIENTEN.length);
  assert.equal(filterClienten('Pietersen').length, 0);
});

test('het statusfilter werkt samen met de zoekterm', () => {
  assert.deepEqual(namen(filterClienten('', ['uit'])), ['M Jansen']);
  assert.ok(!filterClienten('', ['geen']).some((c) => c.naam === 'M Jansen'));
  assert.equal(filterClienten('vries', ['uit']).length, 0);
});

test('J de Vries heeft een zorgplan om te lezen en een eerste contactpersoon', () => {
  const j = CLIENTEN.find((c) => c.naam === 'J de Vries');
  assert.ok(j.plan.some((d) => d.doelen.length > 0));
  assert.equal(j.contacten.filter((p) => p.ice).length, 1);
  assert.equal(j.contacten.find((p) => p.ice).naam, j.ice);
});

test('vier opdrachten, elk met een eigen id', () => {
  assert.deepEqual(TEKSTEN.opdrachten.map((o) => o.id), ['a', 'b', 'c', 'd']);
});

test('geen em-dashes in oefenen.js en geen puntkomma\'s in de zichtbare teksten', () => {
  const bron = readFileSync(new URL('../js/oefenen.js', import.meta.url), 'utf8');
  assert.ok(!bron.includes('—'), 'em-dash in js/oefenen.js');
  const zichtbaar = JSON.stringify(TEKSTEN) + JSON.stringify(CLIENTEN);
  assert.ok(!zichtbaar.includes('—'), 'em-dash in teksten');
  assert.ok(!zichtbaar.includes(';'), 'puntkomma in teksten');
});

test('alleen Sanne Visser staat als medewerker in de oefenomgeving', () => {
  const auteurs = new Set(CLIENTEN.flatMap((c) => c.rapportages.map((r) => r.auteur)));
  assert.deepEqual([...auteurs], ['Sanne Visser']);
  const bron = readFileSync(new URL('../js/oefenen.js', import.meta.url), 'utf8');
  assert.ok(!/Wildeboer/.test(bron), 'echte naam uit de schermafdrukken');
});
