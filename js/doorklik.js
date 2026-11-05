// De eerste twee fasen van een module: eerst uitleg, dan samen door Nedap ONS klikken.
// Pas daarna komt de situatie met de vragen. Het formaat staat in js/casussen/FORMAAT.md.
// De bouwstenen van Nedap ONS (bovenbalk, menu, cliëntkop) komen uit app.js en geven we mee als `h`.

import { illustratie } from './illustraties.js';

// Waar begint een casus? Bij de uitleg als die er is, anders bij de situatie.
export const beginStap = (c) => (c.les?.length ? 'les' : c.doorklik ? 'doorklik' : 'intro');

// Namen boven in de stapper, vóór de stappen van de casus zelf.
export const fasen = (c) => [...(c.les?.length ? ['Uitleg'] : []), ...(c.doorklik ? [c.doorklik.plek === 'telefoon' ? 'Samen in de app' : 'Samen in ONS'] : [])];

export function viewLes(c, casus, h) {
  const { esc, ICOON } = h;
  const i = casus.lesPagina || 0;
  const p = c.les[i];
  const laatste = i === c.les.length - 1;
  const verder = laatste
    ? `<button type="button" class="btn btn--actie" data-actie="les-klaar">${c.doorklik ? (c.doorklik.plek === 'telefoon' ? 'Nu samen in de app' : 'Nu samen in ONS') : 'Naar de situatie'} ${ICOON.pijl}</button>`
    : `<button type="button" class="btn btn--actie" data-actie="les-volgende">Volgende ${ICOON.pijl}</button>`;
  return `
    <article class="werkpaneel les">
      <p class="bovenregel bovenregel--merk">Uitleg ${i + 1} van ${c.les.length}</p>
      <div class="les__grid">
        <div class="les__tekst">
          <h2>${esc(p.kop)}</h2>
          ${p.tekst.map((t) => `<p>${esc(t)}</p>`).join('')}
          ${p.punten?.length ? `<ul class="les__punten">${p.punten.map((t) => `<li>${ICOON.vink}<span>${esc(t)}</span></li>`).join('')}</ul>` : ''}
        </div>
        <figure class="les__figuur">${illustratie(p.beeld)}</figure>
      </div>
      <div class="les__stippen" aria-hidden="true">${c.les.map((_, j) => `<span class="${j === i ? 'is-nu' : j < i ? 'is-klaar' : ''}"></span>`).join('')}</div>
      <div class="knoppen les__knoppen">
        ${i > 0 ? `<button type="button" class="btn btn--rand" data-actie="les-vorige">${ICOON.terug} Vorige</button>` : ''}
        ${verder}
      </div>
    </article>`;
}

// ---------- samen doorklikken ----------
// Drie standen, zoals softwaretraining dat overal doet (Captivate: demo, training, assessment):
// kijk (wij doen het voor), mee (jij klikt, het doel licht op) en zelf (jij klikt zonder hulp, wij meten).

const isDoel = (doel, soort, tekst) => doel && doel[soort] !== undefined && doel[soort] === tekst;

// Eén klikbaar onderdeel van het scherm. Wat het wordt hangt af van de stand.
function onderdeel(h, ctx, { inhoud, klasse, label, doel, tag = 'span', extra = '' }) {
  const { modus, hint } = ctx;
  const aria = `aria-label="${h.esc(label)}"`;
  if (modus === 'zelf') {
    const actie = doel ? 'zelf-goed' : 'zelf-fout';
    return `<button type="button" class="${klasse} dk-zelf${doel && hint ? ' dk-doel' : ''}" data-actie="${actie}" ${aria}>${inhoud}</button>`;
  }
  if (!doel) return `<${tag} class="${klasse}${extra}" aria-hidden="true">${inhoud}</${tag}>`;
  if (modus === 'kijk') return `<span class="${klasse} dk-doel dk-kijk" role="img" ${aria}>${inhoud}</span>`;
  return `<button type="button" class="${klasse} dk-doel" data-actie="doorklik-verder" ${aria}>${inhoud}</button>`;
}

// ---------- Nedap ONS, één op één naar de schermafdrukken ----------
// Elk scherm volgt een schermafdruk uit de testomgeving (kennisbank, middelen/ons-schermen). Wat de casus in `pagina`
// zet, komt op de plek waar het in Nedap ONS staat. De rest van het scherm vullen we aan met wat op de schermafdruk staat,
// zodat de medewerker het hele scherm herkent. Alleen wat in de casus staat is klikbaar in de stand Doe zelf.

// Bouwers voor één scherm. Ze houden bij welke knoppen, tabs, regels en opties al een plek hebben.
function bouwers(h, ctx, doel) {
  const gebruikt = { knop: new Set(), tab: new Set(), regel: new Set(), optie: new Set() };
  const stuk = (soort, tekst, klasse, inhoud) => {
    gebruikt[soort].add(tekst);
    const raak = isDoel(doel, soort, tekst);
    const label = raak && soort === 'knop' ? (doel.label || tekst) : tekst;
    return onderdeel(h, ctx, { inhoud: inhoud ?? h.esc(tekst), klasse: `${klasse} dk-el`, label, doel: raak, extra: soort === 'knop' ? ' dk-stil' : '' });
  };
  return {
    gebruikt, h,
    knop: (t, klasse = 'ons__knop ons__knop--rand', inhoud) => stuk('knop', t, klasse, inhoud),
    tab: (t, klasse = '', inhoud) => stuk('tab', t, klasse, inhoud),
    regel: (r, klasse = '', inhoud) => stuk('regel', r, klasse, inhoud),
    optie: (o, klasse = '', inhoud) => stuk('optie', o, klasse, inhoud),
  };
}
// Een bouwer voor de achtergrond van een venster: alles staat er, niets is klikbaar.
const stilBouwer = (h) => bouwers(h, { modus: 'mee' }, null);

// Wat de casus noemt maar nog geen plek kreeg, zetten we onderaan, zodat er nooit iets wegvalt.
function rest(b, p) {
  const { esc } = b.h;
  const knoppen = (p.knoppen || []).filter((t) => !b.gebruikt.knop.has(t));
  const tabs = (p.tabs || []).filter((t) => !b.gebruikt.tab.has(t));
  const kaarten = (p.kaarten || []).map((k) => ({ ...k, regels: (k.regels || []).filter((r) => !b.gebruikt.regel.has(r)) })).filter((k) => k.regels.length);
  const opties = (p.venster?.opties || []).filter((o) => !b.gebruikt.optie.has(o));
  if (!knoppen.length && !tabs.length && !kaarten.length && !opties.length) return '';
  return `
            ${tabs.length ? `<div class="dk-tabs">${tabs.map((t) => b.tab(t, 'dk-tab')).join('')}</div>` : ''}
            ${knoppen.length ? `<div class="dk-knoppen">${knoppen.map((t) => b.knop(t)).join('')}</div>` : ''}
            ${kaarten.map((k) => `<div class="ons__kaart">${k.kop ? `<p class="dk-kaart__kop">${esc(k.kop)}</p>` : ''}<ul class="dk-regels">${k.regels.map((r) => `<li>${b.regel(r, 'dk-regel')}</li>`).join('')}</ul></div>`).join('')}
            ${opties.length ? `<div class="dk-knoppen">${opties.map((o) => b.optie(o, 'dk-optie')).join('')}</div>` : ''}`;
}

const kaartVan = (p, kop) => (p.kaarten || []).find((k) => k.kop === kop);
const nepSelect = (h, tekst, klasse = '') => `<span class="ons__nep-select ${klasse}">${h.esc(tekst)}</span>`;
const invoer = (h, tekst, klasse = '') => `<span class="dk-invoer ${klasse}${tekst ? '' : ' is-leeg'}">${h.esc(tekst || '')}</span>`;
const isHint = (t) => /\?$/.test(t) || /^Kies /.test(t) || /^(Wat|Lengte) /.test(t);

// ----- kaarten van Overzicht (10-dossier-overzicht, 11-dossier-overzicht-onder) -----
const OVERZICHT = {
  links: [
    ['Waarschuwingen', 'Geen waarschuwingen'],
    ['Zorgstatus', null],
    ['Episodes', 'Geen relevante episodes'],
    ['Medische voorgeschiedenis', 'Geen relevante medische problemen'],
    ['Allergieën en overgevoeligheden', 'Geen actieve allergieën of overgevoeligheden', ['Verpleegkundige notities', 'Geen verpleegkundige notities']],
    ['Labuitslagen', 'Geen beschikbare labuitslagen'],
    ['Locatie', 'Geen locaties'],
  ],
  rechts: [
    ['Proactieve zorg', 'Geen medisch beleid', ['Wilsverklaring', 'Onbekend'], 'zwart'],
    ['Juridische statussen', 'Geen juridische statussen', null, 'zwart'],
    ['Wilsonbekwaamheden', 'Geen wilsonbekwaamheden'],
    ['Betrokken medewerkers', 'Geen actieve relevante betrokken medewerkers'],
    ['Medische notities', 'Geen medische notities'],
    ['Belangrijke rapportages', 'Geen belangrijke rapportages'],
    ['Zorgtechnologie', 'Er zijn geen zorgtechnologieën geregistreerd voor deze cliënt.', null, 'zwart ruim', true],
    ['Groepsdeelnames', 'Deze cliënt zit nog niet in een groep', null, '', true],
    ['Cliënt overleggen', 'Geen overleggen gevonden voor deze cliënt', null, 'grijs'],
  ],
};

