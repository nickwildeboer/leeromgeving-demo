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
      <p class="bovenregel bovenregel--merk">Uitleg · ${i + 1} van ${c.les.length}</p>
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
  if (modus === 'kijk') return `<span class="${klasse} dk-doel dk-kijk" ${aria}>${inhoud}</span>`;
  return `<button type="button" class="${klasse} dk-doel" data-actie="doorklik-verder" ${aria}>${inhoud}</button>`;
}

function onsMenuMetDoel(h, ctx, actief, doel) {
  const item = ([naam, icoon], magDoel = true) => {
    const inhoud = `${h.onsIcoon(icoon)}${h.esc(naam)}`;
    const raak = magDoel && isDoel(doel, 'menu', naam);
    if (ctx.modus === 'zelf' || raak) return `<li>${onderdeel(h, ctx, { inhoud, klasse: `ons__menu-item${!raak && naam === actief && magDoel ? ' is-actief' : ''}`, label: naam, doel: raak })}</li>`;
    return `<li class="ons__menu-item${magDoel && naam === actief ? ' is-actief' : ''}" aria-hidden="true">${inhoud}</li>`;
  };
  return `
          <nav class="ons__menu">
            <p class="ons__terug" aria-hidden="true">← Cliënt zoeken</p>
            <p class="ons__groep" aria-hidden="true">Dossier</p>
            <ul>${h.ONS_MENU.map((m) => item(m)).join('')}</ul>
            <p class="ons__groep" aria-hidden="true">Administratie</p>
            <ul>${h.ONS_MENU_ADMIN.map((m) => item(m, m[0] !== 'Overzicht')).join('')}</ul>
            <p class="ons__inklappen" aria-hidden="true">${h.onsIcoon('inklappen')}Inklappen</p>
            <p class="ons__nedap" aria-hidden="true">☆ nedap</p>
          </nav>`;
}

function pagina(h, ctx, p = {}, doel, plek) {
  const { esc } = h;
  const knop = (t) => {
    const raak = isDoel(doel, 'knop', t);
    const plus = t === '+' ? ' dk-plus' : '';
    const klasse = plek === 'telefoon' ? 'tel__knop' : `ons__knop ${raak && ctx.modus !== 'zelf' ? 'ons__knop--blauw' : 'ons__knop--rand'}${plus}`;
    return onderdeel(h, ctx, { inhoud: esc(t), klasse, label: raak ? (doel.label || t) : t, doel: raak, extra: ' dk-stil' });
  };
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
              <div class="dk-venster">
                <p class="dk-venster__kop">${esc(p.venster.titel)}</p>
                <div class="dk-venster__opties">${p.venster.opties.map(optie).join('')}</div>
              </div>` : ''}`;
}

function onsScherm(h, ctx, d, s) {
  return `
      <div class="ons ons--doorklik${ctx.modus === 'zelf' ? ' ons--zelf' : ''}" role="group" aria-label="Nedap ONS">
        ${h.onsBovenbalk()}
        <div class="ons__lijf">
          ${onsMenuMetDoel(h, ctx, s.menu, s.doel)}
          <div class="ons__inhoud">
            ${d.client ? h.onsClient({ naam: d.client, labels: d.labels }) : ''}
            ${pagina(h, ctx, s.pagina, s.doel, 'ons')}
          </div>
        </div>
      </div>`;
}

function telefoonScherm(h, ctx, d, s) {
  return `
      <div class="tel${ctx.modus === 'zelf' ? ' tel--zelf' : ''}" role="group" aria-label="${h.esc(d.app || 'App')}">
        <div class="tel__rand">
          <div class="tel__balk"><span>${h.esc(s.pagina?.balk || d.app || '')}</span></div>
          <div class="tel__inhoud">${pagina(h, ctx, s.pagina, s.doel, 'telefoon')}</div>
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
      <p class="bovenregel bovenregel--merk">Doe zelf in ${esc(plekNaam)} · klaar</p>
      <h2>${foutloos ? 'Helemaal zelf gedaan' : 'Je bent er doorheen'}</h2>
      <dl class="meting__cijfers">
        <div><dt>Tijd</dt><dd>${tijdTekst(sec)}</dd></div>
        <div><dt>Mis geklikt</dt><dd>${keer(z.fouten, 'keer', 'keer')}</dd></div>
        <div><dt>Hulp gevraagd</dt><dd>${keer(z.hints, 'keer', 'keer')}</dd></div>
      </dl>
      <p>${foutloos ? 'Je vond de weg zonder hulp. Zo doe je het straks ook in je dienst.' : 'Klik nog een keer zelf door. De tweede keer gaat het vaak sneller.'} Je opleider ziet deze uitkomst ook.</p>
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
      <p class="bovenregel bovenregel--merk">${stand === 'kijk' ? 'Kijk' : 'Doe mee'} in ${esc(plekNaam)} · klaar</p>
      <h2>${stand === 'kijk' ? 'Zo gaat het' : 'Je kent nu de weg'}</h2>
      ${(Array.isArray(d.klaar) ? d.klaar : [d.klaar]).map((t) => `<p>${esc(t)}</p>`).join('')}
      <p>${stand === 'kijk' ? 'Nu klik jij zelf mee. Wat je moet aanklikken licht op.' : 'Doe het nu zelf, zonder dat er iets oplicht. Lukt het niet, dan vraag je om een hint.'}</p>
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
      <p class="bovenregel bovenregel--merk">Doe zelf in ${esc(plekNaam)} · opdracht ${n + 1} van ${d.stappen.length}</p>
      <h2>${esc(s.opdracht || s.doe)}</h2>
      ${scherm}
      <p class="doorklik__fout" role="status">${z.foutNu ? `${ICOON.let}<span>Dat is het niet. Kijk nog eens goed.</span>` : ''}</p>
      <div class="knoppen">
        <button type="button" class="btn btn--stil" data-actie="zelf-hint" ${z.hintNu ? 'disabled' : ''}>${ICOON.lamp} ${z.hintNu ? 'Het licht nu op' : 'Geef een hint'}</button>
      </div>
    </article>`;
  }
  if (stand === 'kijk') {
    return `${kop}
    <article class="werkpaneel doorklik">
      <p class="bovenregel bovenregel--merk">Kijk in ${esc(plekNaam)} · stap ${n + 1} van ${d.stappen.length}</p>
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
      <p class="bovenregel bovenregel--merk">Doe mee in ${esc(plekNaam)} · stap ${n + 1} van ${d.stappen.length}</p>
      <h2>${esc(s.doe)}</h2>
      <p class="doorklik__zeg">${esc(s.zeg)}</p>
      ${n === 0 ? extra : ''}
      ${scherm}
      <p class="doorklik__hint">${ICOON.lamp}<span>Klik op het onderdeel dat oplicht in het scherm.</span></p>
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
