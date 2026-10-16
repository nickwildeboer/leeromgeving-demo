// Verkoopdemonstratie. Geen modelaanroep: alleen deze gecontroleerde voorbeeldbronnen.
export const BRONNEN = [
  { versie: 1, naam: 'Handboek De Wilgenhof', hoofdstuk: '4.2 · Rapporteren', tekst: 'Koppel een rapportage over het zorgplan aan het bijbehorende doel.\nLeg je observatie vast vóór het einde van je dienst.\nBeschrijf wat je ziet en hoort, zonder oordeel.' },
  { versie: 2, naam: 'Handboek De Wilgenhof', hoofdstuk: '4.2 · Rapporteren', tekst: 'Koppel een rapportage over het zorgplan aan het bijbehorende doel en vermeld de vervolgactie.\nLeg je observatie vast vóór het einde van je dienst.\nBeschrijf wat je ziet en hoort, zonder oordeel.' },
];
export const STAPPEN = ['Jullie handboek', 'Voorstel', 'Controle', 'Zelf ervaren', 'Bijhouden'];
export function beginMaatwerk() {
  return { stap: 0, bron: { ...BRONNEN[0] }, voorstellen: [], akkoord: [], actief: null, antwoord: null, fout: '', gewijzigd: false };
}
export function analyseerBron(bron) {
  const bekend = BRONNEN.find(b => b.tekst === bron.tekst && b.versie === bron.versie && b.naam === bron.naam);
  if (!bekend) return [];
  return bron.tekst.split('\n').map((tekst, i) => ({ id: `v${bron.versie}-${i}`, tekst, plek: ['Oefening · doel koppelen', 'Uitleg · moment van rapporteren', 'Naslag · feitelijk rapporteren'][i], regel: i + 1 }));
}
export function wijzigMaatwerk(s, actie, waarde) {
  if (actie === 'reset') return beginMaatwerk();
  if (actie === 'analyseer') {
    const voorstellen = analyseerBron(s.bron);
    return { ...s, voorstellen, akkoord: [], stap: 1, antwoord: null, fout: voorstellen.length ? '' : 'Deze bron is nog niet beoordeeld. In deze demonstratie werken alleen de twee voorbeeldversies. Er wordt niets automatisch overgenomen.' };
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
  return s.actief.afspraken.map(v => ({ id: `maatwerk-${v.id}`, kop: v.plek.split(' · ')[1], tekst: [v.tekst], module: 'rapporteren', bron: s.actief.bron.naam, hoofdstuk: `4.2, versie ${s.actief.bron.versie}`, woorden: ['rapporteren', 'rapportage', 'doel', 'werkafspraak', 'vervolgactie'] }));
}
// De nieuwe afspraak vervangt alleen de oude doelkoppeling, nooit de bedieningsuitleg.
export function metMaatwerk(basis, staat) {
  const eigen = maatwerkBronnen(staat);
  if (!eigen.length) return basis;
  const bestaand = basis.map(b => b.id !== 'rapporteren-hoe' ? b : { ...b, tekst: b.tekst.map(t => t.startsWith('Bij De Wilgenhof koppel') ? t.slice(t.indexOf('Hoort de rapportage')) : t) });
  return [...eigen, ...bestaand];
}
const esc = t => String(t ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icoon = (soort) => `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">${({bron:'<path d="M12 5h17l8 8v30H12zM29 5v9h8M18 23h13M18 29h13M18 35h8"/>', route:'<rect x="3" y="17" width="10" height="14" rx="3"/><rect x="35" y="17" width="10" height="14" rx="3"/><path d="M13 24h22m-6-5 6 5-6 5"/>', check:'<circle cx="24" cy="24" r="18"/><path d="m15 24 6 6 12-13"/>', scherm:'<rect x="4" y="8" width="40" height="29" rx="4"/><path d="M4 16h40M17 43h14M24 37v6m-10-17 5 5 13-12"/>', update:'<path d="M39 20a16 16 0 1 0 0 11M39 7v13H26"/>'})[soort]}</svg>`;
const knop = (actie, tekst, waarde = '', stijl = 'btn--actie') => `<button class="btn ${stijl}" type="button" data-maat="${actie}" data-waarde="${esc(waarde)}">${tekst}</button>`;
function documentKaart(s, klein = false) {
  return `<article class="maat-document${klein ? ' maat-document--klein' : ''}"><div class="maat-document__kop">${icoon('bron')}<div><strong>${esc(s.bron.naam)}</strong><span>Versie ${esc(s.bron.versie)} · ${esc(s.bron.hoofdstuk || 'Aangeleverde tekst')}</span></div></div><p class="maat-overline">Werkafspraken</p>${s.bron.tekst.split('\n').filter(Boolean).map((t,i) => `<p class="maat-regel"><span>${i+1}</span><mark>${esc(t)}</mark></p>`).join('')}<div class="maat-papierlijnen" aria-hidden="true"><i></i><i></i><i></i></div><p class="maat-document__voet">Bron blijft zichtbaar bij ieder voorstel</p></article>`;
}
export function viewMaatwerk(s, merk) {
  return `<div class="maat${s.stap > 0 ? ' maat--verder' : ''}"><header class="maat-balk"><a href="#/" aria-label="Terug naar de demo">${merk}</a><a class="linkknop" href="#/demo">Terug naar de uitleg</a></header><main id="inhoud" tabindex="-1"><div class="maat-intro wrap"><h1>Probeer het maatwerk</h1><p>Controleer de bron, probeer de oefening en bekijk daarna de naslag en voortgang.</p></div><nav class="maat-stappen wrap" aria-label="Demonstratiestappen"><ol>${STAPPEN.map((t,i) => `<li><button type="button" data-maat="stap" data-waarde="${i}" ${i===s.stap ? 'aria-current="step"' : ''} ${i>0&&!s.voorstellen.length || i>2&&!s.actief ? 'disabled' : ''}><span>${i+1}</span>${t}</button></li>`).join('')}</ol></nav><div class="wrap maat-podium" id="maat-podium">${inhoud(s)}</div><footer class="wrap maat-voet"><p>Interactieve demonstratie met voorbeeldmateriaal. De AI-verwerking is gesimuleerd. Je wijzigingen blijven in deze browser. Bij opnieuw beginnen blijft de huisstijl bewaard.</p><div>${knop('reset','Bronroute opnieuw beginnen','','btn--stil')}<button type="button" class="btn btn--stil" data-actie="opnieuw">Demo opnieuw beginnen</button></div></footer></main></div>`;
}
function inhoud(s) {
  const sub = `<p class="maat-status">${s.actief ? `Actief in deze demo: versie ${s.actief.bron.versie}` : 'Nog geen werkafspraken actief'}${s.gewijzigd && s.actief ? ' · Nieuwe bron wacht op controle' : ''}</p>`;
  if (s.stap === 0) return `<div class="maat-twee"><section class="maat-uitleg"><h2>Dit staat in het handboek.</h2><p>We nemen drie afspraken over rapporteren als voorbeeld.</p><div class="maat-bronkeuze">${icoon('bron')}<div><strong>${esc(s.bron.naam)}</strong><span>${esc(s.bron.hoofdstuk)}</span></div><span class="maat-pil">v${s.bron.versie}</span></div>${knop('analyseer','Bekijk het voorstel →')}<details class="maat-import"><summary>Zelf een tekstbestand proberen</summary><p>Alleen .txt of .md, maximaal 200 kB. Een eigen bestand wordt lokaal getoond. Automatische analyse van vrije documenten is nog niet aangesloten. Gebruik uitsluitend testmateriaal.</p><label for="maat-bestand">Kies een bestand</label><input id="maat-bestand" type="file" accept=".txt,.md,text/plain,text/markdown"><p id="maat-uploadstatus" role="status"></p></details>${sub}</section>${documentKaart(s)}</div>`;
  if (s.stap === 1) return `<div class="maat-twee"><section class="maat-uitleg"><h2>Dit stellen we voor.</h2><p>Elke afspraak krijgt een plek in uitleg, oefenen of naslag. Jij controleert het voorstel.</p>${s.voorstellen.length ? knop('stap','Controleer de werkafspraken →',2) : `${knop('bron-voorbeeld','Gebruik het voorbeeldhandboek')}<p role="alert">${esc(s.fout)}</p>`}</section><section class="maat-resultaat"><p class="maat-overline">Voorstel · versie ${s.bron.versie}</p><h3>${s.voorstellen.length} werkafspraken gevonden</h3>${s.voorstellen.map((v,i)=>`<article class="maat-voorstel"><span class="maat-nr">0${i+1}</span><div><p>${esc(v.tekst)}</p><span class="maat-plek">↳ ${esc(v.plek)}</span><small>Hoofdstuk 4.2, passage ${v.regel}</small></div></article>`).join('')}<div class="maat-openvraag"><strong>Nog navragen</strong><p>Wie controleert een aangepaste werkafspraak binnen jullie organisatie? Dat staat niet in deze bron.</p></div></section></div>`;
  if (s.stap === 2) return `<div class="maat-controlekop"><div><h2>Jullie houden het laatste woord.</h2><p>Lees de bron naast het voorstel. Vink elke afspraak af voordat je hem in de demo toepast.</p></div>${sub}</div><div class="maat-twee maat-twee--controle">${documentKaart(s,true)}<section class="maat-resultaat"><h3>Voorstel voor Rapporteren</h3>${s.voorstellen.map(v => `<label class="maat-check"><input type="checkbox" data-maat-check="${v.id}" ${s.akkoord.includes(v.id)?'checked':''}><span><strong>${esc(v.plek)}</strong><span>${esc(v.tekst)}</span><small>Bron: hoofdstuk 4.2, passage ${v.regel}</small></span></label>`).join('')}<p class="maat-status" role="status">${s.akkoord.length} van ${s.voorstellen.length} afspraken gecontroleerd</p>${knop('activeer','Pas toe in deze demo →')}${s.fout ? `<p role="alert" class="maat-fout">${esc(s.fout)}</p>` : ''}</section></div>`;
  if (s.stap === 3) {
    const v2 = s.actief.bron.versie===2;
    const goed = antwoordGoed(s);
    return `<div class="maat-twee"><section class="maat-uitleg"><h2>Probeer de oefening.</h2><p>Kies het antwoord dat past bij de werkafspraak.</p><div class="maat-context">${icoon('check')}<div><strong>Zo doen wij het bij De Wilgenhof</strong><p>${esc(s.actief.afspraken[0].tekst)}</p><small>Handboek · 4.2 · versie ${s.actief.bron.versie}</small></div></div><div class="knoppen">${goed ? knop('naslag','Zoek de afspraak op →') : ''}${knop('medewerker','Open de volledige module →','','btn--rand')}${knop('stap','Bekijk het onderhoud →',4,'btn--stil')}</div>${sub}</section><section class="maat-oefening"><header><span class="maat-avatar">SV</span><div><strong>Sanne · Verzorgende IG</strong><span>Rapporteren · Korte oefening</span></div></header><div class="maat-oefening__in"><h3>De wandeling gaat makkelijker.</h3><p>Een testcliënt loopt vandaag zelfstandig naar de huiskamer. Je wilt dit vastleggen bij het doel ‘Zelfstandig bewegen’.</p><div class="maat-dossier"><span>Rapportages</span><strong>Nieuwe rapportage</strong><p>Cliënt liep zonder hulp naar de huiskamer.</p></div><h4>Wat schrijft deze versie van het handboek voor?</h4><div class="maat-antwoorden">${[['los','Alleen de observatie, als losse rapportage'],['doel','De observatie, gekoppeld aan het doel'],['doel-actie','De observatie, het doel en de vervolgactie']].map(([id,t])=>`<button type="button" class="${s.antwoord===id?'is-gekozen':''}" data-maat="antwoord" data-waarde="${id}" aria-pressed="${s.antwoord===id}">${esc(t)}</button>`).join('')}</div>${s.antwoord ? `<div role="status" class="maat-feedback ${goed?'is-goed':''}"><strong>${goed?'Dat klopt.':'Kijk nog eens naar de werkafspraak.'}</strong><p>${goed ? v2 ? 'Je koppelt de observatie aan het doel én vermeldt wat er daarna moet gebeuren. Dit is de aangepaste afspraak uit versie 2.' : 'De koppeling aan het doel hoort in deze rapportage. Zo kun je de observatie bij dat doel terugvinden.' : v2 ? 'In versie 2 staat dat je ook de vervolgactie vermeldt.' : 'Kies wat deze bron voorschrijft: de observatie aan het doel koppelen. De vervolgactie is hier nog geen aanvullende afspraak.'}</p></div>` : ''}</div></section></div>`;
  }
  return `<div class="maat-twee"><section class="maat-uitleg"><h2>Verandert jullie afspraak?</h2><p>Bekijk wat geraakt wordt wanneer De Wilgenhof voortaan ook de vervolgactie in een rapportage wil zien.</p><div class="maat-wijziging"><span>Versie 1</span><p>Koppel de rapportage aan het doel.</p><span>Versie 2</span><p>Koppel de rapportage aan het doel <mark>en vermeld de vervolgactie.</mark></p></div>${knop('nieuwe-versie',s.actief.bron.versie===2?'Controleer versie 2 opnieuw →':'Laad versie 2 en controleer →')}${sub}</section><section class="maat-resultaat"><h3>Dezelfde bron, op de juiste plekken.</h3>${[['scherm','Oefening Rapporteren','De keuze en de uitleg bij je antwoord gebruiken de goedgekeurde versie.'],['bron','Werkafspraak bij de module','De medewerker kan de bron bij de uitleg openen.'],['route','Vraag het','De gecontroleerde passage wordt ook doorzoekbaar.']].map(([i,t,p])=>`<div class="maat-impact">${icoon(i)}<div><h4>${t}</h4><p>${p}</p></div><span class="maat-pil">v${s.actief.bron.versie}</span></div>`).join('')}${knop('naslag','Zoek de afspraak op →','','btn--rand')}<p class="maat-openvraag">Een nieuwe bron vervangt de actieve afspraak pas na controle. Tot die tijd blijft versie ${s.actief.bron.versie} beschikbaar.</p></section></div>`;
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
    if (a === 'nieuwe-versie') return werkBij('bron', { ...BRONNEN[1] });
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