// "Decubitus voorkomen, sinds 12-09-2026" of "08-10-2026 · Blaasontsteking" wordt een regel in de tabel Episodes.
function episodeRegel(r) {
  let m = r.match(/^(.+), sinds (\d\d-\d\d-\d{4})$/);
  if (m) return { datum: m[2], titel: m[1] };
  m = r.match(/^(\d\d-\d\d-\d{4}) · (.+)$/);
  return m ? { datum: m[1], titel: m[2] } : null;
}

function overzichtKaart(b, [kop, leeg, sub, stijl = '', plus = false], k, knopPlus) {
  const { esc, onsIcoon } = b.h;
  const regels = k?.regels || [];
  let body;
  if (kop === 'Zorgstatus' && !regels.length) body = '<p class="dk-ovz__tekst">De cliënt heeft <b>geen actieve zorgopname</b></p>';
  else if (kop === 'Waarschuwingen' && regels.some((r) => !/^Geen /.test(r))) {
    body = `<ul class="dk-ovz__waarschuwingen">${regels.map((r) => `<li>${onsIcoon('let', 'dk-ovz__let')}${b.regel(r, 'dk-ovz__waarschuwing')}</li>`).join('')}</ul>`;
  } else if (kop === 'Episodes' && regels.length && regels.every(episodeRegel)) {
    body = `<p class="dk-ovz__sub dk-ovz__sub--zwart">Relevante episodes</p>
                <div class="dk-episodes"><span class="dk-episodes__kop">Startdatum</span><span class="dk-episodes__kop">Code</span><span class="dk-episodes__kop">Titel</span>
                ${regels.map((r) => { const e = episodeRegel(r); return `<span>${esc(e.datum)}</span><span></span>${b.regel(r, 'dk-episodes__link', esc(e.titel))}`; }).join('')}</div>`;
  } else {
    const lijst = regels.length ? regels : [leeg];
    body = lijst.map((r) => (regels.length ? `<p class="dk-ovz__tekst">${b.regel(r, 'dk-ovz__regel')}</p>` : `<p class="dk-ovz__tekst">${esc(r)}</p>`)).join('');
  }
  const plusKnop = knopPlus || (plus ? `<span class="dk-vierkant" aria-hidden="true">${onsIcoon('plus')}</span>` : '');
  return `
              <section class="ons__kaart dk-ovz ${stijl ? stijl.split(' ').map((x) => `dk-ovz--${x}`).join(' ') : ''}">
                <div class="dk-ovz__kop"><h3 class="dk-kaarttitel${stijl.includes('grijs') ? ' dk-kaarttitel--grijs' : ''}">${esc(kop)}</h3>${plusKnop}</div>
                ${body}
                ${sub ? `<p class="dk-ovz__sub">${esc(sub[0])}</p><p class="dk-ovz__tekst">${esc(sub[1])}</p>` : ''}
              </section>`;
}

function schermOverzicht(b, p) {
  const bekend = [...OVERZICHT.links, ...OVERZICHT.rechts].map((x) => x[0]);
  const plus = (p.knoppen || []).includes('+') ? b.knop('+', 'dk-vierkant', b.h.onsIcoon('plus')) : '';
  const kolom = (lijst) => lijst.map((def) => overzichtKaart(b, def, kaartVan(p, def[0]), def[0] === 'Episodes' ? plus : '')).join('');
  const extra = (p.kaarten || []).filter((k) => !bekend.includes(k.kop)).map((k) => overzichtKaart(b, [k.kop, ''], k)).join('');
  return `
            <div class="dk-twee">
              <div class="dk-kolom">${kolom(OVERZICHT.links)}${extra}</div>
              <div class="dk-kolom">${kolom(OVERZICHT.rechts)}</div>
            </div>`;
}

// ----- Rapportages (14-rapportages-lijst, 19b, 19c, 18) -----
const RAPPORTAGETYPEN = [
  ['Gewicht', 'gewicht', 't'], ['Bloeddruk', 'hart', 'r'], ['Temperatuur', 'thermo', 'g'], ['Bloedsuiker', 'suiker', 'r'],
  ['Vocht inname', 'beker', 't'], ['Vocht uitscheiding', 'toilet', 'g'], ['Defecatie', 'rol', 't'], ['Medisch', 'kruisje', 'r'],
  ['Familie communicatie', 'familie', 'r'], ['Keten communicatie', 'keten', 't'], ['Stemming', 'smiley', 'b'], ['Saturatie', 'o2', 'b'],
  ['Pijnscore', 'pijn', 'r'], ['SOEP', 'soep', 'g'], ['Bristol-stoelgangschaal', 'bristol', 't'], ['Klinimetrie', 'grafiek', 't'], ['Fotorapportage', 'camera', 'b'],
];
const TYPE_ICOON = {
  gewicht: '<rect x="5" y="4" width="14" height="16" rx="3"/><path d="M9 4.5v2.5a3 3 0 0 0 6 0V4.5M12 9.5 13 7.5"/>',
  hart: '<path d="M12 20.5S3.5 15 3.5 9A4.5 4.5 0 0 1 12 6.6 4.5 4.5 0 0 1 20.5 9c0 6-8.5 11.5-8.5 11.5z"/><path d="M5 12h3.5l1.5-2.5 2.5 5 1.5-2.5H19"/>',
  thermo: '<path d="M10 4.5a2 2 0 0 1 4 0V14a3.5 3.5 0 1 1-4 0z"/><path d="M12 9v7"/>',
  suiker: '<path d="M3.5 9.5h9l2 2h3v4h-3l-2 2h-9z"/><circle cx="19.5" cy="17.5" r="1.5"/><path d="M7 9.5v-2h4v2"/>',
  beker: '<path d="M7 5h10l-1.5 15h-7zM8 10h8"/><path d="M12 3c1 1 1 1.5 0 2.5"/>',
  toilet: '<path d="M6 4h5v6H6zM11 10h7a6 6 0 0 1-6 6H9a3 3 0 0 1-3-3v-3M9 16v4h6v-4"/>',
  rol: '<path d="M5 4h11v16H5zM16 6h3v10h-3"/><circle cx="17.5" cy="11" r="2"/>',
  kruisje: '<path d="M9 3.5h6v5.5h5.5v6H15v5.5H9V15H3.5V9H9z"/>',
  familie: '<path d="M17 7.5A6 6 0 1 0 17 16.5M15 9.5a3 3 0 1 0 0 5"/>',
  keten: '<rect x="3.5" y="4" width="9" height="7" rx="1.5"/><rect x="11.5" y="13" width="9" height="7" rx="1.5"/><path d="M8 11v4h3.5M16 13V9h-3.5"/>',
  smiley: '<circle cx="12" cy="12" r="8.5"/><path d="M8.5 14c1.8 2 5.2 2 7 0M9 9.8v.4M15 9.8v.4"/>',
  o2: '<rect x="3.5" y="3.5" width="17" height="17" rx="3"/><circle cx="11" cy="12" r="3.5"/><path d="M16 15.5h2.5l-2.5 3h2.5"/>',
  pijn: '<path d="M3 15c2-4 4 3 6-1s4 3 6-1 4 3 6-1M7 9l1.5-3M11 8.5l1-3.5M15 9l1.5-3"/>',
  soep: '<rect x="4" y="3.5" width="16" height="17" rx="1.5"/><path d="M12 3.5v17M4 12h16"/>',
  bristol: '<path d="M4 18h16M6 18c0-3 2.5-4 6-4s6 1 6 4M8 14c0-2 2-3 4-3s4 1 4 3M10 11c0-1.5 1-2.5 2-2.5s2 1 2 2.5"/>',
  grafiek: '<path d="M4 4v16h16M7 15l4-4 3 2 5-6"/><circle cx="19" cy="7" r="1"/>',
  camera: '<path d="M4 8h3.5l1.5-2h6l1.5 2H20v11H4z"/><circle cx="12" cy="13" r="3.5"/><path d="M5 3.5v4M3 5.5h4"/>',
  doc: '<path d="M6.5 3H14l5 5v11.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19.5v-15A1.5 1.5 0 0 1 6.5 3zM13.5 3v5.5H19M8 12.5h8M8 15.5h8M8 18.5h5"/>',
};
const typeIcoon = (naam, kleur) => `<svg class="dk-type__icoon dk-kleur-${kleur}" viewBox="0 0 24 24" aria-hidden="true">${TYPE_ICOON[naam] || TYPE_ICOON.doc}</svg>`;
const typeVan = (naam) => RAPPORTAGETYPEN.find((t) => t[0] === naam);

