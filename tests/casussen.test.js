import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync } from 'node:fs';
import { MODULES } from '../js/data.js';
import { CASUSSEN } from '../js/casussen/index.js';
import { ILLUSTRATIES } from '../js/illustraties.js';

const ONS_MENU = ['Overzicht', 'Vragenlijsten', 'Plan', 'Rapportages', 'Agenda', 'Klinimetrie', 'Snelkoppelingen', 'Algemeen', 'Cliëntnetwerk', 'Financieel', 'Documenten'];

const map = new URL('../js/casussen/', import.meta.url);
const bestanden = readdirSync(map).filter((f) => f.endsWith('.js') && f !== 'index.js');

function teksten(x, uit = []) {
  if (typeof x === 'string') uit.push(x);
  else if (Array.isArray(x)) x.forEach((y) => teksten(y, uit));
  else if (x && typeof x === 'object') Object.values(x).forEach((y) => teksten(y, uit));
  return uit;
}

const isTekst = (t) => typeof t === 'string' && t.trim().length > 0;

for (const bestand of bestanden) {
  test(`casus ${bestand} volgt het formaat`, async () => {
    const c = (await import(new URL(bestand, map))).default;
    assert.ok(c, 'exporteert een default object');
    assert.equal(`${c.id}.js`, bestand, 'id is gelijk aan de bestandsnaam');
    const m = MODULES.find((x) => x.id === c.id);
    assert.ok(m && m.id !== 'rondleiding', 'id hoort bij een module, niet de rondleiding');

    // Eerst uitleg, dan samen doorklikken, pas daarna de vragen.
    if (c.les) {
    assert.ok(Array.isArray(c.les) && c.les.length >= 2 && c.les.length <= 4, 'les: 2 tot 4 pagina\'s uitleg');
    for (const [i, p] of c.les.entries()) {
      const waar = `les ${i + 1}`;
      assert.ok(isTekst(p.kop), `${waar}: kop`);
      assert.ok(Array.isArray(p.tekst) && p.tekst.length >= 1 && p.tekst.length <= 3 && p.tekst.every(isTekst), `${waar}: 1 tot 3 alinea's`);
      assert.ok(ILLUSTRATIES.includes(p.beeld), `${waar}: beeld "${p.beeld}" bestaat in js/illustraties.js`);
      if (p.punten) assert.ok(p.punten.length >= 1 && p.punten.length <= 4 && p.punten.every(isTekst), `${waar}: 1 tot 4 punten`);
    }
    const d = c.doorklik;
    assert.ok(d && ['ons', 'telefoon', undefined].includes(d.plek), 'doorklik: plek is ons of telefoon');
    assert.ok(isTekst(d.klaar) || (Array.isArray(d.klaar) && d.klaar.every(isTekst)), 'doorklik.klaar');
    if (d.plek === 'telefoon') assert.ok(isTekst(d.app), 'doorklik op de telefoon: app');
    else assert.ok(isTekst(d.client), 'doorklik in ONS: client');
    assert.ok(d.stappen.length >= 3 && d.stappen.length <= 6, 'doorklik: 3 tot 6 stappen');
    for (const [i, s] of d.stappen.entries()) {
      const waar = `doorklik ${i + 1}`;
      assert.ok(isTekst(s.zeg) && isTekst(s.doe), `${waar}: zeg en doe`);
      const soorten = Object.keys(s.doel || {}).filter((k) => k !== 'label');
      assert.equal(soorten.length, 1, `${waar}: doel heeft precies één van menu, knop, tab, regel, optie`);
      const [soort] = soorten;
      const p = s.pagina || {};
      const waarde = s.doel[soort];
      const bestaat = {
        menu: () => d.plek !== 'telefoon' && ONS_MENU.includes(waarde),
        knop: () => (p.knoppen || []).includes(waarde),
        tab: () => (p.tabs || []).includes(waarde),
        regel: () => (p.kaarten || []).some((k) => (k.regels || []).includes(waarde)),
        optie: () => (p.venster?.opties || []).includes(waarde),
      }[soort];
      assert.ok(bestaat && bestaat(), `${waar}: het doel ${soort} "${waarde}" staat op het scherm`);
      if (s.menu) assert.ok(ONS_MENU.includes(s.menu), `${waar}: menu "${s.menu}" bestaat in ONS`);
    }
    }

    assert.ok(isTekst(c.startKnop), 'startKnop');
    assert.ok(isTekst(c.intro?.tijd) && isTekst(c.intro?.kop), 'intro.tijd en intro.kop');
    assert.ok(Array.isArray(c.intro.tekst) && c.intro.tekst.length >= 1 && c.intro.tekst.length <= 4, 'intro.tekst: 1 tot 4 alinea\'s');
    assert.ok(c.stappen.length >= 2 && c.stappen.length <= 4, '2 tot 4 stappen');
    assert.equal(c.stapNamen.length, c.stappen.length + 1, 'stapNamen: Situatie plus één naam per stap');

    for (const [i, s] of c.stappen.entries()) {
      const waar = `stap ${i + 1}`;
      assert.ok(isTekst(s.vraag), `${waar}: vraag`);
      if (s.type === 'keuze') {
        assert.ok(s.opties.length >= 2 && s.opties.length <= 4, `${waar}: 2 tot 4 opties`);
        assert.ok(s.opties.some((o) => o.goed === true), `${waar}: minstens één goede optie`);
        for (const o of s.opties) {
          assert.equal(typeof o.goed, 'boolean', `${waar}: goed is true of false`);
          assert.ok(isTekst(o.tekst) && isTekst(o.uitleg) && isTekst(o.variant?.kop) && isTekst(o.variant?.tekst), `${waar}: tekst, uitleg en variant`);
        }
      } else if (s.type === 'koppel') {
        assert.ok(isTekst(s.scherm) && isTekst(s.kiesTekst), `${waar}: scherm en kiesTekst`);
        assert.ok(s.opties.length >= 2 && s.opties.length <= 6, `${waar}: 2 tot 6 opties`);
        const ids = s.opties.map((o) => o.id);
        assert.ok(s.regels.length >= 2 && s.regels.length <= 5, `${waar}: 2 tot 5 regels`);
        for (const r of s.regels) assert.ok(isTekst(r.waarneming) && ids.includes(r.goed), `${waar}: regel ${r.waarneming} wijst naar een bestaande optie`);
        assert.ok(isTekst(s.goedTekst) && isTekst(s.foutTekst), `${waar}: goedTekst en foutTekst`);
        if (s.ons) assert.ok(['nieuwe-episode', 'zorgplan', 'nieuwe-rapportage'].includes(s.ons.scherm) && isTekst(s.ons.naam), `${waar}: ons.scherm bestaat en ons.naam is gevuld`);
      } else if (s.type === 'volgorde') {
        assert.ok(s.items.length >= 3 && s.items.length <= 6, `${waar}: 3 tot 6 items`);
        assert.deepEqual([...s.start].sort((a, b) => a - b), s.items.map((_, j) => j), `${waar}: start is een herschikking van de items`);
        assert.ok(s.start.some((n, j) => n !== j), `${waar}: start staat niet al goed`);
        assert.ok(isTekst(s.goedTekst) && isTekst(s.foutTekst), `${waar}: goedTekst en foutTekst`);
      } else {
        assert.fail(`${waar}: onbekend type ${s.type}`);
      }
    }

    if (m.toets) {
      assert.equal(c.toets?.length, 5, 'module met toets: precies 5 vragen');
      for (const v of c.toets) {
        assert.ok(isTekst(v.vraag) && v.opties.length === 3, 'toetsvraag met 3 opties');
        assert.ok(Number.isInteger(v.goed) && v.goed >= 0 && v.goed < 3, 'goed is 0, 1 of 2');
      }
      const verdeling = new Set(c.toets.map((v) => v.goed));
      assert.ok(verdeling.size >= 2, 'het goede antwoord staat niet steeds op dezelfde plek');
    } else {
      assert.ok(!c.toets || c.toets.length === 0, 'module zonder toets heeft geen toets');
    }
    assert.ok(c.samenvatting.length >= 2 && c.samenvatting.length <= 4, 'samenvatting: 2 tot 4 regels');

    for (const t of teksten(c)) {
      assert.ok(!/[—–]/.test(t), `geen em- of en-dash: "${t}"`);
      assert.ok(!t.includes(';'), `geen puntkomma: "${t}"`);
      assert.ok(!/niet alleen .* maar ook/i.test(t), `geen "niet alleen ... maar ook": "${t}"`);
    }
  });
}

test('elke casus in de map staat in index.js', () => {
  for (const b of bestanden) assert.ok(CASUSSEN[b.replace('.js', '')], `${b} ontbreekt in index.js`);
});
