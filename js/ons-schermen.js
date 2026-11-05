// Aanvullingen uit de schermafdrukken van 16 oktober. Alleen HTML, geen bronbeelden.
// De bestaande oefenomgeving levert alle gedeelde bouwstenen en het gedrag.
export const ONS_AANVULLINGEN = [
  ['10b', 'Episode geopend', ['episodes']],
  ['12d', 'Omaha · Aanleiding', []], ['12e', 'Omaha · Kies gebieden', []],
  ['12f', 'Omaha · Classificeer gebieden', []], ['12g', 'Omaha · Kies acties', []],
  ['12h', 'Omaha · Zorgplan instellingen', []],
  ['13e', 'Plan · Onvrijwillige zorg', []], ['13f', 'Bekijk (concept) onvrijwillige zorg', []],
  ['14', 'Rapportages · Bloeddrukmeting', ['rapporteren', 'klinimetrie']],
  ['14a', 'Rapportages · Inline wijzigen', ['rapporteren']],
  ['15c', 'Agenda · Nieuwe handeling', []], ['15d', 'Agenda · Nieuwe afwezigheid', []],
  ['16', 'Klinimetrie · Overzicht', ['klinimetrie']], ['16a', 'Klinimetrie · Nieuwe meting', ['klinimetrie']],
  ['19c', 'Nieuw - Bloeddruk · Leeg', ['klinimetrie']], ['19d', 'Nieuw - Bloeddruk · Ingevuld', ['klinimetrie']],
].map(([bron, scherm, modules]) => Object.freeze({ bron, scherm, modules: Object.freeze(modules) }));

export const OMAHA_STAPPEN = ['Aanleiding', 'Kies gebieden', 'Classificeer gebieden', 'Kies acties', 'Zorgplan instellingen'];
export const MEETINSTRUMENTEN = {
  'Diëtetiek': ['SNAQ 65+', 'SNAQ RC'],
  Medisch: ['Barthel Index', 'Bradenschaal', 'Cornell Scale for Depression in Dementia (CSDD)', 'Delirium Observatie Screening Schaal', 'Ervaren Druk door Informele Zorg', 'Neuropsychiatric Inventory (NPI)', 'NORD (depression-scale)', 'Pacslac-D', 'Pain Assessment in Impaired Cognition (PAIC 15)', 'SNAQ 65+', 'SNAQ RC'],
  Metingen: ['Ademhaling'], Overige: [],
};
const SYMPTOMEN = ['structureel ongezond / ongeschikt', 'inadequate verwarming / koeling', 'steile / onveilige trappen', 'inadequate / geblokkeerde in- en uitgangen', 'rommelige leefruimte', 'onveilige opslag van gevaarlijke objecten / stoffen', 'onveilige matten / tapijtjes', 'inadequate veiligheidsapparatuur', 'verf aanwezig, op lood gebaseerd', 'onveilige apparatuur / installaties', 'inadequate / overvolle leefruimte'];
const OMGEVING = ['Buurt/werkplek veiligheid', 'Inkomen / financiën', 'Omgevings hygiëne', 'Woning'];
const PSYCHOSOCIAAL = ['Communicatie met maatschappelijke voorzieningen', 'Geestelijke gezondheid', 'Groei en ontwikkeling', 'Interpersoonlijke relaties', 'Mantelzorg / Zorg voor kind, huisgenoot', 'Mishandeling / misbruik', 'Rolverandering', 'Rouw', 'Seksualiteit'];
const field = (h, key, label, {type='text', area=false, value, extra=''}={}) => {
  const id = 'oef-ons-' + key;
  const v = value ?? h.S.onsForm[key] ?? '';
  const input = area ? `<textarea id="${id}" class="oef-tekstvak" data-ons-veld="${key}" ${extra}>${h.esc(v)}</textarea>` : `<input id="${id}" type="${type}" value="${h.esc(v)}" data-ons-veld="${key}" ${extra}>`;
  return `<label class="oef-ons-veld" for="${id}"><span>${h.esc(label)}</span>${input}</label>`;
};
const select = (h, key, label, options) => `<label class="oef-ons-veld" for="oef-ons-${key}"><span>${h.esc(label)}</span><select id="oef-ons-${key}" data-ons-veld="${key}" aria-label="${h.esc(label || options[0])}">${options.map(t=>`<option${h.S.onsForm[key]===t?' selected':''}>${h.esc(t)}</option>`).join('')}</select></label>`;
const btn = (h, a, text, value, cls='oef-knop oef-knop--blauw') => h.knop(a, h.esc(text), {waarde:value, klasse:cls});
const radio = (h, key, values) => values.map(v=>`<label class="oef-ons-radio"><input type="radio" name="${key}" data-ons-veld="${key}" value="${h.esc(v)}"${h.S.onsForm[key]===v?' checked':''}>${h.esc(v)}</label>`).join('');

export function episode(h,c) {
  return `${btn(h,'episode-terug','← Episodes – Overzicht',undefined,'oef-kruimel')}${h.clientKop(c)}
    <div class="ons__kopregel"><h3 class="ons__titel">Episode – ${h.esc(c.episode.titel)}</h3>${h.knop('niet',h.icoon('pen')+' Wijzigen',{klasse:'oef-knop oef-knop--rand'})}</div>
    <section class="ons__kaart oef-ons-episode" tabindex="-1"><dl class="oef-ons-grid3">
      <div><dt>Startdatum</dt><dd>${h.esc(c.episode.start)}</dd></div><div><dt>Einddatum</dt><dd>Geen</dd></div><div><dt>Evaluatiedatum</dt><dd>Geen</dd></div>
      <div class="oef-ons-breed"><dt>Diagnose</dt><dd>Geen</dd><dd>${btn(h,'niet','+ Koppel diagnoses',undefined,'oef-knop oef-knop--rand')}</dd></div>
      <div class="oef-ons-span2"><dt>Hoofddoel</dt><dd>Testregistratie voor het oefenen van rapportages koppelen aan een episode.</dd></div><div><dt>Relevant voor</dt><dd>Alle deskundigheden</dd></div>
      <div class="oef-ons-span2"><dt>Auteur</dt><dd>Sanne Visser</dd></div><div><dt>Zichtbaar voor</dt><dd>Alle deskundigheden</dd></div></dl></section>
    ${h.tabs('episode-tab', [['rapportages','Rapportages'],['doelen','Doelen en acties'],['vragen','Vragenlijsten en documenten']],h.S.episodeTab)}
    <section class="ons__kaart oef-rapkaart">${h.S.episodeTab==='rapportages'?h.rapLijst(c,true):''}</section>`;
}