// De tabs boven in de kaart Rapportages: de lijst, een vrije rapportage en het laatst gebruikte type.
function rapTabs(h, actief = 0, derde = ['Bloeddruk', 'hart', 'r']) {
  const tab = (icoon, kleur, i) => `<span class="dk-rtab${i === actief ? ' is-actief' : ''}${kleur === 'r' ? ' dk-rtab--roze' : kleur === 'g' ? ' dk-rtab--geel' : ''}">${i === 0 ? h.onsIcoon('lijst') : typeIcoon(icoon, kleur)}</span>`;
  return `<div class="dk-rtabs" aria-hidden="true">${tab('lijst', 'b', 0)}${tab('doc', 'b', 1)}${derde ? tab(derde[1], derde[2], 2) : ''}</div>`;
}
const blauwPlus = (h) => `<span class="dk-blauwplus" aria-hidden="true">${h.onsIcoon('plus')}</span>`;

function rapFilters(b, knop) {
  const { h } = b;
  return `
              <div class="dk-rfilters" aria-hidden="${knop ? 'false' : 'true'}">
                <span class="dk-rzoek">${h.onsIcoon('zoek')}Zoeken</span>
                ${nepSelect(h, 'Alle rapportages')}
                ${nepSelect(h, h.ONS_LIJST)}
                ${knop || '<span class="ons__knop ons__knop--paarsrand">Acties bekijken</span>'}
              </div>
              <div class="dk-rdatum" aria-hidden="true"><span class="dk-datumveld">DD-MM-YYYY</span> t/m <span class="dk-datumveld">DD-MM-YYYY</span><span class="dk-vinkje"></span>verborgen rapportages</div>`;
}

// Eén rapportage in de lijst. "Joost Hendriks · gisteren 21.40" geeft de auteur en het moment.
function rapItem(b, k) {
  const { h } = b;
  const { esc, onsIcoon } = h;
  const ster = /^★\s*/.test(k.kop || '');
  const [wie, wanneer = ''] = (k.kop || '').replace(/^★\s*/, '').split(' · ');
  const type = typeVan(wie);
  const [dag, ...tijd] = wanneer.split(' ');
  const moment = wanneer.match(/^\d\d-\d\d-\d{4}$/) ? [wanneer] : [dag, tijd.join(' ')].filter(Boolean);
  const auteur = type ? moment : [wie, ...moment];
  const tekst = (k.regels || []).map((r, i) => `<p>${type && i === 0 ? `${esc(type[0])}: ` : ''}${b.regel(r, type && i === 0 ? 'dk-ritem__waarde' : 'dk-ritem__regel')}</p>`).join('');
  return `
              <div class="dk-ritem">
                <span class="dk-ritem__icoon">${type ? typeIcoon(type[1], type[2]) : typeIcoon('doc', 'b')}</span>
                <p class="dk-ritem__wie">${auteur.map((x) => esc(x)).join('<br>')}</p>
                <div class="dk-ritem__tekst">${tekst}</div>
                <span class="dk-ritem__acties" aria-hidden="true">${onsIcoon('slot')}<span class="${ster ? 'is-ster' : ''}">${onsIcoon('ster')}</span>${onsIcoon('verberg')}${onsIcoon('prullenbak')}</span>
              </div>`;
}

function rapportageLijst(b, kaarten, { plus, acties, tabs = true } = {}) {
  return `
            <div class="ons__kaart dk-rkaart">
              ${tabs ? `<div class="dk-rkop">${rapTabs(b.h, 0)}${plus || blauwPlus(b.h)}</div>` : ''}
              ${rapFilters(b, acties)}
              <div class="dk-ritems">${kaarten.map((k) => rapItem(b, k)).join('')}</div>
            </div>`;
}

// De lijst van een eerdere stap met de titel Rapportages, als achtergrond van een venster of onder een formulier.
const eerdereKaarten = (d, n, test) => {
  for (let i = n - 1; i >= 0; i -= 1) if (test(d.stappen[i].pagina || {})) return d.stappen[i].pagina.kaarten || [];
  return [];
};

function schermRapportages(b, p) {
  const plus = (p.knoppen || []).includes('+') ? b.knop('+', 'dk-blauwplus', b.h.onsIcoon('plus')) : '';
  const acties = (p.knoppen || []).includes('Acties bekijken') ? b.knop('Acties bekijken', 'ons__knop ons__knop--paarsrand') : '';
  return rapportageLijst(b, p.kaarten || [], { plus, acties });
}

// Nieuw - Rapportage (19b). Wordt ook gebruikt door de koppelstap `nieuwe-rapportage`.
function rapportageFormulier(h, { tekst = '', opslaan, ster, velden = '', rijen = '' }) {
  const { esc, onsIcoon } = h;
  return `
            <div class="ons__kaart dk-rkaart dk-rform">
              <div class="dk-rkop">${rapTabs(h, 1, ['SOEP', 'soep', 'g'])}${blauwPlus(h)}</div>
              <div class="dk-rform__kop"><h3 class="dk-rform__titel">Nieuw - Rapportage</h3><span class="dk-rform__rechts">${ster || `<span class="dk-ster" aria-hidden="true">${onsIcoon('ster')} Markeer als belangrijk</span>`}${opslaan}</span></div>
              <span class="dk-tekstvak${tekst ? '' : ' is-leeg'}">${esc(tekst)}</span>
              <p class="dk-schakel" aria-hidden="true"><span class="ons__toggle"></span>Metingenherkenning <span class="ons__info">i</span></p>
              <p class="dk-uitleg">Metingen worden tijdens het schrijven automatisch herkend en als losse metingen toegevoegd. Je hoeft deze dus niet meer apart in te voeren.</p>
              <div class="dk-rrijen">
                ${velden}
                ${rijen || `
                <div class="dk-rrij" aria-hidden="true"><span class="dk-rrij__lbl">Acties voor:</span>${nepSelect(h, '')}</div>
                <div class="dk-rrij" aria-hidden="true"><span class="dk-rrij__lbl">Zichtbaar voor:</span>${nepSelect(h, 'Iedereen (of kies deskundigheden)')}</div>
                <div class="dk-rrij" aria-hidden="true"><span class="dk-rrij__lbl">Koppel aan episodes</span>${nepSelect(h, 'Selecteer episodes')}</div>`}
              </div>
            </div>`;
}

const groenOpslaan = (b, t = 'Opslaan') => b.knop(t, 'ons__knop ons__knop--groen', `${b.h.onsIcoon('vink', 'ons__knop-icoon')} ${b.h.esc(t)}`);
const sterKnop = (b, t) => b.knop(t, `dk-ster${/★/.test(t) ? ' is-aan' : ''}`, `${b.h.onsIcoon('ster')} ${b.h.esc(t.replace(/^★\s*/, ''))}`);

function schermNieuweRapportage(b, p, d, n) {
  const { h } = b;
  const veld = (label) => (p.velden || []).find((v) => v.label === label);
  const keuze = (label, standaard) => {
    const v = veld(label);
    if (!v?.waarde || v.waarde === 'Iedereen') return nepSelect(h, standaard);
    if (label === 'Acties voor') return `<span class="ons__nep-select dk-chips"><span class="dk-chip">${h.onsIcoon('netwerk', 'dk-chip__icoon')}${h.esc(v.waarde)} ×</span></span>`;
    return `<span class="ons__nep-select dk-chips"><span class="dk-chip">${h.esc(v.waarde)} ×</span></span>`;
  };
  const rijen = `
                <div class="dk-rrij" aria-hidden="true"><span class="dk-rrij__lbl">Acties voor:</span>${keuze('Acties voor', '')}</div>
                <div class="dk-rrij" aria-hidden="true"><span class="dk-rrij__lbl">Zichtbaar voor:</span>${keuze('Zichtbaar voor', 'Iedereen (of kies deskundigheden)')}</div>
                <div class="dk-rrij" aria-hidden="true"><span class="dk-rrij__lbl">Koppel aan episodes</span>${keuze('Koppel aan episodes', 'Selecteer episodes')}</div>`;
  const sterTekst = (p.knoppen || []).find((t) => /belangrijk/i.test(t));
  const vorige = eerdereKaarten(d, n, (q) => q.titel === 'Rapportages');
  return `
            ${rapportageFormulier(h, { tekst: veld('Tekst')?.waarde || '', opslaan: (p.knoppen || []).includes('Opslaan') ? groenOpslaan(b) : '', ster: sterTekst ? sterKnop(b, sterTekst) : '', rijen })}
            ${rapportageLijst(stilBouwer(h), vorige, { tabs: false })}`;
}

