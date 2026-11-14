window.__INHOUD={"klant":{"naam":"De Wilgenhof","kort":"De Wilgenhof","letter":"W","kleur":"#2F6B4B","accent":"#B45309","testclient":"mevrouw Bakker","begeleider":{"naam":"Fatima","rol":"key-user De Linde"},"medewerker":{"naam":"Sanne","voluit":"Sanne Visser","initialen":"SV"},"standaardRol":"vig","klaar":["rondleiding","overdracht"],"rollen":[{"id":"vig","naam":"Verzorgende IG","modules":["rondleiding","overdracht","opzoeken","rapporteren","klinimetrie","zorgplan","mikzo","episodes","escaleren","familie","zp10","mic","authenticator","wondzorg","onsdossier"]},{"id":"helpende","naam":"Helpende","modules":["rondleiding","overdracht","opzoeken","rapporteren","zorgplan","familie","mic","authenticator","onsdossier"]}],"modules":[{"id":"rondleiding","titel":"Rondleiding: zo werken wij bij De Wilgenhof","duur":"3 minuten"},{"id":"overdracht","titel":"Bekijk de overdrachtsagenda en de overdrachtsrapportages","duur":"6 minuten"},{"id":"opzoeken","titel":"Cliënten opzoeken","duur":"5 minuten"},{"id":"rapporteren","titel":"Rapporteren","kort":"Rapporteren","duur":"10 minuten"},{"id":"klinimetrie","titel":"Klinimetrie","duur":"7 minuten"},{"id":"zorgplan","titel":"Het zorgplan","duur":"7 minuten"},{"id":"mikzo","titel":"Werken met Mikzo","duur":"6 minuten"},{"id":"episodes","titel":"Kortdurende zorgbehoefte (episodes)","duur":"6 minuten"},{"id":"escaleren","titel":"Escaleren: jezelf autoriseren voor een cliënt","duur":"6 minuten"},{"id":"familie","titel":"Afspraken met familie vastleggen","duur":"6 minuten"},{"id":"zp10","titel":"ZP10: zorgpad stervensfase","duur":"7 minuten"},{"id":"mic","titel":"MIC-meldingen","duur":"6 minuten"},{"id":"authenticator","titel":"Authenticator","duur":"5 minuten"},{"id":"wondzorg","titel":"Wondzorgapp","duur":"6 minuten"},{"id":"onsdossier","titel":"Ons Dossier","duur":"6 minuten"}],"opleider":{"naam":"Karin Meijer","rol":"Adviseur Leren en Ontwikkelen","initialen":"KM","totaal":15,"gemiddeldeScore":85,"groep":[{"n":"Fatima el Amrani","f":"Verzorgende IG","t":"De Linde","s":"1 sep","k":15},{"n":"Joost de Graaf","f":"Verzorgende IG","t":"De Linde","s":"8 sep","k":15},{"n":"Lieke Hoekstra","f":"Verzorgende IG","t":"De Eik","s":"8 sep","k":11},{"n":"Mehmet Yilmaz","f":"Verpleegkundige","t":"De Eik","s":"15 sep","k":9},{"n":"Anouk Brink","f":"Verzorgende IG","t":"De Linde","s":"22 sep","k":8},{"n":"Ilse Mulder","f":"Verpleegkundige","t":"De Beuk","s":"29 sep","k":5},{"n":"Sanne Visser","f":"Verzorgende IG","t":"De Linde","s":"2 nov","k":2},{"n":"Daan Kuipers","f":"Verzorgende IG","t":"De Beuk","s":"22 sep","k":2,"achter":true}],"aandacht":{"zin":"Daan is zeven weken bezig en staat op 2 van 15. De inwerkperiode van zes weken is voorbij.","knop":"Schrijf Daan een berichtje","bericht":"Hoi Daan, ik zie dat je na de tweede module bent blijven staan. Zullen we deze week samen kijken wat je nodig hebt om verder te komen?"}}},"modules":[{"id":"authenticator","titel":"Authenticator","duurMin":5,"proces":[{"id":"servicedesk","naam":"Servicedesk"},{"id":"koppelen","naam":"Koppelen"},{"id":"inloggen","naam":"Inloggen"}],"ons":{"plek":"telefoon","app":"Authenticator"},"schermen":{"leeg":{"type":"ons","pagina":{"balk":"Authenticator","knoppen":["+"],"kaarten":[{"kop":"Accounts","regels":["Nog geen accounts"]}]}},"toevoegen":{"type":"ons","pagina":{"balk":"Authenticator","venster":{"titel":"Account toevoegen","opties":["QR-code scannen","Code handmatig invoeren"]}}},"accounts":{"type":"ons","pagina":{"balk":"Authenticator","knoppen":["+"],"kaarten":[{"kop":"Accounts","regels":["De Wilgenhof"]}]}},"code":{"type":"ons","pagina":{"balk":"De Wilgenhof","knoppen":["Code kopiëren"],"kaarten":[{"kop":"Eenmalige code","regels":["482 913","Nog 21 seconden geldig"]}]}}},"stappen":[{"id":"start","type":"situatie","proces":"servicedesk","knop":"En nu?","tekst":"Je hebt sinds dit weekend een nieuwe telefoon. Je wilt inloggen op Nedap ONS om de overdracht te lezen, maar de authenticator-app op je nieuwe telefoon geeft nog geen code."},{"id":"wat-nu","type":"keuze","proces":"servicedesk","vraag":"De dienst begint zo. Wat doe je?","opties":[{"tekst":"Ik vraag of ik even met de inlog van een collega mag werken.","reactie":"Net niet. Wat je vastlegt, staat op naam van wie is ingelogd. Jouw rapportages en aftekeningen staan dan op haar naam. Bij {org} werk je altijd onder je eigen naam."},{"tekst":"Ik bel de servicedesk om de app op mijn nieuwe telefoon te koppelen.","goed":true,"reactie":"Klopt. Bij een nieuwe telefoon moet de app opnieuw gekoppeld worden. Tot die tijd lees ik je de overdracht voor."},{"tekst":"Ik werk vandaag zonder Nedap ONS en schrijf alles op een briefje.","reactie":"Net niet. Een briefje raakt kwijt en de volgende dienst ziet niets. Laat de app opnieuw koppelen, dan kun je gewoon werken."}]},{"id":"afs-kwijt","type":"afspraak","proces":"servicedesk","voor":"Zo hebben we dat bij {org} afgesproken.","tekst":"Heb je een nieuwe telefoon, of ben je je telefoon kwijt? De koppeling gaat niet vanzelf mee. Bel de servicedesk op toestel 2140. De servicedesk koppelt de app opnieuw. Regel dat het liefst voor je dienst begint. Werk tot die tijd nooit met de inlog van een collega.","bron":"Handboek De Wilgenhof, Wachtwoord of Authenticator kwijt"},{"id":"k-plus","type":"klik","proces":"koppelen","scherm":"leeg","doel":{"knop":"+","label":"Account toevoegen"},"opdracht":"De servicedesk heeft een nieuwe koppeling klaargezet. Op de pc zie je een QR-code. De app op je telefoon is nog leeg. Tik op de plusknop.","goed":"Goed. Met de plus voeg je een account toe.","hint":"Bijna. Zoek de knop met de plus."},{"id":"k-qr","type":"klik","proces":"koppelen","scherm":"toevoegen","doel":{"optie":"QR-code scannen"},"opdracht":"De app vraagt hoe je het account wilt toevoegen. De QR-code staat al op de pc. Kies QR-code scannen.","goed":"Ja. Je hebt de QR-code gescand. Het account van {org} staat nu in de lijst.","hint":"Bijna. De QR-code staat klaar op de pc, dus kies QR-code scannen."},{"id":"k-account","type":"klik","proces":"koppelen","scherm":"accounts","doel":{"regel":"De Wilgenhof"},"opdracht":"Tik op De Wilgenhof.","goed":"Precies. Je ziet een code van zes cijfers. Daaronder staat hoe lang hij nog geldig is.","hint":"Bijna. Tik in de lijst Accounts op De Wilgenhof."},{"id":"afs-code","type":"afspraak","proces":"inloggen","scherm":"code","voor":"Je hebt weer een code. Daar hoort één afspraak bij.","tekst":"Je logt in op Nedap ONS met je wachtwoord en een code uit de authenticator-app op je telefoon. Alles wat je doet, staat op naam van wie is ingelogd. Daarom deel je je wachtwoord en je code met niemand. En je logt nooit in voor een ander.","bron":"Handboek De Wilgenhof, Inloggen met de Authenticator"},{"id":"k-kopieer","type":"klik","proces":"inloggen","scherm":"code","doel":{"knop":"Code kopiëren"},"opdracht":"De code is maar kort geldig. Neem hem meteen over in Nedap ONS. Tik op Code kopiëren.","goed":"Goed. Je logt weer in met je eigen code.","hint":"Bijna. Zoek de knop Code kopiëren."},{"id":"volgorde","type":"vraag","proces":"inloggen","vraag":"Morgen log je weer in op Nedap ONS. Wat doe je eerst?","opties":[{"tekst":"Ik open de authenticator-app en neem de code over."},{"tekst":"Ik vul mijn gebruikersnaam en wachtwoord in.","goed":true}],"uitleg":"Eerst je wachtwoord, dan open je de app en neem je de code over. De code verandert steeds, dus neem hem meteen over."},{"id":"zelf","type":"nu-jij","proces":"inloggen","opdracht":"Dat was de route. Nu jij, zonder mij erbij. Koppel de app en neem de code over.","route":["k-plus","k-qr","k-account","k-kopieer"]},{"id":"klaar","type":"klaar","proces":"inloggen","ballon":"Goed gedaan, Sanne. Zo doen wij het.","titel":"Je kunt nu de authenticator-app koppelen op een nieuwe telefoon","geleerd":["Je logt altijd in met je eigen naam en je eigen code.","Nieuwe telefoon? Je laat de app koppelen door de servicedesk, liefst voor je dienst.","Je code deel je met niemand."],"vragen":"Werkt de app niet meer? Bel de servicedesk op toestel 2140.","knop":"Verder naar mijn modules"}]},{"id":"episodes","titel":"Kortdurende zorgbehoefte (episodes)","duurMin":6,"proces":[{"id":"herkennen","naam":"Herkennen"},{"id":"vastleggen","naam":"Vastleggen"},{"id":"koppelen","naam":"Koppelen"},{"id":"afsluiten","naam":"Afsluiten"}],"ons":{"client":"G Kok"},"schermen":{"overzicht":{"type":"ons","menu":"Overzicht","pagina":{"knoppen":["+"],"kaarten":[{"kop":"Episodes","regels":["Geen relevante episodes"]},{"kop":"Waarschuwingen","regels":["Geen waarschuwingen"]}]}},"nieuw":{"type":"ons","menu":"Overzicht","pagina":{"titel":"Nieuwe episode","knoppen":["Opslaan"],"velden":[{"label":"Titel","waarde":"{getypt:Titel}"},{"label":"Startdatum","waarde":"08-10-2026"},{"label":"Einddatum","waarde":""},{"label":"Hoofddoel","waarde":"Mevrouw heeft geen pijn meer bij het plassen."}]}},"overzichtNa":{"type":"ons","menu":"Overzicht","pagina":{"kaarten":[{"kop":"Episodes","regels":["08-10-2026 · {getypt:Titel}"]},{"kop":"Waarschuwingen","regels":["Geen waarschuwingen"]}]}},"rapportages":{"type":"ons","menu":"Rapportages","pagina":{"titel":"Rapportages","knoppen":["Acties bekijken","+"],"kaarten":[{"kop":"Fatima Amrani · gisteren 16.30","regels":["Huisarts geweest. Mevrouw start morgen met een antibioticakuur."]}]}},"rapport":{"type":"ons","menu":"Rapportages","pagina":{"titel":"Nieuw - Rapportage","knoppen":["Opslaan"],"velden":[{"label":"Tekst","waarde":"Eerste tablet van de kuur ingenomen bij het ontbijt. Mevrouw zegt dat het plassen nog pijn doet."},{"label":"Zichtbaar voor","waarde":"Iedereen"}]}},"gekoppeld":{"type":"ons","menu":"Rapportages","pagina":{"titel":"Nieuw - Rapportage","knoppen":["Opslaan"],"velden":[{"label":"Tekst","waarde":"Eerste tablet van de kuur ingenomen bij het ontbijt. Mevrouw zegt dat het plassen nog pijn doet."},{"label":"Zichtbaar voor","waarde":"Iedereen"},{"label":"Koppel aan episodes","waarde":"{getypt:Titel}"}]}}},"stappen":[{"id":"start","type":"situatie","proces":"herkennen","scherm":"overzicht","knop":"Laat maar zien","tekst":"Mevrouw Kok heeft een blaasontsteking en krijgt een antibioticakuur van vijf dagen. De huisarts wil dat ze extra drinkt, dus dat leggen we samen vast."},{"id":"afs-wanneer","type":"afspraak","proces":"herkennen","voor":"Eerst hoe wij dat doen bij {org}.","tekst":"Speelt er iets wat na een paar dagen of weken weer over is? Leg het dan vast als episode, een kortdurende zorgbehoefte. Denk aan een blaasontsteking, griep of een wondje na een val.","bron":"Handboek De Wilgenhof, Wanneer je een episode maakt"},{"id":"waar","type":"keuze","proces":"herkennen","vraag":"Hoe leg je de blaasontsteking vast in Nedap ONS?","opties":[{"tekst":"Ik pas het zorgplan aan en zet er een nieuw doel in voor de blaasontsteking.","reactie":"Net niet. Het zorgplan is voor zorg die blijft. Een blaasontsteking speelt een paar dagen. Staat het doel er over twee weken nog, dan moet de EVV'er het weer weghalen."},{"tekst":"Ik schrijf het alleen in de rapportage. Dat leest iedereen toch.","reactie":"Net niet. Een rapportage zakt weg tussen nieuwe rapportages. Wie zaterdag begint, leest die van donderdag niet en weet niets van het extra drinken."},{"tekst":"Ik maak een episode aan voor de blaasontsteking, met de kuur en het extra drinken erin.","goed":true,"reactie":"Klopt. Elke dienst ziet de episode bij mevrouw Kok staan. Het zorgplan blijft zoals het was."}]},{"id":"k-plus","type":"klik","proces":"vastleggen","scherm":"overzicht","doel":{"knop":"+","label":"Nieuwe episode"},"opdracht":"Het dossier van mevrouw Kok staat open op het Overzicht. Bij Episodes staat nog niets. Klik op de plusknop bij Episodes.","goed":"Goed. Met de plusknop bij Episodes maak je een nieuwe episode.","hint":"Bijna. Zoek de kaart Episodes. De plusknop staat in die kaart."},{"id":"t-titel","type":"typ","proces":"vastleggen","scherm":"nieuw","veld":"Titel","wis":true,"opdracht":"Geef de episode een korte titel die iedereen snapt. Typ hem bij Titel.","goed":"Mooi. Zo ziet elke collega meteen wat er speelt."},{"id":"indelen","type":"vraag","proces":"vastleggen","meer":true,"vraag":"Wat hoort in de episode van mevrouw Kok? Er zijn meer antwoorden goed.","opties":[{"tekst":"Antibioticakuur van vijf dagen, tot en met maandag","goed":true},{"tekst":"Vanochtend drie keer naar het toilet, urine troebel"},{"tekst":"Elke dienst extra drinken aanbieden, minstens 1,5 liter per dag","goed":true},{"tekst":"Mevrouw Kok wil al jaren eerst koffie, en dan pas gewassen worden"}],"uitleg":"In de episode staat wat iedereen moet doen zolang het speelt. Wat je vanochtend zag, gaat in de rapportage. De koffie voor het wassen geldt altijd, dat staat in het zorgplan."},{"id":"k-opslaan","type":"klik","proces":"vastleggen","scherm":"nieuw","doel":{"knop":"Opslaan"},"opdracht":"De startdatum is vandaag. Bij Hoofddoel staat wat je wilt bereiken. De einddatum blijft leeg, want het speelt nog. Klik op Opslaan.","goed":"Opgeslagen. De episode staat nu op het Overzicht. Elke collega die het dossier opent, ziet hem meteen.","hint":"Bijna. Opslaan staat rechtsboven het formulier."},{"id":"k-menu","type":"klik","proces":"koppelen","scherm":"overzichtNa","doel":{"menu":"Rapportages"},"opdracht":"Nu wat je vanochtend zag. Dat hoort in de rapportage. Klik links in het menu op Rapportages.","goed":"Precies. Hier staan de rapportages van mevrouw Kok.","hint":"Bijna. Kijk links in het menu, tussen Plan en Agenda."},{"id":"k-nieuw","type":"klik","proces":"koppelen","scherm":"rapportages","doel":{"icoon":2,"label":"Nieuwe rapportage"},"opdracht":"Boven de lijst staan drie icoontjes. Klik op het tweede, het blad papier. Daarmee begin je een nieuwe rapportage.","goed":"Goed. Rapporteren ken je al, daarom staat de tekst er nu al in.","hint":"Bijna. Kijk linksboven de lijst. Het is het tweede icoontje."},{"id":"k-koppel","type":"klik","proces":"koppelen","scherm":"rapport","doel":{"veld":"Koppel aan episodes"},"opdracht":"Onder het tekstvak koppel je de rapportage aan de episode. Klik op Koppel aan episodes.","goed":"Goed. Je episode staat erbij. Zo staat alles over de blaasontsteking bij elkaar.","hint":"Bijna. Koppel aan episodes staat onder het tekstvak."},{"id":"k-bewaar","type":"klik","proces":"koppelen","scherm":"gekoppeld","doel":{"knop":"Opslaan"},"opdracht":"De tekst staat erin en de episode is gekoppeld. Klik op Opslaan.","goed":"Opgeslagen. Je rapportage hoort nu bij de episode.","hint":"Bijna. Opslaan staat rechtsboven."},{"id":"afs-afsluiten","type":"afspraak","proces":"afsluiten","scherm":"overzichtNa","voor":"Een episode blijft niet voor altijd open staan.","tekst":"Is het over, sluit de episode dan af en schrijf dat in de rapportage. Komt hetzelfde steeds terug, bespreek dan met de EVV'er of het in het zorgplan hoort.","bron":"Handboek De Wilgenhof, Een episode maken en afsluiten"},{"id":"over","type":"keuze","proces":"afsluiten","vraag":"Een week later is de kuur klaar. Mevrouw Kok heeft geen klachten meer. Wat doe je met de episode?","opties":[{"tekst":"Ik sluit de episode af en schrijf in de rapportage dat de klachten over zijn.","goed":true,"reactie":"Klopt. Iedereen ziet dat de blaasontsteking voorbij is en het extra drinken stopt. De afgesloten episode blijft terug te lezen."},{"tekst":"Ik laat hem staan. Misschien komt het terug.","reactie":"Net niet. Een open episode zegt: dit speelt nu. Een nieuwe collega denkt dan dat mevrouw Kok nog ziek is. Komt het terug, dan maak je een nieuwe."}]},{"id":"zelf","type":"nu-jij","proces":"afsluiten","opdracht":"Dat was de route. Nu jij, zonder mij erbij. Maak de episode voor mevrouw Kok en koppel er een rapportage aan.","route":["k-plus","t-titel","k-opslaan","k-menu","k-nieuw","k-koppel","k-bewaar"]},{"id":"klaar","type":"klaar","proces":"afsluiten","ballon":"Goed gedaan, Sanne. Zo doen wij het.","titel":"Je kunt nu een episode vastleggen in Nedap ONS","geleerd":["Speelt iets maar een paar dagen of weken, dan leg je het vast als episode.","In de episode staat wat iedereen moet doen zolang het speelt.","Is het over, dan sluit je de episode af. Komt het steeds terug, dan bespreek je met de EVV'er of het in het zorgplan hoort."],"knop":"Verder naar mijn modules"}]},{"id":"escaleren","titel":"Escaleren: jezelf autoriseren voor een cliënt","duurMin":6,"proces":[{"id":"afwegen","naam":"Afwegen"},{"id":"escaleren","naam":"Escaleren"},{"id":"lezen","naam":"Lezen"},{"id":"melden","naam":"Melden"}],"ons":{"client":"H Bos"},"schermen":{"geen":{"type":"ons","pagina":{"titel":"Geen toegang","knoppen":["Escaleren"],"kaarten":[{"kop":"Je hebt geen toegang tot dit dossier","regels":["Heb je dit dossier nodig voor de zorg die je nu geeft? Dan kun je escaleren. Je moet een reden opgeven."]}]}},"reden":{"type":"ons","pagina":{"titel":"Escaleren","knoppen":["Annuleren","Bevestigen"],"velden":[{"label":"Reden","waarde":"{getypt:Reden}"}]}},"overzicht":{"type":"ons","menu":"Overzicht","pagina":{"kaarten":[{"kop":"Waarschuwingen","regels":["Verslikgevaar"]},{"kop":"Episodes","regels":["Geen relevante episodes"]},{"kop":"Belangrijke rapportages","regels":["Geen belangrijke rapportages"]}]}},"plan":{"type":"ons","menu":"Plan","pagina":{"tabs":["Zorgplan","Onvrijwillige zorg"],"kaarten":[{"kop":"Gezondheid","regels":["Eten en drinken: veilig slikken","Medicatie: hulp bij innemen"]},{"kop":"Welzijn","regels":["Dagbesteding op dinsdag en vrijdag"]}]}},"doel":{"type":"ons","menu":"Plan","pagina":{"titel":"Eten en drinken: veilig slikken","kaarten":[{"kop":"Acties","regels":["Gemalen eten, geen harde korstjes.","Drinken altijd verdikt.","Meneer zit rechtop aan tafel en eet in een rustig tempo."]}]}}},"stappen":[{"id":"start","type":"situatie","proces":"afwegen","scherm":"geen","knop":"Laat maar zien","tekst":"Je valt vandaag in op De Eik en om 17.00 uur is het avondeten. Meneer Bos verslikt zich snel, maar hij staat niet in jouw lijst en je kunt zijn dossier niet openen."},{"id":"afs-wanneer","type":"afspraak","proces":"afwegen","voor":"Eerst wanneer het mag bij {org}.","tekst":"Je escaleert alleen als je nu zorg geeft aan een cliënt die niet in jouw lijst staat, en je de gegevens daarvoor nodig hebt. Bijvoorbeeld als je invalt of als het acuut is. Nieuwsgierigheid is nooit een reden.","bron":"Handboek De Wilgenhof, Escaleren: wanneer het mag"},{"id":"slikadvies","type":"keuze","proces":"afwegen","vraag":"Je hebt het slikadvies van meneer Bos nodig. Wat doe je?","opties":[{"tekst":"Ik vraag Lieke of ik even op haar account mag kijken. Zij staat wel ingelogd.","reactie":"Net niet. Op het account van een ander werken mag nooit. Alles wat je doet, staat dan op haar naam. Je gebruikt altijd je eigen account."},{"tekst":"Ik escaleer mijn toegang voor meneer Bos en schrijf als reden: invallen op De Eik.","goed":true,"reactie":"Klopt. Je valt in en je geeft hem nu zorg. Met een reden erbij mag je het dossier lezen dat je nodig hebt."},{"tekst":"Ik geef meneer Bos gewoon zijn eten. Ik let goed op.","reactie":"Net niet. Een slikadvies is er niet voor niets. Als je zorg geeft, moet je weten wat er voor deze cliënt is afgesproken."}]},{"id":"k-escaleren","type":"klik","proces":"escaleren","scherm":"geen","doel":{"knop":"Escaleren"},"opdracht":"Je hebt meneer Bos opgezocht. Nedap ONS zegt dat je geen toegang hebt. Klik op Escaleren.","goed":"Goed. Nu vraagt Nedap ONS waarom je toegang nodig hebt.","hint":"Bijna. De knop Escaleren staat onder de tekst over geen toegang."},{"id":"afs-reden","type":"afspraak","proces":"escaleren","scherm":"reden","voor":"Voor je gaat typen, nog één afspraak.","tekst":"Je schrijft een reden, bijvoorbeeld: invallen op De Eik. Wie er keek, wanneer en waarom, wordt bewaard. De privacyfunctionaris bekijkt elke week wie er geëscaleerd heeft.","bron":"Handboek De Wilgenhof, Zo escaleer je in Nedap ONS"},{"id":"t-reden","type":"typ","proces":"escaleren","scherm":"reden","veld":"Reden","wis":true,"opdracht":"Typ bij Reden waarom je toegang nodig hebt. Schrijf het zo dat een ander het later snapt.","goed":"Mooi. De reden wordt bewaard bij je naam."},{"id":"k-bevestigen","type":"klik","proces":"escaleren","scherm":"reden","doel":{"knop":"Bevestigen"},"opdracht":"Je reden staat erin. Klik op Bevestigen.","goed":"Het dossier is open. Bij Waarschuwingen zie je dat meneer Bos zich snel verslikt.","hint":"Bijna. Bevestigen staat onderaan het venster, naast Annuleren."},{"id":"afs-lezen","type":"afspraak","proces":"lezen","scherm":"overzicht","voor":"Je bent binnen. Dan geldt dit.","tekst":"Lees alleen wat je nodig hebt en vertel het bij de overdracht.","bron":"Handboek De Wilgenhof, Zo escaleer je in Nedap ONS"},{"id":"k-plan","type":"klik","proces":"lezen","scherm":"overzicht","doel":{"menu":"Plan"},"opdracht":"Het advies voor zijn eten staat in het zorgplan. Klik links in het menu op Plan.","goed":"Goed. Hier staat het zorgplan van meneer Bos.","hint":"Bijna. Kijk links in het menu. Plan staat boven Rapportages."},{"id":"k-doel","type":"klik","proces":"lezen","scherm":"plan","doel":{"regel":"Eten en drinken: veilig slikken"},"opdracht":"Je zoekt alleen wat je nu nodig hebt. Klik op het doel over eten en drinken.","goed":"Ja. Hier staat wat je moet weten voor het eten. De andere delen van het dossier laat je dicht.","hint":"Bijna. Het doel staat onder Gezondheid: Eten en drinken: veilig slikken."},{"id":"alles","type":"vraag","proces":"lezen","scherm":"doel","vraag":"Je hebt geëscaleerd voor een cliënt. Wat lees je in zijn dossier?","opties":[{"tekst":"Alles, nu je toch binnen bent."},{"tekst":"Alleen wat de familie heeft geschreven."},{"tekst":"Alleen wat je nodig hebt voor de zorg die je nu geeft.","goed":true}],"uitleg":"Je leest alleen wat je nodig hebt voor de zorg van dat moment. Na het eten rapporteer je hoe het ging, en bij de overdracht vertel je dat je geëscaleerd hebt en waarom."},{"id":"dinsdag","type":"keuze","proces":"melden","vraag":"Dinsdag werk je weer op De Linde. Je vraagt je af hoe het met meneer Bos gaat. Wat doe je?","opties":[{"tekst":"Ik vraag het aan Mehmet als ik hem zie.","goed":true,"reactie":"Klopt. Je geeft geen zorg meer aan meneer Bos, dus je hebt geen reden om in zijn dossier te kijken."},{"tekst":"Ik escaleer nog een keer en kijk even in zijn rapportage.","reactie":"Net niet. Elke keer dat je escaleert, wordt vastgelegd en gecontroleerd. Je mag het alleen als je zorg geeft aan deze cliënt."}]},{"id":"controle","type":"vraag","proces":"melden","vraag":"Wat gebeurt er met een escalatie bij De Wilgenhof?","opties":[{"tekst":"Niets, niemand ziet het."},{"tekst":"Hij wordt vastgelegd en elke week gecontroleerd.","goed":true},{"tekst":"Hij wordt na een dag gewist."}],"uitleg":"Wie er keek, wanneer en waarom, wordt bewaard. De privacyfunctionaris bekijkt elke week wie er geëscaleerd heeft."},{"id":"zelf","type":"nu-jij","proces":"melden","opdracht":"Dat was de route. Nu jij, zonder mij erbij. Escaleer voor meneer Bos en zoek het advies voor zijn eten op.","route":["k-escaleren","t-reden","k-bevestigen","k-plan","k-doel"]},{"id":"klaar","type":"klaar","proces":"melden","ballon":"Goed gedaan, Sanne. Zo doen wij het.","titel":"Je kunt nu escaleren in Nedap ONS","geleerd":["Staat een cliënt niet in jouw lijst en moet je zorg geven, dan mag je escaleren. Bijvoorbeeld als je invalt of als het acuut is.","Je geeft altijd een reden op en je leest alleen wat je nodig hebt.","Nieuwsgierigheid is nooit een reden. Je werkt nooit op het account van een collega."],"daarna":{"regels":["Wie er keek, wanneer en waarom, wordt bewaard.","De privacyfunctionaris bekijkt elke week wie er geëscaleerd heeft."],"bron":"Handboek De Wilgenhof, Zo escaleer je in Nedap ONS"},"knop":"Verder naar mijn modules"}]},{"id":"familie","titel":"Afspraken met familie vastleggen","duurMin":6,"proces":[{"id":"afspraak","naam":"Afspraak"},{"id":"openen","naam":"Openen"},{"id":"opschrijven","naam":"Opschrijven"},{"id":"doorgeven","naam":"Doorgeven"}],"ons":{"client":"M Dijkstra"},"schermen":{"overzicht":{"type":"ons","menu":"Overzicht","pagina":{"kaarten":[{"kop":"Waarschuwingen","regels":["Geen waarschuwingen"]},{"kop":"Belangrijke rapportages","regels":["Geen belangrijke rapportages"]}]}},"rapportages":{"type":"ons","menu":"Rapportages","pagina":{"titel":"Rapportages","knoppen":["Acties bekijken","+"],"kaarten":[{"kop":"Joost de Vries · gisteren 21.50","regels":["Mevrouw heeft na het avondeten met haar dochter gebeld. Daarna rustig gaan slapen."]}]}},"nieuw":{"type":"ons","menu":"Rapportages","pagina":{"titel":"Nieuw - Rapportage","knoppen":["Markeer als belangrijk","Opslaan"],"velden":[{"label":"Tekst","waarde":"{getypt}"},{"label":"Zichtbaar voor","waarde":"Iedereen"}]}},"nieuwOpen":{"type":"ons","menu":"Rapportages","pagina":{"titel":"Nieuw - Rapportage","knoppen":["Markeer als belangrijk","Opslaan"],"velden":[{"label":"Tekst","waarde":"{getypt}"},{"label":"Zichtbaar voor","waarde":"Iedereen"}]},"open":{"veld":"Acties voor","opties":["EVV"]}},"actie":{"type":"ons","menu":"Rapportages","pagina":{"titel":"Nieuw - Rapportage","knoppen":["Markeer als belangrijk","Opslaan"],"velden":[{"label":"Tekst","waarde":"{getypt}"},{"label":"Acties voor","waarde":"EVV"},{"label":"Zichtbaar voor","waarde":"Iedereen"}]}},"ster":{"type":"ons","menu":"Rapportages","pagina":{"titel":"Nieuw - Rapportage","knoppen":["★ Belangrijk","Opslaan"],"velden":[{"label":"Tekst","waarde":"{getypt}"},{"label":"Acties voor","waarde":"EVV"},{"label":"Zichtbaar voor","waarde":"Iedereen"}]}},"opgeslagen":{"type":"ons","menu":"Rapportages","pagina":{"titel":"Rapportages","knoppen":["Acties bekijken","+"],"kaarten":[{"kop":"★ Sanne Visser · vandaag 14.20","regels":["{getypt}"]},{"kop":"Joost de Vries · gisteren 21.50","regels":["Mevrouw heeft na het avondeten met haar dochter gebeld. Daarna rustig gaan slapen."]}]}}},"stappen":[{"id":"start","type":"situatie","proces":"afspraak","scherm":"overzicht","knop":"Laat maar zien","tekst":"De dochter van mevrouw Dijkstra houdt je aan op de gang. Ze haalt haar moeder vanaf nu elke zondag om 9.30 uur op voor de kerk, en bij een val wil ze meteen gebeld worden."},{"id":"afs-meteen","type":"afspraak","proces":"afspraak","voor":"Eerst hoe wij dat doen bij {org}.","tekst":"Een afspraak met familie geldt voor alle diensten, ook voor de nacht en het weekend. Leg hem daarom meteen vast in Nedap ONS, niet in je hoofd en niet op een briefje.","bron":"Handboek De Wilgenhof, Afspraken met familie vastleggen"},{"id":"k-menu","type":"klik","proces":"openen","scherm":"overzicht","doel":{"menu":"Rapportages"},"opdracht":"Het dossier van mevrouw Dijkstra staat open. Een afspraak met familie leg je vast als rapportage. Klik links in het menu op Rapportages.","goed":"Precies. Hier staan de rapportages van mevrouw Dijkstra.","hint":"Bijna. Kijk links in het menu, tussen Plan en Agenda."},{"id":"k-plus","type":"klik","proces":"openen","scherm":"rapportages","doel":{"icoon":2,"label":"Nieuwe rapportage"},"opdracht":"Boven de lijst staan drie icoontjes. Klik op het tweede, het blad papier. Daarmee begin je een nieuwe rapportage.","goed":"Goed. Hier schrijf je de afspraak op.","hint":"Bijna. Kijk linksboven de lijst. Het is het tweede icoontje."},{"id":"afs-wie","type":"afspraak","proces":"opschrijven","scherm":"nieuw","voor":"Voor je gaat typen, nog één afspraak.","tekst":"Schrijf op wie, wat en wanneer, en met wie je het afsprak. Bijvoorbeeld: zoon helpt elke dinsdag om 17.30 uur bij het avondeten.","bron":"Handboek De Wilgenhof, Wat je de familie toezegt"},{"id":"vallen","type":"keuze","proces":"opschrijven","vraag":"Hoe schrijf je de afspraak over vallen op?","opties":[{"tekst":"Bij een val direct de dochter bellen, ook 's nachts. Afgesproken met de dochter op vrijdag, door Sanne.","goed":true,"reactie":"Klopt. Een collega die mevrouw Dijkstra niet kent, weet nu precies wat ze moet doen."},{"tekst":"Familie wil op de hoogte blijven.","reactie":"Net niet. Op de hoogte blijven kan alles betekenen. Schrijf op wie je belt, wanneer en hoe."}]},{"id":"t-tekst","type":"typ","proces":"opschrijven","scherm":"nieuw","veld":"tekst","wis":true,"opdracht":"Nu de kerk. Typ de afspraak in je eigen woorden: wie, wat en wanneer, en met wie je het afsprak.","goed":"Mooi. Zondag weet de vroege dienst precies wat er moet gebeuren."},{"id":"afs-evv","type":"afspraak","proces":"doorgeven","voor":"Nu zorgen we dat de afspraak blijft staan.","tekst":"Je schrijft de afspraak als rapportage. Je markeert hem als belangrijk en zet een actie voor de EVV'er. Die zet de afspraak daarna in het zorgplan. Geldt hij al voor de volgende dienst, zet hem dan ook in de overdracht.","bron":"Handboek De Wilgenhof, Afspraken met familie vastleggen"},{"id":"k-acties","type":"klik","proces":"doorgeven","scherm":"nieuw","doel":{"veld":"Acties voor"},"opdracht":"Eerst de actie voor de EVV'er. Klik op Acties voor.","goed":"Goed. Hier kies je wie een taak krijgt.","hint":"Bijna. Acties voor staat onder het tekstvak."},{"id":"k-evv","type":"klik","proces":"doorgeven","scherm":"nieuwOpen","doel":{"optie":"EVV"},"opdracht":"Kies EVV.","goed":"Ja. Zo krijgt de EVV'er een taak. Zij zet de afspraak daarna in het zorgplan.","hint":"Bijna. Klik in de lijst op EVV."},{"id":"k-ster","type":"klik","proces":"doorgeven","scherm":"actie","doel":{"knop":"Markeer als belangrijk"},"opdracht":"Markeer de rapportage als belangrijk, dan blijft hij op het Overzicht staan. Klik op Markeer als belangrijk.","goed":"De ster staat aan. Je rapportage is klaar.","hint":"Bijna. Markeer als belangrijk staat rechtsboven, naast Opslaan."},{"id":"k-opslaan","type":"klik","proces":"doorgeven","scherm":"ster","doel":{"knop":"Opslaan"},"opdracht":"Klik op Opslaan.","goed":"Opgeslagen. Je rapportage staat bovenaan, met een ster. Op het Overzicht staat hij nu bij Belangrijke rapportages.","hint":"Bijna. Opslaan staat rechtsboven."},{"id":"medicijn","type":"vraag","proces":"doorgeven","scherm":"opgeslagen","vraag":"De familie vraagt of een medicijn op een ander tijdstip mag. Wat doe je?","opties":[{"tekst":"Ik zeg ja, dat is makkelijk te regelen."},{"tekst":"Ik zeg het niet toe en overleg eerst, want de arts beslist.","goed":true},{"tekst":"Ik zeg nee, dat mag nooit."}],"uitleg":"Een vaste afspraak over de dagelijkse zorg mag je vastleggen en doorgeven. Over medicijnen of behandeling zeg je niets toe. Daar beslist de arts over, dus dat overleg je eerst."},{"id":"zelf","type":"nu-jij","proces":"doorgeven","opdracht":"Dat was de route. Nu jij, zonder mij erbij. Leg de afspraak met de dochter van mevrouw Dijkstra vast.","route":["k-menu","k-plus","t-tekst","k-acties","k-evv","k-ster","k-opslaan"]},{"id":"klaar","type":"klaar","proces":"doorgeven","ballon":"Goed gedaan, Sanne. Zo doen wij het.","titel":"Je kunt nu een afspraak met familie vastleggen in Nedap ONS","geleerd":["Een afspraak met familie leg je meteen vast in Nedap ONS, niet in je hoofd en niet op een briefje.","Je schrijft op wie, wat en wanneer, zodat een collega die de cliënt niet kent het ook snapt.","Geldt het al voor de volgende dienst, dan zet je het ook in de overdracht. Over medicatie zeg je niets toe zonder overleg."],"daarna":{"regels":["De EVV'er zet de afspraak daarna in het zorgplan."],"bron":"Handboek De Wilgenhof, Afspraken met familie vastleggen"},"knop":"Verder naar mijn modules"}]},{"id":"klinimetrie","titel":"Klinimetrie","duurMin":7,"proces":[{"id":"wegen","naam":"Wegen"},{"id":"vastleggen","naam":"Vastleggen"},{"id":"vergelijken","naam":"Vergelijken"},{"id":"signaleren","naam":"Signaleren"}],"ons":{"client":"K de Vries"},"schermen":{"overzicht":{"type":"ons","menu":"Overzicht","pagina":{"kaarten":[{"kop":"Waarschuwingen","regels":["Geen waarschuwingen"]},{"kop":"Belangrijke rapportages","regels":["Geen belangrijke rapportages"]}]}},"rapportages":{"type":"ons","menu":"Rapportages","pagina":{"titel":"Rapportages","knoppen":["Acties bekijken","+"],"kaarten":[{"kop":"Joost Hendriks · gisteren 18.30","regels":["Meneer heeft de helft van zijn warme maaltijd laten staan."]}]}},"soort":{"type":"ons","menu":"Rapportages","pagina":{"venster":{"titel":"Rapportagetype toevoegen","opties":["Gewicht","Bloeddruk","Temperatuur","Bloedsuiker","Pijnscore"]}}},"nieuw":{"type":"ons","menu":"Rapportages","pagina":{"titel":"Nieuw - Gewicht","knoppen":["Opslaan"],"velden":[{"label":"Gewicht (kg)","waarde":"{getypt:Gewicht}"},{"label":"Opmerking","waarde":"{getypt:Opmerking}"}]}},"opgeslagen":{"type":"ons","menu":"Rapportages","pagina":{"titel":"Rapportages","knoppen":["Acties bekijken","+"],"kaarten":[{"kop":"Gewicht · vandaag 7.50","regels":["{getypt:Gewicht} kg"]},{"kop":"Joost Hendriks · gisteren 18.30","regels":["Meneer heeft de helft van zijn warme maaltijd laten staan."]},{"kop":"Gewicht · 2 september 7.45","regels":["67,5 kg"]}]}},"klinimetrie":{"type":"ons","menu":"Klinimetrie","pagina":{"tabs":["Klinimetrie","Zorgvraagtypering","Tijdlijn"],"titel":"Klinimetrie - Overzicht","knoppen":["+ Nieuwe meting"],"kaarten":[{"regels":["Er zijn geen metingen om weer te geven voor deze cliënt."]}]}}},"stappen":[{"id":"start","type":"situatie","proces":"wegen","scherm":"overzicht","knop":"Laat maar zien","tekst":"Meneer De Vries laat de laatste week vaak de helft van zijn warme maaltijd staan en zijn broek zit losser dan eerst. Vandaag is het de eerste woensdag van de maand, dus je gaat hem wegen."},{"id":"afs-wegen","type":"afspraak","proces":"wegen","voor":"Eerst hoe wij wegen bij {org}.","tekst":"Op De Linde weeg je de cliënten op de eerste woensdag van de maand. Je weegt voor het ontbijt, op de stoelweegschaal, in pyjama. Zo kun je de metingen goed vergelijken.","bron":"Handboek De Wilgenhof, Wegen en het gewicht vastleggen"},{"id":"k-menu","type":"klik","proces":"vastleggen","scherm":"overzicht","doel":{"menu":"Rapportages"},"opdracht":"Je hebt meneer De Vries gewogen en het gewicht opgeschreven. Nu zet je het in Nedap ONS. Klik links in het menu op Rapportages.","goed":"Precies. Een meting is ook een rapportage, dus je begint hier.","hint":"Bijna. Kijk links in het menu, tussen Plan en Agenda."},{"id":"k-plus","type":"klik","proces":"vastleggen","scherm":"rapportages","doel":{"knop":"+","label":"Nieuwe rapportage"},"opdracht":"Klik op de blauwe plus om een nieuwe te maken.","goed":"Goed. Nedap ONS vraagt nu welk soort rapportage je maakt.","hint":"Bijna. Rechtsboven staat een blauwe knop met een plus."},{"id":"k-soort","type":"klik","proces":"vastleggen","scherm":"soort","doel":{"optie":"Gewicht"},"opdracht":"Kies Gewicht.","goed":"Ja. Zo komt het getal ook in het overzicht van zijn metingen.","hint":"Bijna. Je legt een gewicht vast, dus kies Gewicht."},{"id":"t-gewicht","type":"typ","proces":"vastleggen","scherm":"nieuw","veld":"Gewicht","wis":true,"opdracht":"Meneer woog 64,2 kilo. Typ het gewicht in zoals je het hebt afgelezen.","goed":"Goed. Het getal staat erin."},{"id":"t-opmerking","type":"typ","proces":"vastleggen","scherm":"nieuw","veld":"Opmerking","wis":true,"opdracht":"Schrijf bij Opmerking hoe je gewogen hebt: welke weegschaal, welk moment en welke kleding.","goed":"Mooi. Je collega weet nu dat deze meting op dezelfde manier is gedaan als de vorige."},{"id":"k-opslaan","type":"klik","proces":"vastleggen","scherm":"nieuw","doel":{"knop":"Opslaan"},"opdracht":"Het gewicht en je opmerking staan erin. Klik op Opslaan.","goed":"Opgeslagen. Het gewicht staat bovenaan bij de rapportages.","hint":"Bijna. Opslaan staat rechtsboven."},{"id":"afs-vergelijken","type":"afspraak","proces":"vergelijken","scherm":"opgeslagen","voor":"Je bent nog niet klaar. Kijk naar de meting van 2 september.","tekst":"Een gewicht leg je vast als rapportage van het soort Gewicht. Vergelijk het daarna met de vorige meting. Is een cliënt in een maand meer dan 2 kilo afgevallen, meld het dan bij de EVV'er.","bron":"Handboek De Wilgenhof, Wegen en het gewicht vastleggen"},{"id":"afgevallen","type":"keuze","proces":"vergelijken","vraag":"Meneer weegt 64,2 kilo. Vorige maand woog hij 67,5 kilo. Wat doe je?","opties":[{"tekst":"Niets extra. Het gewicht staat er nu in.","reactie":"Net niet. Een gewicht in Nedap ONS zegt niets als niemand er iets mee doet. Meneer is ruim 3 kilo afgevallen in een maand."},{"tekst":"De weegschaal klopt vast niet. Ik weeg hem morgen nog een keer.","reactie":"Net niet. Twijfel je aan de weegschaal, weeg dan meteen nog een keer. Zijn losse broek en het eten wijzen dezelfde kant op."},{"tekst":"Ik rapporteer dat hij minder eet en dat zijn broek los zit. Ik meld het bij de EVV'er.","goed":true,"reactie":"Klopt. Meer dan 2 kilo eraf in een maand meld je bij de EVV'er. Wat jij zag over het eten helpt de diëtist."}]},{"id":"afs-pijn","type":"afspraak","proces":"signaleren","voor":"Je meet niet alleen gewicht. Zo doen wij het met pijn.","tekst":"Pijn meet je met een score van 0 tot 10. De cliënt zegt zelf hoeveel pijn hij heeft. Kan een cliënt dat niet zeggen, bijvoorbeeld door dementie, dan gebruik je de observatielijst voor pijn onder Klinimetrie.","bron":"Handboek De Wilgenhof, Pijn meten"},{"id":"k-klinimetrie","type":"klik","proces":"signaleren","scherm":"opgeslagen","doel":{"menu":"Klinimetrie"},"opdracht":"De meetinstrumenten staan op een eigen plek. Klik links in het menu op Klinimetrie.","goed":"Goed. Hier staan de metingen met een meetinstrument.","hint":"Bijna. Kijk links in het menu, onder Agenda."},{"id":"k-meting","type":"klik","proces":"signaleren","scherm":"klinimetrie","doel":{"knop":"+ Nieuwe meting"},"opdracht":"Klik rechtsboven op Nieuwe meting.","goed":"Ja. Met deze knop start je een nieuwe meting, bijvoorbeeld de observatielijst voor pijn.","hint":"Bijna. De knop Nieuwe meting staat rechtsboven."},{"id":"pijnscore","type":"vraag","proces":"signaleren","vraag":"Een cliënt geeft een pijnscore van 6. Vorige week was het een 2. Wat doe je bij De Wilgenhof?","opties":[{"tekst":"Ik leg het vast, verder niets."},{"tekst":"Ik leg het vast en overleg met de EVV'er.","goed":true},{"tekst":"Ik vraag morgen nog een keer."}],"uitleg":"Bij een pijnscore van 4 of hoger, of veel hoger dan eerst, overleg je met de EVV'er. Pijn na een val is acuut. Dan bel je meteen de arts."},{"id":"zelf","type":"nu-jij","proces":"signaleren","opdracht":"Dat was de route. Nu jij, zonder mij erbij. Leg het gewicht van meneer De Vries vast en open daarna Klinimetrie.","route":["k-menu","k-plus","k-soort","t-gewicht","t-opmerking","k-opslaan","k-klinimetrie"]},{"id":"klaar","type":"klaar","proces":"signaleren","ballon":"Goed gedaan, Sanne. Zo doen wij het.","titel":"Je kunt nu een meting vastleggen in Nedap ONS","geleerd":["Je meet elke keer op dezelfde manier, dan kun je vergelijken.","Je legt de meting vast in Nedap ONS en kijkt naar de vorige meting.","Een duidelijke verandering meld je bij de EVV'er. Bij acute pijn bel je de arts."],"knop":"Verder naar mijn modules"}]},{"id":"mic","titel":"MIC-meldingen","duurMin":6,"proces":[{"id":"client","naam":"Eerst de cliënt"},{"id":"melden","naam":"Melden"},{"id":"doorzetten","naam":"Doorzetten"},{"id":"daarna","naam":"Daarna"}],"ons":{"client":"J Willems"},"schermen":{"overzicht":{"type":"ons","menu":"Overzicht","pagina":{"kaarten":[{"kop":"Waarschuwingen","regels":["Geen waarschuwingen"]},{"kop":"Episodes","regels":["Geen relevante episodes"]},{"kop":"Allergieën en overgevoeligheden","regels":["Geen actieve allergieën of overgevoeligheden"]}]}},"lijsten":{"type":"ons","menu":"Vragenlijsten","pagina":{"titel":"Vragenlijsten","tabs":["Actueel","Archief"],"knoppen":["+ Nieuwe vragenlijst"],"kaarten":[{"kop":"Actueel","regels":["Mikzo Kompas® (2025.1)"]}]}},"kiezen":{"type":"ons","menu":"Vragenlijsten","pagina":{"venster":{"titel":"Maak een nieuwe vragenlijst aan","opties":["Mikzo Kompas® (2025.1)","Omaha inventarisatie","MIC-melding"]}}},"formulier":{"type":"ons","menu":"Vragenlijsten","pagina":{"titel":"MIC-melding","knoppen":["Opslaan"],"velden":[{"label":"Datum en tijd","waarde":"Vandaag, 12.10 uur"},{"label":"Soort incident","waarde":"Medicatie"},{"label":"Wat is er gebeurd?","waarde":"Wat zag je, wanneer, en wat deed je?"},{"label":"Gevolg voor de cliënt","waarde":"Kies een gevolg"}]}},"ingevuld":{"type":"ons","menu":"Vragenlijsten","pagina":{"titel":"MIC-melding","knoppen":["Opslaan"],"velden":[{"label":"Datum en tijd","waarde":"Vandaag, 12.10 uur"},{"label":"Soort incident","waarde":"Medicatie"},{"label":"Wat is er gebeurd?","waarde":"{getypt:Wat is er gebeurd?}"},{"label":"Gevolg voor de cliënt","waarde":"Kies een gevolg"}]}},"concept":{"type":"ons","menu":"Vragenlijsten","pagina":{"titel":"MIC-melding","knoppen":["Volgende status","Meer","Wijzig"],"kaarten":[{"kop":"Status","regels":["Concept"]},{"kop":"Wat is er gebeurd?","regels":["{getypt:Wat is er gebeurd?}"]}]}},"doorgezet":{"type":"ons","menu":"Vragenlijsten","pagina":{"titel":"MIC-melding","knoppen":["Meer","Wijzig"],"kaarten":[{"kop":"Status","regels":["Actueel"]},{"kop":"Wat is er gebeurd?","regels":["{getypt:Wat is er gebeurd?}"]}]}}},"stappen":[{"id":"start","type":"situatie","proces":"client","scherm":"overzicht","knop":"Verder","tekst":"Je pakt de medicatie voor de middag. In de medicijnkar ligt nog het zakje van 8.00 uur van mevrouw Willems, dicht en niet afgetekend."},{"id":"afs-medicatie","type":"afspraak","proces":"client","voor":"Eerst hoe wij dat doen bij {org}.","tekst":"Vind je een zakje medicatie dat vergeten is, of dat niet is afgetekend? Los het niet alleen op. Overleg met de dienstdoende verpleegkundige. Zij beslist wat er nu moet gebeuren, zo nodig samen met de apotheek of de arts.","bron":"Handboek De Wilgenhof, Een fout met medicatie"},{"id":"eerst","type":"keuze","proces":"client","vraag":"Mevrouw Willems zit in de huiskamer en voelt zich goed. Wat doe je eerst?","opties":[{"tekst":"Je geeft het ochtendzakje nu alsnog.","reactie":"Net niet. Sommige medicijnen mag je niet zomaar later geven, zeker niet vlak voor de volgende ronde. Overleg eerst wat het beste is voor mevrouw."},{"tekst":"Je belt de verpleegkundige en vraagt wat er nu met de medicatie moet.","goed":true,"reactie":"Klopt. Eerst de cliënt. Bij een vergeten zakje overleg je altijd met de verpleegkundige. Je legt vast wat je gaf en daarna meld je het."},{"tekst":"Je gooit het zakje weg. Mevrouw voelt zich goed, dus het maakt niet uit.","reactie":"Net niet. Mevrouw kan haar medicijnen nodig hebben, ook als ze zich goed voelt. En zonder melding kan het team niet leren waarom het misging."}]},{"id":"afs-hoe","type":"afspraak","proces":"melden","scherm":"overzicht","voor":"De verpleegkundige heeft beslist en jij hebt vastgelegd wat je gaf. Nu de melding.","tekst":"Je maakt de melding als vragenlijst in het dossier van de cliënt. Onder Vragenlijsten maak je een nieuwe aan en kies je MIC-melding. Pas als je hem doorzet, komt hij bij de teamleider.","bron":"Handboek De Wilgenhof, Zo maak je een MIC-melding"},{"id":"k-menu","type":"klik","proces":"melden","scherm":"overzicht","doel":{"menu":"Vragenlijsten"},"opdracht":"Je hebt het dossier van mevrouw Willems open. De melding hoort bij haar. Klik links in het menu op Vragenlijsten.","goed":"Precies. Hier staan de vragenlijsten van mevrouw Willems.","hint":"Bijna. Kijk links in het menu, onder Overzicht."},{"id":"k-nieuw","type":"klik","proces":"melden","scherm":"lijsten","doel":{"knop":"+ Nieuwe vragenlijst"},"opdracht":"Klik op Nieuwe vragenlijst.","goed":"Goed. Nedap ONS vraagt nu welke vragenlijst je wilt maken.","hint":"Bijna. De knop Nieuwe vragenlijst staat rechtsboven."},{"id":"k-mic","type":"klik","proces":"melden","scherm":"kiezen","doel":{"optie":"MIC-melding"},"opdracht":"Kies MIC-melding.","goed":"Ja. Dit is het formulier voor een incident. Je vult in wanneer het was, wat voor incident het was en wat er gebeurde.","hint":"Bijna. Klik in de lijst op MIC-melding."},{"id":"afs-schrijven","type":"afspraak","proces":"melden","scherm":"formulier","voor":"Voor je gaat typen, nog één afspraak.","tekst":"Schrijf op wat er gebeurde, hoe laat, en wat je daarna deed. Noem geen namen van collega's en geef geen oordeel.","bron":"Handboek De Wilgenhof, Zo maak je een MIC-melding"},{"id":"tekst","type":"keuze","proces":"melden","vraag":"Welke tekst zet je in je melding?","opties":[{"tekst":"Om 12.10 uur lag het zakje van 8.00 uur van mevrouw Willems dicht en niet afgetekend in de kar. Overlegd met de verpleegkundige, een deel alsnog gegeven. Mevrouw had geen klachten.","goed":true,"reactie":"Klopt. Je schrijft wat je zag, wanneer, en wat je deed. Daar kan het team van leren."},{"tekst":"Joost heeft vanochtend de medicatie van mevrouw Willems vergeten. Dit gebeurt vaker.","reactie":"Net niet. Een MIC-melding gaat over wat er gebeurde, niet over wie het deed. Een naam en een oordeel maken het team bang om te melden."}]},{"id":"t-gebeurd","type":"typ","proces":"melden","scherm":"formulier","veld":"Wat is er gebeurd?","wis":true,"opdracht":"Typ bij Wat is er gebeurd in je eigen woorden wat je zag, hoe laat, en wat je deed.","goed":"Goed zo. Een collega die er niet bij was, kan dit begrijpen."},{"id":"k-opslaan","type":"klik","proces":"melden","scherm":"ingevuld","doel":{"knop":"Opslaan"},"opdracht":"Je tekst staat erin. Klik op Opslaan.","goed":"Opgeslagen. Je melding staat nu op Concept. De teamleider ziet hem nog niet.","hint":"Bijna. Opslaan staat rechtsboven."},{"id":"k-status","type":"klik","proces":"doorzetten","scherm":"concept","doel":{"knop":"Volgende status"},"opdracht":"Pas als je de melding doorzet, komt hij bij de teamleider. Klik op Volgende status.","goed":"Ja. Je melding is doorgezet en komt bij de teamleider.","hint":"Bijna. Volgende status staat boven de melding, naast de statussen."},{"id":"eerste","type":"vraag","proces":"daarna","scherm":"doorgezet","vraag":"Je melding is doorgezet. Wat gebeurt er nu als eerste?","opties":[{"tekst":"Het team spreekt een verbetering af."},{"tekst":"Jij hoort terug wat ermee is gedaan."},{"tekst":"De teamleider leest de melding.","goed":true}],"uitleg":"Eerst leest de teamleider je melding. Daarna bespreekt het team de oorzaak en spreekt een verbetering af. Tot slot hoor jij terug wat ermee is gedaan."},{"id":"zelf","type":"nu-jij","proces":"daarna","opdracht":"Dat was de route. Nu jij, zonder mij erbij. Maak de MIC-melding voor mevrouw Willems en zet hem door.","route":["k-menu","k-nieuw","k-mic","t-gebeurd","k-opslaan","k-status"]},{"id":"klaar","type":"klaar","proces":"daarna","scherm":"doorgezet","ballon":"Goed gedaan, Sanne. Zo doen wij het.","titel":"Je kunt nu een MIC-melding maken in Nedap ONS","geleerd":["Eerst de cliënt: je overlegt met de verpleegkundige wat er nu moet.","Je meldt wat er gebeurde, niet wie het deed.","Een melding is om te leren. Je zet hem door, zodat hij bij de teamleider komt."],"daarna":{"regels":["De teamleider leest je melding. Het team bespreekt hem en jij hoort terug wat ermee gebeurd is."],"bron":"Handboek De Wilgenhof, Zo maak je een MIC-melding"},"knop":"Verder naar mijn modules"}]},{"id":"mikzo","titel":"Werken met Mikzo","duurMin":6,"proces":[{"id":"bekijken","naam":"Bekijken"},{"id":"doorvragen","naam":"Doorvragen"},{"id":"rapporteren","naam":"Rapporteren"}],"ons":{"client":"W Hendriks"},"schermen":{"overzicht":{"type":"ons","menu":"Overzicht","pagina":{"kaarten":[{"kop":"Waarschuwingen","regels":["Geen waarschuwingen"]},{"kop":"Episodes","regels":["Geen relevante episodes"]},{"kop":"Belangrijke rapportages","regels":["Geen belangrijke rapportages"]}]}},"vragenlijsten":{"type":"ons","menu":"Vragenlijsten","pagina":{"titel":"Vragenlijsten","tabs":["Actueel","Archief"],"knoppen":["+ Nieuwe vragenlijst"],"kaarten":[{"kop":"Concept","regels":["Mikzo Kompas® (2025.1)"]}]}},"plan":{"type":"ons","menu":"Plan","pagina":{"tabs":["Zorgplan","Onvrijwillige zorg"],"kaarten":[{"kop":"Persoonsgerichte zorg","regels":["Meneer houdt zijn eigen ritme aan bij het opstaan."]},{"kop":"Welzijn","regels":["Nog geen doel"]},{"kop":"Gezondheid","regels":["Bloedsuiker blijft binnen de waarden van de huisarts."]}]}},"rapportages":{"type":"ons","menu":"Rapportages","pagina":{"titel":"Rapportages","knoppen":["Acties bekijken","+"],"kaarten":[{"kop":"Fatma Yilmaz · gisteren 22.10","regels":["Meneer keek tot laat tv in de huiskamer. Om 23.00 uur naar bed."]}]}},"nieuw":{"type":"ons","menu":"Rapportages","pagina":{"titel":"Nieuw - Rapportage","knoppen":["Opslaan"],"velden":[{"label":"Tekst","waarde":"{getypt}"},{"label":"Zichtbaar voor","waarde":"Iedereen"}]}},"opgeslagen":{"type":"ons","menu":"Rapportages","pagina":{"titel":"Rapportages","knoppen":["Acties bekijken","+"],"kaarten":[{"kop":"Sanne Visser · vandaag","regels":["{getypt}"]},{"kop":"Fatma Yilmaz · gisteren 22.10","regels":["Meneer keek tot laat tv in de huiskamer. Om 23.00 uur naar bed."]}]}}},"stappen":[{"id":"start","type":"situatie","proces":"bekijken","scherm":"overzicht","knop":"Laat maar zien","tekst":"Meneer Hendriks woont drie weken op De Linde. Vandaag vertelt hij veel: hij mist zijn tuin en hij wil zijn eigen leunstoel op zijn kamer."},{"id":"afs-domeinen","type":"afspraak","proces":"bekijken","voor":"Eerst hoe wij daarnaar kijken bij {org}.","tekst":"Bij De Wilgenhof werk je met Mikzo. Mikzo deelt het leven van een cliënt op in vijf domeinen: persoonsgerichte zorg, wonen, welzijn, veiligheid en gezondheid.","bron":"Handboek De Wilgenhof, De vijf domeinen van Mikzo"},{"id":"domein","type":"vraag","proces":"bekijken","vraag":"Een cliënt mist haar hobby en zegt dat ze zich verveelt. Bij welk domein hoort dat?","opties":[{"tekst":"Wonen."},{"tekst":"Welzijn.","goed":true},{"tekst":"Gezondheid."}],"uitleg":"Wat je ziet en hoort, past bijna altijd bij één domein. Een hobby missen en je vervelen hoort bij welzijn."},{"id":"k-vragenlijsten","type":"klik","proces":"bekijken","scherm":"overzicht","doel":{"menu":"Vragenlijsten"},"opdracht":"Het dossier van meneer Hendriks staat open. Je wilt weten wat er al over hem bekend is. Klik links in het menu op Vragenlijsten.","goed":"Precies. Hier staat het Mikzo Kompas van meneer Hendriks. Het staat nog op Concept, want het eerste gesprek is net geweest.","hint":"Bijna. Kijk links in het menu, direct onder Overzicht."},{"id":"afs-kompas","type":"afspraak","proces":"bekijken","scherm":"vragenlijsten","voor":"Even over wie wat doet met het Mikzo Kompas.","tekst":"Het Mikzo Kompas staat bij Vragenlijsten. Dat vult de EVV'er samen met de cliënt in. Jij rapporteert wat de cliënt zegt bij het goede domein.","bron":"Handboek De Wilgenhof, Doorvragen en het Mikzo Kompas"},{"id":"k-plan","type":"klik","proces":"bekijken","scherm":"vragenlijsten","doel":{"menu":"Plan"},"opdracht":"Nu de doelen van meneer. Klik links in het menu op Plan.","goed":"Goed. Het zorgplan is ingedeeld per domein. Bij welzijn staat nog niets.","hint":"Bijna. Kijk links in het menu, onder Vragenlijsten."},{"id":"afs-doorvragen","type":"afspraak","proces":"doorvragen","scherm":"plan","voor":"Wat meneer jou vertelt, kan hier later een doel worden. Daarom deze afspraak.","tekst":"Zegt een cliënt iets wat ertoe doet, vraag dan door. Wat deed hij vroeger graag? Zijn antwoord is de basis voor een goed doel.","bron":"Handboek De Wilgenhof, Doorvragen en het Mikzo Kompas"},{"id":"tuin","type":"keuze","proces":"doorvragen","vraag":"Meneer zegt: \"Ik zit hier maar. Thuis was ik altijd in de tuin.\" Wat doe je?","opties":[{"tekst":"Ik schrijf in de rapportage: meneer verveelt zich. Dan ga ik verder met mijn werk.","reactie":"Net niet. Verveelt zich is een begin, maar niemand kan er iets mee. Vraag door en geef het door, zodat er een doel bij welzijn kan komen."},{"tekst":"Ik vraag wat hij in de tuin deed. Ik rapporteer het bij welzijn en stel de EVV'er voor om er een doel van te maken.","goed":true,"reactie":"Klopt. Je vraagt door, je schrijft op wat hij zegt en je koppelt het aan welzijn. Zo kan de EVV'er er een doel van maken."},{"tekst":"Ik zet hem vanmiddag bij de bingo in de huiskamer.","reactie":"Net niet. Bezig zijn is niet hetzelfde als iets doen wat bij hem past. Vraag eerst wat hij graag deed."}]},{"id":"k-rapportages","type":"klik","proces":"rapporteren","scherm":"plan","doel":{"menu":"Rapportages"},"opdracht":"Je hebt doorgevraagd. Nu schrijf je op wat meneer vertelde. Klik links in het menu op Rapportages.","goed":"Goed. Hier schrijf je wat je ziet en hoort. Zo komt het bij de EVV'er terecht.","hint":"Bijna. Kijk links in het menu, onder Plan."},{"id":"k-plus","type":"klik","proces":"rapporteren","scherm":"rapportages","doel":{"icoon":2,"label":"Nieuwe rapportage"},"opdracht":"Boven de lijst staan drie icoontjes. Klik op het tweede, het blad papier. Daarmee begin je een nieuwe rapportage.","goed":"Goed. Hier schrijf je op wat meneer vertelde.","hint":"Bijna. Kijk linksboven de lijst. Het is het tweede icoontje."},{"id":"t-tekst","type":"typ","proces":"rapporteren","scherm":"nieuw","veld":"tekst","wis":true,"opdracht":"Bij De Wilgenhof zet je het domein vooraan in je tekst. Begin met Welzijn en typ in je eigen woorden wat meneer over zijn tuin vertelde.","goed":"Mooi. De EVV'er ziet meteen bij welk domein het hoort."},{"id":"k-opslaan","type":"klik","proces":"rapporteren","scherm":"nieuw","doel":{"knop":"Opslaan"},"opdracht":"Je tekst staat erin, met het domein vooraan. Klik op Opslaan.","goed":"Opgeslagen. Je rapportage staat bovenaan in het dossier.","hint":"Bijna. Opslaan staat rechtsboven."},{"id":"nacht","type":"vraag","proces":"rapporteren","scherm":"opgeslagen","vraag":"In de overdracht staat dat meneer vannacht twee keer op de gang stond, zonder licht en zonder pantoffels. Wat doe je eerst?","opties":[{"tekst":"Ik vraag hem waarom hij opstond.","goed":true},{"tekst":"Ik zet zijn deur op slot."},{"tekst":"Ik schrijf alleen in de rapportage dat hij onrustig was."}],"uitleg":"Je begint bij meneer zelf. Bij veiligheid zoek je een oplossing die past bij wat de cliënt zelf wil."},{"id":"zelf","type":"nu-jij","proces":"rapporteren","opdracht":"Dat was de route. Nu jij, zonder mij erbij. Bekijk het Mikzo Kompas en het zorgplan van meneer Hendriks en maak daarna een rapportage.","route":["k-vragenlijsten","k-plan","k-rapportages","k-plus","t-tekst","k-opslaan"]},{"id":"klaar","type":"klaar","proces":"rapporteren","ballon":"Goed gedaan, Sanne. Zo doen wij het.","titel":"Je kunt nu werken met Mikzo in Nedap ONS","geleerd":["Met de vijf domeinen kijk je naar het hele leven van een cliënt.","Je koppelt wat je ziet en hoort aan het goede domein, dan ziet de EVV'er het hele plaatje.","Je vraagt door bij de cliënt zelf. Zijn antwoord is de basis voor een goed doel."],"knop":"Verder naar mijn modules"}]},{"id":"onsdossier","titel":"Ons Dossier","duurMin":6,"proces":[{"id":"kiezen","naam":"Dossier kiezen"},{"id":"aftekenen","naam":"Aftekenen"},{"id":"rapporteren","naam":"Rapporteren"}],"ons":{"plek":"telefoon","app":"Ons Dossier","client":"P Vermeulen"},"schermen":{"clienten":{"type":"ons","pagina":{"balk":"Ons Dossier","kaarten":[{"kop":"Mijn cliënten","regels":["A Bakker","P Vermeulen","J Willems"]}]}},"agenda":{"type":"ons","pagina":{"balk":"P Vermeulen","tabs":["Agenda","Rapportages"],"kaarten":[{"kop":"P Vermeulen","regels":["Geboren 14-03-1941"]},{"kop":"Vandaag","regels":["8.00 uur Steunkousen aantrekken","12.00 uur Medicatie"]}]}},"handeling":{"type":"ons","pagina":{"balk":"Steunkousen aantrekken","knoppen":["Aftekenen"],"kaarten":[{"kop":"Handeling","regels":["Steunkousen aantrekken, beide benen","Elke ochtend, 8.00 uur"]}]}},"afgetekend":{"type":"ons","pagina":{"balk":"P Vermeulen","tabs":["Agenda","Rapportages"],"kaarten":[{"kop":"Vandaag","regels":["8.00 uur Steunkousen aantrekken, afgetekend","12.00 uur Medicatie"]}]}},"rapportages":{"type":"ons","pagina":{"balk":"P Vermeulen","tabs":["Agenda","Rapportages"],"knoppen":["+"],"kaarten":[{"kop":"Joost Hendriks · gisteren 21.30","regels":["Meneer rustig gaan slapen."]}]}},"nieuw":{"type":"ons","pagina":{"balk":"Nieuwe rapportage","knoppen":["Opslaan"],"velden":[{"label":"Tekst","waarde":"Wat zag je, wanneer, en wat deed je?"},{"label":"Zichtbaar voor","waarde":"Iedereen"}]}}},"stappen":[{"id":"start","type":"situatie","proces":"kiezen","knop":"Laat maar zien","tekst":"Je hebt meneer Vermeulen net geholpen met zijn steunkousen. Toen hij opstond was hij even duizelig en pakte hij de rand van de tafel vast."},{"id":"k-client","type":"klik","proces":"kiezen","scherm":"clienten","doel":{"regel":"P Vermeulen"},"opdracht":"Je pakt je telefoon en opent Ons Dossier. Je ziet de cliënten van jouw dienst. Tik op meneer Vermeulen.","goed":"Goed. Zijn dossier staat open. Bovenaan staan zijn naam en zijn geboortedatum.","hint":"Bijna. Zoek in de lijst P Vermeulen."},{"id":"afs-dossier","type":"afspraak","proces":"kiezen","scherm":"agenda","voor":"Voor je iets vastlegt, eerst deze afspraak.","tekst":"Kijk altijd eerst of je in het goede dossier zit. Controleer de naam en de geboortedatum.","bron":"Handboek De Wilgenhof, Veilig werken met je telefoon"},{"id":"afs-bed","type":"afspraak","proces":"aftekenen","scherm":"agenda","voor":"Het is het goede dossier. Dan nu het aftekenen.","tekst":"Bij De Wilgenhof gebruik je Ons Dossier aan het bed. Je tekent af wat je deed en je rapporteert wat je zag, meteen na de zorg. Teken alleen af wat je echt deed.","bron":"Handboek De Wilgenhof, Ons Dossier op je telefoon"},{"id":"k-handeling","type":"klik","proces":"aftekenen","scherm":"agenda","doel":{"regel":"8.00 uur Steunkousen aantrekken"},"opdracht":"Onder Vandaag staan de handelingen van vandaag. Tik op Steunkousen aantrekken.","goed":"Ja. Je ziet wat er bij deze handeling hoort.","hint":"Bijna. Kijk onder Vandaag, bij 8.00 uur."},{"id":"k-aftekenen","type":"klik","proces":"aftekenen","scherm":"handeling","doel":{"knop":"Aftekenen"},"opdracht":"Je hebt de kousen net aangetrokken. Tik op Aftekenen.","goed":"Goed. De handeling is afgetekend en staat op jouw naam.","hint":"Bijna. Zoek de knop Aftekenen."},{"id":"duizelig","type":"keuze","proces":"rapporteren","scherm":"afgetekend","vraag":"En de duizeligheid? Wat doe je?","opties":[{"tekst":"Ik rapporteer het meteen in Ons Dossier.","goed":true,"reactie":"Klopt. Je schrijft kort wat je zag, terwijl het nog vers is. De volgende collega kan er meteen mee verder."},{"tekst":"Ik onthoud het en schrijf het straks op de pc in het kantoor.","reactie":"Net niet. Wat je later opschrijft, wordt vaag of je vergeet het. Met Ons Dossier rapporteer je het meteen, aan het bed."},{"tekst":"Ik spreek een berichtje in voor Joost via WhatsApp.","reactie":"Net niet. Informatie over een cliënt hoort in Nedap ONS, niet in WhatsApp. Daar leest het hele team het terug."}]},{"id":"k-tab","type":"klik","proces":"rapporteren","scherm":"afgetekend","doel":{"tab":"Rapportages"},"opdracht":"Wil je iets opschrijven, dan ga je naar de rapportages. Tik op Rapportages.","goed":"Precies. Hier staan de rapportages van meneer Vermeulen, de nieuwste bovenaan.","hint":"Bijna. Rapportages staat naast Agenda."},{"id":"k-plus","type":"klik","proces":"rapporteren","scherm":"rapportages","doel":{"knop":"+","label":"Nieuwe rapportage"},"opdracht":"Tik op de plusknop om een nieuwe rapportage te maken.","goed":"Goed. Met de plus begin je een nieuwe rapportage.","hint":"Bijna. Zoek de knop met de plus."},{"id":"afs-kort","type":"afspraak","proces":"rapporteren","scherm":"nieuw","voor":"Zo schrijven wij een rapportage in de app.","tekst":"Zie je iets wat afwijkt, maak dan in de app een rapportage. Kort en concreet: wat zag je, wanneer, en wat deed je.","bron":"Handboek De Wilgenhof, Ons Dossier op je telefoon"},{"id":"k-opslaan","type":"klik","proces":"rapporteren","scherm":"nieuw","doel":{"knop":"Opslaan"},"opdracht":"Je schrijft kort wat je zag: duizelig bij opstaan, hield zich vast aan de tafel, na een minuut over. Tik daarna op Opslaan.","goed":"Opgeslagen. Je rapportage staat meteen in Nedap ONS.","hint":"Bijna. Zoek de knop Opslaan."},{"id":"kamer-uit","type":"vraag","proces":"rapporteren","vraag":"Je bent klaar bij meneer Vermeulen. Wat doe je voor je de kamer uitloopt?","opties":[{"tekst":"Ik laat de app open, dan kan ik straks snel verder."},{"tekst":"Ik vergrendel mijn telefoon.","goed":true}],"uitleg":"Vergrendel je telefoon als je de kamer uitloopt. Dan kan niemand daarna in je telefoon kijken."},{"id":"zelf","type":"nu-jij","proces":"rapporteren","opdracht":"Dat was de route. Nu jij, zonder mij erbij. Teken de steunkousen af en maak een rapportage.","route":["k-client","k-handeling","k-aftekenen","k-tab","k-plus","k-opslaan"]},{"id":"klaar","type":"klaar","proces":"rapporteren","ballon":"Goed gedaan, Sanne. Zo doen wij het.","titel":"Je kunt nu aftekenen en rapporteren met Ons Dossier","geleerd":["Je tekent af en rapporteert aan het bed, meteen na de zorg.","Je controleert eerst of je in het goede dossier zit.","Je vergrendelt je telefoon voor je de kamer uitloopt."],"vragen":"Ben je je telefoon kwijt? Bel dan meteen de servicedesk op toestel 2140.","knop":"Verder naar mijn modules"}]},{"id":"opzoeken","titel":"Cliënten opzoeken","duurMin":5,"proces":[{"id":"zoeken","naam":"Zoeken"},{"id":"controleren","naam":"Controleren"},{"id":"lezen","naam":"Lezen"},{"id":"vastleggen","naam":"Vastleggen"}],"ons":{"client":"H Jansen"},"schermen":{"overzicht":{"type":"ons","menu":"Overzicht","pagina":{"kaarten":[{"kop":"Waarschuwingen","regels":["Geen waarschuwingen"]},{"kop":"Belangrijke rapportages","regels":["Geen belangrijke rapportages"]}]}},"algemeen":{"type":"ons","menu":"Algemeen","pagina":{"kaarten":[{"kop":"Personalia","regels":["Naam: H Jansen","Geboortedatum: 12-03-1941"]},{"kop":"Locaties","regels":["De Eik, kamer 4"]}]}},"rapportages":{"type":"ons","menu":"Rapportages","pagina":{"titel":"Rapportages","knoppen":["Acties bekijken","+"],"kaarten":[{"kop":"Lieke Hoekstra · vandaag 14.20","regels":["Meneer heeft vanmiddag weinig gedronken. Graag bijhouden hoeveel hij drinkt."]}]}},"soort":{"type":"ons","menu":"Rapportages","pagina":{"venster":{"titel":"Rapportagetype toevoegen","opties":["Gewicht","Bloeddruk","Vocht inname","Vocht uitscheiding","Pijnscore"]}}},"nieuw":{"type":"ons","menu":"Rapportages","pagina":{"titel":"Nieuw - Vocht inname","knoppen":["Opslaan"],"velden":[{"label":"Hoeveelheid (ml)","waarde":"{getypt:Hoeveelheid (ml)}"},{"label":"Starttijd","waarde":"17.45"}]}},"opgeslagen":{"type":"ons","menu":"Rapportages","pagina":{"titel":"Rapportages","knoppen":["Acties bekijken","+"],"kaarten":[{"kop":"Vocht inname · vandaag 17.45","regels":["{getypt:Hoeveelheid (ml)} ml"]},{"kop":"Lieke Hoekstra · vandaag 14.20","regels":["Meneer heeft vanmiddag weinig gedronken. Graag bijhouden hoeveel hij drinkt."]}]}}},"stappen":[{"id":"start","type":"situatie","proces":"zoeken","scherm":"overzicht","knop":"Laat maar zien","tekst":"Je valt vanavond in op De Eik en je kent de cliënten daar niet. Lieke vraagt of je meneer Jansen op kamer 4 helpt met eten en bijhoudt hoeveel hij drinkt."},{"id":"afs-invallen","type":"afspraak","proces":"zoeken","voor":"Jij kent zelf ook een meneer Jansen, op De Linde. Daarom deze afspraak.","tekst":"Val je in op een afdeling die je niet kent? Vraag dan eerst aan een collega van die afdeling wie je zoekt. Zo open je niet het dossier van een cliënt met dezelfde naam op je eigen afdeling.","bron":"Handboek De Wilgenhof, Invallen op een andere afdeling"},{"id":"hoe-zoeken","type":"keuze","proces":"zoeken","vraag":"Na het eten wil je vastleggen hoeveel meneer Jansen gedronken heeft. Hoe zoek je hem op in Nedap ONS?","opties":[{"tekst":"Ik typ \"Jansen\" en open de eerste meneer Jansen die ik zie.","reactie":"Net niet. De eerste naam in de lijst is niet altijd de goede. Dan staat jouw werk bij de verkeerde meneer Jansen."},{"tekst":"Ik zoek op achternaam en kies de meneer Jansen van De Eik, kamer 4. Ik controleer ook zijn geboortedatum.","goed":true,"reactie":"Klopt. Een naam alleen is niet genoeg. Met de afdeling, het kamernummer en de geboortedatum weet je zeker dat je de goede cliënt hebt."},{"tekst":"Ik schrijf het op een briefje en vraag Lieke het straks in te voeren.","reactie":"Net niet. Een briefje kan zoekraken, en Lieke moet dan jouw werk doen. Wat je zelf ziet en doet, leg je zelf vast."}]},{"id":"afs-naam","type":"afspraak","proces":"zoeken","voor":"Zo staat het ook in ons handboek.","tekst":"Bij De Wilgenhof wonen meer cliënten met dezelfde achternaam. Kies daarom nooit op naam alleen. Controleer altijd de afdeling, het kamernummer en de geboortedatum.","bron":"Handboek De Wilgenhof, De goede cliënt opzoeken"},{"id":"v-drie","type":"vraag","proces":"zoeken","vraag":"Je zoekt op \"Jansen\" en krijgt drie resultaten. Lieke zegt dat hij geboren is op 12 maart 1941. Welke cliënt zoek je?","opties":[{"tekst":"Meneer Jansen, De Linde, kamer 12, geboren 3 juni 1938"},{"tekst":"Meneer Jansen, De Eik, kamer 14, geboren 8 oktober 1936"},{"tekst":"Meneer Jansen, De Eik, kamer 4, geboren 12 maart 1941","goed":true}],"uitleg":"Alleen bij de meneer Jansen van kamer 4 passen afdeling, kamer en geboortedatum alle drie."},{"id":"k-algemeen","type":"klik","proces":"controleren","scherm":"overzicht","doel":{"menu":"Algemeen"},"opdracht":"Je hebt een meneer Jansen geopend. Bovenaan staat zijn naam, maar of het de goede is weet je nog niet. Klik in het menu op Algemeen.","goed":"Goed. Onder Algemeen staan zijn persoonsgegevens en waar hij woont.","hint":"Bijna. Algemeen staat links in het menu, onder Snelkoppelingen."},{"id":"k-rapportages","type":"klik","proces":"controleren","scherm":"algemeen","doel":{"menu":"Rapportages"},"opdracht":"Lieke zei: De Eik, kamer 4, geboren 12 maart 1941. Kijk of het hier alle drie klopt. Klik daarna in het menu op Rapportages.","goed":"Het klopt alle drie, dus je zit bij de goede meneer Jansen.","hint":"Bijna. Rapportages staat links in het menu, tussen Plan en Agenda."},{"id":"k-plus","type":"klik","proces":"lezen","scherm":"rapportages","doel":{"knop":"+","label":"Nieuwe rapportage"},"opdracht":"Lees eerst wat er vandaag speelt. Lieke schreef vanmiddag dat meneer weinig drinkt. Klik daarna op de blauwe plus.","goed":"Goed. Je weet wat er speelt, en met de plus leg je vast wat jij zag.","hint":"Bijna. Rechtsboven staat een blauwe knop met een plus."},{"id":"k-vocht","type":"klik","proces":"vastleggen","scherm":"soort","doel":{"optie":"Vocht inname"},"opdracht":"Voor wat een cliënt drinkt, is er een eigen soort rapportage. Kies Vocht inname.","goed":"Ja. Zo kan een collega later zien hoeveel hij op een dag binnenkreeg.","hint":"Bijna. Het gaat om wat meneer drinkt, dus kies Vocht inname."},{"id":"t-hoeveel","type":"typ","proces":"vastleggen","scherm":"nieuw","veld":"Hoeveelheid (ml)","wis":true,"opdracht":"Meneer dronk bij het eten 300 ml. Typ bij Hoeveelheid alleen het getal.","goed":"Mooi. De tijd staat er ook bij."},{"id":"k-opslaan","type":"klik","proces":"vastleggen","scherm":"nieuw","doel":{"knop":"Opslaan"},"opdracht":"De hoeveelheid en de tijd staan erin. Klik op Opslaan.","goed":"Opgeslagen. Het staat bij de goede meneer Jansen.","hint":"Bijna. Opslaan staat rechtsboven."},{"id":"afs-zelf","type":"afspraak","proces":"vastleggen","scherm":"opgeslagen","voor":"Je was hier vanavond te gast en je hebt het toch zelf vastgelegd. Zo hoort het.","tekst":"Je legt zelf vast wat je deed, ook als je invalt.","bron":"Handboek De Wilgenhof, Invallen op een andere afdeling"},{"id":"zelf","type":"nu-jij","proces":"vastleggen","opdracht":"Dat was de route. Nu jij, zonder mij erbij. Controleer of je bij de goede meneer Jansen zit en leg vast wat hij dronk.","route":["k-algemeen","k-rapportages","k-plus","k-vocht","t-hoeveel","k-opslaan"]},{"id":"klaar","type":"klaar","proces":"vastleggen","ballon":"Goed gedaan, Sanne. Zo doen wij het.","titel":"Je kunt nu de goede cliënt opzoeken in Nedap ONS","geleerd":["Je zoekt op achternaam en controleert altijd afdeling, kamer en geboortedatum.","Je kiest nooit op naam alleen, want er wonen cliënten met dezelfde achternaam.","Je legt zelf vast wat je deed, ook als je invalt."],"knop":"Verder naar mijn modules"}]},{"id":"overdracht","titel":"Bekijk de overdrachtsagenda en de overdrachtsrapportages","duurMin":6,"proces":[{"id":"rapportages","naam":"Rapportages lezen"},{"id":"agenda","naam":"Agenda bekijken"},{"id":"kiezen","naam":"Kiezen waar je begint"}],"ons":{"client":"H Jansen"},"schermen":{"overzicht":{"type":"ons","menu":"Overzicht","pagina":{"kaarten":[{"kop":"Waarschuwingen","regels":["Valrisico"]},{"kop":"Belangrijke rapportages","regels":["Vannacht 3.40 uur naast zijn bed gevonden"]},{"kop":"Betrokken medewerkers","regels":["Sanne Visser, EVV'er"]}]}},"rapportages":{"type":"ons","menu":"Rapportages","pagina":{"titel":"Rapportages","knoppen":["Acties bekijken","+"],"kaarten":[{"kop":"Ruben de Wit · vandaag 3.55","regels":["Meneer om 3.40 uur naast zijn bed gevonden. Geen letsel gezien. MIC gemeld. Graag goed observeren."]},{"kop":"Joost Hendriks · gisteren 21.30","regels":["Meneer rustig gaan slapen. Wilde nog een kop thee."]},{"kop":"Fatma Yilmaz · dinsdag 14.10","regels":["Meneer met zijn zoon gewandeld in de tuin."]}]}},"agenda":{"type":"ons","menu":"Agenda","pagina":{"titel":"Week 41 - 2026","knoppen":["Afdrukken","Toevoegen"],"kaarten":[{"kop":"Woensdag 7 oktober","regels":["Hele dag · Wassen"]},{"kop":"Donderdag 8 oktober","regels":["Hele dag · Wassen","Observeren na val: pijn en bewegen"]}]}}},"stappen":[{"id":"start","type":"situatie","proces":"rapportages","scherm":"overzicht","knop":"Laat maar zien","tekst":"Het is donderdag 7.00 uur en je vroege dienst op De Linde begint. Je hebt twee dagen vrij gehad, dus er kan veel gebeurd zijn."},{"id":"afs-start","type":"afspraak","proces":"rapportages","voor":"Eerst hoe wij een dienst starten bij {org}.","tekst":"Je logt in op Nedap ONS met je eigen naam en je eigen code. Daarna lees je de overdracht, voordat je de eerste kamer in gaat.","bron":"Handboek De Wilgenhof, Zo start je een dienst"},{"id":"k-rapportages","type":"klik","proces":"rapportages","scherm":"overzicht","doel":{"menu":"Rapportages"},"opdracht":"Het dossier van meneer Jansen staat open. Op het overzicht zie je al een belangrijke rapportage van vannacht. Klik links in het menu op Rapportages.","goed":"Precies. Hier staat wat er gebeurd is, de nieuwste rapportage bovenaan.","hint":"Bijna. Kijk links in het menu, tussen Plan en Agenda."},{"id":"afs-terug","type":"afspraak","proces":"rapportages","scherm":"rapportages","voor":"Hoe ver lees je terug? Daar hebben we een afspraak over.","tekst":"Je leest terug tot je eigen laatste dienst, ook als je een paar dagen vrij was. De vorige dienst is er nog even. Wat je niet snapt, vraag je nu.","bron":"Handboek De Wilgenhof, Zo start je een dienst"},{"id":"k-agenda","type":"klik","proces":"agenda","scherm":"rapportages","doel":{"menu":"Agenda"},"opdracht":"Je hebt gelezen wat er gebeurd is. Nu kijk je wat er vandaag moet gebeuren. Klik in het menu op Agenda.","goed":"Goed. Dit is de agenda van meneer Jansen voor deze week.","hint":"Bijna. Agenda staat links in het menu, onder Rapportages."},{"id":"k-handeling","type":"klik","proces":"agenda","scherm":"agenda","doel":{"regel":"Observeren na val: pijn en bewegen"},"opdracht":"Bij vandaag staat wat de nachtdienst voor jou heeft klaargezet. Klik op de handeling van vandaag.","goed":"Ja. Na zijn val van vannacht observeer jij vandaag pijn en bewegen.","hint":"Bijna. Kijk bij donderdag 8 oktober, onder Wassen."},{"id":"afs-eerst","type":"afspraak","proces":"kiezen","voor":"Je weet nu wat er speelt. Niet alles is even dringend.","tekst":"Begin bij wat niet kan wachten, zoals een cliënt die vannacht gevallen is. Een afspraak op een vaste tijd zet je in je planning voor vandaag.","bron":"Handboek De Wilgenhof, De overdracht lezen: rapportages en agenda"},{"id":"v-huisarts","type":"vraag","proces":"kiezen","vraag":"In de overdracht staat ook: bij meneer Van Leeuwen komt de huisarts om 11.00 uur. Wat doe je daarmee?","opties":[{"tekst":"Meteen doen, aan het begin van je dienst"},{"tekst":"Inplannen voor later vandaag","goed":true},{"tekst":"Alleen weten, er hoeft nu niets"}],"uitleg":"De huisarts komt op een vaste tijd. Dat zet je in je planning voor vandaag."},{"id":"v-pantoffels","type":"vraag","proces":"kiezen","vraag":"En deze: de dochter van mevrouw Smit neemt zondag nieuwe pantoffels mee. Wat doe je daarmee?","opties":[{"tekst":"Meteen doen, aan het begin van je dienst"},{"tekst":"Inplannen voor later vandaag"},{"tekst":"Alleen weten, er hoeft nu niets","goed":true}],"uitleg":"De pantoffels hoef je alleen te weten. Je onthoudt het voor zondag."},{"id":"eerste-kamer","type":"keuze","proces":"kiezen","vraag":"Je gaat de gang op. Bij wie begin je?","opties":[{"tekst":"Bij meneer Van Leeuwen, die is altijd vroeg wakker. Meneer Jansen komt later in mijn ronde.","reactie":"Net niet. De overdracht vroeg om observeren na een val. Dan ga je eerst naar die cliënt, ook als je vaste ronde anders loopt."},{"tekst":"Ik vraag de nachtdienst hoe het met meneer Jansen ging. Die zegt \"prima\", dus ik begin mijn vaste ronde.","reactie":"Net niet. Een collega die vannacht weinig zag, kan nu niet zeggen hoe het gaat. Je kijkt zelf en schrijft op wat je ziet."},{"tekst":"Bij meneer Jansen. Ik vraag hoe het gaat, kijk naar pijn en bewegen, en schrijf op wat ik zie.","goed":true,"reactie":"Klopt. Na een val kan pijn pas later komen. Door eerst te gaan, zie je het op tijd en kan de verpleegkundige meekijken."}]},{"id":"zelf","type":"nu-jij","proces":"kiezen","opdracht":"Dat was de route. Nu jij, zonder mij erbij. Lees de overdracht van meneer Jansen en open de handeling van vandaag.","route":["k-rapportages","k-agenda","k-handeling"]},{"id":"klaar","type":"klaar","proces":"kiezen","ballon":"Goed gedaan, Sanne. Zo begin je elke dienst.","titel":"Je kunt nu de overdracht lezen in Nedap ONS","geleerd":["Je leest de overdrachtsagenda en de overdrachtsrapportages voordat je de eerste kamer in gaat.","Je stelt je vragen aan de nachtdienst zolang die er nog is.","Je begint bij wat niet kan wachten, zoals een cliënt die gevallen is."],"knop":"Verder naar mijn modules"}]},{"id":"rapporteren","titel":"Rapporteren","duurMin":10,"proces":[{"id":"openen","naam":"Openen"},{"id":"schrijven","naam":"Schrijven"},{"id":"koppelen","naam":"Koppelen"},{"id":"opslaan","naam":"Opslaan"}],"ons":{"client":"A Bakker"},"schermen":{"overzicht":{"type":"ons","menu":"Overzicht","pagina":{"kaarten":[{"kop":"Waarschuwingen","regels":["Geen waarschuwingen"]},{"kop":"Episodes","regels":["Decubitus voorkomen, sinds 12-09-2026"]},{"kop":"Belangrijke rapportages","regels":["Geen belangrijke rapportages"]}]}},"rapportages":{"type":"ons","menu":"Rapportages","pagina":{"titel":"Rapportages","knoppen":["Acties bekijken","+"],"kaarten":[{"kop":"Joost Hendriks · gisteren 21.40","regels":["Mevrouw rustig gaan slapen. Wilde de deur op een kier."]},{"kop":"Fatma Yilmaz · gisteren 13.15","regels":["Middageten goed gegeten. Bezoek van dochter."]}]}},"nieuw":{"type":"ons","menu":"Rapportages","pagina":{"titel":"Nieuw - Rapportage","knoppen":["Opslaan"],"velden":[{"label":"Tekst","waarde":"{getypt}"},{"label":"Zichtbaar voor","waarde":"Iedereen"}]}},"nieuwOpen":{"type":"ons","menu":"Rapportages","pagina":{"titel":"Nieuw - Rapportage","knoppen":["Opslaan"],"velden":[{"label":"Tekst","waarde":"{getypt}"},{"label":"Zichtbaar voor","waarde":"Iedereen"}]},"open":{"veld":"Koppel aan episodes","opties":["Decubitus voorkomen"]}},"gekoppeld":{"type":"ons","menu":"Rapportages","pagina":{"titel":"Nieuw - Rapportage","knoppen":["Opslaan"],"velden":[{"label":"Tekst","waarde":"{getypt}"},{"label":"Zichtbaar voor","waarde":"Iedereen"},{"label":"Koppel aan episodes","waarde":"Decubitus voorkomen"}]}},"opgeslagen":{"type":"ons","menu":"Rapportages","pagina":{"titel":"Rapportages","knoppen":["Acties bekijken","+"],"kaarten":[{"kop":"Sanne Visser · vandaag 10.52","regels":["{getypt}"]},{"kop":"Joost Hendriks · gisteren 21.40","regels":["Mevrouw rustig gaan slapen. Wilde de deur op een kier."]},{"kop":"Fatma Yilmaz · gisteren 13.15","regels":["Middageten goed gegeten. Bezoek van dochter."]}]}}},"stappen":[{"id":"start","type":"situatie","proces":"openen","scherm":"overzicht","knop":"Laat maar zien","tekst":"Je komt net bij {client} vandaan. Ze heeft een rode plek op haar rechterhiel en jij hebt de hiel vrijgelegd. Dat leggen we samen vast."},{"id":"afs-dienst","type":"afspraak","proces":"openen","voor":"Eerst hoe wij dat doen bij {org}.","tekst":"Je rapporteert in je eigen dienst, niet pas de volgende dag. Je schrijft over wat afwijkt van het gewone, en over wat je deed.","bron":"Handboek De Wilgenhof, Wat je rapporteert"},{"id":"k-menu","type":"klik","proces":"openen","scherm":"overzicht","doel":{"menu":"Rapportages"},"opdracht":"Het dossier van {client} staat open. Klik links in het menu op Rapportages.","goed":"Precies. Hier staan alle rapportages van {client}, de nieuwste bovenaan.","hint":"Bijna. Kijk links in het menu, tussen Plan en Agenda."},{"id":"k-plus","type":"klik","proces":"openen","scherm":"rapportages","doel":{"icoon":2,"label":"Nieuwe rapportage"},"opdracht":"Boven de lijst staan drie icoontjes. Klik op het tweede, het blad papier. Daarmee begin je een nieuwe rapportage.","goed":"Goed. Hier schrijf je een gewone rapportage. De blauwe plus is voor andere soorten, zoals een meting.","hint":"Bijna. Kijk linksboven de lijst. Het is het tweede icoontje."},{"id":"afs-oordeel","type":"afspraak","proces":"schrijven","scherm":"nieuw","voor":"Voor je gaat typen, nog één afspraak.","tekst":"Schrijf op wat je zag, hoorde en deed. Laat een oordeel weg. Bij De Wilgenhof leest de familie mee.","bron":"Handboek De Wilgenhof, Wat je rapporteert"},{"id":"oordeel","type":"keuze","proces":"schrijven","vraag":"Vanochtend ging het ontbijt moeizaam. Welke zin zet je in je rapportage?","opties":[{"tekst":"Mevrouw was lastig bij het ontbijt.","reactie":"Net niet. Lastig is een oordeel. Haar dochter leest dit ook. Wat zag je precies?"},{"tekst":"Mevrouw wilde eerst niet ontbijten.","goed":true,"reactie":"Klopt. Dit is wat je zag. Je collega en de familie weten nu wat er gebeurde."}]},{"id":"t-tekst","type":"typ","proces":"schrijven","scherm":"nieuw","veld":"tekst","wis":true,"opdracht":"Nu de hiel. Typ in je eigen woorden wat je zag en wat je deed.","goed":"Mooi. Kort en concreet, daar kan je collega mee verder."},{"id":"afs-koppel","type":"afspraak","proces":"koppelen","voor":"Nu zorgen we dat je rapportage op de goede plek terechtkomt.","tekst":"Bij De Wilgenhof koppel je een rapportage aan het doel in het zorgplan. Zo ziet de EVV'er bij het doel wat er speelt. Hoort de rapportage bij een episode, kies die dan onder Koppel aan episodes.","bron":"Handboek De Wilgenhof, Een rapportage maken in Nedap ONS"},{"id":"k-episodes","type":"klik","proces":"koppelen","scherm":"nieuw","doel":{"veld":"Koppel aan episodes"},"opdracht":"Bij {client} loopt een episode over haar huid. Klik op Koppel aan episodes.","goed":"Goed. Hier staan de episodes die nu bij haar lopen.","hint":"Bijna. Koppel aan episodes staat onderaan het formulier."},{"id":"k-decubitus","type":"klik","proces":"koppelen","scherm":"nieuwOpen","doel":{"optie":"Decubitus voorkomen"},"opdracht":"Kies Decubitus voorkomen.","goed":"Ja. De rode plek hoort bij deze episode. Wie de episode opent, ziet nu ook jouw rapportage.","hint":"Bijna. Klik in de lijst op Decubitus voorkomen."},{"id":"k-opslaan","type":"klik","proces":"opslaan","scherm":"gekoppeld","doel":{"knop":"Opslaan"},"opdracht":"Je tekst staat erin en de episode is gekoppeld. Klik op Opslaan.","goed":"Opgeslagen. Je rapportage staat bovenaan in het dossier.","hint":"Bijna. Opslaan staat rechtsboven."},{"id":"overdracht","type":"vraag","proces":"opslaan","scherm":"opgeslagen","vraag":"De avonddienst moet de hiel vanavond nog een keer bekijken. Wat doe je?","opties":[{"tekst":"Niets extra. Het staat in mijn rapportage."},{"tekst":"Ik zet het ook in de overdracht.","goed":true}],"uitleg":"Moet de volgende dienst vandaag nog iets doen, dan zet je het in de overdracht. Een rapportage alleen lees je pas terug als je zoekt."},{"id":"zelf","type":"nu-jij","proces":"opslaan","opdracht":"Dat was de route. Nu jij, zonder mij erbij. Maak een rapportage voor {client}.","route":["k-menu","k-plus","t-tekst","k-episodes","k-decubitus","k-opslaan"]},{"id":"klaar","type":"klaar","proces":"opslaan","ballon":"Goed gedaan, Sanne. Zo doen wij het.","titel":"Je kunt nu een rapportage maken in Nedap ONS","geleerd":["Je schrijft wat je zag en wat je deed, zonder oordeel.","Je koppelt je rapportage aan het doel of aan de episode.","Moet de volgende dienst er vandaag iets mee, dan zet je het ook in de overdracht."],"daarna":{"regels":["De EVV'er ziet bij het doel wat er speelt."],"bron":"Handboek De Wilgenhof, Een rapportage maken in Nedap ONS"},"knop":"Verder naar mijn modules"}]},{"id":"rondleiding","titel":"Rondleiding: zo werken wij bij De Wilgenhof","duurMin":3,"proces":[{"id":"leeromgeving","naam":"Leeromgeving"},{"id":"hulp","naam":"Hulp vragen"},{"id":"ons","naam":"Nedap ONS"}],"ons":{"client":"A Bakker"},"schermen":{"overzicht":{"type":"ons","menu":"Overzicht","pagina":{"kaarten":[{"kop":"Waarschuwingen","regels":["Geen waarschuwingen"]},{"kop":"Episodes","regels":["Decubitus voorkomen, sinds 12-09-2026"]},{"kop":"Belangrijke rapportages","regels":["Geen belangrijke rapportages"]}]}},"rapportages":{"type":"ons","menu":"Rapportages","pagina":{"titel":"Rapportages","knoppen":["Acties bekijken","+"],"kaarten":[{"kop":"Joost Hendriks · gisteren 21.40","regels":["Mevrouw rustig gaan slapen. Wilde de deur op een kier."]},{"kop":"Fatma Yilmaz · gisteren 13.15","regels":["Middageten goed gegeten. Bezoek van dochter."]}]}},"algemeen":{"type":"ons","menu":"Algemeen","pagina":{"kaarten":[{"kop":"Personalia","regels":["Naam: A Bakker"]},{"kop":"Locaties","regels":["De Linde"]}]}}},"stappen":[{"id":"start","type":"situatie","proces":"leeromgeving","scherm":"overzicht","knop":"Laat maar zien","tekst":"Welkom bij {org}, Sanne. Ik laat je zien waar je alles vindt en bij wie je terechtkunt met een vraag."},{"id":"afs-leren","type":"afspraak","proces":"leeromgeving","voor":"Eerst deze leeromgeving zelf.","tekst":"In de leeromgeving staan de modules die bij jouw werk horen. Je opleider ziet welke modules je af hebt. Zo blijft je inwerkchecklist vanzelf bij. Bij De Wilgenhof rond je de modules af in je eerste zes weken.","bron":"Handboek De Wilgenhof, Zo werkt de leeromgeving"},{"id":"afs-keyuser","type":"afspraak","proces":"hulp","voor":"Kom je er in Nedap ONS niet uit? Daar ben ik voor.","tekst":"Elke afdeling heeft een key-user. Dat is een collega die Nedap ONS en de apps goed kent. Met een vraag over het werken in Nedap ONS ga je eerst naar de key-user van je eigen afdeling.","bron":"Handboek De Wilgenhof, Je key-user: de eerste hulp bij Nedap ONS"},{"id":"niet-er","type":"keuze","proces":"hulp","vraag":"Ik werk op maandag, woensdag en vrijdag. Het is dinsdag en je hebt een vraag over Nedap ONS. Wat doe je?","opties":[{"tekst":"Ik vraag het de key-user van een andere afdeling.","goed":true,"reactie":"Klopt. Is je eigen key-user er niet, vraag het dan de key-user van een andere afdeling. Op dinsdag werkt Wendy Schouten, de key-user van De Eik."},{"tekst":"Ik wacht tot Fatima er woensdag weer is.","reactie":"Net niet. Je hoeft niet te wachten. Elke afdeling heeft een key-user, en die mag je ook iets vragen."},{"tekst":"Ik bel de servicedesk.","reactie":"Net niet. De servicedesk bel je als je door een probleem niet verder kunt werken. Met een vraag ga je eerst naar een key-user."}]},{"id":"afs-wie","type":"afspraak","proces":"hulp","voor":"Niet elke vraag gaat over Nedap ONS. Zo weet je bij wie je moet zijn.","tekst":"Kijk eerst in dit handboek. Hier staan de werkafspraken van De Wilgenhof. Staat je antwoord er niet in, vraag het dan de key-user van je afdeling.","punten":["Gaat je vraag over de zorg voor een cliënt, dan ga je naar de EVV'er van die cliënt.","Over je rooster, je contract of ziek melden praat je met je teamleider.","Over je inwerkprogramma praat je met de opleider."],"bron":"Handboek De Wilgenhof, Bij wie je terechtkunt met een vraag"},{"id":"v-rooster","type":"vraag","proces":"hulp","vraag":"Je wilt iets vragen over je rooster. Bij wie ben je dan?","opties":[{"tekst":"Bij de key-user van mijn afdeling"},{"tekst":"Bij de opleider"},{"tekst":"Bij mijn teamleider","goed":true}],"uitleg":"Over je rooster, je contract of ziek melden praat je met je teamleider."},{"id":"k-rapportages","type":"klik","proces":"ons","scherm":"overzicht","doel":{"menu":"Rapportages"},"opdracht":"Nu Nedap ONS. Dit is het dossier van {client}. Je ziet eerst het overzicht, links staat het menu. Klik in het menu op Rapportages.","goed":"Precies. Hier staan alle rapportages van {client}, de nieuwste bovenaan.","hint":"Bijna. Kijk links in het menu, tussen Plan en Agenda."},{"id":"k-algemeen","type":"klik","proces":"ons","scherm":"rapportages","doel":{"menu":"Algemeen"},"opdracht":"Wil je weten of je bij de goede cliënt zit? Dat controleer je onder Algemeen. Klik in het menu op Algemeen.","goed":"Goed. Hier controleer je of je in het goede dossier zit.","hint":"Bijna. Algemeen staat links in het menu, onder Snelkoppelingen."},{"id":"zelf","type":"nu-jij","proces":"ons","opdracht":"Zo kom je overal met het menu. Nu jij, zonder mij erbij. Ga eerst naar Rapportages en daarna naar Algemeen.","route":["k-rapportages","k-algemeen"]},{"id":"klaar","type":"klaar","proces":"ons","ballon":"Goed gedaan, Sanne. Fijn dat je er bent.","titel":"Je weet nu de weg in Nedap ONS","geleerd":["Je vindt je modules in de leeromgeving en rondt ze af in je eerste zes weken.","Je komt overal in een dossier met het menu links.","Met een vraag over Nedap ONS ga je eerst naar de key-user van je afdeling."],"knop":"Verder naar mijn modules"}]},{"id":"wondzorg","titel":"Wondzorgapp","duurMin":6,"proces":[{"id":"kiezen","naam":"Wond kiezen"},{"id":"foto","naam":"Foto maken"},{"id":"beschrijven","naam":"Beschrijven"}],"ons":{"plek":"telefoon","app":"Wondzorgapp","client":"M van Dam"},"schermen":{"clienten":{"type":"ons","pagina":{"balk":"Wondzorgapp","kaarten":[{"kop":"De Linde","regels":["M van Dam","H Smit"]}]}},"wonden":{"type":"ons","pagina":{"balk":"M van Dam","kaarten":[{"kop":"Wonden","regels":["Wond onderbeen","Laatste foto: vorige week woensdag"]}]}},"wond":{"type":"ons","pagina":{"balk":"Wond onderbeen","knoppen":["Foto maken"],"kaarten":[{"kop":"Wondzorgplan","regels":["Verband wisselen op maandag en woensdag","Foto bij de wissel op woensdag"]}]}},"camera":{"type":"ons","pagina":{"balk":"Foto","knoppen":["Opnieuw","Foto gebruiken"],"kaarten":[{"kop":"Controleer de foto","regels":["Meetlatje in beeld?","Genoeg licht?","Alleen de wond in beeld?"]}]}},"beschrijving":{"type":"ons","pagina":{"balk":"Wondbeschrijving","knoppen":["Opslaan"],"velden":[{"label":"Grootte","waarde":"Lengte en breedte in cm"},{"label":"Wondbed","waarde":"Kies een kleur"},{"label":"Wondvocht","waarde":"Kies hoeveel en welke kleur"},{"label":"Wondrand en huid","waarde":"Wat zie je?"},{"label":"Pijn","waarde":"Wat zegt de cliënt?"}]}}},"stappen":[{"id":"start","type":"situatie","proces":"kiezen","knop":"Laat maar zien","tekst":"Mevrouw Van Dam heeft een wond aan haar onderbeen. In het wondzorgplan staat dat je bij de verbandwissel op woensdag een foto maakt."},{"id":"afs-app","type":"afspraak","proces":"kiezen","voor":"Eerst hoe wij dat doen bij {org}.","tekst":"Een wondfoto maak je alleen in de wondzorgapp. Dan gaat de foto naar het dossier en blijft hij niet op je telefoon. Gebruik nooit de gewone camera, en stuur nooit een foto via WhatsApp of mail.","bron":"Handboek De Wilgenhof, Een wondfoto maken"},{"id":"k-client","type":"klik","proces":"kiezen","scherm":"clienten","doel":{"regel":"M van Dam"},"opdracht":"Je opent de wondzorgapp. Je ziet de cliënten van jouw afdeling met een wond. Tik op mevrouw Van Dam.","goed":"Precies. Mevrouw Van Dam heeft één wond in de app. Je ziet ook wanneer de laatste foto is gemaakt.","hint":"Bijna. Zoek in de lijst M van Dam."},{"id":"k-wond","type":"klik","proces":"kiezen","scherm":"wonden","doel":{"regel":"Wond onderbeen"},"opdracht":"Tik op de wond aan het onderbeen.","goed":"Goed. Hier staat het wondzorgplan van deze wond.","hint":"Bijna. Tik onder Wonden op Wond onderbeen."},{"id":"k-foto","type":"klik","proces":"foto","scherm":"wond","doel":{"knop":"Foto maken"},"opdracht":"Het oude verband is eraf en de wond is schoon. Tik op Foto maken.","goed":"Ja. De camera van de app staat open.","hint":"Bijna. Zoek de knop Foto maken."},{"id":"afs-zelfde","type":"afspraak","proces":"foto","scherm":"camera","voor":"Voor je de foto gebruikt, nog één afspraak.","tekst":"Maak de foto elke keer op dezelfde manier. Leg een meetlatje naast de wond, zorg voor goed licht zonder flits, en zet alleen de wond in beeld.","bron":"Handboek De Wilgenhof, Een wondfoto maken"},{"id":"hoe-foto","type":"keuze","proces":"foto","vraag":"Je hebt weinig tijd. Hoe maak je de foto?","opties":[{"tekst":"In de wondzorgapp, snel van bovenaf, zonder meetlatje.","reactie":"Net niet. Zonder meetlatje en goed licht kan de wondverpleegkundige niet zien of de wond groter of kleiner wordt. Ze moet dan om een nieuwe foto vragen."},{"tekst":"In de wondzorgapp, met een meetlatje naast de wond, bij goed licht en alleen de wond in beeld.","goed":true,"reactie":"Klopt. Zo is elke foto te vergelijken met de vorige. De wondverpleegkundige legt ze naast elkaar."},{"tekst":"Met de camera van mijn telefoon. Ik stuur de foto via WhatsApp naar de wondverpleegkundige.","reactie":"Net niet. Een wondfoto is een gegeven over de gezondheid van een cliënt. Die hoort in het dossier, niet in je eigen fotomap of in WhatsApp."}]},{"id":"k-gebruik","type":"klik","proces":"foto","scherm":"camera","doel":{"knop":"Foto gebruiken"},"opdracht":"Het meetlatje ligt naast de wond en het licht is goed. Tik op Foto gebruiken.","goed":"Goed. De foto staat erbij. Nu beschrijf je de wond.","hint":"Bijna. Opnieuw maakt een nieuwe foto. Jij wilt Foto gebruiken."},{"id":"afs-beschrijven","type":"afspraak","proces":"beschrijven","scherm":"beschrijving","voor":"Bij de foto schrijf je wat je zag.","tekst":"Bij de foto beschrijf je de grootte in centimeters, het wondbed, het wondvocht, de wondrand en de pijn. De app vraagt dat per onderdeel.","bron":"Handboek De Wilgenhof, Een wond of decubitus beschrijven"},{"id":"onderdeel","type":"vraag","proces":"beschrijven","scherm":"beschrijving","vraag":"De huid rond de wond is wit en week. Bij welk onderdeel schrijf je dat?","opties":[{"tekst":"Wondbed"},{"tekst":"Wondrand en huid","goed":true},{"tekst":"Wondvocht"}],"uitleg":"Witte, weke huid rond de wond hoort bij de wondrand. De kleur van de wond zelf is het wondbed. Vocht in het verband is wondvocht."},{"id":"k-opslaan","type":"klik","proces":"beschrijven","scherm":"beschrijving","doel":{"knop":"Opslaan"},"opdracht":"Je hebt de wond beschreven, onderdeel voor onderdeel. Tik op Opslaan.","goed":"Opgeslagen. De foto en je beschrijving staan in het dossier.","hint":"Bijna. Zoek de knop Opslaan."},{"id":"zelf","type":"nu-jij","proces":"beschrijven","opdracht":"Dat was de route. Nu jij, zonder mij erbij. Leg de wond van mevrouw Van Dam vast.","route":["k-client","k-wond","k-foto","k-gebruik","k-opslaan"]},{"id":"klaar","type":"klaar","proces":"beschrijven","ballon":"Goed gedaan, Sanne. Zo doen wij het.","titel":"Je kunt nu een wond vastleggen in de wondzorgapp","geleerd":["Je maakt een wondfoto alleen in de wondzorgapp, nooit met je eigen camera.","Je legt altijd een meetlatje naast de wond en zorgt voor goed licht.","Je beschrijft bij de foto de grootte, het wondbed, het vocht, de wondrand en de pijn."],"daarna":{"regels":["De wondverpleegkundige vergelijkt de foto's en past het wondzorgplan aan.","Ze komt op dinsdag en donderdag langs."],"bron":"Handboek De Wilgenhof, Een wond of decubitus beschrijven"},"knop":"Verder naar mijn modules"}]},{"id":"zorgplan","titel":"Het zorgplan","duurMin":7,"proces":[{"id":"voorbereiden","naam":"Voorbereiden"},{"id":"lezen","naam":"Lezen"},{"id":"bijsturen","naam":"Bijsturen"}],"ons":{"client":"J Peters"},"schermen":{"overzicht":{"type":"ons","menu":"Overzicht","pagina":{"kaarten":[{"kop":"Waarschuwingen","regels":["Valrisico"]},{"kop":"Belangrijke rapportages","regels":["Zorgplan aangepast na ziekenhuisopname"]}]}},"plan":{"type":"ons","menu":"Plan","pagina":{"tabs":["Zorgplan","Onvrijwillige zorg(0)"],"titel":"Zorgplan","knoppen":["Dagoverzicht"],"kaarten":[{"kop":"Actueel zorgplan","regels":["Geldig vanaf 05-10-2026"]},{"kop":"Doelen","regels":["Mevrouw loopt veilig door haar kamer en over de gang.","Mevrouw kiest zelf welke kleren ze aantrekt."]}]}},"doel":{"type":"ons","menu":"Plan","pagina":{"titel":"Mevrouw loopt veilig door haar kamer en over de gang.","kaarten":[{"kop":"Acties","regels":["Blijf bij mevrouw als ze loopt, ook op de gang.","Zet de rollator binnen handbereik als mevrouw opstaat.","Zet 's nachts het nachtlampje aan."]},{"kop":"Toelichting","regels":["Aangepast op 05-10-2026, na overleg met de fysiotherapeut."]}]}},"rapportages":{"type":"ons","menu":"Rapportages","pagina":{"titel":"Rapportages","knoppen":["Acties bekijken","+"],"kaarten":[{"kop":"05-10-2026","regels":["Zorgplan aangepast na ziekenhuisopname. Besproken met mevrouw en haar zoon."]}]}}},"stappen":[{"id":"start","type":"situatie","proces":"voorbereiden","scherm":"overzicht","knop":"Laat maar zien","tekst":"Je bent twee weken met vakantie geweest en vandaag help je mevrouw Peters weer bij de ochtendzorg. Ze lag vorige week in het ziekenhuis na een kleine beroerte, en de EVV'er heeft haar zorgplan aangepast."},{"id":"eerst","type":"keuze","proces":"voorbereiden","vraag":"Je staat op de gang bij de kamer van mevrouw Peters. Wat doe je eerst?","opties":[{"tekst":"Ik ga naar binnen. Ik ken mevrouw Peters goed.","reactie":"Net niet. Na een ziekenhuisopname verandert er vaak veel. Wat je van vroeger weet, klopt dan misschien niet meer."},{"tekst":"Ik lees eerst haar zorgplan in Nedap ONS: wat is er veranderd?","goed":true,"reactie":"Klopt. In het zorgplan staat wat er met mevrouw is afgesproken. Daarna ga je naar binnen en weet je wat er nieuw is."},{"tekst":"Ik vraag aan Joost hoe het gaat met mevrouw.","reactie":"Net niet. Een collega helpt je op weg, maar weet niet altijd wat er nieuw is. Wat er is afgesproken, staat in het zorgplan."}]},{"id":"afs-lezen","type":"afspraak","proces":"voorbereiden","voor":"Zo hebben wij dat afgesproken bij {org}.","tekst":"In het zorgplan staat wat je met een cliënt hebt afgesproken. Lees het voor je begint, zeker na een ziekenhuisopname of als je een tijd weg was. Wat je van vroeger weet, klopt dan misschien niet meer.","bron":"Handboek De Wilgenhof, Het zorgplan lezen"},{"id":"k-plan","type":"klik","proces":"lezen","scherm":"overzicht","doel":{"menu":"Plan"},"opdracht":"Het dossier van mevrouw Peters staat open. Op het overzicht zie je dat het zorgplan na haar opname is aangepast. Klik links in het menu op Plan.","goed":"Precies. Dit is het zorgplan van mevrouw Peters. Bovenaan zie je sinds wanneer het geldt.","hint":"Bijna. Kijk links in het menu, boven Rapportages."},{"id":"afs-vinden","type":"afspraak","proces":"lezen","scherm":"plan","voor":"Even kijken hoe het zorgplan is opgebouwd.","tekst":"Het zorgplan vind je in het dossier onder Plan, op de tab Zorgplan. Daar staan de doelen. Klik je op een doel, dan zie je de acties die erbij horen.","bron":"Handboek De Wilgenhof, Het zorgplan lezen"},{"id":"k-doel","type":"klik","proces":"lezen","scherm":"plan","doel":{"regel":"Mevrouw loopt veilig door haar kamer en over de gang."},"opdracht":"Het doel over lopen is na de opname veranderd. Open dat doel.","goed":"Goed. Bij het doel staan de acties: wat jij doet. Je ziet ook wanneer het is aangepast en waarom.","hint":"Bijna. Onder Doelen staat een zin over veilig lopen. Klik daarop."},{"id":"doel-of-actie","type":"vraag","proces":"lezen","scherm":"doel","vraag":"Welke zin is een doel?","opties":[{"tekst":"Geef alle dranken verdikt."},{"tekst":"Loop naast mevrouw als ze loopt."},{"tekst":"Mevrouw verslikt zich niet bij het eten en drinken.","goed":true}],"uitleg":"Een doel is wat de cliënt wil bereiken. Een actie is wat jij doet om daar te komen."},{"id":"afs-aanpassen","type":"afspraak","proces":"bijsturen","voor":"Soms zie je in je dienst iets anders dan er staat. Dan geldt dit.","tekst":"Bij De Wilgenhof past de EVV'er het zorgplan aan, samen met de cliënt. Past een afspraak niet meer? Houd je dan eerst aan het zorgplan. Rapporteer wat je zag en bespreek het met de EVV'er.","bron":"Handboek De Wilgenhof, Wie het zorgplan aanpast"},{"id":"alleen-lopen","type":"keuze","proces":"bijsturen","vraag":"Na het ontbijt loopt mevrouw stevig met haar rollator. Ze zegt: \"Ik kan het echt weer alleen hoor.\" Wat doe je?","opties":[{"tekst":"Ik houd me aan het zorgplan. Ik rapporteer wat ik zag bij het doel en bespreek het met de EVV'er.","goed":true,"reactie":"Klopt. Jouw waarneming helpt om het zorgplan bij te stellen. De EVV'er past het aan, samen met mevrouw."},{"tekst":"Ik laat haar vanaf nu alleen lopen. Ze kan het duidelijk weer.","reactie":"Net niet. Wat jij ziet is belangrijk, maar een afspraak in het zorgplan verander je niet op eigen houtje. Mevrouw is na het eten vaak moe."},{"tekst":"Ik pas het zorgplan zelf aan: mevrouw loopt weer alleen.","reactie":"Net niet. De EVV'er past het zorgplan aan, na overleg met mevrouw en zo nodig de familie of de fysiotherapeut. Jij levert de waarneming."}]},{"id":"k-rapportages","type":"klik","proces":"bijsturen","scherm":"doel","doel":{"menu":"Rapportages"},"opdracht":"Je past het doel dus niet zelf aan. Je rapporteert wat je zag. Klik links in het menu op Rapportages.","goed":"Goed. Hier rapporteer je wat je zag.","hint":"Bijna. Kijk links in het menu, onder Plan."},{"id":"k-plus","type":"klik","proces":"bijsturen","scherm":"rapportages","doel":{"icoon":2,"label":"Nieuwe rapportage"},"opdracht":"Boven de lijst staan drie icoontjes. Klik op het tweede, het blad papier. Daarmee begin je een nieuwe rapportage.","goed":"Ja. Bij De Wilgenhof koppel je de rapportage aan het doel. Dan leest de EVV'er het terug als ze het zorgplan bespreekt.","hint":"Bijna. Kijk linksboven de lijst. Het is het tweede icoontje."},{"id":"zelf","type":"nu-jij","proces":"bijsturen","opdracht":"Dat was de route. Nu jij, zonder mij erbij. Open het doel over lopen van mevrouw Peters en begin daarna een rapportage.","route":["k-plan","k-doel","k-rapportages","k-plus"]},{"id":"klaar","type":"klaar","proces":"bijsturen","ballon":"Goed gedaan, Sanne. Zo doen wij het.","titel":"Je kunt nu het zorgplan lezen in Nedap ONS","geleerd":["Je leest het zorgplan voor je begint, zeker na een opname of een tijd weg.","Een doel zegt wat de cliënt wil bereiken. Een actie zegt wat jij doet.","Past een afspraak niet meer, dan rapporteer je het en bespreek je het met de EVV'er."],"daarna":{"regels":["De EVV'er past het zorgplan aan, samen met de cliënt."],"bron":"Handboek De Wilgenhof, Wie het zorgplan aanpast"},"knop":"Verder naar mijn modules"}]},{"id":"zp10","titel":"ZP10: zorgpad stervensfase","duurMin":7,"proces":[{"id":"waarnemen","naam":"Waarnemen"},{"id":"vastleggen","naam":"Vastleggen"},{"id":"familie","naam":"Familie"}],"ons":{"client":"H Koster"},"schermen":{"overzicht":{"type":"ons","menu":"Overzicht","pagina":{"kaarten":[{"kop":"Waarschuwingen","regels":["Geen waarschuwingen"]},{"kop":"Episodes","regels":["Zorgpad stervensfase, sinds 07-10-2026"]},{"kop":"Belangrijke rapportages","regels":["Geen belangrijke rapportages"]}]}},"lijsten":{"type":"ons","menu":"Vragenlijsten","pagina":{"titel":"Vragenlijsten","tabs":["Actueel","Archief"],"knoppen":["+ Nieuwe vragenlijst"],"kaarten":[{"kop":"Actueel","regels":["Zorgpad stervensfase","Mikzo Kompas® (2025.1)"]}]}},"zorgpad":{"type":"ons","menu":"Vragenlijsten","pagina":{"titel":"Zorgpad stervensfase","knoppen":["Meer","Wijzig"],"kaarten":[{"kop":"Pijn","regels":["Vroege dienst: geen tekenen van pijn"]},{"kop":"Onrust","regels":["Vroege dienst: ligt rustig"]},{"kop":"Ademhaling","regels":["Vroege dienst: rustig, soms een pauze"]},{"kop":"Mondverzorging","regels":["Vroege dienst: mond verzorgd met gaasje"]}]}},"invullen":{"type":"ons","menu":"Vragenlijsten","pagina":{"titel":"Zorgpad stervensfase, late dienst","knoppen":["Opslaan"],"velden":[{"label":"Pijn","waarde":"Wat zag je, wat deed je?"},{"label":"Onrust","waarde":"Wat zag je, wat deed je?"},{"label":"Ademhaling","waarde":"Wat zag je, wat deed je?"},{"label":"Mondverzorging","waarde":"Wat zag je, wat deed je?"}]}},"ingevuld":{"type":"ons","menu":"Vragenlijsten","pagina":{"titel":"Zorgpad stervensfase, late dienst","knoppen":["Opslaan"],"velden":[{"label":"Pijn","waarde":"Wat zag je, wat deed je?"},{"label":"Onrust","waarde":"{getypt:Onrust}"},{"label":"Ademhaling","waarde":"Wat zag je, wat deed je?"},{"label":"Mondverzorging","waarde":"Wat zag je, wat deed je?"}]}},"opgeslagen":{"type":"ons","menu":"Vragenlijsten","pagina":{"titel":"Zorgpad stervensfase","knoppen":["Meer","Wijzig"],"kaarten":[{"kop":"Pijn","regels":["Vroege dienst: geen tekenen van pijn"]},{"kop":"Onrust","regels":["Vroege dienst: ligt rustig","Late dienst: {getypt:Onrust}"]},{"kop":"Ademhaling","regels":["Vroege dienst: rustig, soms een pauze"]},{"kop":"Mondverzorging","regels":["Vroege dienst: mond verzorgd met gaasje"]}]}}},"stappen":[{"id":"start","type":"situatie","proces":"waarnemen","scherm":"overzicht","knop":"Verder","tekst":"Meneer Koster is in de stervensfase en zijn dochter zit bij hem. Als je binnenkomt rochelt zijn ademhaling, hij trekt aan het laken en zijn lippen zijn droog."},{"id":"afs-zorg","type":"afspraak","proces":"waarnemen","voor":"Eerst hoe wij hiermee omgaan bij {org}.","punten":["Zie je in de stervensfase pijn, onrust of benauwdheid, schakel dan de dienstdoende verpleegkundige in. Over medicatie beslist de verpleegkundige samen met de arts.","Gaat slikken slecht, verzorg de mond dan met een nat gaasje of mondspray. Geef geen drinken als slikken moeilijk is."],"bron":"Handboek De Wilgenhof, Zorg in de laatste dagen"},{"id":"onrust","type":"keuze","proces":"waarnemen","vraag":"Je ziet dat meneer Koster onrustig is. Wat doe je?","opties":[{"tekst":"Je zet hem wat rechter en geeft hem een slokje water.","reactie":"Liever niet. In de stervensfase kan een cliënt vaak niet meer goed slikken. Drinken geeft dan kans op verslikken. Een droge mond verzorg je met een nat gaasje of mondspray."},{"tekst":"Je kijkt rustig wat je ziet, legt het vast in het zorgpad en belt de verpleegkundige van dienst.","goed":true,"reactie":"Ja. Je kijkt of meneer comfortabel is. Wijkt iets af, dan leg je het vast en schakel je de verpleegkundige in. Zij beslist met de arts over medicatie."},{"tekst":"Je doet niets. Rochelen en onrust horen bij sterven.","reactie":"Niet helemaal. Rochelen kan bij sterven horen. Onrust en pijn wil je wel zo veel mogelijk verlichten. Daarvoor moet de verpleegkundige het weten, en moet het in het zorgpad staan."}]},{"id":"afs-zorgpad","type":"afspraak","proces":"vastleggen","scherm":"overzicht","voor":"Je legt vast wat je zag. Dat doen we in het zorgpad.","tekst":"Het zorgpad staat als vragenlijst in het dossier, onder Vragenlijsten. Je kijkt elke dienst hoe het met de cliënt gaat en vult per onderwerp in wat je zag.","bron":"Handboek De Wilgenhof, Het zorgpad stervensfase (ZP10)"},{"id":"k-menu","type":"klik","proces":"vastleggen","scherm":"overzicht","doel":{"menu":"Vragenlijsten"},"opdracht":"Je hebt het dossier van meneer Koster open. Bij Episodes zie je dat het zorgpad stervensfase loopt. Klik links in het menu op Vragenlijsten.","goed":"Ja. Onder Actueel staan de vragenlijsten die nu lopen.","hint":"Kijk links in het menu. Vragenlijsten staat onder Overzicht."},{"id":"k-zorgpad","type":"klik","proces":"vastleggen","scherm":"lijsten","doel":{"regel":"Zorgpad stervensfase"},"opdracht":"Het zorgpad staat bovenaan. Je maakt geen nieuwe lijst aan, je werkt in deze. Open het zorgpad stervensfase.","goed":"Goed. Je ziet de onderwerpen van het zorgpad en wat de vorige dienst invulde. Lees dat eerst.","hint":"Je hoeft geen nieuwe lijst te maken. Klik in de lijst op Zorgpad stervensfase."},{"id":"k-wijzig","type":"klik","proces":"vastleggen","scherm":"zorgpad","doel":{"knop":"Wijzig"},"opdracht":"Nu vul je jouw dienst in. Klik op Wijzig.","goed":"Ja. Per onderwerp schrijf je kort wat je zag en wat je deed.","hint":"Wijzig staat rechts, naast Meer."},{"id":"t-onrust","type":"typ","proces":"vastleggen","scherm":"invullen","veld":"Onrust","wis":true,"opdracht":"Meneer trekt aan het laken en ligt niet stil. Typ bij Onrust in je eigen woorden wat je zag en wat je deed.","goed":"Dank je. Zo weet de volgende dienst wat er vanavond speelde."},{"id":"k-opslaan","type":"klik","proces":"vastleggen","scherm":"ingevuld","doel":{"knop":"Opslaan"},"opdracht":"In je dienst vul je zo elk onderwerp in. Voor nu is Onrust genoeg. Klik op Opslaan.","goed":"Opgeslagen. Jouw regel staat nu bij Onrust in het zorgpad.","hint":"Opslaan staat rechtsboven."},{"id":"onderwerp","type":"vraag","proces":"vastleggen","scherm":"opgeslagen","vraag":"Meneer Koster fronst ook als je hem draait. Bij welk onderwerp leg je dat vast?","opties":[{"tekst":"Onrust"},{"tekst":"Pijn","goed":true},{"tekst":"Ademhaling"}],"uitleg":"Fronsen bij het draaien kan pijn zijn. Het zorgpad heeft een onderwerp per soort klacht. Zo ziet de volgende dienst snel wat er speelt."},{"id":"zelf","type":"nu-jij","proces":"vastleggen","opdracht":"Dat was de route. Loop hem nu zelf een keer door, in je eigen tempo. Leg bij meneer Koster vast wat je zag.","route":["k-menu","k-zorgpad","k-wijzig","t-onrust","k-opslaan"]},{"id":"afs-familie","type":"afspraak","proces":"familie","scherm":"opgeslagen","voor":"Dan de dochter van meneer Koster. Ook voor haar hebben we een afspraak.","tekst":"Vraagt de familie hoe lang het nog duurt? Zeg eerlijk dat niemand dat precies weet. Blijf even, vertel wat je ziet en vraag of ze iemand willen spreken.","bron":"Handboek De Wilgenhof, Zorg in de laatste dagen"},{"id":"dochter","type":"keuze","proces":"familie","vraag":"De dochter vraagt zacht: \"Hoe lang duurt het nog?\" Wat zeg je?","opties":[{"tekst":"\"Dat weet ik niet. Wel zie ik dat zijn ademhaling verandert. Wilt u dat ik de verpleegkundige vraag om met u te praten?\"","goed":true,"reactie":"Ja. Je bent eerlijk, je vertelt wat je ziet en je zorgt dat de dochter iemand kan spreken. Zo laat je haar niet alleen met haar vraag."},{"tekst":"\"Een paar uur nog, denk ik.\"","reactie":"Liever niet. Niemand weet precies hoe lang het duurt. Een schatting geeft verwachtingen die vaak niet kloppen."},{"tekst":"\"Daar kan ik niets over zeggen.\" En je gaat verder met je ronde.","reactie":"Niet zo. Je hoeft het antwoord niet te weten. Blijf wel even, vertel wat je ziet en zorg dat ze iemand kan spreken."}]},{"id":"klaar","type":"klaar","proces":"familie","ballon":"Dank je wel, Sanne. Zo doen wij dit bij {org}.","titel":"Je kunt nu een waarneming vastleggen in het zorgpad stervensfase in Nedap ONS","geleerd":["Je kijkt elke dienst of de cliënt comfortabel is en legt dat vast in het zorgpad.","Zie je pijn, onrust of benauwdheid, dan schakel je de verpleegkundige in.","Een droge mond verzorg je met een nat gaasje. Je geeft geen drinken als slikken moeilijk is.","Op de vraag hoe lang het nog duurt, ben je eerlijk en zorg je dat de familie iemand kan spreken."],"knop":"Verder naar mijn modules"}]}]};
(function(){
const esc = (t) => String(t ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const illustratie = () => '';
// Vaste onderdelen van elk scherm van Nedap ONS: iconen, bovenbalk, menu en clientkop.
// Gebundeld door bouw.mjs, samen met doorklik.js. De functie esc komt uit de bundel.
const ONS_ICOON = {
  overzicht: '<rect x="4" y="4" width="6.5" height="6.5" rx="1"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1"/>',
  vragenlijst: '<path d="M13 21H6.5A1.5 1.5 0 0 1 5 19.5v-15A1.5 1.5 0 0 1 6.5 3H14l5 5v3.5M13.5 3v5.5H19M8 12h4M8 15.5h3"/><circle cx="17.5" cy="17.5" r="3.6" fill="currentColor" stroke="none"/><path d="M16.7 16.6a.9.9 0 1 1 1.2.8c-.3.1-.4.3-.4.6M17.5 19.4v.1" stroke="#fff" stroke-width="1.1"/>',
  plan: '<path d="M2.5 14.5h3.2l4.6 2.6h3.4a1.3 1.3 0 0 1 0 2.6h-4M13.7 19.7l5.2-2.6a1.3 1.3 0 0 1 1.6 2L15 22.3H8.6l-3-1.6H2.5M15.5 11.5c-2.6-1.9-4.2-3.4-4.2-5.1a2.2 2.2 0 0 1 4.2-1 2.2 2.2 0 0 1 4.2 1c0 1.7-1.6 3.2-4.2 5.1z"/>',
  rapportage: '<path d="M11.5 21H6.5A1.5 1.5 0 0 1 5 19.5v-15A1.5 1.5 0 0 1 6.5 3H14l5 5v3M13.5 3v5.5H19M14 21v-2.2l5.2-5.2a1.4 1.4 0 0 1 2 2L16 20.8z"/>',
  agenda: '<rect x="4" y="5" width="16" height="15.5" rx="1.5"/><path d="M4 9.5h16M8.5 3v4M15.5 3v4"/><rect x="11.5" y="13" width="4" height="4" fill="currentColor" stroke="none"/>',
  klinimetrie: '<path d="M4 20.5h16.5M6 18v-6M10 18V7M14 18v-9M18 18v-5"/>',
  link: '<path d="M9.5 15.5H7.5a3.5 3.5 0 0 1 0-7h2M14.5 8.5h2a3.5 3.5 0 0 1 0 7h-2M8.5 12h7"/>',
  algemeen: '<rect x="4" y="4" width="16" height="16" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M7 18.5c.8-2.6 2.8-4 5-4s4.2 1.4 5 4"/>',
  netwerk: '<circle cx="9" cy="8.5" r="3"/><path d="M3.5 19c.6-3.3 2.8-5 5.5-5s4.9 1.7 5.5 5z"/><path d="M14.5 5.8a3 3 0 1 1 .8 5.6M16.6 14.2c2.1.4 3.6 2 4 4.8h-3.2"/>',
  financieel: '<path d="M17.5 6.5A6.5 6.5 0 1 0 17.5 17.5M4 10.5h9M4 13.5h9"/>',
  documenten: '<path d="M3.5 8V18.5A1.5 1.5 0 0 0 5 20h13.5M6.5 5.5A1.5 1.5 0 0 1 8 4h3.5l2 2h5A1.5 1.5 0 0 1 20 7.5v8a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 0 1-1.5-1.5z"/>',
  inklappen: '<path d="M3.5 6h11M3.5 12h7M3.5 18h11M20.5 8.5 17 12l3.5 3.5"/>',
  terug: '<path d="M19.5 12h-15M10.5 6l-6 6 6 6"/>',
  omlaag: '<path d="m7 10 5 5 5-5"/>',
  rechts: '<path d="m10 6 6 6-6 6"/>',
  links: '<path d="m14 6-6 6 6 6"/>',
  zoek: '<circle cx="10.5" cy="10.5" r="6"/><path d="m15 15 5 5"/>',
  oog: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3" fill="currentColor"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  ster: '<path d="m12 3.2 2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 17l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8z" fill="currentColor"/>',
  slot: '<rect x="5" y="11" width="14" height="10" rx="1.5" fill="currentColor"/><path d="M8 11V7.5a4 4 0 0 1 7.6-1.7"/>',
  potlood: '<path d="M4 20v-3.5L15.5 5a2 2 0 0 1 2.9 0l.6.6a2 2 0 0 1 0 2.9L7.5 20zM13.5 7l3.5 3.5" fill="currentColor"/>',
  verberg: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12zM4 20 20 4"/>',
  prullenbak: '<path d="M5 7h14l-1.2 13.5H6.2zM3.5 5h17M9.5 5V3h5v2" fill="currentColor"/>',
  print: '<path d="M7 9V3.5h10V9M7 17H4.5V9h15v8H17M7 14h10v6.5H7z" fill="currentColor"/>',
  kruis: '<path d="m6 6 12 12M18 6 6 18"/>',
  vink: '<path d="m5 12.5 4.2 4.2L19 7"/>',
  chat: '<path d="M4 4.5h16v12H8.5L4 20.5z"/>',
  bel: '<path d="M6 17v-6a6 6 0 0 1 12 0v6l1.8 1.5H4.2zM10 20.5h4"/>',
  hand: '<path d="M8 13V6.5a1.3 1.3 0 0 1 2.6 0V11V4.8a1.3 1.3 0 0 1 2.6 0V11V5.8a1.3 1.3 0 0 1 2.6 0V12V8.6a1.3 1.3 0 0 1 2.6 0v6c0 4-2.6 6.4-6 6.4-2.5 0-3.8-1.1-5.3-3.2L4.6 14a1.3 1.3 0 0 1 2-1.6z" fill="currentColor" stroke="none"/>',
  virus: '<circle cx="12" cy="12" r="4.6"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>',
  zandloper: '<path d="M6 3h12M6 21h12M7.5 3c0 5 9 6 9 9s-9 4-9 9M16.5 3c0 5-9 6-9 9" /><path d="M8.5 20c1-2.5 6-2.5 7 0z" fill="currentColor"/>',
  let: '<path d="M12 4 21 20H3zM12 10v4.5M12 17v.3"/>',
  sorteer: '<path d="M8 19V5M4.5 8.5 8 5l3.5 3.5M16 5v14M12.5 15.5 16 19l3.5-3.5"/>',
  af: '<path d="M12 5v14M6.5 13.5 12 19l5.5-5.5"/>',
  lijst: '<path d="M6.5 3H14l5 5v11.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19.5v-15A1.5 1.5 0 0 1 6.5 3zM13.5 3v5.5H19M8 12.5h8M8 15.5h8M8 18h5"/><path d="M3 6v15.5h12" />',
  doc: '<path d="M6.5 3H14l5 5v11.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19.5v-15A1.5 1.5 0 0 1 6.5 3zM13.5 3v5.5H19M8 12.5h8M8 15.5h8M8 18.5h5"/>',
  hart: '<path d="M12 20.5S3.5 15 3.5 9A4.5 4.5 0 0 1 12 6.6 4.5 4.5 0 0 1 20.5 9c0 6-8.5 11.5-8.5 11.5z"/><path d="M5 12h3.5l1.5-2.5 2.5 5 1.5-2.5H19"/>',
  soep: '<rect x="4" y="3.5" width="16" height="17" rx="1.5"/><path d="M12 3.5v17M4 12h16"/><text x="8" y="10" font-size="5" font-family="Arial" font-weight="700" fill="currentColor" stroke="none" text-anchor="middle">S</text><text x="16" y="10" font-size="5" font-family="Arial" font-weight="700" fill="currentColor" stroke="none" text-anchor="middle">O</text><text x="8" y="18.5" font-size="5" font-family="Arial" font-weight="700" fill="currentColor" stroke="none" text-anchor="middle">E</text><text x="16" y="18.5" font-size="5" font-family="Arial" font-weight="700" fill="currentColor" stroke="none" text-anchor="middle">P</text>',
  kalender: '<rect x="3.5" y="3.5" width="17" height="17" rx="2" fill="currentColor" stroke="none"/><path d="M3.5 8.5h17M8 3.5v3M16 3.5v3M7 12h3M11 12h3M15 12h2M7 15.5h3M11 15.5h3" stroke="#fff"/>',
  schild: '<rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" stroke="none"/><path d="M12 6.5c2 1.2 3.5 1.4 5 1.4 0 5-2 7.8-5 9.6-3-1.8-5-4.6-5-9.6 1.5 0 3-.2 5-1.4z" fill="#fff" stroke="none"/><path d="m9.6 12 1.7 1.7 3.2-3.4" stroke="currentColor"/>',
  extern: '<path d="M18 13.5V19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 19V7.5A1.5 1.5 0 0 1 5.5 6H11M14.5 3.5h6v6M20.5 3.5 11 13"/>',
  pluscirkel: '<circle cx="12" cy="12" r="9"/><path d="M12 7.5v9M7.5 12h9"/>',
  upload: '<path d="M12 16V4M7 9l5-5 5 5M5 20h14"/>',
};
const ONS_MENU = [
  ['Overzicht', 'overzicht'], ['Vragenlijsten', 'vragenlijst'], ['Plan', 'plan'], ['Rapportages', 'rapportage'],
  ['Agenda', 'agenda'], ['Klinimetrie', 'klinimetrie'], ['Snelkoppelingen', 'link'],
];
const ONS_MENU_ADMIN = [
  ['Overzicht', 'overzicht'], ['Algemeen', 'algemeen'], ['Cliëntnetwerk', 'netwerk'], ['Financieel', 'financieel'], ['Documenten', 'documenten'],
];
const ONS_ADMIN = ['Algemeen', 'Cliëntnetwerk', 'Financieel', 'Documenten'];
const ONS_LIJST = 'Alle deskundigheden (of kies deskundigheid)';

const onsIcoon = (naam, klasse = 'ons__icoon') => `<svg class="${klasse}" viewBox="0 0 24 24" aria-hidden="true">${ONS_ICOON[naam] || ''}</svg>`;

// Het logo van Nedap ONS: een donkere cirkel met een oranje kom.
const ONS_LOGO = '<svg class="ons__logo" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#2B2421"/><path d="M6.4 11.2h11.2a5.6 5.6 0 0 1-11.2 0z" fill="#FFA62B"/><rect x="9.6" y="8.6" width="4.8" height="1.5" rx=".75" fill="#FFA62B"/></svg>';
const ONS_AVATAR = '<svg class="ons__avatar" viewBox="0 0 28 28" aria-hidden="true"><circle cx="14" cy="14" r="14" fill="#E3F1CF"/><circle cx="14" cy="14" r="11.5" fill="#6CBE16"/><path d="M8.6 15.5h10.8a5.4 5.4 0 0 1-10.8 0z" fill="#fff"/><rect x="11.4" y="12.2" width="5.2" height="1.6" rx=".8" fill="#fff"/></svg>';
const ONS_NEDAP = '<svg class="ons__nedap-logo" viewBox="0 0 74 16" aria-hidden="true"><path d="M6.5 1.6 8 5.9l4.5.1-3.6 2.7 1.3 4.3-3.7-2.6-3.7 2.6 1.3-4.3L.5 6l4.5-.1z" fill="none" stroke="currentColor" stroke-width=".9"/><text x="15" y="12.6" font-family="Arial, sans-serif" font-size="13.5" font-weight="700" letter-spacing=".4" fill="none" stroke="currentColor" stroke-width=".8">nedap</text></svg>';

// Bovenbalk: licht oranje, logo, de pil van de module, zoekveld in het midden, berichten, bel en avatar.
function onsBovenbalk(module = 'Dossier') {
  return `
        <div class="ons__balk" aria-hidden="true">
          ${ONS_LOGO}
          <span class="ons__app${module === 'Administratie' ? ' ons__app--admin' : ''}">${esc(module)} <span class="ons__raster"></span></span>
          <span class="ons__zoek">${onsIcoon('zoek', 'ons__zoek-icoon')}<span>Zoeken naar cliënten...</span></span>
          <span class="ons__rechts">
            ${onsIcoon('chat', 'ons__balk-icoon')}
            <span class="ons__bel">${onsIcoon('bel', 'ons__balk-icoon')}</span>
            ${ONS_AVATAR}
          </span>
        </div>`;
}

// Menu links in het dossier. `item` maakt één regel, zo kan de doorklik er klikbare knoppen van maken.
function onsMenu(actief, { item, verborgen = true } = {}) {
  const standaard = ([naam, icoon], aan) => `<li class="ons__menu-item${aan ? ' is-actief' : ''}">${onsIcoon(icoon)}<span>${esc(naam)}</span></li>`;
  const maak = item || standaard;
  const admin = ONS_ADMIN.includes(actief);
  return `
          <nav class="ons__menu"${verborgen ? ' aria-hidden="true"' : ''}>
            <p class="ons__terug" aria-hidden="true">${onsIcoon('terug')}Cliënt zoeken</p>
            <p class="ons__groep" aria-hidden="true">Dossier</p>
            <ul>${ONS_MENU.map((m) => maak(m, !admin && m[0] === actief, false)).join('')}</ul>
            <p class="ons__groep" aria-hidden="true">Administratie</p>
            <ul>${ONS_MENU_ADMIN.map((m) => maak(m, admin && m[0] === actief, true)).join('')}</ul>
            <p class="ons__inklappen" aria-hidden="true">${onsIcoon('inklappen')}Inklappen</p>
            <p class="ons__nedap" aria-hidden="true">${ONS_NEDAP}</p>
          </nav>`;
}

// Labels in de cliëntkop: waarschuwingen in oranje, de zorgstatus in blauw. Zo staat het bij testcliënt T Tester.
const ONS_LABEL_ICOON = { Benaderingsplan: 'hand', Besmettingsgevaar: 'virus' };
const onsLabel = (tekst, blauw = false) => `<span class="ons__label${blauw ? ' ons__label--blauw' : ''}">${onsIcoon(blauw ? 'zandloper' : ONS_LABEL_ICOON[tekst] || 'let', 'ons__label-icoon')}${esc(tekst)}</span>`;

function onsClient(ons) {
  const initialen = ons.naam.split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();
  const labels = (ons.labels || []).map((l) => onsLabel(l)).join('') + (ons.zorgstatus === false ? '' : onsLabel(ons.zorgstatus || 'Geen actieve zorgopname', true));
  return `
            ${ons.kruimel ? `<p class="ons__kruimel">${onsIcoon('terug')}${esc(ons.kruimel)}</p>` : ''}
            <div class="ons__client">
              <span class="ons__initialen" aria-hidden="true">${esc(initialen)}</span>
              <div class="ons__client-tekst">
                <p class="ons__naam"><span class="ons__naam-tekst">${esc(ons.naam)}</span>${labels}</p>
                <p class="ons__gegevens">Geboortedatum is onbekend<i></i>${esc(ons.nummer || '12345')}<i></i><span class="ons__bsn">•••••••••</span>${onsIcoon('oog', 'ons__oog')}<i></i><u>Adres is onbekend</u></p>
              </div>
              <span class="ons__meer" aria-hidden="true">Meer info ${onsIcoon('omlaag', 'ons__meer-icoon')}</span>
            </div>`;
}


const h = { esc, onsIcoon, ONS_LIJST, ONS_ADMIN, onsBovenbalk, onsMenu, onsClient };
// De eerste twee fasen van een module: eerst uitleg, dan samen door Nedap ONS klikken.
// Pas daarna komt de situatie met de vragen. Het formaat staat in js/casussen/FORMAAT.md.
// De bouwstenen van Nedap ONS (bovenbalk, menu, cliëntkop) komen uit app.js en geven we mee als `h`.



// Waar begint een casus? Bij de uitleg als die er is, anders bij de situatie.
const beginStap = (c) => (c.les?.length ? 'les' : c.doorklik ? 'doorklik' : 'intro');

// Namen boven in de stapper, vóór de stappen van de casus zelf.
const fasen = (c) => [...(c.les?.length ? ['Uitleg'] : []), ...(c.doorklik ? [c.doorklik.plek === 'telefoon' ? 'Samen in de app' : 'Samen in ONS'] : [])];

function viewLes(c, casus, h) {
  const { esc, ICOON } = h;
  const i = casus.lesPagina || 0;
  const p = c.les[i];
  const laatste = i === c.les.length - 1;
  const verder = laatste
    ? `<button type="button" class="btn btn--actie" data-actie="les-klaar">${c.doorklik ? (c.doorklik.plek === 'telefoon' ? 'Nu samen in de app' : 'Nu samen in ONS') : 'Naar de situatie'} ${ICOON.pijl}</button>`
    : `<button type="button" class="btn btn--actie" data-actie="les-volgende">Volgende ${ICOON.pijl}</button>`;
  return `
    <article class="werkpaneel les">
      <p class="bovenregel bovenregel--merk">Uitleg ${i + 1} van ${c.les.length}</p>
      <div class="les__grid">
        <div class="les__tekst">
          <h2>${esc(p.kop)}</h2>
          ${p.tekst.map((t) => `<p>${esc(t)}</p>`).join('')}
          ${p.punten?.length ? `<ul class="les__punten">${p.punten.map((t) => `<li>${ICOON.vink}<span>${esc(t)}</span></li>`).join('')}</ul>` : ''}
        </div>
        <figure class="les__figuur">${illustratie(p.beeld)}</figure>
      </div>
      <div class="les__stippen" aria-hidden="true">${c.les.map((_, j) => `<span class="${j === i ? 'is-nu' : j < i ? 'is-klaar' : ''}"></span>`).join('')}</div>
      <div class="knoppen les__knoppen">
        ${i > 0 ? `<button type="button" class="btn btn--rand" data-actie="les-vorige">${ICOON.terug} Vorige</button>` : ''}
        ${verder}
      </div>
    </article>`;
}

// ---------- samen doorklikken ----------
// Drie standen, zoals softwaretraining dat overal doet (Captivate: demo, training, assessment):
// kijk (wij doen het voor), mee (jij klikt, het doel licht op) en zelf (jij klikt zonder hulp, wij meten).

const isDoel = (doel, soort, tekst) => doel && doel[soort] !== undefined && doel[soort] === tekst;

// Eén klikbaar onderdeel van het scherm. Wat het wordt hangt af van de stand.
function onderdeel(h, ctx, { inhoud, klasse, label, doel, tag = 'span', extra = '' }) {
  const { modus, hint } = ctx;
  const aria = `aria-label="${h.esc(label)}"`;
  if (modus === 'zelf') {
    const actie = doel ? 'zelf-goed' : 'zelf-fout';
    return `<button type="button" class="${klasse} dk-zelf${doel && hint ? ' dk-doel' : ''}" data-actie="${actie}" ${aria}>${inhoud}</button>`;
  }
  if (!doel) return `<${tag} class="${klasse}${extra}" aria-hidden="true">${inhoud}</${tag}>`;
  if (modus === 'kijk') return `<span class="${klasse} dk-doel dk-kijk" role="img" ${aria}>${inhoud}</span>`;
  return `<button type="button" class="${klasse} dk-doel" data-actie="doorklik-verder" ${aria}>${inhoud}</button>`;
}

// ---------- Nedap ONS, één op één naar de schermafdrukken ----------
// Elk scherm volgt een schermafdruk uit de testomgeving (kennisbank, middelen/ons-schermen). Wat de casus in `pagina`
// zet, komt op de plek waar het in Nedap ONS staat. De rest van het scherm vullen we aan met wat op de schermafdruk staat,
// zodat de medewerker het hele scherm herkent. Alleen wat in de casus staat is klikbaar in de stand Doe zelf.

// Bouwers voor één scherm. Ze houden bij welke knoppen, tabs, regels en opties al een plek hebben.
function bouwers(h, ctx, doel) {
  const gebruikt = { knop: new Set(), tab: new Set(), regel: new Set(), optie: new Set() };
  const stuk = (soort, tekst, klasse, inhoud) => {
    gebruikt[soort].add(tekst);
    const raak = isDoel(doel, soort, tekst);
    const label = raak && soort === 'knop' ? (doel.label || tekst) : tekst;
    return onderdeel(h, ctx, { inhoud: inhoud ?? h.esc(tekst), klasse: `${klasse} dk-el`, label, doel: raak, extra: soort === 'knop' ? ' dk-stil' : '' });
  };
  return {
    gebruikt, h,
    knop: (t, klasse = 'ons__knop ons__knop--rand', inhoud) => stuk('knop', t, klasse, inhoud),
    tab: (t, klasse = '', inhoud) => stuk('tab', t, klasse, inhoud),
    regel: (r, klasse = '', inhoud) => stuk('regel', r, klasse, inhoud),
    optie: (o, klasse = '', inhoud) => stuk('optie', o, klasse, inhoud),
  };
}
// Een bouwer voor de achtergrond van een venster: alles staat er, niets is klikbaar.
const stilBouwer = (h) => bouwers(h, { modus: 'mee' }, null);

// Wat de casus noemt maar nog geen plek kreeg, zetten we onderaan, zodat er nooit iets wegvalt.
function rest(b, p) {
  const { esc } = b.h;
  const knoppen = (p.knoppen || []).filter((t) => !b.gebruikt.knop.has(t));
  const tabs = (p.tabs || []).filter((t) => !b.gebruikt.tab.has(t));
  const kaarten = (p.kaarten || []).map((k) => ({ ...k, regels: (k.regels || []).filter((r) => !b.gebruikt.regel.has(r)) })).filter((k) => k.regels.length);
  const opties = (p.venster?.opties || []).filter((o) => !b.gebruikt.optie.has(o));
  if (!knoppen.length && !tabs.length && !kaarten.length && !opties.length) return '';
  return `
            ${tabs.length ? `<div class="dk-tabs">${tabs.map((t) => b.tab(t, 'dk-tab')).join('')}</div>` : ''}
            ${knoppen.length ? `<div class="dk-knoppen">${knoppen.map((t) => b.knop(t)).join('')}</div>` : ''}
            ${kaarten.map((k) => `<div class="ons__kaart">${k.kop ? `<p class="dk-kaart__kop">${esc(k.kop)}</p>` : ''}<ul class="dk-regels">${k.regels.map((r) => `<li>${b.regel(r, 'dk-regel')}</li>`).join('')}</ul></div>`).join('')}
            ${opties.length ? `<div class="dk-knoppen">${opties.map((o) => b.optie(o, 'dk-optie')).join('')}</div>` : ''}`;
}

const kaartVan = (p, kop) => (p.kaarten || []).find((k) => k.kop === kop);
const nepSelect = (h, tekst, klasse = '') => `<span class="ons__nep-select ${klasse}">${h.esc(tekst)}</span>`;
const invoer = (h, tekst, klasse = '') => `<span class="dk-invoer ${klasse}${tekst ? '' : ' is-leeg'}">${h.esc(tekst || '')}</span>`;
const isHint = (t) => /\?$/.test(t) || /^Kies /.test(t) || /^(Wat|Lengte) /.test(t);

// ----- kaarten van Overzicht (10-dossier-overzicht, 11-dossier-overzicht-onder) -----
const OVERZICHT = {
  links: [
    ['Waarschuwingen', 'Geen waarschuwingen'],
    ['Zorgstatus', null],
    ['Episodes', 'Geen relevante episodes'],
    ['Medische voorgeschiedenis', 'Geen relevante medische problemen'],
    ['Allergieën en overgevoeligheden', 'Geen actieve allergieën of overgevoeligheden', ['Verpleegkundige notities', 'Geen verpleegkundige notities']],
    ['Labuitslagen', 'Geen beschikbare labuitslagen'],
    ['Locatie', 'Geen locaties'],
  ],
  rechts: [
    ['Proactieve zorg', 'Geen medisch beleid', ['Wilsverklaring', 'Onbekend'], 'zwart'],
    ['Juridische statussen', 'Geen juridische statussen', null, 'zwart'],
    ['Wilsonbekwaamheden', 'Geen wilsonbekwaamheden'],
    ['Betrokken medewerkers', 'Geen actieve relevante betrokken medewerkers'],
    ['Medische notities', 'Geen medische notities'],
    ['Belangrijke rapportages', 'Geen belangrijke rapportages'],
    ['Zorgtechnologie', 'Er zijn geen zorgtechnologieën geregistreerd voor deze cliënt.', null, 'zwart ruim', true],
    ['Groepsdeelnames', 'Deze cliënt zit nog niet in een groep', null, '', true],
    ['Cliënt overleggen', 'Geen overleggen gevonden voor deze cliënt', null, 'grijs'],
  ],
};

// "Decubitus voorkomen, sinds 12-09-2026" of "08-10-2026 · Blaasontsteking" wordt een regel in de tabel Episodes.
function episodeRegel(r) {
  let m = r.match(/^(.+), sinds (\d\d-\d\d-\d{4})$/);
  if (m) return { datum: m[2], titel: m[1] };
  m = r.match(/^(\d\d-\d\d-\d{4}) · (.+)$/);
  return m ? { datum: m[1], titel: m[2] } : null;
}

function overzichtKaart(b, [kop, leeg, sub, stijl = '', plus = false], k, knopPlus) {
  const { esc, onsIcoon } = b.h;
  const regels = k?.regels || [];
  let body;
  if (kop === 'Zorgstatus' && !regels.length) body = '<p class="dk-ovz__tekst">De cliënt heeft <b>geen actieve zorgopname</b></p>';
  else if (kop === 'Waarschuwingen' && regels.some((r) => !/^Geen /.test(r))) {
    body = `<ul class="dk-ovz__waarschuwingen">${regels.map((r) => `<li>${onsIcoon('let', 'dk-ovz__let')}${b.regel(r, 'dk-ovz__waarschuwing')}</li>`).join('')}</ul>`;
  } else if (kop === 'Episodes' && regels.length && regels.every(episodeRegel)) {
    body = `<p class="dk-ovz__sub dk-ovz__sub--zwart">Relevante episodes</p>
                <div class="dk-episodes"><span class="dk-episodes__kop">Startdatum</span><span class="dk-episodes__kop">Code</span><span class="dk-episodes__kop">Titel</span>
                ${regels.map((r) => { const e = episodeRegel(r); return `<span>${esc(e.datum)}</span><span></span>${b.regel(r, 'dk-episodes__link', esc(e.titel))}`; }).join('')}</div>`;
  } else {
    const lijst = regels.length ? regels : [leeg];
    body = lijst.map((r) => (regels.length ? `<p class="dk-ovz__tekst">${b.regel(r, 'dk-ovz__regel')}</p>` : `<p class="dk-ovz__tekst">${esc(r)}</p>`)).join('');
  }
  const plusKnop = knopPlus || (plus ? `<span class="dk-vierkant" aria-hidden="true">${onsIcoon('plus')}</span>` : '');
  return `
              <section class="ons__kaart dk-ovz ${stijl ? stijl.split(' ').map((x) => `dk-ovz--${x}`).join(' ') : ''}">
                <div class="dk-ovz__kop"><h3 class="dk-kaarttitel${stijl.includes('grijs') ? ' dk-kaarttitel--grijs' : ''}">${esc(kop)}</h3>${plusKnop}</div>
                ${body}
                ${sub ? `<p class="dk-ovz__sub">${esc(sub[0])}</p><p class="dk-ovz__tekst">${esc(sub[1])}</p>` : ''}
              </section>`;
}

function schermOverzicht(b, p) {
  const bekend = [...OVERZICHT.links, ...OVERZICHT.rechts].map((x) => x[0]);
  const plus = (p.knoppen || []).includes('+') ? b.knop('+', 'dk-vierkant', b.h.onsIcoon('plus')) : '';
  const kolom = (lijst) => lijst.map((def) => overzichtKaart(b, def, kaartVan(p, def[0]), def[0] === 'Episodes' ? plus : '')).join('');
  const extra = (p.kaarten || []).filter((k) => !bekend.includes(k.kop)).map((k) => overzichtKaart(b, [k.kop, ''], k)).join('');
  return `
            <div class="dk-twee">
              <div class="dk-kolom">${kolom(OVERZICHT.links)}${extra}</div>
              <div class="dk-kolom">${kolom(OVERZICHT.rechts)}</div>
            </div>`;
}

// ----- Rapportages (14-rapportages-lijst, 19b, 19c, 18) -----
const RAPPORTAGETYPEN = [
  ['Gewicht', 'gewicht', 't'], ['Bloeddruk', 'hart', 'r'], ['Temperatuur', 'thermo', 'g'], ['Bloedsuiker', 'suiker', 'r'],
  ['Vocht inname', 'beker', 't'], ['Vocht uitscheiding', 'toilet', 'g'], ['Defecatie', 'rol', 't'], ['Medisch', 'kruisje', 'r'],
  ['Familie communicatie', 'familie', 'r'], ['Keten communicatie', 'keten', 't'], ['Stemming', 'smiley', 'b'], ['Saturatie', 'o2', 'b'],
  ['Pijnscore', 'pijn', 'r'], ['SOEP', 'soep', 'g'], ['Bristol-stoelgangschaal', 'bristol', 't'], ['Klinimetrie', 'grafiek', 't'], ['Fotorapportage', 'camera', 'b'],
];
const TYPE_ICOON = {
  gewicht: '<rect x="5" y="4" width="14" height="16" rx="3"/><path d="M9 4.5v2.5a3 3 0 0 0 6 0V4.5M12 9.5 13 7.5"/>',
  hart: '<path d="M12 20.5S3.5 15 3.5 9A4.5 4.5 0 0 1 12 6.6 4.5 4.5 0 0 1 20.5 9c0 6-8.5 11.5-8.5 11.5z"/><path d="M5 12h3.5l1.5-2.5 2.5 5 1.5-2.5H19"/>',
  thermo: '<path d="M10 4.5a2 2 0 0 1 4 0V14a3.5 3.5 0 1 1-4 0z"/><path d="M12 9v7"/>',
  suiker: '<path d="M3.5 9.5h9l2 2h3v4h-3l-2 2h-9z"/><circle cx="19.5" cy="17.5" r="1.5"/><path d="M7 9.5v-2h4v2"/>',
  beker: '<path d="M7 5h10l-1.5 15h-7zM8 10h8"/><path d="M12 3c1 1 1 1.5 0 2.5"/>',
  toilet: '<path d="M6 4h5v6H6zM11 10h7a6 6 0 0 1-6 6H9a3 3 0 0 1-3-3v-3M9 16v4h6v-4"/>',
  rol: '<path d="M5 4h11v16H5zM16 6h3v10h-3"/><circle cx="17.5" cy="11" r="2"/>',
  kruisje: '<path d="M9 3.5h6v5.5h5.5v6H15v5.5H9V15H3.5V9H9z"/>',
  familie: '<path d="M17 7.5A6 6 0 1 0 17 16.5M15 9.5a3 3 0 1 0 0 5"/>',
  keten: '<rect x="3.5" y="4" width="9" height="7" rx="1.5"/><rect x="11.5" y="13" width="9" height="7" rx="1.5"/><path d="M8 11v4h3.5M16 13V9h-3.5"/>',
  smiley: '<circle cx="12" cy="12" r="8.5"/><path d="M8.5 14c1.8 2 5.2 2 7 0M9 9.8v.4M15 9.8v.4"/>',
  o2: '<rect x="3.5" y="3.5" width="17" height="17" rx="3"/><circle cx="11" cy="12" r="3.5"/><path d="M16 15.5h2.5l-2.5 3h2.5"/>',
  pijn: '<path d="M3 15c2-4 4 3 6-1s4 3 6-1 4 3 6-1M7 9l1.5-3M11 8.5l1-3.5M15 9l1.5-3"/>',
  soep: '<rect x="4" y="3.5" width="16" height="17" rx="1.5"/><path d="M12 3.5v17M4 12h16"/>',
  bristol: '<path d="M4 18h16M6 18c0-3 2.5-4 6-4s6 1 6 4M8 14c0-2 2-3 4-3s4 1 4 3M10 11c0-1.5 1-2.5 2-2.5s2 1 2 2.5"/>',
  grafiek: '<path d="M4 4v16h16M7 15l4-4 3 2 5-6"/><circle cx="19" cy="7" r="1"/>',
  camera: '<path d="M4 8h3.5l1.5-2h6l1.5 2H20v11H4z"/><circle cx="12" cy="13" r="3.5"/><path d="M5 3.5v4M3 5.5h4"/>',
  doc: '<path d="M6.5 3H14l5 5v11.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19.5v-15A1.5 1.5 0 0 1 6.5 3zM13.5 3v5.5H19M8 12.5h8M8 15.5h8M8 18.5h5"/>',
};
const typeIcoon = (naam, kleur) => `<svg class="dk-type__icoon dk-kleur-${kleur}" viewBox="0 0 24 24" aria-hidden="true">${TYPE_ICOON[naam] || TYPE_ICOON.doc}</svg>`;
const typeVan = (naam) => RAPPORTAGETYPEN.find((t) => t[0] === naam);

// De tabs boven in de kaart Rapportages: de lijst, een vrije rapportage en het laatst gebruikte type.
function rapTabs(h, actief = 0, derde = ['Bloeddruk', 'hart', 'r'], nieuw = '') {
  const tab = (icoon, kleur, i) => `<span class="dk-rtab${i === actief ? ' is-actief' : ''}${kleur === 'r' ? ' dk-rtab--roze' : kleur === 'g' ? ' dk-rtab--geel' : ''}">${i === 0 ? h.onsIcoon('lijst') : typeIcoon(icoon, kleur)}</span>`;
  return `<div class="dk-rtabs"${nieuw ? '' : ' aria-hidden="true"'}>${tab('lijst', 'b', 0)}${nieuw || tab('doc', 'b', 1)}${derde ? tab(derde[1], derde[2], 2) : ''}</div>`;
}
const blauwPlus = (h) => `<span class="dk-blauwplus" aria-hidden="true">${h.onsIcoon('plus')}</span>`;

function rapFilters(b, knop) {
  const { h } = b;
  return `
              <div class="dk-rfilters" aria-hidden="${knop ? 'false' : 'true'}">
                <span class="dk-rzoek">${h.onsIcoon('zoek')}Zoeken</span>
                ${nepSelect(h, 'Alle rapportages')}
                ${nepSelect(h, h.ONS_LIJST)}
                ${knop || '<span class="ons__knop ons__knop--paarsrand">Acties bekijken</span>'}
              </div>
              <div class="dk-rdatum" aria-hidden="true"><span class="dk-datumveld">DD-MM-YYYY</span> t/m <span class="dk-datumveld">DD-MM-YYYY</span><span class="dk-vinkje"></span>verborgen rapportages</div>`;
}

// Eén rapportage in de lijst. "Joost Hendriks · gisteren 21.40" geeft de auteur en het moment.
function rapItem(b, k) {
  const { h } = b;
  const { esc, onsIcoon } = h;
  const ster = /^★\s*/.test(k.kop || '');
  const [wie, wanneer = ''] = (k.kop || '').replace(/^★\s*/, '').split(' · ');
  const type = typeVan(wie);
  const [dag, ...tijd] = wanneer.split(' ');
  const moment = wanneer.match(/^\d\d-\d\d-\d{4}$/) ? [wanneer] : [dag, tijd.join(' ')].filter(Boolean);
  const auteur = type ? moment : [wie, ...moment];
  const tekst = (k.regels || []).map((r, i) => `<p>${type && i === 0 ? `${esc(type[0])}: ` : ''}${b.regel(r, type && i === 0 ? 'dk-ritem__waarde' : 'dk-ritem__regel')}</p>`).join('');
  return `
              <div class="dk-ritem">
                <span class="dk-ritem__icoon">${type ? typeIcoon(type[1], type[2]) : typeIcoon('doc', 'b')}</span>
                <p class="dk-ritem__wie">${auteur.map((x) => esc(x)).join('<br>')}</p>
                <div class="dk-ritem__tekst">${tekst}</div>
                <span class="dk-ritem__acties" aria-hidden="true">${onsIcoon('slot')}<span class="${ster ? 'is-ster' : ''}">${onsIcoon('ster')}</span>${onsIcoon('verberg')}${onsIcoon('prullenbak')}</span>
              </div>`;
}

function rapportageLijst(b, kaarten, { plus, acties, tabs = true, nieuw = '' } = {}) {
  return `
            <div class="ons__kaart dk-rkaart">
              ${tabs ? `<div class="dk-rkop">${rapTabs(b.h, 0, undefined, nieuw)}${plus || blauwPlus(b.h)}</div>` : ''}
              ${rapFilters(b, acties)}
              <div class="dk-ritems">${kaarten.map((k) => rapItem(b, k)).join('')}</div>
            </div>`;
}

// De lijst van een eerdere stap met de titel Rapportages, als achtergrond van een venster of onder een formulier.
const eerdereKaarten = (d, n, test) => {
  for (let i = n - 1; i >= 0; i -= 1) if (test(d.stappen[i].pagina || {})) return d.stappen[i].pagina.kaarten || [];
  return [];
};

function schermRapportages(b, p) {
  const plus = (p.knoppen || []).includes('+') ? b.knop('+', 'dk-blauwplus', b.h.onsIcoon('plus')) : '';
  const acties = (p.knoppen || []).includes('Acties bekijken') ? b.knop('Acties bekijken', 'ons__knop ons__knop--paarsrand') : '';
  // Het tweede icoontje boven de lijst opent Nieuw - Rapportage (19b). De plus is voor metingen en andere soorten.
  const nieuw = (p.knoppen || []).includes('Nieuwe rapportage') ? b.knop('Nieuwe rapportage', 'dk-rtab', typeIcoon('doc', 'b')) : '';
  return rapportageLijst(b, p.kaarten || [], { plus, acties, nieuw });
}

// Nieuw - Rapportage (19b). Wordt ook gebruikt door de koppelstap `nieuwe-rapportage`.
function rapportageFormulier(h, { tekst = '', opslaan, ster, velden = '', rijen = '' }) {
  const { esc, onsIcoon } = h;
  return `
            <div class="ons__kaart dk-rkaart dk-rform">
              <div class="dk-rkop">${rapTabs(h, 1, ['SOEP', 'soep', 'g'])}${blauwPlus(h)}</div>
              <div class="dk-rform__kop"><h3 class="dk-rform__titel">Nieuw - Rapportage</h3><span class="dk-rform__rechts">${ster || `<span class="dk-ster" aria-hidden="true">${onsIcoon('ster')} Markeer als belangrijk</span>`}${opslaan}</span></div>
              <span class="dk-tekstvak${tekst ? '' : ' is-leeg'}">${esc(tekst)}</span>
              <p class="dk-schakel" aria-hidden="true"><span class="ons__toggle"></span>Metingenherkenning <span class="ons__info">i</span></p>
              <p class="dk-uitleg">Metingen worden tijdens het schrijven automatisch herkend en als losse metingen toegevoegd. Je hoeft deze dus niet meer apart in te voeren.</p>
              <div class="dk-rrijen">
                ${velden}
                ${rijen || `
                <div class="dk-rrij" aria-hidden="true"><span class="dk-rrij__lbl">Acties voor:</span>${nepSelect(h, '')}</div>
                <div class="dk-rrij" aria-hidden="true"><span class="dk-rrij__lbl">Zichtbaar voor:</span>${nepSelect(h, 'Iedereen (of kies deskundigheden)')}</div>
                <div class="dk-rrij" aria-hidden="true"><span class="dk-rrij__lbl">Koppel aan episodes</span>${nepSelect(h, 'Selecteer episodes')}</div>`}
              </div>
            </div>`;
}

const groenOpslaan = (b, t = 'Opslaan') => b.knop(t, 'ons__knop ons__knop--groen', `${b.h.onsIcoon('vink', 'ons__knop-icoon')} ${b.h.esc(t)}`);
const sterKnop = (b, t) => b.knop(t, `dk-ster${/★/.test(t) ? ' is-aan' : ''}`, `${b.h.onsIcoon('ster')} ${b.h.esc(t.replace(/^★\s*/, ''))}`);

function schermNieuweRapportage(b, p, d, n) {
  const { h } = b;
  const veld = (label) => (p.velden || []).find((v) => v.label === label);
  const keuze = (label, standaard) => {
    const v = veld(label);
    if (!v?.waarde || v.waarde === 'Iedereen') return nepSelect(h, standaard);
    if (label === 'Acties voor') return `<span class="ons__nep-select dk-chips"><span class="dk-chip">${h.onsIcoon('netwerk', 'dk-chip__icoon')}${h.esc(v.waarde)} ×</span></span>`;
    return `<span class="ons__nep-select dk-chips"><span class="dk-chip">${h.esc(v.waarde)} ×</span></span>`;
  };
  const rijen = `
                <div class="dk-rrij" aria-hidden="true"><span class="dk-rrij__lbl">Acties voor:</span>${keuze('Acties voor', '')}</div>
                <div class="dk-rrij" aria-hidden="true"><span class="dk-rrij__lbl">Zichtbaar voor:</span>${keuze('Zichtbaar voor', 'Iedereen (of kies deskundigheden)')}</div>
                <div class="dk-rrij" aria-hidden="true"><span class="dk-rrij__lbl">Koppel aan episodes</span>${keuze('Koppel aan episodes', 'Selecteer episodes')}</div>`;
  const sterTekst = (p.knoppen || []).find((t) => /belangrijk/i.test(t));
  const vorige = eerdereKaarten(d, n, (q) => q.titel === 'Rapportages');
  return `
            ${rapportageFormulier(h, { tekst: veld('Tekst')?.waarde || '', opslaan: (p.knoppen || []).includes('Opslaan') ? groenOpslaan(b) : '', ster: sterTekst ? sterKnop(b, sterTekst) : '', rijen })}
            ${rapportageLijst(stilBouwer(h), vorige, { tabs: false })}`;
}

// Nieuw - Gewicht, Nieuw - Vocht inname en andere metingen, opgebouwd zoals Nieuw - Bloeddruk (19c).
function schermNieuweMeting(b, p) {
  const { h } = b;
  const { esc } = h;
  const naam = (p.titel || '').replace(/^Nieuw - /, '');
  const type = typeVan(naam) || ['', 'doc', 'b'];
  const rij = (v) => {
    if (v.label === 'Opmerking') return `<div class="dk-mrij dk-mrij--groot"><span class="dk-mrij__lbl">Opmerking</span><span class="dk-tekstvak dk-tekstvak--meting${v.waarde ? '' : ' is-leeg'}">${esc(v.waarde)}</span></div>`;
    if (/^(Start)?tijd$/i.test(v.label)) return `<div class="dk-mrij"><span class="dk-mrij__lbl">${esc(v.label)}</span>${invoer(h, v.waarde, 'dk-invoer--tijd')}<span class="dk-mrij__eenheid">vandaag</span></div>`;
    const m = v.label.match(/^(.+) \((.+)\)$/) || [];
    const w = (v.waarde || '').match(/^([\d.,]+)\s*(\D+)$/) || [];
    const label = m[1] || v.label;
    const eenheid = m[2] || w[2] || '';
    return `<div class="dk-mrij"><span class="dk-mrij__lbl">${esc(label)}</span>${invoer(h, w[1] || v.waarde, 'dk-invoer--kort')}<span class="dk-mrij__eenheid">${esc(eenheid)}</span></div>`;
  };
  const velden = p.velden || [];
  const heeftTijd = velden.some((v) => /^(Start)?tijd$/i.test(v.label));
  const sterTekst = (p.knoppen || []).find((t) => /belangrijk/i.test(t));
  return `
            <div class="ons__kaart dk-rkaart dk-rform">
              <div class="dk-rkop">${rapTabs(h, 2, type)}${blauwPlus(h)}</div>
              <div class="dk-rform__kop"><h3 class="dk-rform__titel">${esc(p.titel || '')}</h3><span class="dk-rform__rechts">${sterTekst ? sterKnop(b, sterTekst) : `<span class="dk-ster" aria-hidden="true">${h.onsIcoon('ster')} Markeer als belangrijk</span>`}${(p.knoppen || []).includes('Opslaan') ? groenOpslaan(b) : ''}</span></div>
              <p class="dk-mgroep">${esc(naam)}</p>
              <div class="dk-meting">
                ${velden.map(rij).join('')}
                ${heeftTijd ? '' : `<div class="dk-mrij" aria-hidden="true"><span class="dk-mrij__lbl">Starttijd</span>${invoer(h, '', 'dk-invoer--tijd')}<span class="dk-mrij__eenheid">vandaag</span></div>`}
              </div>
              <div class="dk-rrijen">
                <div class="dk-rrij" aria-hidden="true"><span class="dk-rrij__lbl">Acties voor:</span>${nepSelect(h, '')}</div>
                <div class="dk-rrij" aria-hidden="true"><span class="dk-rrij__lbl">Zichtbaar voor:</span>${nepSelect(h, 'Iedereen (of kies deskundigheden)')}</div>
              </div>
            </div>`;
}

// Venster Rapportagetype toevoegen (18): zeventien tegels met icoon. Typen uit de casus die er niet tussen staan, komen achteraan.
function vensterRapportagetype(b, p) {
  const { h } = b;
  const opties = p.venster.opties || [];
  const extra = opties.filter((o) => !typeVan(o)).map((o) => [o, 'doc', 'b']);
  const tegel = ([naam, icoon, kleur]) => {
    const inhoud = `${typeIcoon(icoon, kleur)}<span>${h.esc(naam)}</span>`;
    return opties.includes(naam) ? b.optie(naam, 'dk-type', inhoud) : `<span class="dk-type" aria-hidden="true">${inhoud}</span>`;
  };
  return `
            <div class="dk-venster dk-venster--blauw" role="presentation">
              <p class="dk-venster__kop">${h.esc(p.venster.titel)}<span aria-hidden="true">${h.onsIcoon('kruis')}</span></p>
              <div class="dk-typen">${[...RAPPORTAGETYPEN, ...extra].map(tegel).join('')}</div>
            </div>`;
}

// ----- Vragenlijsten (12, 12b, 12c) -----
const STATUSSEN = ['Concept', 'Actueel', 'Gearchiveerd'];
function vragenlijstTabel(b, kaarten) {
  const { h } = b;
  const { esc, onsIcoon } = h;
  const kop = (t, icoon) => `<span class="dk-vtabel__kop">${esc(t)}${icoon ? onsIcoon(icoon, 'dk-sorteer') : ''}</span>`;
  const rijen = kaarten.flatMap((k) => (k.regels || []).map((r) => {
    const [titel, door = ''] = r.split(' · ');
    const status = STATUSSEN.includes(k.kop) ? k.kop : 'Actueel';
    return `<div class="dk-vtabel__rij"><span><span class="dk-status dk-status--${status.toLowerCase()}">${esc(status)}</span></span><span>${b.regel(r, 'dk-vtabel__titel', esc(titel))}</span><span class="dk-vtabel__extra">${esc(door.replace(/^gemaakt door /, ''))}</span><span class="dk-vtabel__extra"></span><span class="dk-vtabel__extra"></span><span class="dk-vtabel__extra"></span></div>`;
  })).join('');
  return `
            <div class="dk-vtabel">
              <div class="dk-vtabel__rij dk-vtabel__rij--kop" aria-hidden="true">${kop('Status', 'sorteer')}${kop('Titel', 'sorteer')}<span class="dk-vtabel__extra">${kop('Gemaakt door', 'sorteer')}</span><span class="dk-vtabel__extra">${kop('Aangepast op', 'af')}</span><span class="dk-vtabel__extra">${kop('Gemaakt op', 'sorteer')}</span><span class="dk-vtabel__extra">${kop('Episodes')}</span></div>
              ${rijen}
            </div>`;
}

function schermVragenlijsten(b, p) {
  const { h } = b;
  const tabs = p.tabs?.length ? p.tabs : ['Actueel', 'Archief'];
  const nieuw = (p.knoppen || []).find((t) => /Nieuwe vragenlijst/.test(t));
  return `
            <div class="dk-paginakop"><h3 class="dk-paginatitel">${h.esc(p.titel || 'Vragenlijsten')}</h3>${nieuw ? b.knop(nieuw, 'ons__knop ons__knop--paars ons__knop--groot', `${h.onsIcoon('plus', 'ons__knop-icoon')} ${h.esc(nieuw.replace(/^\+\s*/, ''))}`) : ''}</div>
            <div class="dk-tabs">${tabs.map((t, i) => (p.tabs?.includes(t) ? b.tab(t, `dk-tab${i === 0 ? ' is-actief' : ''}`) : `<span class="dk-tab${i === 0 ? ' is-actief' : ''}" aria-hidden="true">${h.esc(t)}</span>`)).join('')}</div>
            <p class="dk-veldlabel" aria-hidden="true">Zoeken</p>
            <span class="dk-zoekveld" aria-hidden="true">${h.onsIcoon('zoek')}Zoeken op titel</span>
            ${vragenlijstTabel(b, p.kaarten || [])}`;
}

const VRAGENLIJST_UITLEG = { 'Mikzo Kompas® (2025.1)': 'Mikzo Kompas® (2025.1)', 'Omaha inventarisatie': 'Vragenlijst ter inventarisatie van zorgbehoefte volgens Omaha systematiek' };
function vensterVragenlijst(b, p) {
  const { h } = b;
  return `
            <div class="dk-venster dk-venster--wit" role="presentation">
              <p class="dk-venster__kop">${h.esc(p.venster.titel)}<span aria-hidden="true">${h.onsIcoon('kruis')}</span></p>
              <span class="dk-venster__zoek" aria-hidden="true">${h.onsIcoon('zoek')}Zoek vragenlijst</span>
              <div class="dk-vkeuzes">${p.venster.opties.map((o) => b.optie(o, 'dk-vkeuze', `<span class="dk-vkeuze__titel">${h.esc(o)}</span><span class="dk-vkeuze__uitleg">${h.esc(VRAGENLIJST_UITLEG[o] || '')}</span>`)).join('')}</div>
            </div>`;
}

// Eén vragenlijst bekijken (12c): statusbalk, Meer en Wijzig, en de secties.
function schermVragenlijst(b, p, d, n) {
  const { h } = b;
  const { esc, onsIcoon } = h;
  const status = kaartVan(p, 'Status');
  // Zonder kaart Status geldt de status uit de lijst van een eerdere stap.
  const inLijst = eerdereKaarten(d, n, (q) => q.titel === 'Vragenlijsten').find((k) => STATUSSEN.includes(k.kop) && (k.regels || []).some((r) => r.split(' · ')[0] === p.titel));
  const nu = status?.regels?.[0] || inLijst?.kop || 'Concept';
  const knoppen = p.knoppen || [];
  const stappen = STATUSSEN.map((t) => (status?.regels?.includes(t) ? b.regel(t, `dk-stap${t === nu ? ' is-nu' : ''}`) : `<span class="dk-stap${t === nu ? ' is-nu' : ''}" aria-hidden="true">${esc(t)}</span>`)).join('<span class="dk-stap__lijn" aria-hidden="true"></span>');
  const secties = (p.kaarten || []).filter((k) => k.kop !== 'Status');
  return `
            <div class="dk-vkop"><h3 class="dk-vtitel">${esc(p.titel || '')}</h3></div>
            <div class="dk-statusbalk">
              <span class="dk-stappen">${stappen}${knoppen.includes('Volgende status') ? b.knop('Volgende status', 'ons__knop ons__knop--blauwrand') : ''}</span>
              <span class="dk-statusbalk__rechts">${knoppen.includes('Meer') ? b.knop('Meer', 'ons__knop ons__knop--blauwrand', `${onsIcoon('omlaag', 'ons__knop-icoon')} Meer`) : ''}${knoppen.includes('Wijzig') ? b.knop('Wijzig', 'ons__knop ons__knop--lucht', `${onsIcoon('potlood', 'ons__knop-icoon')} Wijzig`) : ''}</span>
            </div>
            ${secties.length ? `
            <div class="ons__kaart dk-vsecties">
              ${secties.map((k) => `
                <div class="dk-vsectie">
                  <p class="dk-vsectie__kop"><span aria-hidden="true">▼</span>${esc(k.kop)}</p>
                  ${(k.regels || []).map((r) => `<p class="dk-vsectie__antwoord">${b.regel(r, 'dk-ovz__regel')}</p>`).join('')}
                </div>`).join('')}
            </div>` : ''}`;
}

// Een vragenlijst invullen. Hiervan is geen schermafdruk: we gebruiken de opmaak van de vragen in 12c en de knop van 19b.
function schermVragenlijstInvullen(b, p) {
  const { h } = b;
  const { esc } = h;
  return `
            <div class="dk-vkop dk-vkop--knop"><h3 class="dk-vtitel">${esc(p.titel || '')}</h3><span class="dk-knoppen">${(p.knoppen || []).map((t) => (t === 'Opslaan' ? groenOpslaan(b) : b.knop(t))).join('')}</span></div>
            <div class="ons__kaart dk-vsecties">
              ${(p.velden || []).map((v) => `
                <div class="dk-vvraag">
                  <p class="dk-vvraag__lbl">${esc(v.label)}</p>
                  <span class="dk-invoer dk-invoer--breed${!v.waarde || isHint(v.waarde) ? ' is-leeg' : ''}">${esc(v.waarde || '')}</span>
                </div>`).join('')}
            </div>`;
}

// ----- Plan (13, 13b, 13c) -----
function planKop(h, { tabs = ['Zorgplan', 'Onvrijwillige zorg(0)'], tab, b, dagoverzicht } = {}) {
  const t = (naam, i) => (b && tab ? b.tab(naam, `dk-tab${i === 0 ? ' is-actief' : ''}`) : `<span class="dk-tab${i === 0 ? ' is-actief' : ''}" aria-hidden="true">${h.esc(naam)}</span>`);
  return `
            <div class="dk-tabs dk-tabs--plan">${tabs.map(t).join('')}</div>
            <div class="dk-plankop"><h3 class="dk-plantitel">Zorgplan</h3>${dagoverzicht || '<span class="ons__knop ons__knop--lucht" aria-hidden="true">Dagoverzicht</span>'}</div>`;
}

function zorgplanKaart(h, { kop, regels = [], knoppen = '', b, status = 'concept' }) {
  return `
            <div class="ons__kaart ons__concept dk-plan dk-plan--${status}">
              <div class="dk-plan__tekst">
                <p class="ons__concept-kop">${h.esc(kop)}</p>
                ${regels.map((r) => `<p>${b ? b.regel(r, 'dk-ovz__regel') : h.esc(r)}</p>`).join('')}
              </div>
              <div class="ons__concept-knoppen"><span class="dk-print" aria-hidden="true">${h.onsIcoon('print')}</span>${knoppen}</div>
            </div>`;
}

const planOnder = (h, aantal = 0) => `
            <p class="dk-rechtslink" aria-hidden="true">Toon alle zorgplannen (1)</p>
            <div class="dk-ovzblok" aria-hidden="true">
              <div class="dk-ovzblok__kop"><h3 class="dk-plantitel">Onvrijwillige zorg</h3><span class="dk-knoppen"><span class="ons__knop ons__knop--hoekig">Tijdlijn</span><span class="ons__knop ons__knop--hoekig">Onvoorziene zorg registreren</span><span class="ons__knop ons__knop--hoekig ons__knop--paars">Nieuwe onvrijwillige zorg</span></span></div>
              <div class="ons__kaart dk-juridisch">Juridische status</div>
              ${aantal ? '' : '<p class="dk-rechtslink">Toon alternatieven voor onvrijwillige zorg</p>'}
            </div>`;

// Een domein van het zorgplan met zijn doelen, zoals "A - Mijn Verhaal en Mijn Wensen" in 13b en de lijst in 13c.
const planDomein = (b, k) => `
            <p class="dk-domein">${b.h.esc(k.kop)}</p>
            <div class="ons__kaart dk-doelen">
              ${(k.regels || []).map((r) => `<div class="dk-doelregel">${/^Nog geen/.test(r) ? `<span class="dk-doelregel__leeg">${b.regel(r, 'dk-ovz__regel')}</span>` : `${b.regel(r, 'dk-doelregel__link')}${b.h.onsIcoon('rechts', 'dk-doelregel__pijl')}`}</div>`).join('')}
            </div>`;

function schermPlan(b, p) {
  const { h } = b;
  const tabs = p.tabs?.length ? p.tabs : ['Zorgplan', 'Onvrijwillige zorg(0)'];
  const statusKaart = (p.kaarten || []).find((k) => /zorgplan$/i.test(k.kop || ''));
  const domeinen = (p.kaarten || []).filter((k) => k !== statusKaart).map((k) => (k.kop === 'Doelen' ? { ...k, kop: 'Doelen' } : k));
  const dag = (p.knoppen || []).includes('Dagoverzicht') ? b.knop('Dagoverzicht', 'ons__knop ons__knop--lucht') : '';
  const telling = (tabs.find((t) => /\(\d+\)/.test(t)) || '').match(/\((\d+)\)/)?.[1];
  return `
            ${planKop(h, { tabs, tab: true, b, dagoverzicht: dag })}
            ${statusKaart ? zorgplanKaart(h, { kop: statusKaart.kop, regels: statusKaart.regels, b, status: /^Concept/.test(statusKaart.kop) ? 'concept' : 'actueel', knoppen: '<span class="ons__knop ons__knop--rand" aria-hidden="true">Wijzigen</span>' }) : ''}
            ${domeinen.map((k) => planDomein(b, k)).join('')}
            ${planOnder(h, Number(telling || 0))}`;
}

// Eén doel uit het zorgplan, met de acties eronder (opmaak van 13b).
function schermPlanDoel(b, p) {
  const { h } = b;
  return `
            <p class="dk-domein">${h.esc(p.titel || '')}</p>
            <div class="ons__kaart dk-doeldetail">
              ${(p.kaarten || []).map((k) => `
                <div class="dk-doeldetail__rij">
                  <p class="dk-doeldetail__kop">${h.esc(k.kop || '')}</p>
                  <div class="dk-doeldetail__regels">${(k.regels || []).map((r) => `<p>${b.regel(r, 'dk-ovz__regel')}</p>`).join('')}</div>
                </div>`).join('')}
            </div>
            <p class="dk-rechtslink" aria-hidden="true">Toon alle zorgplannen (1)</p>`;
}

// ----- Agenda van de cliënt (15) -----
function schermAgenda(b, p) {
  const { h } = b;
  const { esc, onsIcoon } = h;
  const knoppen = p.knoppen || [];
  const item = (r) => {
    const [tijd, wat] = r.includes(' · ') ? r.split(' · ') : ['', r];
    return `
                <div class="dk-agitem">
                  <span class="dk-vinkje" aria-hidden="true"></span>
                  <span class="dk-agitem__tijd">${esc(tijd)}</span>
                  <span class="dk-agitem__wat">${onsIcoon('kalender', 'dk-agitem__icoon')}${b.regel(r, 'dk-agitem__titel', esc(wat))}</span>
                  <span class="dk-agitem__acties" aria-hidden="true">${onsIcoon('potlood')}${onsIcoon('prullenbak')}</span>
                </div>`;
  };
  return `
            <div class="dk-agbalk">
              <span class="dk-week" aria-hidden="true">${onsIcoon('links')}<b>${esc(p.titel || 'Week 41 - 2026')}</b>${onsIcoon('rechts')}</span>
              <span class="ons__nep-select dk-chips dk-agfilter" aria-hidden="true">${['Afspraken', 'Planning', 'Handelingen', 'Signaleringen'].map((t) => `<span class="dk-chip">${t} ×</span>`).join('')}</span>
              <span class="dk-knoppen">${knoppen.includes('Afdrukken') ? b.knop('Afdrukken', 'ons__knop ons__knop--hoekig') : ''}${knoppen.includes('Toevoegen') ? b.knop('Toevoegen', 'ons__knop ons__knop--hoekig ons__knop--paars', `Toevoegen ${onsIcoon('omlaag', 'ons__knop-icoon')}`) : ''}</span>
            </div>
            ${(p.kaarten || []).map((k) => `
              <div class="ons__kaart dk-agdag">
                <p class="dk-agdag__kop">${esc(k.kop || '')}</p>
                ${(k.regels || []).map(item).join('')}
              </div>`).join('')}`;
}

// ----- Klinimetrie (16) -----
function schermKlinimetrie(b, p) {
  const { h } = b;
  const { esc } = h;
  const [vet, ...licht] = (p.titel || 'Klinimetrie - Overzicht').split(' - ');
  const tabs = p.tabs?.length ? p.tabs : ['Klinimetrie', 'Zorgvraagtypering', 'Tijdlijn'];
  const nieuw = (p.knoppen || []).find((t) => /Nieuwe meting/.test(t));
  const leeg = (p.kaarten || []).flatMap((k) => k.regels || []);
  return `
            <div class="dk-kkop"><h3 class="dk-ktitel">${esc(vet)}${licht.length ? `<span> - ${esc(licht.join(' - '))}</span>` : ''}</h3>${nieuw ? b.knop(nieuw, 'ons__knop ons__knop--lucht', `${h.onsIcoon('plus', 'ons__knop-icoon')} ${esc(nieuw.replace(/^\+\s*/, ''))}`) : ''}</div>
            <div class="dk-tabs dk-tabs--klini">${tabs.map((t, i) => b.tab(t, `dk-tab${i === 0 ? ' is-actief' : ''}`)).join('')}</div>
            ${leeg.map((r) => `<p class="dk-kleeg">${b.regel(r, 'dk-ovz__regel')}</p>`).join('') || '<p class="dk-kleeg">Er zijn geen metingen om weer te geven voor deze cliënt.</p>'}`;
}

// ----- Administratie, Algemeen (24-documenten, dat in de map Algemeen toont) -----
const PERSONALIA = [['Naam', null], ['Cliëntnummer', '12345'], ['Burgerlijke staat', 'Onbekend'], ['Nationaliteit', 'NL'], ['Spreektaal', 'Nederlands'], ['Caren status', 'Niet gekoppeld']];
function schermAlgemeen(b, p, d) {
  const { h } = b;
  const { esc, onsIcoon } = h;
  const pers = kaartVan(p, 'Personalia');
  const casusRij = (r) => { const [l, ...w] = r.split(': '); return { l, w: w.join(': '), r }; };
  const eigen = (pers?.regels || []).map(casusRij);
  const rijen = [];
  for (const [l, w] of PERSONALIA) {
    const e = eigen.find((x) => x.l === l);
    rijen.push(e || { l, w: w ?? d.client });
    if (l === 'Naam') eigen.filter((x) => !PERSONALIA.some(([pl]) => pl === x.l)).forEach((x) => rijen.push(x));
  }
  const rij = (x) => `<span class="dk-alg__lbl">${esc(x.l)}</span>${x.r ? b.regel(x.r, 'dk-alg__waarde', esc(x.w)) : `<span class="dk-alg__waarde${x.l === 'Caren status' ? ' dk-oranje' : ''}">${esc(x.w)}</span>`}`;
  const kaart = (kop, body, plus = false) => `<section class="ons__kaart dk-ovz dk-adm"><div class="dk-ovz__kop"><h3 class="dk-kaarttitel dk-kaarttitel--adm">${esc(kop)}</h3>${plus ? `<span class="dk-rondplus" aria-hidden="true">${onsIcoon('pluscirkel')}</span>` : ''}</div>${body}</section>`;
  const leeg = (t) => `<p class="dk-adm__leeg">${esc(t)}</p>`;
  const loc = kaartVan(p, 'Locaties');
  const regelsVan = (k) => (k.regels || []).map((r) => `<p class="dk-ovz__tekst">${b.regel(r, 'dk-ovz__regel')}</p>`).join('');
  return `
            <div class="dk-twee">
              <div class="dk-kolom">
                ${kaart('Personalia', `<div class="dk-alg">${rijen.map(rij).join('')}</div>`)}
                ${kaart('Locaties', loc ? regelsVan(loc) : leeg('Er zijn geen locaties voor deze cliënt.'))}
                ${kaart('Vervoersinstellingen', '<p class="dk-alg__onder"><span class="dk-alg__lbl">Individueel vervoer</span><b>Nee</b></p><p class="dk-alg__onder"><span class="dk-alg__lbl">Gecontracteerd vervoer</span><b>Nee</b></p>')}
                ${kaart('Gebruik dossier- en persoonsgegevens', leeg('Geen dossier- en persoonsgegevens gevonden voor deze cliënt'))}
              </div>
              <div class="dk-kolom">
                ${kaart('Identiteitsgegevens', leeg('Geen identiteitsgegevens beschikbaar voor deze cliënt.'))}
                ${kaart('Adressen', leeg('Er zijn geen adressen voor deze cliënt.'), true)}
                ${kaart('Zorgstatus', leeg('Geen actieve zorgopname'), true)}
                ${kaart('Gekoppelde passen', leeg('Er zijn geen gekoppelde passen voor deze cliënt.'), true)}
              </div>
            </div>`;
}

// ----- Nieuwe episode. Velden en volgorde zoals de koppelstap `nieuwe-episode`. -----
function episodeFormulier(h, { client, titel = '', datum = '', eind = '', hoofddoel = '', opslaan = '', extra = '' }) {
  const { esc } = h;
  return `
            ${client}
            <div class="dk-vkop dk-vkop--knop"><h3 class="dk-paginatitel">Nieuwe episode</h3>${opslaan}</div>
            <div class="ons__kaart ons__formulier dk-epform">
              <div class="ons__rij3">
                <div class="ons__veld"><span class="ons__lbl">Titel<b>*</b></span><span class="ons__titelveld"><span class="ons__invoer ons__invoer--kort">${esc(titel)}</span><span class="ons__ster"><span aria-hidden="true">★</span> Markeer als belangrijk</span></span></div>
              </div>
              <div class="ons__rij3">
                <div class="ons__veld"><span class="ons__lbl">Startdatum<b>*</b></span><span class="ons__invoer ons__datum">${esc(datum || 'DD-MM-YYYY')}</span></div>
                <div class="ons__veld"><span class="ons__lbl">Einddatum</span><span class="ons__invoer ons__datum${eind ? '' : ' is-leeg'}">${esc(eind || 'DD-MM-YYYY')}</span></div>
                <div class="ons__veld"><span class="ons__lbl">Evaluatiedatum</span><span class="ons__invoer ons__datum is-leeg">DD-MM-YYYY</span></div>
              </div>
              <div class="ons__veld"><span class="ons__lbl">Diagnose</span><span class="dk-koppel" aria-hidden="true">${h.onsIcoon('plus', 'ons__knop-icoon')} Koppel diagnoses</span></div>
              <div class="ons__rij2">
                <div class="ons__veld"><span class="ons__lbl">Hoofddoel</span><span class="ons__invoer ons__tekstvak${hoofddoel ? '' : ' is-leeg'}">${esc(hoofddoel || 'Optioneel')}</span></div>
                <div>
                  <div class="ons__veld"><span class="ons__lbl">Relevant voor</span>${nepSelect(h, h.ONS_LIJST)}</div>
                  <div class="ons__veld"><span class="ons__lbl">Zichtbaar voor</span>${nepSelect(h, h.ONS_LIJST)}</div>
                </div>
              </div>
            </div>
            ${extra}`;
}

function schermNieuweEpisode(b, p, d) {
  const w = (l) => (p.velden || []).find((v) => v.label === l)?.waarde || '';
  return episodeFormulier(b.h, { client: '', titel: w('Titel'), datum: w('Startdatum'), eind: w('Einddatum'), hoofddoel: w('Hoofddoel'), opslaan: (p.knoppen || []).includes('Opslaan') ? groenOpslaan(b) : '' });
}

// ----- Geen toegang en escaleren. Hiervan is geen schermafdruk: opgebouwd met de kaarten en knoppen van Nedap ONS. -----
function schermGeenToegang(b, p) {
  const { h } = b;
  const k = (p.kaarten || [])[0] || {};
  return `
            <div class="ons__kaart dk-toegang">
              ${h.onsIcoon('slot', 'dk-toegang__slot')}
              <h3 class="dk-paginatitel">${h.esc(k.kop || p.titel || '')}</h3>
              ${(k.regels || []).map((r) => `<p>${b.regel(r, 'dk-ovz__regel')}</p>`).join('')}
              <span class="dk-knoppen">${(p.knoppen || []).map((t) => b.knop(t, 'ons__knop ons__knop--paars ons__knop--groot')).join('')}</span>
            </div>`;
}

function vensterEscaleren(b, p) {
  const { h } = b;
  return `
            <div class="dk-venster dk-venster--wit dk-venster--smal" role="presentation">
              <p class="dk-venster__kop">${h.esc(p.titel || '')}<span aria-hidden="true">${h.onsIcoon('kruis')}</span></p>
              ${(p.velden || []).map((v) => `<p class="dk-veldlabel">${h.esc(v.label)}<b>*</b></p><span class="dk-tekstvak dk-tekstvak--klein">${h.esc(v.waarde || '')}</span>`).join('')}
              <span class="dk-venster__knoppen">${(p.knoppen || []).map((t) => b.knop(t, t === 'Annuleren' ? 'ons__knop ons__knop--hoekig' : 'ons__knop ons__knop--hoekig ons__knop--paars')).join('')}</span>
            </div>`;
}

// Welk scherm van Nedap ONS hoort bij een stap? Een casus mag het zelf zeggen met `pagina.scherm`.
function schermSoort(s) {
  const p = s.pagina || {};
  if (p.scherm) return p.scherm;
  const t = p.titel || '';
  const v = p.venster?.titel || '';
  if (v === 'Rapportagetype toevoegen') return 'rapportagetype';
  if (/^Maak een nieuwe vragenlijst/.test(v)) return 'vragenlijst-kiezen';
  if (t === 'Geen toegang') return 'geen-toegang';
  if (t === 'Escaleren') return 'escaleren';
  if (t === 'Nieuwe episode') return 'nieuwe-episode';
  if (t === 'Nieuw - Rapportage') return 'nieuwe-rapportage';
  if (/^Nieuw - /.test(t)) return 'nieuwe-meting';
  if (t === 'Rapportages') return 'rapportages';
  if (s.menu === 'Vragenlijsten') return t === 'Vragenlijsten' ? 'vragenlijsten' : p.velden?.length ? 'vragenlijst-invullen' : 'vragenlijst';
  if (s.menu === 'Plan') return p.tabs?.length ? 'plan' : 'plan-doel';
  if (s.menu === 'Agenda') return 'agenda';
  if (s.menu === 'Klinimetrie') return 'klinimetrie';
  if (s.menu === 'Algemeen') return 'algemeen';
  return 'overzicht';
}

// Per scherm: de inhoud, het venster eroverheen, de kruimel boven de cliëntkop en welk menu-item actief is.
const SCHERMEN = {
  overzicht: { inhoud: schermOverzicht },
  rapportages: { inhoud: schermRapportages },
  rapportagetype: { venster: vensterRapportagetype, achter: (b, p, d, n) => rapportageLijst(stilBouwer(b.h), eerdereKaarten(d, n, (q) => q.titel === 'Rapportages')), menu: 'Rapportages' },
  'nieuwe-rapportage': { inhoud: schermNieuweRapportage, menu: 'Rapportages' },
  'nieuwe-meting': { inhoud: schermNieuweMeting, menu: 'Rapportages' },
  vragenlijsten: { inhoud: schermVragenlijsten },
  'vragenlijst-kiezen': { venster: vensterVragenlijst, achter: (b, p, d, n) => schermVragenlijsten(stilBouwer(b.h), { kaarten: eerdereKaarten(d, n, (q) => q.titel === 'Vragenlijsten'), knoppen: ['+ Nieuwe vragenlijst'] }), menu: 'Vragenlijsten' },
  vragenlijst: { inhoud: schermVragenlijst, kruimel: 'Vragenlijsten - Overzicht' },
  'vragenlijst-invullen': { inhoud: schermVragenlijstInvullen, kruimel: 'Vragenlijsten - Overzicht' },
  plan: { inhoud: schermPlan },
  'plan-doel': { inhoud: schermPlanDoel, kruimel: 'Zorgplan - Overzicht' },
  agenda: { inhoud: schermAgenda },
  klinimetrie: { inhoud: schermKlinimetrie },
  algemeen: { inhoud: schermAlgemeen },
  'nieuwe-episode': { inhoud: schermNieuweEpisode, kruimel: 'Episodes – Overzicht', menu: 'Overzicht' },
  'geen-toegang': { inhoud: schermGeenToegang, client: false },
  escaleren: { venster: vensterEscaleren, achter: (b, p) => schermGeenToegang(stilBouwer(b.h), { titel: 'Geen toegang', kaarten: [{ kop: 'Je hebt geen toegang tot dit dossier' }], knoppen: ['Escaleren'] }), client: false },
};

// Waarschuwingen staan in Nedap ONS ook als label in de cliëntkop. We nemen ze uit de kaart Waarschuwingen van de casus.
const labelsVan = (d) => d.labels || [...new Set(d.stappen.flatMap((s) => (s.pagina?.kaarten || []).filter((k) => k.kop === 'Waarschuwingen').flatMap((k) => k.regels || [])).filter((r) => !/^Geen /.test(r)))];

// Het kader van elk ONS-scherm: bovenbalk, menu links en de inhoud in een kolom zoals in Nedap ONS.
function onsFrame(h, { menu, menuHtml, inhoud, venster = '', klasse = '', label = 'Nedap ONS', na = '' }) {
  const module = h.ONS_ADMIN.includes(menu) ? 'Administratie' : 'Dossier';
  return `
      <div class="ons ${klasse}${venster ? ' ons--venster' : ''}" role="group" aria-label="${h.esc(label)}">
        ${h.onsBovenbalk(module)}
        <div class="ons__lijf">
          ${menuHtml}
          <div class="ons__inhoud"><div class="ons__kolom">${inhoud}</div>${venster}</div>
        </div>
        ${na}
      </div>`;
}

const onsDelen = { onsFrame, rapportageFormulier, rapportageLijst, episodeFormulier, zorgplanKaart, planKop, planOnder, schermSoort, labelsVan };

function onsMenuMetDoel(h, ctx, actief, doel) {
  const item = ([naam, icoon], aan, admin) => {
    const inhoud = `${h.onsIcoon(icoon)}<span>${h.esc(naam)}</span>`;
    const raak = !admin || naam !== 'Overzicht' ? isDoel(doel, 'menu', naam) : false;
    const magKlik = !(admin && naam === 'Overzicht');
    if (ctx.modus === 'zelf' || raak) return `<li>${onderdeel(h, ctx, { inhoud, klasse: `ons__menu-item${aan && !raak ? ' is-actief' : ''}`, label: naam, doel: raak && magKlik })}</li>`;
    return `<li class="ons__menu-item${aan ? ' is-actief' : ''}" aria-hidden="true">${inhoud}</li>`;
  };
  return h.onsMenu(actief, { item, verborgen: false });
}

function onsScherm(h, ctx, d, s) {
  const n = d.stappen.indexOf(s);
  const soort = schermSoort(s);
  const def = SCHERMEN[soort] || SCHERMEN.overzicht;
  const p = s.pagina || {};
  const b = bouwers(h, ctx, s.doel);
  const menu = s.menu || def.menu || 'Overzicht';
  const client = def.client === false || !d.client ? '' : h.onsClient({ naam: d.client, labels: labelsVan(d), kruimel: def.kruimel });
  const inhoud = def.venster ? def.achter(b, p, d, n) : def.inhoud(b, p, d, n);
  const venster = def.venster ? def.venster(b, p, d, n) : '';
  return onsFrame(h, {
    menu, klasse: `ons--doorklik ons--${soort}${ctx.modus === 'zelf' ? ' ons--zelf' : ''}`,
    menuHtml: onsMenuMetDoel(h, ctx, menu, s.doel),
    inhoud: `${client}${inhoud}${rest(b, p)}`,
    venster,
  });
}

// Het neutrale scherm van een app op de telefoon.
function telPagina(h, ctx, p = {}, doel) {
  const { esc } = h;
  const knop = (t) => onderdeel(h, ctx, { inhoud: esc(t), klasse: 'tel__knop', label: isDoel(doel, 'knop', t) ? (doel.label || t) : t, doel: isDoel(doel, 'knop', t), extra: ' dk-stil' });
  const tab = (t, j) => {
    const raak = isDoel(doel, 'tab', t);
    if (ctx.modus === 'zelf' || raak) return `<span>${onderdeel(h, ctx, { inhoud: esc(t), klasse: 'dk-tab', label: t, doel: raak })}</span>`;
    return `<span class="${j === 0 && !doel?.tab ? 'is-actief' : ''}">${esc(t)}</span>`;
  };
  const regel = (r) => {
    const raak = isDoel(doel, 'regel', r);
    if (ctx.modus === 'zelf' || raak) return `<li>${onderdeel(h, ctx, { inhoud: esc(r), klasse: 'dk-regel', label: r, doel: raak })}</li>`;
    return `<li>${esc(r)}</li>`;
  };
  const optie = (o) => onderdeel(h, ctx, { inhoud: esc(o), klasse: 'dk-optie', label: o, doel: isDoel(doel, 'optie', o) });
  const veld = (v) => `<div class="ons__veld"><span class="ons__lbl">${esc(v.label)}</span><span class="ons__invoer${v.waarde ? '' : ' is-leeg'}">${esc(v.waarde || 'Leeg')}</span></div>`;
  return `
            ${p.tabs?.length ? `<div class="ons__tabs">${p.tabs.map(tab).join('')}</div>` : ''}
            ${p.titel || p.knoppen?.length ? `<div class="ons__kopregel">${p.titel ? `<h3 class="ons__titel">${esc(p.titel)}</h3>` : '<span></span>'}<span class="dk-knoppen">${(p.knoppen || []).map(knop).join('')}</span></div>` : ''}
            ${(p.kaarten || []).map((k) => `
              <div class="ons__kaart dk-kaart">
                ${k.kop ? `<p class="dk-kaart__kop">${esc(k.kop)}</p>` : ''}
                ${k.regels?.length ? `<ul class="dk-regels">${k.regels.map(regel).join('')}</ul>` : ''}
              </div>`).join('')}
            ${p.velden?.length ? `<div class="ons__kaart ons__formulier">${p.velden.map(veld).join('')}</div>` : ''}
            ${p.venster ? `
              <div class="dk-venster dk-venster--tel">
                <p class="dk-venster__kop">${esc(p.venster.titel)}</p>
                <div class="dk-venster__opties">${p.venster.opties.map(optie).join('')}</div>
              </div>` : ''}`;
}

function telefoonScherm(h, ctx, d, s) {
  return `
      <div class="tel${ctx.modus === 'zelf' ? ' tel--zelf' : ''}" role="group" aria-label="${h.esc(d.app || 'App')}">
        <div class="tel__rand">
          <div class="tel__balk"><span>${h.esc(s.pagina?.balk || d.app || '')}</span></div>
          <div class="tel__inhoud">${telPagina(h, ctx, s.pagina, s.doel)}</div>
        </div>
      </div>`;
}

const STANDEN = [['kijk', 'Kijk'], ['mee', 'Doe mee'], ['zelf', 'Doe zelf']];

function standKeuze(h, stand) {
  return `
      <div class="standen" role="group" aria-label="Hoe wil je oefenen?">
        ${STANDEN.map(([id, naam], i) => `<button type="button" class="stand${stand === id ? ' is-nu' : ''}" data-actie="stand" data-stand="${id}" aria-pressed="${stand === id}"><span class="stand__nr" aria-hidden="true">${i + 1}</span>${naam}</button>`).join('')}
      </div>`;
}

const tijdTekst = (sec) => {
  const s = Math.max(0, Math.round(sec));
  return s < 60 ? `${s} sec` : `${Math.floor(s / 60)} min ${String(s % 60).padStart(2, '0')} sec`;
};

const keer = (n, een, meer) => `${n} ${n === 1 ? een : meer}`;

function viewZelfKlaar(h, d, casus, plekNaam) {
  const { esc, ICOON } = h;
  const z = casus.zelf;
  const sec = (z.eind - z.start) / 1000;
  const foutloos = z.fouten === 0 && z.hints === 0;
  return `
    <article class="werkpaneel doorklik meting">
      <p class="bovenregel bovenregel--merk">Doe zelf in ${esc(plekNaam)}</p>
      <h2>${foutloos ? 'Helemaal zelf gedaan' : 'Je bent er doorheen'}</h2>
      <dl class="meting__cijfers">
        <div><dt>Tijd</dt><dd>${tijdTekst(sec)}</dd></div>
        <div><dt>Mis geklikt</dt><dd>${keer(z.fouten, 'keer', 'keer')}</dd></div>
        <div><dt>Hulp gevraagd</dt><dd>${keer(z.hints, 'keer', 'keer')}</dd></div>
      </dl>
      <p>Je opleider ziet deze uitkomst.</p>
      <div class="knoppen">
        <button type="button" class="btn btn--rand" data-actie="stand" data-stand="zelf">Doe het nog een keer</button>
        <button type="button" class="btn btn--actie" data-actie="doorklik-klaar">Naar de situatie ${ICOON.pijl}</button>
      </div>
    </article>`;
}

function viewDoorklik(c, casus, h, extra = '') {
  const { esc, ICOON } = h;
  const d = c.doorklik;
  const stand = casus.stand || 'mee';
  const n = casus.klik || 0;
  const plekNaam = d.plek === 'telefoon' ? (d.app || 'de app') : 'Nedap ONS';
  const ctx = { modus: stand, hint: casus.zelf?.hintNu };
  const kop = standKeuze(h, stand);

  if (n >= d.stappen.length) {
    if (stand === 'zelf' && casus.zelf?.eind) return `${kop}${viewZelfKlaar(h, d, casus, plekNaam)}`;
    return `${kop}
    <article class="werkpaneel doorklik">
      <p class="bovenregel bovenregel--merk">${stand === 'kijk' ? 'Kijk' : 'Doe mee'} in ${esc(plekNaam)}</p>
      <h2>${stand === 'kijk' ? 'Zo gaat het' : 'Samen doorklikken afgerond'}</h2>
      ${(Array.isArray(d.klaar) ? d.klaar : [d.klaar]).map((t) => `<p>${esc(t)}</p>`).join('')}
      <p>${stand === 'kijk' ? 'Wat je moet aanklikken licht op.' : 'Lukt het niet, dan vraag je om een hint.'}</p>
      ${extra}
      <div class="knoppen">
        ${stand === 'kijk'
          ? `<button type="button" class="btn btn--actie" data-actie="stand" data-stand="mee">Nu doe ik mee ${ICOON.pijl}</button>`
          : `<button type="button" class="btn btn--rand" data-actie="doorklik-klaar">Sla over, naar de situatie</button>
        <button type="button" class="btn btn--actie" data-actie="stand" data-stand="zelf">Nu zelf, zonder hulp ${ICOON.pijl}</button>`}
      </div>
    </article>`;
  }

  const s = d.stappen[n];
  const scherm = d.plek === 'telefoon' ? telefoonScherm(h, ctx, d, s) : onsScherm(h, ctx, d, s);
  if (stand === 'zelf') {
    const z = casus.zelf || {};
    return `${kop}
    <article class="werkpaneel doorklik">
      <p class="bovenregel bovenregel--merk">Doe zelf in ${esc(plekNaam)}, opdracht ${n + 1} van ${d.stappen.length}</p>
      <h2>${esc(s.opdracht || s.doe)}</h2>
      ${scherm}
      <p class="doorklik__fout" role="status">${z.foutNu ? `${ICOON.let}<span>Dat is het niet.</span>` : ''}</p>
      <div class="knoppen">
        <button type="button" class="btn btn--stil" data-actie="zelf-hint" ${z.hintNu ? 'disabled' : ''}>${ICOON.lamp} ${z.hintNu ? 'Het licht nu op' : 'Geef een hint'}</button>
      </div>
    </article>`;
  }
  if (stand === 'kijk') {
    return `${kop}
    <article class="werkpaneel doorklik">
      <p class="bovenregel bovenregel--merk">Kijk in ${esc(plekNaam)}, stap ${n + 1} van ${d.stappen.length}</p>
      <h2>${esc(s.doe)}</h2>
      <p class="doorklik__zeg">${esc(s.zeg)}</p>
      ${scherm}
      <div class="knoppen">
        ${n > 0 ? `<button type="button" class="btn btn--stil" data-actie="doorklik-terug">${ICOON.terug} Vorige</button>` : ''}
        <button type="button" class="btn btn--rand" data-actie="kijk-speel" aria-pressed="${!!casus.speelt}">${casus.speelt ? 'Pauze' : `${ICOON.speel} Speel af`}</button>
        <button type="button" class="btn btn--actie" data-actie="doorklik-verder">Volgende ${ICOON.pijl}</button>
      </div>
    </article>`;
  }
  return `${kop}
    <article class="werkpaneel doorklik">
      <p class="bovenregel bovenregel--merk">Doe mee in ${esc(plekNaam)}, stap ${n + 1} van ${d.stappen.length}</p>
      <h2>${esc(s.doe)}</h2>
      <p class="doorklik__zeg">${esc(s.zeg)}</p>
      ${n === 0 ? extra : ''}
      ${scherm}
      <p class="doorklik__hint">${ICOON.lamp}<span>Klik op het onderdeel dat oplicht.</span></p>
      ${n > 0 ? `<div class="knoppen"><button type="button" class="btn btn--stil" data-actie="doorklik-terug">${ICOON.terug} Stap terug</button></div>` : ''}
    </article>`;
}

// Op een telefoon is het menu van ONS een rij om opzij te schuiven. Schuif het doel in beeld.
function richtDoel(root) {
  const doel = root.querySelector('.ons--doorklik .ons__menu .dk-doel');
  const menu = doel?.closest('.ons__menu');
  if (!menu || menu.scrollWidth <= menu.clientWidth) return;
  menu.scrollLeft = Math.max(0, doel.offsetLeft - (menu.clientWidth - doel.offsetWidth) / 2);
}

window.__ONS = { scherm: (d, s, ctx) => (d.plek === 'telefoon' ? telefoonScherm(h, ctx, d, s) : onsScherm(h, ctx, d, s)) };
})();
/* Motor van het leerplatform: speelt modules af uit inhoudsbestanden. Zie FORMAT.md.
   Geen klantinhoud in dit bestand. Alles komt uit window.__INHOUD = { klant, modules }. */
(function(){
'use strict';
var INH=window.__INHOUD,KL=INH.klant,MODS=INH.modules;
var $=function(s,r){return (r||document).querySelector(s)};
var esc=function(t){return String(t==null?'':t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')};
var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var app=$('#app');

/* ---------- vaste onderdelen ---------- */
var CHECK='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" pathLength="30"/></svg>';
var CHECK2='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
var KRUIS='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';
var PIJL='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
var WOORD=['nul','één','twee','drie','vier','vijf','zes','zeven','acht','negen','tien','elf','twaalf','dertien','veertien','vijftien'];
var woord=function(n){return n<WOORD.length?WOORD[n]:String(n)};
var hoofd=function(t){return t.charAt(0).toUpperCase()+t.slice(1)};
function avatar(){
  return '<svg class="avatar" viewBox="0 0 64 64" role="img" aria-label="'+esc(KL.begeleider.naam)+'"><defs><clipPath id="av"><circle cx="32" cy="32" r="32"/></clipPath></defs><g clip-path="url(#av)"><rect width="64" height="64" fill="#E4EAF0"/>'+
  '<path d="M8 66c1-14 11-20 24-20s23 6 24 20z" fill="var(--k)"/><path d="M25 47l7 8 7-8" fill="none" stroke="#fff" stroke-opacity=".85" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>'+
  '<path d="M26 40h12v7c0 3-3 5-6 5s-6-2-6-5z" fill="#B27B55"/><ellipse cx="32" cy="29" rx="11" ry="13" fill="#C98F63"/>'+
  '<circle cx="46" cy="14" r="6" fill="#2A1A13"/><path d="M20 30c-2-13 6-19 14-18 8 1 12 8 10 17-1-6-5-10-10-10-6 0-12 4-14 11z" fill="#2A1A13"/>'+
  '<circle cx="27.5" cy="30" r="1.3" fill="#2A1A13"/><circle cx="36.5" cy="30" r="1.3" fill="#2A1A13"/><path d="M28 36.5c2.4 2 5.6 2 8 0" fill="none" stroke="#7A4528" stroke-width="1.7" stroke-linecap="round"/></g></svg>';
}
function merk(){var l=esc(KL.letter||(KL.kort||KL.naam).charAt(0));return '<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="20" fill="#fff"/><text x="20" y="27" text-anchor="middle" font-family="Atkinson Hyperlegible Next,Atkinson Hyperlegible,sans-serif" font-weight="800" font-size="21" fill="'+esc(KL.kleur)+'">'+l+'</text></svg>'}
function balk(naam,ini){return '<header class="balk"><div class="balk__in"><a class="merk" href="#modules">'+merk()+esc(KL.naam)+'</a><div class="wie-bar"><span>'+esc(naam)+'</span><i aria-hidden="true">'+esc(ini)+'</i></div></div></header>'}
function voet(){return '<p class="voet">Gemaakt door Ons Op Maat</p>'}
function groet(){var h=new Date().getHours();return h<12?'Goedemorgen':h<18?'Goedemiddag':'Goedenavond'}
function ballon(inhoud,vast){return '<div class="collega'+(vast?' collega--vast':'')+'">'+avatar()+'<div class="ballon"><p class="bal-wie"><b>'+esc(KL.begeleider.naam)+'</b> · '+esc(KL.begeleider.rol)+'</p>'+inhoud+'</div></div>'}
function minuten(n){return woord(n)+' minuten'}

/* ---------- staat ---------- */
var S={rol:KL.standaardRol||KL.rollen[0].id,gedaan:{}};
(KL.klaar||[]).forEach(function(id){S.gedaan[id]=true});
var M=null,KIES=null;
var rolObj=function(){return KL.rollen.filter(function(r){return r.id===S.rol})[0]};
var modGebouwd=function(id){return MODS.filter(function(m){return m.id===id})[0]};
function rolModules(){return rolObj().modules.map(function(id){var c=KL.modules.filter(function(m){return m.id===id})[0];return {cat:c,mod:modGebouwd(id)}})}
function zet(t){return String(t==null?'':t).replace(/\{org\}/g,KL.kort||KL.naam).replace(/\{client\}/g,KL.testclient||'de cliënt')}

/* ---------- Mijn modules ---------- */
var alle=false;
function viewModules(){
  var lijst=rolModules(),n=lijst.length;
  var klaar=lijst.filter(function(x){return S.gedaan[x.cat.id]}).length;
  var nu=lijst.filter(function(x){return x.mod&&!S.gedaan[x.cat.id]})[0];
  var d='';lijst.forEach(function(x){d+='<i class="'+(S.gedaan[x.cat.id]?'k':'')+'"></i>'});
  var rij=lijst.map(function(x){
    var k=S.gedaan[x.cat.id],isNu=nu&&nu.cat.id===x.cat.id,bin=!x.mod;
    return '<li class="'+(k?'k ':'')+(isNu?'nu ':'')+(bin?'bin':'')+'"><span class="st">'+(k?CHECK2:'')+'</span>'+(bin?esc((x.cat.nr?x.cat.nr+' | ':'')+x.cat.titel):'<a class="alle-a" href="#module" data-start="'+esc(x.cat.id)+'">'+esc((x.cat.nr?x.cat.nr+' | ':'')+x.cat.titel)+'</a>')+'<span>'+(bin&&!k?'Binnenkort':esc(x.cat.duur||''))+(isNu?' · nu aan de beurt':'')+(k?' · klaar':'')+'</span></li>';
  }).join('');
  var tekst,knop='';
  if(nu){tekst='<p class="opd">'+groet()+' '+esc(KL.medewerker.naam)+'. Vandaag doen we '+esc(nu.cat.kort||nu.cat.titel)+'. '+hoofd(minuten(nu.mod.duurMin))+'.</p>';knop='<a class="knop m-knop" href="#module" data-start="'+esc(nu.cat.id)+'">Begin met '+esc(nu.cat.kort||nu.cat.titel)+' '+PIJL+'</a>'}
  else tekst='<p class="opd">'+groet()+' '+esc(KL.medewerker.naam)+'. Je hebt alles gedaan wat nu klaarstaat. De rest van je modules volgt.</p>';
  return balk(KL.medewerker.voluit||KL.medewerker.naam,KL.medewerker.initialen||KL.medewerker.naam.charAt(0))+'<main class="kolom" id="main">'+ballon(tekst,false)+knop+
  '<section class="voortgang" aria-label="Je voortgang"><div class="v-rij"><span><b>'+klaar+' van '+n+'</b> modules klaar</span><button type="button" id="alle" aria-expanded="'+alle+'" aria-controls="alle-lijst">'+(alle?'Verberg modules':'Alle modules')+'</button></div><div class="delen" aria-hidden="true">'+d+'</div>'+
  '<ol class="alle" id="alle-lijst"'+(alle?'':' hidden')+'>'+rij+'</ol></section>'+
  '<p class="opl-regel">Loop je vast? Vraag het '+esc(KL.opleider.naam)+', '+esc(KL.opleider.rol.charAt(0).toLowerCase()+KL.opleider.rol.slice(1))+'.</p>'+voet()+'</main>';
}

/* ---------- Module: hulpfuncties ---------- */
function stapById(id){return M.mod.stappen.filter(function(s){return s.id===id})[0]}
function huidig(){return M.mod.stappen[M.i]}
function sub(){var s=huidig();return s.type==='nu-jij'?stapById(s.route[M.j]):null}
function actief(){return sub()||huidig()}
function faseIdx(){
  var s=huidig();return Math.max(0,M.mod.proces.map(function(f){return f.id}).indexOf(s.proces));
}
function setScherm(sc){if(sc)M.scherm=sc}
function startStap(){
  var s=huidig();M.melding=M.melding||null;M.keuze=null;M.antw=null;M.gecheckt=false;
  if(s.type==='nu-jij'){M.j=0;M.invoer={}}
  var a=actief();
  if(a.wis&&a.veld)delete M.invoer[a.veld];
  setScherm(a.scherm);
}
function vooruit(melding){
  var s=huidig();M.melding=melding||null;
  if(s.type==='nu-jij'&&M.j<s.route.length-1){M.j++;var a=actief();if(a.wis&&a.veld)delete M.invoer[a.veld];setScherm(a.scherm);return}
  M.i++;M.j=0;startStap();
}
var isOnsStap=function(s){return s.type==='klik'||s.type==='typ'||s.type==='nu-jij'};

/* ---------- Module: ONS-raamwerk ---------- */
var ICONEN={
  papier:'<svg viewBox="0 0 24 24"><path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4M9 12h7M9 16h5"/></svg>',
  ontlasting:'<svg viewBox="0 0 24 24"><path d="M12 4c2 2 1 3 1 4 3 0 6 2 6 5 1 1 1 3-1 4-3 3-10 3-13 0-2-1-2-3-1-4 0-3 3-5 6-5 0-1-1-2 2-4z"/></svg>',
  wc:'<svg viewBox="0 0 24 24"><rect x="4" y="9" width="12" height="9" rx="4.5"/><circle cx="10" cy="13.5" r="2.2"/><path d="M16 13.5h4"/></svg>',
  punt:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/></svg>'
};
var MENU_IC={ov:'<svg viewBox="0 0 16 16"><rect x="2" y="2" width="5" height="5" rx="1"/><rect x="9" y="2" width="5" height="5" rx="1"/><rect x="2" y="9" width="5" height="5" rx="1"/><rect x="9" y="9" width="5" height="5" rx="1"/></svg>',
  lijst:'<svg viewBox="0 0 16 16"><path d="M3 4h10M3 8h10M3 12h6"/></svg>',
  plan:'<svg viewBox="0 0 16 16"><rect x="3" y="2.5" width="10" height="11.5" rx="1.5"/><path d="M6 2.5v-1h4v1M5.5 7h5M5.5 10h3.5"/></svg>',
  doc:'<svg viewBox="0 0 16 16"><path d="M4 2h6l3 3v9H4z"/><path d="M10 2v3h3M6 8h5M6 11h4"/></svg>',
  agenda:'<svg viewBox="0 0 16 16"><rect x="2.5" y="3.5" width="11" height="10" rx="1.5"/><path d="M2.5 7h11M5.5 2v3M10.5 2v3"/></svg>',
  puls:'<svg viewBox="0 0 16 16"><path d="M1.5 8h3l2-4.5 3 9 2-4.5h3"/></svg>',
  map:'<svg viewBox="0 0 16 16"><path d="M2 4.5h4l1.5 1.5H14V13H2z"/></svg>'};
function menuIc(n){return MENU_IC[n]||MENU_IC.doc}
function lijstRijen(b){
  var q=(b.filter&&M.invoer[b.filter])?M.invoer[b.filter].toLowerCase():'';
  var rijen=(b.rijen||[]).slice();
  if(b.nieuw){var tekst=M.invoer[b.nieuw.van]||b.nieuw.tekst||'';if(tekst)rijen.unshift({titel:(b.nieuw.auteur||'')+' · '+(b.nieuw.tijd||'zojuist'),tekst:tekst,chip:b.nieuw.chip})}
  if(q)rijen=rijen.filter(function(r){return (r.tekst||'').toLowerCase().indexOf(q)>=0||(r.titel||'').toLowerCase().indexOf(q)>=0});
  if(!rijen.length)return '<div class="sch__leeg">Geen resultaten.</div>';
  return rijen.map(function(r){
    var inner=(r.meta||r.titel?'<small>'+esc(r.titel||'')+(r.meta?' · '+esc(r.meta):'')+'</small>':'')+(r.tekst?'<span>'+esc(r.tekst)+'</span>':'')+(r.chip?'<div><span class="sch__chip">'+esc(r.chip)+'</span></div>':'');
    return r.id?'<button type="button" class="sch__rijbtn" data-id="'+esc(r.id)+'">'+inner+'</button>':'<div class="sch__rijbtn" style="cursor:default">'+inner+'</div>';
  }).join('');
}
function blokHTML(b){
  var h='';
  if(b.type==='titel')return '<div class="sch__kop"><h3 class="sch__titel">'+esc(b.tekst)+'</h3></div>';
  if(b.type==='melding')return '<div class="sch__ok"><svg viewBox="0 0 16 16"><path d="M3 8.5l3.2 3.2L13 5"/></svg>'+esc(b.tekst)+'</div>';
  if(b.type==='kaarten')return b.kaarten.map(function(k){return '<div class="sch__kaart"><h4>'+esc(k.kop)+'</h4><p>'+esc(k.tekst)+'</p></div>'}).join('');
  if(b.type==='zoek')return '<label class="sch__zoekbalk"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.6"/><path d="M10.5 10.5L14 14"/></svg><input type="text" data-veld="'+esc(b.id)+'" data-id="'+esc(b.id)+'" placeholder="'+esc(b.plaatshouder||'Zoeken')+'" value="'+esc(M.invoer[b.id]||'')+'" aria-label="'+esc(b.plaatshouder||'Zoeken')+'"></label>';
  if(b.type==='iconen'){
    h='<div class="sch__icb" role="toolbar" aria-label="Iconenbalk">'+b.iconen.map(function(ic){return '<button type="button" class="sch__ic'+(ic.kleur==='groen'?' groen':'')+'" data-id="'+esc(ic.id)+'" title="'+esc(ic.label||'')+'" aria-label="'+esc(ic.label||ic.id)+'">'+(ICONEN[ic.icoon]||ICONEN.punt)+'</button>'}).join('')+'</div>';
    if(b.zoek)h+='<label class="sch__zoekbalk"><svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.6"/><path d="M10.5 10.5L14 14"/></svg><input type="text" data-veld="'+esc(b.zoek.id)+'" data-id="'+esc(b.zoek.id)+'" placeholder="'+esc(b.zoek.plaatshouder||'Zoeken')+'" value="'+esc(M.invoer[b.zoek.id]||'')+'" aria-label="'+esc(b.zoek.plaatshouder||'Zoeken')+'"></label>';
    return h;
  }
  if(b.type==='lijst'){
    var plus=b.plus?'<div class="sch__rij"><button type="button" class="sch__plus" data-id="'+esc(b.plus.id)+'" aria-label="'+esc(b.plus.label||'Nieuw')+'"><svg viewBox="0 0 16 16"><path d="M8 3v10M3 8h10"/></svg></button></div>':'';
    return (b.kop||plus?'<div class="sch__kop"><h3 class="sch__titel">'+esc(b.kop||'')+'</h3>'+plus+'</div>':'')+'<div class="sch__rijen" data-lijst'+(b.filter?' data-filter="'+esc(b.filter)+'"':'')+'>'+lijstRijen(b)+'</div>';
  }
  if(b.type==='formulier'){
    h=(b.titel||(b.knoppen&&b.knoppen.length)?'<div class="sch__kop"><h3 class="sch__titel">'+esc(b.titel||'')+'</h3><div class="sch__rij">'+(b.knoppen||[]).map(function(k){return '<button type="button" class="sch__knop" data-id="'+esc(k.id)+'">'+esc(k.label)+'</button>'}).join('')+'</div></div>':'')+'<div class="sch__kaart">';
    h+=b.velden.map(function(v,i){
      var l=v.label?'<label>'+esc(v.label)+'</label>':'';
      var last=i===b.velden.length-1?' style="margin:0"':'';
      if(v.soort==='tekst')return '<div class="sch__veld"'+last+' data-veldwrap="'+esc(v.id)+'">'+l+'<textarea data-veld="'+esc(v.id)+'" data-id="'+esc(v.id)+'" placeholder="'+esc(v.plaatshouder||'')+'" aria-label="'+esc(v.label||v.id)+'">'+esc(M.invoer[v.id]||'')+'</textarea></div>';
      if(v.soort==='kiezer'){
        var g=v.gekozen?'<span class="sch__chip">'+esc(v.gekozen)+'</span>':esc(v.plaatshouder||'Kies');
        return '<div class="sch__veld"'+last+'>'+l+'<button type="button" class="sch__kiezer" data-id="'+esc(v.id)+'"><span>'+g+'</span><svg viewBox="0 0 12 12"><path d="M2 4l4 4 4-4"/></svg></button>'+(v.open?'<div class="sch__lijstopen">'+v.opties.map(function(o){return '<button type="button" data-id="'+esc(o.id)+'">'+esc(o.label)+'</button>'}).join('')+'</div>':'')+'</div>';
      }
      return '<div class="sch__veld"'+last+'>'+l+'<div class="sch__invoer">'+esc(v.waarde||'')+'</div></div>';
    }).join('')+'</div>';
    return h;
  }
  return '';
}
function hubHTML(sc){
  if(!sc.hub)return '';
  return '<div class="sch__hub" role="menu">'+sc.hub.groepen.map(function(g,i){
    return (i?'<hr>':'')+(g.kop?'<h4>'+esc(g.kop)+'</h4>':'')+g.items.map(function(it){return '<button type="button" class="sch__hi" role="menuitem"'+(it.id?' data-id="'+esc(it.id)+'"':'')+'><svg viewBox="0 0 16 16"><rect x="2.5" y="2.5" width="11" height="11" rx="2"/></svg>'+esc(it.label)+'</button>'}).join('');
  }).join('')+'</div>';
}
function vensterHTML(sc){
  if(!sc.venster)return '';
  var ic='<svg viewBox="0 0 16 16"><path d="M4 2h6l3 3v9H4z"/><path d="M6 8h5M6 11h4"/></svg>';
  return '<div class="sch__dim"><div class="sch__venster" role="dialog" aria-label="'+esc(sc.venster.titel)+'"><div class="sch__vkop">'+esc(sc.venster.titel)+'</div>'+sc.venster.opties.map(function(o){
    return o.id?'<button type="button" class="sch__opt is-d" data-id="'+esc(o.id)+'">'+ic+esc(o.label)+'</button>':'<div class="sch__opt">'+ic+esc(o.label)+'</div>';
  }).join('')+'</div></div>';
}
/* ---------- Module: echte schermen van Nedap ONS (schermtype 'ons') ----------
   De schermbouwer van de demo (window.__ONS, gebundeld door bouw.mjs) tekent het scherm één op één naar de schermafdruk.
   De motor zet er het doel, het typveld en een geopende keuzelijst in. */
function vulIn(p){
  if(!p)return {};
  return JSON.parse(JSON.stringify(p).replace(/\{getypt(?::([^}"]+))?\}/g,function(m,v){return JSON.stringify(String(M.invoer[v||'tekst']||'')).slice(1,-1)}));
}
function klikDoel(a){return a&&a.type==='klik'&&a.doel&&typeof a.doel==='object'?a.doel:null}
function onsEcht(sc){
  var a=actief(),O=MD.ons||{},doel=klikDoel(a);
  var viaBouwer=doel&&!doel.veld&&!doel.icoon&&!(doel.optie&&sc.open&&sc.open.opties.indexOf(doel.optie)>=0)?doel:null;
  var s=null,stappen=Object.keys(MD.schermen).filter(function(k){return MD.schermen[k].type==='ons'}).map(function(k){
    var x=MD.schermen[k],o={menu:x.menu,pagina:vulIn(x.pagina)};
    if(k===M.scherm){o.doel=viaBouwer;s=o}
    return o;
  });
  if(!s){s={menu:sc.menu,pagina:vulIn(sc.pagina),doel:viaBouwer};stappen.push(s)}
  var d={client:sc.client===false?null:(sc.client||O.client),labels:sc.labels||O.labels,plek:sc.plek||O.plek,app:sc.app||O.app,stappen:stappen};
  return window.__ONS.scherm(d,s,{modus:'zelf',hint:false});
}
function vindVeld(w,label){
  var n=String(label).toLowerCase().replace(/[:*]\s*$/,''),sel='.ons__nep-select,.dk-invoer,.ons__invoer,.dk-tekstvak';
  if(n==='tekst')return w.querySelector('.dk-tekstvak');
  var ls=w.querySelectorAll('.dk-rrij__lbl,.dk-mrij__lbl,.dk-vvraag__lbl,.ons__lbl,.dk-veldlabel');
  for(var i=0;i<ls.length;i++){
    var t=ls[i].textContent.trim().toLowerCase().replace(/[:*]\s*$/,'');
    if(t===n||n.indexOf(t+' (')===0){var nx=ls[i].nextElementSibling;return nx&&nx.matches(sel)?nx:ls[i].parentElement.querySelector(sel)}
  }
  return null;
}
function zichtbaar(el){var r=el.closest('[aria-hidden]');if(r)r.removeAttribute('aria-hidden')}
function onsNa(w,sc,a){
  var doel=klikDoel(a),t=w.querySelector('[data-actie="zelf-goed"]');
  if(t)t.setAttribute('data-id','__doel');
  if(sc.open){
    var v=vindVeld(w,sc.open.veld);
    if(v){zichtbaar(v);var l=document.createElement('span');l.className='x-open';
      l.innerHTML=sc.open.opties.map(function(o){return '<button type="button"'+(doel&&doel.optie===o?' data-id="__doel"':'')+'>'+esc(o)+'</button>'}).join('');
      v.classList.add('is-open');v.appendChild(l)}
  }
  if(doel&&doel.icoon){var ic=w.querySelectorAll('.dk-rtabs .dk-rtab')[doel.icoon-1];if(ic){zichtbaar(ic);ic.setAttribute('data-id','__doel');ic.setAttribute('role','button');ic.setAttribute('tabindex','0');ic.setAttribute('aria-label',doel.label||'Icoon '+doel.icoon)}}
  if(doel&&doel.veld){var f=vindVeld(w,doel.veld);if(f){zichtbaar(f);f.setAttribute('data-id','__doel');f.setAttribute('role','button');f.setAttribute('tabindex','0');f.setAttribute('aria-label',doel.veld)}}
  if(a&&a.type==='typ'){
    var f2=vindVeld(w,a.veld);
    if(f2){zichtbaar(f2);var groot=/tekstvak/.test(f2.className),el=document.createElement(groot?'textarea':'input');
      if(!groot)el.type='text';
      el.className=f2.className.replace('is-leeg','')+' x-typ';el.setAttribute('data-veld',a.veld);el.setAttribute('data-id',a.veld);el.setAttribute('aria-label',a.veld);
      el.value=M.invoer[a.veld]||'';if(a.plaatshouder)el.placeholder=a.plaatshouder;
      f2.parentNode.replaceChild(el,f2)}
  }
}
function onsHTML(sc){
  if(sc&&sc.type==='ons')return onsEcht(sc);
  if(!sc)return '<div class="sch"><div class="sch__stil">Geen scherm.</div></div>';
  if(sc.type==='afbeelding'){
    var f=sc.focus,st='';
    /* Op de telefoon nooit een dun reepje: de uitsnede is minstens 4 bij 3, rond hetzelfde midden. */
    if(f&&sc.w&&sc.h&&(f.b*sc.w)/(f.h*sc.h)>4/3){var nh=Math.min(100,(f.b*sc.w*3/4)/sc.h),ny=Math.max(0,Math.min(100-nh,f.y+f.h/2-nh/2));f={x:f.x,y:ny,b:f.b,h:nh}}
    if(f&&sc.w&&sc.h)st=' data-focus style="--fs:'+(10000/f.b)+'%;--tx:-'+f.x+'%;--ty:-'+f.y+'%;--ar:'+(f.b*sc.w)+' / '+(f.h*sc.h)+'"';
    return '<div class="sch sch--beeld"><div class="sch__img" data-kader="'+(sc.kader===false?0:1)+'"'+st+'><div class="sch__in"><img src="'+esc(sc.src)+'" alt="'+esc(sc.alt||'Schermafdruk van het systeem')+'">'+(sc.klikvlakken||[]).map(function(k){return '<button type="button" data-id="'+esc(k.id)+'" aria-label="'+esc(k.label||k.id)+'" style="left:'+k.x+'%;top:'+k.y+'%;width:'+k.b+'%;height:'+k.h+'%"></button>'}).join('')+'</div></div></div>';
  }
  var dots='<span class="sch__raster"></span>',app=esc(sc.app||'Medewerkerportaal');
  var pil=sc.hubId?'<button type="button" class="sch__app" data-id="'+esc(sc.hubId)+'" aria-label="Hub openen">'+dots+app+'</button>':'<span class="sch__app">'+dots+app+'</span>';
  var menu='';
  if(sc.menu){menu='<ul class="sch__menu">'+sc.menu.items.map(function(it){
    var c='sch__mi'+(it.id===sc.menu.actief||it.label===sc.menu.actief?' is-actief':''),inner=menuIc(it.icoon)+esc(it.label);
    return '<li>'+(it.id?'<button type="button" class="'+c+'" data-id="'+esc(it.id)+'">'+inner+'</button>':'<div class="'+c+'">'+inner+'</div>')+'</li>';
  }).join('')+'</ul>'}
  var client=sc.client?'<div class="sch__client"><span class="sch__ini">'+esc(sc.client.initialen||sc.client.naam.charAt(0))+'</span><div><div class="sch__naam">'+esc(sc.client.naam)+'</div><div class="sch__sub">'+esc(sc.client.sub||'')+'</div></div></div>':'';
  return '<div class="sch" aria-label="Nagebouwd scherm van het systeem"><div class="sch__balk"><svg class="sch__logo" viewBox="0 0 22 22" aria-hidden="true"><circle cx="11" cy="11" r="10" fill="#fff"/><path d="M6 14l4-6 3 4 3-3" fill="none" stroke="#2B2B2B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'+pil+
    '<div class="sch__zoek"><svg class="sch__bi" viewBox="0 0 20 20" style="width:18px;height:18px"><circle cx="9" cy="9" r="6"/><path d="M14 14l4 4"/></svg>Zoeken</div><div class="sch__rechts"><svg class="sch__bi" viewBox="0 0 20 20"><path d="M5 15V9a5 5 0 0 1 10 0v6l1.5 1.5h-13zM8.5 18a1.6 1.6 0 0 0 3 0"/></svg><span class="sch__sv">'+esc(KL.medewerker.initialen||'')+'</span></div></div>'+
    hubHTML(sc)+'<div class="sch__lijf" style="'+(sc.menu?'':'grid-template-columns:minmax(0,1fr)')+'">'+menu+'<div class="sch__inhoud">'+client+(sc.inhoud||[]).map(blokHTML).join('')+'</div></div>'+vensterHTML(sc)+'</div>';
}

/* ---------- Module: ballon en onderdelen ---------- */
function afsHTML(s){
  var h='<div class="afsblok">';
  if(s.wel||s.niet){
    if(s.wel)h+='<div class="groep wel"><h3>'+esc(s.welKop||'Wel rapporteren')+'</h3><ul>'+s.wel.map(function(t){return '<li><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg><span>'+esc(zet(t))+'</span></li>'}).join('')+'</ul></div>';
    if(s.niet)h+='<div class="groep niet"><h3>'+esc(s.nietKop||'Niet rapporteren')+'</h3><ul>'+s.niet.map(function(t){return '<li><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg><span>'+esc(zet(t))+'</span></li>'}).join('')+'</ul></div>';
  }
  if(s.punten)h+='<ul>'+s.punten.map(function(t){return '<li><svg viewBox="0 0 24 24" style="stroke:var(--acc)"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg><span>'+esc(zet(t))+'</span></li>'}).join('')+'</ul>';
  if(s.tekst)h+='<p>'+esc(zet(s.tekst))+'</p>';
  return h+'<small>Bron: '+esc(s.bron)+'</small></div>';
}
function meldingHTML(){
  if(!M.melding)return '';
  var m=M.melding;
  return '<p class="conf'+(m.hint?' conf--hint':'')+'" role="status">'+(m.hint?'':CHECK)+'<span>'+esc(zet(m.t))+'</span></p>';
}
function ballonInhoud(){
  var s=huidig(),a=actief(),h=meldingHTML(),opd='';
  if(s.type==='nu-jij')opd=s.opdracht;
  else if(s.type==='situatie')opd=s.tekst;
  else if(s.type==='klik'||s.type==='typ')opd=s.opdracht;
  else if(s.type==='afspraak')opd=s.voor||'';
  else if(s.type==='keuze'||s.type==='vraag')opd=s.vraag;
  else if(s.type==='klaar')opd=s.ballon||'';
  h+=opd?'<p class="opd">'+esc(zet(opd))+'</p>':'';
  if(s.type==='situatie'&&s.lijst)h+='<ul class="lijstje">'+s.lijst.map(function(t){return '<li>'+CHECK2+'<span>'+esc(zet(t))+'</span></li>'}).join('')+'</ul>';
  if(s.type==='afspraak')h+=afsHTML(s);
  return h;
}
function procesHTML(){
  var P=M.mod.proces,nu=huidig().type==='klaar'?P.length:faseIdx();
  var li=P.map(function(f,i){return '<li class="'+(i<nu?'is-klaar':i===nu?'is-nu':'')+'"'+(i===nu?' aria-current="step"':'')+'>'+(i<nu?CHECK2:'')+esc(f.naam)+'</li>'}).join('');
  var cur=Math.min(nu,P.length-1);
  return '<nav class="proces" aria-label="Werkproces"><ol>'+li+'</ol><p class="proces__mob"><b>Stap '+(cur+1)+' van '+P.length+'</b> · '+esc(P[cur].naam)+'</p></nav>';
}
function optiesHTML(s){
  var multi=s.type==='vraag'&&s.meer;
  var klaar=s.type==='vraag'?M.gecheckt:(M.keuze&&M.keuze.goed);
  return '<div class="opties" role="'+(multi?'group':'radiogroup')+'" aria-label="Antwoorden">'+s.opties.map(function(o,i){
    var sel=(M.antw||[]).indexOf(i)>=0;
    var cls='optie';
    if(s.type==='vraag'&&M.gecheckt){if(o.goed)cls+=' is-goed';else if(sel)cls+=' is-mis'}
    if(s.type==='keuze'&&M.keuze&&M.keuze.i===i)cls+=M.keuze.goed?' is-goed':' is-mis';
    var aria=s.type==='keuze'?'':' aria-checked="'+sel+'"';
    return '<button type="button" class="'+cls+'" data-opt="'+i+'" role="'+(s.type==='keuze'?'button':multi?'checkbox':'radio')+'"'+aria+(M.gecheckt&&s.type==='vraag'?' disabled':'')+'><span class="vl">'+CHECK2+'</span><span>'+esc(zet(o.tekst))+'</span></button>';
  }).join('')+'</div>';
}
function onderHTML(){
  var s=huidig(),a=actief(),k=function(t,id,sec){return '<button type="button" class="knop'+(sec?' knop--sec':'')+'" id="'+(id||'verder')+'">'+esc(t)+' '+(sec?'':PIJL)+'</button>'};
  if(s.type==='situatie')return k(s.knop||'Verder');
  if(s.type==='afspraak')return k(s.knop||'Duidelijk');
  if(s.type==='keuze')return M.keuze&&M.keuze.goed?k(s.knop||'Verder'):'';
  if(s.type==='vraag'){if(M.gecheckt)return k(s.knop||'Verder');return (s.meer&&(M.antw||[]).length)?k('Controleer','controleer'):''}
  if(a.type==='typ')return (M.invoer[a.veld]||'').trim()?k(a.knop||'Verder'):'';
  if(s.type==='klaar')return '';
  return '';
}
function vraagMelding(s){
  if(s.type==='vraag'&&M.gecheckt){
    var goed=s.opties.every(function(o,i){return !!o.goed===((M.antw||[]).indexOf(i)>=0)});
    return {t:(goed?'Goed. ':'Net niet. ')+s.uitleg,hint:!goed};
  }
  return null;
}

/* ---------- Module: weergave ---------- */
function moduleShell(){
  return balk(KL.medewerker.voluit||KL.medewerker.naam,KL.medewerker.initialen||'')+'<main class="kolom kolom--breed" id="main"><div id="bal"></div><div id="proces"></div><div id="ruimte"></div><div class="onder" id="onder"></div>'+voet()+'</main>';
}
function renderBal(){
  var s=huidig();
  $('#bal').innerHTML=ballon(ballonInhoud(),true);
  $('#proces').innerHTML=procesHTML();
  $('#onder').innerHTML=onderHTML();
}
function renderRuimte(vink,fade){
  var s=huidig(),r=$('#ruimte');
  if(s.type==='klaar'){r.innerHTML=klaarHTML();return}
  if(s.type==='keuze'||s.type==='vraag'){r.innerHTML=optiesHTML(s);return}
  if(s.type==='situatie'&&!s.toonScherm){r.innerHTML='';return}
  var a=actief(),sc=MD.schermen[M.scherm];
  if(sc&&sc.type==='afbeelding'&&a.focus)sc=Object.assign({},sc,{focus:a.focus});
  var leid=(a.type==='klik'||a.type==='typ')&&s.type!=='nu-jij';
  var rust=!isOnsStap(s);
  if(!$('#onswrap')){r.innerHTML='<div class="venster" id="venster" tabindex="0" role="region" aria-label="Het nagebouwde scherm. Scroll opzij als het scherm breder is dan je telefoon."><div class="ons-wrap" id="onswrap"></div></div>'}
  $('#venster').className='venster'+(rust?' rust':'');
  var w=$('#onswrap');
  var echt=sc&&sc.type==='ons';
  w.className='ons-wrap'+(sc&&sc.type==='afbeelding'?' beeld':'')+(echt?' echt':'')+(leid?' leid':'')+(fade?' fade':'');
  w.innerHTML=onsHTML(sc)+'<div class="wijzer" hidden><svg viewBox="0 0 46 46" aria-hidden="true"><path d="M5 4l30 14-13 4-4 14z" style="fill:var(--acc)" stroke="#1B1B1B" stroke-width="3.5" stroke-linejoin="round"/></svg></div>';
  if(echt)onsNa(w,sc,a);
  var doel=a.type==='klik'?(klikDoel(a)?'__doel':a.doel):(a.type==='typ'?a.veld:null);
  M.doel=leid&&doel?doel:null;
  if(M.doel){var el=w.querySelector('[data-id="'+M.doel+'"]');if(el){el.setAttribute('data-doel','')}}
  if(vink){var v=document.createElement('div');v.className='vink';v.style.left=vink[0]+'px';v.style.top=vink[1]+'px';v.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" pathLength="30"/></svg>';w.appendChild(v);setTimeout(function(){v.remove()},1100)}
  var im=w.querySelector('.sch__img img');
  if(im&&!im.complete)im.addEventListener('load',function(){plaats()});
  plaats();
  setTimeout(plaats,420);
}
function plaats(){
  var wrap=$('#onswrap'),wz=$('.wijzer');if(!wrap||!wz)return;
  var t=M.doel?wrap.querySelector('[data-doel]'):null;
  if(!t){wz.hidden=true;return}
  var a=wrap.getBoundingClientRect(),b=t.getBoundingClientRect();
  wz.hidden=false;wz.style.transform='translate('+(b.left-a.left+b.width*.55)+'px,'+(b.top-a.top+Math.min(b.height*.62,40))+'px)';
  var v=$('#venster');
  /* Het echte scherm is hoog. Schuif het doel in beeld, onder de ballon die bovenaan blijft staan. */
  var bal=$('#bal'),bt=bal?bal.getBoundingClientRect().bottom:0,onder=window.innerHeight-84;
  if(b.bottom>onder||b.top<bt+10)window.scrollBy({top:(b.top+b.height/2)-(bt+onder)/2,behavior:reduce?'auto':'smooth'});
  if(v.scrollWidth>v.clientWidth){var l=b.left-v.getBoundingClientRect().left+v.scrollLeft-80;v.scrollTo({left:Math.max(0,l),behavior:reduce?'auto':'smooth'})}
}
function klaarHTML(){
  var s=huidig();
  var beeld='<svg class="beeld" viewBox="0 0 132 110" role="img" aria-label="Een document met een vinkje"><rect x="30" y="12" width="64" height="84" rx="10" fill="#fff" stroke="var(--k)" stroke-width="3"/><path d="M44 34h36M44 46h36M44 58h22" stroke="#C9C9C9" stroke-width="4" stroke-linecap="round"/><circle cx="92" cy="78" r="20" fill="#2E8B57"/><path d="M82 78l7 7 12-14" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 30l6 6M22 30l-6 6M112 22l5 5M117 22l-5 5" stroke="#F5B83D" stroke-width="3" stroke-linecap="round"/><circle cx="20" cy="70" r="3.5" fill="#5FD0BF"/><circle cx="116" cy="50" r="3.5" fill="var(--acc)"/></svg>';
  var daarna=s.daarna?'<div class="daarna">'+s.daarna.regels.map(function(t){return '<p>'+esc(zet(t))+'</p>'}).join('')+'<small>Bron: '+esc(s.daarna.bron)+'</small></div>':'';
  return '<section class="klaar">'+beeld+'<h1 id="kop" tabindex="-1">'+esc(zet(s.titel))+'</h1><ul>'+s.geleerd.map(function(t){return '<li>'+CHECK2+'<span>'+esc(zet(t))+'</span></li>'}).join('')+'</ul>'+daarna+'<a class="knop" href="#modules" id="klaar-knop">'+esc(s.knop||'Verder naar mijn modules')+' '+PIJL+'</a>'+(s.vragen?'<p class="vragen">'+esc(zet(s.vragen))+'</p>':'')+'</section>';
}
var MD=null;
function viewModule(){
  if(!M||M.klaarGemaakt){M=null}
  if(!M){
    var gekozen=KIES?rolModules().filter(function(x){return x.mod&&x.cat.id===KIES})[0]:null;KIES=null;
    var cat=gekozen||rolModules().filter(function(x){return x.mod&&!S.gedaan[x.cat.id]})[0];
    var m=(cat&&cat.mod)||MODS[0];
    M={mod:m,i:0,j:0,melding:null,invoer:{},scherm:null};
    var eerste=m.stappen.filter(function(s){return s.scherm})[0];
    M.scherm=eerste?eerste.scherm:Object.keys(m.schermen)[0];
    MD=m;
    startStap();
  }
  MD=M.mod;
  app.innerHTML=moduleShell();
  renderBal();renderRuimte(null,false);
}
function nuUpdate(vink,fade){
  var s=huidig();
  if(s.type==='klaar'&&!S.gedaan[M.mod.id]){S.gedaan[M.mod.id]=true}
  renderBal();renderRuimte(vink,fade);
  if(s.type==='klaar'){window.scrollTo(0,0)}
}

/* ---------- Module: interactie ---------- */
function onsKlik(e){
  var s=huidig(),a=actief();
  if(!isOnsStap(s))return;
  if(e.target.closest('input,textarea'))return;
  var dEl=e.target.closest('[data-id]');
  var id=dEl?dEl.getAttribute('data-id'):null;
  if(a.type==='klik'&&id===(klikDoel(a)?'__doel':a.doel)){
    var wrap=$('#onswrap'),wr=wrap.getBoundingClientRect(),b=dEl.getBoundingClientRect();
    var cx=(e.clientX||b.left+b.width/2)-wr.left,cy=(e.clientY||b.top+b.height/2)-wr.top;
    var focusIn=document.activeElement&&document.activeElement.closest&&document.activeElement.closest('.sch,.ons,.tel');
    vooruit({t:a.goed});
    nuUpdate([cx,cy],true);
    if(focusIn&&M.doel){var nt=$('#onswrap [data-doel]');if(nt)nt.focus({preventScroll:true})}
    return;
  }
  if(a.type==='klik'){
    M.melding={t:a.hint||'Bijna. Kijk nog even goed naar het scherm.',hint:true};
    renderBal();
    var wz=$('.wijzer svg');if(wz&&!reduce){wz.classList.remove('is-schud');void wz.getBoundingClientRect();wz.classList.add('is-schud')}
  }
}
document.addEventListener('click',function(e){
  var h=location.hash.slice(1);
  if(h==='modules'){
    if(e.target.closest('#alle')){alle=!alle;var l=$('#alle-lijst'),b=$('#alle');l.hidden=!alle;b.setAttribute('aria-expanded',String(alle));b.textContent=alle?'Verberg modules':'Alle modules';return}
    var st=e.target.closest('[data-start]');if(st){M=null;KIES=st.getAttribute('data-start')}
    return;
  }
  if(h==='opleider'){
    if(e.target.closest('#schrijf')){var bb=$('#bericht'),o=bb.hidden;bb.hidden=!o;$('#schrijf').setAttribute('aria-expanded',String(o));return}
    if(e.target.closest('#kopieer')){var btn=$('#kopieer'),t=$('#bericht p').textContent,f=function(){btn.textContent='Gekopieerd'};try{navigator.clipboard.writeText(t).then(f,f)}catch(x){f()}}
    return;
  }
  if(h!=='module'||!M)return;
  if(e.target.closest('#klaar-knop')){M.klaarGemaakt=true;return}
  var s=huidig();
  if(e.target.closest('.sch,.ons,.tel')){onsKlik(e);return}
  var op=e.target.closest('[data-opt]');
  if(op){
    var i=+op.getAttribute('data-opt');
    if(s.type==='keuze'){
      var o=s.opties[i];M.keuze={i:i,goed:!!o.goed};
      M.melding={t:o.reactie,hint:!o.goed};
      renderBal();renderRuimte();
      var nb=$('[data-opt="'+i+'"]');if(nb)nb.focus({preventScroll:true});
      return;
    }
    if(s.type==='vraag'&&!M.gecheckt){
      M.antw=M.antw||[];
      if(s.meer){var p=M.antw.indexOf(i);if(p>=0)M.antw.splice(p,1);else M.antw.push(i)}
      else{M.antw=[i];M.gecheckt=true;M.melding=vraagMelding(s)}
      renderBal();renderRuimte();
      var nb2=$('[data-opt="'+i+'"]');if(nb2&&!M.gecheckt)nb2.focus({preventScroll:true});
      return;
    }
    return;
  }
  if(e.target.closest('#controleer')){M.gecheckt=true;M.melding=vraagMelding(s);renderBal();renderRuimte();return}
  if(e.target.closest('#verder')){
    var a=actief();
    if(a.type==='typ'){vooruit({t:a.goed});nuUpdate(null,true);return}
    if(s.type==='vraag'||s.type==='keuze'){vooruit(null);window.scrollTo(0,0);nuUpdate(null,false);return}
    vooruit(null);nuUpdate(null,true);return;
  }
});
document.addEventListener('input',function(e){
  var t=e.target;if(!t.getAttribute||!t.getAttribute('data-veld')||!M)return;
  var veld=t.getAttribute('data-veld');M.invoer[veld]=t.value;
  var l=document.querySelectorAll('[data-lijst][data-filter="'+veld+'"]');
  if(l.length){var b=null;(MD.schermen[M.scherm].inhoud||[]).forEach(function(x){if(x.type==='lijst'&&x.filter===veld)b=x});if(b)l.forEach(function(el){el.innerHTML=lijstRijen(b)})}
  $('#onder').innerHTML=onderHTML();
});
document.addEventListener('keydown',function(e){
  if((e.key==='Enter'||e.key===' ')&&e.target.matches&&e.target.matches('.ons [role="button"][data-id]')){e.preventDefault();e.target.click()}
});
window.addEventListener('resize',function(){if(location.hash==='#module')plaats()});

/* Voor het doorloopscript (loop.mjs): waar staat de module nu. */
window.__motor={stap:function(){if(!M||location.hash!=='#module')return null;var s=huidig(),a=actief();return {i:M.i,j:M.j,n:M.mod.stappen.length,type:s.type,sub:a.type,id:a.id||s.id||null,veld:a.veld||null,doel:a.type==='klik'?(klikDoel(a)?'__doel':a.doel):null,meer:!!s.meer}}};

/* ---------- Opleider ---------- */
function totaalVan(p){var O=KL.opleider,r=p.rol&&KL.rollen.filter(function(x){return x.id===p.rol})[0];return r?r.modules.length:O.totaal}
function sub2(p){return [p.f,p.t].filter(Boolean).map(esc).join(' · ')+' · gestart '+esc(p.s)}
function rij(p){
  var tot=totaalVan(p),af=p.k>=tot,seg='';
  for(var i=0;i<tot;i++)seg+='<i class="'+(i<p.k?'k':'')+'"></i>';
  return '<li class="rij"><div><h2>'+esc(p.n)+'</h2><p>'+sub2(p)+'</p></div><div class="balkje"><div class="segs" role="img" aria-label="'+p.k+' van '+tot+'">'+seg+'</div>'+p.k+' van '+tot+'</div><div class="stat">'+(af?CHECK2+'Alles af':'Op schema')+'</div></li>';
}
function viewOpleider(){
  var O=KL.opleider,tot=O.totaal,g=O.groep,ad=O.aandacht;
  var af=g.filter(function(p){return p.k>=totaalVan(p)}).length,achter=g.filter(function(p){return p.achter}).length;
  var rest=g.filter(function(p){return !p.achter});
  var zin=hoofd(woord(af))+' van de '+woord(g.length)+' collega\'s hebben alles af, en '+woord(achter)+' '+(achter===1?'loopt':'lopen')+' achter.';
  var d=g.filter(function(p){return p.achter})[0];
  return balk(O.naam,O.initialen||O.naam.charAt(0))+'<main class="kolom" id="main" style="max-width:860px"><div class="o-kop"><h1>'+esc(zin)+'</h1><p>Gemiddelde score op het meetmoment: '+O.gemiddeldeScore+'%.</p></div>'+
  (d?'<section class="daan" aria-label="Aandacht nodig"><div class="daan__wie"><i aria-hidden="true">'+esc(d.n.split(' ').map(function(x){return x.charAt(0)}).slice(0,2).join(''))+'</i><div><h2>'+esc(d.n)+'</h2><p>'+sub2(d)+'</p></div></div><p class="zin">'+esc(ad.zin)+'</p>'+
  '<button type="button" class="knop knop--sig" id="schrijf" aria-expanded="false" aria-controls="bericht">'+esc(ad.knop)+'</button><div class="bericht" id="bericht" hidden><p>'+esc(ad.bericht)+'</p><button type="button" class="knop" id="kopieer">Kopieer bericht</button></div></section>':'')+
  '<ul class="rijen">'+rest.map(rij).join('')+'</ul>'+voet()+'</main>';
}

/* ---------- router en wisselaar ---------- */
function render(){
  var h=location.hash.slice(1);if(['modules','module','opleider'].indexOf(h)<0)h='modules';
  var r=document.documentElement.style;r.setProperty('--k',KL.kleur);r.setProperty('--acc',KL.accent);
  if(h==='modules')app.innerHTML=viewModules();else if(h==='module')viewModule();else app.innerHTML=viewOpleider();
  document.querySelectorAll('.x-wissel a').forEach(function(a){if(a.getAttribute('href')==='#'+h)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
  $('[data-rol]').textContent='Rol: '+rolObj().naam;
  document.title='Leren in je dienst · '+KL.naam;
}
window.addEventListener('hashchange',function(){render();window.scrollTo(0,0)});
$('[data-rol]').addEventListener('click',function(){
  var ids=KL.rollen.map(function(r){return r.id}),n=(ids.indexOf(S.rol)+1)%ids.length;S.rol=ids[n];M=null;render();
});
render();
})();
