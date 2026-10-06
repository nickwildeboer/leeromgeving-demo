// Beloning voor de medewerker: een badge per deel, een rustig moment bij een nieuwe badge,
// dagen op rij en een certificaat als alles klaar is.
// De pure functies bovenaan zijn getest in tests/beloning.test.js.
import { DELEN, MODULES } from './data.js';
import { nu, zet } from './state.js';

const esc = (t) => String(t ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Eén badge per deel. De naam staat op de badge, de tekst komt in het moment.
export const BADGES = {
  welkom: { naam: 'Wegwijs', tekst: 'Je weet de weg. Je weet waar je alles vindt, en bij wie je terechtkunt met een vraag.' },
  start: { naam: 'Goed begonnen', tekst: 'Je weet wat je doet in de eerste tien minuten van je dienst. Zo begin je rustig.' },
  tijdens: { naam: 'Aan het bed', tekst: 'Dit was het grootste deel. Je weet hoe je het werk aan het bed vastlegt, zoals wij dat hier doen.' },
  afspraken: { naam: 'Samen afgesproken', tekst: 'Je kent de afspraken die voor iedereen gelden. Daar kunnen je collega\'s op bouwen.' },
  apps: { naam: 'Bij de hand', tekst: 'Je kunt aan de slag met de apps op je telefoon. Ook aan het bed.' },
};

// ---------- pure functies ----------

// De datum als jjjj-mm-dd, in de tijd van de gebruiker.
export function dagStempel(d = new Date()) {
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function modulesVanDeel(deelId, toegewezen, modules = MODULES) {
  return modules.filter((m) => m.deel === deelId && toegewezen.includes(m.id));
}

// Delen waarin de medewerker minstens één module heeft.
export function delenMetModules(toegewezen, modules = MODULES, delen = DELEN) {
  return delen.filter((d) => modulesVanDeel(d.id, toegewezen, modules).length > 0);
}

// Een deel is klaar als er modules in zitten en ze allemaal klaar zijn.
export function deelKlaar(deelId, toegewezen, voortgang, modules = MODULES) {
  const mods = modulesVanDeel(deelId, toegewezen, modules);
  return mods.length > 0 && mods.every((m) => voortgang[m.id] === 'klaar');
}

export function verdiendeBadges(toegewezen, voortgang, modules = MODULES, delen = DELEN) {
  return delen.filter((d) => deelKlaar(d.id, toegewezen, voortgang, modules)).map((d) => d.id);
}

export function allesKlaar(toegewezen, voortgang, modules = MODULES) {
  const mods = modules.filter((m) => toegewezen.includes(m.id));
  return mods.length > 0 && mods.every((m) => voortgang[m.id] === 'klaar');
}

// Voor collega's kennen we alleen het aantal klaar. Net als bij de vinkjes per deel
// vullen we de delen op volgorde: eerst deel 1, dan deel 2, enzovoort.
export function badgesUitAantal(klaar, toegewezen, modules = MODULES, delen = DELEN) {
  let over = klaar;
  let aantal = 0;
  for (const d of delen) {
    const n = modulesVanDeel(d.id, toegewezen, modules).length;
    if (!n) continue;
    if (over >= n) aantal += 1;
    over -= n;
    if (over <= 0) break;
  }
  return aantal;
}

export function voegDagToe(dagen, dag) {
  return [...new Set([...(dagen || []), dag])].sort();
}

// Hoeveel dagen op rij, tot en met vandaag. Leerde je gisteren wel en vandaag nog niet,
// dan telt de reeks nog mee. Is hij onderbroken, dan is het 0.
export function dagenOpRij(dagen, vandaag) {
  const set = new Set(dagen || []);
  const terug = (dag) => {
    const d = new Date(`${dag}T12:00:00`);
    d.setDate(d.getDate() - 1);
    return dagStempel(d);
  };
  let dag = set.has(vandaag) ? vandaag : terug(vandaag);
  let aantal = 0;
  while (set.has(dag)) {
    aantal += 1;
    dag = terug(dag);
  }
  return aantal;
}

// ---------- de badges als SVG ----------

const ICONEN = {
  // kompas
  welkom: '<circle class="badge__lijn" cx="32" cy="32" r="12.5"/><path class="badge__accent" d="M32 21.5l3.6 10.5h-7.2z"/><path class="badge__vol" d="M28.4 32h7.2L32 42.5z"/><path class="badge__lijn" d="M32 17v2.4M32 44.6V47M17 32h2.4M44.6 32H47"/>',
  // de zon komt op: begin van je dienst
  start: '<path class="badge__accent" d="M23.5 39a8.5 8.5 0 0 1 17 0z"/><path class="badge__lijn" d="M23.5 39a8.5 8.5 0 0 1 17 0M17.5 39h29M22 44.5h20M32 21.5v4M20.8 27.8l2.8 2.8M43.2 27.8l-2.8 2.8"/>',
  // hart: het werk aan het bed
  tijdens: '<path class="badge__accent badge__lijn" d="M32 44.5c-8-5.6-13-10.4-13-16.2 0-3.9 3-6.8 6.6-6.8 2.8 0 4.9 1.6 6.4 3.9 1.5-2.3 3.6-3.9 6.4-3.9 3.6 0 6.6 2.9 6.6 6.8 0 5.8-5 10.6-13 16.2z"/><path class="badge__lijn" d="M24 32h4.2l2-3.6 3.4 7 2-3.4H40"/>',
  // klembord met vinkjes: de afspraken
  afspraken: '<rect class="badge__lijn" x="21.5" y="19.5" width="21" height="26" rx="3.2"/><rect class="badge__accent badge__lijn" x="27" y="16.5" width="10" height="5.6" rx="1.8"/><path class="badge__lijn" d="M25.6 29.4l2.1 2.1 3.6-3.6M34.4 30h4M25.6 37.4l2.1 2.1 3.6-3.6M34.4 38h4"/>',
  // telefoon
  apps: '<rect class="badge__lijn" x="23.5" y="16.5" width="17" height="31" rx="3.8"/><path class="badge__lijn" d="M29.6 20.6h4.8"/><circle class="badge__accent" cx="32" cy="32" r="6"/><path class="badge__lijn" d="M29.3 32.1l1.9 1.9 3.6-3.7M30 43h4"/>',
};

export function badgeSvg(deelId, label = '') {
  const toegankelijk = label ? `role="img" aria-label="${esc(label)}"` : 'aria-hidden="true"';
  return `<svg class="badge" viewBox="0 0 64 64" ${toegankelijk} focusable="false">
    <circle class="badge__rand" cx="32" cy="32" r="31"/>
    <circle class="badge__steek" cx="32" cy="32" r="27.6"/>
    <circle class="badge__vlak" cx="32" cy="32" r="24.5"/>
    <g class="badge__icoon">${ICONEN[deelId] || ''}</g>
  </svg>`;
}

// ---------- stukjes voor het overzicht ----------

export function deelBadge(deelId, verdiend) {
  const b = BADGES[deelId];
  const label = verdiend ? `Badge ${b.naam}, verdiend` : `Badge ${b.naam}, nog niet verdiend`;
  return `<span class="deel__badge ${verdiend ? 'is-verdiend' : 'is-nog'}" title="${esc(label)}">${badgeSvg(deelId, label)}</span>`;
}

export function badgeBlok({ toegewezen, voortgang, dagen, vandaag = dagStempel() }) {
  const delen = delenMetModules(toegewezen);
  if (!delen.length) return '';
  const verdiend = verdiendeBadges(toegewezen, voortgang);
  const reeks = dagenOpRij(dagen, vandaag);
  const items = delen.map((d) => {
    const ja = verdiend.includes(d.id);
    const nr = DELEN.findIndex((x) => x.id === d.id) + 1;
    return `
      <li class="badges__item ${ja ? 'is-verdiend' : 'is-nog'}">
        ${badgeSvg(d.id)}
        <span class="badges__naam">${esc(BADGES[d.id].naam)}</span>
        <span class="badges__deel">Deel ${nr}<span class="sr">${ja ? ', verdiend' : ', nog niet verdiend'}</span></span>
      </li>`;
  }).join('');
  const kaart = allesKlaar(toegewezen, voortgang) ? `
    <div class="cert-kaart">
      <span class="cert-kaart__badges" aria-hidden="true">${verdiend.slice(0, 3).map((id) => badgeSvg(id)).join('')}</span>
      <div class="cert-kaart__tekst">
        <h2 id="cert-kop">Alles is klaar. Je certificaat staat voor je klaar.</h2>
        <p>Je hebt alle modules afgerond. Bewaar je certificaat, of druk het af voor je map.</p>
      </div>
      <a class="btn btn--actie" href="#/certificaat" aria-describedby="cert-kop">Bekijk je certificaat <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg></a>
    </div>` : '';
  return `
    <section class="badges" aria-labelledby="badges-kop">
      ${kaart}
      <header class="badges__kop">
        <div>
          <h2 id="badges-kop">Jouw badges</h2>
          <p class="badges__uitleg">Rond je alle modules van een deel af, dan krijg je de badge van dat deel.</p>
        </div>
        <div class="badges__tellers">
          <p class="badges__teller"><strong>${verdiend.length} van ${delen.length}</strong> verdiend</p>
          ${reeks >= 2 ? `<p class="badges__reeks">Je leerde ${reeks} dagen op rij</p>` : ''}
        </div>
      </header>
      <ul class="badges__lijst">${items}</ul>
    </section>`;
}

// ---------- opleidersdashboard ----------

export function aantalBadges(rij, toegewezen, voortgang) {
  return rij.live ? verdiendeBadges(toegewezen, voortgang).length : badgesUitAantal(rij.klaar, toegewezen);
}

export function badgeTeller(aantal, totaal) {
  return `<span class="badgeteller${aantal ? '' : ' is-nul'}"><span class="badgeteller__munt" aria-hidden="true"></span>${aantal}<span class="klein">van ${totaal}</span></span>`;
}

// ---------- het certificaat ----------

function datumTekst(dag) {
  return new Date(`${dag}T12:00:00`).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function certificaatPagina({ naam, profiel, afdeling, org, logo, merk, toegewezen, voortgang, dagen }) {
  const pijlTerug = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H6M11 6l-6 6 6 6"/></svg>';
  if (!allesKlaar(toegewezen, voortgang)) {
    const totaal = MODULES.filter((m) => toegewezen.includes(m.id)).length;
    const klaar = MODULES.filter((m) => toegewezen.includes(m.id) && voortgang[m.id] === 'klaar').length;
    return `
      <div class="wrap smal">
        <div class="werkpaneel cert-nog">
          <h1>Je certificaat komt hier</h1>
          <p>Heb je alle modules afgerond, dan staat hier je certificaat. Je hebt er nu ${klaar} van ${totaal} klaar.</p>
          <a class="btn btn--actie" href="#/overzicht">Naar mijn overzicht</a>
        </div>
      </div>`;
  }
  const verdiend = verdiendeBadges(toegewezen, voortgang);
  const laatste = (dagen || []).slice().sort().pop() || dagStempel();
  return `
    <div class="wrap cert-pagina">
      <div class="cert-acties">
        <a class="terug terug--donker" href="#/overzicht">${pijlTerug} Mijn overzicht</a>
        <button type="button" class="btn btn--actie" data-actie="afdrukken">Afdrukken</button>
      </div>
      <article class="certificaat" aria-labelledby="cert-naam">
        <header class="certificaat__kop">
          <span class="certificaat__logo">${logo}</span>
          <p class="certificaat__titel">Leren bij ${esc(org)}</p>
        </header>
        <div class="certificaat__body">
          <p class="certificaat__soort">Certificaat</p>
          <h1 class="certificaat__naam" id="cert-naam">${esc(naam)}</h1>
          <p class="certificaat__wat">heeft alle modules van Leren bij ${esc(org)} afgerond.</p>
          <ul class="certificaat__badges">
            ${verdiend.map((id) => {
              const d = DELEN.find((x) => x.id === id);
              return `<li>${badgeSvg(id)}<span class="certificaat__badgenaam">${esc(BADGES[id].naam)}</span><span class="certificaat__deel">${esc(d.titel)}</span></li>`;
            }).join('')}
          </ul>
        </div>
        <footer class="certificaat__voet">
          <dl class="certificaat__feiten">
            <div><dt>Profiel</dt><dd>${esc(profiel)}${afdeling ? `, ${esc(afdeling)}` : ''}</dd></div>
            <div><dt>Datum</dt><dd>${esc(datumTekst(laatste))}</dd></div>
          </dl>
          <p class="certificaat__gemaakt">Gemaakt door ${merk}</p>
        </footer>
      </article>
    </div>`;
}

// ---------- het moment bij een nieuwe badge ----------

let wachtend = null;
let open = null;

// Aanroepen direct nadat een module op klaar is gezet. Houdt de dag bij en kijkt of er
// een deel klaar is geworden. Dat moment tonen we één keer, na de volgende render.
export function beloonAfronding(toegewezen, voortgangVoor) {
  const s = nu();
  const gevierd = s.gevierd || [];
  const voor = verdiendeBadges(toegewezen, voortgangVoor || {});
  const nieuw = verdiendeBadges(toegewezen, s.voortgang).filter((id) => !voor.includes(id) && !gevierd.includes(id));
  zet({ dagen: voegDagToe(s.dagen, dagStempel()), gevierd: [...gevierd, ...nieuw] });
  if (nieuw.length) wachtend = { deel: nieuw[nieuw.length - 1], alles: allesKlaar(toegewezen, s.voortgang) };
}

export function toonWachtendMoment() {
  if (!wachtend || typeof document === 'undefined') return;
  const w = wachtend;
  wachtend = null;
  toonMoment(w);
}

export function sluitMoment() {
  if (!open) return;
  const { laag, toetsen, vorigeFocus } = open;
  open = null;
  document.removeEventListener('keydown', toetsen, true);
  laag.remove();
  if (vorigeFocus?.isConnected) vorigeFocus.focus({ preventScroll: true });
}

function toonMoment({ deel, alles }) {
  sluitMoment();
  const nr = DELEN.findIndex((d) => d.id === deel) + 1;
  const d = DELEN[nr - 1];
  const b = BADGES[deel];
  const laag = document.createElement('div');
  laag.className = 'moment';
  laag.innerHTML = `
    <div class="moment__kaart" role="dialog" aria-modal="true" aria-labelledby="moment-kop" aria-describedby="moment-tekst">
      <div class="moment__badge">${badgeSvg(deel)}</div>
      <p class="moment__boven">Deel ${nr} · ${esc(d.titel)}</p>
      <h2 class="moment__kop" id="moment-kop">Je badge ${esc(b.naam)}</h2>
      <p class="moment__tekst" id="moment-tekst">${esc(b.tekst)}${alles ? ' En daarmee is alles klaar. Je certificaat staat voor je klaar.' : ''}</p>
      <div class="moment__knoppen">
        ${alles ? '<a class="btn btn--actie" href="#/certificaat" data-moment="naar">Bekijk je certificaat</a>' : ''}
        <a class="btn ${alles ? 'btn--rand' : 'btn--actie'}" href="#/overzicht" data-moment="naar">Terug naar mijn overzicht</a>
      </div>
    </div>`;
  document.body.appendChild(laag);
  const kaart = laag.querySelector('.moment__kaart');
  const knoppen = () => [...kaart.querySelectorAll('a, button')];

  const toetsen = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      sluitMoment();
    } else if (e.key === 'Tab') {
      const lijst = knoppen();
      const eerste = lijst[0];
      const laatste = lijst[lijst.length - 1];
      if (e.shiftKey && document.activeElement === eerste) {
        e.preventDefault();
        laatste.focus();
      } else if (!e.shiftKey && document.activeElement === laatste) {
        e.preventDefault();
        eerste.focus();
      } else if (!kaart.contains(document.activeElement)) {
        e.preventDefault();
        eerste.focus();
      }
    }
  };
  laag.addEventListener('click', (e) => {
    if (e.target === laag) sluitMoment();
    const naar = e.target.closest('[data-moment="naar"]');
    // staat de pagina er al, dan sluit je alleen het moment
    if (naar && window.location.hash === naar.getAttribute('href')) {
      e.preventDefault();
      sluitMoment();
    }
  });
  document.addEventListener('keydown', toetsen, true);
  open = { laag, toetsen, vorigeFocus: document.activeElement };
  knoppen()[0].focus({ preventScroll: true });
}

if (typeof window !== 'undefined') window.addEventListener('hashchange', sluitMoment);
