import { viewUitleg, mountUitleg } from './uitleg.js';
import { beginMaatwerk, viewMaatwerk, mountMaatwerk, maatwerkBronnen, metMaatwerk } from './maatwerk.js';
import { ORGANISATIE, PROFIELEN, DELEN, MODULES, MEDEWERKER, COLLEGAS, TIPS, TOEWIJZING, HUISSTIJL_VOORBEELDEN } from './data.js';
import { NORM, maakToetsPoging } from './casussen-norm.js';
import { bereken, cssVariabelen, STANDAARD, VERPLICHT, OPTIONEEL, LABELS, isHex, contrast } from './theme.js';
import { laad, zet, nu, opnieuw } from './state.js';
import { startRondleiding, stopRondleiding } from './tour.js';
import { mountVraag, mountBronnen, resetVraag } from './vraag.js';
import { HANDBOEK } from './handboek.js';
import { schermKaart, geraakt } from './schermkaart.js';
import { viewLes, viewDoorklik, beginStap, fasen, richtDoel, tijdTekst } from './doorklik.js';
import { beloonAfronding, toonWachtendMoment, badgeBlok, deelBadge, certificaatPagina, aantalBadges, badgeTeller, delenMetModules } from './beloning.js';

const DEMO_VANDAAG = '2026-10-06';
const CASUSSEN = Object.create(null);
const app = document.getElementById('app');
const melding = document.getElementById('melding');
let casusIndexPromise = null;
let casusIndexGeladen = false;
let oefenenModule = null;
let oefenenModulePromise = null;
let renderGeneratie = 0;
const PRESENTATIE = new URLSearchParams(window.location.search).get('presentatie') === '1';

// ---------- hulpjes ----------

