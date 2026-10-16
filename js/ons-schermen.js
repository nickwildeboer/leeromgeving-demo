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
  return `<section class="ons__kaart oef-ons-ovzkaart"><p><span class="oef-knoppen oef-ons-kaarticons">${h.knop('niet',h.icoon('print'),{klasse:'oef-icoonknop',label:'Afdrukken'})}${h.knop('niet',h.icoon('prullenbak'),{klasse:'oef-icoonknop',label:'Verwijderen'})}</span><span class="oef-ons-rood">Concept onvrijwillige zorg</span> <span class="oef-ons-rood">Evalueer voor 07-10-2026</span> <span class="oef-ons-wzd">Wzd</span></p><p class="oef-ons-meta">Startdatum: 23-09-2026</p><p class="oef-ons-meta">Laatst bijgewerkt door Sanne Visser</p><p class="oef-ons-ovzleeg">Er is geen onvrijwillige zorg opgegeven</p><div class="oef-ons-acties">${btn(h,'ovz-open','› Bekijk (concept) onvrijwillige zorg',undefined,'oef-knop oef-knop--rand')}${btn(h,'niet','Verwijder',undefined,'oef-knop oef-knop--rood')}${btn(h,'niet','Wijzigen',undefined,'oef-knop oef-knop--rand')}</div></section><div class="oef-rechtslink">${btn(h,'niet','Toon alle onvrijwillige zorg (1)',undefined,'oef-blink')}<br>${btn(h,'niet','Toon alternatieven voor onvrijwillige zorg',undefined,'oef-blink')}</div>`;
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