export function omaha(h,c) {
  const s=h.S.omahaStap;
  const form=h.S.onsForm;
  let body='';
  if(s===0) body=`<fieldset><legend>Reden van maken/ aanpassen zorgplan</legend>${radio(h,'aanleiding',['Er is sprake van een nieuwe cliënt','Er is een wijziging in de zorgvraag ( initiatief professional of andere stakeholder)','Er is sprake van een periodieke evaluatie (bijv. halfjaarlijks of chronische zorg)'])}</fieldset>
    ${field(h,'thuiszorg','Aanleiding voor inzet thuiszorg',{area:true})}<fieldset><legend>Initiatiefnemer zorgaanvraag</legend>${radio(h,'initiatief',['Cliënt zelf','Familie','Mantelzorger','Wijkverpleegkundige','Huisarts','Ziekenhuis','Revalidatie','Sociaal wijkteam','Overig'])}</fieldset><h4>Het omgevingsdomein</h4>`;
  if(s===1) body=[['Omgeving',OMGEVING],['Psychosociaal',PSYCHOSOCIAAL]].map(([name,items])=>`<h4>${name}</h4><div class="oef-ons-gebieden">${items.map(t=>h.knop(t==='Woning'?'omaha-woning':'niet',h.esc(t),{klasse:'oef-ons-gebied'+(t==='Woning'&&h.S.omahaWoning?' is-gekozen':''),extra:t==='Woning'?`aria-pressed="${h.S.omahaWoning}"`:''})).join('')}</div>`).join('');
  if(s===2) body=`<h4>Woning</h4><h4>Kenmerken</h4><div class="oef-ons-grid2">${select(h,'kenmerk','Kenmerken',['Individu'])}${select(h,'actueel','', ['Actueel'])}</div><h4>Signalen / symptomen</h4>${SYMPTOMEN.map(t=>`<label class="oef-ons-radio"><input type="checkbox" data-ons-symptoom="${h.esc(t)}"${h.S.omahaSymptomen.includes(t)?' checked':''}>${h.esc(t)}</label>`).join('')}`;
  if(s===3) body=`<h4>Woning</h4><h4>Kenmerken</h4><ul class="oef-ons-lijst"><li>Individu</li><li>Actueel</li></ul><div class="oef-ons-grid2">${['Huidige scores','Streefscores'].map((t,i)=>`<div><h4>${t}</h4><dl class="oef-ons-scores">${['Kennis','Gedrag','Status'].map(v=>`<div><dt>${v}</dt><dd class="${i?'is-groen':''}">${h.icoon('ster')} -</dd></div>`).join('')}</dl></div>`).join('')}</div><h4>Signalen / symptomen</h4><ul class="oef-ons-lijst">${h.S.omahaSymptomen.map(t=>`<li class="oef-ons-symptoom">${h.icoon('vink')}${h.esc(t)}</li>`).join('')}</ul><h4>Acties</h4><div class="oef-ons-acties">${btn(h,'omaha-stap','‹ Kies gebieden',1)}${btn(h,'omaha-stap','‹ Classificeer gebied',2)}${btn(h,'niet','+ Voeg actie toe',undefined,'oef-knop oef-knop--groen')}</div>`;
  if(s===4) body=`<h4>Geldigheid</h4><div class="oef-ons-datums">${field(h,'geldig','Geldig vanaf',{type:'date'})}${select(h,'geldigTot','tot en met',['15-04-2027 (+6 maanden)'])}</div>${select(h,'besproken','Het zorgplan',['is besproken met cliënt/vertegenwoordiger en deze is akkoord'])}<h4>Meldingen</h4><ul class="oef-ons-lijst"><li>Er moet tenminste één actie worden gekozen</li><li>Er zijn nog onbeantwoorde verplichte vragen</li></ul><div class="oef-ons-acties oef-ons-acties--tussen"><button type="button" class="oef-knop" disabled>Activeer zorgplan</button>${btn(h,'omaha-plan','Zorgplan ›')}</div>`;
  return `${btn(h,'omaha-terug','← Vragenlijsten – Overzicht',undefined,'oef-kruimel')}${h.clientKop(c)}
    <div class="oef-ons-wizard" role="group" aria-label="Omaha inventarisatie">${OMAHA_STAPPEN.map((t,i)=>h.knop('omaha-stap',h.esc(t),{waarde:i,klasse:'oef-ons-wizardtab'+(s===i?' is-actief':''),extra:`aria-pressed="${s===i}"${(i===2||i===3)&&!h.S.omahaWoning?' disabled':''}`})).join('')}${h.knop('niet','?',{klasse:'oef-ons-vraag',label:'Help'})}</div>
    <section class="ons__kaart oef-ons-omaha" data-ons-scherm="12${['d','e','f','g','h'][s]}">${body}</section>`;
}

