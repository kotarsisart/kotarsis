import type { AgreementSection } from "../../types";

export const section06 = [
  {
    id: "6.1.1",
    title: "Opšte odredbe o obradi informacija",
    paragraphs: [
      "Utvrđuju se kategorije informacija koje mogu biti značajne za rad „Uređaja” i procenu rezultata.",
      "Utvrđivanje kategorije ne potvrđuje da se odgovarajuće informacije zaista prikupljaju ili čuvaju. Stvarni obim obrade određuju tehničke mogućnosti interfejsa i primenljiva pravila.",
    ],
  },
  {
    id: "6.1.2",
    title: "Klasifikacija podataka koji se obrađuju",
    paragraphs: [
      "Informacije se dele na stvarno pribavljene, izvedene, pretpostavljene i nepotvrđene.",
      "Stvarno pribavljene informacije imaju utvrđen izvor; izvedene nastaju iz dostupnih podataka; pretpostavljene opisuju mogućnosti; za nepotvrđene nije utvrđeno da postoje. Prelazak iz jedne kategorije u drugu zahteva zaseban osnov.",
    ],
  },
  {
    id: "6.1.3",
    title: "Tehnički podaci sesije koncentracije",
    paragraphs: [
      "Tehničke informacije obuhvataju događaje aktivacije, zaustavljanja i završetka sesije.",
      "Postojanje tehničke mogućnosti da se događaj evidentira ne znači da se zapis o njemu obavezno stvara ili čuva. Ako zapis ne postoji, činjenica događaja utvrđuje se na osnovu drugih dopuštenih okolnosti.",
    ],
  },
  {
    id: "6.1.4",
    title: "Informacije o rezultatima korišćenja",
    paragraphs: [
      "Informacije o postignućima Korisnika razmatraju se kao posebna kategorija podataka.",
      "Izjava Korisnika o postignuću ne izjednačava se sa nezavisnim merenjem. Kompanija je može uzeti u obzir kao tvrdnju, uz navođenje stepena njene potvrđenosti.",
    ],
  },
  {
    id: "6.1.5",
    title: "Razgraničenje podataka i pretpostavki",
    paragraphs: [
      "Pretpostavljene informacije ne izjednačavaju se sa utvrđenim činjenicama samo zato što su uključene u klasifikaciju.",
      "Za potrebe Sporazuma, opis hipoteze mora zadržati oznaku neizvesnosti čak i kada se više puta ponavlja. Broj ponavljanja pretpostavke ne zamenjuje dokaz.",
    ],
  },
  {
    id: "6.2.1",
    title: "Evidentiranje radnji Korisnika",
    paragraphs: [
      "Radnje u interfejsu mogu se posmatrati kao događaji koji karakterišu tok korišćenja „Uređaja”.",
      "Takvi događaji mogu obuhvatati pritisak na dugme, promenu stanja sesije i druge dostupne interakcije. Ova odredba utvrđuje njihovu pravnu klasifikaciju, ali ne obećava neprekidno tehničko praćenje.",
    ],
  },
  {
    id: "6.2.2",
    title: "Pravni status nečinjenja",
    paragraphs: [
      "Odsustvo interakcije tokom određenog perioda priznaje se kao zasebna okolnost.",
      "Nečinjenje se razmatra u odnosu na očekivanu radnju i određeni vremenski period. Ako očekivanje nije utvrđeno, izostanak događaja ne predstavlja samostalnu povredu obaveze.",
    ],
  },
  {
    id: "6.2.3",
    title: "Razgraničenje namernog i slučajnog nečinjenja",
    paragraphs: [
      "Nečinjenje se može klasifikovati uzimajući u obzir pretpostavljene uzroke njegovog nastanka.",
      "Namera se ne izvodi automatski iz odsustva pritiska na dugme. Ako nema pouzdanih informacija, uzrok nečinjenja zadržava status pretpostavke.",
    ],
  },
  {
    id: "6.2.4",
    title: "Izostanak radnje kao informacioni događaj",
    paragraphs: [
      "Izostanak očekivane radnje može se evidentirati odvojeno od stvarno izvršenih radnji.",
      "Za potrebe internog izveštavanja dopušteno je zasebno označiti događaj koji se očekivao i događaj koji se dogodio. Radnja koja nije izvršena ne sme se evidentirati kao izvršena.",
    ],
  },
  {
    id: "6.2.5",
    title: "Nemogućnost utvrđivanja nečinjenja",
    paragraphs: [
      "Ako praćenje nije sprovedeno, odsustvo evidentiranih radnji ne potvrđuje da je Korisnik bio neaktivan.",
      "Odsustvo praćenja i praćenje odsustva dve su različite okolnosti. Kompanija ne sme prvo predstavljati kao drugo samo zato što oba dovode do praznog reda u izveštaju.",
    ],
  },
  {
    id: "6.3.1",
    title: "Pojam potencijalnih podataka",
    paragraphs: [
      "Potencijalnim podacima smatraju se informacije koje bi mogle nastati pod određenim okolnostima.",
      "Potencijalni podaci postoje kao kategorija za opis mogućeg događaja, a ne kao obavezan zapis u memoriji „Uređaja”. Njihov obim može ostati neodređen, bez nastanka obaveze nabrajanja svih mogućnosti.",
    ],
  },
  {
    id: "6.3.2",
    title: "Informacije o pretpostavljenim namerama",
    paragraphs: [
      "Pretpostavljeni podaci o namerama Korisnika podležu posebnom režimu poverljivosti u skladu sa tačkom 7.3.3.",
      "Pretpostavljena namera ne priznaje se kao utvrđena misao Korisnika. Način očuvanja poverljivosti takvih pretpostavki uređuje se tačkom 7.3.3.",
    ],
  },
  {
    id: "6.3.3",
    title: "Klasifikacija neizvršenih radnji",
    paragraphs: [
      "Radnje koje je Korisnik mogao da izvrši, ali nije, mogu se posmatrati kao teorijski događaji.",
      "Neizvršena radnja ne smatra se izvršenom čak ni kada je Kompanija smatra najverovatnijom. Verovatnoća se razmatra odvojeno od činjenice.",
    ],
  },
  {
    id: "6.3.4",
    title: "Formiranje pretpostavki pri nedostatku informacija",
    paragraphs: [
      "Nedostajuće informacije mogu se nadomestiti računskim hipotezama pod uslovom da zadrže svoj pretpostavljeni status.",
      "Računska hipoteza mora biti praćena navođenjem načina njenog dobijanja ili nemogućnosti da se taj način navede. Odsustvo polaznih informacija ne pretvara hipotezu u pouzdan rezultat.",
    ],
  },
  {
    id: "6.3.5",
    title: "Zabrana izjednačavanja mogućnosti i činjenice",
    paragraphs: [
      "Mogućnost postojanja informacije ne potvrđuje da je ona zaista nastala.",
      "Ako bi iz mogućnosti izvršenja radnje proizlazilo priznanje same radnje, svaki Korisnik bi istovremeno izvršavao neodređen broj međusobno isključivih radnji. Takva klasifikacija nije dopuštena za potrebe evidencije stvarnih događaja.",
    ],
  },
  {
    id: "6.4.1",
    title: "Pojam stanja koncentracije",
    paragraphs: [
      "Stanje koncentracije posmatra se kao skup karakteristika pažnje Korisnika.",
      "Ovaj pojam služi za opis predmeta procene i ne podrazumeva da interfejs ima neposredan pristup misaonoj aktivnosti.",
    ],
  },
  {
    id: "6.4.2",
    title: "Dostupnost informacija o stanju pažnje",
    paragraphs: [
      "Neposredno utvrđivanje stanja pažnje ne spada u potvrđene tehničke mogućnosti „Uređaja”.",
      "Vizuelni tajmer i upravljački elementi nisu senzori kognitivnog stanja. Odsustvo direktnog merenja ne može se nadomestiti isključivo pravnim nazivom pokazatelja.",
    ],
  },
  {
    id: "6.4.3",
    title: "Posredni pokazatelji koncentracije",
    paragraphs: [
      "Dostupne informacije o toku sesije mogu se koristiti za formiranje pretpostavki o stanju pažnje.",
      "Posredni pokazatelj omogućava formulisanje pretpostavke, ali sam po sebi ne dokazuje stanje pažnje. U izveštajima se takva pretpostavka mora razlikovati od stvarno evidentiranog događaja.",
    ],
  },
  {
    id: "6.4.4",
    title: "Subjektivne informacije Korisnika",
    paragraphs: [
      "Samostalne izjave Korisnika o sopstvenom stanju mogu se uzimati u obzir odvojeno od tehničkih podataka.",
      "Subjektivna izjava može se uzeti u obzir u obliku u kojem je primljena. Kompanija ne sme neprijavljene doživljaje predstavljati kao informacije neposredno dobijene od Korisnika.",
    ],
  },
  {
    id: "6.4.5",
    title: "Pravni status neizmerenog stanja",
    paragraphs: [
      "Nemogućnost merenja koncentracije ne sprečava utvrđivanje pravila za klasifikaciju pretpostavljenih stanja.",
      "Ako stanje nije izmereno, postupak se može završiti dodeljivanjem kategorije „nije utvrđeno”. Završena klasifikacija ne znači potpuno poznavanje stanja.",
    ],
  },
  {
    id: "6.5.1",
    title: "Opšti principi određivanja rokova čuvanja",
    paragraphs: [
      "Trajanje čuvanja stvarno pribavljenih informacija određuje se prema njihovoj nameni i tehničkim uslovima.",
      "Rokovi čuvanja mogu se određivati samo za informacije koje se zaista čuvaju. Navođenje roka u Sporazumu ne dokazuje postojanje odgovarajuće baze podataka.",
    ],
  },
  {
    id: "6.5.2",
    title: "Razgraničenje privremenog i trajnog čuvanja",
    paragraphs: [
      "Informacije se mogu obrađivati privremeno ili čuvati tokom predviđenog perioda.",
      "Privremena obrada nije isto što i trajno čuvanje. Nemogućnost vraćanja informacija nakon završetka sesije sama po sebi ne potvrđuje da su obrisane iz skladišta koje je ranije postojalo.",
    ],
  },
  {
    id: "6.5.3",
    title: "Pravni status nesačuvanih podataka",
    paragraphs: [
      "Odsustvo sačuvanog zapisa ne isključuje postojanje događaja koji se ranije odigrao, ali ograničava mogućnost njegovog dokumentarnog potvrđivanja.",
      "Odsustvo sačuvanog zapisa ne isključuje postojanje događaja koji se ranije odigrao, ali ograničava mogućnost njegovog dokumentarnog potvrđivanja. Pri razmatranju spornih okolnosti razlikuju se događaj i zapis o njemu.",
    ],
  },
  {
    id: "6.5.4",
    title: "Rok čuvanja nepostojećih informacija",
    paragraphs: [
      "Za informacije koje nisu pribavljene ne nastaje rok stvarnog čuvanja.",
      "Za nepostojeće informacije može se odrediti uslovni rok za razmatranje pitanja njihovog mogućeg nastanka. Takav rok ne smatra se rokom čuvanja podataka koji ne postoje.",
    ],
  },
  {
    id: "6.5.5",
    title: "Potvrđivanje odsustva sačuvanih informacija",
    paragraphs: [
      "Nemogućnost pronalaženja zapisa ne omogućava uvek utvrđivanje da li je on ranije postojao.",
      "Zaključak o odsustvu zapisa potvrđuje samo rezultat sprovedene provere u granicama dostupnih izvora. On ne potvrđuje automatski odsustvo događaja kojem je zapis mogao odgovarati.",
    ],
  },
  {
    id: "6.6.1",
    title: "Opšti uslovi prenosa informacija",
    paragraphs: [
      "Stvarni prenos informacija dopušten je samo kada za to postoje predviđeni osnovi.",
      "Ova odredba ne utvrđuje da je do prenosa podataka došlo i ne proširuje spisak informacija koje se zaista obrađuju. Svaki stvarni prenos procenjuje se prema važećim propisima.",
    ],
  },
  {
    id: "6.6.2",
    title: "Kategorije mogućih primalaca",
    paragraphs: [
      "Primaoci mogu biti ovlašćena lica i organizacije koje učestvuju u predviđenim postupcima.",
      "Samo definisanje kategorije primalaca ne znači da im je pristup odobren. Mogućnost prijema informacija i činjenica njihovog prijema evidentiraju se odvojeno.",
    ],
  },
  {
    id: "6.6.3",
    title: "Neodređeni potencijalni primaoci",
    paragraphs: [
      "Za potrebe interne dokumentacije dopušteno je uzimati u obzir kategorije lica kojima bi informacije teorijski mogle biti prenete.",
      "Neodređeni potencijalni primalac posmatra se kao kategorija rizika, a ne kao konkretno lice kojem su informacije već prenete. Neutvrđen identitet nije dokaz izvršenog prenosa.",
    ],
  },
  {
    id: "6.6.4",
    title: "Prenos pretpostavljenih informacija",
    paragraphs: [
      "Hipotetička mogućnost prenosa pretpostavljenih podataka ne priznaje se kao činjenica njihovog prenosa.",
      "Hipotetički opis prenosa ne zamenjuje tehnički događaj prenosa. Kompanija je dužna da razlikuje planiranu, dopuštenu i stvarno izvršenu operaciju.",
    ],
  },
  {
    id: "6.6.5",
    title: "Odgovornost za prenos do kojeg nije došlo",
    paragraphs: [
      "Odsustvo prenosa ne sprečava procenu potencijalnih posledica takvog prenosa.",
      "Procena potencijalnih posledica može se završiti zaključkom da ne postoji predmet stvarne povrede. Donošenje takvog zaključka ne znači da je prenos izvršen.",
    ],
  },
  {
    id: "6.7.1",
    title: "Opšti osnovi za brisanje podataka",
    paragraphs: [
      "Stvarno sačuvane informacije mogu se brisati kada postoje predviđeni osnovi.",
      "Primena postupka brisanja podrazumeva postojanje objekta koji je moguće obrisati. Odsustvo objekta ne zahteva imitiranje tehničke operacije.",
    ],
  },
  {
    id: "6.7.2",
    title: "Potvrda završetka brisanja",
    paragraphs: [
      "Brisanje se smatra završenim nakon izvršenja predviđenih tehničkih operacija.",
      "Potvrda se može odnositi samo na stvarno izvršene radnje i dostupan obim podataka. Nemogućnost provere brisanja ne sme se prikazivati kao potvrda njegovog izvršenja.",
    ],
  },
  {
    id: "6.7.3",
    title: "Brisanje pretpostavljenih podataka",
    paragraphs: [
      "Za pretpostavljene informacije dopušteno je prestati sa njihovim evidentiranjem bez tehničkog brisanja.",
      "Prestanak evidentiranja hipoteze znači njeno isključivanje iz važeće klasifikacije, a ne uništavanje nepostojeće datoteke. Uslovni naziv postupka ne menja njegovu stvarnu prirodu.",
    ],
  },
  {
    id: "6.7.4",
    title: "Vraćanje ranije obrisanih informacija",
    paragraphs: [
      "Vraćanje je moguće ako postoji tehnički dostupna kopija ili drugi dopušteni izvor.",
      "Ako dostupna kopija ne postoji, Kompanija može evidentirati nemogućnost vraćanja. Takvo evidentiranje ne stvara kopiju i ne menja rezultat ranije izvršenog brisanja.",
    ],
  },
  {
    id: "6.7.5",
    title: "Vraćanje informacija koje ranije nisu postojale",
    paragraphs: [
      "Stvaranje novog zapisa na osnovu pretpostavki ne priznaje se kao vraćanje ranije postojećih podataka.",
      "Ponovo sastavljena pretpostavka evidentira se kao nova izvedena ili pretpostavljena informacija. Naziv „vraćanje” ne može joj dati status istorijske činjenice.",
    ],
  },
  {
    id: "6.8.1",
    title: "Pojam nepotvrđenih podataka",
    paragraphs: [
      "Nepotvrđenim se smatraju informacije čije postojanje nije moguće utvrditi dostupnim sredstvima.",
      "Nepotvrđenost nije isto što i dokazano odsustvo. Za potrebe Sporazuma dopušteno je posebno označiti nemogućnost provere samog pitanja postojanja informacija.",
    ],
  },
  {
    id: "6.8.2",
    title: "Postupak preliminarnog evidentiranja",
    paragraphs: [
      "Nepotvrđene informacije mogu se evidentirati kao posebna teorijska kategorija bez stvaranja fiktivnog činjeničnog zapisa.",
      "Preliminarno evidentiranje može se sastojati isključivo od opisa kategorije. Pri tome je zabranjeno predstavljati uslovni zapis kao rezultat stvarnog prikupljanja informacija.",
    ],
  },
  {
    id: "6.8.3",
    title: "Klasifikacija nepostojećih podataka",
    paragraphs: [
      "Informacije čije postojanje nije potvrđeno klasifikuju se u skladu sa tačkom 6.1.2.",
      "Klasifikacija informacija čije postojanje nije potvrđeno sprovodi se u skladu sa tačkom 6.1.2. Postojanje odluke o klasifikaciji ne menja status izvornih informacija.",
    ],
  },
  {
    id: "6.8.4",
    title: "Obaveza uvažavanja nemogućnosti evidentiranja",
    paragraphs: [
      "Nemogućnost utvrđivanja postojanja informacija mora se uzeti u obzir pri proceni potpunosti informacione slike.",
      "Ako evidentiranje nije moguće, Kompanija može sastaviti zaključak o nemogućnosti evidentiranja. Postojanje zaključka potvrđuje sprovođenje postupka, ali ne i postojanje informacija na koje se postupak odnosio.",
    ],
  },
  {
    id: "6.8.5",
    title: "Pretpostavka dovoljnosti neizvesnosti",
    paragraphs: [
      "Ako nije moguće potvrditi ni postojanje ni odsustvo podataka, njihov neodređeni status smatra se dovoljnim za završetak preliminarne klasifikacije.",
      "Preliminarna klasifikacija može se smatrati završenom kada je dokumentovano utvrđena nemogućnost izbora između postojanja i odsustva podataka. Završetak postupka ne otklanja neizvesnost zbog koje je postupak završen.",
    ],
  },
] satisfies AgreementSection;
