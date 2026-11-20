import type { AgreementSection } from "../../types";

export const section03 = [
  {
    id: "3.1.1",
    title: "Pojam aktivacije",
    paragraphs: [
      "Aktivacijom Uređaja smatra se radnja Korisnika predviđena interfejsom, usmerena na započinjanje sesije koncentracije. Za potrebe Sporazuma aktivacija znači slanje komande programskom mehanizmu, a ne pokretanje samostalnog fizičkog aparata.",
      "Namera da se sesija započne bez preduzimanja odgovarajuće radnje ne smatra se tehničkom aktivacijom. Takva namera ipak može prethoditi aktivaciji i ne zahteva posebnu potvrdu Kompanije.",
    ],
  },
  {
    id: "3.1.2",
    title: "Uslovi dostupnosti aktivacije",
    paragraphs: [
      "Mogućnost aktivacije zavisi od stvarne dostupnosti interfejsa, stanja programskih elemenata i izvršenja neophodnih prethodnih radnji. Samo vizuelno prisustvo dugmeta ne garantuje uspešan početak sesije.",
      "Ako komanda nije obrađena, Korisnik ima pravo da ponovi radnju nakon provere stanja stranice. Neuspešan pokušaj ne stvara obavezu da se sesija prikazuje kao započeta.",
    ],
  },
  {
    id: "3.1.3",
    title: "Jednokratnost komande za pokretanje",
    paragraphs: [
      "Jedna pravilno izvršena radnja pokretanja predstavlja jedan pokušaj započinjanja sesije. Ponovljeni pritisak pre odgovora interfejsa ocenjuje se prema stvarnom ponašanju programskog mehanizma.",
      "Kompanija nije dužna da svaki dodatni pritisak prizna kao zasebnu sesiju ako interfejs ne predviđa takav ishod. Broj pritisaka i broj održanih sesija mogu se razlikovati.",
    ],
  },
  {
    id: "3.1.4",
    title: "Trenutak početka odbrojavanja",
    paragraphs: [
      "Početkom odbrojavanja smatra se trenutak u kojem interfejs prebacuje sesiju u aktivno stanje i počinje da računa predviđeni interval. Vreme prethodnog čekanja, učitavanja stranice ili traženja dugmeta ne uračunava se u trajanje sesije.",
      "Ako prikaz pokretanja kasni, merodavni su podaci kojima raspolaže sam interfejs. Subjektivni osećaj Korisnika da je sesija počela ranije ne menja automatski trenutak utvrđen programom.",
    ],
  },
  {
    id: "3.1.5",
    title: "Aktivacija bez sigurnosti u rezultat",
    paragraphs: [
      "Korisnik ima pravo da započne sesiju bez uverenja da će postići koncentraciju. Pristanak na pokretanje znači pristanak na izvršenje predviđenog niza radnji, ali ne i potvrdu budućeg poboljšanja pažnje.",
      "Nedostatak sigurnosti, sumnja u korisnost Uređaja ili skeptičan odnos prema njegovom nazivu ne sprečavaju aktivaciju. Takve okolnosti ne zahtevaju prethodno opovrgavanje.",
    ],
  },
  {
    id: "3.2.1",
    title: "Opšti postupak sprovođenja sesije",
    paragraphs: [
      "Sesija se sastoji od početka, trajanja utvrđenog intervala i završetka, koji se prikazuju sredstvima interfejsa. Redosled je programske prirode i ne zahteva spoljnog posmatrača koji potvrđuje svaku fazu.",
      "Korisnik može pratiti sesiju sopstvenim radnjama ili ostati nepomičan. Prisustvo ili odsustvo takvih radnji ne menja automatski redosled tehničkih stanja.",
    ],
  },
  {
    id: "3.2.2",
    title: "Odnos sesije i radnji Korisnika",
    paragraphs: [
      "Tehnička sesija i stvarna aktivnost Korisnika predstavljaju zasebne okolnosti. Pokretanje tajmera ne dokazuje da je Korisnik tokom čitavog intervala održavao pažnju na određenom objektu.",
      "Pri ocenjivanju ponašanja Korisnika tokom sesije primenjuju se i odredbe tačke 4.6.3. To upućivanje ne proširuje mogućnosti interfejsa niti pretvara posmatranje tajmera u obavezan oblik koncentracije.",
    ],
  },
  {
    id: "3.2.3",
    title: "Trajanje utvrđenog intervala",
    paragraphs: [
      "Propisano trajanje jedne sesije koncentracije u interfejsu iznosi tri minuta. Taj period opisuje programski režim i ne predstavlja univerzalnu preporuku za trajanje umnog rada.",
      "Korisnik ima pravo da nastavi sopstvenu aktivnost po isteku intervala. Takav nastavak ne znači automatsko produženje završene sesije.",
    ],
  },
  {
    id: "3.2.4",
    title: "Kontinuitet prikazanog procesa",
    paragraphs: [
      "Pri uobičajenom radu interfejs prikazuje tok sesije kao uzastopan proces. Promene brojčanih vrednosti, grafike ili animacije služe za predstavljanje stanja programa.",
      "Kontinuitet vizuelnog prikaza ne potvrđuje kontinuitet misaone aktivnosti Korisnika. Kratkotrajno odvraćanje pažnje može ostati neprimećeno u interfejsu i ne podleže automatskom tehničkom evidentiranju.",
    ],
  },
  {
    id: "3.2.5",
    title: "Odsustvo obavezne spoljne aktivnosti",
    paragraphs: [
      "Tokom sesije Korisnik nije dužan da obavlja dodatne fizičke radnje, osim ako ih interfejs izričito predviđa. Posmatranje, čitanje, razmišljanje i nečinjenje mogu pratiti isti programski režim.",
      "Kompanija ne uspostavlja pretpostavku da je nepomičnost jednaka koncentraciji. Isto tako, kretanje Korisnika ne smatra se bezuslovnim dokazom odsustva pažnje.",
    ],
  },
  {
    id: "3.3.1",
    title: "Prikaz vremena u interfejsu",
    paragraphs: [
      "Preostalo ili proteklo vreme može biti prikazano brojevima, grafičkim elementima i drugim vizuelnim sredstvima. Takav prikaz namenjen je orijentaciji Korisnika tokom sesije.",
      "Prikazana vrednost nije samostalno merenje psihičkog stanja. Podaci o vremenu ne smeju se tumačiti kao podaci o količini akumulirane koncentracije.",
    ],
  },
  {
    id: "3.3.2",
    title: "Razlika između vremena i subjektivnog doživljaja",
    paragraphs: [
      "Trominutni interval Korisniku može delovati kratko, dugo ili neodređeno. Subjektivna procena brzine proticanja vremena ne utiče na utvrđeno trajanje programskog režima.",
      "Ako se Korisniku učini da je vreme stalo ili prošlo brže od očekivanog, taj osećaj se bez dodatnih objektivnih pokazatelja ne smatra tehničkim kvarom.",
    ],
  },
  {
    id: "3.3.3",
    title: "Značaj animacije tokom sesije",
    paragraphs: [
      "Animacija, promena oblika, boje ili položaja elemenata interfejsa mogu pratiti aktivnu sesiju. Oni imaju informativnu i umetničku funkciju u okviru programskog prikaza Uređaja.",
      "Samo kretanje slike ne znači fizičko pomeranje bilo kog objekta. Ni odsustvo primetne animacije ne dokazuje prekid sesije ako drugi predviđeni pokazatelji ukazuju na njen nastavak.",
    ],
  },
  {
    id: "3.3.4",
    title: "Informativne poruke",
    paragraphs: [
      "Tokom sesije interfejs može prikazivati poruke o trenutnom stanju, očekivanom završetku ili dostupnim radnjama. Sadržaj takvih poruka određuje važeća implementacija programa.",
      "Informativna poruka nije individualna procena Korisnika, osim ako je to izričito predviđeno. Korisnik nije dužan da svaku rečenicu interfejsa shvati kao zaključak o sopstvenim sposobnostima.",
    ],
  },
  {
    id: "3.3.5",
    title: "Granice preciznosti vizuelnih pokazatelja",
    paragraphs: [
      "Vizuelni pokazatelji stanja mogu zavisiti od učestalosti osvežavanja ekrana, performansi uređaja Korisnika i drugih tehničkih okolnosti. Njihova svrha je pristupačan prikaz procesa, a ne metrološka potvrda svakog trenutka.",
      "U slučaju neslaganja animacije i stvarnog programskog stanja, prednost ima pravilno utvrđeno stanje sesije. Izgled interfejsa ne stvara posebno vreme različito od vremena rada programa.",
    ],
  },
  {
    id: "3.4.1",
    title: "Mogućnost odvraćanja pažnje",
    paragraphs: [
      "Odvraćanjem pažnje smatra se privremeno preusmeravanje pažnje Korisnika sa izabranog objekta na drugi objekat, događaj ili misao. Ono se može dogoditi nezavisno od stanja Uređaja i bez promene prikazanog tajmera.",
      "Sama činjenica odvraćanja pažnje ne poništava prethodnu aktivaciju. Pitanje kvaliteta koncentracije ne zamenjuje pitanje tehničkog završetka sesije.",
    ],
  },
  {
    id: "3.4.2",
    title: "Vraćanje izabranom objektu",
    paragraphs: [
      "Nakon odvraćanja pažnje Korisnik ima pravo da samostalno ponovo usmeri pažnju tokom intervala koji još traje. Za takav povratak nije potrebno ponovno prihvatanje Sporazuma.",
      "Ako Korisnik nije primetio trenutak odvraćanja pažnje, nepostojanje tačnog vremena njegovog početka ne sprečava dalju upotrebu interfejsa. Kompanija nije dužna da utvrđuje trajanje odvraćanja pažnje koje nije poznato ni Korisniku.",
    ],
  },
  {
    id: "3.4.3",
    title: "Spoljašnji ometači",
    paragraphs: [
      "Zvuci, obaveštenja, kretanje drugih osoba i druge spoljne okolnosti mogu uticati na doživljaj sesije. Prisustvo takvih ometača ne znači da je programski redosled promenjen.",
      "Korisnik sam odlučuje da li će ukloniti ometač, ignorisati ga ili prekinuti sopstvenu aktivnost. Interfejs ne garantuje stvaranje spoljnog okruženja bez smetnji.",
    ],
  },
  {
    id: "3.4.4",
    title: "Paralelna aktivnost",
    paragraphs: [
      "Korisnik može tokom sesije istovremeno obavljati radnje koje nisu neposredno povezane sa interfejsom. Njihovu usklađenost sa ličnim ciljem koncentracije Korisnik određuje prema prirodi aktivnosti.",
      "Više otvorenih kartica, aplikacija ili predmeta pažnje ne predstavlja automatski dokaz kršenja tehničkih uslova sesije. Kompanija ne sprovodi sveobuhvatan nadzor nad takvom aktivnošću.",
    ],
  },
  {
    id: "3.4.5",
    title: "Odsustvo kazne za odvraćanje pažnje",
    paragraphs: [
      "Ako važeći interfejs ne predviđa poseban mehanizam za evidentiranje odvraćanja pažnje, ono ne povlači zasebne tehničke kazne, sankcije ili negativne poene. Nepotvrđene pretpostavke o odvraćanju pažnje ne mogu zameniti podatke takvog mehanizma.",
      "Korisnik nije dužan da dokazuje neprekidnost pažnje samo radi priznavanja činjenice da je tajmer istekao. Procena efikasnosti ostaje zasebno pitanje.",
    ],
  },
  {
    id: "3.5.1",
    title: "Pojam pauziranja",
    paragraphs: [
      "Pauziranjem se smatra privremeni prelazak iz aktivnog stanja u stanje čekanja, predviđen programom, uz mogućnost naknadnog nastavka. Ako takav režim ne postoji u interfejsu, sama želja Korisnika da zaustavi vreme ne stvara pauzu.",
      "Prelazak na drugu karticu ili prestanak gledanja u ekran ne mora biti isto što i pauziranje. Posledice zavise od stvarne implementacije programskog mehanizma.",
    ],
  },
  {
    id: "3.5.2",
    title: "Nastavak nakon pauze",
    paragraphs: [
      "Ako interfejs podržava pauzu, nastavak se vrši radnjom Korisnika koja je za to predviđena. Trajanje preostalog intervala program određuje prema sačuvanom stanju.",
      "Ponovno pokretanje umesto nastavka može predstavljati novu sesiju ako je interfejs tako osmišljen. Korisnik ne može pretpostaviti da su te radnje istovetne bez potvrde njihovog tehničkog ishoda.",
    ],
  },
  {
    id: "3.5.3",
    title: "Prevremeni prekid sesije",
    paragraphs: [
      "Prevremenim prekidom smatra se završetak aktivne sesije pre isteka utvrđenog intervala, predviđenom radnjom ili usled stvarnog gubitka mogućnosti nastavka. Takav prekid razlikuje se od redovnog završetka po isteku tajmera.",
      "Pitanja prestanka pristupa i drugih posledica uređuju se i tačkom 14.2.2. Upućivanje na nju ne znači da svako zatvaranje kartice automatski prekida sve odnose između Kompanije i Korisnika.",
    ],
  },
  {
    id: "3.5.4",
    title: "Zatvaranje stranice tokom sesije",
    paragraphs: [
      "Zatvaranje stranice, ponovno učitavanje pregledača ili gubitak veze mogu uticati na prikaz i očuvanje trenutnog stanja. Posledice zavise od stvarnog ustrojstva programa i ne podrazumevaju obavezno obnavljanje nedovršenog intervala.",
      "Ako po povratku Korisnik ne vidi prethodnu sesiju, to samo po sebi ne dokazuje da sesija nije ni počela pre zatvaranja stranice. Istovremeno, to ne potvrđuje ni njen uspešan završetak.",
    ],
  },
  {
    id: "3.5.5",
    title: "Prekid bez namere Korisnika",
    paragraphs: [
      "Sesija može biti prekinuta tehničkim okolnostima nezavisnim od namere Korisnika, uključujući pad pregledača ili prekid napajanja uređaja. Takav događaj treba razlikovati od dobrovoljnog odustajanja od daljeg korišćenja.",
      "Kompanija procenjuje tehničke posledice prekida prema dostupnim podacima. Odsustvo potvrđujućih podataka ne sme se automatski zameniti pretpostavkom o krivici Korisnika.",
    ],
  },
  {
    id: "3.6.1",
    title: "Redovan završetak intervala",
    paragraphs: [
      "Redovnim završetkom smatra se dostizanje utvrđene završne tačke trominutnog odbrojavanja u skladu sa programskom logikom. Interfejs može označiti taj trenutak promenom stanja, porukom ili drugim vizuelnim signalom.",
      "Završetak intervala potvrđuje kraj predviđenog niza radnji, ali ne utvrđuje da je postignut određeni intelektualni rezultat. Korisnik ima pravo da rezultat proceni zasebno.",
    ],
  },
  {
    id: "3.6.2",
    title: "Obaveštenje o završetku",
    paragraphs: [
      "Poruka o završetku sesije namenjena je obaveštavanju Korisnika o tehničkom događaju. Oblik poruke može se razlikovati prema verziji interfejsa i korišćenom uređaju.",
      "Ako Korisnik nije primetio obaveštenje, to ne znači automatski nastavak isteklog intervala. Trenutak završetka određuje stanje programa, a ne trenutak čitanja poruke.",
    ],
  },
  {
    id: "3.6.3",
    title: "Radnje nakon završetka",
    paragraphs: [
      "Nakon završetka Korisnik ima pravo da zatvori interfejs, nastavi sopstvenu aktivnost ili započne novu sesiju, ako je ta mogućnost dostupna. Nijedna od tih radnji ne smatra se obaveznim nastavkom već završenog intervala.",
      "Ostavljanje stranice otvorenom nakon završetka ne znači neprekidnu upotrebu aktivnog režima. Trajanje naknadnog boravka na stranici ne dodaje se automatski završenoj sesiji.",
    ],
  },
  {
    id: "3.6.4",
    title: "Ponovno pokretanje",
    paragraphs: [
      "Nova sesija nastaje nakon posebne predviđene radnje pokretanja, ako interfejs dozvoljava ponovnu aktivaciju. Prethodni završeni interval ne smatra se nedovršenim samo zato što je Korisnik odlučio da započne sledeći.",
      "Uzastopne sesije mogu se doživljavati kao jedinstvena lična praksa, ali tehnički ostaju zasebni intervali. Takav doživljaj ne menja način njihovog evidentiranja, ako je evidentiranje predviđeno.",
    ],
  },
  {
    id: "3.6.5",
    title: "Odsustvo obaveznog izveštaja",
    paragraphs: [
      "Ako interfejs ne predviđa poseban obrazac izveštavanja, Korisnik nije dužan da posle svake sesije opisuje misli, nabraja odvraćanja pažnje ili potvrđuje sopstvenu produktivnost. Završetak tajmera ne zavisi od sastavljanja pisanog zaključka.",
      "Dobrovoljno sumiranje rezultata ostaje lična radnja Korisnika. Kompanija ne smatra odsustvo izveštaja dokazom beskorisnosti sesije.",
    ],
  },
  {
    id: "3.7.1",
    title: "Ponovljivost sesija koncentracije",
    paragraphs: [
      "Korisnik ima pravo da sprovede više sesija u okviru dostupnosti interfejsa. Svako novo pokretanje razmatra se prema sopstvenom trenutku početka i završetka.",
      "Broj sesija sam po sebi ne opisuje kvalitet pažnje. Nekoliko kratkih intervala ne čine automatski jednu neprekidnu sesiju dužeg trajanja.",
    ],
  },
  {
    id: "3.7.2",
    title: "Intervali između sesija",
    paragraphs: [
      "Period između završetka jedne sesije i početka sledeće ne spada u aktivno vreme nijedne od njih. Tokom tog perioda Korisnik može odmarati, baviti se drugim poslovima ili zadržati pažnju na prethodnom objektu.",
      "Odsustvo radnji između sesija ne stvara poseban režim Uređaja. Lični kontinuitet koncentracije ne zahteva neprekidno programsko odbrojavanje.",
    ],
  },
  {
    id: "3.7.3",
    title: "Uslovni kumulativni rezultat",
    paragraphs: [
      "Ako interfejs prikazuje broj sprovedenih sesija ili druge zbirne pokazatelje, oni opisuju evidentirane programske događaje u granicama dostupnih podataka. Ti pokazatelji nisu neposredno merenje stečene koncentracije.",
      "Sabiranje trajanja intervala dopušteno je kao aritmetička operacija, ali ne potvrđuje odgovarajući rast veštine održavanja pažnje. Korisnik nije dužan da ukupnom broju pripisuje psihološko značenje.",
    ],
  },
  {
    id: "3.7.4",
    title: "Uporedivost različitih sesija",
    paragraphs: [
      "Sesije se mogu razlikovati po spoljnim uslovima, izabranom zadatku i subjektivnim osećajima Korisnika. Jednako trajanje ne znači jednaku težinu ili istu korisnost.",
      "Poređenje više sesija dopušteno je u lične svrhe, ali rezultati takvog poređenja ne predstavljaju univerzalnu rang-listu korisnika niti potvrđuju nadmoć jedne osobe nad drugom.",
    ],
  },
  {
    id: "3.8.1",
    title: "Sesija bez utvrđenog cilja",
    paragraphs: [
      "Korisnik može započeti sesiju bez prethodnog formulisanja konkretnog zadatka. Odsustvo formulisanog cilja ne sprečava rad tajmera ako interfejs ne zahteva njegovo obavezno navođenje.",
      "Takva sesija ne smatra se tehnički neodržanom samo zbog neodređenosti namera. Procena njene lične korisnosti ostaje na Korisniku.",
    ],
  },
  {
    id: "3.8.2",
    title: "Sesija praćena sumnjom",
    paragraphs: [
      "Sumnja u potrebu za sesijom, njenu efikasnost ili ispravnost izabranog trenutka ne poništava tehnički značaj izvršene aktivacije. Korisnik ima pravo da preispituje sopstvena očekivanja tokom rada interfejsa.",
      "Kompanija ne smatra unutrašnje neslaganje Korisnika sa pretpostavljenom koristi sesije komandom za otkazivanje. Za promenu stanja programa potrebna je predviđena radnja ili nastupanje odgovarajućeg tehničkog događaja.",
    ],
  },
  {
    id: "3.8.3",
    title: "Sesija bez subjektivno primetnog efekta",
    paragraphs: [
      "Po završetku sesije Korisnik možda neće primetiti promene u pažnji, raspoloženju ili uspešnosti aktivnosti. Odsustvo primetnog efekta nije isto što i odsustvo samog programskog intervala.",
      "Kompanija ne garantuje nastanak određenog doživljaja po završetku odbrojavanja. Korisnik ima pravo da sesiju smatra beskorisnom za sebe, bez potrebe da poriče činjenicu njenog tehničkog sprovođenja.",
    ],
  },
  {
    id: "3.8.4",
    title: "Konačno razgraničenje postupka i rezultata",
    paragraphs: [
      "Za potrebe ovog odeljka aktivacija, tok i završetak sesije pripadaju postupku utvrđenom interfejsom, dok se koncentracija i lična korisnost odnose na okolnosti koje se zasebno ocenjuju. Te kategorije ne smeju zamenjivati jedna drugu.",
      "Završena sesija potvrđuje izvršenje predviđenog vremenskog niza u granicama dostupnih tehničkih podataka. Ona ne potvrđuje uspešnost misli, odsustvo odvraćanja pažnje niti postizanje cilja koji Korisnik možda nije ni formulisao.",
    ],
  },
] satisfies AgreementSection;
