import { test } from 'node:test';
import assert from 'node:assert/strict';
import { MODULES } from '../js/data.js';
import { HANDBOEK, WIE_DOET_WAT } from '../js/handboek.js';
import { maakIndex, zoek, antwoord, leesDocument, tokens, stam } from '../js/zoeken.js';

const index = maakIndex([...HANDBOEK, ...WIE_DOET_WAT]);
const vraag = (v) => antwoord(index, v, { afdeling: 'De Linde' });

// vraag, de sectie die bovenaan moet staan (of null als het antwoord uit Wie doet wat komt),
// en wie er bij de personen moet staan
const VERWACHT = [
  { v: 'Wie is mijn key-user?', persoon: 'Fatima el Amrani', tekst: /Fatima/ },
  { v: 'wie is de key-user van De Eik', persoon: 'Wendy Schouten', tekst: /Wendy Schouten/ },
  { v: 'Wanneer maak ik een MIC-melding?', sectie: 'mic-wanneer' },
  { v: 'Hoe vaak meet ik pijn?', sectie: 'meten-pijn' },
  { v: 'Ik ben mijn Authenticator kwijt', sectie: 'authenticator-kwijt', persoon: 'Servicedesk ICT' },
  { v: 'wachtwoord kwijt', sectie: 'authenticator-kwijt', tekst: /servicedesk/ },
  { v: 'val', sectie: 'mic-val', module: 'mic' },
  { v: 'mevrouw is gevallen', sectie: 'mic-val' },
  { v: 'Nedap ONS doet het niet', sectie: 'storing', tekst: /storing/i },
  { v: 'Hoe start ik mijn dienst?', sectie: 'dienst-starten', module: 'overdracht' },
  { v: 'Wat doe ik bij een decubitus?', sectie: 'wond-beschrijven', persoon: 'Ingrid Post' },
  { v: 'Bij wie meld ik een datalek?', sectie: 'datalek', persoon: 'Joris Hermans' },
  { v: 'nieuwe telefoon', sectie: 'authenticator-kwijt' },
  { v: 'Een zakje medicatie is vergeten', sectie: 'mic-medicatie' },
  { v: 'mag ik in een dossier kijken van een andere afdeling', sectie: 'escaleren-wanneer', module: 'escaleren' },
  { v: 'de familie wil gebeld worden', sectie: 'familie-contactpersoon' },
  { v: 'de familie vraagt hoe lang het nog duurt', sectie: 'zp10-zorg' },
  { v: 'stervensfase mondverzorging', sectie: 'zp10-zorg' },
  { v: 'waar vind ik het zorgplan', sectie: 'zorgplan-lezen' },
  { v: 'hoe zoek ik een cliënt op', sectie: 'client-opzoeken' },
  { v: 'wanneer maak ik een episode', sectie: 'episode-wanneer' },
  { v: 'wie is de wondverpleegkundige', persoon: 'Ingrid Post', tekst: /Ingrid Post/ },
];

for (const { v, sectie, persoon, tekst, module } of VERWACHT) {
  test(`vraag: "${v}"`, () => {
    const a = vraag(v);
    assert.equal(a.zeker, true, 'er is een antwoord');
    if (sectie) assert.equal(a.sectieId, sectie);
    if (persoon) assert.ok(a.personen.some((p) => p.naam === persoon), `${persoon} staat bij de personen (${a.personen.map((p) => p.naam).join(', ')})`);
    if (tekst) assert.match(a.tekst, tekst);
    if (module) assert.ok(a.modules.includes(module), `module ${module} om te oefenen`);
    assert.ok(a.bron, 'het antwoord heeft een bron');
  });
}

test('het antwoord is letterlijk een of twee zinnen uit de passage', () => {
  for (const { v } of VERWACHT) {
    const a = vraag(v);
    if (!a.sectieId) continue;
    const s = HANDBOEK.find((x) => x.id === a.sectieId);
    assert.ok(s.tekst.join(' ').includes(a.tekst), `"${a.tekst}" staat in ${s.id}`);
    const zinnen = a.tekst.split(/(?<=[.!?])\s+/).length;
    assert.ok(zinnen >= 1 && zinnen <= 3, `1 tot 2 zinnen, of 3 als de tweede een korte vraag is: ${a.tekst}`);
  }
});