export function ovzKaart(h) {
  return `<section class="ons__kaart oef-ons-ovzkaart"><div class="oef-ons-ovzrij"><p><span class="oef-ons-rood">Concept onvrijwillige zorg</span> <span class="oef-ons-rood">Evalueer voor 07-10-2026</span> <span class="oef-ons-wzd">Wzd</span></p><span class="oef-knoppen oef-ons-kaarticons">${h.knop('niet',h.icoon('print'),{klasse:'oef-icoonknop',label:'Afdrukken'})}${h.knop('niet',h.icoon('prullenbak'),{klasse:'oef-icoonknop',label:'Verwijderen'})}</span></div><p class="oef-ons-meta">Startdatum: 23-09-2026</p><p class="oef-ons-meta">Laatst bijgewerkt door Sanne Visser</p><p class="oef-ons-ovzleeg">Er is geen onvrijwillige zorg opgegeven</p><div class="oef-ons-acties oef-ons-acties--tussen"><span class="oef-knoppen">${btn(h,'ovz-open','› Bekijk (concept) onvrijwillige zorg',undefined,'oef-knop oef-knop--rand')}${btn(h,'niet','Verwijder',undefined,'oef-knop oef-knop--rood')}</span>${h.knop('niet',h.icoon('pen')+' Wijzigen',{klasse:'oef-knop oef-knop--rand'})}</div></section><div class="oef-rechtslink oef-rechtslink--onder">${btn(h,'niet','Toon alle onvrijwillige zorg (1)',undefined,'oef-blink')}${btn(h,'niet','Toon alternatieven voor onvrijwillige zorg',undefined,'oef-blink')}</div>`;
}
export function ovz(h,c) {
  return `${btn(h,'ovz-terug','← Zorgplan – Overzicht',undefined,'oef-kruimel')}${h.clientKop(c)}<div class="ons__kopregel oef-ons-ovzkop"><h3 class="ons__titel">Onvrijwillige zorg</h3><span class="oef-status">Concept</span><span class="oef-ons-rood">Volgende evaluatie op: 07-10-2026</span><span class="oef-knoppen">${['Verwijderen','Wijzigen','Activeren'].map(t=>btn(h,'niet',t,undefined,t==='Activeren'?'oef-knop oef-knop--paars':t==='Verwijderen'?'oef-knop oef-knop--wit oef-knop--rood':'oef-knop oef-knop--wit')).join('')}</span></div><h4>Status van behandeling:</h4>${h.S.ovzMelding?`<div class="oef-ons-waarschuwing">${h.icoon('waarschuwing')}<div>Voordat je deze onvrijwillige zorg kunt activeren, moet je nog een aantal velden invullen.<br>${btn(h,'niet','Wijzigen',undefined,'oef-link')}</div>${h.knop('ovz-melding-sluit',h.icoon('sluit'),{klasse:'oef-sluit',label:'Melding sluiten'})}</div>`:''}${h.tabs('ovz-tab',[['zorg','Onvrijwillige zorg'],['tijdlijn','Tijdlijn']],h.S.ovzTab)}${h.S.ovzTab==='zorg'?`<section class="ons__kaart oef-ons-omaha"><h3>${h.icoon('omhoog')} Situatie</h3><dl class="oef-ons-situatie"><div><dt>Toepasselijk recht</dt><dd>Wzd</dd></div><div><dt>Situatie</dt><dd><span class="oef-label oef-label--blauw">Opnemen in plan</span></dd></div><div><dt>Is de cliënt ambulant?</dt><dd>Nee</dd></div><div><dt>Is de cliënt wilsbekwaam ter zake?</dt><dd>Ja</dd></div></dl></section>`:''}`;
}

export function klinimetrie(h,c) {
  return `${h.clientKop(c)}<div class="ons__kopregel oef-ons-kliniekop"><h3 class="ons__titel">Klinimetrie - <span>Overzicht</span></h3>${btn(h,'meting-nieuw','+ Nieuwe meting')}</div>${h.tabs('klin-tab',[['klin','Klinimetrie'],['zorgvraag','Zorgvraagtypering'],['tijdlijn','Tijdlijn']],h.S.klinTab)}<p class="oef-ons-geenmetingen">Er zijn geen metingen om weer te geven voor deze cliënt.</p>`;
}
export function instrumenten(h) {
  const query=h.S.vensterZoek.toLocaleLowerCase('nl');
  return Object.entries(MEETINSTRUMENTEN).map(([groep,items])=>{const found=items.filter(t=>t.toLocaleLowerCase('nl').includes(query));return found.length||!query?`<h4>${groep}</h4>${found.map(t=>btn(h,'niet',t,undefined,'oef-link oef-ons-instrument')).join('')}`:'';}).join('');
}

export function nieuwVenster(h) {
  const w=h.S.venster;
  if(w==='meting') return `<label class="oef-zoekveld" for="oef-metingzoek">${h.icoon('zoek')}<span class="sr">Zoeken</span><input id="oef-metingzoek" type="search" placeholder="Zoeken" data-oefen-invoer="meting-zoek" value="${h.esc(h.S.vensterZoek)}"></label><div data-oefen-regio="instrumenten">${instrumenten(h)}</div>`;
  if(w==='handeling') return `${field(h,'agTitel','Titel')}${field(h,'agNotities','Notities',{area:true})}<div class="oef-ons-grid2">${field(h,'agBegin','Begindatum',{type:'date'})}<div class="oef-ons-veld"><label for="oef-ons-agDuur">Verwachte duur</label><div class="oef-ons-duur"><input id="oef-ons-agDuur" type="number" min="0" max="1440" data-ons-veld="agDuur" value="${h.esc(h.S.onsForm.agDuur)}" placeholder="minuten">${h.knop('ag-duur','−',{waarde:-5,klasse:'oef-knop',label:'Verwachte duur verminderen'})}${h.knop('ag-duur','+',{waarde:5,klasse:'oef-knop',label:'Verwachte duur verhogen'})}</div></div></div>${select(h,'herhaling','Herhaling',['Niet'])}<div class="oef-ons-periode"><div class="oef-ons-dagrij">${radio(h,'dagtype',['Hele dag'])}</div><div class="oef-ons-dagrij">${radio(h,'dagtype',['Dagdeel'])}${select(h,'dagdeel','Dagdeel',['Kies een dagdeel']).replace('<select',h.S.onsForm.dagtype==='Dagdeel'?'<select':'<select disabled')}</div><div class="oef-ons-dagrij">${radio(h,'dagtype',['Periode'])}<div class="oef-ons-grid2">${field(h,'beginNa','Begin na',{type:'time',extra:h.S.onsForm.dagtype==='Periode'?'':'disabled'})}${field(h,'afronden','Afronden voor',{type:'time',extra:h.S.onsForm.dagtype==='Periode'?'':'disabled'})}</div></div></div>`;
  return `<div class="oef-ons-grid2">${field(h,'agBegin','Begindatum',{type:'date'})}${field(h,'agEind','Einddatum',{type:'date'})}</div>${select(h,'reden','Reden',[''])}${field(h,'agNotities','Notities',{area:true})}`;
}
export function bloeddruk(h) {
  return `<div class="ons__kopregel"><h3 class="ons__titel ons__titel--klein" id="oef-rap-kop" tabindex="-1">Nieuw - Bloeddruk</h3><span class="ons__kop-rechts">${h.knop('niet',h.icoon('ster')+' Markeer als belangrijk',{klasse:'oef-ster'})}${h.opslaanKnop()}</span></div><div class="oef-ons-bloeddruk"><em>Bloeddruk</em>${[['boven','Bovendruk','mmHg'],['onder','Onderdruk','mmHg'],['pols','Pols','slagen per minuut']].map(([k,t,unit])=>`<div class="oef-ons-metingrij">${field(h,k,t,{type:'number',extra:'min="0" max="999" step="1"'})}<em>${unit}</em></div>`).join('')}${field(h,'opmerking','Opmerking',{area:true})}${field(h,'starttijd','Starttijd',{type:'time'})}${select(h,'actiesVoor','Acties voor:',['Medici'])}${select(h,'zichtbaar','Zichtbaar voor:',['Iedereen (of kies deskundigheden)'])}</div>`;
}

