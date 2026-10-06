// Illustraties bij de uitleg in een module. Eigen tekeningen in de huisstijl van de klant:
// ze kleuren mee met --merk, --actie, --zacht en --vlak2. Geen schermafdrukken van Nedap ONS.

const M = 'var(--merk)';
const A = 'var(--actie)';
const Z = 'var(--zacht)';
const V = 'var(--vlak2)';
const W = '#fff';
const T = 'var(--tekst)';

const lijnen = (x, y, n, b = 70, stap = 12) => Array.from({ length: n }, (_, i) => `<rect x="${x}" y="${y + i * stap}" width="${i === n - 1 ? b * 0.6 : b}" height="5" rx="2.5" fill="${T}" opacity=".18"/>`).join('');

const persoon = (x, y, kleur, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><circle cx="0" cy="-26" r="13" fill="${kleur}"/><path d="M-22 18c0-20 9-30 22-30s22 10 22 30z" fill="${kleur}"/></g>`;

const telefoon = (inhoud) => `<rect x="82" y="10" width="76" height="140" rx="14" fill="${T}" opacity=".85"/><rect x="87" y="20" width="66" height="120" rx="6" fill="${W}"/>${inhoud}`;

const TEKENINGEN = {
  rapport: `
    <circle cx="190" cy="40" r="26" fill="${V}"/>
    <rect x="58" y="22" width="104" height="124" rx="10" fill="${W}" stroke="${M}" stroke-width="3"/>
    <rect x="88" y="14" width="44" height="18" rx="6" fill="${M}"/>
    ${lijnen(74, 50, 6, 72, 13)}
    <path d="M150 128l40-40 10 10-40 40-14 4z" fill="${A}"/><path d="M186 92l10 10" stroke="${W}" stroke-width="2"/>`,
  overdracht: `
    <rect x="0" y="118" width="240" height="6" rx="3" fill="${Z}"/>
    ${persoon(62, 100, M)}${persoon(178, 100, A)}
    <rect x="98" y="54" width="44" height="54" rx="6" fill="${W}" stroke="${T}" stroke-opacity=".25" stroke-width="2"/>
    ${lijnen(106, 64, 4, 28, 9)}
    <path d="M92 40h56M140 33l8 7-8 7" stroke="${M}" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  zoeken: `
    <rect x="34" y="20" width="120" height="120" rx="10" fill="${W}" stroke="${T}" stroke-opacity=".2" stroke-width="2"/>
    <rect x="34" y="20" width="120" height="20" rx="10" fill="${Z}"/>
    ${lijnen(48, 54, 6, 90, 13)}
    <circle cx="160" cy="92" r="30" fill="${W}" fill-opacity=".7" stroke="${M}" stroke-width="7"/>
    <path d="M182 114l26 26" stroke="${M}" stroke-width="10" stroke-linecap="round"/>`,
  meten: `
    <rect x="24" y="134" width="190" height="4" rx="2" fill="${T}" opacity=".25"/>
    <rect x="36" y="94" width="24" height="40" rx="4" fill="${Z}"/>
    <rect x="70" y="70" width="24" height="64" rx="4" fill="${M}" opacity=".6"/>
    <rect x="104" y="82" width="24" height="52" rx="4" fill="${M}"/>
    <path d="M40 84l38-24 36 12 34-30" stroke="${A}" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="170" y="22" width="22" height="92" rx="11" fill="${W}" stroke="${T}" stroke-opacity=".3" stroke-width="2.5"/>
    <circle cx="181" cy="118" r="17" fill="${A}"/><rect x="176" y="52" width="10" height="66" rx="5" fill="${A}"/>`,
  zorgplan: `
    <rect x="44" y="16" width="118" height="128" rx="10" fill="${W}" stroke="${M}" stroke-width="3"/>
    ${[0, 1, 2].map((i) => `<rect x="60" y="${40 + i * 32}" width="18" height="18" rx="4" fill="${i < 2 ? M : W}" stroke="${M}" stroke-width="2.5"/>${i < 2 ? `<path d="M64 ${49 + i * 32}l4 4 7-8" stroke="${W}" stroke-width="2.6" fill="none"/>` : ''}<rect x="88" y="${46 + i * 32}" width="58" height="6" rx="3" fill="${T}" opacity=".2"/>`).join('')}
    <circle cx="186" cy="110" r="32" fill="${V}"/><circle cx="186" cy="110" r="21" fill="${W}"/><circle cx="186" cy="110" r="10" fill="${A}"/>`,
  vragenlijst: `
    <rect x="30" y="14" width="112" height="132" rx="10" fill="${W}" stroke="${T}" stroke-opacity=".2" stroke-width="2"/>
    ${[0, 1, 2, 3].map((i) => `<circle cx="50" cy="${42 + i * 26}" r="7" fill="${i === 1 ? M : W}" stroke="${M}" stroke-width="2.5"/><rect x="64" y="${39 + i * 26}" width="62" height="6" rx="3" fill="${T}" opacity=".2"/>`).join('')}
    <circle cx="178" cy="86" r="40" fill="${Z}"/><circle cx="178" cy="86" r="30" fill="${W}" stroke="${M}" stroke-width="3"/>
    <path d="M178 62l8 24-8 24-8-24z" fill="${A}"/><path d="M178 86l8 0-8 24-8-24z" fill="${M}"/>`,
  episode: `
    <rect x="20" y="78" width="200" height="5" rx="2.5" fill="${T}" opacity=".2"/>
    <rect x="60" y="74" width="110" height="13" rx="6.5" fill="${M}"/>
    <circle cx="60" cy="80" r="12" fill="${W}" stroke="${M}" stroke-width="4"/>
    <circle cx="170" cy="80" r="12" fill="${W}" stroke="${A}" stroke-width="4"/>
    <rect x="34" y="24" width="76" height="34" rx="8" fill="${W}" stroke="${M}" stroke-width="2.5"/>${lijnen(44, 34, 2, 52, 11)}
    <rect x="130" y="102" width="76" height="34" rx="8" fill="${W}" stroke="${A}" stroke-width="2.5"/>${lijnen(140, 112, 2, 52, 11)}`,
  escaleren: `
    ${telefoon(`<circle cx="120" cy="64" r="18" fill="${Z}"/><path d="M112 58c0 10 6 16 16 16l3-4-5-4-3 2c-3-1-5-3-6-6l2-3-4-5z" fill="${M}"/>${lijnen(98, 96, 3, 44, 11)}`)}
    <path d="M196 120V40M182 54l14-14 14 14" stroke="${A}" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="46" cy="52" r="20" fill="${V}"/><path d="M46 40v14M46 60v.5" stroke="${A}" stroke-width="5" stroke-linecap="round"/>`,
  familie: `
    <rect x="0" y="126" width="240" height="6" rx="3" fill="${Z}"/>
    ${persoon(66, 110, M)}${persoon(120, 116, A, 0.78)}${persoon(172, 110, M)}
    <path d="M120 44c-6-8-20-4-16 6 3 6 16 14 16 14s13-8 16-14c4-10-10-14-16-6z" fill="${A}"/>`,
  zp10: `
    <circle cx="120" cy="80" r="62" fill="${Z}"/>
    <path d="M58 110c18-4 34-12 46-26 8-9 22-8 26 2-10 2-18 8-24 16" stroke="${M}" stroke-width="10" fill="none" stroke-linecap="round"/>
    <path d="M182 110c-18-4-34-12-46-26" stroke="${A}" stroke-width="10" fill="none" stroke-linecap="round"/>
    <path d="M120 22c-8 10-8 18 0 22 8-4 8-12 0-22z" fill="${A}"/>`,
  mic: `
    <rect x="40" y="26" width="104" height="118" rx="10" fill="${W}" stroke="${T}" stroke-opacity=".2" stroke-width="2"/>
    ${lijnen(56, 74, 5, 72, 13)}
    <rect x="56" y="42" width="40" height="18" rx="5" fill="${Z}"/>
    <path d="M178 30l42 74h-84z" fill="${A}"/><path d="M178 56v22M178 90v1" stroke="${W}" stroke-width="7" stroke-linecap="round"/>`,
  authenticator: `
    ${telefoon(`<rect x="96" y="36" width="48" height="20" rx="4" fill="${Z}"/>${[0, 1, 2].map((i) => `<rect x="${97 + i * 16}" y="70" width="13" height="18" rx="3" fill="${M}"/>`).join('')}${[0, 1, 2].map((i) => `<rect x="${97 + i * 16}" y="94" width="13" height="18" rx="3" fill="${M}" opacity=".6"/>`).join('')}`)}
    <path d="M196 34l26 10v20c0 18-11 30-26 36-15-6-26-18-26-36V44z" fill="${A}"/><path d="M186 66l7 7 13-14" stroke="${W}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  wond: `
    ${telefoon(`<rect x="87" y="20" width="66" height="84" fill="${Z}"/><circle cx="120" cy="62" r="20" fill="${W}" stroke="${M}" stroke-width="4"/><circle cx="120" cy="62" r="8" fill="${M}"/><circle cx="120" cy="122" r="9" fill="${A}"/>`)}
    <g transform="rotate(-30 46 92)"><rect x="12" y="78" width="70" height="28" rx="14" fill="${V}"/><rect x="34" y="78" width="26" height="28" fill="${A}" opacity=".35"/></g>`,
  'dossier-app': `
    ${telefoon(`<rect x="87" y="20" width="66" height="22" fill="${M}"/>${[0, 1, 2, 3].map((i) => `<circle cx="100" cy="${58 + i * 20}" r="6" fill="${i === 0 ? A : Z}"/><rect x="112" y="${55 + i * 20}" width="34" height="6" rx="3" fill="${T}" opacity=".2"/>`).join('')}`)}
    ${persoon(196, 120, M, 0.8)}`,
  dienst: `
    <circle cx="96" cy="80" r="56" fill="${W}" stroke="${M}" stroke-width="5"/>
    <path d="M96 44v36l24 14" stroke="${A}" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="96" cy="80" r="5" fill="${T}"/>
    <rect x="170" y="36" width="50" height="88" rx="8" fill="${Z}"/>${lijnen(178, 50, 5, 34, 14)}`,
  ons: `
    <rect x="18" y="20" width="204" height="122" rx="10" fill="#F5F5F5" stroke="${T}" stroke-opacity=".15" stroke-width="2"/>
    <rect x="18" y="20" width="204" height="18" rx="10" fill="#FFCC7D"/><rect x="18" y="30" width="204" height="8" fill="#FFCC7D"/>
    <rect x="28" y="24" width="26" height="10" rx="4" fill="#507AFF"/>
    <rect x="18" y="38" width="46" height="104" fill="${W}"/>
    ${[0, 1, 2, 3, 4].map((i) => `<rect x="26" y="${48 + i * 14}" width="30" height="5" rx="2.5" fill="${i === 3 ? '#4346B7' : T}" opacity="${i === 3 ? 1 : 0.2}"/>`).join('')}
    <rect x="74" y="46" width="138" height="20" rx="5" fill="${W}"/><circle cx="84" cy="56" r="6" fill="#F5F4FF" stroke="#797CD1"/>
    <rect x="74" y="72" width="138" height="62" rx="5" fill="${W}"/>${lijnen(84, 82, 4, 100, 12)}
    <circle cx="200" cy="80" r="7" fill="#0FA5FF"/>`,
};

export const ILLUSTRATIES = Object.keys(TEKENINGEN);

export function illustratie(naam) {
  const t = TEKENINGEN[naam];
  if (!t) return '';
  return `<svg class="les__beeld" viewBox="0 0 240 160" aria-hidden="true" focusable="false">${t}</svg>`;
}