const esc = (t) => String(t ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const ICOON = {
  vink: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7"/></svg>',
  pijl: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>',
  terug: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H6M11 6l-6 6 6 6"/></svg>',
  speel: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5z"/></svg>',
  lamp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2V16h5.2v-.2c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/></svg>',
  vraag: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9.6 9.3a2.5 2.5 0 1 1 3.3 2.4c-.6.3-.9.8-.9 1.4v.6M12 16.8v.2"/></svg>',
  slot: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
  mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="M4 7l8 6 8-6"/></svg>',
  gebouw: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V8l8-4 8 4v12M9 20v-5h6v5M3 20h18"/></svg>',
  boek: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5zM4 20.5A2.5 2.5 0 0 0 6.5 21H20"/></svg>',
  mensen: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3.2"/><path d="M3 19c.6-3.2 3-5 6-5s5.4 1.8 6 5"/><circle cx="17" cy="9" r="2.5"/><path d="M16.5 14c2.4.2 4 1.7 4.5 4"/></svg>',
  palet: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 1 0 0 18c1.2 0 1.8-.8 1.8-1.7 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.7 1.8-1.7h2.1A4.3 4.3 0 0 0 21 11c0-4.4-4-8-9-8z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="14.5" cy="7" r="1"/></svg>',
  let: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4l9 16H3zM12 10v4M12 17v.2"/></svg>',
};

const WILG_LOGO = `<svg class="logo-wilg" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="19" fill="currentColor" opacity=".14"/><path d="M20 31V14" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" fill="none"/><path d="M20 14c-5 1-8 5-9 11M20 14c5 1 8 5 9 11M20 18c-3 1.4-5 4.4-5.4 9M20 18c3 1.4 5 4.4 5.4 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/></svg>`;

const OOM_MERK = `<span class="oom"><span class="oom__a">Ons</span> <span class="oom__b">Op&nbsp;Maat<svg viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true"><path d="M2 7.2C18 3.6 36 2.4 52 3.4c15 .9 30 2.9 46 1.2"/></svg></span></span>`;

function meld(tekst) {
  melding.textContent = tekst;
  melding.classList.add('is-zichtbaar');
  clearTimeout(meld.t);
  meld.t = setTimeout(() => melding.classList.remove('is-zichtbaar'), 4200);
}

function orgNaam() {
  return nu().huisstijl.naam?.trim() || ORGANISATIE.naam;
}

function logo(huisstijl = nu().huisstijl) {
  const naam = esc(huisstijl.naam?.trim() || ORGANISATIE.naam);
  if (huisstijl.logo === 'wilg') return `<span class="org-logo">${WILG_LOGO}<span class="org-logo__naam">${naam}</span></span>`;
  if (huisstijl.logo && huisstijl.logo.startsWith('data:image/')) return `<span class="org-logo"><img src="${esc(huisstijl.logo)}" alt="${naam}"></span>`;
  return `<span class="org-logo"><span class="org-logo__naam">${naam}</span></span>`;
}

function groet() {
  const uur = new Date().getHours();
  if (uur < 12) return 'Goedemorgen';
  if (uur < 18) return 'Goedemiddag';
  return 'Goedenavond';
}

// ---------- huisstijl toepassen ----------

function pasHuisstijlToe(standaard) {
  const { kleuren } = bereken(standaard ? {} : nu().huisstijl.kleuren);
  const vars = cssVariabelen(kleuren);
  const root = document.documentElement;
  for (const [k, v] of Object.entries(vars)) root.style.setProperty(k, v);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', kleuren.paneel);
}

// ---------- modules van Sanne ----------

function mijnModules() {
  const lijst = nu().toewijzing[MEDEWERKER.profiel] || TOEWIJZING[MEDEWERKER.profiel];
  return MODULES.filter((m) => lijst.includes(m.id));
}

function isKlaar(id) {
  return nu().voortgang[id] === 'klaar';
}

function markeer(id, status) {
  const voor = nu().voortgang;
  const voortgang = { ...voor };
  if (voortgang[id] !== 'klaar') voortgang[id] = status;
  zet({ voortgang, laatst: id });
  if (status === 'klaar' && voor[id] !== 'klaar') beloonAfronding(mijnModules().map((m) => m.id), voor);
}

function volgendeModule() {
  const lijst = mijnModules();
  const bezig = lijst.find((m) => nu().voortgang[m.id] === 'bezig');
  return bezig || lijst.find((m) => !isKlaar(m.id)) || null;
}

function metaRegel(m) {
  const delen = [`${m.min} min`];
  if (m.varianten) delen.push(`casus met ${m.varianten} ${m.varianten === 1 ? 'variant' : 'varianten'}`);
  if (m.toets) delen.push('meetmoment');
  return delen.join(' · ');
}

// ---------- schil: bovenbalk en voet ----------

function schil(inhoud, opties = {}) {
  const rol = nu().rol;
  const route = opties.route || '';
  const navs = {
    medewerker: PRESENTATIE
      ? [['#/overzicht', 'Start'], ['#/module/rapporteren', 'Rapporteren'], ['#/vraag', 'Vraag het'], ['#/demo/uitproberen', 'Verander de afspraak'], ['#/opleider', 'Opleider']]
      : [['#/overzicht', 'Mijn overzicht'], ['#/oefenen', 'Oefenen in ONS'], ['#/vraag', 'Vraag het'], ['#/module/rondleiding', 'Rondleiding']],
    opleider: PRESENTATIE
      ? [['#/opleider', 'Opleiderdashboard'], ['#/overzicht', 'Terug naar medewerker']]
      : [['#/opleider', 'Dashboard'], ['#/opleider/profielen', 'Profielen']],
    beheer: [['#/demo', 'Op maat'], ['#/beheer', 'Modules'], ['#/beheer/schermen', 'Schermkaart'], ['#/beheer/bronnen', 'Handboek'], ['#/beheer/klanten', 'Klanten'], ['#/beheer/huisstijl', 'Huisstijl']],
  };
  const wie = { medewerker: `${MEDEWERKER.naam} ${MEDEWERKER.achternaam}`, opleider: 'Opleider De Wilgenhof', beheer: 'Nick en Erwin' }[rol] || '';
  const merk = rol === 'beheer'
    ? `<a class="balk__merk" href="#/beheer">${OOM_MERK}<span class="balk__sub">Beheercentrum</span></a>`
    : `<a class="balk__merk" href="${rol === 'opleider' ? '#/opleider' : '#/overzicht'}">${logo()}<span class="balk__sub">Leren bij ${esc(orgNaam())}</span></a>`;
  const links = (navs[rol] || []).map(([href, tekst]) => {
    const hier = route === href || (href !== '#/beheer' && href !== '#/opleider' && route.startsWith(href));
    return `<a href="${href}"${hier ? ' aria-current="page"' : ''}>${tekst}</a>`;
  }).join('');
  return `
    <header class="balk${rol === 'beheer' ? ' balk--beheer' : ''}">
      <div class="balk__in">
        ${merk}
        <nav class="balk__nav" aria-label="Menu">${links}</nav>
        <div class="balk__wie">
          <span class="avatar" aria-hidden="true">${esc(wie.slice(0, 1))}</span>
          <span class="balk__naam">${esc(wie)}</span>
          <button type="button" class="btn btn--stil btn--op-paneel" data-actie="uitloggen">Uitloggen</button>
        </div>
      </div>
    </header>
    ${nu().maatwerk?.actief ? `<div class="maat-terug"><span>Werkafspraken versie ${esc(nu().maatwerk.actief.bron.versie)} actief in deze demo${route === '#/opleider' ? '<br>Dit ziet de opleider. De korte oefening telt niet als een afgeronde module.' : ''}</span><div class="maat-terug__acties">${route === '#/vraag' ? '<button type="button" class="linkknop" data-actie="demo-voortgang">Bekijk de voortgang →</button>' : ''}<a href="#/demo/uitproberen">Terug naar de maatwerkdemonstratie →</a></div></div>` : ''}
    <main id="inhoud" tabindex="-1"><p class="demo-melding">Demo met verzonnen gegevens. Afgeronde modules tonen oefenvoortgang, geen bewezen bekwaamheid.</p>${inhoud}</main>
    ${voet()}`;
}

function voet() {
  return `
    <footer class="voet">
      <div class="voet__in">
        <p class="voet__gemaakt">Gemaakt door ${OOM_MERK}</p>
        <p class="voet__demo"><a class="linkknop" href="${PRESENTATIE ? '#/overzicht' : '#/demo'}">Terug naar start</a> ${PRESENTATIE ? '' : '<a class="linkknop" href="#/rollen">Andere demorollen</a> <a class="linkknop" href="#/uitleg">Over deze demo</a>'} <button type="button" class="linkknop" data-actie="opnieuw">Demo opnieuw beginnen</button></p>
      </div>
    </footer>`;
}

function presentatieNavigatie(routeActief) {
  if (!PRESENTATIE) return '';
  const links = [
    ['#/overzicht', 'Start'], ['#/module/rapporteren', 'Rapporteren'], ['#/vraag', 'Vraag het'],
    ['#/demo/uitproberen', 'Verander de afspraak'], ['#/opleider', 'Opleider'],
  ];
  return `<nav class="presentatie-navigatie" aria-label="Demonstratieroute">${links.map(([href, label]) => `<a href="${href}"${routeActief === href.slice(1) ? ' aria-current="step"' : ''}>${label}</a>`).join('')}</nav>`;
}

// ---------- inloggen ----------

function viewRollen() {
  return `
    <main class="inlog" id="inhoud" tabindex="-1">
      <section class="inlog__paneel">
        <div class="inlog__logo">${logo()}</div>
        <div class="inlog__tekst">

          <h1>Leren bij ${esc(orgNaam())}</h1>
          <p class="lead">Probeer de leeromgeving als medewerker, opleider of beheerder.</p><p>Demo met verzonnen gegevens. Inloggen is een voorbeeld, zonder echte koppeling.</p>
        </div>
        <p class="inlog__gemaakt">Gemaakt door ${OOM_MERK}</p>
      </section>
      <section class="inlog__werk">
        <div class="werkpaneel inlog__kaart">

          <details class="demo-inloggen"><summary>Inloggen met je organisatieaccount</summary>
          <button type="button" class="btn btn--merk btn--breed" data-actie="sso">${ICOON.gebouw} Inloggen met je account van ${esc(orgNaam())}</button>
          <p class="scheiding"><span>of met je e-mailadres</span></p>
          <form class="inlog__form" data-form="mail" novalidate>
            <label for="mail">E-mailadres</label>
            <input id="mail" name="mail" type="email" autocomplete="email" placeholder="naam@dewilgenhof.nl">
            <button type="submit" class="btn btn--rand btn--breed">${ICOON.mail} Stuur me een inloglink</button>
          </form>
          </details>
          <div class="demo-keuze">
            <h2>Kies je rol</h2>
            <div class="rollen">
              <button type="button" class="rol" data-actie="rol" data-rol="medewerker">
                <span class="rol__naam">Sanne, verzorgende IG</span>
                <span class="rol__wat">Nieuwe medewerker, eerste dag</span>
                <span class="rol__pijl">${ICOON.pijl}</span>
              </button>
              <button type="button" class="rol" data-actie="rol" data-rol="opleider">
                <span class="rol__naam">Opleider van ${esc(orgNaam())}</span>
                <span class="rol__wat">Voortgang zien en onderdelen toewijzen</span>
                <span class="rol__pijl">${ICOON.pijl}</span>
              </button>
              <button type="button" class="rol" data-actie="rol" data-rol="beheer">
                <span class="rol__naam">Ons Op Maat</span>
                <span class="rol__wat">Beheercentrum: modules, klanten en huisstijl</span>
                <span class="rol__pijl">${ICOON.pijl}</span>
              </button>
            </div>
          </div>
          <div class="knoppen"><a class="linkknop" href="#/demo">Terug naar start</a><button type="button" class="linkknop" data-actie="opnieuw">Demo opnieuw beginnen</button></div>
        </div>
      </section>
    </main>`;
}

// ---------- medewerker: welkom ----------

// De welkomstvideo neemt naam en kleuren over uit de huisstijl van de klant.
function videoAdres() {
  const { kleuren } = bereken(nu().huisstijl.kleuren);
  const q = new URLSearchParams({ v: '21', ingebed: '1', org: orgNaam(), primair: kleuren.paneel, opprimair: kleuren.opPaneel, focus: kleuren.actieOpPaneel, accent: kleuren.actie, opaccent: kleuren.opActie, grond: kleuren.grond, tekst: kleuren.tekst });
  return `/video/?${q}`;
}

function viewWelkom() {
  const aantal = mijnModules().length;
  return schil(`
    <section class="paneel paneel--groot">
      <div class="paneel__in welkom">
        <div class="welkom__tekst">
          <p class="bovenregel">Je eerste dag</p>
          <h1>Hoi ${MEDEWERKER.naam}, welkom bij ${esc(orgNaam())}.</h1>
          <p class="lead">Vandaag leer je hoe wij werken in Nedap ONS. Niet hoe het systeem in het algemeen werkt, maar hoe wij het hier gebruiken. Er staan ${aantal} korte modules voor je klaar.</p>
          <p class="lead">Je hoeft niet alles vandaag te doen. Je kunt hier altijd terugkomen, ook later als je iets wilt opzoeken.</p>
          <p class="welkom__privacy">Je opleider ziet welke modules je hebt afgerond. Je opleider ziet niet wat je precies bij ‘Vraag het’ hebt gezocht.</p>
          <div class="knoppen">
            <button type="button" class="btn btn--actie btn--groot" data-actie="start-rondleiding">Start de rondleiding ${ICOON.pijl}</button>
            <button type="button" class="btn btn--stil btn--op-paneel" data-actie="sla-welkom-over">Sla over, naar mijn overzicht</button>
          </div>
        </div>
        <figure class="video video--echt">
          <iframe class="video__speler" src="${videoAdres()}" title="Welkomstvideo van ${esc(orgNaam())}" loading="lazy" allow="autoplay; fullscreen"></iframe>
        </figure>
      </div>
    </section>`, { route: '#/welkom' });
}

// ---------- medewerker: overzicht ----------

function viewOverzicht() {
  const lijst = mijnModules();
  if (PRESENTATIE) {
    return schil(`
      <section class="paneel leer-start">
        <div class="paneel__in overzicht-kop presentatie-kop">
          <div>
            <p class="bovenregel">Een korte demonstratie · vier momenten</p>
            <h1>Van werkafspraak naar voortgang</h1>
            <p class="lead">Demo met verzonnen gegevens. Kies waar je wilt beginnen.</p>
            <nav class="presentatie-momenten" aria-label="Vier momenten in de demonstratie">
              <a href="#/module/rapporteren"><span>1</span><strong>Een werkafspraak in een module</strong><small>Bekijk uitleg en oefening bij Rapporteren.</small></a>
              <a href="#/vraag"><span>2</span><strong>Een vraag tijdens de dienst</strong><small>Zoek een afspraak terug met de bron erbij.</small></a>
              <a href="#/demo/uitproberen"><span>3</span><strong>De afspraak verandert</strong><small>Vergelijk versie 1 en versie 2 in uitleg, oefening en naslag.</small></a>
              <a href="#/opleider"><span>4</span><strong>Voortgang voor de opleider</strong><small>Bekijk de demo-voortgang van Sanne.</small></a>
            </nav>
          </div>
        </div>
      </section>`, { route: '#/overzicht' });
  }
  const klaar = lijst.filter((m) => isKlaar(m.id)).length;
  const volgende = volgendeModule();
  const profiel = PROFIELEN[MEDEWERKER.profiel];
  const tipIndex = (nu().tip ?? new Date().getDate()) % TIPS.length;
  const tip = TIPS[tipIndex];
  let nummer = 0;

  const delen = DELEN.map((deel, di) => {
    const mods = lijst.filter((m) => m.deel === deel.id);
    if (!mods.length) return '';
    const deelKlaar = mods.filter((m) => isKlaar(m.id)).length;
    const rijen = mods.map((m) => {
      nummer += 1;
      const status = nu().voortgang[m.id];
      const label = status === 'klaar' ? 'Klaar' : status === 'bezig' ? 'Bezig' : m.id === volgende?.id ? 'Volgende' : '';
      return `
        <li>
          <a class="module${status === 'klaar' ? ' is-klaar' : ''}${m.id === volgende?.id ? ' is-volgende' : ''}" href="#/module/${m.id}">
            <span class="module__nr" aria-hidden="true">${status === 'klaar' ? ICOON.vink : nummer}</span>
            <span class="module__tekst">
              <span class="module__titel">${esc(m.titel)}</span>
              <span class="module__meta">${metaRegel(m)}</span>
            </span>
            ${label ? `<span class="module__status">${label}</span>` : ''}
            <span class="module__pijl" aria-hidden="true">${ICOON.pijl}</span>
          </a>
        </li>`;
    }).join('');
    return `
      <section class="deel" ${deel.id === 'tijdens' ? 'data-tour="deel"' : ''} aria-labelledby="deel-${deel.id}">
        <header class="deel__kop">
          <div>
            <p class="deel__nr">Deel ${di + 1}</p>
            <h2 id="deel-${deel.id}">${esc(deel.titel)}</h2>
            <p class="deel__uitleg">${esc(deel.uitleg)}</p>
          </div>
          <div class="deel__rechts">${deelBadge(deel.id, deelKlaar === mods.length)}<p class="deel__teller${deelKlaar === mods.length ? ' is-klaar' : ''}">${deelKlaar === mods.length ? ICOON.vink : ''}${deelKlaar} van ${mods.length}</p></div>
        </header>
        <ol class="modules">${rijen}</ol>
      </section>`;
  }).join('');

  const knopTekst = klaar === 0 && !nu().voortgang.rondleiding ? `Begin met ${esc(volgende?.titel.split(':')[0] || 'de eerste module')}` : volgende ? `Verder waar je was: ${esc(volgende.titel.split(':')[0])}` : 'Alles klaar, bekijk je modules';

  return schil(`
    <section class="paneel leer-start">
      <div class="paneel__in overzicht-kop">
        <div>
          <p class="bovenregel">${esc(profiel.naam)} · ${esc(MEDEWERKER.afdeling)}</p>
          <h1>${groet()} ${MEDEWERKER.naam}</h1>
          <p class="lead">${volgende ? `Er staan ${lijst.length} modules voor je klaar, omdat je ${esc(profiel.naam.toLowerCase())} bent.` : 'Je hebt alle modules afgerond. Je kunt altijd terugkomen om iets op te zoeken.'}</p>
          <p class="voortgang__tekst" data-tour="voortgang"><strong>${klaar} van ${lijst.length}</strong> modules afgerond.</p>
          ${volgende ? `<a class="btn btn--actie btn--groot" data-tour="verder" href="#/module/${volgende.id}">${knopTekst} ${ICOON.pijl}</a>` : lijst.length && klaar === lijst.length ? `<a class="btn btn--actie btn--groot" href="#/certificaat">Bekijk je certificaat ${ICOON.pijl}</a>` : ''}
          <form class="snelvraag" data-form="vraag" role="search">
            <label class="sr" for="snelvraag">Stel je vraag of zoek in het handboek</label>
            <input id="snelvraag" name="vraag" type="search" autocomplete="off" placeholder="Bij wie meld ik een val?">
            <button type="submit" class="btn btn--rand btn--op-paneel">Zoek</button>
          </form>
          <a class="linkknop start-versie" href="#/demo/uitproberen">Verander de afspraak: bekijk versie 2</a>
        </div>
        <aside class="tip leer-tip" data-tour="tip">
          <p class="tip__label">${ICOON.lamp} Tip van de dag</p>
          <h2 id="tip-kop">${esc(tip.kop)}</h2>
          <p>${esc(tip.tekst)}</p>
          <button type="button" class="linkknop" data-actie="volgende-tip">Nog een tip</button>
        </aside>
      </div>
    </section>
    <div class="wrap overzicht">
      ${badgeBlok({ toegewezen: lijst.map((m) => m.id), voortgang: nu().voortgang, dagen: nu().dagen })}
      <details class="leer-details" data-modulecatalogus>
        <summary><span>Alle modules</span><span class="leer-details__meta">${klaar} van ${lijst.length} afgerond</span></summary>
        <div class="leer-details__inhoud">${delen}</div>
      </details>
      <a class="oefenkaart" href="#/oefenen">
        <span class="oefenkaart__icoon" aria-hidden="true">${ICOON.speel}</span>
        <span><strong>Vrij oefenen in Nedap ONS</strong><span class="klein">Klik overal rond met testcliënten. Er kan niets kapot gaan.</span></span>
        <span class="module__pijl" aria-hidden="true">${ICOON.pijl}</span>
      </a>
      <aside class="hulp" data-tour="hulp">
        <span class="hulp__icoon" aria-hidden="true">${ICOON.vraag}</span>
        <div>
          <h2>Kom je er niet uit?</h2>
          <p>Vraag het de key-user van jouw afdeling. Op De Linde is dat Fatima. Ze werkt op maandag, woensdag en vrijdag.</p>
        </div>
      </aside>
    </div>`, { route: '#/overzicht' });
}

const RONDLEIDING = [
  { doel: '[data-tour="voortgang"]', kop: 'Je begint met een lege stand', tekst: 'Elke module die je afrondt krijgt een vinkje. In dit demo-overzicht zie je hoeveel modules klaar zijn.' },
  { doel: '[data-tour="verder"]', kop: 'Met deze knop ga je verder', tekst: 'Kom je terug, dan begin je hier. Hij brengt je naar de module waar je gebleven was.' },
  { doel: '[data-tour="deel"]', kop: 'Je modules staan in vijf delen', tekst: 'Van het starten van je dienst tot de apps op je telefoon. In elke module krijg je eerst uitleg en klik je samen met ons door Nedap ONS. Daarna oefen je met een situatie uit je eigen werk.' },
  { doel: '[data-tour="tip"]', kop: 'Elke dag een tip', tekst: 'Korte tips over hoe wij hier werken. Wil je er meer? Klik op Nog een tip.' },
  { doel: '[data-tour="hulp"]', kop: 'Kom je er niet uit?', tekst: 'Dan weet je hier bij wie je terechtkunt. Klaar? Begin met de eerste module.' },
];

function startTour() {
  document.querySelector('.leer-tip')?.setAttribute('open', '');
  const catalogus = document.querySelector('[data-modulecatalogus]');
  if (catalogus) catalogus.open = true;
  startRondleiding(RONDLEIDING, (klaar) => {
    if (klaar) {
      markeer('rondleiding', 'klaar');
      zet({ rondleidingKlaar: true });
      render();
      meld('Rondleiding klaar. Je eerste vinkje staat erin.');
    }
  });
}

// ---------- medewerker: module ----------

let casus = null;

function nieuweCasus(id) {
  const inhoud = CASUSSEN[id];
  return { id, stap: beginStap(inhoud), lesPagina: 0, klik: 0, stand: 'mee', zelf: null, speelt: false, keuze: null, koppel: {}, volgorde: null, gecontroleerd: false, antwoorden: {}, toets: maakToetsPoging(inhoud?.vragenbank || inhoud?.toets || [], inhoud?.vragenPerPoging || 5) };
}

function deelVan(m) {
  const i = DELEN.findIndex((d) => d.id === m.deel);
  return `Deel ${i + 1} · ${DELEN[i].titel}`;
}

const TELWOORD = ['nul', 'één', 'twee', 'drie', 'vier', 'vijf', 'zes', 'zeven', 'acht', 'negen', 'tien'];

function viewModule(id) {
  const m = MODULES.find((x) => x.id === id);
  if (!m) return viewNietGevonden();
  if (CASUSSEN[m.id]) return viewCasus(m);
  const deelIndex = DELEN.findIndex((d) => d.id === m.deel);
  const klaar = isKlaar(m.id);
  const isRondleiding = m.id === 'rondleiding';
  return schil(`
    <section class="paneel">
      <div class="paneel__in module-kop">
        <a class="terug" href="#/overzicht">${ICOON.terug} Mijn overzicht</a>
        <p class="bovenregel">Deel ${deelIndex + 1} · ${esc(DELEN[deelIndex].titel)}</p>
        <h1>${esc(m.titel)}</h1>
        <p class="lead">${esc(m.leer)}</p>
        <p class="module-kop__meta">${metaRegel(m)}</p>
      </div>
    </section>
    <div class="wrap smal">
      <div class="werkpaneel">
        ${isRondleiding ? `
          <h2>De rondleiding</h2>
          <p>We lopen samen langs je overzicht: waar je je voortgang ziet, hoe je verdergaat, en bij wie je terechtkunt.</p>
          <button type="button" class="btn btn--actie" data-actie="start-rondleiding">${klaar ? 'Doe de rondleiding opnieuw' : 'Start de rondleiding'} ${ICOON.pijl}</button>
        ` : `
          <h2>Zo ziet deze module eruit</h2>
          <ol class="stappenuitleg">
            <li><strong>Een situatie uit je dienst.</strong> Een cliënt, een collega, een moment waarop je iets moet doen.</li>
            <li><strong>Jij kiest.</strong> Bij elke keuze zie je wat er daarna gebeurt.${m.varianten ? ` Er zijn ${m.varianten} ${m.varianten === 1 ? 'variant' : 'varianten'}.` : ''}</li>
            ${m.toets ? '<li><strong>Een kort meetmoment.</strong> Heb je 80 procent goed, dan is de module klaar.</li>' : '<li><strong>Kort samengevat.</strong> Wat je meeneemt naar je volgende dienst.</li>'}
          </ol>
          <p class="opmerking">Deze module is in de demo nog niet uitgewerkt. Rapporteren wel.</p>
          <div class="knoppen">
            <a class="btn btn--actie" href="#/module/rapporteren">Probeer de casus Rapporteren ${ICOON.pijl}</a>
            ${klaar ? `<span class="klaar-label">${ICOON.vink} Klaar</span>` : `<button type="button" class="btn btn--rand" data-actie="markeer-klaar" data-id="${m.id}">Zet op klaar voor de demo</button>`}
          </div>
        `}
      </div>
    </div>`, { route: `#/module/${id}` });
}

// Een compacte werkafspraak bij de oefening, met de volledige bron op verzoek.
function werkafspraak(id) {
  const eigen = id === 'rapporteren' ? maatwerkBronnen(nu().maatwerk) : [];
  const secties = metMaatwerk(HANDBOEK, nu().maatwerk).filter((x) => x.module === id);
  if (!secties.length) return '';
  return `
    <details class="afspraak afspraak--compact">
      <summary><span class="afspraak__label">Zo doen wij het bij ${esc(orgNaam())}</span> <span>${esc(secties[0].kop)}</span><span class="klein">Bekijk onze werkafspraak</span></summary>
      <div class="afspraak__inhoud">${secties.map((x) => `<div class="afspraak__sectie"><h3>${esc(x.kop)}</h3>${x.tekst.map((t) => `<p>${esc(t)}</p>`).join('')}</div>`).join('')}<p class="afspraak__bron">${ICOON.boek} Uit: ${esc(secties[0].bron || `Handboek ${orgNaam()}`)}${eigen.length ? ` · versie ${nu().maatwerk.actief.bron.versie}` : ''}</p></div>
    </details>`;
}

const datumNL = (iso) => iso ? new Date(iso).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' }) : '';

function versieregel(moduleId) {
  const gecontroleerd = schermKaart(CASUSSEN).find((scherm) => scherm.modules.includes(moduleId) && scherm.gecontroleerdOp)?.gecontroleerdOp;
  return gecontroleerd ? `<p class="versieregel">${ICOON.vink} Gecontroleerd in Nedap ONS op ${datumNL(gecontroleerd)}</p>` : '';
}

function stapper(c, actief) {
  const stappen = [...fasen(c), ...c.stapNamen, c.toets?.length ? 'Meetmoment' : 'Afronden'];
  return `<ol class="stapper" aria-label="Stappen in deze casus">${stappen.map((s, i) => `<li class="${i < actief ? 'is-klaar' : i === actief ? 'is-nu' : ''}"${i === actief ? ' aria-current="step"' : ''}><span>${i < actief ? ICOON.vink : i + 1}</span>${esc(s)}</li>`).join('')}</ol>`;
}

function viewCasus(m) {
  if (!casus || casus.id !== m.id) casus = nieuweCasus(m.id);
  const c = CASUSSEN[m.id];
  let inhoud = '';
  const voor = fasen(c).length;
  let stapNr = voor;
  // Bundel van wat app.js aan bouwstenen van Nedap ONS heeft, voor de doorklik.
  const h = { esc, ICOON, onsBovenbalk, onsIcoon, onsClient, ONS_MENU, ONS_MENU_ADMIN };

  if (casus.stap === 'les') {
    stapNr = 0;
    inhoud = werkafspraak(m.id) + viewLes(c, casus, h);
  } else if (casus.stap === 'doorklik') {
    stapNr = voor - 1;
    inhoud = (casus.stand === 'zelf' ? '' : werkafspraak(m.id)) + viewDoorklik(c, casus, h);
  } else if (casus.stap === 'intro') {
    inhoud = `
      <article class="werkpaneel situatie">
        <p class="situatie__tijd">${esc(c.intro.tijd)}</p>
        <h2>${esc(c.intro.kop)}</h2>
        ${c.intro.tekst.map((t) => `<p>${esc(t)}</p>`).join('')}
        <button type="button" class="btn btn--actie" data-actie="casus-start">${esc(c.startKnop || 'Begin')} ${ICOON.pijl}</button>
      </article>`;
  } else if (['toets', 'uitslag', 'afronden'].includes(casus.stap)) {
    stapNr = voor + c.stappen.length + 1;
    inhoud = casus.stap === 'toets' ? viewToets(c) : casus.stap === 'uitslag' ? viewUitslag(c) : viewAfronden(c);
  } else {
    const stap = c.stappen[casus.stap];
    stapNr = voor + casus.stap + 1;
    inhoud = stap.type === 'keuze' ? viewKeuze(stap) : stap.type === 'volgorde' ? viewVolgorde(stap) : viewKoppel(stap);
  }

  return schil(`
    <section class="paneel">
      <div class="paneel__in module-kop${casus.stap === beginStap(c) && !casus.lesPagina ? '' : ' module-kop--compact'}">
        <a class="terug" href="#/overzicht">${ICOON.terug} Mijn overzicht</a>
        <p class="bovenregel">${esc(deelVan(m))} · Casus</p>
        <h1>${esc(m.titel)}</h1>
        <p class="lead">${esc(m.leer)}</p>
        ${stapper(c, stapNr)}
        ${versieregel(c.id)}
      </div>
    </section>
    <div class="wrap smal casus" aria-live="polite">${inhoud}</div>`, { route: `#/module/${m.id}` });
}

function viewKeuze(stap) {
  const gekozen = casus.keuze;
  const optie = gekozen !== null ? stap.opties[gekozen] : null;
  return `
    <article class="werkpaneel">
      <h2>${esc(stap.vraag)}</h2>
      <div class="keuzes" role="group" aria-label="${esc(stap.vraag)}">
        ${stap.opties.map((o, i) => `
          <button type="button" aria-pressed="${gekozen === i}" class="keuze${gekozen === i ? (o.goed ? ' is-goed' : ' is-fout') : ''}" data-actie="kies" data-i="${i}" ${gekozen !== null ? 'disabled' : ''}>
            <span class="keuze__letter">${'ABCDE'[i]}</span>
            <span class="keuze__tekst">${esc(o.tekst)}</span>
          </button>`).join('')}
      </div>
      ${optie ? `
        <div class="variant ${optie.goed ? 'variant--goed' : 'variant--fout'}">
          <p class="variant__label">${optie.goed ? ICOON.vink + ' Zo loopt het af' : ICOON.let + ' Zo loopt het af'}</p>
          <h3>${esc(optie.variant.kop)}</h3>
          <p>${esc(optie.variant.tekst)}</p>
          <p class="variant__uitleg"><strong>${optie.goed ? 'Goed gedaan.' : 'Wat ging er mis?'}</strong> ${esc(optie.uitleg)}</p>
        </div>
        <div class="knoppen">
          ${optie.goed ? `<button type="button" class="btn btn--actie" data-actie="casus-verder">Verder ${ICOON.pijl}</button>` : `<button type="button" class="btn btn--actie" data-actie="casus-opnieuw-keuze">Probeer een ander antwoord</button>`}
        </div>` : ''}
    </article>`;
}

// Oefenschermen in de vormgeving van Nedap ONS Dossier, één op één nagebouwd naar schermafdrukken uit de testomgeving.
// Een koppelstap kiest een scherm met `ons` (zie FORMAAT.md). Zonder `ons` blijft het neutrale oefenscherm staan.
const ONS_ICOON = {
  overzicht: '<path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/>',
  vragenlijst: '<path d="M6 3h9l4 4v6M6 3v18h7M14 3v5h5"/><circle cx="17" cy="17" r="3"/>',
  plan: '<path d="M3 15h4l5 3 7-4M12 11c-3-2-5-4-5-6a2.5 2.5 0 0 1 5-1 2.5 2.5 0 0 1 5 1c0 2-2 4-5 6z"/>',
  rapportage: '<path d="M6 3h9l4 4v5M6 3v18h6M14 3v5h5M14 20l6-6 2 2-6 6h-2z"/>',
  agenda: '<path d="M4 6h16v15H4zM4 10h16M8 3v5M16 3v5"/><path d="M12 15h3v3h-3z"/>',
  klinimetrie: '<path d="M5 20V12M10 20V6M15 20v-9M20 20V9M3 21h19"/>',
  link: '<path d="M10 14a4 4 0 0 1 0-6l2-2a4 4 0 0 1 6 6l-1 1M14 10a4 4 0 0 1 0 6l-2 2a4 4 0 0 1-6-6l1-1"/>',
  algemeen: '<path d="M4 4h16v16H4z"/><circle cx="12" cy="10" r="3"/><path d="M7 18c1-3 9-3 10 0"/>',
  netwerk: '<circle cx="8" cy="9" r="3"/><circle cx="16" cy="9" r="3"/><path d="M3 19c1-4 9-4 10 0M11 19c1-4 9-4 10 0"/>',
  financieel: '<path d="M17 6a7 7 0 1 0 0 12M4 10h9M4 14h9"/>',
  documenten: '<path d="M3 6h7l2 2h9v11H3zM6 6V4h6"/>',
  inklappen: '<path d="M3 6h12M3 12h9M3 18h12M21 8l-4 4 4 4"/>',
};
const ONS_MENU = [
  ['Overzicht', 'overzicht'], ['Vragenlijsten', 'vragenlijst'], ['Plan', 'plan'], ['Rapportages', 'rapportage'],
  ['Agenda', 'agenda'], ['Klinimetrie', 'klinimetrie'], ['Snelkoppelingen', 'link'],
];
const ONS_MENU_ADMIN = [
  ['Overzicht', 'overzicht'], ['Algemeen', 'algemeen'], ['Cliëntnetwerk', 'netwerk'], ['Financieel', 'financieel'], ['Documenten', 'documenten'],
];
const ONS_LIJST = 'Alle deskundigheden (of kies deskundigheid)';

const onsIcoon = (naam) => `<svg class="ons__icoon" viewBox="0 0 24 24" aria-hidden="true">${ONS_ICOON[naam]}</svg>`;

function onsBovenbalk() {
  return `
        <div class="ons__balk" aria-hidden="true">
          <span class="ons__logo"></span>
          <span class="ons__app">Dossier <span class="ons__raster"></span></span>
          <span class="ons__zoek">Zoeken naar cliënten...</span>
          <span class="ons__rechts">
            <svg viewBox="0 0 24 24"><path d="M4 4h16v12H9l-5 4z"/></svg>
            <span class="ons__bel"><svg viewBox="0 0 24 24"><path d="M6 17V11a6 6 0 0 1 12 0v6l2 2H4zM10 21h4"/></svg></span>
            <span class="ons__avatar"></span>
          </span>
        </div>`;
}

function onsMenu(actief) {
  const item = ([naam, icoon], aan) => `<li class="ons__menu-item${aan ? ' is-actief' : ''}">${onsIcoon(icoon)}${esc(naam)}</li>`;
  return `
          <nav class="ons__menu" aria-hidden="true">
            <p class="ons__terug">← Cliënt zoeken</p>
            <p class="ons__groep">Dossier</p>
            <ul>${ONS_MENU.map((m) => item(m, m[0] === actief)).join('')}</ul>
            <p class="ons__groep">Administratie</p>
            <ul>${ONS_MENU_ADMIN.map((m) => item(m, false)).join('')}</ul>
            <p class="ons__inklappen">${onsIcoon('inklappen')}Inklappen</p>
            <p class="ons__nedap">☆ nedap</p>
          </nav>`;
}

function onsClient(ons) {
  const initialen = ons.naam.split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();
  return `
            <div class="ons__client">
              <span class="ons__initialen" aria-hidden="true">${esc(initialen)}</span>
              <div class="ons__client-tekst">
                <p class="ons__naam">${esc(ons.naam)}${(ons.labels || []).map((l) => ` <span class="ons__label">${esc(l)}</span>`).join('')}</p>
                <p class="ons__gegevens">Geboortedatum is onbekend | ${esc(ons.nummer || '12345')} | ••••••••• | <u>Adres is onbekend</u></p>
              </div>
              <span class="ons__meer" aria-hidden="true">Meer info ⌄</span>
            </div>`;
}

function onsVeld(stap, r, i, goed) {
  const check = casus.gecontroleerd
    ? `<span class="ecd__check ${casus.koppel[i] === r.goed ? 'is-goed' : 'is-fout'}">${casus.koppel[i] === r.goed ? ICOON.vink : ICOON.let}<span class="sr">${casus.koppel[i] === r.goed ? 'goed' : 'nog niet goed'}</span></span>`
    : '';
  return `
              <div class="ons__veld">
                <label for="koppel-${i}">${esc(r.waarneming)}</label>
                <div class="ons__regel">
                  <select class="ons__select" id="koppel-${i}" data-koppel="${i}" ${casus.gecontroleerd && goed ? 'disabled' : ''}>
                    <option value="">${esc(stap.kiesTekst || 'Kies')}</option>
                    ${stap.opties.map((d) => `<option value="${d.id}" ${casus.koppel[i] === d.id ? 'selected' : ''}>${esc(d.naam)}</option>`).join('')}
                  </select>
                  ${check}
                </div>
              </div>`;
}

// Schermen waar we een schermafdruk van hebben. Teksten en volgorde zoals in Nedap ONS.
const ONS_SCHERMEN = {
  'nieuwe-episode': {
    menu: 'Overzicht',
    inhoud: (stap, ons, velden, opslaan) => `
            <p class="ons__kruimel">← Episodes – Overzicht</p>
            ${onsClient(ons)}
            <div class="ons__kopregel"><h3 class="ons__titel">Nieuwe episode</h3>${opslaan}</div>
            <div class="ons__kaart ons__formulier">
              <div class="ons__rij3">
                <div class="ons__veld"><span class="ons__lbl">Titel<b>*</b></span><span class="ons__titelveld"><span class="ons__invoer ons__invoer--kort">${esc(ons.titel || '')}</span><span class="ons__ster"><span aria-hidden="true">★</span> Markeer als belangrijk</span></span></div>
              </div>
              <div class="ons__rij3">
                <div class="ons__veld"><span class="ons__lbl">Startdatum<b>*</b></span><span class="ons__invoer ons__datum">${esc(ons.datum || '06-10-2026')}</span></div>
                <div class="ons__veld"><span class="ons__lbl">Einddatum</span><span class="ons__invoer ons__datum is-leeg">DD-MM-YYYY</span></div>
                <div class="ons__veld"><span class="ons__lbl">Evaluatiedatum</span><span class="ons__invoer ons__datum is-leeg">DD-MM-YYYY</span></div>
              </div>
              <div class="ons__rij2">
                <div class="ons__veld"><span class="ons__lbl">Hoofddoel</span><span class="ons__invoer ons__tekstvak${ons.hoofddoel ? '' : ' is-leeg'}">${esc(ons.hoofddoel || 'Optioneel')}</span></div>
                <div>
                  <div class="ons__veld"><span class="ons__lbl">Relevant voor</span><span class="ons__nep-select">${ONS_LIJST}</span></div>
                  <div class="ons__veld"><span class="ons__lbl">Zichtbaar voor</span><span class="ons__nep-select">${ONS_LIJST}</span></div>
                </div>
              </div>
            </div>
            <div class="ons__kaart ons__formulier">${velden}</div>`,
  },
  zorgplan: {
    menu: 'Plan',
    inhoud: (stap, ons, velden, opslaan) => `
            ${onsClient(ons)}
            <div class="ons__tabs" aria-hidden="true"><span class="is-actief">Zorgplan</span><span>Onvrijwillige zorg(0)</span></div>
            <div class="ons__kopregel ons__kopregel--lijn"><h3 class="ons__titel">Zorgplan</h3><span class="ons__knop ons__knop--blauw" aria-hidden="true">Dagoverzicht</span></div>
            <div class="ons__kaart ons__concept">
              <div>
                <p class="ons__concept-kop">Concept zorgplan</p>
                <p>Geldig vanaf onbekend tot en met onbekend<br>Laatst bijgewerkt op ${esc(ons.datum || '06-10-2026')} door ${esc(ons.auteur || 'Sanne Visser')}</p>
              </div>
              <div class="ons__concept-knoppen">${opslaan}<span class="ons__knop ons__knop--rand" aria-hidden="true">Wijzigen</span></div>
            </div>
            <div class="ons__kaart ons__formulier">${velden}</div>`,
    knop: 'Afronden', kleur: 'groen', melding: 'Zorgplan is afgerond',
  },
  'nieuwe-rapportage': {
    menu: 'Rapportages',
    inhoud: (stap, ons, velden, opslaan) => `
            ${onsClient(ons)}
            <div class="ons__kaart ons__rapportage">
              <div class="ons__rtabs" aria-hidden="true"><span></span><span class="is-actief"></span><span class="is-soep"></span><span class="ons__plus">+</span></div>
              <div class="ons__kopregel"><h3 class="ons__titel ons__titel--klein">Nieuw - Rapportage</h3><span class="ons__kop-rechts"><span class="ons__ster"><span aria-hidden="true">★</span> Markeer als belangrijk</span>${opslaan}</span></div>
              <span class="ons__invoer ons__tekstvak ons__tekstvak--groot${ons.tekst ? '' : ' is-leeg'}">${esc(ons.tekst || '')}</span>
              <p class="ons__schakel" aria-hidden="true"><span class="ons__toggle"></span>Metingenherkenning <span class="ons__info">i</span></p>
              <p class="ons__uitleg">Metingen worden tijdens het schrijven automatisch herkend en als losse metingen toegevoegd. Je hoeft deze dus niet meer apart in te voeren.</p>
              <div class="ons__links">
                ${velden}
                <div class="ons__veld"><span class="ons__lbl">Zichtbaar voor:</span><span class="ons__nep-select">Iedereen (of kies deskundigheden)</span></div>
                <div class="ons__veld"><span class="ons__lbl">Koppel aan episodes</span><span class="ons__nep-select">Selecteer episodes</span></div>
              </div>
            </div>`,
    knop: 'Opslaan', kleur: 'groen', melding: 'Rapportage is opgeslagen',
  },
};

function viewKoppel(stap) {
  const goed = stap.regels.every((r, i) => casus.koppel[i] === r.goed);
  const alles = stap.regels.every((r, i) => casus.koppel[i]);
  const ons = stap.ons && ONS_SCHERMEN[stap.ons.scherm] ? stap.ons : null;
  let scherm;
  if (ons) {
    const pagina = ONS_SCHERMEN[ons.scherm];
    const knopTekst = pagina.knop || 'Opslaan';
    const kleur = pagina.kleur || 'blauw';
    const opslaan = casus.gecontroleerd && goed
      ? `<span class="ons__knop ons__knop--${kleur} is-uit">✓ ${knopTekst}</span>`
      : `<button type="button" class="ons__knop ons__knop--${kleur}" data-actie="koppel-check" ${alles ? '' : 'disabled'}>✓ ${knopTekst}</button>`;
    const velden = stap.regels.map((r, i) => onsVeld(stap, r, i, goed)).join('');
    scherm = `
      <div class="ons" role="group" aria-label="${esc(stap.scherm)}">
        ${onsBovenbalk()}
        <div class="ons__lijf">
          ${onsMenu(pagina.menu)}
          <div class="ons__inhoud">${pagina.inhoud(stap, ons, velden, opslaan)}</div>
        </div>
        ${casus.gecontroleerd && goed ? `<p class="ons__melding" role="status"><span aria-hidden="true">✓</span> ${pagina.melding || 'Episode is opgeslagen'}</p>` : ''}
      </div>`;
  } else {
    scherm = `
      <div class="ecd">
        <div class="ecd__balk"><span>${esc(stap.scherm || 'Nedap ONS')}</span></div>
        <div class="ecd__body">
          ${stap.regels.map((r, i) => `
            <div class="ecd__rij">
              <label for="koppel-${i}">${esc(r.waarneming)}</label>
              <select id="koppel-${i}" data-koppel="${i}" ${casus.gecontroleerd && goed ? 'disabled' : ''}>
                <option value="">${esc(stap.kiesTekst || 'Kies')}</option>
                ${stap.opties.map((d) => `<option value="${d.id}" ${casus.koppel[i] === d.id ? 'selected' : ''}>${esc(d.naam)}</option>`).join('')}
              </select>
              ${casus.gecontroleerd ? `<span class="ecd__check ${casus.koppel[i] === r.goed ? 'is-goed' : 'is-fout'}">${casus.koppel[i] === r.goed ? ICOON.vink : ICOON.let}<span class="sr">${casus.koppel[i] === r.goed ? 'goed' : 'nog niet goed'}</span></span>` : ''}
            </div>`).join('')}
        </div>
      </div>`;
  }
  return `
    <article class="werkpaneel">
      <h2>${esc(stap.vraag)}</h2>
      ${stap.uitleg ? `<p>${esc(stap.uitleg)}</p>` : ''}
      ${scherm}
      ${casus.gecontroleerd ? `<div class="variant ${goed ? 'variant--goed' : 'variant--fout'}"><p>${esc(goed ? stap.goedTekst : stap.foutTekst)}</p></div>` : ''}
      <div class="knoppen">
        ${casus.gecontroleerd && goed
          ? `<button type="button" class="btn btn--actie" data-actie="casus-verder">Verder ${ICOON.pijl}</button>`
          : ons ? '' : `<button type="button" class="btn btn--actie" data-actie="koppel-check" ${alles ? '' : 'disabled'}>Controleer</button>`}
      </div>
    </article>`;
}

function viewVolgorde(stap) {
  if (!casus.volgorde) casus.volgorde = [...stap.start];
  const goed = casus.volgorde.every((n, i) => n === i);
  const vast = casus.gecontroleerd && goed;
  const laatste = casus.volgorde.length - 1;
  return `
    <article class="werkpaneel">
      <h2>${esc(stap.vraag)}</h2>
      ${stap.uitleg ? `<p>${esc(stap.uitleg)}</p>` : ''}
      <ol class="volgorde">
        ${casus.volgorde.map((n, i) => `
          <li class="volgorde__item${casus.gecontroleerd ? (n === i ? ' is-goed' : ' is-fout') : ''}">
            <span class="volgorde__nr">${i + 1}</span>
            <span class="volgorde__tekst">${esc(stap.items[n])}</span>
            ${vast ? `<span class="ecd__check is-goed">${ICOON.vink}<span class="sr">goed</span></span>` : `
            <span class="volgorde__knoppen">
              <button type="button" class="volgorde__knop" data-actie="volgorde-op" data-i="${i}" ${i === 0 ? 'disabled' : ''} aria-label="${esc(stap.items[n])} een plek omhoog">↑</button>
              <button type="button" class="volgorde__knop" data-actie="volgorde-neer" data-i="${i}" ${i === laatste ? 'disabled' : ''} aria-label="${esc(stap.items[n])} een plek omlaag">↓</button>
            </span>`}
          </li>`).join('')}
      </ol>
      ${casus.gecontroleerd ? `<div class="variant ${goed ? 'variant--goed' : 'variant--fout'}"><p>${esc(goed ? stap.goedTekst : stap.foutTekst)}</p></div>` : ''}
      <div class="knoppen">
        ${vast
          ? `<button type="button" class="btn btn--actie" data-actie="casus-verder">Verder ${ICOON.pijl}</button>`
          : `<button type="button" class="btn btn--actie" data-actie="koppel-check">Controleer</button>`}
      </div>
    </article>`;
}

const nogOpen = (n) => (n ? `Nog ${n} ${n === 1 ? 'vraag' : 'vragen'} open` : 'Alles ingevuld');

function viewToets(c) {
  const t = casus.toets;
  const open = t.filter((_, i) => casus.antwoorden[i] === undefined).length;
  const alles = open === 0;
  const nodig = Math.ceil(t.length * NORM);
  return `
    <article class="werkpaneel">
      <p class="bovenregel bovenregel--merk">Meetmoment</p>
      <h2>${TELWOORD[t.length] ? TELWOORD[t.length][0].toUpperCase() + TELWOORD[t.length].slice(1) : t.length} korte vragen</h2>
      <p>Heb je er ${TELWOORD[nodig] || nodig} of meer goed, dan is de module klaar.</p>
      <form class="toets" data-form="toets">
        ${t.map((v, i) => `
          <fieldset class="vraag">
            <legend><span class="vraag__nr">${i + 1}</span> ${esc(v.vraag)}</legend>
            ${v.opties.map((o, j) => `
              <label class="optie">
                <input type="radio" name="v${i}" value="${j}" ${casus.antwoorden[i] === j ? 'checked' : ''}>
                <span>${esc(o)}</span>
              </label>`).join('')}
          </fieldset>`).join('')}
        <div class="toets__onder">
          <button type="submit" class="btn btn--actie" aria-describedby="toets-open" ${alles ? '' : 'disabled'}>Lever in</button>
          <p class="toets__open" id="toets-open" aria-live="polite">${nogOpen(open)}</p>
        </div>
      </form>
    </article>`;
}

function samenvatting(c) {
  if (!c.samenvatting?.length) return '';
  return `
    <div class="meenemen">
      <h3>Dit neem je mee naar je volgende dienst</h3>
      <ul>${c.samenvatting.map((r) => `<li>${ICOON.vink}<span>${esc(r)}</span></li>`).join('')}</ul>
    </div>`;
}

function metingRegel(id) {
  const m = nu().metingen?.[id]?.laatste;
  if (!m) return '';
  return `<p class="meetregel">${ICOON.vink} Zelf in Nedap ONS: ${tijdTekst(m.sec)}, ${m.fouten} keer mis geklikt, ${m.hints} ${m.hints === 1 ? 'hint' : 'hints'}.</p>`;
}

function viewUitslag(c) {
  const t = casus.toets;
  const goed = t.filter((v, i) => casus.antwoorden[i] === v.goed).length;
  const gehaald = goed / t.length >= NORM;
  return `
    <article class="werkpaneel uitslag ${gehaald ? 'is-gehaald' : ''}">
      <span class="uitslag__icoon" aria-hidden="true">${gehaald ? ICOON.vink : ICOON.let}</span>
      <h2>${gehaald ? 'Module klaar' : 'Nog niet'}</h2>
      <p class="uitslag__score">Je had er <strong>${goed} van de ${t.length}</strong> goed.</p>
      <ul class="uitslag__lijst">
        ${t.map((v, i) => `<li class="${casus.antwoorden[i] === v.goed ? 'is-goed' : 'is-fout'}">${casus.antwoorden[i] === v.goed ? ICOON.vink : ICOON.let}<span>${esc(v.vraag)}${casus.antwoorden[i] === v.goed || gehaald ? '' : ' <em>Bekijk de uitleg bij deze vraag en probeer het daarna opnieuw.</em>'}</span></li>`).join('')}
      </ul>
      ${!gehaald ? '<p>Bekijk de uitleg opnieuw en probeer daarna het meetmoment nog eens.</p>' : ''}
      ${metingRegel(c.id)}
      ${gehaald ? samenvatting(c) : ''}
      <div class="knoppen">
        ${gehaald
          ? `<a class="btn btn--actie" href="#/overzicht">Terug naar mijn overzicht ${ICOON.pijl}</a>`
          : `<button type="button" class="btn btn--actie" data-actie="toets-opnieuw">Doe het meetmoment opnieuw</button>`}
      </div>
    </article>`;
}

function viewAfronden(c) {
  const klaar = isKlaar(c.id);
  return `
    <article class="werkpaneel uitslag ${klaar ? 'is-gehaald' : ''}">
      <span class="uitslag__icoon" aria-hidden="true">${ICOON.vink}</span>
      <h2>${klaar ? 'Module klaar' : 'Je bent door de casus heen'}</h2>
      ${metingRegel(c.id)}
      ${samenvatting(c)}
      <div class="knoppen">
        ${klaar
          ? `<a class="btn btn--actie" href="#/overzicht">Terug naar mijn overzicht ${ICOON.pijl}</a>`
          : `<button type="button" class="btn btn--actie" data-actie="casus-afronden">Rond de module af ${ICOON.pijl}</button>`}
      </div>
    </article>`;
}

// ---------- opleider ----------

function dagenTussen(a, b) {
  return Math.round((Date.parse(b) - Date.parse(a)) / 864e5);
}

function rijenOpleider() {
  const sanneKlaar = mijnModules().filter((m) => isKlaar(m.id)).length;
  const eigen = Object.values(nu().scores);
  const sanneScore = eigen.length ? Math.round(eigen.reduce((a, b) => a + b, 0) / eigen.length) : null;
  const sanne = { naam: `${MEDEWERKER.naam} ${MEDEWERKER.achternaam}`, profiel: 'vig', afdeling: MEDEWERKER.afdeling, start: DEMO_VANDAAG, klaar: sanneKlaar, toets: sanneScore, ons: sanneOns(), live: true };
  return [sanne, ...COLLEGAS].map((r) => {
    const totaal = (nu().toewijzing[r.profiel] || []).length;
    const klaar = Math.min(r.klaar, totaal);
    const pct = totaal ? klaar / totaal : 0;
    const dagen = dagenTussen(r.start, DEMO_VANDAAG);
    const status = klaar === totaal ? 'klaar' : dagen > 14 && pct < 0.6 ? 'achter' : 'schema';
    return { ...r, totaal, klaar, pct, status };
  });
}

// Doe zelf in ONS, samengevat: hoeveel opdrachten, en per opdracht gemiddeld hoe vaak mis geklikt.
function sanneOns() {
  const m = Object.values(nu().metingen || {}).map((x) => x.laatste);
  if (!m.length) return null;
  const gem = (k) => m.reduce((a, x) => a + x[k], 0) / m.length;
  return { opdrachten: m.length, fouten: Math.round(gem('fouten') * 10) / 10, sec: Math.round(gem('sec')) };
}

const komma = (n) => String(n).replace('.', ',');

function onsCel(o) {
  if (!o) return '<span class="klein">nog niet</span>';
  return `<span class="onscel">${komma(o.fouten)} mis</span><span class="klein onscel">${o.opdrachten}× · ${o.sec} sec</span>`;
}

function metingBlok() {
  const lijst = Object.entries(nu().metingen || {});
  const rijen = lijst.map(([id, m]) => {
    const mod = MODULES.find((x) => x.id === id);
    const beter = m.keer > 1 ? (m.laatste.sec < m.eerste.sec ? 'sneller' : m.laatste.sec > m.eerste.sec ? 'langzamer' : 'even snel') : '';
    return `<tr><th scope="row">${esc(mod?.titel.split(':')[0] || id)}</th><td data-label="Eerste keer">${tijdTekst(m.eerste.sec)}<span class="klein">${m.eerste.fouten} keer mis · ${m.eerste.hints} ${m.eerste.hints === 1 ? 'hint' : 'hints'}</span></td><td data-label="Laatste keer">${m.keer > 1 ? `${tijdTekst(m.laatste.sec)}<span class="klein">${m.laatste.fouten} keer mis · ${m.laatste.hints} ${m.laatste.hints === 1 ? 'hint' : 'hints'}</span>` : '<span class="klein">nog één keer gedaan</span>'}</td><td data-label="Verschil">${beter ? esc(beter) : '<span class="klein">nog niet</span>'}</td></tr>`;
  }).join('');
  return `
      <div class="werkpaneel werkpaneel--vol meetblok">
        <div class="tabelkop"><h2>Oefenmetingen van Sanne Visser</h2></div>
        <p>Bij Doe zelf oefent Sanne zonder begeleiding in de oefenomgeving. Je ziet de tijd, het aantal verkeerde klikken en gebruikte hints. Dit zegt iets over deze oefening, niet over haar bekwaamheid in de praktijk.</p>
        ${rijen ? `<div class="tabelwrap"><table class="tabel tabel--kaarten"><thead><tr><th scope="col">Module</th><th scope="col">Eerste keer</th><th scope="col">Laatste keer</th><th scope="col">Verschil</th></tr></thead><tbody>${rijen}</tbody></table></div>`
          : '<p class="leeg">Sanne heeft nog geen opdracht zelf gedaan. Log in als Sanne en kies in een module Doe zelf.</p>'}
      </div>`;
}

function vinkjesPerDeel(r) {
  const lijst = MODULES.filter((m) => (nu().toewijzing[r.profiel] || []).includes(m.id));
  let over = r.klaar;
  return DELEN.map((d) => {
    const n = lijst.filter((m) => m.deel === d.id).length;
    if (!n) return '';
    const k = r.live ? lijst.filter((m) => m.deel === d.id && isKlaar(m.id)).length : Math.max(0, Math.min(n, over));
    if (!r.live) over -= n;
    const klasse = k === n ? 'is-klaar' : k > 0 ? 'is-half' : '';
    return `<span class="deelvink ${klasse}" title="${esc(d.titel)}: ${k} van ${n}">${k === n ? ICOON.vink : ''}<span class="sr">${esc(d.titel)}: ${k} van ${n}</span></span>`;
  }).join('');
}

function viewOpleider() {
  const filter = nu().filter || 'alle';
  const alle = rijenOpleider();
  const rijen = alle.filter((r) => filter === 'alle' || (filter === 'achter' ? r.status === 'achter' : r.profiel === filter));
  const achter = alle.filter((r) => r.status === 'achter').length;
  const scores = alle.filter((r) => r.toets !== null);
  const gem = scores.length ? Math.round(scores.reduce((s, r) => s + r.toets, 0) / scores.length) : 0;
  const tegel = (getal, tekst) => `<div class="tegel"><p class="tegel__getal">${getal}</p><p class="tegel__tekst">${tekst}</p></div>`;
  const statusTekst = { klaar: 'Modules afgerond', achter: 'Loopt achter', schema: 'Op schema' };
  return schil(`
    <section class="paneel">
      <div class="paneel__in">
        <p class="bovenregel">Dashboard opleider</p>
        <h1>Inwerken bij ${esc(orgNaam())}</h1>
        <p class="lead">Zo ver zijn je nieuwe collega's met hun modules.</p>
        <div class="tegels tegels--rustig">
          ${tegel(alle.length, 'nieuwe medewerkers')}
          ${tegel(alle.filter((r) => r.status === 'klaar').length, 'medewerkers met alle modules afgerond')}
          <button type="button" class="tegel tegel--knop${achter ? ' is-let-op' : ''}" data-actie="filter" data-filter="achter" aria-pressed="${filter === 'achter'}">
            <span class="tegel__getal">${achter}</span>
            <span class="tegel__tekst">${achter === 1 ? 'loopt achter' : 'lopen achter'}</span>
            <span class="tegel__actie">${filter === 'achter' ? 'Laat iedereen zien' : 'Laat zien wie'} ${ICOON.pijl}</span>
          </button>
          ${tegel(gem + '%', 'gemiddelde score meetmoment')}
        </div>
      </div>
    </section>
    <div class="wrap">
      <div class="werkpaneel werkpaneel--vol">
        <div class="tabelkop">
          <h2>Medewerkers <span class="leer-demo-label">Demogegevens</span></h2>
          <div class="filter" role="group" aria-label="Filter op profiel">
            ${[['alle', 'Alle profielen'], ['vig', 'Verzorgende IG'], ['helpende', 'Helpende en wzo'], ['achter', 'Lopen achter']].map(([id, t]) => `<button type="button" class="chip" aria-pressed="${filter === id}" data-actie="filter" data-filter="${id}">${t}</button>`).join('')}
          </div>
        </div>
        <div class="tabelwrap">
          <table class="tabel tabel--kaarten">
            <thead><tr><th scope="col">Medewerker</th><th scope="col">Voortgang</th><th scope="col">Status</th><th scope="col">Meer inzicht</th></tr></thead>
            <tbody>
              ${rijen.map((r) => `
                <tr${r.live ? ' class="is-live"' : ''}>
                  <th scope="row">${esc(r.naam)}${r.live ? ' <span class="live">deze sessie</span>' : ''}<span class="klein">${esc(PROFIELEN[r.profiel].naam)} · ${esc(r.afdeling)}</span></th>
                  <td data-label="Voortgang" class="tabel__breed"><div class="minibalk" role="img" aria-label="${r.klaar} van ${r.totaal} klaar"><span style="width:${Math.round(r.pct * 100)}%"></span></div><span class="klein">${r.klaar} van ${r.totaal} modules</span></td>
                  <td data-label="Status"><span class="status status--${r.status}">${statusTekst[r.status]}</span></td>
                  <td data-label="Meer inzicht"><details class="leer-medewerker"${PRESENTATIE && r.live ? ' open' : ''}><summary>Bekijk details<span class="sr"> van ${esc(r.naam)}</span></summary><dl>
                    <div><dt>Gestart</dt><dd>${new Date(r.start).toLocaleDateString('nl-NL', { day: 'numeric', month: 'short' })}</dd></div>
                    <div><dt>Per deel</dt><dd><span class="deelvinken">${vinkjesPerDeel(r)}</span></dd></div>
                    ${PRESENTATIE ? '' : `<div><dt>Badges</dt><dd>${badgeTeller(aantalBadges(r, nu().toewijzing[r.profiel] || [], nu().voortgang), delenMetModules(nu().toewijzing[r.profiel] || []).length)}</dd></div>`}
                    <div><dt>Meetmoment</dt><dd>${r.toets === null ? 'Nog niet gedaan' : r.toets + '%'}</dd></div>
                    <div><dt>In de oefenomgeving</dt><dd>${onsCel(r.ons)}</dd></div>
                  </dl></details></td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>
        ${rijen.length ? '' : '<p class="leeg">Niemand loopt achter. Mooi zo.</p>'}
        <p class="opmerking">Loopt achter betekent: langer dan twee weken gestart en minder dan 60 procent klaar.</p>
        <p class="opmerking">Bij details zie je de resultaten in de oefenomgeving. De collega’s zijn voorbeelden. Alleen Sannes voortgang verandert mee met deze demosessie.</p>
      </div>
      <details class="leer-details leer-details--metingen"><summary><span>Oefenmetingen van Sanne</span><span class="leer-details__meta">Eerste en laatste poging</span></summary>${metingBlok()}</details>
    </div>`, { route: '#/opleider' });
}

function viewProfielen() {
  const t = nu().toewijzing;
  const kolommen = Object.values(PROFIELEN);
  return schil(`
    <section class="paneel">
      <div class="paneel__in">
        <p class="bovenregel">Profielen</p>
        <h1>Welke modules horen bij welk profiel?</h1>
        <p class="lead">Zet een vinkje en de module staat in het overzicht van iedereen met dat profiel. Sanne is verzorgende IG, dus wat je daar aanpast zie je meteen bij haar.</p>
      </div>
    </section>
    <div class="wrap">
      <div class="werkpaneel werkpaneel--vol">
        <div class="tabelwrap">
          <table class="tabel tabel--matrix tabel--kaarten">
            <thead><tr><th scope="col">Module</th>${kolommen.map((p) => `<th scope="col">${esc(p.naam)}<span class="klein">${t[p.id].length} modules</span></th>`).join('')}</tr></thead>
            ${DELEN.map((d, di) => `
              <tbody>
                <tr class="tabel__deel"><th colspan="${kolommen.length + 1}" scope="colgroup">Deel ${di + 1} · ${esc(d.titel)}</th></tr>
                ${MODULES.filter((m) => m.deel === d.id).map((m) => `
                  <tr>
                    <th scope="row">${esc(m.titel)}<span class="klein">${metaRegel(m)}</span></th>
                    ${kolommen.map((p) => `<td data-label="${esc(p.naam)}"><label class="vinkvak"><input type="checkbox" data-toewijs="${p.id}" value="${m.id}" ${t[p.id].includes(m.id) ? 'checked' : ''}><span class="sr">${esc(m.titel)} voor ${esc(p.naam)}</span><span class="vinkvak__box" aria-hidden="true">${ICOON.vink}</span></label></td>`).join('')}
                  </tr>`).join('')}
              </tbody>`).join('')}
          </table>
        </div>
        <div class="knoppen">
          <button type="button" class="btn btn--rand" data-actie="toewijzing-standaard">Terug naar de standaard van Ons Op Maat</button>
          <a class="btn btn--actie" href="#/opleider">Naar het dashboard ${ICOON.pijl}</a>
        </div>
      </div>
    </div>`, { route: '#/opleider/profielen' });
}

// ---------- beheercentrum Ons Op Maat ----------

function viewBeheerModules() {
  return schil(`
    <section class="paneel">
      <div class="paneel__in">
        <p class="bovenregel">Beheercentrum · alleen voor Ons Op Maat</p>
        <h1>De bibliotheek</h1>
        <p class="lead">Elke module is een casus met varianten. De basis is voor elke organisatie hetzelfde. In dit voorbeeld zie je de schermen, afspraken en verzonnen namen van De Wilgenhof.</p>
      </div>
    </section>
    <div class="wrap">
      <div class="werkpaneel werkpaneel--vol">
        <div class="tabelkop"><h2>${MODULES.length} modules voor Nedap ONS</h2></div>
        <div class="tabelwrap">
          <table class="tabel tabel--kaarten">
            <thead><tr><th scope="col">Module</th><th scope="col">Deel</th><th scope="col">Varianten</th><th scope="col">Meetmoment</th><th scope="col">Lagen</th><th scope="col">Stand</th></tr></thead>
            <tbody>
              ${MODULES.map((m) => `
                <tr>
                  <th scope="row">${esc(m.titel)}</th>
                  <td data-label="Deel">${esc(DELEN.find((d) => d.id === m.deel).titel)}</td>
                  <td data-label="Varianten">${m.varianten || '<span class="klein">geen</span>'}</td>
                  <td data-label="Meetmoment">${m.toets ? ICOON.vink + '<span class="sr">ja</span>' : '<span class="klein">nee</span>'}</td>
                  <td data-label="Lagen" class="tabel__breed"><span class="laag">Basis</span> <span class="laag laag--klant">De Wilgenhof</span></td>
                  <td data-label="Stand">${m.id === 'rondleiding' || CASUSSEN[m.id] ? '<span class="status status--klaar">Uitgewerkt</span>' : '<span class="status">Opzet</span>'}</td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>
        <p class="opmerking">De bibliotheek toont de basis en de voorbeeldafspraken per organisatie.</p>
      </div>
    </div>`, { route: '#/beheer' });
}

let veranderd = [];

function viewSchermkaart() {
  const kaart = schermKaart(CASUSSEN);
  const titel = (id) => esc(MODULES.find((m) => m.id === id)?.titel.split(':')[0] || id);
  const raak = geraakt(kaart, veranderd);
  return schil(`
    <section class="paneel">
      <div class="paneel__in">
        <p class="bovenregel">Beheercentrum · alleen voor Ons Op Maat</p>
        <h1>Schermkaart</h1>
        <p class="lead">Welk scherm van Nedap ONS zit in welke module. Komt er een ONS-update, vink dan aan welke schermen veranderd zijn. Je ziet meteen welke modules je moet nakijken, voor alle klanten tegelijk.</p>
      </div>
    </section>
    <div class="wrap">
      <div class="werkpaneel werkpaneel--vol releasecheck" aria-live="polite">
        <h2>Controle na een ONS-update</h2>
        ${veranderd.length
          ? `<p><strong>${raak.length} ${raak.length === 1 ? 'module' : 'modules'} nakijken</strong> door ${veranderd.length} ${veranderd.length === 1 ? 'veranderd scherm' : 'veranderde schermen'}:</p>
             <ul class="chips">${raak.map((id) => `<li><a class="chip" href="#/beheer">${titel(id)}</a></li>`).join('')}</ul>
             <button type="button" class="btn btn--rand btn--klein" data-actie="release-leeg">Alles weer uitzetten</button>`
          : '<p>Vink hieronder aan welke schermen in de nieuwe update van Nedap ONS veranderd zijn.</p>'}
      </div>
      <div class="werkpaneel werkpaneel--vol">
        <div class="tabelkop"><h2>${kaart.length} schermen in ${MODULES.length - 1} modules</h2></div>
        <div class="tabelwrap">
          <table class="tabel tabel--kaarten">
            <thead><tr><th scope="col">Scherm</th><th scope="col">Zit in</th><th scope="col">Gecontroleerd</th><th scope="col">Veranderd in update</th></tr></thead>
            <tbody>
              ${kaart.map((r, i) => `
                <tr>
                  <th scope="row">${esc(r.scherm)}</th>
                  <td data-label="Zit in" class="tabel__breed">${r.modules.length ? r.modules.map(titel).join(', ') : 'Geen bestaande casus, alleen vrije oefenomgeving'}</td>
                  <td data-label="Gecontroleerd">${r.gecontroleerdOp ? `Gecontroleerd in Nedap ONS op ${datumNL(r.gecontroleerdOp)}` : 'Nog niet bevestigd'}</td>
                  <td data-label="Veranderd"><label class="vinkvak"><input type="checkbox" data-scherm="${esc(r.scherm)}" ${veranderd.includes(r.scherm) ? 'checked' : ''}><span class="sr">${esc(r.scherm)} is veranderd</span><span class="vinkvak__box" aria-hidden="true">${ICOON.vink}</span></label></td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>
        <p class="opmerking">De kaart maakt zichzelf uit de modules. Bouw je een nieuwe module, dan staat hij er vanzelf in.</p>
      </div>
    </div>`, { route: '#/beheer/schermen' });
}

function viewBeheerKlanten() {
  const h = nu().huisstijl;
  const { kleuren } = bereken(h.kleuren);
  const aantal = rijenOpleider().length;
  return schil(`
    <section class="paneel">
      <div class="paneel__in">
        <p class="bovenregel">Beheercentrum · alleen voor Ons Op Maat</p>
        <h1>Klanten</h1>
        <p class="lead">Per klant zet je de profielen, de modules per profiel en de huisstijl klaar. Daarna kan de opleider van de klant zelf toewijzen en meekijken.</p>
      </div>
    </section>
    <div class="wrap">
      <div class="klanten">
        <article class="werkpaneel klant">
          <div class="klant__kop" style="background:${kleuren.paneel};color:${kleuren.opPaneel}">${logo(h)}</div>
          <h2>${esc(ORGANISATIE.voluit)}</h2>
          <dl class="feiten">
            <div><dt>ECD</dt><dd>${ORGANISATIE.ecd}</dd></div>
            <div><dt>Profielen</dt><dd>${Object.values(PROFIELEN).map((p) => esc(p.naam)).join(', ')}</dd></div>
            <div><dt>Medewerkers</dt><dd>${aantal}</dd></div>
            <div><dt>Inloggen</dt><dd>Inlogvoorbeeld, zonder echte koppeling</dd></div>
          </dl>
          <div class="stalen" aria-label="Huisstijlkleuren">${['paneel', 'merk', 'actie', 'zacht'].map((k) => `<span style="background:${kleuren[k]}" title="${LABELS[k].naam} ${kleuren[k]}"></span>`).join('')}</div>
          <div class="knoppen">
            <a class="btn btn--actie" href="#/beheer/huisstijl">Huisstijl instellen ${ICOON.pijl}</a>
            <a class="btn btn--rand" href="#/opleider/profielen" data-actie="als-opleider">Profielen bekijken</a>
          </div>
        </article>
        <article class="werkpaneel klant klant--nieuw">
          <span class="klant__plus" aria-hidden="true">+</span>
          <h2>Nieuwe klant</h2>
          <p>Nieuwe klanten voeg je niet in deze demo toe. Je kunt hier de voorbeeldinstellingen van De Wilgenhof bekijken.</p>
        </article>
      </div>
    </div>`, { route: '#/beheer/klanten' });
}

// concept van de huisstijl, los van wat al is toegepast
let concept = null;
let huisstijlGeneratie = 0;
let logoLezer = null;
let invoerTimer;
function stopHuisstijlWerk() {
  huisstijlGeneratie += 1;
  clearTimeout(invoerTimer);
  logoLezer?.abort();
  logoLezer = null;
}

function viewHuisstijl() {
  if (!concept) concept = JSON.parse(JSON.stringify(nu().huisstijl));
  const { kleuren, waarschuwingen } = bereken(concept.kleuren);
  const veld = (k, verplicht) => {
    const eigen = isHex(concept.kleuren[k]);
    const waarde = kleuren[k];
    return `
      <div class="kleurveld${!verplicht && !eigen ? ' is-auto' : ''}">
        <input type="color" id="kleur-${k}" value="${waarde.toLowerCase()}" data-kleur="${k}" aria-describedby="uitleg-${k}">
        <div class="kleurveld__tekst">
          <label for="kleur-${k}">${LABELS[k].naam}</label>
          <span id="uitleg-${k}" class="klein">${LABELS[k].waar}</span>
        </div>
        <input type="text" class="kleurveld__hex" value="${waarde}" data-hex="${k}" aria-label="${LABELS[k].naam} als hexcode" spellcheck="false" maxlength="7">
        ${verplicht ? '' : `<label class="kleurveld__auto"><input type="checkbox" data-auto="${k}" ${eigen ? '' : 'checked'}> automatisch</label>`}
      </div>`;
  };
  const vars = Object.entries(cssVariabelen(kleuren)).map(([k, v]) => `${k}:${v}`).join(';');
  const paren = [
    ['Tekst op paneel', kleuren.opPaneel, kleuren.paneel],
    ['Accent op paneel', kleuren.actieOpPaneel, kleuren.paneel],
    ['Tekst op hoofdknop', kleuren.opActie, kleuren.actie],
    ['Tekst op merkkleur', kleuren.opMerk, kleuren.merk],
    ['Tekst op grond', kleuren.tekst, kleuren.grond],
    ['Links op grond', kleuren.merkTekst, kleuren.grond],
  ];
  return schil(`
    <section class="paneel">
      <div class="paneel__in">
        <p class="bovenregel">Beheercentrum · De Wilgenhof</p>
        <h1>Huisstijl</h1>
        <p class="lead">Vier kleuren vul je altijd in. De andere vier rekent de leeromgeving zelf uit, tenzij je ze zet. Lettertype en vormen blijven gelijk, zodat het één product blijft.</p>
      </div>
    </section>
    <div class="wrap huisstijl">
      <form class="werkpaneel huisstijl__form" data-form="huisstijl">
        <h2>Organisatie</h2>
        <label class="veld" for="orgnaam">Naam in de leeromgeving
          <input id="orgnaam" type="text" value="${esc(concept.naam)}" data-naam maxlength="40">
        </label>
        <p class="klein">De leeromgeving heet dan: Leren bij ${esc(concept.naam || ORGANISATIE.naam)}.</p>

        <h2>Snel kiezen</h2>
        <div class="voorbeelden">
          ${HUISSTIJL_VOORBEELDEN.map((v) => {
            const kl = bereken(v.kleuren).kleuren;
            return `<button type="button" class="voorbeeld${concept.voorbeeld === v.id ? ' is-actief' : ''}" data-actie="voorbeeld" data-id="${v.id}"><span class="stalen stalen--klein">${['paneel', 'merk', 'actie', 'zacht'].map((k) => `<span style="background:${kl[k]}"></span>`).join('')}</span>${esc(v.naam)}</button>`;
          }).join('')}
        </div>

        <h2>Vier vaste kleuren</h2>
        ${VERPLICHT.map((k) => veld(k, true)).join('')}

        <h2>Vier extra kleuren</h2>
        <p class="klein">Staat automatisch aan, dan rekenen we de kleur uit de vaste kleuren.</p>
        ${OPTIONEEL.map((k) => veld(k, false)).join('')}

        <h2>Logo</h2>
        <div class="logoveld">
          <div class="logoveld__voorbeeld" style="background:${kleuren.paneel};color:${kleuren.opPaneel}">${logo(concept)}</div>
          <div>
            <label class="btn btn--rand btn--klein" for="logo-bestand">Kies een logo</label>
            <input class="sr" id="logo-bestand" type="file" accept="image/png,image/svg+xml,image/jpeg,image/webp" data-logo>
            ${concept.logo ? '<button type="button" class="linkknop" data-actie="logo-weg">Logo weghalen</button>' : ''}
            <p class="klein">SVG of PNG, het liefst een versie die op een donker vlak werkt. Hooguit 300 kB.</p>
          </div>
        </div>
      </form>

      <div class="huisstijl__rechts">
        <div class="werkpaneel">
          <h2>Zo ziet het eruit</h2>
          <div class="preview" style="${vars}">
            <div class="preview__paneel">
              <div class="preview__logo">${logo(concept)}</div>
              <p class="preview__boven">Verzorgende IG · De Linde</p>
              <p class="preview__kop">Goedemorgen Sanne</p>
              <div class="preview__balk"><span style="width:40%"></span></div>
              <span class="preview__knop">Verder waar je was</span>
            </div>
            <div class="preview__grond">
              <div class="preview__vlak">
                <span class="preview__nr">${ICOON.vink}</span>
                <span><strong>Rapporteren</strong><br><span class="preview__meta">10 min · casus · meetmoment</span></span>
              </div>
              <div class="preview__tip"><strong>Tip van de dag</strong> Schrijf voor de volgende dienst.</div>
              <p class="preview__fout">${ICOON.let} Zo loopt het af: de plek is nu open.</p>
              <a class="preview__link">Mijn overzicht</a>
            </div>
          </div>
        </div>
        <div class="werkpaneel">
          <h2>Leesbaarheid</h2>
          <ul class="contrast">
            ${paren.map(([naam, voor, achter]) => {
              const c = contrast(voor, achter);
              const ok = c >= 4.5;
              return `<li class="${ok ? 'is-goed' : 'is-fout'}"><span class="contrast__staal" style="background:${achter};color:${voor}">Aa</span><span>${naam}</span><strong>${(Math.round(c * 10) / 10).toString().replace('.', ',')} : 1</strong>${ok ? ICOON.vink : ICOON.let}</li>`;
            }).join('')}
          </ul>
          ${waarschuwingen.length ? `<div class="waarschuwing">${ICOON.let}<div>${waarschuwingen.map((w) => `<p>${esc(w.wat)}</p>`).join('')}</div></div>` : '<p class="klein">Alles haalt de norm van 4,5 : 1 voor gewone tekst. Witte of donkere tekst kiezen we zelf.</p>'}
        </div>
        <div class="knoppen knoppen--plak">
          <button type="button" class="btn btn--actie" data-actie="huisstijl-toepassen">Toepassen op ${esc(concept.naam || ORGANISATIE.naam)}</button>
          <button type="button" class="btn btn--rand" data-actie="huisstijl-terug">Terug naar wat er stond</button>
        </div>
      </div>
    </div>`, { route: '#/beheer/huisstijl' });
}

let wachtVraag = '';

function viewVraag() {
  return schil(`
    <section class="paneel">
      <div class="paneel__in">
        <a class="terug" href="#/overzicht">${ICOON.terug} Mijn overzicht</a>
        <p class="bovenregel">Vraag het</p>
        <h1>Zoek in het handboek van ${esc(orgNaam())}</h1>
        <p class="lead">Een vraag over een werkafspraak, of bij wie je moet zijn? Zoek het antwoord in het voorbeeldhandboek, met de bron erbij.</p>
      </div>
    </section>
    <div class="wrap smal"><div class="werkpaneel" id="vraag-het"></div></div>`, { route: '#/vraag' });
}

function viewBronnen() {
  return schil(`
    <section class="paneel">
      <div class="paneel__in">
        <p class="bovenregel">Beheercentrum · De Wilgenhof</p>
        <h1>Handboek en bronnen</h1>
        <p class="lead">Vraag het zoekt in deze voorbeeldbronnen. Wie doet wat is een voorbeeld, zonder SharePoint-koppeling. Voeg alleen verzonnen testtekst toe.</p>
      </div>
    </section>
    <div class="wrap"><div class="werkpaneel werkpaneel--vol" id="bronnen"></div></div>`, { route: '#/beheer/bronnen' });
}

function viewOefenen() {
  return schil(`
    <section class="paneel">
      <div class="paneel__in">
        <a class="terug" href="#/overzicht">${ICOON.terug} Mijn overzicht</a>
        <p class="bovenregel">Vrij oefenen</p>
        <h1>Klik rond in Nedap ONS</h1>
        <p class="lead">Zoek een cliënt, open het dossier en kijk overal rond. Wil je een doel? Doe de vier opdrachten.</p>
      </div>
    </section>
    <div class="wrap oefenwrap"><div id="oefenomgeving"></div></div>`, { route: '#/oefenen' });
}

function viewCertificaat() {
  return schil(certificaatPagina({ naam: `${MEDEWERKER.naam} ${MEDEWERKER.achternaam}`, profiel: PROFIELEN[MEDEWERKER.profiel].naam, afdeling: MEDEWERKER.afdeling, org: orgNaam(), logo: logo(), merk: OOM_MERK, toegewezen: mijnModules().map((m) => m.id), voortgang: nu().voortgang, dagen: nu().dagen }), { route: '#/certificaat' });
}

function viewNietGevonden() {
  return schil(`<div class="wrap smal"><div class="werkpaneel"><h1>Deze pagina bestaat niet</h1><p><a href="#/">Terug naar het begin</a></p></div></div>`);
}

// ---------- router ----------

function route() {
  return window.location.hash.replace(/^#/, '') || '/';
}

function casusIndexNodig(pad) {
  const rol = nu().rol;
  if (rol === 'medewerker' && pad.startsWith('/module/')) {
    const id = pad.split('/')[2];
    return id !== 'rondleiding' && MODULES.some((module) => module.id === id);
  }
  return rol === 'beheer' && (pad === '/beheer' || pad === '/beheer/schermen');
}

function laadCasusIndex() {
  if (casusIndexGeladen) return Promise.resolve();
  if (casusIndexPromise) return casusIndexPromise;
  casusIndexPromise = import('./casussen/index.js')
    .then(({ CASUSSEN: geladen }) => {
      Object.assign(CASUSSEN, geladen);
      casusIndexGeladen = true;
    })
    .catch((fout) => {
      casusIndexPromise = null;
      throw fout;
    });
  return casusIndexPromise;
}

function laadOefenModule() {
  if (oefenenModule) return Promise.resolve();
  if (oefenenModulePromise) return oefenenModulePromise;
  oefenenModulePromise = import('./oefenen.js')
    .then((module) => { oefenenModule = module; })
    .catch((fout) => {
      oefenenModulePromise = null;
      throw fout;
    });
  return oefenenModulePromise;
}

function toonCasusLaden(pad) {
  stopGemonteerdeSchermen();
  pasHuisstijlToe(nu().rol === 'beheer');
  document.body.dataset.rol = nu().rol || 'gast';
  app.innerHTML = schil('<div class="wrap smal"><div class="werkpaneel" role="status" aria-live="polite">De inhoud wordt geladen.</div></div>', { route: `#${pad}` });
  document.title = `Laden · Leren bij ${orgNaam()}`;
}

function toonCasusLaadfout(pad, generatie) {
  if (generatie !== renderGeneratie || route() !== pad) return;
  pasHuisstijlToe(nu().rol === 'beheer');
  document.body.dataset.rol = nu().rol || 'gast';
  app.innerHTML = schil(`
    <div class="wrap smal">
      <div class="werkpaneel" role="alert">
        <h1>Deze inhoud is niet geladen</h1>
        <p>Controleer je verbinding en probeer het opnieuw.</p>
        <button type="button" class="btn btn--actie" data-casus-opnieuw>Opnieuw proberen</button>
      </div>
    </div>`, { route: `#${pad}` });
  document.title = `Inhoud laden · Leren bij ${orgNaam()}`;
  app.querySelector('[data-casus-opnieuw]')?.addEventListener('click', () => window.location.reload());
}

function renderMetCasusdata() {
  const pad = route();
  const generatie = ++renderGeneratie;
  const casesNodig = casusIndexNodig(pad) && !casusIndexGeladen;
  const oefenenNodig = nu().rol === 'medewerker' && pad === '/oefenen' && !oefenenModule;
  if (!casesNodig && !oefenenNodig) {
    render();
    return;
  }
  toonCasusLaden(pad);
  Promise.all([
    ...(casesNodig ? [laadCasusIndex()] : []),
    ...(oefenenNodig ? [laadOefenModule()] : []),
  ]).then(() => {
    if (generatie !== renderGeneratie || route() !== pad) return;
    render();
  }).catch(() => toonCasusLaadfout(pad, generatie));
}

let stopUitleg = () => {};
let stopMaatwerk = () => {};
let stopBronnen = () => {};
let stopOefenen = () => {};
function stopGemonteerdeSchermen() {
  stopMaatwerk(); stopMaatwerk = () => {};
  stopBronnen(); stopBronnen = () => {};
  stopOefenen(); stopOefenen = () => {};
  stopUitleg(); stopUitleg = () => {};
}
function render(opties = {}) {
  stopGemonteerdeSchermen();
  let pad = route();
  if (PRESENTATIE) {
    const toegestaan = ['/', '/demo', '/overzicht', '/module/rapporteren', '/vraag', '/demo/uitproberen', '/opleider'];
    if (!toegestaan.includes(pad)) { window.location.hash = '/overzicht'; return; }
    if (pad === '/opleider' && nu().rol !== 'opleider') zet({ rol: 'opleider' });
    if (pad !== '/opleider' && nu().rol !== 'medewerker') zet({ rol: 'medewerker' });
  }
  const isHome = pad === '/' || pad === '/demo';
  if (isHome && nu().rol !== 'medewerker') zet({ rol: 'medewerker' });
  const rol = nu().rol;
  let html;
  let beheer = false;
  if (isHome) {
    html = viewOverzicht();
  } else if (pad === '/uitleg') {
    html = viewUitleg(OOM_MERK);
    beheer = true;
  } else if (pad === '/demo/uitproberen') {
    html = `${presentatieNavigatie(pad)}${viewMaatwerk(nu().maatwerk || beginMaatwerk(), OOM_MERK)}`;
    beheer = true;
  } else if (pad === '/rollen' || !rol) {
    html = viewRollen();
  } else if (rol === 'medewerker') {
    if (pad === '/welkom') html = viewWelkom();
    else if (pad === '/overzicht') html = viewOverzicht();
    else if (pad === '/certificaat') html = viewCertificaat();
    else if (pad === '/oefenen') html = viewOefenen();
    else if (pad === '/vraag') html = viewVraag();
    else if (pad.startsWith('/module/')) html = viewModule(pad.split('/')[2]);
    else html = viewOverzicht();
  } else if (rol === 'opleider') {
    html = pad === '/opleider/profielen' ? viewProfielen() : viewOpleider();
  } else if (rol === 'beheer') {
    beheer = true;
    if (pad === '/beheer/klanten') html = viewBeheerKlanten();
    else if (pad === '/beheer/schermen') html = viewSchermkaart();
    else if (pad === '/beheer/bronnen') html = viewBronnen();
    else if (pad === '/beheer/huisstijl') html = viewHuisstijl();
    else html = viewBeheerModules();
  }
  pasHuisstijlToe(beheer);
  document.body.dataset.rol = rol || 'gast';
  document.body.dataset.presentatie = PRESENTATIE ? '1' : '0';
  app.innerHTML = html;
  const titels = { '/demo': 'Mijn overzicht', '/uitleg': 'Zo werkt Ons Op Maat', '/demo/uitproberen': 'Probeer het maatwerk', '/rollen': 'Kies je rol', '/': 'Mijn overzicht', '/welkom': 'Welkom', '/overzicht': 'Mijn overzicht', '/opleider': 'Dashboard', '/opleider/profielen': 'Profielen', '/beheer': 'Bibliotheek', '/beheer/klanten': 'Klanten', '/beheer/huisstijl': 'Huisstijl', '/beheer/schermen': 'Schermkaart', '/certificaat': 'Certificaat', '/oefenen': 'Oefenen in ONS', '/vraag': 'Vraag het', '/beheer/bronnen': 'Handboek' };
  document.title = `${titels[pad] || 'Module'} · Leren bij ${orgNaam()}`;
  if (!opties.houdScroll) {
    window.scrollTo(0, 0);
    document.getElementById('inhoud')?.focus({ preventScroll: true });
  }
  const oefen = document.getElementById('oefenomgeving');
  if (oefen && oefenenModule) {
    const controller = oefenenModule.mountOefenen(oefen, { esc, meld, onOpdracht: () => {} });
    stopOefenen = () => controller?.destroy?.();
  }
  const vraag = document.getElementById('vraag-het');
  if (vraag) {
    mountVraag(vraag, { esc, beginVraag: wachtVraag || undefined, naarModule: (id) => ga(`/module/${id}`) });
    wachtVraag = '';
  }
  const bronnen = document.getElementById('bronnen');
  if (bronnen) {
    const bronController = mountBronnen(bronnen, { esc, meld });
    stopBronnen = () => bronController?.destroy?.();
  }
  const uitleg = app.querySelector('.uitleg');
  if (uitleg) stopUitleg = mountUitleg(uitleg);
  const maat = app.querySelector('.maat');
  if (maat) { const maatController = mountMaatwerk(maat, {
    lees: () => nu().maatwerk || beginMaatwerk(),
    schrijf: (maatwerk) => zet({ maatwerk }),
    render: () => { render({ houdScroll: true }); const kop = app.querySelector('#maat-podium h2'); if (kop) { kop.setAttribute('tabindex','-1'); kop.focus({preventScroll:true}); } },
    medewerker: () => { zet({ rol: 'medewerker', welkomGezien: true }); casus = null; ga('/module/rapporteren'); },
    naslag: () => {
      zet({ rol: 'medewerker', welkomGezien: true }); casus = null;
      wachtVraag = nu().maatwerk.actief.bron.versie === 2 ? 'Wat is de afspraak over de vervolgactie bij rapporteren?' : 'Wat is de afspraak over het doel bij rapporteren?';
      ga('/vraag');
    },
  }); stopMaatwerk = () => maatController?.destroy?.(); }
  if (!PRESENTATIE) toonWachtendMoment();
}

// Een nieuwe stap in de casus: schuif naar de vraag en zet de focus erop, ook op een telefoon.
function naarStap() {
  richtDoel(app);
  const kop = app.querySelector('.casus .werkpaneel h2');
  if (!kop) return;
  kop.setAttribute('tabindex', '-1');
  kop.focus({ preventScroll: true });
  window.scrollTo(0, 0);
  // Past de vraag niet ruim in beeld (telefoon), dan schuift hij naar boven.
  if (kop.getBoundingClientRect().bottom > window.innerHeight * 0.55) {
    const rustig = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    kop.scrollIntoView({ block: 'start', behavior: rustig ? 'auto' : 'smooth' });
  }
}

function ga(pad) {
  if (route() === pad) render();
  else window.location.hash = pad;
}

// ---------- acties ----------

function schuif(i, richting) {
  const v = casus.volgorde;
  const j = i + richting;
  if (j < 0 || j >= v.length) return;
  [v[i], v[j]] = [v[j], v[i]];
  casus.gecontroleerd = false;
  render({ houdScroll: true });
  app.querySelector(`[data-actie="${richting < 0 ? 'volgorde-op' : 'volgorde-neer'}"][data-i="${j}"]:not([disabled])`)?.focus();
}

// Kijken: de demo klikt zelf door, elke stap een paar seconden.
let kijkTimer;
function planKijk() {
  clearTimeout(kijkTimer);
  if (!casus?.speelt || casus.stand !== 'kijk') return;
  kijkTimer = setTimeout(() => {
    if (!casus?.speelt) return;
    casus.klik += 1;
    if (casus.klik >= CASUSSEN[casus.id].doorklik.stappen.length) casus.speelt = false;
    render({ houdScroll: true });
    planKijk();
  }, 3600);
}

// De meting van Doe zelf. De eerste keer is de nulmeting, de laatste keer laat zien waar je nu staat.
function bewaarMeting(id, z) {
  const nieuw = { sec: Math.round((z.eind - z.start) / 1000), fouten: z.fouten, hints: z.hints, datum: new Date().toISOString().slice(0, 10) };
  const oud = nu().metingen?.[id];
  zet({ metingen: { ...(nu().metingen || {}), [id]: { eerste: oud?.eerste || nieuw, laatste: nieuw, keer: (oud?.keer || 0) + 1 } } });
}

function startStand(stand) {
  casus.stand = stand;
  casus.klik = 0;
  casus.speelt = stand === 'kijk';
  casus.zelf = stand === 'zelf' ? { start: Date.now(), fouten: 0, hints: 0 } : null;
  render({ houdScroll: true });
  naarStap();
  planKijk();
}

const ACTIES = {
  rol(knop) {
    const rol = knop.dataset.rol;
    zet({ rol });
    if (rol === 'medewerker') ga(nu().welkomGezien ? '/overzicht' : '/welkom');
    else if (rol === 'opleider') ga('/opleider');
    else ga('/beheer');
  },
  'demo-voortgang'() {
    zet({ rol: 'opleider', filter: 'alle' }); casus = null; ga('/opleider');
  },
  sso() {
    meld('Deze demo is niet gekoppeld aan een organisatieaccount. Kies hieronder met welke rol je de demo wilt bekijken.');
  },
  uitloggen() {
    stopHuisstijlWerk();
    zet({ rol: null });
    casus = null;
    concept = null;
    ga('/rollen');
  },
  opnieuw() {
    stopHuisstijlWerk();
    opnieuw();
    if (oefenenModule) oefenenModule.resetOefenen();
    else {
      try { window.localStorage.removeItem('leeromgeving-oefenen-v1'); } catch { /* De rest van de demo kan blijven werken. */ }
    }
    resetVraag();
    casus = null;
    concept = null;
    ga('/');
    meld('De demo begint opnieuw. De huisstijl is bewaard.');
  },
  'start-rondleiding'() {
    zet({ welkomGezien: true });
    if (route() !== '/overzicht') {
      window.location.hash = '/overzicht';
      setTimeout(startTour, 80);
    } else startTour();
  },
  'sla-welkom-over'() {
    zet({ welkomGezien: true });
    ga('/overzicht');
  },
  afdrukken() {
    window.print();
  },
  'volgende-tip'() {
    const huidig = nu().tip ?? new Date().getDate();
    zet({ tip: (huidig + 1) % TIPS.length });
    render({ houdScroll: true });
    app.querySelector('[data-actie="volgende-tip"]')?.focus();
  },
  'markeer-klaar'(knop) {
    markeer(knop.dataset.id, 'klaar');
    meld('Klaar. Je opleider ziet het vinkje ook.');
    ga('/overzicht');
  },
  'les-volgende'() {
    markeer(casus.id, 'bezig');
    casus.lesPagina += 1;
    render({ houdScroll: true });
    naarStap();
  },
  'les-vorige'() {
    casus.lesPagina = Math.max(0, casus.lesPagina - 1);
    render({ houdScroll: true });
    naarStap();
  },
  'les-klaar'() {
    markeer(casus.id, 'bezig');
    casus.stap = CASUSSEN[casus.id].doorklik ? 'doorklik' : 'intro';
    casus.klik = 0;
    casus.stand = 'mee';
    render({ houdScroll: true });
    naarStap();
  },
  'doorklik-verder'() {
    markeer(casus.id, 'bezig');
    casus.klik += 1;
    render({ houdScroll: true });
    naarStap();
    planKijk();
  },
  afspraak(knop) {
    casus.afspraak = knop.dataset.aan === '1';
    render({ houdScroll: true });
    app.querySelector(`[data-actie="afspraak"][data-aan="${knop.dataset.aan}"]`)?.focus();
  },
  stand(knop) {
    startStand(knop.dataset.stand);
  },
  'kijk-speel'() {
    casus.speelt = !casus.speelt;
    render({ houdScroll: true });
    app.querySelector('[data-actie="kijk-speel"]')?.focus();
    planKijk();
  },
  'zelf-goed'() {
    const z = casus.zelf;
    z.foutNu = false;
    z.hintNu = false;
    casus.klik += 1;
    if (casus.klik >= CASUSSEN[casus.id].doorklik.stappen.length) {
      z.eind = Date.now();
      bewaarMeting(casus.id, z);
    }
    render({ houdScroll: true });
    naarStap();
  },
  'zelf-fout'(knop) {
    casus.zelf.fouten += 1;
    casus.zelf.foutNu = true;
    render({ houdScroll: true });
    const feedback = app.querySelector('.doorklik__fout');
    feedback?.setAttribute('tabindex', '-1');
    feedback?.focus();
    feedback?.scrollIntoView({ block: 'nearest' });
  },
  'zelf-hint'() {
    casus.zelf.hints += 1;
    casus.zelf.hintNu = true;
    casus.zelf.foutNu = false;
    render({ houdScroll: true });
    richtDoel(app);
    app.querySelector('.ons .dk-doel, .tel .dk-doel')?.focus();
  },
  'doorklik-terug'() {
    casus.klik = Math.max(0, casus.klik - 1);
    render({ houdScroll: true });
    naarStap();
  },
  'doorklik-opnieuw'() {
    casus.klik = 0;
    render({ houdScroll: true });
    naarStap();
  },
  'doorklik-klaar'() {
    casus.speelt = false;
    clearTimeout(kijkTimer);
    casus.stap = 'intro';
    render({ houdScroll: true });
    naarStap();
  },
  'casus-start'() {
    markeer(casus.id, 'bezig');
    casus.stap = 0;
    casus.keuze = null;
    render({ houdScroll: true });
    naarStap();
  },
  kies(knop) {
    casus.keuze = Number(knop.dataset.i);
    render({ houdScroll: true });
    const variant = document.querySelector('.variant');
    variant?.setAttribute('tabindex', '-1');
    variant?.focus({ preventScroll: true });
    variant?.scrollIntoView({ block: 'nearest', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  },
  'casus-opnieuw-keuze'() {
    casus.keuze = null;
    render({ houdScroll: true });
    app.querySelector('.keuze')?.focus();
  },
  'casus-verder'() {
    const volgende = casus.stap + 1;
    casus.keuze = null;
    casus.gecontroleerd = false;
    casus.volgorde = null;
    const c = CASUSSEN[casus.id];
    casus.stap = volgende < c.stappen.length ? volgende : c.toets?.length ? 'toets' : 'afronden';
    render({ houdScroll: true });
    naarStap();
  },
  'volgorde-op'(knop) {
    schuif(Number(knop.dataset.i), -1);
  },
  'volgorde-neer'(knop) {
    schuif(Number(knop.dataset.i), 1);
  },
  'casus-afronden'() {
    const m = MODULES.find((x) => x.id === casus.id);
    markeer(casus.id, 'klaar');
    meld(`${m.titel} is klaar. Je opleider ziet het vinkje ook.`);
    render();
  },
  'koppel-check'() {
    casus.gecontroleerd = true;
    render({ houdScroll: true });
    const feedback = app.querySelector('.variant');
    feedback?.setAttribute('tabindex', '-1');
    feedback?.focus();
  },
  'toets-opnieuw'() {
    casus.antwoorden = {};
    const inhoud = CASUSSEN[casus.id];
    casus.toets = maakToetsPoging(inhoud.vragenbank || inhoud.toets || [], inhoud.vragenPerPoging || 5);
    casus.stap = 'toets';
    render({ houdScroll: true });
    naarStap();
  },
  filter(knop) {
    const gekozen = knop.dataset.filter;
    const vanTegel = knop.classList.contains('tegel--knop');
    zet({ filter: vanTegel && nu().filter === gekozen ? 'alle' : gekozen });
    render({ houdScroll: true });
    if (vanTegel) {
      const tabel = app.querySelector('.tabelkop h2');
      tabel?.setAttribute('tabindex', '-1');
      tabel?.focus({ preventScroll: true });
      tabel?.scrollIntoView({ block: 'start', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    } else {
      app.querySelector(`[data-actie="filter"][data-filter="${gekozen}"]:not(.tegel--knop)`)?.focus();
    }
  },
  'release-leeg'() {
    veranderd = [];
    render({ houdScroll: true });
  },
  'toewijzing-standaard'() {
    zet({ toewijzing: { vig: [...TOEWIJZING.vig], helpende: [...TOEWIJZING.helpende] } });
    render({ houdScroll: true });
    meld('De standaard van Ons Op Maat staat er weer.');
  },
  'als-opleider'(knop, e) {
    e.preventDefault();
    zet({ rol: 'opleider' });
    ga('/opleider/profielen');
  },
  voorbeeld(knop) {
    stopHuisstijlWerk();
    const v = HUISSTIJL_VOORBEELDEN.find((x) => x.id === knop.dataset.id);
    concept = { ...concept, voorbeeld: v.id, kleuren: { ...v.kleuren }, logo: v.logo || null };
    render({ houdScroll: true });
  },
  'logo-weg'() {
    stopHuisstijlWerk();
    concept.logo = null;
    render({ houdScroll: true });
  },
  'huisstijl-toepassen'() {
    stopHuisstijlWerk();
    zet({ huisstijl: JSON.parse(JSON.stringify(concept)) });
    render({ houdScroll: true });
    meld(`Toegepast. Log in als Sanne of als opleider om Leren bij ${orgNaam()} in deze kleuren te zien.`);
  },
  'huisstijl-terug'() {
    stopHuisstijlWerk();
    concept = JSON.parse(JSON.stringify(nu().huisstijl));
    render({ houdScroll: true });
  },
};

app.addEventListener('click', (e) => {
  const knop = e.target.closest('[data-actie]');
  if (!knop || knop.disabled) return;
  const actie = ACTIES[knop.dataset.actie];
  if (actie) actie(knop, e);
});

document.addEventListener('click', (e) => {
  if (e.target.closest('.naar-inhoud')) {
    e.preventDefault();
    const inhoud = document.getElementById('inhoud');
    inhoud?.focus({ preventScroll: true });
    inhoud?.scrollIntoView({ block: 'start', behavior: 'instant' });
    return;
  }
  const knop = e.target.closest('.voet [data-actie]');
  if (knop && !app.contains(knop)) ACTIES[knop.dataset.actie]?.(knop, e);
});

app.addEventListener('submit', (e) => {
  const form = e.target.closest('[data-form]');
  if (!form) return;
  e.preventDefault();
  if (form.dataset.form === 'vraag') {
    wachtVraag = form.elements.vraag.value.trim();
    ga('/vraag');
    return;
  }
  if (form.dataset.form === 'mail') {
    meld('Deze demo verstuurt geen e-mail. Kies hieronder met welke rol je de demo wilt bekijken.');
  }
  if (form.dataset.form === 'toets') {
    casus.stap = 'uitslag';
    const t = casus.toets;
    const goed = t.filter((v, i) => casus.antwoorden[i] === v.goed).length;
    const score = Math.round((goed / t.length) * 100);
    zet({ scores: { ...nu().scores, [casus.id]: Math.max(score, nu().scores[casus.id] || 0) } });
    if (goed / t.length >= NORM) {
      markeer(casus.id, 'klaar');
      meld(`${MODULES.find((x) => x.id === casus.id).titel} is klaar. Je opleider ziet het vinkje ook.`);
    }
    render();
  }
});

app.addEventListener('change', (e) => {
  const el = e.target;
  if (el.dataset.koppel !== undefined) {
    casus.koppel[el.dataset.koppel] = el.value;
    casus.gecontroleerd = false;
    render({ houdScroll: true });
    document.getElementById(el.id)?.focus();
  }
  if (el.name && /^v\d+$/.test(el.name)) {
    casus.antwoorden[Number(el.name.slice(1))] = Number(el.value);
    const knop = app.querySelector('[data-form="toets"] [type="submit"]');
    const open = casus.toets.filter((_, i) => casus.antwoorden[i] === undefined).length;
    if (knop) knop.disabled = open > 0;
    const teller = app.querySelector('#toets-open');
    if (teller) teller.textContent = nogOpen(open);
  }
  if (el.dataset.scherm) {
    veranderd = el.checked ? [...veranderd, el.dataset.scherm] : veranderd.filter((x) => x !== el.dataset.scherm);
    render({ houdScroll: true });
    document.querySelector(`[data-scherm="${CSS.escape(el.dataset.scherm)}"]`)?.focus();
  }
  if (el.dataset.toewijs) {
    const p = el.dataset.toewijs;
    const huidig = new Set(nu().toewijzing[p]);
    if (el.checked) huidig.add(el.value);
    else huidig.delete(el.value);
    const volgorde = MODULES.map((m) => m.id).filter((id) => huidig.has(id));
    zet({ toewijzing: { ...nu().toewijzing, [p]: volgorde } });
    render({ houdScroll: true });
    document.querySelector(`[data-toewijs="${p}"][value="${el.value}"]`)?.focus();
  }
  if (el.dataset.auto) {
    const k = el.dataset.auto;
    const kleuren = { ...concept.kleuren };
    if (el.checked) delete kleuren[k];
    else kleuren[k] = bereken(concept.kleuren).kleuren[k];
    concept = { ...concept, kleuren, voorbeeld: null };
    render({ houdScroll: true });
  }
  if (el.dataset.logo !== undefined) {
    stopHuisstijlWerk();
    if (!concept || route() !== '/beheer/huisstijl') return;
    const generatie = huisstijlGeneratie;
    const bestand = el.files?.[0];
    if (!bestand) return;
    if (bestand.size > 300 * 1024) return meld('Dit logo is groter dan 300 kB. Kies een kleiner bestand.');
    if (!/^image\/(png|svg\+xml|jpeg|webp)$/.test(bestand.type)) return meld('Kies een SVG, PNG, JPG of WebP.');
    const lezer = new FileReader();
    logoLezer = lezer;
    const geldig = () => generatie === huisstijlGeneratie && logoLezer === lezer && concept && route() === '/beheer/huisstijl';
    lezer.onerror = () => { if (geldig()) { logoLezer = null; meld('Het logo kon niet worden gelezen. Probeer opnieuw.'); } };
    lezer.onload = () => {
      if (!geldig()) return;
      logoLezer = null;
      concept = { ...concept, logo: String(lezer.result) };
      render({ houdScroll: true });
    };
    lezer.readAsDataURL(bestand);
  }
});

app.addEventListener('input', (e) => {
  const el = e.target;
  if (el.dataset.kleur || el.dataset.hex) {
    if (!concept || route() !== '/beheer/huisstijl') return;
    const generatie = huisstijlGeneratie;
    const k = el.dataset.kleur || el.dataset.hex;
    const waarde = el.value.startsWith('#') ? el.value : '#' + el.value;
    if (!isHex(waarde)) return;
    concept = { ...concept, kleuren: { ...concept.kleuren, [k]: waarde.toUpperCase() }, voorbeeld: null };
    clearTimeout(invoerTimer);
    const id = el.id;
    invoerTimer = setTimeout(() => {
      if (generatie !== huisstijlGeneratie || !concept || route() !== '/beheer/huisstijl') return;
      render({ houdScroll: true });
      if (id) document.getElementById(id)?.focus();
    }, el.dataset.kleur ? 60 : 250);
  }
  if (el.dataset.naam !== undefined) {
    if (!concept || route() !== '/beheer/huisstijl') return;
    const generatie = huisstijlGeneratie;
    concept = { ...concept, naam: el.value };
    clearTimeout(invoerTimer);
    invoerTimer = setTimeout(() => {
      if (generatie !== huisstijlGeneratie || !concept || route() !== '/beheer/huisstijl') return;
      const pos = el.selectionStart;
      render({ houdScroll: true });
      const nieuw = document.getElementById('orgnaam');
      if (nieuw) {
        nieuw.focus();
        nieuw.setSelectionRange(pos, pos);
      }
    }, 300);
  }
});

// De welkomstvideo meldt hoe hoog hij is.
window.addEventListener('message', (e) => {
  const h = e.data?.welkomstvideo?.hoogte;
  if (e.origin !== location.origin || !Number.isFinite(h)) return;
  const speler = app.querySelector('.video__speler');
  if (speler) speler.style.height = `${Math.ceil(h)}px`;
});

window.addEventListener('hashchange', () => {
  stopHuisstijlWerk();
  stopRondleiding();
  clearTimeout(kijkTimer);
  if (casus && route() !== `/module/${casus.id}`) casus = null;
  if (route() !== '/beheer/huisstijl') concept = null;
  renderMetCasusdata();
});

// Op een telefoon zeggen we één keer dat de leeromgeving het best werkt op een laptop of tablet.
const SCHERMTIP = 'leeromgeving-schermtip-gezien';

function toonSchermtip() {
  if (!window.matchMedia('(max-width: 767px)').matches) return;
  try {
    if (window.localStorage.getItem(SCHERMTIP)) return;
  } catch {
    // geen opslag, dan tonen we hem gewoon
  }
  const venster = document.createElement('aside');
  venster.className = 'schermtip';
  venster.setAttribute('role', 'region');
  venster.setAttribute('aria-labelledby', 'schermtip-kop');
  venster.setAttribute('aria-describedby', 'schermtip-uitleg');
  venster.innerHTML = `
    <div class="moment__kaart schermtip__kaart">
      <svg class="schermtip__beeld" viewBox="0 0 96 64" aria-hidden="true"><rect x="16" y="8" width="64" height="40" rx="5"/><path d="M6 54h84"/><rect x="62" y="24" width="20" height="34" rx="4" class="schermtip__tel"/></svg>
      <h2 id="schermtip-kop">Pak er een laptop of tablet bij</h2>
      <div id="schermtip-uitleg"><p>Op een laptop of tablet zie je Nedap ONS en klik je makkelijker mee.</p>
      <p>Op je telefoon kun je ook rondkijken.</p></div>
      <button type="button" class="btn btn--actie btn--breed" data-schermtip-dicht>Begrepen</button>
    </div>`;
  const sluit = () => {
    try {
      window.localStorage.setItem(SCHERMTIP, '1');
    } catch {
      // niet te bewaren, dan zie je hem bij een volgend bezoek nog een keer
    }
    venster.remove();
  };
  venster.querySelector('[data-schermtip-dicht]').addEventListener('click', sluit);
  document.body.append(venster);
}

laad();
renderMetCasusdata();
toonSchermtip();