// ---------- Modules buiten het dossier (schermafdrukken 31 tot en met 50, 4 november) ----------
// De bestandsnamen in de kennisbank lopen hier niet gelijk met de inhoud. De inhoud van de opname is leidend:
// 30 is een lege laadpagina, 31 Notities, 32 Medewerkerportaal, 34 Groepszorg, 35 Ons Client, 40 Registraties,
// 41 Agenda week, 42 Uitnodigingen, 43 Werkstaat, 44 Open registraties, 45 Vakantieuren, 46 Afspraak toevoegen, 50 Planning.
// Namen van medewerkers worden Sanne Visser. Cliënten blijven T Tester en de gemaskeerde Voorbeeldcliënten.
export const ONS_MODULESCHERMEN = [
  ['31', 'Notities'], ['32', 'Medewerkerportaal'], ['34', 'Groepszorg'], ['35', 'Ons Client · Dashboard'],
  ['40', 'Agenda · Registraties'], ['41', 'Agenda · Week'], ['42', 'Agenda · Uitnodigingen'], ['43', 'Werkstaat · Dag'],
  ['44', 'Agenda · Open registraties'], ['45', 'Vakantieuren'], ['46', 'Agenda · Afspraak toevoegen'], ['50', 'Planning · Week'],
].map(([bron, scherm]) => Object.freeze({ bron, scherm }));

const MOD_START = { Medewerkerportaal: 'portaal', Notities: 'notities', Groepszorg: 'groepszorg', 'Ons Client': 'onsclient', Toedienlijsten: 'toedien', Agenda: 'agenda', Planning: 'planning', Werkstaat: 'werkstaat' };
const MOD_PAGINA = {
  portaal: ['Medewerkerportaal', '#F1569A'], notities: ['Home', '#4347B5'], groepszorg: ['Groepszorg', '#39C2E4'], onsclient: ['Ons Client', '#FB40A7'], toedien: ['Toedienlijsten', '#F39A33'],
  agenda: ['Agenda', '#C80E6F'], uitnodigingen: ['Agenda', '#C80E6F'], registraties: ['Agenda', '#C80E6F'], open: ['Agenda', '#C80E6F'],
  werkstaat: ['Werkstaat', '#69B284'], vakantieuren: ['Vakantieuren', '#957AC7'], planning: ['Planning', '#ED6CAD'],
};
const AGENDA_FAMILIE = ['agenda', 'uitnodigingen', 'registraties', 'open', 'werkstaat', 'vakantieuren', 'planning'];
export const heeftModule = (naam) => Object.hasOwn(MOD_START, naam);
export const startPagina = (naam) => MOD_START[naam];
export const modPaginaGeldig = (p) => Object.hasOwn(MOD_PAGINA, p);
export const moduleVanPagina = () => null;
export const modulePil = (S) => { const [naam, kleur] = MOD_PAGINA[S.modPagina] || MOD_PAGINA.portaal; return { naam, kleur }; };
export const moduleSleutel = (S) => (S.modPagina || 'portaal');

const OCT = ['ma 5', 'dinsdag 6', 'wo 7', 'do 8', 'vr 9', 'za 10', 'zo 11'];
const leegstaat = (h, kop, tekst) => `<div class="oef-leegstaat">${h.PLANT}<p class="oef-leegstaat__kop">${h.esc(kop)}</p><p>${h.esc(tekst)}</p></div>`;
const datumnav = (h, tekst) => `<div class="oef-mp-datum">${h.knop('niet', h.icoon('pijlL'), { klasse: 'oef-icoonknop', label: 'Vorige dag' })}<span>${h.esc(tekst)}</span>${h.knop('niet', h.icoon('pijl'), { klasse: 'oef-icoonknop', label: 'Volgende dag' })}</div>`;

function agendaMenu(h) {
  const p = h.S.modPagina;
  const item = (id, naam, ic, extra = '') => `<li>${h.knop('mod-pagina', `${h.icoon(ic, 'ons__icoon')}<span class="oef-menu__tekst">${naam}</span>${extra}`, { waarde: id, klasse: `ons__menu-item${p === id || (id === 'registraties' && p === 'open') ? ' is-actief' : ''}`, extra: p === id ? 'aria-current="page"' : '' })}</li>`;
  return `<nav class="ons__menu oef-menu oef-modmenu" aria-label="Agenda">
    <p class="ons__groep">Agenda</p><ul>${item('agenda', 'Agenda', 'kalender')}${item('uitnodigingen', 'Uitnodigingen', 'uitnodiging')}</ul>
    <p class="ons__groep">Mijn uren</p><ul>${item('registraties', 'Registraties', 'registratie', '<span class="oef-badge">2</span>')}${item('werkstaat', 'Werkstaat', 'klok')}${item('vakantieuren', 'Vakantieuren', 'zon2')}</ul>
    ${h.knop('inklappen', `${h.icoon('inklappen', 'ons__icoon')}<span class="oef-menu__tekst">${h.S.ingeklapt ? 'Uitklappen' : 'Inklappen'}</span>`, { klasse: 'ons__inklappen oef-menu__inklappen', extra: `aria-pressed="${h.S.ingeklapt}"` })}
    <p class="ons__nedap" aria-hidden="true">☆ nedap</p></nav>`;
}

