// De rondleiding: één stap tegelijk, een licht op het onderdeel en een kaartje met uitleg.

let actief = null;

function sluit(klaar) {
  if (!actief) return;
  const context = actief;
  const { laag, opKlaar, toetsen, vorigeFocus } = context;
  context.gesloten = true;
  if (context.hertekenTimer !== null) window.clearTimeout(context.hertekenTimer);
  laag.remove();
  document.removeEventListener('keydown', toetsen);
  window.removeEventListener('resize', context.herteken);
  window.removeEventListener('scroll', context.herteken);
  for (const { element, inert } of context.achtergrond) {
    if (!element.isConnected) continue;
    if (inert) element.setAttribute('inert', '');
    else element.removeAttribute('inert');
  }
  actief = null;
  if (opKlaar) opKlaar(klaar);
  if (!actief && vorigeFocus?.isConnected && typeof vorigeFocus.focus === 'function') vorigeFocus.focus();
}

export function startRondleiding(stappen, opKlaar) {
  sluit(false);
  const laag = document.createElement('div');
  laag.className = 'tour';
  laag.innerHTML = `
    <div class="tour__licht" aria-hidden="true"></div>
    <div class="tour__kaart" role="dialog" aria-modal="true" aria-labelledby="tour-kop">
      <p class="tour__teller"></p>
      <h2 class="tour__kop" id="tour-kop"></h2>
      <p class="tour__tekst"></p>
      <div class="tour__knoppen">
        <button type="button" class="btn btn--stil" data-tour-actie="stop">Overslaan</button>
        <button type="button" class="btn btn--actie btn--klein" data-tour-actie="volgende">Volgende</button>
      </div>
    </div>`;
  const vorigeFocus = document.activeElement;
  const achtergrond = [...document.body.children].map((element) => ({
    element,
    inert: element.hasAttribute('inert'),
  }));
  document.body.appendChild(laag);
  for (const { element } of achtergrond) element.setAttribute('inert', '');
  let i = 0;
  const licht = laag.querySelector('.tour__licht');
  const kaart = laag.querySelector('.tour__kaart');

  const herteken = () => {
    if (actief !== context || context.gesloten) return;
    const stap = stappen[i];
    const doel = document.querySelector(stap.doel);
    kaart.querySelector('.tour__teller').textContent = `Stap ${i + 1} van ${stappen.length}`;
    kaart.querySelector('.tour__kop').textContent = stap.kop;
    kaart.querySelector('.tour__tekst').textContent = stap.tekst;
    kaart.querySelector('[data-tour-actie="volgende"]').textContent = i === stappen.length - 1 ? 'Aan de slag' : 'Volgende';
    if (!doel) {
      licht.style.cssText = 'opacity:0';
      kaart.style.cssText = 'left:50%;top:50%;transform:translate(-50%,-50%)';
      return;
    }
    const r = doel.getBoundingClientRect();
    const rand = 8;
    licht.style.cssText = `opacity:1;left:${r.left - rand}px;top:${r.top - rand}px;width:${r.width + rand * 2}px;height:${r.height + rand * 2}px`;
    const breed = Math.min(360, window.innerWidth - 32);
    const links = Math.max(16, Math.min(r.left, window.innerWidth - breed - 16));
    const onder = r.bottom + rand + 16;
    const kaartHoog = kaart.offsetHeight || 200;
    const top = onder + kaartHoog < window.innerHeight ? onder : Math.max(16, r.top - rand - 16 - kaartHoog);
    kaart.style.cssText = `left:${links}px;top:${top}px;width:${breed}px`;
  };

  const ga = (n) => {
    if (actief !== context || context.gesloten) return;
    if (context.hertekenTimer !== null) {
      window.clearTimeout(context.hertekenTimer);
      context.hertekenTimer = null;
    }
    i = n;
    const doel = document.querySelector(stappen[i].doel);
    if (doel) {
      const r = doel.getBoundingClientRect();
      if (r.top < 90 || r.bottom > window.innerHeight - 220) {
        const zacht = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: window.scrollY + r.top - 120, behavior: zacht ? 'smooth' : 'auto' });
        context.hertekenTimer = window.setTimeout(() => {
          context.hertekenTimer = null;
          herteken();
        }, zacht ? 380 : 0);
      }
    }
    herteken();
    kaart.querySelector('[data-tour-actie="volgende"]').focus();
  };

  const toetsen = (e) => {
    if (e.key === 'Escape') sluit(false);
    if (e.key !== 'Tab' || actief !== context || context.gesloten) return;
    const focusbaar = [...kaart.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )].filter((element) => !element.hidden && element.getAttribute('aria-hidden') !== 'true');
    if (!focusbaar.length) {
      e.preventDefault();
      kaart.focus();
      return;
    }
    const eerste = focusbaar[0];
    const laatste = focusbaar[focusbaar.length - 1];
    if (e.shiftKey && (document.activeElement === eerste || !kaart.contains(document.activeElement))) {
      e.preventDefault();
      laatste.focus();
    } else if (!e.shiftKey && (document.activeElement === laatste || !kaart.contains(document.activeElement))) {
      e.preventDefault();
      eerste.focus();
    }
  };

  laag.addEventListener('click', (e) => {
    const knop = e.target.closest('[data-tour-actie]');
    if (!knop) return;
    if (knop.dataset.tourActie === 'stop') return sluit(false);
    if (i < stappen.length - 1) ga(i + 1);
    else sluit(true);
  });
  document.addEventListener('keydown', toetsen);
  window.addEventListener('resize', herteken);
  window.addEventListener('scroll', herteken, { passive: true });
  const context = {
    laag, opKlaar, toetsen, herteken, vorigeFocus,
    achtergrond, hertekenTimer: null, gesloten: false,
  };
  actief = context;
  ga(0);
}

export function stopRondleiding() {
  sluit(false);
}

export function rondleidingActief() {
  return Boolean(actief);
}
