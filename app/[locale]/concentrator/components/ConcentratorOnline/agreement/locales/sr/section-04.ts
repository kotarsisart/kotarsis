import type { AgreementSection } from "../../types";

export const section04 = [
  {
    id: "4.1.1",
    title: "Opšti zahtevi za pripremu",
    paragraphs: [
      "Pre početka sesije Korisnik mora da obezbedi uslove koji omogućavaju interakciju sa „Uređajem“.",
      "Smatra se da je priprema izvršena u granicama mogućnosti koje su Korisniku stvarno dostupne. Nemogućnost obezbeđivanja idealnih uslova ne isključuje početak sesije, ali se može uzeti u obzir prilikom naknadne procene njenih okolnosti.",
    ],
  },
  {
    id: "4.1.2",
    title: "Provera spremnosti interfejsa",
    paragraphs: [
      "Korisnik je dužan da proveri da li su osnovni upravljački elementi dostupni i pravilno prikazani.",
      "Provera se obavlja uobičajenim vizuelnim pregledom interfejsa. Od Korisnika se ne zahteva da potvrđuje unutrašnje stanje programskih komponenti kojima nema pristup; odsustvo vidljivih grešaka ne garantuje odsustvo skrivenih.",
    ],
  },
  {
    id: "4.1.3",
    title: "Određivanje cilja koncentracije",
    paragraphs: [
      "Pre aktivacije preporučuje se određivanje zadatka na koji će pažnja biti usmerena.",
      "Cilj može biti formulisan u mislima i ne mora se unositi u interfejs. Neodređenost cilja je dopuštena, ali ne oslobađa od potrebe da se utvrdi da li je postojala namera da se cilj odredi.",
    ],
  },
  {
    id: "4.1.4",
    title: "Prethodna procena ometajućih faktora",
    paragraphs: [
      "Korisnik treba, koliko je moguće, da utvrdi okolnosti koje mogu ometati koncentraciju.",
      "Takve okolnosti mogu uključivati spoljne zvukove, obaveštenja, druge zadatke i sopstvena razmišljanja Korisnika. Odsustvo utvrđenih ometajućih faktora ne potvrđuje da se oni neće pojaviti nakon aktivacije.",
    ],
  },
  {
    id: "4.1.5",
    title: "Potvrda spremnosti za pripremu",
    paragraphs: [
      "Započinjanjem pripreme Korisnik potvrđuje dovoljan stepen spremnosti za obavljanje pripremnih radnji.",
      "Sama činjenica započinjanja pripremnih radnji smatra se prethodnom potvrdom spremnosti za njih. Ako je Korisnik započeo pripremu isključivo radi provere sopstvene spremnosti, ta provera smatra se delom pripreme.",
    ],
  },
  {
    id: "4.2.1",
    title: "Uslovi za dozvolu aktivacije",
    paragraphs: [
      "Aktivacija je dozvoljena nakon obezbeđivanja neophodnih uslova pristupa i prihvatanja Sporazuma.",
      "Za aktivaciju nije potrebna posebna dozvola Kompanije ako interfejs omogućava pristup dugmetu za pokretanje. Tehnička mogućnost pritiska ne zamenjuje saglasnost sa Sporazumom kada je ona predviđena uslovima pristupa.",
    ],
  },
  {
    id: "4.2.2",
    title: "Pravni značaj pritiska na dugme",
    paragraphs: [
      "Pritisak na dugme smatra se radnjom koja ima pravni značaj u skladu sa tačkom 1.5.3.",
      "Aktivacija „Uređaja“ smatra se zasebnom radnjom Korisnika nakon nastupanja pravnog trenutka prihvatanja Sporazuma, utvrđenog tačkom 1.5.3. Ponovni pritisak ne smatra se ponovnim zaključenjem Sporazuma.",
    ],
  },
  {
    id: "4.2.3",
    title: "Potvrda namere aktiviranja „Uređaja“",
    paragraphs: [
      "Činjenica aktivacije smatra se dovoljnom potvrdom namere da se započne sesija koncentracije.",
      "Za priznavanje aktivacije nije potrebna posebna usmena ili pisana izjava o nameri. Naknadno poricanje namere ne poništava tehnički registrovano pokretanje, ali se može uzeti u obzir pri utvrđivanju okolnosti aktivacije.",
    ],
  },
  {
    id: "4.2.4",
    title: "Aktivacija bez namere",
    paragraphs: [
      "Slučajna aktivacija proizvodi predviđene posledice do trenutka njenog prekida.",
      "Slučajan dodir, pogrešan izbor upravljačkog elementa ili druga nenamerna radnja ne pretvaraju započetu sesiju u sesiju koja nije započeta. Pritom se slučajnost ne smatra dokazom svesnog kršenja obaveze koncentrisanja.",
    ],
  },
  {
    id: "4.2.5",
    title: "Evidentiranje trenutka početka sesije",
    paragraphs: [
      "Početkom sesije smatra se trenutak prelaska „Uređaja“ u aktivno stanje, nezavisno od subjektivnog doživljaja Korisnika.",
      "Početnim trenutkom smatra se kada interfejs registruje prelazak u aktivno stanje, a ne kada Korisnik stekne utisak da je sesija počela. U slučaju razlike između tih trenutaka, za odbrojavanje prednost ima tehnički utvrđen događaj.",
    ],
  },
  {
    id: "4.3.1",
    title: "Opšti postupak ponovne interakcije",
    paragraphs: [
      "Ponovni pritisak na dugme u aktivnom stanju smatra se zahtevom za prekid tekuće sesije.",
      "Ako se aktivna sesija prekida pritiskom na isto dugme, taj pritisak smatra se komandom za zaustavljanje. Radnja izvršena nakon završetka sesije ocenjuje se prema stvarnom stanju interfejsa u trenutku njene registracije.",
    ],
  },
  {
    id: "4.3.2",
    title: "Dozvoljenost prevremenog prekida",
    paragraphs: [
      "Korisnik ima pravo da završi sesiju pre isteka utvrđenog trajanja.",
      "Prevremeni prekid predstavlja dozvoljen način upravljanja sesijom i sam po sebi ne ukazuje na povredu. Njegovi razlozi i učestalost mogu se zasebno uzeti u obzir pri proceni savesnog ostvarivanja prava u skladu sa poglavljem III.",
    ],
  },
  {
    id: "4.3.3",
    title: "Ponovni pritisak bez promene namere",
    paragraphs: [
      "Pritisak na dugme može imati pravne posledice bez obzira na to da li je Korisnik nameravao da promeni stanje „Uređaja“.",
      "Pravni značaj registrovanog pritiska određuje se njegovim rezultatom u interfejsu, a ne isključivo unutrašnjom namerom Korisnika. Ako nije došlo do promene stanja, pretpostavljena namera da se ono promeni ne smatra se završenom operacijom.",
    ],
  },
  {
    id: "4.3.4",
    title: "Posledice višestrukih pritisaka",
    paragraphs: [
      "Uzastopni pritisci smatraju se zasebnim radnjama ako je interfejs uspeo da registruje odgovarajuću promenu stanja.",
      "Nekoliko brzih pritisaka ne stvara automatski isti broj zasebnih sesija. Uzimaju se u obzir samo prelazi između stanja koje je interfejs zaista obradio; nepotvrđeni prelazi ostaju pretpostavljeni.",
    ],
  },
  {
    id: "4.3.5",
    title: "Pretpostavka svesnosti ponovljene radnje",
    paragraphs: [
      "Smatra se da je Korisnik svestan posledica ponovnog pritiska čak i kada je on izvršen iz navike.",
      "Pretpostavka svesnosti odnosi se na priznavanje posledica radnje, ali ne dokazuje da Korisnik stvarno poznaje svaki tehnički proces. Pritisak iz navike može se smatrati svesnim za potrebe postupka čak i bez svesnog razmišljanja o njemu.",
    ],
  },
  {
    id: "4.4.1",
    title: "Propisano trajanje sesije",
    paragraphs: [
      "Standardno trajanje sesije koncentracije iznosi 180 sekundi.",
      "Utvrđeno trajanje iznosi tri minuta i odnosi se na režim rada interfejsa. Ono ne određuje obavezno trajanje stvarne koncentracije niti minimalno vreme potrebno za postizanje rezultata.",
    ],
  },
  {
    id: "4.4.2",
    title: "Način računanja vremena",
    paragraphs: [
      "Trajanje se utvrđuje sredstvima „Uređaja“, uzimajući u obzir odredbe o vremenskim anomalijama iz tačke 11.4.1.",
      "Računanje vremena obavlja se sredstvima „Uređaja“, u skladu sa postupkom razmatranja vremenskih anomalija predviđenim tačkom 11.4.1. Razlika između prikazanog vremena i subjektivnog osećaja njegovog proticanja sama po sebi ne potvrđuje postojanje anomalije.",
    ],
  },
  {
    id: "4.4.3",
    title: "Neprekidnost trajanja sesije",
    paragraphs: [
      "Vreme nastavlja da se računa u skladu sa logikom tajmera, nezavisno od subjektivnog osećaja brzine njegovog proticanja.",
      "Tok sesije određuje stanje odbrojavanja, a ne neprekidno posmatranje ekrana od strane Korisnika. Skretanje pažnje na sam tajmer ne zaustavlja vreme i ne stvara dodatni period koji treba oduzeti.",
    ],
  },
  {
    id: "4.4.4",
    title: "Pravni status međuvremenskih oznaka",
    paragraphs: [
      "Prikazani vremenski pokazatelji smatraju se informativnim podacima o toku sesije.",
      "Međuvremenske oznake odražavaju stanje utvrđenog odbrojavanja i nisu rezultati merenja pažnje. Čak ni tačno poznavanje preostalog vremena ne znači da je Korisnik pravilno procenio stepen sopstvene koncentracije.",
    ],
  },
  {
    id: "4.4.5",
    title: "Posledice isteka utvrđenog roka",
    paragraphs: [
      "Po završetku odbrojavanja „Uređaj“ prelazi u predviđeno završno stanje, koje samo po sebi ne potvrđuje stvarno povećanje koncentracije.",
      "Po isteku propisanog intervala sesija se završava u skladu sa predviđenom logikom interfejsa. Završetak potvrđuje okončanje postupka odbrojavanja, ali ne predstavlja samostalan dokaz uspešnog izvršenja zadatka koji je Korisnik izabrao.",
    ],
  },
  {
    id: "4.5.1",
    title: "Osnovi za prekid sesije",
    paragraphs: [
      "Sesija se prekida na inicijativu Korisnika, istekom vremena ili usled tehničkih okolnosti.",
      "Osnov prekida utvrđuje se prema dostupnim pokazateljima, uključujući komandu Korisnika, završetak odbrojavanja ili tehničku nedostupnost. Ako uzrok nije utvrđen, prekid se može klasifikovati kao nerazjašnjen, bez proglašavanja proizvoljnim.",
    ],
  },
  {
    id: "4.5.2",
    title: "Prevremeni prekid na inicijativu Korisnika",
    paragraphs: [
      "Korisnik ima pravo da zaustavi „Uređaj“ bez obaveze obrazlaganja razloga.",
      "Korisnik nije dužan da Kompaniji objašnjava svaki prevremeni završetak. Odsustvo objašnjenja ne sme se zameniti izmišljenim razlogom, iako se sama činjenica prevremenog zaustavljanja može uzeti u obzir u predviđenim postupcima procene.",
    ],
  },
  {
    id: "4.5.3",
    title: "Razlika između zaustavljanja i pauziranja",
    paragraphs: [
      "Prestanak aktivnog stanja ne podrazumeva postojanje posebnog režima pauze.",
      "Ako interfejs ne predviđa funkciju pauze, zaustavljanje ne stvara pravo da se prethodno odbrojavanje nastavi od sačuvanog trenutka. Namera da se sesija privremeno prekine, koja postoji samo u mislima, ne stvara tehnički režim pauziranja.",
    ],
  },
  {
    id: "4.5.4",
    title: "Očuvanje posledica nakon zaustavljanja",
    paragraphs: [
      "Prestanak rada interfejsa ne poništava ranije nastale posledice korišćenja.",
      "Očuvanju podležu posledice radnji koje su već nastupile u okviru Sporazuma. To ne znači da „Uređaj“ nastavlja tehnički rad nakon zaustavljanja niti da novi događaji nastaju bez predviđenog osnova.",
    ],
  },
  {
    id: "4.5.5",
    title: "Ponovni početak nakon prekida",
    paragraphs: [
      "Novo pokretanje smatra se zasebnom sesijom ako interfejs ne predviđa nastavak prethodne.",
      "Ponovna aktivacija nakon zaustavljanja započinje novo odbrojavanje ako interfejs ne određuje drugačije ponašanje. Postojanje prethodnog cilja koncentracije ne spaja automatski dve odvojene sesije u jednu neprekidnu.",
    ],
  },
  {
    id: "4.6.1",
    title: "Opšti pojam odvraćanja pažnje",
    paragraphs: [
      "Odvraćanjem pažnje smatra se promena usmerenosti pažnje u odnosu na cilj tekuće sesije.",
      "Odvraćanje pažnje može biti kratkotrajno, nenamerno ili izazvano okolnostima nezavisnim od Korisnika. Njegovo postojanje ne utvrđuje se samo na osnovu odsustva radnji u interfejsu, jer koncentracija može postojati i bez pritisaka na dugmad.",
    ],
  },
  {
    id: "4.6.2",
    title: "Kriterijumi dozvoljenosti odvraćanja pažnje",
    paragraphs: [
      "Dozvoljenost odvraćanja pažnje određuje se uzimajući u obzir pravno priznatu koncentraciju utvrđenu tačkom 1.3.2.",
      "Pri proceni dozvoljenosti uzima se u obzir definicija pravno priznate koncentracije iz tačke 1.3.2. Preusmeravanje pažnje ne znači uvek prestanak koncentracije ako je predmet nove pažnje dopušten odgovarajućim kriterijumima.",
    ],
  },
  {
    id: "4.6.3",
    title: "Izuzeci od obaveze neprekidne koncentracije",
    paragraphs: [
      "Dozvoljeni izuzeci obuhvataju objektivno neophodne radnje, sprečavanje opasnosti i okolnosti izričito predviđene Sporazumom.",
      "Izuzecima od obaveze održavanja koncentracije, utvrđene tačkom 3.2.2, smatraju se radnje neophodne za sprečavanje opasnosti, zadovoljavanje hitnih potreba i reagovanje na objektivno značajne okolnosti. Kompanija nema pravo da zahteva nastavak sesije po cenu bezbednosti Korisnika ili drugih lica.",
    ],
  },
  {
    id: "4.6.4",
    title: "Nedozvoljena odvraćanja pažnje",
    paragraphs: [
      "Namerno preusmeravanje pažnje na sporednu aktivnost može se smatrati kršenjem pravila korišćenja.",
      "Namerno preusmeravanje pažnje na nepovezanu aktivnost može se uzeti u obzir kao povreda postupka sprovođenja sesije ako za to postoje dovoljni osnovi. Sama pojava usputne misli ne dokazuje namerno odvraćanje pažnje i ne zahteva posebno priznanje krivice.",
    ],
  },
  {
    id: "4.6.5",
    title: "Odvraćanje pažnje obaveštenjima „Uređaja“",
    paragraphs: [
      "Čitanje obaveštenja samog Concentrator™ Online ne oslobađa Korisnika obaveze da održi koncentraciju.",
      "Obaveštenja koja prikazuje sam Concentrator™ Online mogu zahtevati pažnju Korisnika, ali činjenica da potiču od „Uređaja“ ne stvara automatski izuzetak od obaveze koncentrisanja. Potreba da se poruka pročita ocenjuje se odvojeno od obaveze da se pažnja ne skreće na nju.",
    ],
  },
  {
    id: "4.7.1",
    title: "Pravni status režima čekanja",
    paragraphs: [
      "Režim čekanja smatra se samostalnim stanjem „Uređaja“ koje nije sesija koncentracije.",
      "Režim čekanja obuhvata stanje interfejsa pre početka i nakon prekida sesije, kada aktivno odbrojavanje nije u toku. Njegovo postojanje ne potvrđuje ni početak koncentracije ni odustajanje od nje.",
    ],
  },
  {
    id: "4.7.2",
    title: "Dozvoljene radnje pre aktivacije",
    paragraphs: [
      "Korisnik ima pravo da obavlja pripremne radnje bez pokretanja odbrojavanja.",
      "Korisnik ima pravo da bira zadatak, proverava upravljačke elemente i uklanja ometajuće okolnosti bez pokretanja tajmera. Takve radnje mogu se smatrati pripremnim čak i kada priprema nije dovela do naknadne aktivacije.",
    ],
  },
  {
    id: "4.7.3",
    title: "Obaveza održavanja potencijalne spremnosti",
    paragraphs: [
      "Korisniku se preporučuje da održava uslove u kojima naknadna aktivacija ostaje moguća.",
      "Preporuka da se održava spremnost ne stvara obavezu stalnog boravka pred ekranom. Ako Korisnik izgubi spremnost tokom njenog održavanja, ta okolnost ne predstavlja automatsku povredu režima čekanja.",
    ],
  },
  {
    id: "4.7.4",
    title: "Neaktivnost u režimu čekanja",
    paragraphs: [
      "Odsustvo radnji samo po sebi ne smatra se korišćenjem „Uređaja“, osim ako posebnim odredbama nije drugačije utvrđeno.",
      "Odsustvo interakcije u režimu čekanja nije isto što i aktivna sesija i ne stvara vreme koncentracije koje se uračunava. Ipak, može se razmatrati kao posebna okolnost ako posebne odredbe uređuju neaktivnost.",
    ],
  },
  {
    id: "4.8.1",
    title: "Korišćenje bez neposrednog posmatranja",
    paragraphs: [
      "Korisnik može da nastavi sesiju bez posmatranja interfejsa ako se rad „Uređaja“ tehnički održava.",
      "Ako se tehničko stanje sesije održava, odsustvo vizuelnog kontakta sa interfejsom ne prekida odbrojavanje. Nemogućnost posmatranja ekrana ne potvrđuje ni postojanje ni odsustvo koncentracije tokom odgovarajućeg perioda.",
    ],
  },
  {
    id: "4.8.2",
    title: "Korišćenje „Uređaja“ bez postizanja koncentracije",
    paragraphs: [
      "Odsustvo koncentracije ne znači automatski da korišćenja nije bilo.",
      "Činjenica korišćenja utvrđuje se prema interakciji sa interfejsom i stanju sesije, a ne isključivo prema postignutom efektu. Neuspešan pokušaj koncentrisanja može i dalje predstavljati punovažan slučaj korišćenja „Uređaja“.",
    ],
  },
  {
    id: "4.8.3",
    title: "Koncentracija bez korišćenja „Uređaja“",
    paragraphs: [
      "Samostalna koncentracija Korisnika ne smatra se sesijom Concentrator™ Online.",
      "Koncentracija postignuta bez aktivacije Concentrator™ Online ne stvara tehnički događaj sesije. Njen rezultat može imati samostalnu vrednost za Korisnika, ali se ne uključuje automatski u statistiku održanih sesija.",
    ],
  },
  {
    id: "4.8.4",
    title: "Istovremeno korišćenje više instanci",
    paragraphs: [
      "Pri interakciji sa više instanci interfejsa svaka sesija može se evidentirati zasebno.",
      "Otvaranje više kartica ili prozora ne znači nužno održavanje više sesija: uzima se u obzir stvarno stanje svake instance interfejsa. Kompanija nije dužna da sabira njihovo trajanje bez predviđene metodologije.",
    ],
  },
  {
    id: "4.8.5",
    title: "Nemogućnost utvrđivanja činjenice korišćenja",
    paragraphs: [
      "Ako nema dovoljno podataka, Kompanija ima pravo da događaj klasifikuje kao pretpostavljeno korišćenje, bez priznavanja da je ono dokazano.",
      "Ako dostupni podaci ne omogućavaju potvrdu ni pokretanja ni njegovog odsustva, događaj može dobiti status pretpostavljenog korišćenja. Takva klasifikacija služi označavanju neizvesnosti i ne zamenjuje dokaz stvarnog korišćenja.",
    ],
  },
] satisfies AgreementSection;