function portaal(h) {
  const uur = new Date().getHours();
  const groet = uur < 12 ? 'Goedemorgen' : uur < 18 ? 'Goedemiddag' : 'Goedenavond';
  return `<div class="oef-mp">
    <svg class="oef-mp__krul" viewBox="0 0 170 130" aria-hidden="true"><path d="M10 80c30 30 70 20 60-10S30 40 50 20s60 0 50 40-40 50-10 40 50-60 60-70" fill="none" stroke="#E8900C" stroke-width="7" stroke-linecap="round"/></svg>
    <div class="oef-mp__kop"><h3 class="oef-mp__groet" tabindex="-1">${groet}, Sanne!</h3><p>Hieronder vind je alles om je dag mee te beginnen.</p></div>
    <div class="oef-mp__raster">
      <div class="oef-mp__hoofd">
        <section class="oef-mp__kaart"><div class="oef-mp__kaartkop"><h4>Werkstaat</h4>${h.knop('niet', h.icoon('print'), { klasse: 'oef-icoonknop', label: 'Afdrukken' })}</div>${datumnav(h, 'Dinsdag 6 oktober 2026')}<p class="oef-mp__leeg oef-mp__leeg--klein">Geen uren geregistreerd op dinsdag 6 oktober.</p>${h.knop('mod-open', 'Invullen, corrigeren of ondertekenen', { waarde: 'Werkstaat', klasse: 'oef-mp__knop' })}</section>
        <section class="oef-mp__kaart"><div class="oef-mp__kaartkop"><h4>Planning</h4></div>${datumnav(h, 'Dinsdag 6 oktober 2026')}<p class="oef-mp__leeg">Geen planning op dinsdag 6 oktober.</p></section>
        <section class="oef-mp__kaart"><div class="oef-mp__kaartkop"><h4>Agenda</h4></div>${datumnav(h, 'Dinsdag 6 oktober 2026')}<p class="oef-mp__leeg">Geen afspraken op dinsdag 6 oktober</p></section>
        <section class="oef-mp__kaart"><div class="oef-mp__kaartkop"><h4 class="is-grijs">Uren</h4></div><div class="ons__tabs oef-tabs oef-mp__tabs" role="group" aria-label="Uren">${h.knop('niet', 'Nu', { klasse: 'oef-tab is-actief', extra: 'aria-pressed="true"' })}${h.knop('niet', 'Toekomst', { klasse: 'oef-tab', extra: 'aria-pressed="false"' })}</div>
          <dl class="oef-mp__uren"><div><dt>Werktijd ${h.icoon('info')}</dt><dd>00:00</dd></div><div><dt>Vakantie ${h.icoon('info')}</dt><dd>00:00</dd></div></dl></section>
        <div class="oef-mp__berichten"><h4>Berichten</h4><span class="oef-mp__balkknoppen">${h.knop('niet', `Lees mee met... ${h.icoon('driehoek')}`, { klasse: 'oef-mp__balkknop' })}${h.knop('niet', `${h.icoon('archief')} Archief`, { klasse: 'oef-mp__balkknop' })}${h.knop('niet', `${h.icoon('sterVol')} Nieuw bericht`, { klasse: 'oef-mp__balkknop' })}${h.knop('niet', h.icoon('zoek'), { klasse: 'oef-mp__balkknop oef-mp__balkzoek', label: 'Berichten zoeken' })}</span></div>
        <section class="oef-mp__bericht"><span class="oef-mp__avatar" aria-hidden="true">${h.icoon('persoon')}</span><div><h4>Ons Medewerkerportaal &amp; Ons Berichten</h4><p>Hoi! Op deze plek vind je je teamcommunicatie zodat je met je team en collega's kunt overleggen. Momenteel zijn er geen berichten.</p><p>Door op de knop 'Nieuw bericht' te klikken in de balk hierboven kun je een bericht sturen aan je team of collega's :-)</p><p class="oef-mp__meta">${h.icoon('klok')} vandaag 23:02 <span>${h.icoon('netwerk')} ${h.knop('niet', 'Notificatie', { klasse: 'oef-link oef-link--plat' })}</span></p></div></section>
      </div>
      <div class="oef-mp__links">${h.knop('niet', 'Rooster', { klasse: 'oef-mp__link' })}${h.knop('niet', 'Smoelenboek', { klasse: 'oef-mp__link' })}${h.knop('mod-open', 'Notities', { waarde: 'Notities', klasse: 'oef-mp__link' })}</div>
    </div></div>`;
}

const SLOT = `<svg class="oef-notities__beeld" viewBox="0 0 240 150" aria-hidden="true"><path d="M30 150c0-50 40-80 90-80s90 30 90 80z" fill="#E6F4D9"/><circle cx="160" cy="88" r="44" fill="#E2457E"/><path d="M132 60V40a28 28 0 0 1 56 0v20" fill="none" stroke="#3E40B0" stroke-width="12"/><circle cx="160" cy="88" r="28" fill="#F48BB0"/><circle cx="160" cy="84" r="7" fill="#3E40B0"/><path d="M157 88h6l2 14h-10z" fill="#3E40B0"/><path d="M84 96c-6-20 4-36 22-38 10 18 6 34-6 42z" fill="#C9E7F7"/><circle cx="104" cy="44" r="12" fill="#A86A3E"/><path d="M92 46c-8 2-14 8-14 8l14 2z" fill="#E6A33E"/><path d="M60 150c4-24 18-34 34-34s24 14 26 34z" fill="#1E7A5E"/><circle cx="68" cy="76" r="9" fill="#3E40B0"/><path d="M68 85v40" stroke="#1E7A5E" stroke-width="3"/><path d="M196 150c2-18 12-28 26-28 6 10 4 22-4 28z" fill="#1E7A5E"/></svg>`;
function notities(h) {
  return `<div class="oef-notities">${SLOT}<h3 tabindex="-1">Benieuwd naar Notities?</h3><p>Met Notities onderzoeken we hoe AI-suggesties je kunnen helpen om zorgmomenten sneller en gemakkelijker te verwerken in de Ons Suite.</p><p>Wil je meedoen aan dit experiment? Meld je dan aan.</p><div class="oef-knoppen">${h.knop('niet', 'Lees meer', { klasse: 'oef-knop oef-knop--wit' })}${h.knop('niet', `${h.icoon('mail')} Mail ons om mee te doen!`, { klasse: 'oef-knop oef-knop--paars' })}</div></div>`;
}

function groepszorg(h) {
  const rijen = 'ABCDEFGH'.split('').map((l) => `<tr><td>${h.knop('niet', `Dagcentrum ${l}`, { klasse: 'oef-link oef-link--plat' })}</td><td>Locatie ${l}</td><td>${h.knop('niet', `${h.icoon('zoek')} Bekijken`, { klasse: 'oef-gz__bekijk' })}</td></tr>`).join('');
  return `<div class="oef-gz"><div class="oef-gz__tabs">${['Planning', 'Registraties', 'Fiatteren', 'Instellingen'].map((t, i) => h.knop('niet', t, { klasse: `oef-gz__tab${i ? '' : ' is-actief'}`, extra: `aria-pressed="${!i}"` })).join('')}<span class="ons__nep-select oef-gz__client">Cliënt zoeken</span></div>
    <div class="oef-gz__lijf"><div class="oef-gz__kop"><div><h3 tabindex="-1">Groepsoverzicht</h3><p>Bekijk en maak een planning voor elke groep</p></div>${h.knop('niet', '+ Groep toevoegen', { klasse: 'oef-gz__toevoegen' })}</div>
    <span class="ons__nep-select oef-gz__zoek">Groep zoeken</span>
    <section class="oef-gz__kaart"><div class="oef-gz__subtabs">${h.knop('niet', 'Groepen', { klasse: 'oef-gz__subtab is-actief', extra: 'aria-pressed="true"' })}${h.knop('niet', 'Gearchiveerde groepen', { klasse: 'oef-gz__subtab', extra: 'aria-pressed="false"' })}</div>
    <table class="oef-gz__tabel"><thead><tr><th>Groepsnaam</th><th>Locatie</th><th><span class="sr">Actie</span></th></tr></thead><tbody>${rijen}</tbody></table>
    <p class="oef-gz__pagina">‹ Vorige <b>1</b> Volgende ›</p></section></div></div>`;
}