// Nieuw - Gewicht, Nieuw - Vocht inname en andere metingen, opgebouwd zoals Nieuw - Bloeddruk (19c).
function schermNieuweMeting(b, p) {
  const { h } = b;
  const { esc } = h;
  const naam = (p.titel || '').replace(/^Nieuw - /, '');
  const type = typeVan(naam) || ['', 'doc', 'b'];
  const rij = (v) => {
    if (v.label === 'Opmerking') return `<div class="dk-mrij dk-mrij--groot"><span class="dk-mrij__lbl">Opmerking</span><span class="dk-tekstvak dk-tekstvak--meting${v.waarde ? '' : ' is-leeg'}">${esc(v.waarde)}</span></div>`;
    if (/^(Start)?tijd$/i.test(v.label)) return `<div class="dk-mrij"><span class="dk-mrij__lbl">${esc(v.label)}</span>${invoer(h, v.waarde, 'dk-invoer--tijd')}<span class="dk-mrij__eenheid">vandaag</span></div>`;
    const m = v.label.match(/^(.+) \((.+)\)$/) || [];
    const w = (v.waarde || '').match(/^([\d.,]+)\s*(\D+)$/) || [];
    const label = m[1] || v.label;
    const eenheid = m[2] || w[2] || '';
    return `<div class="dk-mrij"><span class="dk-mrij__lbl">${esc(label)}</span>${invoer(h, w[1] || v.waarde, 'dk-invoer--kort')}<span class="dk-mrij__eenheid">${esc(eenheid)}</span></div>`;
  };
  const velden = p.velden || [];
  const heeftTijd = velden.some((v) => /^(Start)?tijd$/i.test(v.label));
  const sterTekst = (p.knoppen || []).find((t) => /belangrijk/i.test(t));
  return `
            <div class="ons__kaart dk-rkaart dk-rform">
              <div class="dk-rkop">${rapTabs(h, 2, type)}${blauwPlus(h)}</div>
              <div class="dk-rform__kop"><h3 class="dk-rform__titel">${esc(p.titel || '')}</h3><span class="dk-rform__rechts">${sterTekst ? sterKnop(b, sterTekst) : `<span class="dk-ster" aria-hidden="true">${h.onsIcoon('ster')} Markeer als belangrijk</span>`}${(p.knoppen || []).includes('Opslaan') ? groenOpslaan(b) : ''}</span></div>
              <p class="dk-mgroep">${esc(naam)}</p>
              <div class="dk-meting">
                ${velden.map(rij).join('')}
                ${heeftTijd ? '' : `<div class="dk-mrij" aria-hidden="true"><span class="dk-mrij__lbl">Starttijd</span>${invoer(h, '', 'dk-invoer--tijd')}<span class="dk-mrij__eenheid">vandaag</span></div>`}
              </div>
              <div class="dk-rrijen">
                <div class="dk-rrij" aria-hidden="true"><span class="dk-rrij__lbl">Acties voor:</span>${nepSelect(h, '')}</div>
                <div class="dk-rrij" aria-hidden="true"><span class="dk-rrij__lbl">Zichtbaar voor:</span>${nepSelect(h, 'Iedereen (of kies deskundigheden)')}</div>
              </div>
            </div>`;
}

// Venster Rapportagetype toevoegen (18): zeventien tegels met icoon. Typen uit de casus die er niet tussen staan, komen achteraan.
function vensterRapportagetype(b, p) {
  const { h } = b;
  const opties = p.venster.opties || [];
  const extra = opties.filter((o) => !typeVan(o)).map((o) => [o, 'doc', 'b']);
  const tegel = ([naam, icoon, kleur]) => {
    const inhoud = `${typeIcoon(icoon, kleur)}<span>${h.esc(naam)}</span>`;
    return opties.includes(naam) ? b.optie(naam, 'dk-type', inhoud) : `<span class="dk-type" aria-hidden="true">${inhoud}</span>`;
  };
  return `
            <div class="dk-venster dk-venster--blauw" role="presentation">
              <p class="dk-venster__kop">${h.esc(p.venster.titel)}<span aria-hidden="true">${h.onsIcoon('kruis')}</span></p>
              <div class="dk-typen">${[...RAPPORTAGETYPEN, ...extra].map(tegel).join('')}</div>
            </div>`;
}

// ----- Vragenlijsten (12, 12b, 12c) -----
const STATUSSEN = ['Concept', 'Actueel', 'Gearchiveerd'];
function vragenlijstTabel(b, kaarten) {
  const { h } = b;
  const { esc, onsIcoon } = h;
  const kop = (t, icoon) => `<span class="dk-vtabel__kop">${esc(t)}${icoon ? onsIcoon(icoon, 'dk-sorteer') : ''}</span>`;
  const rijen = kaarten.flatMap((k) => (k.regels || []).map((r) => {
    const [titel, door = ''] = r.split(' · ');
    const status = STATUSSEN.includes(k.kop) ? k.kop : 'Actueel';
    return `<div class="dk-vtabel__rij"><span><span class="dk-status dk-status--${status.toLowerCase()}">${esc(status)}</span></span><span>${b.regel(r, 'dk-vtabel__titel', esc(titel))}</span><span class="dk-vtabel__extra">${esc(door.replace(/^gemaakt door /, ''))}</span><span class="dk-vtabel__extra"></span><span class="dk-vtabel__extra"></span><span class="dk-vtabel__extra"></span></div>`;
  })).join('');
  return `
            <div class="dk-vtabel">
              <div class="dk-vtabel__rij dk-vtabel__rij--kop" aria-hidden="true">${kop('Status', 'sorteer')}${kop('Titel', 'sorteer')}<span class="dk-vtabel__extra">${kop('Gemaakt door', 'sorteer')}</span><span class="dk-vtabel__extra">${kop('Aangepast op', 'af')}</span><span class="dk-vtabel__extra">${kop('Gemaakt op', 'sorteer')}</span><span class="dk-vtabel__extra">${kop('Episodes')}</span></div>
              ${rijen}
            </div>`;
}

function schermVragenlijsten(b, p) {
  const { h } = b;
  const tabs = p.tabs?.length ? p.tabs : ['Actueel', 'Archief'];
  const nieuw = (p.knoppen || []).find((t) => /Nieuwe vragenlijst/.test(t));
  return `
            <div class="dk-paginakop"><h3 class="dk-paginatitel">${h.esc(p.titel || 'Vragenlijsten')}</h3>${nieuw ? b.knop(nieuw, 'ons__knop ons__knop--paars ons__knop--groot', `${h.onsIcoon('plus', 'ons__knop-icoon')} ${h.esc(nieuw.replace(/^\+\s*/, ''))}`) : ''}</div>
            <div class="dk-tabs">${tabs.map((t, i) => (p.tabs?.includes(t) ? b.tab(t, `dk-tab${i === 0 ? ' is-actief' : ''}`) : `<span class="dk-tab${i === 0 ? ' is-actief' : ''}" aria-hidden="true">${h.esc(t)}</span>`)).join('')}</div>
            <p class="dk-veldlabel" aria-hidden="true">Zoeken</p>
            <span class="dk-zoekveld" aria-hidden="true">${h.onsIcoon('zoek')}Zoeken op titel</span>
            ${vragenlijstTabel(b, p.kaarten || [])}`;
}

const VRAGENLIJST_UITLEG = { 'Mikzo Kompas® (2025.1)': 'Mikzo Kompas® (2025.1)', 'Omaha inventarisatie': 'Vragenlijst ter inventarisatie van zorgbehoefte volgens Omaha systematiek' };
function vensterVragenlijst(b, p) {
  const { h } = b;
  return `
            <div class="dk-venster dk-venster--wit" role="presentation">
              <p class="dk-venster__kop">${h.esc(p.venster.titel)}<span aria-hidden="true">${h.onsIcoon('kruis')}</span></p>
              <span class="dk-venster__zoek" aria-hidden="true">${h.onsIcoon('zoek')}Zoek vragenlijst</span>
              <div class="dk-vkeuzes">${p.venster.opties.map((o) => b.optie(o, 'dk-vkeuze', `<span class="dk-vkeuze__titel">${h.esc(o)}</span><span class="dk-vkeuze__uitleg">${h.esc(VRAGENLIJST_UITLEG[o] || '')}</span>`)).join('')}</div>
            </div>`;
}

