// Eén uitleganimatie. Verandert geen bron, goedkeuring of voortgang.
const esc = t => String(t).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const check = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m5 12 4 4 10-10"/></svg>';
export const UITLEG_STAPPEN = [
  { titel: 'Jullie afspraak', tekst: 'In het handboek staat: koppel een rapportage aan het doel.' },
  { titel: 'Wij maken het op maat', tekst: 'Ons Op Maat maakt een voorstel. De inhoud wordt gecontroleerd.' },
  { titel: 'Je collega oefent ermee', tekst: 'Dezelfde afspraak komt terug in de uitleg en de oefening.' },
];
export function viewUitleg(merk) {
  return `<div class="uitleg"><header class="uitleg-balk"><a href="#/demo" aria-label="Ons Op Maat">${merk}</a><a href="#/rollen">Alle demorollen</a></header>
  <main id="inhoud" tabindex="-1" class="uitleg-main">
    <div class="uitleg-kop"><h1>Jullie werkafspraken.<br>Een oefening op maat.</h1><p>Zo leert je collega werken in Nedap ONS zoals jullie dat doen.</p></div>
    <div class="uitleg-acties" role="group" aria-label="Kies je demoroute"><div class="uitleg-route"><strong>Korte route voor inkopers</strong><p>Van handboek naar oefenen, naslag en voortgang.</p><a class="btn btn--actie" href="#/demo/uitproberen">Probeer het zelf</a></div><div class="uitleg-route"><strong>Volledige route voor medewerkers</strong><p>Alle modules, oefeningen en het handboek.</p><button type="button" class="btn btn--rand" data-actie="rol" data-rol="medewerker">Naar de medewerkersomgeving</button></div></div>
    <section class="uitleg-toneel" aria-label="Van handboek naar oefening" data-fase="0">
      <div class="uitleg-bron"><div class="uitleg-document"><div class="uitleg-documentkop"><svg viewBox="0 0 32 38" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 2h15l7 7v27H5zM20 2v8h7M10 17h12M10 23h12"/></svg><span>Handboek<br><strong>De Wilgenhof</strong></span></div><div class="uitleg-regels" aria-hidden="true"><i></i><i></i></div><p class="uitleg-bronzin">Koppel een rapportage <br>aan het bijbehorende doel.</p><div class="uitleg-regels" aria-hidden="true"><i></i><i></i><i></i></div><span class="uitleg-bronvoet">Werkafspraak · Rapporteren</span></div></div>
      <div class="uitleg-verbinding"><svg class="uitleg-lijn" viewBox="0 0 180 48" preserveAspectRatio="none" aria-hidden="true"><path d="M0 24H180"/><path class="uitleg-stroom" d="M0 24H180"/></svg><span class="uitleg-goedkeuring">${check}</span><span class="uitleg-verwerking">Voorstel &amp; controle</span></div>
      <div class="uitleg-scherm"><div class="uitleg-schermkop"><span>Leren bij De Wilgenhof</span><span class="uitleg-profiel">SV</span></div><div class="uitleg-les"><span class="uitleg-lesmeta">Oefening · Rapporteren</span><h2>Wat leg je vast?</h2><p>Een cliënt loopt vandaag zonder hulp naar de huiskamer.</p><div class="uitleg-afspraak"><span>Onze werkafspraak</span><strong>Koppel je rapportage aan het doel.</strong></div><div class="uitleg-doel"><span>Doel in het zorgplan</span><strong>Zelfstandig bewegen</strong>${check}</div><p class="uitleg-uitkomst">${check} Je oefent meteen de juiste werkwijze.</p></div></div>
    </section>
    <div class="uitleg-bediening"><div class="uitleg-stappen" role="group" aria-label="Uitlegstappen">${UITLEG_STAPPEN.map((s,i)=>`<button type="button" data-uitleg-stap="${i}" aria-pressed="${i===0}"><span>${i+1}</span>${esc(s.titel)}</button>`).join('')}</div><button type="button" class="uitleg-speel" data-uitleg-speel>Speel de uitleg af</button></div>
    <p class="uitleg-caption" role="status">${UITLEG_STAPPEN[0].tekst}</p>
    <p class="uitleg-demo">Demo met verzonnen gegevens. AI-verwerking is gesimuleerd.</p><p class="uitleg-reset"><button type="button" class="linkknop" data-actie="opnieuw">Demo opnieuw beginnen</button></p>
  </main></div>`;
}
export function mountUitleg(root) {
  let fase = 0;
  let timer = null;
  let speelt = false;
  let klaar = false;
  const toneel = root.querySelector('.uitleg-toneel');
  const speel = root.querySelector('[data-uitleg-speel]');
  const stappen = [...root.querySelectorAll('[data-uitleg-stap]')];
  const rustig = window.matchMedia('(prefers-reduced-motion: reduce)');
  function teken() {
    toneel.dataset.fase = String(fase);
    toneel.classList.toggle('is-spelend', speelt);
    stappen.forEach((b,i) => b.setAttribute('aria-pressed', String(i===fase)));
    root.querySelector('.uitleg-caption').textContent = UITLEG_STAPPEN[fase].tekst;
    speel.textContent = speelt ? 'Pauzeer' : klaar ? 'Speel opnieuw' : fase ? 'Speel verder' : 'Speel de uitleg af';
  }
  function pauze() { clearTimeout(timer); timer=null; speelt=false; teken(); }
  function plan() {
    timer=setTimeout(()=>{ if(fase<2) {fase++;teken();plan();} else {klaar=true;pauze();} },4000);
  }
  root.addEventListener('click', e=>{
    const stap=e.target.closest('[data-uitleg-stap]');
    if(stap) {pauze();fase=Number(stap.dataset.uitlegStap);klaar=fase===2;teken();return;}
    if(!e.target.closest('[data-uitleg-speel]')) return;
    if(speelt) return pauze();
    if(klaar) {fase=0;klaar=false;}
    speelt=true;teken();plan();
  });
  const verberg=()=>{if(document.hidden) pauze();};
  document.addEventListener('visibilitychange',verberg);
  const observer=new IntersectionObserver(([entry])=>{if(!entry.isIntersecting) pauze();});
  observer.observe(toneel);
  const minder=()=>{if(rustig.matches) pauze();};
  rustig.addEventListener('change',minder);
  return ()=>{clearTimeout(timer);observer.disconnect();document.removeEventListener('visibilitychange',verberg);rustig.removeEventListener('change',minder);};
}