const VROUW = `<svg class="oef-oc__vrouw" viewBox="0 0 120 120" aria-hidden="true"><circle cx="70" cy="50" r="46" fill="#fff"/><path d="M48 120c0-30 10-46 30-46s30 16 30 46z" fill="#2D9CDB"/><circle cx="76" cy="46" r="18" fill="#C9744A"/><path d="M60 40c0-16 30-22 36-2 8 4 10 20 2 30-2-14-8-18-14-26-6 6-14 6-24-2z" fill="#2E2A7A"/><circle cx="92" cy="20" r="8" fill="#2E2A7A"/><path d="M42 94c-6-10-6-22 0-30l8 4c-2 8 0 16 6 22z" fill="#C9744A"/></svg>`;
function onsClient(h) {
  const tegel = (n, t, ic) => `<div class="oef-oc__tegel"><p><b>${n}</b><span>${t}</span></p><span class="oef-oc__tegelic">${h.icoon(ic)}</span></div>`;
  const kleuren = ['#BFD3FF', '#BFE6D3', '#FFC4D2', '#BFE8C4', '#FFC9BF', '#BFDDF5'];
  const clienten = kleuren.map((k, i) => `<li>${h.knop('niet', `<span class="oef-oc__avatar" style="--k:${k}" aria-hidden="true"></span>Voorbeeldcliënt ${i + 1} (10000${i + 1})`, { klasse: 'oef-oc__client' })}</li>`).join('');
  const item = (naam, ic, actief) => `<li>${h.knop(actief ? 'mod-pagina' : 'niet', `${h.icoon(ic, 'ons__icoon')}<span class="oef-menu__tekst">${naam}</span>`, { waarde: actief ? 'onsclient' : undefined, klasse: `ons__menu-item${actief ? ' is-actief' : ''}`, extra: actief ? 'aria-current="page"' : '' })}</li>`;
  return `<div class="ons__lijf"><nav class="ons__menu oef-menu oef-modmenu" aria-label="Ons Client"><ul>${item('Dashboard', 'dashboard', true)}${item('Locatieberichten', 'bericht2')}${item('Locaties', 'gebouw')}${item('Bulkuitnodigingen', 'mail')}${item('Instellingen', 'instellingen')}</ul>
    ${h.knop('inklappen', `${h.icoon('inklappen', 'ons__icoon')}<span class="oef-menu__tekst">Inklappen</span>`, { klasse: 'ons__inklappen oef-menu__inklappen', extra: `aria-pressed="${h.S.ingeklapt}"` })}<p class="ons__nedap" aria-hidden="true">☆ nedap</p></nav>
    <div class="ons__inhoud oef-inhoud is-smal oef-oc"><h3 class="ons__titel oef-oc__titel" tabindex="-1">Dashboard</h3>
      <div class="oef-oc__boven"><div class="oef-oc__welkom">${VROUW}<p><b>Hallo, Sanne Visser 👋🏻</b><span>Hoe gaat het vandaag?</span></p></div>
      <div class="oef-oc__tegels">${tegel('1250', 'Cliënten in Ons Administratie', 'm-schild')}${tegel('0', 'Gekoppelde cliënten', 'persoon')}${tegel('0', 'Gekoppelde cliënten uit zorg', 'm-gebouw')}${tegel('12', 'Locaties', 'gebouw')}${tegel('0', 'Verlopen uitnodigingen', 'zandloper')}${tegel('0', 'Uitnodigingen in behandeling', 'klok')}</div></div>
      <section class="oef-oc__kaart"><div class="oef-oc__kaartkop"><h4>Cliënten</h4><label class="oef-zoekveld oef-oc__zoek">${h.icoon('zoek')}<span class="sr">Cliënten zoeken</span><input type="search" placeholder="Cliënten zoeken"></label></div>
        <div class="oef-oc__lijst"><p class="oef-oc__lijstkop">Cliënt</p><ul>${clienten}</ul></div></section>
      <div class="oef-twee"><section class="oef-oc__kaart"><div class="oef-oc__kaartkop"><h4>Locaties</h4><label class="oef-zoekveld oef-oc__zoek">${h.icoon('zoek')}<span class="sr">Locaties zoeken</span><input type="search" placeholder="Locaties zoeken"></label></div><ul class="oef-oc__boom" aria-label="Locaties"><li>${h.icoon('driehoek')} Zorggroep</li><li>${h.icoon('driehoek', 'oef-ic oef-oc__dicht')} Dagcentrum A</li></ul></section>
      <section class="oef-oc__kaart"><div class="oef-oc__kaartkop"><h4>Locatieberichten</h4></div></section></div>
    </div></div>`;
}

function agendaWeek(h) {
  const uren = Array.from({ length: 12 }, (_, i) => `${12 + i}:00`);
  return `<div class="oef-ag"><aside class="oef-ag__lijst"><div class="oef-ag__lijstkop"><h3 tabindex="-1">Agenda's</h3>${h.knop('niet', h.icoon('plus'), { klasse: 'oef-vierkantplus', label: 'Agenda toevoegen' })}</div>
      <p class="oef-ag__persoon is-actief">${h.icoon('persoon')}<span>${h.MEDEWERKER}<small>Fab</small></span></p></aside>
    <div class="oef-ag__hoofd"><p class="oef-ag__wie">${h.icoon('persoon')}<span>${h.MEDEWERKER}<small>Fab</small></span></p>
      <div class="oef-ag__balk">${h.knop('niet', 'Vandaag', { klasse: 'oef-ag__knop' })}<span class="oef-ag__pijlen">${h.knop('niet', h.icoon('pijlL'), { klasse: 'oef-ag__knop', label: 'Vorige week' })}${h.knop('niet', h.icoon('pijl'), { klasse: 'oef-ag__knop', label: 'Volgende week' })}</span><span class="oef-ag__periode"><b>Oktober</b> 2026 - week 41</span>${h.knop('niet', `Week ${h.icoon('omlaag')}`, { klasse: 'oef-ag__knop' })}${h.knop('niet', h.icoon('zoek'), { klasse: 'oef-ag__knop', label: 'Zoeken' })}${h.knop('niet', h.icoon('filter'), { klasse: 'oef-ag__knop', label: 'Filteren' })}
        <span class="oef-ag__rechts">${h.knop('niet', h.icoon('meer'), { klasse: 'oef-ag__knop', label: 'Meer' })}<span class="oef-ag__toevoegen">${h.knop('afspraak-open', 'Afspraak toevoegen', { klasse: 'oef-ag__primair', extra: 'aria-haspopup="dialog"' })}${h.knop('niet', h.icoon('omlaag'), { klasse: 'oef-ag__primair oef-ag__caret', label: 'Meer toevoegopties' })}</span></span></div>
      <div class="oef-ag__raster" role="table" aria-label="Week 41"><div class="oef-ag__rij oef-ag__dagen" role="row"><span role="columnheader"></span>${OCT.map((d, i) => `<span role="columnheader" class="${i === 1 ? 'is-vandaag' : ''}">${d}</span>`).join('')}</div>
        <div class="oef-ag__rij oef-ag__heledag" role="row"><span role="rowheader">Hele dag</span>${OCT.map(() => '<span role="cell"></span>').join('')}</div>
        ${uren.map((u, i) => `<div class="oef-ag__rij" role="row"><span role="rowheader">${u}</span>${OCT.map((_, d) => `<span role="cell">${i === 11 && d === 1 ? '<i class="oef-ag__nu" aria-hidden="true"></i>' : ''}</span>`).join('')}</div>`).join('')}
      </div></div></div>`;
}

