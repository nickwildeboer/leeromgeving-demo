// De schermkaart: welk scherm van Nedap ONS of welke app zit in welke module.
// Komt er een release, dan zie je hier welke modules je moet nakijken. Onderhoud schaalt zo met het aantal releases, niet met het aantal klanten.

export const ONS_GECONTROLEERD = '2026-10-06';

const KOPPELSCHERM = { 'nieuwe-episode': 'Dossier · Nieuwe episode', zorgplan: 'Dossier · Plan, zorgplan', 'nieuwe-rapportage': 'Dossier · Nieuw, rapportage' };
const ADMIN = ['Algemeen', 'Cliëntnetwerk', 'Financieel', 'Documenten'];

const naamMenu = (m) => (ADMIN.includes(m) ? `Administratie · ${m}` : `Dossier · ${m}`);

export function schermKaart(casussen) {
  const kaart = new Map();
  const voeg = (scherm, id) => {
    if (!kaart.has(scherm)) kaart.set(scherm, new Set());
    kaart.get(scherm).add(id);
  };
  for (const c of Object.values(casussen)) {
    const d = c.doorklik;
    if (d) {
      for (const s of d.stappen) {
        if (d.plek === 'telefoon') voeg(`App · ${d.app}`, c.id);
        else {
          if (s.menu) voeg(naamMenu(s.menu), c.id);
          if (s.doel?.menu) voeg(naamMenu(s.doel.menu), c.id);
        }
        if (s.pagina?.venster?.titel) voeg(`Venster · ${s.pagina.venster.titel}`, c.id);
      }
    }
    for (const s of c.stappen || []) if (s.ons?.scherm) voeg(KOPPELSCHERM[s.ons.scherm] || s.ons.scherm, c.id);
  }
  return [...kaart.entries()].map(([scherm, ids]) => ({ scherm, modules: [...ids] })).sort((a, b) => a.scherm.localeCompare(b.scherm, 'nl'));
}

// Welke modules raakt een release waarin deze schermen veranderd zijn?
export function geraakt(kaart, veranderd) {
  const ids = new Set();
  for (const r of kaart) if (veranderd.includes(r.scherm)) r.modules.forEach((id) => ids.add(id));
  return [...ids];
}