// Eén vragenlijst bekijken (12c): statusbalk, Meer en Wijzig, en de secties.
function schermVragenlijst(b, p, d, n) {
  const { h } = b;
  const { esc, onsIcoon } = h;
  const status = kaartVan(p, 'Status');
  // Zonder kaart Status geldt de status uit de lijst van een eerdere stap.
  const inLijst = eerdereKaarten(d, n, (q) => q.titel === 'Vragenlijsten').find((k) => STATUSSEN.includes(k.kop) && (k.regels || []).some((r) => r.split(' · ')[0] === p.titel));
  const nu = status?.regels?.[0] || inLijst?.kop || 'Concept';
  const knoppen = p.knoppen || [];
  const stappen = STATUSSEN.map((t) => (status?.regels?.includes(t) ? b.regel(t, `dk-stap${t === nu ? ' is-nu' : ''}`) : `<span class="dk-stap${t === nu ? ' is-nu' : ''}" aria-hidden="true">${esc(t)}</span>`)).join('<span class="dk-stap__lijn" aria-hidden="true"></span>');
  const secties = (p.kaarten || []).filter((k) => k.kop !== 'Status');
  return `
            <div class="dk-vkop"><h3 class="dk-vtitel">${esc(p.titel || '')}</h3></div>
            <div class="dk-statusbalk">
              <span class="dk-stappen">${stappen}${knoppen.includes('Volgende status') ? b.knop('Volgende status', 'ons__knop ons__knop--blauwrand') : ''}</span>
              <span class="dk-statusbalk__rechts">${knoppen.includes('Meer') ? b.knop('Meer', 'ons__knop ons__knop--blauwrand', `${onsIcoon('omlaag', 'ons__knop-icoon')} Meer`) : ''}${knoppen.includes('Wijzig') ? b.knop('Wijzig', 'ons__knop ons__knop--lucht', `${onsIcoon('potlood', 'ons__knop-icoon')} Wijzig`) : ''}</span>
            </div>
            ${secties.length ? `
            <div class="ons__kaart dk-vsecties">
              ${secties.map((k) => `
                <div class="dk-vsectie">
                  <p class="dk-vsectie__kop"><span aria-hidden="true">▼</span>${esc(k.kop)}</p>
                  ${(k.regels || []).map((r) => `<p class="dk-vsectie__antwoord">${b.regel(r, 'dk-ovz__regel')}</p>`).join('')}
                </div>`).join('')}
            </div>` : ''}`;
}

// Een vragenlijst invullen. Hiervan is geen schermafdruk: we gebruiken de opmaak van de vragen in 12c en de knop van 19b.
function schermVragenlijstInvullen(b, p) {
  const { h } = b;
  const { esc } = h;
  return `
            <div class="dk-vkop dk-vkop--knop"><h3 class="dk-vtitel">${esc(p.titel || '')}</h3><span class="dk-knoppen">${(p.knoppen || []).map((t) => (t === 'Opslaan' ? groenOpslaan(b) : b.knop(t))).join('')}</span></div>
            <div class="ons__kaart dk-vsecties">
              ${(p.velden || []).map((v) => `
                <div class="dk-vvraag">
                  <p class="dk-vvraag__lbl">${esc(v.label)}</p>
                  <span class="dk-invoer dk-invoer--breed${!v.waarde || isHint(v.waarde) ? ' is-leeg' : ''}">${esc(v.waarde || '')}</span>
                </div>`).join('')}
            </div>`;
}

// ----- Plan (13, 13b, 13c) -----
function planKop(h, { tabs = ['Zorgplan', 'Onvrijwillige zorg(0)'], tab, b, dagoverzicht } = {}) {
  const t = (naam, i) => (b && tab ? b.tab(naam, `dk-tab${i === 0 ? ' is-actief' : ''}`) : `<span class="dk-tab${i === 0 ? ' is-actief' : ''}" aria-hidden="true">${h.esc(naam)}</span>`);
  return `
            <div class="dk-tabs dk-tabs--plan">${tabs.map(t).join('')}</div>
            <div class="dk-plankop"><h3 class="dk-plantitel">Zorgplan</h3>${dagoverzicht || '<span class="ons__knop ons__knop--lucht" aria-hidden="true">Dagoverzicht</span>'}</div>`;
}

function zorgplanKaart(h, { kop, regels = [], knoppen = '', b, status = 'concept' }) {
  return `
            <div class="ons__kaart ons__concept dk-plan dk-plan--${status}">
              <div class="dk-plan__tekst">
                <p class="ons__concept-kop">${h.esc(kop)}</p>
                ${regels.map((r) => `<p>${b ? b.regel(r, 'dk-ovz__regel') : h.esc(r)}</p>`).join('')}
              </div>
              <div class="ons__concept-knoppen"><span class="dk-print" aria-hidden="true">${h.onsIcoon('print')}</span>${knoppen}</div>
            </div>`;
}

const planOnder = (h, aantal = 0) => `
            <p class="dk-rechtslink" aria-hidden="true">Toon alle zorgplannen (1)</p>
            <div class="dk-ovzblok" aria-hidden="true">
              <div class="dk-ovzblok__kop"><h3 class="dk-plantitel">Onvrijwillige zorg</h3><span class="dk-knoppen"><span class="ons__knop ons__knop--hoekig">Tijdlijn</span><span class="ons__knop ons__knop--hoekig">Onvoorziene zorg registreren</span><span class="ons__knop ons__knop--hoekig ons__knop--paars">Nieuwe onvrijwillige zorg</span></span></div>
              <div class="ons__kaart dk-juridisch">Juridische status</div>
              ${aantal ? '' : '<p class="dk-rechtslink">Toon alternatieven voor onvrijwillige zorg</p>'}
            </div>`;

// Een domein van het zorgplan met zijn doelen, zoals "A - Mijn Verhaal en Mijn Wensen" in 13b en de lijst in 13c.
const planDomein = (b, k) => `
            <p class="dk-domein">${b.h.esc(k.kop)}</p>
            <div class="ons__kaart dk-doelen">
              ${(k.regels || []).map((r) => `<div class="dk-doelregel">${/^Nog geen/.test(r) ? `<span class="dk-doelregel__leeg">${b.regel(r, 'dk-ovz__regel')}</span>` : `${b.regel(r, 'dk-doelregel__link')}${b.h.onsIcoon('rechts', 'dk-doelregel__pijl')}`}</div>`).join('')}
            </div>`;

function schermPlan(b, p) {
  const { h } = b;
  const tabs = p.tabs?.length ? p.tabs : ['Zorgplan', 'Onvrijwillige zorg(0)'];
  const statusKaart = (p.kaarten || []).find((k) => /zorgplan$/i.test(k.kop || ''));
  const domeinen = (p.kaarten || []).filter((k) => k !== statusKaart).map((k) => (k.kop === 'Doelen' ? { ...k, kop: 'Doelen' } : k));
  const dag = (p.knoppen || []).includes('Dagoverzicht') ? b.knop('Dagoverzicht', 'ons__knop ons__knop--lucht') : '';
  const telling = (tabs.find((t) => /\(\d+\)/.test(t)) || '').match(/\((\d+)\)/)?.[1];
  return `
            ${planKop(h, { tabs, tab: true, b, dagoverzicht: dag })}
            ${statusKaart ? zorgplanKaart(h, { kop: statusKaart.kop, regels: statusKaart.regels, b, status: /^Concept/.test(statusKaart.kop) ? 'concept' : 'actueel', knoppen: '<span class="ons__knop ons__knop--rand" aria-hidden="true">Wijzigen</span>' }) : ''}
            ${domeinen.map((k) => planDomein(b, k)).join('')}
            ${planOnder(h, Number(telling || 0))}`;
}

// Eén doel uit het zorgplan, met de acties eronder (opmaak van 13b).
function schermPlanDoel(b, p) {
  const { h } = b;
  return `
            <p class="dk-domein">${h.esc(p.titel || '')}</p>
            <div class="ons__kaart dk-doeldetail">
              ${(p.kaarten || []).map((k) => `
                <div class="dk-doeldetail__rij">
                  <p class="dk-doeldetail__kop">${h.esc(k.kop || '')}</p>
                  <div class="dk-doeldetail__regels">${(k.regels || []).map((r) => `<p>${b.regel(r, 'dk-ovz__regel')}</p>`).join('')}</div>
                </div>`).join('')}
            </div>
            <p class="dk-rechtslink" aria-hidden="true">Toon alle zorgplannen (1)</p>`;
}

// ----- Agenda van de cliënt (15) -----
function schermAgenda(b, p) {
  const { h } = b;
  const { esc, onsIcoon } = h;
  const knoppen = p.knoppen || [];
  const item = (r) => {
    const [tijd, wat] = r.includes(' · ') ? r.split(' · ') : ['', r];
    return `
                <div class="dk-agitem">
                  <span class="dk-vinkje" aria-hidden="true"></span>
                  <span class="dk-agitem__tijd">${esc(tijd)}</span>
                  <span class="dk-agitem__wat">${onsIcoon('kalender', 'dk-agitem__icoon')}${b.regel(r, 'dk-agitem__titel', esc(wat))}</span>
                  <span class="dk-agitem__acties" aria-hidden="true">${onsIcoon('potlood')}${onsIcoon('prullenbak')}</span>
                </div>`;
  };
  return `
            <div class="dk-agbalk">
              <span class="dk-week" aria-hidden="true">${onsIcoon('links')}<b>${esc(p.titel || 'Week 41 - 2026')}</b>${onsIcoon('rechts')}</span>
              <span class="ons__nep-select dk-chips dk-agfilter" aria-hidden="true">${['Afspraken', 'Planning', 'Handelingen', 'Signaleringen'].map((t) => `<span class="dk-chip">${t} ×</span>`).join('')}</span>
              <span class="dk-knoppen">${knoppen.includes('Afdrukken') ? b.knop('Afdrukken', 'ons__knop ons__knop--hoekig') : ''}${knoppen.includes('Toevoegen') ? b.knop('Toevoegen', 'ons__knop ons__knop--hoekig ons__knop--paars', `Toevoegen ${onsIcoon('omlaag', 'ons__knop-icoon')}`) : ''}</span>
            </div>
            ${(p.kaarten || []).map((k) => `
              <div class="ons__kaart dk-agdag">
                <p class="dk-agdag__kop">${esc(k.kop || '')}</p>
                ${(k.regels || []).map(item).join('')}
              </div>`).join('')}`;
}

