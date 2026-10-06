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

const isDoel = (doel, soort, tekst) => doel && doel[soort] !== undefined && doel[soort] === tekst;

function doelKnop(h, inhoud, klasse, label, doel) {
  return `<button type="button" class="${klasse} dk-doel" data-actie="doorklik-verder" aria-label="${h.esc(doel?.label || label)}">${inhoud}</button>`;
}

function onsMenuMetDoel(h, actief, doel) {
  const item = ([naam, icoon], magDoel = true) => {
    const inhoud = `${h.onsIcoon(icoon)}${h.esc(naam)}`;
    if (magDoel && isDoel(doel, 'menu', naam)) return `<li>${doelKnop(h, inhoud, 'ons__menu-item', naam)}</li>`;
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

function pagina(h, p = {}, doel, plek) {
  const { esc } = h;
  const knop = (t) => (isDoel(doel, 'knop', t)
    ? doelKnop(h, esc(t), plek === 'telefoon' ? 'tel__knop' : `ons__knop ons__knop--blauw${t === '+' ? ' dk-plus' : ''}`, t, doel)
    : `<span class="${plek === 'telefoon' ? 'tel__knop' : `ons__knop ons__knop--rand${t === '+' ? ' dk-plus' : ''}`} dk-stil" aria-hidden="true">${esc(t)}</span>`);
  const tab = (t, j) => (isDoel(doel, 'tab', t)
    ? `<span>${doelKnop(h, esc(t), 'dk-tab', t)}</span>`
    : `<span class="${j === 0 && !doel?.tab ? 'is-actief' : ''}">${esc(t)}</span>`);
  const regel = (r) => (isDoel(doel, 'regel', r)
    ? `<li>${doelKnop(h, esc(r), 'dk-regel', r)}</li>`
    : `<li>${esc(r)}</li>`);
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
                <div class="dk-venster__opties">${p.venster.opties.map((o) => (isDoel(doel, 'optie', o)
                  ? doelKnop(h, esc(o), 'dk-optie', o)
                  : `<span class="dk-optie" aria-hidden="true">${esc(o)}</span>`)).join('')}</div>
              </div>` : ''}`;
}

function onsScherm(h, d, s) {
  return `
      <div class="ons ons--doorklik" role="group" aria-label="Nedap ONS">
        ${h.onsBovenbalk()}
        <div class="ons__lijf">
          ${onsMenuMetDoel(h, s.menu, s.doel)}
          <div class="ons__inhoud">
            ${d.client ? h.onsClient({ naam: d.client, labels: d.labels }) : ''}
            ${pagina(h, s.pagina, s.doel, 'ons')}
          </div>
        </div>
      </div>`;
}

function telefoonScherm(h, d, s) {
  return `
      <div class="tel" role="group" aria-label="${h.esc(d.app || 'App')}">
        <div class="tel__rand">
          <div class="tel__balk"><span>${h.esc(s.pagina?.balk || d.app || '')}</span></div>
          <div class="tel__inhoud">${pagina(h, s.pagina, s.doel, 'telefoon')}</div>
        </div>
      </div>`;
}

export function viewDoorklik(c, casus, h) {
  const { esc, ICOON } = h;
  const d = c.doorklik;
  const n = casus.klik || 0;
  const plekNaam = d.plek === 'telefoon' ? (d.app || 'de app') : 'Nedap ONS';
  if (n >= d.stappen.length) {
    return `
    <article class="werkpaneel doorklik">
      <p class="bovenregel bovenregel--merk">Samen in ${esc(plekNaam)} · klaar</p>
      <h2>Je kent nu de weg</h2>
      ${(Array.isArray(d.klaar) ? d.klaar : [d.klaar]).map((t) => `<p>${esc(t)}</p>`).join('')}
      <p>Nu ben jij aan de beurt. Je krijgt een situatie uit een dienst, en jij beslist wat je doet.</p>
      <div class="knoppen">
        <button type="button" class="btn btn--rand" data-actie="doorklik-opnieuw">Klik nog een keer door</button>
        <button type="button" class="btn btn--actie" data-actie="doorklik-klaar">Naar de situatie ${ICOON.pijl}</button>
      </div>
    </article>`;
  }
  const s = d.stappen[n];
  return `
    <article class="werkpaneel doorklik">
      <p class="bovenregel bovenregel--merk">Samen in ${esc(plekNaam)} · stap ${n + 1} van ${d.stappen.length}</p>
      <h2>${esc(s.doe)}</h2>
      <p class="doorklik__zeg">${esc(s.zeg)}</p>
      ${d.plek === 'telefoon' ? telefoonScherm(h, d, s) : onsScherm(h, d, s)}
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
