import type { AgreementSection } from "../../types";

export const section03 = [
  {
    id: "3.1.1",
    title: "Pojam aktivacije",
    paragraphs: [
      "Aktivacijom Uređaja smatra se radnja Korisnika predviđena sučeljem, usmjerena na pokretanje sesije koncentracije. Za potrebe Sporazuma aktivacija znači slanje naredbe programskom mehanizmu, a ne pokretanje samostalnog fizičkog uređaja.",
      "Namjera pokretanja sesije bez poduzimanja odgovarajuće radnje ne smatra se tehničkom aktivacijom. Takva namjera ipak može prethoditi aktivaciji i ne zahtijeva zasebnu potvrdu Društva.",
    ],
  },
  {
    id: "3.1.2",
    title: "Uvjeti dostupnosti aktivacije",
    paragraphs: [
      "Mogućnost aktivacije ovisi o stvarnoj dostupnosti sučelja, stanju programskih elemenata i izvršenju potrebnih prethodnih radnji. Sama vidljivost gumba ne jamči uspješno pokretanje sesije.",
      "Ako naredba nije obrađena, Korisnik može ponoviti radnju nakon provjere stanja stranice. Neuspjeli pokušaj ne stvara obvezu prikazivanja sesije kao da je započela.",
    ],
  },
  {
    id: "3.1.3",
    title: "Jednokratnost naredbe za pokretanje",
    paragraphs: [
      "Jedna valjana radnja pokretanja predstavlja jedan pokušaj započinjanja sesije. Ponovljeni pritisak prije odgovora sučelja ocjenjuje se prema stvarnom ponašanju programskog mehanizma.",
      "Društvo nije obvezno priznati svaki dodatni pritisak kao zasebnu sesiju ako sučelje ne predviđa takav ishod. Broj pritisaka i broj održanih sesija mogu se razlikovati.",
    ],
  },
  {
    id: "3.1.4",
    title: "Trenutak početka odbrojavanja",
    paragraphs: [
      "Početkom odbrojavanja smatra se trenutak u kojem sučelje prebacuje sesiju u aktivno stanje i počinje računati predviđeni interval. Vrijeme prethodnog čekanja, učitavanja stranice ili traženja gumba ne uračunava se u trajanje sesije.",
      "Ako prikaz pokretanja kasni, mjerodavni su podaci kojima raspolaže samo sučelje. Korisnikov subjektivni dojam da je sesija započela ranije ne mijenja automatski trenutak utvrđen programom.",
    ],
  },
  {
    id: "3.1.5",
    title: "Aktivacija bez sigurnosti u rezultat",
    paragraphs: [
      "Korisnik smije započeti sesiju bez uvjerenja da će postići koncentraciju. Pristanak na pokretanje znači pristanak na izvršenje predviđenog slijeda radnji, ali ne i potvrdu budućeg poboljšanja pozornosti.",
      "Nesigurnost, sumnja u korisnost Uređaja ili skeptičan odnos prema njegovu nazivu ne sprečavaju aktivaciju. Takve okolnosti nije potrebno prethodno opovrgnuti.",
    ],
  },
  {
    id: "3.2.1",
    title: "Opći postupak provođenja sesije",
    paragraphs: [
      "Sesija se sastoji od početka, tijeka utvrđenog intervala i završetka, koji se prikazuju sredstvima sučelja. Slijed je programske naravi i ne zahtijeva vanjskog promatrača koji bi potvrdio svaku fazu.",
      "Korisnik može tijekom sesije poduzimati vlastite radnje ili ostati nepomičan. Prisutnost ili odsutnost tih radnji ne mijenja automatski slijed tehničkih stanja.",
    ],
  },
  {
    id: "3.2.2",
    title: "Odnos sesije i Korisnikovih radnji",
    paragraphs: [
      "Tehnička sesija i stvarna Korisnikova aktivnost zasebne su okolnosti. Pokretanje mjerača vremena ne dokazuje da je Korisnik tijekom cijelog intervala zadržao pozornost na određenom predmetu.",
      "Pri ocjeni Korisnikova ponašanja tijekom sesije primjenjuju se i odredbe točke 4.6.3. To upućivanje ne proširuje mogućnosti sučelja niti promatranje mjerača vremena pretvara u obvezan oblik koncentracije.",
    ],
  },
  {
    id: "3.2.3",
    title: "Trajanje utvrđenog intervala",
    paragraphs: [
      "Propisano trajanje jedne sesije koncentracije u sučelju iznosi tri minute. Navedeno trajanje opisuje programski način rada i nije univerzalna preporuka o trajanju umnog rada.",
      "Korisnik smije nastaviti vlastitu aktivnost nakon isteka intervala. Takav nastavak ne znači automatsko produljenje završene sesije.",
    ],
  },
  {
    id: "3.2.4",
    title: "Prikazani kontinuitet procesa",
    paragraphs: [
      "Pri redovitom radu sučelje prikazuje tijek sesije kao neprekinut proces. Promjena brojčanih vrijednosti, grafike ili animacije služi prikazivanju stanja programa.",
      "Kontinuitet vizualnog prikaza ne potvrđuje kontinuitet Korisnikove misaone aktivnosti. Kratkotrajno odvraćanje pozornosti može proći nezapaženo u sučelju i ne podliježe automatskom tehničkom bilježenju.",
    ],
  },
  {
    id: "3.2.5",
    title: "Nepostojanje obvezne vanjske aktivnosti",
    paragraphs: [
      "Tijekom sesije Korisnik nije obvezan obavljati dodatne fizičke radnje ako nisu izričito predviđene sučeljem. Promatranje, čitanje, razmišljanje i neaktivnost mogu pratiti isti programski način rada.",
      "Društvo ne uspostavlja pretpostavku da je nepomičnost jednaka koncentraciji. Jednako tako, Korisnikovo kretanje ne smatra se bezuvjetnim dokazom odsutnosti pozornosti.",
    ],
  },
  {
    id: "3.3.1",
    title: "Prikaz vremena u sučelju",
    paragraphs: [
      "Preostalo ili proteklo vrijeme može se prikazivati brojevima, grafičkim elementima i drugim vizualnim sredstvima. Takav prikaz služi Korisniku za orijentaciju tijekom sesije.",
      "Prikazana vrijednost nije samostalno mjerenje psihičkog stanja. Podaci o vremenu ne smiju se tumačiti kao podaci o količini akumulirane koncentracije.",
    ],
  },
  {
    id: "3.3.2",
    title: "Razlika između vremena i subjektivnog doživljaja",
    paragraphs: [
      "Trominutni interval Korisnik može doživjeti kao kratak, dug ili neodređen. Subjektivna procjena brzine protjecanja vremena ne utječe na utvrđeno trajanje programskog načina rada.",
      "Ako se Korisniku učini da je vrijeme stalo ili proteklo brže od očekivanog, takav se osjećaj bez dodatnih objektivnih pokazatelja ne smatra tehničkim kvarom.",
    ],
  },
  {
    id: "3.3.3",
    title: "Značenje animacije tijekom sesije",
    paragraphs: [
      "Animacija, promjena oblika, boje ili položaja elemenata sučelja mogu pratiti aktivnu sesiju. One imaju informacijsku i umjetničku funkciju u okviru programskog prikaza Uređaja.",
      "Samo kretanje slike ne znači fizičko premještanje bilo kojeg predmeta. Izostanak uočljive animacije također ne dokazuje prekid sesije ako drugi predviđeni pokazatelji upućuju na njezin nastavak.",
    ],
  },
  {
    id: "3.3.4",
    title: "Informativne poruke",
    paragraphs: [
      "Tijekom sesije sučelje može prikazivati poruke o trenutačnom stanju, očekivanom završetku ili dostupnim radnjama. Sadržaj tih poruka određuje važeća izvedba programa.",
      "Informativna poruka nije individualna procjena Korisnika ako to nije izričito predviđeno. Korisnik nije obvezan svaku rečenicu sučelja shvaćati kao zaključak o vlastitim sposobnostima.",
    ],
  },
  {
    id: "3.3.5",
    title: "Granice točnosti vizualnih pokazatelja",
    paragraphs: [
      "Vizualni pokazatelji stanja mogu ovisiti o učestalosti osvježavanja zaslona, performansama Korisnikova uređaja i drugim tehničkim okolnostima. Njihova je svrha pristupačan prikaz procesa, a ne mjeriteljsko potvrđivanje svakog trenutka.",
      "U slučaju neslaganja animacije i stvarnog programskog stanja prednost ima pravilno utvrđeno stanje sesije. Izgled sučelja ne stvara zasebno vrijeme različito od vremena rada programa.",
    ],
  },
  {
    id: "3.4.1",
    title: "Mogućnost odvraćanja pozornosti",
    paragraphs: [
      "Odvraćanjem pozornosti smatra se privremeno premještanje Korisnikove pozornosti s odabranog predmeta na drugi predmet, događaj ili misao. Ono se može dogoditi neovisno o stanju Uređaja i bez promjene prikazanog mjerača vremena.",
      "Sama činjenica odvraćanja pozornosti ne poništava prethodno provedenu aktivaciju. Pitanje kvalitete koncentracije ne zamjenjuje pitanje tehničkog završetka sesije.",
    ],
  },
  {
    id: "3.4.2",
    title: "Povratak odabranom predmetu",
    paragraphs: [
      "Nakon odvraćanja pozornosti Korisnik smije samostalno ponovno usmjeriti pozornost unutar intervala koji još traje. Za takav povratak nije potrebno ponovno prihvaćanje Sporazuma.",
      "Ako Korisnik nije primijetio trenutak odvraćanja pozornosti, nepoznavanje točnog vremena njegova početka ne sprečava daljnje korištenje sučelja. Društvo nije obvezno utvrđivati trajanje odvraćanja pozornosti koje ni Korisniku nije poznato.",
    ],
  },
  {
    id: "3.4.3",
    title: "Vanjski podražaji",
    paragraphs: [
      "Zvukovi, obavijesti, kretanje osoba u okolini i druge vanjske okolnosti mogu utjecati na doživljaj sesije. Prisutnost takvih podražaja ne znači da je programski slijed promijenjen.",
      "Korisnik samostalno odlučuje hoće li ukloniti podražaj, zanemariti ga ili prekinuti vlastitu aktivnost. Sučelje ne jamči stvaranje vanjskog okruženja bez ometanja.",
    ],
  },
  {
    id: "3.4.4",
    title: "Istodobna aktivnost",
    paragraphs: [
      "Korisnik tijekom sesije može istodobno obavljati radnje koje nisu izravno povezane sa sučeljem. Njihovu usklađenost s osobnim ciljem koncentracije Korisnik određuje prema prirodi aktivnosti.",
      "Postojanje više otvorenih kartica, aplikacija ili predmeta pozornosti nije automatski dokaz povrede tehničkih uvjeta sesije. Društvo ne provodi sveobuhvatan nadzor nad takvom aktivnošću.",
    ],
  },
  {
    id: "3.4.5",
    title: "Nepostojanje kazne za odvraćanje pozornosti",
    paragraphs: [
      "Ako važeće sučelje ne predviđa poseban mehanizam bilježenja odvraćanja pozornosti, ona ne dovode do zasebnih tehničkih kazni, sankcija ili negativnih bodova. Nepotvrđene pretpostavke o odvraćanju pozornosti ne mogu zamijeniti podatke takvog mehanizma.",
      "Korisnik nije obvezan dokazivati neprekinutu pozornost samo radi priznavanja činjenice da je mjerač vremena završio. Procjena učinkovitosti ostaje zasebno pitanje.",
    ],
  },
  {
    id: "3.5.1",
    title: "Pojam privremene obustave",
    paragraphs: [
      "Privremenom obustavom smatra se programom predviđen prijelaz iz aktivnog stanja u stanje čekanja uz mogućnost naknadnog nastavka. Ako takav način rada ne postoji u sučelju, sama Korisnikova želja da zaustavi vrijeme ne stvara privremenu obustavu.",
      "Prebacivanje na drugu karticu ili prestanak gledanja u zaslon ne mora biti jednak privremenoj obustavi. Posljedice ovise o stvarnoj izvedbi programskog mehanizma.",
    ],
  },
  {
    id: "3.5.2",
    title: "Nastavak nakon stanke",
    paragraphs: [
      "Ako sučelje podržava stanku, nastavak se provodi radnjom Korisnika predviđenom za tu svrhu. Trajanje preostalog intervala određuje program prema spremljenom stanju.",
      "Ponovno pokretanje umjesto nastavka može predstavljati novu sesiju ako je sučelje tako izvedeno. Korisnik ne smije pretpostaviti istovjetnost tih radnji bez potvrde njihova tehničkog ishoda.",
    ],
  },
  {
    id: "3.5.3",
    title: "Prijevremeni prekid sesije",
    paragraphs: [
      "Prijevremenim prekidom smatra se završetak aktivne sesije prije isteka utvrđenog intervala predviđenom radnjom ili zbog stvarnog gubitka mogućnosti nastavka. Takav prekid razlikuje se od redovitog završetka prema mjeraču vremena.",
      "Pitanja prestanka pristupa i drugih posljedica uređena su i točkom 14.2.2. Upućivanje na nju ne znači da svako zatvaranje kartice automatski prekida sve odnose između Društva i Korisnika.",
    ],
  },
  {
    id: "3.5.4",
    title: "Zatvaranje stranice tijekom sesije",
    paragraphs: [
      "Zatvaranje stranice, ponovno učitavanje preglednika ili gubitak veze mogu utjecati na prikaz i očuvanje trenutačnog stanja. Posljedice ovise o stvarnoj izvedbi programa i ne podrazumijevaju obvezno vraćanje nedovršenog intervala.",
      "Ako Korisnik nakon povratka ne vidi prethodnu sesiju, ta okolnost sama po sebi ne dokazuje da sesija nije započela prije zatvaranja stranice. Međutim, ne potvrđuje ni njezin uspješan završetak.",
    ],
  },
  {
    id: "3.5.5",
    title: "Prekid bez Korisnikove namjere",
    paragraphs: [
      "Sesija može biti prekinuta tehničkim okolnostima neovisnima o Korisnikovoj namjeri, uključujući pad preglednika ili prekid napajanja uređaja. Takav događaj treba razlikovati od dobrovoljnog odustajanja od nastavka interakcije.",
      "Društvo ocjenjuje tehničke posljedice prekida prema dostupnim podacima. Nedostatak potvrdnih podataka ne smije se automatski zamijeniti pretpostavkom o Korisnikovoj krivnji.",
    ],
  },
  {
    id: "3.6.1",
    title: "Redoviti završetak intervala",
    paragraphs: [
      "Redovitim završetkom smatra se dosezanje utvrđene završne točke trominutnog odbrojavanja u skladu s programskom logikom. Sučelje može označiti taj trenutak promjenom stanja, porukom ili drugim vizualnim signalom.",
      "Završetak intervala potvrđuje dovršetak predviđenog slijeda, ali ne utvrđuje postizanje određenog intelektualnog rezultata. Korisnik smije zasebno procijeniti rezultat.",
    ],
  },
  {
    id: "3.6.2",
    title: "Obavijest o završetku",
    paragraphs: [
      "Poruka o završetku sesije namijenjena je obavještavanju Korisnika o tehničkom događaju. Oblik poruke može se razlikovati ovisno o inačici sučelja i korištenom uređaju.",
      "Ako Korisnik nije primijetio obavijest, to ne znači da se istekli interval automatski nastavlja. Trenutak završetka određuje stanje programa, a ne trenutak čitanja poruke.",
    ],
  },
  {
    id: "3.6.3",
    title: "Radnje nakon završetka",
    paragraphs: [
      "Nakon završetka Korisnik smije zatvoriti sučelje, nastaviti vlastitu aktivnost ili pokrenuti novu sesiju ako je ta mogućnost dostupna. Nijedna od tih radnji ne smatra se obveznim nastavkom već završenog intervala.",
      "Ostavljanje stranice otvorenom nakon završetka ne znači neprekidno korištenje aktivnog načina rada. Trajanje naknadnog boravka na stranici ne pribraja se automatski završenoj sesiji.",
    ],
  },
  {
    id: "3.6.4",
    title: "Ponovno pokretanje",
    paragraphs: [
      "Nova sesija nastaje nakon zasebne predviđene radnje pokretanja ako sučelje dopušta ponovnu aktivaciju. Prethodni završeni interval ne smatra se nedovršenim samo zato što je Korisnik odlučio započeti sljedeći.",
      "Uzastopne sesije mogu se doživljavati kao jedinstvena osobna praksa, ali tehnički ostaju zasebni intervali. Takav doživljaj ne mijenja način njihova bilježenja, ako je bilježenje predviđeno.",
    ],
  },
  {
    id: "3.6.5",
    title: "Nepostojanje obveznog izvješća",
    paragraphs: [
      "Ako sučelje ne predviđa poseban oblik izvješćivanja, Korisnik nije obvezan nakon svake sesije opisivati misli, nabrajati odvraćanja pozornosti ili potvrđivati vlastitu produktivnost. Završetak mjerača vremena ne ovisi o sastavljanju pisanog zaključka.",
      "Dobrovoljno sažimanje rezultata ostaje osobna Korisnikova radnja. Društvo ne smatra izostanak izvješća dokazom beskorisnosti sesije.",
    ],
  },
  {
    id: "3.7.1",
    title: "Ponovljivost sesija koncentracije",
    paragraphs: [
      "Korisnik smije provesti više sesija dok je sučelje dostupno. Svako novo pokretanje razmatra se prema vlastitom trenutku početka i završetka.",
      "Broj sesija sam po sebi ne opisuje kvalitetu pozornosti. Nekoliko kratkih intervala ne čini automatski jednu neprekinutu sesiju duljeg trajanja.",
    ],
  },
  {
    id: "3.7.2",
    title: "Intervali između sesija",
    paragraphs: [
      "Razdoblje između završetka jedne sesije i početka sljedeće ne pripada aktivnom vremenu nijedne od njih. Tijekom tog razdoblja Korisnik se može odmarati, baviti drugim poslovima ili zadržati pozornost na prethodnom predmetu.",
      "Izostanak radnji između sesija ne stvara zaseban način rada Uređaja. Osobni kontinuitet koncentracije ne zahtijeva kontinuitet programskog odbrojavanja.",
    ],
  },
  {
    id: "3.7.3",
    title: "Uvjetni kumulativni rezultat",
    paragraphs: [
      "Ako sučelje prikazuje broj provedenih sesija ili druge zbirne pokazatelje, oni opisuju zabilježene programske događaje unutar dostupnih podataka. Takvi pokazatelji nisu izravno mjerenje stečene koncentracije.",
      "Zbrajanje trajanja intervala dopušteno je kao aritmetička operacija, ali ne potvrđuje jednakovrijedan porast sposobnosti održavanja pozornosti. Korisnik nije obvezan ukupnom broju pripisivati psihološko značenje.",
    ],
  },
  {
    id: "3.7.4",
    title: "Usporedivost različitih sesija",
    paragraphs: [
      "Sesije se mogu razlikovati prema vanjskim uvjetima, odabranom zadatku i Korisnikovim subjektivnim osjećajima. Jednako trajanje ne znači jednaku zahtjevnost ni jednaku korisnost.",
      "Usporedba više sesija dopuštena je u osobne svrhe, ali njezini rezultati ne čine univerzalnu ljestvicu korisnika niti potvrđuju nadmoć jedne osobe nad drugom.",
    ],
  },
  {
    id: "3.8.1",
    title: "Sesija bez utvrđenog cilja",
    paragraphs: [
      "Korisnik može pokrenuti sesiju bez prethodnog oblikovanja konkretnog zadatka. Nepostojanje oblikovanog cilja ne sprečava rad mjerača vremena ako sučelje ne zahtijeva njegovo obvezno navođenje.",
      "Takva se sesija ne smatra tehnički neodržanom samo zbog neodređenosti namjera. Procjena njezine osobne korisnosti ostaje na Korisniku.",
    ],
  },
  {
    id: "3.8.2",
    title: "Sesija praćena sumnjom",
    paragraphs: [
      "Sumnja u potrebu za sesijom, njezinu učinkovitost ili prikladnost odabranog trenutka ne poništava tehničko značenje provedene aktivacije. Korisnik smije preispitivati vlastita očekivanja tijekom rada sučelja.",
      "Društvo ne smatra Korisnikovo unutarnje neslaganje s pretpostavljenom koristi sesije naredbom za otkazivanje. Za promjenu stanja programa potrebna je predviđena radnja ili nastup odgovarajućeg tehničkog događaja.",
    ],
  },
  {
    id: "3.8.3",
    title: "Sesija bez subjektivno zamjetnog učinka",
    paragraphs: [
      "Po završetku sesije Korisnik možda neće primijetiti promjene u pozornosti, raspoloženju ili uspješnosti aktivnosti. Izostanak zamjetnog učinka nije isto što i nepostojanje samog programskog intervala.",
      "Društvo ne jamči nastanak određenog doživljaja nakon završetka odbrojavanja. Korisnik smije smatrati sesiju beskorisnom za sebe bez potrebe da poriče činjenicu njezina tehničkog provođenja.",
    ],
  },
  {
    id: "3.8.4",
    title: "Završno razgraničenje postupka i rezultata",
    paragraphs: [
      "Za potrebe ovog odjeljka aktivacija, tijek i završetak sesije pripadaju postupku utvrđenom sučeljem, dok koncentracija i osobna korisnost pripadaju okolnostima koje se ocjenjuju zasebno. Te se kategorije ne smiju međusobno zamjenjivati.",
      "Završena sesija potvrđuje provedbu predviđenog vremenskog slijeda u granicama dostupnih tehničkih podataka. Ona ne potvrđuje uspješnost misli, odsutnost odvraćanja pozornosti ni ostvarenje cilja koji Korisnik možda nije ni oblikovao.",
    ],
  },
] satisfies AgreementSection;