function terug(h, naar = 'agenda') { return h.knop('mod-pagina', `${h.icoon('terug')} Terug`, { waarde: naar, klasse: 'oef-kruimel' }); }
function uitnodigingen(h) {
  return `<div class="oef-mpag">${terug(h)}<div class="ons__kopregel"><h3 class="ons__titel" tabindex="-1">Uitnodigingen</h3><span class="oef-segment">${[['inkomend', 'Inkomend'], ['uitstaand', 'Uitstaand']].map(([id, t]) => h.knop('uitn-tab', t, { waarde: id, klasse: h.S.uitnTab === id ? 'is-actief' : '', extra: `aria-pressed="${h.S.uitnTab === id}"` })).join('')}</span></div>
    ${leegstaat(h, 'Geen uitnodigingen gevonden', 'Er zijn op dit moment geen uitnodigingen om weer te geven.')}</div>`;
}
function registraties(h) {
  const open = h.S.modPagina === 'open' || h.S.regTab === 'open';
  const tab = (id, t, extra = '') => h.knop('reg-tab', `${t}${extra}`, { waarde: id, klasse: (open ? id === 'open' : h.S.regTab === id) ? 'is-actief' : '', extra: `aria-pressed="${open ? id === 'open' : h.S.regTab === id}"` });
  const datum = { vandaag: '06-10-2026', gisteren: '05-10-2026', eergisteren: '04-10-2026' }[h.S.regTab] || '';
  const kaart = (wanneer, titel) => `<section class="oef-reg__kaart"><div class="oef-reg__kop"><span class="oef-reg__ongeldig">${h.icoon('klok')} Ongeldig</span><b>Cliënttijd</b><span class="oef-reg__tijd">${wanneer}</span>${h.knop('niet', h.icoon('meer'), { klasse: 'oef-icoonknop', label: 'Meer acties' })}</div><p><b>Titel:</b> ${titel}</p><p><b>Cliënten:</b> T Tester</p><p class="oef-reg__fout">${h.icoon('info')} Uursoort mag niet leeg zijn</p></section>`;
  return `<div class="oef-mpag">${terug(h)}<div class="ons__kopregel"><h3 class="ons__titel" tabindex="-1">Registraties</h3>${h.knop('niet', `${h.icoon('plus')} Registratie`, { klasse: 'oef-knop oef-knop--paars oef-knop--groot' })}</div>
    <div class="oef-reg__balk"><span class="oef-segment">${tab('vandaag', 'Vandaag')}${tab('gisteren', 'Gisteren')}${tab('eergisteren', 'Eergisteren')}${tab('open', 'Alle open registraties', ' <span class="oef-badge oef-badge--oranje">2</span>')}</span>
      <label class="oef-reg__datum"><span class="sr">Datum</span><input type="text" value="${open ? '' : datum}" placeholder="Selecteer een datum" readonly>${h.icoon('kalender')}</label></div>
    ${h.knop('niet', `${h.icoon('filter')} Filters`, { klasse: 'oef-knop oef-knop--wit oef-reg__filters' })}
    ${open ? `<div class="oef-reg__tegels"><p><b>00:00</b>Totale werktijd</p><p><b>02:00</b>Totale ongeregistreerde werktijd</p></div>${kaart('23 sep. 2026, 11:00 – 12:00 (1 u.)', 'Kapper')}${kaart('2 okt. 2026, 10:00 – 11:00 (1 u.)', 'Pedicure')}`
      : leegstaat(h, 'Geen afspraken of registraties op deze dag', 'Misschien zijn er resultaten voor een andere periode of probeer de filters te wijzigen.')}</div>`;
}
function werkstaat(h) {
  return `<div class="oef-ws"><div class="oef-ws__tabs" role="group" aria-label="Werkstaat">${[['Dag', '#E8475A'], ['Week', '#3EA06E'], ['Ondertekenen', '#F2B23A'], ['Bon', '#A0479E']].map(([t, k], i) => h.knop('niet', t, { klasse: `oef-ws__tab${i ? '' : ' is-actief'}`, extra: `style="--k:${k}" aria-pressed="${!i}"` })).join('')}</div>
    <div class="oef-ws__dag">${h.knop('niet', '◂', { klasse: 'oef-ws__pijl', label: 'Vorige dag' })} dinsdag 6 oktober ${h.knop('niet', '▸', { klasse: 'oef-ws__pijl', label: 'Volgende dag' })}</div>
    <table class="oef-ws__tabel"><thead><tr><th>Cliënt</th><th>Werktijd</th><th>Aanrijtijd</th><th>Begintijd</th><th>Eindtijd</th><th>Duur</th></tr></thead><tbody><tr><td colspan="6"></td></tr></tbody></table>
    <p class="oef-ws__totaal">Totaal uren <b>0</b> uur</p></div>`;
}
function vakantieuren(h) {
  const maanden = ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
  const y = (v) => 20 + (150 - v) * 0.72;
  const grafiek = `<svg class="oef-vu__grafiek" viewBox="0 0 520 220" role="img" aria-label="Saldo vakantieuren per maand in 2026, alle waarden 0"><rect x="40" y="${y(150)}" width="${40 + 9 * 36 - 40 + 18}" height="${y(-100) - y(150)}" fill="#EAF3FC"/>${[150, 100, 50, 0, -50, -100].map((v) => `<line x1="40" x2="510" y1="${y(v)}" y2="${y(v)}" stroke="${v === 0 ? '#E8B400' : '#C8C8C8'}"/><text x="32" y="${y(v) + 3}" text-anchor="end">${v}</text>`).join('')}${maanden.map((m, i) => `<text x="${58 + i * 36}" y="214" text-anchor="middle">${m}</text>`).join('')}<text transform="translate(${44 + 9 * 36 + 14} 24) rotate(90)">Gebaseerd op registraties t/m 6 okt</text></svg>`;
  return `<div class="oef-vu"><div class="oef-vu__jaren">${['2025', '2026', '2027'].map((j) => h.knop('niet', j, { klasse: j === '2026' ? 'is-actief' : '', extra: `aria-pressed="${j === '2026'}"` })).join('')}</div>
    <div class="oef-vu__tegels"><p><b>00:00</b>Begin 2026</p><p><b>00:00</b>Begin van deze week</p><p><b>00:00</b>Verwacht eind 2026</p></div>
    <div class="oef-vu__onder"><table class="oef-vu__tabel"><thead><tr><th>Week</th><th>Wijziging</th><th>Saldo</th></tr></thead><tbody><tr><td colspan="3"></td></tr></tbody></table><div class="oef-vu__kaart">${grafiek}</div></div></div>`;
}
function planning(h) {
  return `<div class="oef-pl"><div class="oef-pl__balk">${h.knop('niet', h.icoon('pijlL'), { klasse: 'oef-pl__pijl', label: 'Vorige week' })}<span tabindex="-1">Week 41 - 5 okt t/m 11 okt</span>${h.knop('niet', h.icoon('pijl'), { klasse: 'oef-pl__pijl', label: 'Volgende week' })}<span class="oef-pl__schakel">Dag ${h.knop('niet', '<span class="ons__toggle"></span>', { klasse: 'oef-schakel', label: 'Weergave Dag of Week', extra: 'aria-pressed="true"' })} <b>Week</b></span></div>
    <section class="oef-pl__kaart"><p>Er is geen planning in deze week.</p></section></div>`;
}

