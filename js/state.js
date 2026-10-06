// De demo onthoudt alles in de browser. Lukt dat niet (privévenster), dan werkt hij gewoon zonder geheugen.
import { TOEWIJZING } from './data.js';

const SLEUTEL = 'leeromgeving-demo-v1';

function leeg() {
  return {
    rol: null,
    welkomGezien: false,
    rondleidingKlaar: false,
    voortgang: {},
    scores: {},
    laatst: null,
    dagen: [],
    gevierd: [],
    toewijzing: { vig: [...TOEWIJZING.vig], helpende: [...TOEWIJZING.helpende] },
    huisstijl: { voorbeeld: 'onsopmaat', kleuren: {}, logo: null, naam: 'De Wilgenhof' },
  };
}

let staat = leeg();

export function laad() {
  try {
    const ruw = window.localStorage.getItem(SLEUTEL);
    if (ruw) staat = { ...leeg(), ...JSON.parse(ruw) };
  } catch {
    staat = leeg();
  }
  return staat;
}

export function bewaar() {
  try {
    window.localStorage.setItem(SLEUTEL, JSON.stringify(staat));
  } catch {
    // geen opslag beschikbaar, de demo werkt dan alleen in deze sessie
  }
}

export function zet(wijziging) {
  staat = { ...staat, ...wijziging };
  bewaar();
  return staat;
}

export function nu() {
  return staat;
}

export function opnieuw() {
  const huisstijl = staat.huisstijl;
  staat = { ...leeg(), huisstijl };
  bewaar();
  return staat;
}