// ----- Klinimetrie (16) -----
function schermKlinimetrie(b, p) {
  const { h } = b;
  const { esc } = h;
  const [vet, ...licht] = (p.titel || 'Klinimetrie - Overzicht').split(' - ');
  const tabs = p.tabs?.length ? p.tabs : ['Klinimetrie', 'Zorgvraagtypering', 'Tijdlijn'];
  const nieuw = (p.knoppen || []).find((t) => /Nieuwe meting/.test(t));
  const leeg = (p.kaarten || []).flatMap((k) => k.regels || []);
  return `
            <div class="dk-kkop"><h3 class="dk-ktitel">${esc(vet)}${licht.length ? `<span> - ${esc(licht.join(' - '))}</span>` : ''}</h3>${nieuw ? b.knop(nieuw, 'ons__knop ons__knop--lucht', `${h.onsIcoon('plus', 'ons__knop-icoon')} ${esc(nieuw.replace(/^\+\s*/, ''))}`) : ''}</div>
            <div class="dk-tabs dk-tabs--klini">${tabs.map((t, i) => b.tab(t, `dk-tab${i === 0 ? ' is-actief' : ''}`)).join('')}</div>
            ${leeg.map((r) => `<p class="dk-kleeg">${b.regel(r, 'dk-ovz__regel')}</p>`).join('') || '<p class="dk-kleeg">Er zijn geen metingen om weer te geven voor deze cliënt.</p>'}`;
}

// ----- Administratie, Algemeen (24-documenten, dat in de map Algemeen toont) -----
const PERSONALIA = [['Naam', null], ['Cliëntnummer', '12345'], ['Burgerlijke staat', 'Onbekend'], ['Nationaliteit', 'NL'], ['Spreektaal', 'Nederlands'], ['Caren status', 'Niet gekoppeld']];
function schermAlgemeen(b, p, d) {
  const { h } = b;
  const { esc, onsIcoon } = h;
  const pers = kaartVan(p, 'Personalia');
  const casusRij = (r) => { const [l, ...w] = r.split(': '); return { l, w: w.join(': '), r }; };
  const eigen = (pers?.regels || []).map(casusRij);
  const rijen = [];
  for (const [l, w] of PERSONALIA) {
    const e = eigen.find((x) => x.l === l);
    rijen.push(e || { l, w: w ?? d.client });
    if (l === 'Naam') eigen.filter((x) => !PERSONALIA.some(([pl]) => pl === x.l)).forEach((x) => rijen.push(x));
  }
  const rij = (x) => `<span class="dk-alg__lbl">${esc(x.l)}</span>${x.r ? b.regel(x.r, 'dk-alg__waarde', esc(x.w)) : `<span class="dk-alg__waarde${x.l === 'Caren status' ? ' dk-oranje' : ''}">${esc(x.w)}</span>`}`;
  const kaart = (kop, body, plus = false) => `<section class="ons__kaart dk-ovz dk-adm"><div class="dk-ovz__kop"><h3 class="dk-kaarttitel dk-kaarttitel--adm">${esc(kop)}</h3>${plus ? `<span class="dk-rondplus" aria-hidden="true">${onsIcoon('pluscirkel')}</span>` : ''}</div>${body}</section>`;
  const leeg = (t) => `<p class="dk-adm__leeg">${esc(t)}</p>`;
  const loc = kaartVan(p, 'Locaties');
  const regelsVan = (k) => (k.regels || []).map((r) => `<p class="dk-ovz__tekst">${b.regel(r, 'dk-ovz__regel')}</p>`).join('');
  return `
            <div class="dk-twee">
              <div class="dk-kolom">
                ${kaart('Personalia', `<div class="dk-alg">${rijen.map(rij).join('')}</div>`)}
                ${kaart('Locaties', loc ? regelsVan(loc) : leeg('Er zijn geen locaties voor deze cliënt.'))}
                ${kaart('Vervoersinstellingen', '<p class="dk-alg__onder"><span class="dk-alg__lbl">Individueel vervoer</span><b>Nee</b></p><p class="dk-alg__onder"><span class="dk-alg__lbl">Gecontracteerd vervoer</span><b>Nee</b></p>')}
                ${kaart('Gebruik dossier- en persoonsgegevens', leeg('Geen dossier- en persoonsgegevens gevonden voor deze cliënt'))}
              </div>
              <div class="dk-kolom">
                ${kaart('Identiteitsgegevens', leeg('Geen identiteitsgegevens beschikbaar voor deze cliënt.'))}
                ${kaart('Adressen', leeg('Er zijn geen adressen voor deze cliënt.'), true)}
                ${kaart('Zorgstatus', leeg('Geen actieve zorgopname'), true)}
                ${kaart('Gekoppelde passen', leeg('Er zijn geen gekoppelde passen voor deze cliënt.'), true)}
              </div>
            </div>`;
}

// ----- Nieuwe episode. Velden en volgorde zoals de koppelstap `nieuwe-episode`. -----
function episodeFormulier(h, { client, titel = '', datum = '', eind = '', hoofddoel = '', opslaan = '', extra = '' }) {
  const { esc } = h;
  return `
            ${client}
            <div class="dk-vkop dk-vkop--knop"><h3 class="dk-paginatitel">Nieuwe episode</h3>${opslaan}</div>
            <div class="ons__kaart ons__formulier dk-epform">
              <div class="ons__rij3">
                <div class="ons__veld"><span class="ons__lbl">Titel<b>*</b></span><span class="ons__titelveld"><span class="ons__invoer ons__invoer--kort">${esc(titel)}</span><span class="ons__ster"><span aria-hidden="true">★</span> Markeer als belangrijk</span></span></div>
              </div>
              <div class="ons__rij3">
                <div class="ons__veld"><span class="ons__lbl">Startdatum<b>*</b></span><span class="ons__invoer ons__datum">${esc(datum || 'DD-MM-YYYY')}</span></div>
                <div class="ons__veld"><span class="ons__lbl">Einddatum</span><span class="ons__invoer ons__datum${eind ? '' : ' is-leeg'}">${esc(eind || 'DD-MM-YYYY')}</span></div>
                <div class="ons__veld"><span class="ons__lbl">Evaluatiedatum</span><span class="ons__invoer ons__datum is-leeg">DD-MM-YYYY</span></div>
              </div>
              <div class="ons__veld"><span class="ons__lbl">Diagnose</span><span class="dk-koppel" aria-hidden="true">${h.onsIcoon('plus', 'ons__knop-icoon')} Koppel diagnoses</span></div>
              <div class="ons__rij2">
                <div class="ons__veld"><span class="ons__lbl">Hoofddoel</span><span class="ons__invoer ons__tekstvak${hoofddoel ? '' : ' is-leeg'}">${esc(hoofddoel || 'Optioneel')}</span></div>
                <div>
                  <div class="ons__veld"><span class="ons__lbl">Relevant voor</span>${nepSelect(h, h.ONS_LIJST)}</div>
                  <div class="ons__veld"><span class="ons__lbl">Zichtbaar voor</span>${nepSelect(h, h.ONS_LIJST)}</div>
                </div>
              </div>
            </div>
            ${extra}`;
}

function schermNieuweEpisode(b, p, d) {
  const w = (l) => (p.velden || []).find((v) => v.label === l)?.waarde || '';
  return episodeFormulier(b.h, { client: '', titel: w('Titel'), datum: w('Startdatum'), eind: w('Einddatum'), hoofddoel: w('Hoofddoel'), opslaan: (p.knoppen || []).includes('Opslaan') ? groenOpslaan(b) : '' });
}

// ----- Geen toegang en escaleren. Hiervan is geen schermafdruk: opgebouwd met de kaarten en knoppen van Nedap ONS. -----
function schermGeenToegang(b, p) {
  const { h } = b;
  const k = (p.kaarten || [])[0] || {};
  return `
            <div class="ons__kaart dk-toegang">
              ${h.onsIcoon('slot', 'dk-toegang__slot')}
              <h3 class="dk-paginatitel">${h.esc(k.kop || p.titel || '')}</h3>
              ${(k.regels || []).map((r) => `<p>${b.regel(r, 'dk-ovz__regel')}</p>`).join('')}
              <span class="dk-knoppen">${(p.knoppen || []).map((t) => b.knop(t, 'ons__knop ons__knop--paars ons__knop--groot')).join('')}</span>
            </div>`;
}