test('bij "mijn key-user" alleen de key-user van je eigen afdeling', () => {
  const a = vraag('Wie is mijn key-user?');
  assert.deepEqual(a.personen.map((p) => p.naam), ['Fatima el Amrani']);
});

test('een vraag die niet in het handboek staat, geeft eerlijk geen antwoord', () => {
  for (const v of ['Hoe bak ik een appeltaart?', 'Wat is de hoofdstad van Frankrijk?', 'xyzzy']) {
    const a = vraag(v);
    assert.equal(a.zeker, false, v);
    assert.equal(a.sectieId, null);
    assert.match(a.tekst, /key-user/);
    assert.ok(a.personen.some((p) => p.naam === 'Fatima el Amrani'), 'verwijst naar de key-user van je afdeling');
  }
});

test('een lege vraag geeft niets', () => {
  assert.deepEqual(zoek(index, '', 5), []);
  assert.deepEqual(zoek(index, 'de het een', 5), []);
  assert.equal(vraag('').zeker, false);
});

test('zoek geeft gerangschikte passages, beste eerst', () => {
  const r = zoek(index, 'MIC-melding maken', 5);
  assert.ok(r.length > 1 && r.length <= 5);
  for (let i = 1; i < r.length; i++) assert.ok(r[i - 1].score >= r[i].score);
  assert.ok(r[0].id.startsWith('mic'));
  assert.ok(zoek(index, 'wondverpleegkundige', 3, { soort: 'persoon' }).every((x) => x.soort === 'persoon'));
});

test('Nederlandse normalisatie: accenten, meervoud, verkleinwoord, synoniemen', () => {
  assert.deepEqual(tokens('Cliënten'), tokens('client'));
  assert.equal(stam('rapportages'), stam('rapportage'));
  assert.equal(stam('metingen'), stam('meet'));
  assert.equal(stam('plekje'), stam('plek'));
  assert.equal(stam('afspraken'), stam('afspraak'));
  assert.deepEqual(tokens('key-user'), tokens('keyuser'));
  assert.deepEqual(tokens('wie is het en de'), []);
  // synoniem: "incident" vindt de MIC-melding, "dienstwissel" de overdracht
  assert.ok(zoek(index, 'incident', 3)[0].id.startsWith('mic'));
  assert.ok(zoek(index, 'dienstwissel', 3)[0].id.startsWith('overdracht'));
  assert.ok(zoek(index, 'naasten', 3).some((r) => r.id.startsWith('familie')));
});

test('leesDocument knipt een tekst op in secties op koppen', () => {
  const md = [
    '# Huisregels De Linde',
    '',
    '## Bezoek',
    'Bezoek is welkom tussen 10.00 en 20.00 uur.',
    'Na 20.00 uur bel je aan bij de voordeur.',
    '',
    '## Huisdieren',
    '',
    'Een hond mag mee op bezoek. Houd hem aan de lijn.',
    '',
    '- Geen honden in de huiskamer tijdens het eten.',
    '- Katten blijven thuis.',
  ].join('\n');
  const s = leesDocument(md, 'huisregels.md');
  assert.equal(s.length, 2);
  assert.equal(s[0].kop, 'Bezoek');
  assert.equal(s[0].hoofdstuk, 'Huisregels De Linde');
  assert.deepEqual(s[0].tekst, ['Bezoek is welkom tussen 10.00 en 20.00 uur. Na 20.00 uur bel je aan bij de voordeur.']);
  assert.equal(s[1].kop, 'Huisdieren');
  assert.equal(s[1].tekst.length, 3);
  assert.equal(s[1].tekst[1], 'Geen honden in de huiskamer tijdens het eten.');
  assert.ok(s.every((x) => x.bron === 'huisregels' && x.module === null && x.id));
  assert.equal(new Set(s.map((x) => x.id)).size, s.length, 'unieke id\'s');

  const txt = 'Parkeren\n\nJe parkeert op het terrein achter het gebouw. De slagboom gaat open met je pas.\n\nFietsen\nDe fietsenstalling is bij de ingang van De Eik.';
  const t = leesDocument(txt, 'Praktisch.txt');
  assert.deepEqual(t.map((x) => x.kop), ['Parkeren', 'Fietsen']);
  assert.match(t[1].tekst[0], /fietsenstalling/);

  const zonderKop = leesDocument('Gewoon een alinea zonder kop. Nog een zin.', 'los.txt');
  assert.equal(zonderKop.length, 1);
  assert.equal(zonderKop[0].kop, 'los');
  assert.deepEqual(leesDocument('', 'leeg.txt'), []);
});