export function moduleScherm(h) {
  const p = h.S.modPagina;
  if (p === 'onsclient') return onsClient(h);
  if (AGENDA_FAMILIE.includes(p)) {
    const inhoud = p === 'agenda' ? agendaWeek(h) : p === 'uitnodigingen' ? uitnodigingen(h) : p === 'werkstaat' ? werkstaat(h) : p === 'vakantieuren' ? vakantieuren(h) : p === 'planning' ? planning(h) : registraties(h);
    return `<div class="ons__lijf">${agendaMenu(h)}<div class="ons__inhoud oef-inhoud oef-modinhoud oef-modinhoud--${p}">${inhoud}</div></div>`;
  }
  const inhoud = p === 'notities' ? notities(h) : p === 'groepszorg' ? groepszorg(h) : p === 'toedien' ? '<div class="oef-toedien" tabindex="-1"></div>' : portaal(h);
  return `<div class="oef-modvol oef-modvol--${p}">${inhoud}</div>`;
}

export function afspraakVenster(h) {
  const v = (id, label, extra = '') => `<label class="oef-afs__veld" for="oef-afspraak-${id}"><span>${label}</span>${extra}</label>`;
  const min = (id, label) => `<div class="oef-afs__veld"><label for="oef-afspraak-${id}">${label}</label><span class="oef-afs__min"><input id="oef-afspraak-${id}" type="number" value="0" min="0"><em>min</em>${h.knop('niet', '−', { klasse: 'oef-afs__stap', label: `${label} verminderen` })}${h.knop('niet', '+', { klasse: 'oef-afs__stap', label: `${label} verhogen` })}</span></div>`;
  return `<div class="oef-venster oef-afs" role="dialog" aria-modal="true" aria-labelledby="oef-venster-kop"><div class="oef-venster__kop"><h3 id="oef-venster-kop">Afspraak toevoegen</h3>${h.knop('sluit', h.icoon('sluit'), { klasse: 'oef-sluit', label: 'Sluiten' })}</div>
    <div class="oef-afs__lijf"><section class="oef-afs__kaart oef-afs__genodigden"><div class="oef-afs__kop"><h4>Genodigden</h4>${h.knop('niet', `${h.icoon('plus')} Toevoegen`, { klasse: 'oef-knop oef-knop--wit' })}</div><h5>Medewerkers</h5><p class="oef-afs__persoon">${h.icoon('persoon')}<span><b>${h.MEDEWERKER}</b><small>Fab</small></span>${h.knop('niet', h.icoon('sluit'), { klasse: 'oef-icoonknop', label: `${h.MEDEWERKER} verwijderen` })}</p></section>
      <section class="oef-afs__kaart"><h4>Afspraakdetails</h4>
        ${v('titel', 'Titel', '<input id="oef-afspraak-titel" type="text">')}
        ${v('datum', 'Datum*', '<span class="oef-afs__ic"><input id="oef-afspraak-datum" type="text" placeholder="dd-mm-jjjj"></span>')}
        <div class="oef-afs__twee">${v('begin', 'Begintijd*', '<input id="oef-afspraak-begin" type="text" placeholder="uu:mm">')}<span class="oef-afs__streep">–</span>${v('eind', 'Eindtijd*', '<input id="oef-afspraak-eind" type="text" placeholder="uu:mm">')}</div>
        <div class="oef-afs__twee">${min('heen', 'Reistijd heen')}${min('terug', 'Reistijd terug')}</div>
        <p class="oef-afs__herhaling"><span>Herhaling</span>Niet</p>
        ${v('uursoort', 'Uursoort', '<select id="oef-afspraak-uursoort"><option>Zoek naar uursoorten</option></select>')}
        ${v('locatie', 'Locatie', '<select id="oef-afspraak-locatie"><option>Zoek naar locaties</option></select>')}
        ${v('notities', 'Notities', '<textarea id="oef-afspraak-notities" class="oef-tekstvak"></textarea>')}
        <p class="ons__schakel oef-afs__prive">${h.knop('niet', '<span class="ons__toggle"></span>', { klasse: 'oef-schakel is-uit', label: 'Privé', extra: 'aria-pressed="false"' })}Privé</p>
      </section></div>
    <div class="oef-ons-voeter">${h.knop('sluit', 'Annuleren', { klasse: 'oef-knop oef-knop--wit' })}${h.knop('niet', 'Opslaan', { klasse: 'oef-knop oef-knop--paars' })}</div></div>`;
}