function vensterEscaleren(b, p) {
  const { h } = b;
  return `
            <div class="dk-venster dk-venster--wit dk-venster--smal" role="presentation">
              <p class="dk-venster__kop">${h.esc(p.titel || '')}<span aria-hidden="true">${h.onsIcoon('kruis')}</span></p>
              ${(p.velden || []).map((v) => `<p class="dk-veldlabel">${h.esc(v.label)}<b>*</b></p><span class="dk-tekstvak dk-tekstvak--klein">${h.esc(v.waarde || '')}</span>`).join('')}
              <span class="dk-venster__knoppen">${(p.knoppen || []).map((t) => b.knop(t, t === 'Annuleren' ? 'ons__knop ons__knop--hoekig' : 'ons__knop ons__knop--hoekig ons__knop--paars')).join('')}</span>
            </div>`;
}

// Welk scherm van Nedap ONS hoort bij een stap? Een casus mag het zelf zeggen met `pagina.scherm`.
export function schermSoort(s) {
  const p = s.pagina || {};
  if (p.scherm) return p.scherm;
  const t = p.titel || '';
  const v = p.venster?.titel || '';
  if (v === 'Rapportagetype toevoegen') return 'rapportagetype';
  if (/^Maak een nieuwe vragenlijst/.test(v)) return 'vragenlijst-kiezen';
  if (t === 'Geen toegang') return 'geen-toegang';
  if (t === 'Escaleren') return 'escaleren';
  if (t === 'Nieuwe episode') return 'nieuwe-episode';
  if (t === 'Nieuw - Rapportage') return 'nieuwe-rapportage';
  if (/^Nieuw - /.test(t)) return 'nieuwe-meting';
  if (t === 'Rapportages') return 'rapportages';
  if (s.menu === 'Vragenlijsten') return t === 'Vragenlijsten' ? 'vragenlijsten' : p.velden?.length ? 'vragenlijst-invullen' : 'vragenlijst';
  if (s.menu === 'Plan') return p.tabs?.length ? 'plan' : 'plan-doel';
  if (s.menu === 'Agenda') return 'agenda';
  if (s.menu === 'Klinimetrie') return 'klinimetrie';
  if (s.menu === 'Algemeen') return 'algemeen';
  return 'overzicht';
}

// Per scherm: de inhoud, het venster eroverheen, de kruimel boven de cliëntkop en welk menu-item actief is.
const SCHERMEN = {
  overzicht: { inhoud: schermOverzicht },
  rapportages: { inhoud: schermRapportages },
  rapportagetype: { venster: vensterRapportagetype, achter: (b, p, d, n) => rapportageLijst(stilBouwer(b.h), eerdereKaarten(d, n, (q) => q.titel === 'Rapportages')), menu: 'Rapportages' },
  'nieuwe-rapportage': { inhoud: schermNieuweRapportage, menu: 'Rapportages' },
  'nieuwe-meting': { inhoud: schermNieuweMeting, menu: 'Rapportages' },
  vragenlijsten: { inhoud: schermVragenlijsten },
  'vragenlijst-kiezen': { venster: vensterVragenlijst, achter: (b, p, d, n) => schermVragenlijsten(stilBouwer(b.h), { kaarten: eerdereKaarten(d, n, (q) => q.titel === 'Vragenlijsten'), knoppen: ['+ Nieuwe vragenlijst'] }), menu: 'Vragenlijsten' },
  vragenlijst: { inhoud: schermVragenlijst, kruimel: 'Vragenlijsten - Overzicht' },
  'vragenlijst-invullen': { inhoud: schermVragenlijstInvullen, kruimel: 'Vragenlijsten - Overzicht' },
  plan: { inhoud: schermPlan },
  'plan-doel': { inhoud: schermPlanDoel, kruimel: 'Zorgplan - Overzicht' },
  agenda: { inhoud: schermAgenda },
  klinimetrie: { inhoud: schermKlinimetrie },
  algemeen: { inhoud: schermAlgemeen },
  'nieuwe-episode': { inhoud: schermNieuweEpisode, kruimel: 'Episodes – Overzicht', menu: 'Overzicht' },
  'geen-toegang': { inhoud: schermGeenToegang, client: false },
  escaleren: { venster: vensterEscaleren, achter: (b, p) => schermGeenToegang(stilBouwer(b.h), { titel: 'Geen toegang', kaarten: [{ kop: 'Je hebt geen toegang tot dit dossier' }], knoppen: ['Escaleren'] }), client: false },
};

// Waarschuwingen staan in Nedap ONS ook als label in de cliëntkop. We nemen ze uit de kaart Waarschuwingen van de casus.
const labelsVan = (d) => d.labels || [...new Set(d.stappen.flatMap((s) => (s.pagina?.kaarten || []).filter((k) => k.kop === 'Waarschuwingen').flatMap((k) => k.regels || [])).filter((r) => !/^Geen /.test(r)))];

// Het kader van elk ONS-scherm: bovenbalk, menu links en de inhoud in een kolom zoals in Nedap ONS.
function onsFrame(h, { menu, menuHtml, inhoud, venster = '', klasse = '', label = 'Nedap ONS', na = '' }) {
  const module = h.ONS_ADMIN.includes(menu) ? 'Administratie' : 'Dossier';
  return `
      <div class="ons ${klasse}${venster ? ' ons--venster' : ''}" role="group" aria-label="${h.esc(label)}">
        ${h.onsBovenbalk(module)}
        <div class="ons__lijf">
          ${menuHtml}
          <div class="ons__inhoud"><div class="ons__kolom">${inhoud}</div>${venster}</div>
        </div>
        ${na}
      </div>`;
}

export const onsDelen = { onsFrame, rapportageFormulier, rapportageLijst, episodeFormulier, zorgplanKaart, planKop, planOnder, schermSoort, labelsVan };

function onsMenuMetDoel(h, ctx, actief, doel) {
  const item = ([naam, icoon], aan, admin) => {
    const inhoud = `${h.onsIcoon(icoon)}<span>${h.esc(naam)}</span>`;
    const raak = !admin || naam !== 'Overzicht' ? isDoel(doel, 'menu', naam) : false;
    const magKlik = !(admin && naam === 'Overzicht');
    if (ctx.modus === 'zelf' || raak) return `<li>${onderdeel(h, ctx, { inhoud, klasse: `ons__menu-item${aan && !raak ? ' is-actief' : ''}`, label: naam, doel: raak && magKlik })}</li>`;
    return `<li class="ons__menu-item${aan ? ' is-actief' : ''}" aria-hidden="true">${inhoud}</li>`;
  };
  return h.onsMenu(actief, { item, verborgen: false });
}

function onsScherm(h, ctx, d, s) {
  const n = d.stappen.indexOf(s);
  const soort = schermSoort(s);
  const def = SCHERMEN[soort] || SCHERMEN.overzicht;
  const p = s.pagina || {};
  const b = bouwers(h, ctx, s.doel);
  const menu = s.menu || def.menu || 'Overzicht';
  const client = def.client === false || !d.client ? '' : h.onsClient({ naam: d.client, labels: labelsVan(d), kruimel: def.kruimel });
  const inhoud = def.venster ? def.achter(b, p, d, n) : def.inhoud(b, p, d, n);
  const venster = def.venster ? def.venster(b, p, d, n) : '';
  return onsFrame(h, {
    menu, klasse: `ons--doorklik ons--${soort}${ctx.modus === 'zelf' ? ' ons--zelf' : ''}`,
    menuHtml: onsMenuMetDoel(h, ctx, menu, s.doel),
    inhoud: `${client}${inhoud}${rest(b, p)}`,
    venster,
  });
}

// Het neutrale scherm van een app op de telefoon.
function telPagina(h, ctx, p = {}, doel) {
  const { esc } = h;
  const knop = (t) => onderdeel(h, ctx, { inhoud: esc(t), klasse: 'tel__knop', label: isDoel(doel, 'knop', t) ? (doel.label || t) : t, doel: isDoel(doel, 'knop', t), extra: ' dk-stil' });
  const tab = (t, j) => {
    const raak = isDoel(doel, 'tab', t);
    if (ctx.modus === 'zelf' || raak) return `<span>${onderdeel(h, ctx, { inhoud: esc(t), klasse: 'dk-tab', label: t, doel: raak })}</span>`;
    return `<span class="${j === 0 && !doel?.tab ? 'is-actief' : ''}">${esc(t)}</span>`;
  };
  const regel = (r) => {
    const raak = isDoel(doel, 'regel', r);
    if (ctx.modus === 'zelf' || raak) return `<li>${onderdeel(h, ctx, { inhoud: esc(r), klasse: 'dk-regel', label: r, doel: raak })}</li>`;
    return `<li>${esc(r)}</li>`;
  };
  const optie = (o) => onderdeel(h, ctx, { inhoud: esc(o), klasse: 'dk-optie', label: o, doel: isDoel(doel, 'optie', o) });
  const veld = (v) => `<div class="ons__veld"><span class="ons__lbl">${esc(v.label)}</span><span class="ons__invoer${v.waarde ? '' : ' is-leeg'}">${esc(v.waarde || 'Leeg')}</span></div>`;
  return `
            ${p.tabs?.length ? `<div class="ons__tabs">${p.tabs.map(tab).join('')}</div>` : ''}
            ${p.titel || p.knoppen?.length ? `<div class="ons__kopregel">${p.titel ? `<h3 class="ons__titel">${esc(p.titel)}</h3>` : '<span></span>'}<span class="dk-knoppen">${(p.knoppen || []).map(knop).join('')}</span></div>` : ''}
            ${(p.kaarten || []).map((k) => `
              <div class="ons__kaart dk-kaart">
                ${k.kop ? `<p class="dk-kaart__kop">${esc(k.kop)}</p>` : ''}
                ${k.regels?.length ? `<ul class="dk-regels">${k.regels.map(regel).join('')}</ul>` : ''}
              </div>`).join('')}
            ${p.velden?.length ? `<div class="ons__kaart ons__formulier">${p.velden.map(veld).join('')}</div>` : ''}
            ${p.venster ? `
              <div class="dk-venster dk-venster--tel">
                <p class="dk-venster__kop">${esc(p.venster.titel)}</p>
                <div class="dk-venster__opties">${p.venster.opties.map(optie).join('')}</div>
              </div>` : ''}`;
}

