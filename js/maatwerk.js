// Verkoopdemonstratie. Geen modelaanroep: alleen deze gecontroleerde voorbeeldbronnen.
export const BRONNEN = [
  { versie: 1, naam: 'Handboek De Wilgenhof', hoofdstuk: '4.2 Rapporteren', tekst: 'Koppel een rapportage over het zorgplan aan het bijbehorende doel.\nLeg je observatie vast vóór het einde van je dienst.\nBeschrijf wat je ziet en hoort, zonder oordeel.' },
  { versie: 2, naam: 'Handboek De Wilgenhof', hoofdstuk: '4.2 Rapporteren', tekst: 'Koppel een rapportage over het zorgplan aan het bijbehorende doel en vermeld de vervolgactie.\nLeg je observatie vast vóór het einde van je dienst.\nBeschrijf wat je ziet en hoort, zonder oordeel.' },
];
// Het proces in vijf stappen, met hooguit één korte zin per stap.
export const STAPPEN = [
  ['Jullie handboek', 'Daar staan jullie afspraken.'],
  ['Wij maken de module', 'Uitleg, oefening en naslag.'],
  ['Jullie keuren goed', 'Niets zonder jullie akkoord.'],
  ['Medewerkers leren', 'Met de afspraak ernaast.'],
  ['De afspraak verandert', 'De module verandert mee.'],
];
export function beginMaatwerk() {
  return { stap: 0, bron: { ...BRONNEN[0] }, voorstellen: [], akkoord: [], actief: null, antwoord: null, fout: '', gewijzigd: false };
}
export function analyseerBron(bron) {
  const bekend = BRONNEN.find(b => b.tekst === bron.tekst && b.versie === bron.versie && b.naam === bron.naam);
  if (!bekend) return [];
  return bron.tekst.split('\n').map((tekst, i) => ({ id: `v${bron.versie}-${i}`, tekst, plek: ['Oefening, doel koppelen', 'Uitleg, moment van rapporteren', 'Naslag, feitelijk rapporteren'][i], regel: i + 1 }));
}
export function wijzigMaatwerk(s, actie, waarde) {
  if (actie === 'reset') return beginMaatwerk();
  if (actie === 'analyseer') {
    const voorstellen = analyseerBron(s.bron);
    return { ...s, voorstellen, akkoord: [], stap: 1, antwoord: null, fout: voorstellen.length ? '' : 'Deze bron is nog niet beoordeeld. Er wordt niets automatisch overgenomen.' };
  }
  if (actie === 'bron') return { ...s, bron: waarde, voorstellen: [], akkoord: [], stap: 0, antwoord: null, fout: '', gewijzigd: true };
  if (actie === 'vink') {
    if (!s.voorstellen.some(v => v.id === waarde)) return s;
    return { ...s, akkoord: s.akkoord.includes(waarde) ? s.akkoord.filter(id => id !== waarde) : [...s.akkoord, waarde] };
  }
  if (actie === 'activeer') {
    if (s.voorstellen.length !== 3 || !s.voorstellen.every(v => s.akkoord.includes(v.id))) return { ...s, fout: 'Controleer eerst elke werkafspraak en vink die af.' };
    return { ...s, actief: { bron: { ...s.bron }, afspraken: s.voorstellen.map(v => ({ ...v })) }, stap: 3, antwoord: null, fout: '', gewijzigd: false };
  }
  if (actie === 'stap') {
    const n = Number(waarde);
    if (!Number.isInteger(n) || n < 0 || n > 4 || (n > 0 && !s.voorstellen.length) || (n > 2 && !s.actief)) return s;
    return { ...s, stap: n, fout: '' };
  }
  if (actie === 'antwoord' && s.actief) return { ...s, antwoord: waarde };
  return s;
}
export function antwoordGoed(s) {
  return s.antwoord === (s.actief?.bron.versie === 2 ? 'doel-actie' : 'doel');
}
export function maatwerkBronnen(s) {
  if (!s?.actief) return [];
  return s.actief.afspraken.map(v => ({ id: `maatwerk-${v.id}`, kop: v.plek.split(/, | · /)[1], tekst: [v.tekst], module: 'rapporteren', bron: s.actief.bron.naam, hoofdstuk: `4.2, versie ${s.actief.bron.versie}`, woorden: ['rapporteren', 'rapportage', 'doel', 'werkafspraak', 'vervolgactie'] }));
}
// De nieuwe afspraak vervangt alleen de oude doelkoppeling, nooit de bedieningsuitleg.
export function metMaatwerk(basis, staat) {
  const eigen = maatwerkBronnen(staat);
  if (!eigen.length) return basis;
  const bestaand = basis.map(b => b.id !== 'rapporteren-hoe' ? b : { ...b, tekst: b.tekst.map(t => t.startsWith('Bij De Wilgenhof koppel') ? t.slice(t.indexOf('Hoort de rapportage')) : t) });
  return [...eigen, ...bestaand];
}
const esc = t => String(t ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icoon = (soort) => `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">${({bron:'<path d="M12 5h17l8 8v30H12zM29 5v9h8M18 23h13M18 29h13M18 35h8"/>', route:'<rect x="3" y="17" width="10" height="14" rx="3"/><rect x="35" y="17" width="10" height="14" rx="3"/><path d="M13 24h22m-6-5 6 5-6 5"/>', scherm:'<rect x="4" y="8" width="40" height="29" rx="4"/><path d="M4 16h40M17 43h14M24 37v6m-10-17 5 5 13-12"/>'})[soort]}</svg>`;
const knop = (actie, tekst, waarde = '', stijl = 'btn--actie') => `<button class="btn ${stijl}" type="button" data-maat="${actie}" data-waarde="${esc(waarde)}">${tekst}</button>`;
// Eén klik zet de afspraak op versie 1 of 2, langs dezelfde poort: bron, voorstel, controle, activeren.
export function zetVersie(s, versie) {
  let n = wijzigMaatwerk(s, 'bron', { ...BRONNEN[versie === 2 ? 1 : 0] });
  n = wijzigMaatwerk(n, 'analyseer');
  for (const v of n.voorstellen) n = wijzigMaatwerk(n, 'vink', v.id);
  return wijzigMaatwerk(n, 'activeer');
}
const PLEKKEN = [['bron', 'Uitleg in de module'], ['scherm', 'Oefening'], ['route', 'Vraag het']];
export function viewMaatwerk(s, merk) {
  const versie = s.actief?.bron.versie === 2 ? 2 : 1;
  return `<div class="maat${versie === 2 ? ' maat--v2' : ''}"><header class="maat-balk"><a href="#/" aria-label="Terug naar de demo">${merk}</a><a class="linkknop" href="#/demo">Terug naar de uitleg</a></header><main id="inhoud" tabindex="-1"><div class="wrap maat-kop"><h1>Zo werken we samen</h1></div><ol class="wrap maat-proces" aria-label="Zo werken we samen">${STAPPEN.map(([titel, tekst], i) => `<li${i === STAPPEN.length - 1 ? ' aria-current="step"' : ''}><span class="maat-proces__nr" aria-hidden="true">${i + 1}</span><strong>${titel}</strong><span>${tekst}</span></li>`).join('')}</ol><div class="wrap maat-podium" id="maat-podium">${inhoud(s, versie)}</div><footer class="wrap maat-voet"><button type="button" class="btn btn--stil" data-actie="opnieuw">Demo opnieuw beginnen</button></footer></main></div>`;
}
function inhoud(s, versie) {
  const eigen = s.bron.versie === 'eigen';
  const [regel] = BRONNEN[0].tekst.split('\n');
  const nieuw = 'en vermeld de vervolgactie';
  const afspraak = versie === 2 ? `${esc(regel.slice(0, -1))} <mark>${esc(nieuw)}</mark>.` : esc(regel);
  const kop = versie === 2 ? 'Nu staat alles op versie 2.' : 'Probeer stap 5 zelf.';
  const kaart = `<article class="maat-afspraak" aria-labelledby="maat-afspraak-kop"><p class="maat-afspraak__bron" id="maat-afspraak-kop">${icoon('bron')}<span>Handboek De Wilgenhof, Rapporteren</span><span class="maat-pil">Versie ${versie}</span></p><p class="maat-afspraak__regel">${afspraak}</p>${eigen ? `<p class="maat-melding" role="status"><strong>${esc(s.bron.naam)}</strong> is nog niet beoordeeld. Er verandert niets in de module.</p>` : ''}<div class="maat-acties">${versie === 1 ? knop('verander', 'Verander de afspraak') : knop('terug', 'Terug naar versie 1', '', 'btn--stil')}${eigen ? knop('bron-voorbeeld', 'Terug naar het voorbeeld', '', 'btn--rand') : ''}</div><details class="maat-import"><summary>Zelf een tekstbestand proberen</summary><label for="maat-bestand">Alleen testmateriaal, .txt of .md tot 200 kB</label><input id="maat-bestand" type="file" accept=".txt,.md,text/plain,text/markdown"><p id="maat-uploadstatus" role="status"></p></details></article>`;
  const mee = `<section class="maat-mee" aria-labelledby="maat-mee-kop"><h3 id="maat-mee-kop">Dit verandert mee</h3><ul>${PLEKKEN.map(([i, t]) => `<li class="maat-plek">${icoon(i)}<span class="maat-plek__naam">${t}</span><span class="maat-pil">Versie ${versie}</span>${versie === 2 ? `<span class="maat-plek__nieuw"><mark>+ vervolgactie</mark></span>` : ''}</li>`).join('')}</ul>${s.actief ? `<div class="maat-acties">${knop('medewerker', 'Open de module', '', 'btn--rand')}${knop('naslag', 'Open Vraag het', '', 'btn--rand')}</div>` : ''}</section>`;
  return `<h2>${kop}</h2><div class="maat-bewijs">${kaart}${mee}</div>`;
}
export function mountMaatwerk(container, { lees, schrijf, render, medewerker, naslag }) {
  let gesloten = false;
  let uploadVolgorde = 0;
  const routeBijStart = window.location.hash;
  const geldig = () => !gesloten && container.isConnected && window.location.hash === routeBijStart;
  const werkBij = (actie, waarde) => {
    if (!geldig()) return;
    uploadVolgorde += 1;
    schrijf(wijzigMaatwerk(lees(), actie, waarde)); render();
  };
  const klik = e => {
    const b = e.target.closest('[data-maat]');
    if (!b || b.disabled || !geldig()) return;
    const a = b.dataset.maat;
    if (a === 'naslag') { uploadVolgorde += 1; return naslag(); }
    if (a === 'medewerker') { uploadVolgorde += 1; return medewerker(); }
    if (a === 'verander' || a === 'terug') { uploadVolgorde += 1; schrijf(zetVersie(lees(), a === 'verander' ? 2 : 1)); return render(); }
    if (a === 'bron-voorbeeld') return werkBij('bron', { ...BRONNEN[0] });
    werkBij(a, b.dataset.waarde);
  };
  const wijzig = async e => {
    if (!geldig()) return;
    if (e.target.matches('[data-maat-check]')) {
      uploadVolgorde += 1;
      const id = e.target.dataset.maatCheck;
      schrijf(wijzigMaatwerk(lees(), 'vink', id));
      const status = container.querySelector('.maat-resultaat [role="status"]');
      if (status) status.textContent = `${lees().akkoord.length} van ${lees().voorstellen.length} afspraken gecontroleerd`;
    }
    if (e.target.id === 'maat-bestand') {
      const volgorde = ++uploadVolgorde;
      const f = e.target.files?.[0];
      e.target.value = '';
      if (!f) return;
      const status = container.querySelector('#maat-uploadstatus');
      const nogGeldig = () => geldig() && volgorde === uploadVolgorde;
      if (!/\.(txt|md)$/i.test(f.name) || f.size > 200 * 1024) {
        status.textContent = 'Kies een .txt- of .md-bestand van maximaal 200 kB.'; return;
      }
      try {
        const tekst = (await f.text()).trim();
        if (!nogGeldig()) return;
        if (!tekst) { status.textContent = 'Dit bestand bevat geen tekst.'; return; }
        if (new TextEncoder().encode(tekst).length > 200 * 1024
          || /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(tekst)
          || !tekst.isWellFormed()) {
          status.textContent = 'Dit bestand bevat geen leesbare tekst. Kies een tekstbestand van maximaal 200 kB.';
          return;
        }
        werkBij('bron', { naam: f.name, versie: 'eigen', tekst, hoofdstuk: 'Ter beoordeling' });
      } catch {
        if (nogGeldig()) status.textContent = 'Het bestand kon niet worden gelezen. Probeer opnieuw.';
      }
    }
  };
  container.addEventListener('click', klik);
  container.addEventListener('change', wijzig);
  return { destroy() {
    gesloten = true; uploadVolgorde += 1;
    container.removeEventListener('click', klik);
    container.removeEventListener('change', wijzig);
  } };
}