test('een geüpload document is doorzoekbaar', () => {
  const extra = leesDocument('## Parkeren\nJe parkeert op het terrein achter het gebouw. De slagboom gaat open met je personeelspas.', 'Praktisch.md');
  const i = maakIndex([...HANDBOEK, ...WIE_DOET_WAT, ...extra]);
  const a = antwoord(i, 'Waar kan ik parkeren?', { afdeling: 'De Linde' });
  assert.equal(a.zeker, true);
  assert.equal(a.bron, 'Praktisch');
  assert.match(a.tekst, /parkeert op het terrein/);
});

test('handboek: vorm, ids en bron', () => {
  const ids = HANDBOEK.map((s) => s.id);
  assert.equal(new Set(ids).size, ids.length, 'unieke id\'s');
  assert.ok(HANDBOEK.length >= 30 && HANDBOEK.length <= 45, `30 tot 40 secties, nu ${HANDBOEK.length}`);
  const moduleIds = MODULES.map((m) => m.id);
  for (const s of HANDBOEK) {
    assert.ok(s.hoofdstuk && s.kop && s.bron === 'Handboek De Wilgenhof', `${s.id}: hoofdstuk, kop en bron`);
    assert.ok(Array.isArray(s.tekst) && s.tekst.length >= 1 && s.tekst.length <= 4, `${s.id}: 1 tot 4 alinea's`);
    assert.ok(s.module === null || moduleIds.includes(s.module), `${s.id}: module bestaat`);
    for (const al of s.tekst) {
      const n = al.split(/(?<=[.!?])\s+/).length;
      assert.ok(n >= 1 && n <= 4, `${s.id}: 1 tot 4 zinnen per alinea, nu ${n}`);
    }
  }
  for (const p of WIE_DOET_WAT) {
    assert.ok(p.id && p.rol && p.naam && p.afdeling && p.wanneer && p.bereik && p.waarvoor?.length, `${p.id}: alle velden`);
    assert.equal(p.bron, 'Wie doet wat (SharePoint)');
  }
  assert.equal(new Set(WIE_DOET_WAT.map((p) => p.id)).size, WIE_DOET_WAT.length);
});

test('elke module uit data.js heeft minstens twee secties in het handboek', () => {
  for (const m of MODULES) {
    const n = HANDBOEK.filter((s) => s.module === m.id).length;
    assert.ok(n >= 2, `${m.id} heeft ${n} secties`);
  }
});

test('de algemene onderwerpen staan erin', () => {
  for (const id of ['dienst-starten', 'overdracht-lezen', 'vertrouwelijk', 'storing', 'authenticator-kwijt', 'key-user']) {
    assert.ok(HANDBOEK.some((s) => s.id === id), id);
  }
});

function teksten(x, uit = []) {
  if (typeof x === 'string') uit.push(x);
  else if (Array.isArray(x)) x.forEach((y) => teksten(y, uit));
  else if (x && typeof x === 'object') Object.values(x).forEach((y) => teksten(y, uit));
  return uit;
}

test('schrijfregels: geen em-dash, geen puntkomma, geen "niet alleen ... maar ook"', () => {
  for (const t of teksten([HANDBOEK, WIE_DOET_WAT])) {
    assert.ok(!/[—–]/.test(t), `geen em- of en-dash: "${t}"`);
    assert.ok(!t.includes(';'), `geen puntkomma: "${t}"`);
    assert.ok(!/niet alleen .* maar ook/i.test(t), `geen "niet alleen ... maar ook": "${t}"`);
  }
});

test('alleen verzonnen contactgegevens: mail op @dewilgenhof.nl, geen telefoonnummers', () => {
  for (const t of teksten([HANDBOEK, WIE_DOET_WAT])) {
    for (const mail of t.match(/[\w.+-]+@[\w-]+(?:\.[\w-]+)+/g) || []) assert.match(mail, /@dewilgenhof\.nl$/, mail);
    assert.ok(!/\b0\d{1,3}[-\s]?\d{6,8}\b|\+31/.test(t), `geen echt telefoonnummer: "${t}"`);
  }
});