function telefoonScherm(h, ctx, d, s) {
  return `
      <div class="tel${ctx.modus === 'zelf' ? ' tel--zelf' : ''}" role="group" aria-label="${h.esc(d.app || 'App')}">
        <div class="tel__rand">
          <div class="tel__balk"><span>${h.esc(s.pagina?.balk || d.app || '')}</span></div>
          <div class="tel__inhoud">${telPagina(h, ctx, s.pagina, s.doel)}</div>
        </div>
      </div>`;
}

export const STANDEN = [['kijk', 'Kijk'], ['mee', 'Doe mee'], ['zelf', 'Doe zelf']];

function standKeuze(h, stand) {
  return `
      <div class="standen" role="group" aria-label="Hoe wil je oefenen?">
        ${STANDEN.map(([id, naam], i) => `<button type="button" class="stand${stand === id ? ' is-nu' : ''}" data-actie="stand" data-stand="${id}" aria-pressed="${stand === id}"><span class="stand__nr" aria-hidden="true">${i + 1}</span>${naam}</button>`).join('')}
      </div>`;
}

export const tijdTekst = (sec) => {
  const s = Math.max(0, Math.round(sec));
  return s < 60 ? `${s} sec` : `${Math.floor(s / 60)} min ${String(s % 60).padStart(2, '0')} sec`;
};

const keer = (n, een, meer) => `${n} ${n === 1 ? een : meer}`;

function viewZelfKlaar(h, d, casus, plekNaam) {
  const { esc, ICOON } = h;
  const z = casus.zelf;
  const sec = (z.eind - z.start) / 1000;
  const foutloos = z.fouten === 0 && z.hints === 0;
  return `
    <article class="werkpaneel doorklik meting">
      <p class="bovenregel bovenregel--merk">Doe zelf in ${esc(plekNaam)}</p>
      <h2>${foutloos ? 'Helemaal zelf gedaan' : 'Je bent er doorheen'}</h2>
      <dl class="meting__cijfers">
        <div><dt>Tijd</dt><dd>${tijdTekst(sec)}</dd></div>
        <div><dt>Mis geklikt</dt><dd>${keer(z.fouten, 'keer', 'keer')}</dd></div>
        <div><dt>Hulp gevraagd</dt><dd>${keer(z.hints, 'keer', 'keer')}</dd></div>
      </dl>
      <p>Je opleider ziet deze uitkomst.</p>
      <div class="knoppen">
        <button type="button" class="btn btn--rand" data-actie="stand" data-stand="zelf">Doe het nog een keer</button>
        <button type="button" class="btn btn--actie" data-actie="doorklik-klaar">Naar de situatie ${ICOON.pijl}</button>
      </div>
    </article>`;
}

export function viewDoorklik(c, casus, h, extra = '') {
  const { esc, ICOON } = h;
  const d = c.doorklik;
  const stand = casus.stand || 'mee';
  const n = casus.klik || 0;
  const plekNaam = d.plek === 'telefoon' ? (d.app || 'de app') : 'Nedap ONS';
  const ctx = { modus: stand, hint: casus.zelf?.hintNu };
  const kop = standKeuze(h, stand);

  if (n >= d.stappen.length) {
    if (stand === 'zelf' && casus.zelf?.eind) return `${kop}${viewZelfKlaar(h, d, casus, plekNaam)}`;
    return `${kop}
    <article class="werkpaneel doorklik">
      <p class="bovenregel bovenregel--merk">${stand === 'kijk' ? 'Kijk' : 'Doe mee'} in ${esc(plekNaam)}</p>
      <h2>${stand === 'kijk' ? 'Zo gaat het' : 'Samen doorklikken afgerond'}</h2>
      ${(Array.isArray(d.klaar) ? d.klaar : [d.klaar]).map((t) => `<p>${esc(t)}</p>`).join('')}
      <p>${stand === 'kijk' ? 'Wat je moet aanklikken licht op.' : 'Lukt het niet, dan vraag je om een hint.'}</p>
      ${extra}
      <div class="knoppen">
        ${stand === 'kijk'
          ? `<button type="button" class="btn btn--actie" data-actie="stand" data-stand="mee">Nu doe ik mee ${ICOON.pijl}</button>`
          : `<button type="button" class="btn btn--rand" data-actie="doorklik-klaar">Sla over, naar de situatie</button>
        <button type="button" class="btn btn--actie" data-actie="stand" data-stand="zelf">Nu zelf, zonder hulp ${ICOON.pijl}</button>`}
      </div>
    </article>`;
  }

  const s = d.stappen[n];
  const scherm = d.plek === 'telefoon' ? telefoonScherm(h, ctx, d, s) : onsScherm(h, ctx, d, s);
  if (stand === 'zelf') {
    const z = casus.zelf || {};
    return `${kop}
    <article class="werkpaneel doorklik">
      <p class="bovenregel bovenregel--merk">Doe zelf in ${esc(plekNaam)}, opdracht ${n + 1} van ${d.stappen.length}</p>
      <h2>${esc(s.opdracht || s.doe)}</h2>
      ${scherm}
      <p class="doorklik__fout" role="status">${z.foutNu ? `${ICOON.let}<span>Dat is het niet.</span>` : ''}</p>
      <div class="knoppen">
        <button type="button" class="btn btn--stil" data-actie="zelf-hint" ${z.hintNu ? 'disabled' : ''}>${ICOON.lamp} ${z.hintNu ? 'Het licht nu op' : 'Geef een hint'}</button>
      </div>
    </article>`;
  }
  if (stand === 'kijk') {
    return `${kop}
    <article class="werkpaneel doorklik">
      <p class="bovenregel bovenregel--merk">Kijk in ${esc(plekNaam)}, stap ${n + 1} van ${d.stappen.length}</p>
      <h2>${esc(s.doe)}</h2>
      <p class="doorklik__zeg">${esc(s.zeg)}</p>
      ${scherm}
      <div class="knoppen">
        ${n > 0 ? `<button type="button" class="btn btn--stil" data-actie="doorklik-terug">${ICOON.terug} Vorige</button>` : ''}
        <button type="button" class="btn btn--rand" data-actie="kijk-speel" aria-pressed="${!!casus.speelt}">${casus.speelt ? 'Pauze' : `${ICOON.speel} Speel af`}</button>
        <button type="button" class="btn btn--actie" data-actie="doorklik-verder">Volgende ${ICOON.pijl}</button>
      </div>
    </article>`;
  }
  return `${kop}
    <article class="werkpaneel doorklik">
      <p class="bovenregel bovenregel--merk">Doe mee in ${esc(plekNaam)}, stap ${n + 1} van ${d.stappen.length}</p>
      <h2>${esc(s.doe)}</h2>
      <p class="doorklik__zeg">${esc(s.zeg)}</p>
      ${n === 0 ? extra : ''}
      ${scherm}
      <p class="doorklik__hint">${ICOON.lamp}<span>Klik op het onderdeel dat oplicht.</span></p>
      ${n > 0 ? `<div class="knoppen"><button type="button" class="btn btn--stil" data-actie="doorklik-terug">${ICOON.terug} Stap terug</button></div>` : ''}
    </article>`;
}

// Op een telefoon is het menu van ONS een rij om opzij te schuiven. Schuif het doel in beeld.
export function richtDoel(root) {
  const doel = root.querySelector('.ons--doorklik .ons__menu .dk-doel');
  const menu = doel?.closest('.ons__menu');
  if (!menu || menu.scrollWidth <= menu.clientWidth) return;
  menu.scrollLeft = Math.max(0, doel.offsetLeft - (menu.clientWidth - doel.offsetWidth) / 2);
}
