import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { DELEN, MODULES, TOEWIJZING } from '../js/data.js';
import { BADGES, deelKlaar, verdiendeBadges, allesKlaar, badgesUitAantal, delenMetModules, dagenOpRij, voegDagToe, dagStempel, badgeSvg } from '../js/beloning.js';

const vig = TOEWIJZING.vig;
const helpende = TOEWIJZING.helpende;
const klaarVoor = (ids) => Object.fromEntries(ids.map((id) => [id, 'klaar']));

test('elk deel heeft een badge met een naam en een tekst', () => {
  for (const d of DELEN) {
    assert.ok(BADGES[d.id]?.naam, d.id);
    assert.ok(BADGES[d.id]?.tekst, d.id);
    assert.match(badgeSvg(d.id), /<svg/);
  }
});

test('een deel is pas klaar als alle toegewezen modules van dat deel klaar zijn', () => {
  assert.equal(deelKlaar('start', vig, klaarVoor(['overdracht'])), false);
  assert.equal(deelKlaar('start', vig, klaarVoor(['overdracht', 'opzoeken'])), true);
  assert.equal(deelKlaar('start', vig, { overdracht: 'klaar', opzoeken: 'bezig' }), false);
});

test('alleen toegewezen modules tellen mee', () => {
  // de helpende heeft in Apps geen Wondzorgapp
  assert.equal(deelKlaar('apps', helpende, klaarVoor(['authenticator', 'onsdossier'])), true);
  assert.equal(deelKlaar('apps', vig, klaarVoor(['authenticator', 'onsdossier'])), false);
});

test('een deel zonder toegewezen modules levert geen badge op', () => {
  assert.equal(deelKlaar('apps', ['rondleiding'], klaarVoor(['rondleiding'])), false);
  assert.deepEqual(verdiendeBadges(['rondleiding'], klaarVoor(['rondleiding'])), ['welkom']);
  assert.deepEqual(delenMetModules(['rondleiding']).map((d) => d.id), ['welkom']);
});

test('verdiende badges en alles klaar', () => {
  assert.deepEqual(verdiendeBadges(vig, {}), []);
  assert.deepEqual(verdiendeBadges(vig, klaarVoor(['rondleiding', 'zp10', 'mic'])), ['welkom', 'afspraken']);
  assert.equal(allesKlaar(vig, klaarVoor(vig.slice(1))), false);
  assert.equal(allesKlaar(vig, klaarVoor(vig)), true);
  assert.deepEqual(verdiendeBadges(vig, klaarVoor(vig)), DELEN.map((d) => d.id));
  assert.equal(allesKlaar([], {}), false);
});

test('badges voor collega\'s volgen uit het aantal klaar, deel voor deel', () => {
  assert.equal(badgesUitAantal(0, vig), 0);
  assert.equal(badgesUitAantal(1, vig), 1);
  assert.equal(badgesUitAantal(2, vig), 1);
  assert.equal(badgesUitAantal(3, vig), 2);
  assert.equal(badgesUitAantal(10, vig), 3);
  assert.equal(badgesUitAantal(12, vig), 4);
  assert.equal(badgesUitAantal(15, vig), 5);
  assert.equal(badgesUitAantal(9, helpende), 5);
  assert.equal(badgesUitAantal(4, helpende), 2);
});

test('dagen op rij tellen terug vanaf vandaag', () => {
  assert.equal(dagenOpRij([], '2026-10-06'), 0);
  assert.equal(dagenOpRij(['2026-10-06'], '2026-10-06'), 1);
  assert.equal(dagenOpRij(['2026-10-04', '2026-10-05', '2026-10-06'], '2026-10-06'), 3);
  assert.equal(dagenOpRij(['2026-10-01', '2026-10-05', '2026-10-06'], '2026-10-06'), 2);
});

test('een reeks tot gisteren telt nog mee, een onderbroken reeks niet', () => {
  assert.equal(dagenOpRij(['2026-10-04', '2026-10-05'], '2026-10-06'), 2);
  assert.equal(dagenOpRij(['2026-10-03', '2026-10-04'], '2026-10-06'), 0);
});

test('dagen op rij gaat goed over een maandgrens', () => {
  assert.equal(dagenOpRij(['2026-09-29', '2026-09-30', '2026-10-01'], '2026-10-01'), 3);
});

test('een dag telt maar één keer', () => {
  assert.deepEqual(voegDagToe(['2026-10-05'], '2026-10-05'), ['2026-10-05']);
  assert.deepEqual(voegDagToe(['2026-10-06'], '2026-10-05'), ['2026-10-05', '2026-10-06']);
  assert.deepEqual(voegDagToe(undefined, '2026-10-05'), ['2026-10-05']);
  assert.match(dagStempel(new Date(2026, 0, 5)), /^2026-01-05$/);
});

test('de teksten van de beloning volgen de schrijfregels', () => {
  const tekst = JSON.stringify(BADGES);
  for (const teken of ['—', '–', ';']) assert.ok(!tekst.includes(teken), teken);
  const bron = readFileSync(new URL('../js/beloning.js', import.meta.url), 'utf8');
  assert.ok(!bron.includes('—') && !bron.includes('–'), 'em- of en-dash in beloning.js');
  for (const woord of ['verzonnen', 'fictief', 'niet alleen']) assert.ok(!bron.toLowerCase().includes(woord), woord);
});

test('de modules in data.js passen bij de delen van de badges', () => {
  for (const m of MODULES) assert.ok(BADGES[m.deel], m.id);
});
