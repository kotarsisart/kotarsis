import type { AgreementSection } from "../../types";

export const section06 = [
  {
    id: "6.1.1",
    title: "Splošne določbe o obdelavi informacij",
    paragraphs: [
      "Določajo se kategorije informacij, ki so lahko pomembne za delovanje »Naprave« in ocenjevanje rezultatov.",
      "Določitev kategorije ne potrjuje, da se zadevne informacije dejansko zbirajo ali shranjujejo. Dejanski obseg obdelave določajo tehnične zmogljivosti vmesnika in veljavna pravila.",
    ],
  },
  {
    id: "6.1.2",
    title: "Razvrstitev obdelovanih podatkov",
    paragraphs: [
      "Informacije se delijo na dejansko pridobljene, izpeljane, domnevne in nepotrjene.",
      "Dejansko pridobljene informacije imajo ugotovljen vir; izpeljane nastanejo iz razpoložljivih podatkov; domnevne opisujejo možnosti; pri nepotrjenih ni ugotovljen niti njihov obstoj. Prehod med kategorijami zahteva samostojno podlago.",
    ],
  },
  {
    id: "6.1.3",
    title: "Tehnični podatki seje osredotočanja",
    paragraphs: [
      "Med tehnične informacije spadajo dogodki aktivacije, ustavitve in zaključka seje.",
      "Obstoj tehnične možnosti za beleženje dogodka ne pomeni, da se zapis nujno ustvari ali shrani. Če zapisa ni, se dogodek ugotavlja na podlagi drugih dopustnih okoliščin.",
    ],
  },
  {
    id: "6.1.4",
    title: "Informacije o rezultatih uporabe",
    paragraphs: [
      "Informacije o dosežkih Uporabnika se obravnavajo kot posebna kategorija podatkov.",
      "Uporabnikovo sporočilo o dosežku ni enakovredno neodvisni meritvi. Družba ga sme upoštevati kot izjavo z navedbo stopnje potrjenosti.",
    ],
  },
  {
    id: "6.1.5",
    title: "Razlikovanje med podatki in domnevami",
    paragraphs: [
      "Domnevne informacije se ne enačijo z ugotovljenimi dejstvi zgolj zato, ker so vključene v razvrstitev.",
      "Za namene Pogodbe mora opis hipoteze tudi ob večkratnem ponavljanju ohraniti navedbo njene negotovosti. Število ponovitev domneve ne nadomesti dokazov.",
    ],
  },
  {
    id: "6.2.1",
    title: "Beleženje Uporabnikovih dejanj",
    paragraphs: [
      "Dejanja v vmesniku se lahko obravnavajo kot dogodki, ki označujejo potek uporabe »Naprave«.",
      "Med takšne dogodke lahko spadajo pritisk gumba, sprememba stanja seje in druge razpoložljive interakcije. Ta določba določa njihovo pravno razvrstitev, ne obljublja pa stalnega tehničnega spremljanja.",
    ],
  },
  {
    id: "6.2.2",
    title: "Pravni status neukrepanja",
    paragraphs: [
      "Odsotnost interakcije v določenem obdobju se priznava kot samostojna okoliščina.",
      "Neukrepanje se presoja glede na pričakovano dejanje in določeno obdobje. Če pričakovanje ni določeno, odsotnost dogodka ne pomeni samostojne kršitve.",
    ],
  },
  {
    id: "6.2.3",
    title: "Razlikovanje med namernim in naključnim neukrepanjem",
    paragraphs: [
      "Neukrepanje se lahko razvrsti ob upoštevanju domnevnih razlogov za njegov nastanek.",
      "Namena ni mogoče samodejno sklepati iz odsotnosti pritiska gumba. Če zanesljivih informacij ni, razlog za neukrepanje ohrani status domneve.",
    ],
  },
  {
    id: "6.2.4",
    title: "Odsotnost dejanj kot informacijski dogodek",
    paragraphs: [
      "Neizvedbo pričakovanega dejanja je dovoljeno upoštevati ločeno od dejansko izvedenih dejanj.",
      "Za notranje poročanje je dovoljeno ločeno označiti pričakovani dogodek in dogodek, ki se je zgodil. Neizvedeno dejanje se ne sme zabeležiti kot izvedeno.",
    ],
  },
  {
    id: "6.2.5",
    title: "Nezmožnost ugotovitve neukrepanja",
    paragraphs: [
      "Če spremljanje ni potekalo, odsotnost zabeleženih dejanj ne potrjuje, da Uporabnik ni ukrepal.",
      "Odsotnost spremljanja in spremljanje odsotnosti sta različni okoliščini. Družba prvega ne sme predstavljati kot drugega zgolj zato, ker obe povzročita prazno vrstico v poročilu.",
    ],
  },
  {
    id: "6.3.1",
    title: "Pojem potencialnih podatkov",
    paragraphs: [
      "Za potencialne se štejejo informacije, ki bi lahko nastale ob nastopu določenih okoliščin.",
      "Potencialni podatki obstajajo kot kategorija opisa možnega dogodka, ne kot obvezen zapis v pomnilniku »Naprave«. Njihov obseg je lahko nedoločen, ne da bi nastala obveznost naštevanja vseh možnosti.",
    ],
  },
  {
    id: "6.3.2",
    title: "Informacije o domnevnih namenih",
    paragraphs: [
      "Za domnevne podatke o Uporabnikovih namenih velja poseben režim zaupnosti v skladu s točko 7.3.3.",
      "Domnevni namen se ne priznava kot ugotovljena Uporabnikova misel. Način varovanja zaupnosti takšnih domnev določa točka 7.3.3.",
    ],
  },
  {
    id: "6.3.3",
    title: "Razvrstitev neizvedenih dejanj",
    paragraphs: [
      "Dejanja, ki bi jih Uporabnik lahko izvedel, vendar jih ni, se lahko obravnavajo kot teoretični dogodki.",
      "Neizvedeno dejanje se ne šteje za izvedeno, tudi če Družba meni, da je bilo najverjetnejše. Verjetnost se upošteva ločeno od dejstva.",
    ],
  },
  {
    id: "6.3.4",
    title: "Oblikovanje domnev ob pomanjkanju informacij",
    paragraphs: [
      "Manjkajoče informacije se lahko nadomestijo z izračunanimi hipotezami, če ohranijo svoj domnevni status.",
      "Izračunano hipotezo mora spremljati navedba načina njenega nastanka oziroma nezmožnosti takšne navedbe. Odsotnost izhodiščnih informacij hipoteze ne spremeni v zanesljiv rezultat.",
    ],
  },
  {
    id: "6.3.5",
    title: "Prepoved enačenja možnosti in dejstva",
    paragraphs: [
      "Možnost obstoja informacije ne potrjuje njenega dejanskega nastanka.",
      "Če bi možnost izvedbe dejanja pomenila priznanje njegove izvedbe, bi vsak Uporabnik hkrati izvajal nedoločeno število medsebojno izključujočih se dejanj. Takšna razvrstitev za dejansko evidenco ni dovoljena.",
    ],
  },
  {
    id: "6.4.1",
    title: "Pojem stanja osredotočenosti",
    paragraphs: [
      "Stanje osredotočenosti se obravnava kot skupek značilnosti Uporabnikove pozornosti.",
      "Ta pojem je namenjen opisu predmeta ocenjevanja in ne predpostavlja, da ima vmesnik neposreden dostop do miselne dejavnosti.",
    ],
  },
  {
    id: "6.4.2",
    title: "Dostopnost informacij o stanju pozornosti",
    paragraphs: [
      "Neposredno ugotavljanje stanja pozornosti ne spada med potrjene tehnične zmogljivosti »Naprave«.",
      "Vizualni časovnik in upravljalni elementi niso senzorji kognitivnega stanja. Odsotnosti neposredne meritve ni mogoče nadomestiti zgolj s pravnim poimenovanjem kazalnika.",
    ],
  },
  {
    id: "6.4.3",
    title: "Posredni znaki osredotočenosti",
    paragraphs: [
      "Razpoložljive informacije o poteku seje se lahko uporabijo za oblikovanje domnev o stanju pozornosti.",
      "Posredni znak omogoča oblikovanje domneve, vendar sam po sebi ne dokazuje stanja pozornosti. V poročilih je treba takšno domnevo razlikovati od dejansko zabeleženega dogodka.",
    ],
  },
  {
    id: "6.4.4",
    title: "Subjektivne informacije Uporabnika",
    paragraphs: [
      "Uporabnikova lastna sporočila o njegovem stanju se lahko upoštevajo ločeno od tehničnih podatkov.",
      "Subjektivno sporočilo se lahko upošteva v obliki, v kateri je bilo prejeto. Družba ne sme občutkov, o katerih Uporabnik ni poročal, predstavljati kot informacije, pridobljene neposredno od njega.",
    ],
  },
  {
    id: "6.4.5",
    title: "Pravni status neizmerjenega stanja",
    paragraphs: [
      "Nezmožnost merjenja osredotočenosti ne preprečuje določitve pravil za razvrščanje domnevnih stanj.",
      "Če stanje ni izmerjeno, se lahko postopek zaključi z dodelitvijo kategorije »ni ugotovljeno«. Zaključena razvrstitev ne pomeni popolnega poznavanja stanja.",
    ],
  },
  {
    id: "6.5.1",
    title: "Splošna načela določanja rokov hrambe",
    paragraphs: [
      "Trajanje hrambe dejansko pridobljenih informacij določajo njihov namen in tehnični pogoji.",
      "Roki hrambe se lahko določijo samo za informacije, ki se dejansko shranjujejo. Navedba roka v Pogodbi ne dokazuje obstoja ustrezne zbirke podatkov.",
    ],
  },
  {
    id: "6.5.2",
    title: "Razlikovanje med začasno in trajno hrambo",
    paragraphs: [
      "Informacije se lahko obdelujejo začasno ali hranijo v predvidenem obdobju.",
      "Začasna obdelava ni enakovredna trajni hrambi. Nezmožnost obnovitve informacij po zaključku seje sama po sebi ne potrjuje, da so bile izbrisane iz predhodno obstoječe shrambe.",
    ],
  },
  {
    id: "6.5.3",
    title: "Pravni status neshranjenih podatkov",
    paragraphs: [
      "Odsotnost shranjenega zapisa ne izključuje obstoja dogodka, ki se je zgodil prej, vendar omejuje možnost njegovega dokumentarnega dokazovanja.",
      "Odsotnost shranjenega zapisa ne izključuje obstoja dogodka, ki se je zgodil prej, vendar omejuje možnost njegovega dokumentarnega dokazovanja. Pri obravnavi spornih okoliščin se razlikuje med dogodkom in zapisom o njem.",
    ],
  },
  {
    id: "6.5.4",
    title: "Rok hrambe neobstoječih informacij",
    paragraphs: [
      "Za informacije, ki niso bile pridobljene, rok dejanske hrambe ne nastane.",
      "Za neobstoječe informacije je dovoljeno določiti pogojni rok za obravnavo vprašanja njihovega morebitnega nastanka. Takšen rok se ne šteje za rok hrambe podatkov, ki ne obstajajo.",
    ],
  },
  {
    id: "6.5.5",
    title: "Potrditev odsotnosti shranjenih informacij",
    paragraphs: [
      "Nezmožnost najti zapis ne omogoča vedno ugotovitve, ali je ta prej obstajal.",
      "Ugotovitev o odsotnosti zapisa potrjuje le rezultat opravljene preveritve v mejah razpoložljivih virov. Ne potrjuje samodejno odsotnosti dogodka, na katerega bi se zapis lahko nanašal.",
    ],
  },
  {
    id: "6.6.1",
    title: "Splošni pogoji posredovanja informacij",
    paragraphs: [
      "Dejansko posredovanje informacij je dovoljeno le ob obstoju predvidenih pravnih podlag.",
      "Ta določba ne ugotavlja, da je do posredovanja podatkov prišlo, in ne razširja seznama dejansko obdelovanih informacij. Vsako dejansko posredovanje se presoja po veljavni zakonodaji.",
    ],
  },
  {
    id: "6.6.2",
    title: "Kategorije možnih prejemnikov",
    paragraphs: [
      "Prejemniki so lahko pooblaščene osebe in organizacije, ki sodelujejo v predvidenih postopkih.",
      "Sama opredelitev kategorije prejemnikov ne pomeni, da jim je bil omogočen dostop. Možnost prejetja informacij in njihovo dejansko prejetje se evidentirata ločeno.",
    ],
  },
  {
    id: "6.6.3",
    title: "Nedoločeni potencialni prejemniki",
    paragraphs: [
      "Za namene notranje dokumentacije je dovoljeno upoštevati kategorije oseb, ki bi jim bile informacije teoretično lahko posredovane.",
      "Nedoločeni potencialni prejemnik se obravnava kot kategorija tveganja, ne kot konkretna oseba, ki so ji bile informacije že posredovane. Neznana identiteta ni dokaz opravljenega posredovanja.",
    ],
  },
  {
    id: "6.6.4",
    title: "Posredovanje domnevnih informacij",
    paragraphs: [
      "Hipotetična možnost posredovanja domnevnih podatkov se ne priznava kot dejstvo njihovega posredovanja.",
      "Hipotetični opis posredovanja ne nadomesti tehničnega dogodka posredovanja. Družba mora razlikovati med načrtovano, dovoljeno in dejansko opravljeno operacijo.",
    ],
  },
  {
    id: "6.6.5",
    title: "Odgovornost za posredovanje, do katerega ni prišlo",
    paragraphs: [
      "Odsotnost posredovanja ne preprečuje ocene potencialnih posledic takšnega posredovanja.",
      "Ocena potencialnih posledic se lahko konča z ugotovitvijo, da dejanska kršitev nima predmeta. Takšna ugotovitev ne pomeni, da je do posredovanja prišlo.",
    ],
  },
  {
    id: "6.7.1",
    title: "Splošne podlage za izbris podatkov",
    paragraphs: [
      "Dejansko shranjene informacije se lahko izbrišejo ob obstoju predvidenih podlag.",
      "Uporaba postopka izbrisa predpostavlja obstoj predmeta, ki ga je mogoče izbrisati. Odsotnost predmeta ne zahteva simulacije tehnične operacije.",
    ],
  },
  {
    id: "6.7.2",
    title: "Potrditev zaključka izbrisa",
    paragraphs: [
      "Izbris se šteje za zaključen po izvedbi predvidenih tehničnih operacij.",
      "Potrditev se lahko nanaša le na dejansko izvedena dejanja in razpoložljivi obseg podatkov. Nezmožnost preveritve izbrisa se ne sme prikazati kot potrditev njegove izvedbe.",
    ],
  },
  {
    id: "6.7.3",
    title: "Izbris domnevnih podatkov",
    paragraphs: [
      "Pri domnevnih informacijah je dovoljeno prenehati z njihovim evidentiranjem brez tehničnega izbrisa.",
      "Prenehanje evidentiranja hipoteze pomeni njeno izključitev iz veljavne razvrstitve, ne pa uničenja neobstoječe datoteke. Pogojno poimenovanje postopka ne spremeni njegove dejanske narave.",
    ],
  },
  {
    id: "6.7.4",
    title: "Obnovitev predhodno izbrisanih informacij",
    paragraphs: [
      "Obnovitev je mogoča, če obstaja tehnično dostopna kopija ali drug dopusten vir.",
      "Če dostopne kopije ni, lahko Družba zabeleži nezmožnost obnovitve. Takšen zapis ne ustvari kopije in ne spremeni rezultata predhodno izvedenega izbrisa.",
    ],
  },
  {
    id: "6.7.5",
    title: "Obnovitev informacij, ki prej niso obstajale",
    paragraphs: [
      "Ustvarjanje novega zapisa na podlagi domnev se ne priznava kot obnovitev prej obstoječih podatkov.",
      "Ponovno ustvarjena domneva se evidentira kot nova izpeljana ali domnevna informacija. Izraz »obnovitev« ji ne sme podeliti statusa zgodovinskega dejstva.",
    ],
  },
  {
    id: "6.8.1",
    title: "Pojem nepotrjenih podatkov",
    paragraphs: [
      "Za nepotrjene se štejejo informacije, katerih obstoja ni mogoče ugotoviti z razpoložljivimi sredstvi.",
      "Nepotrjenost ni enakovredna dokazani odsotnosti. Za namene Pogodbe je dovoljeno posebej označiti nezmožnost preveritve samega vprašanja obstoja informacij.",
    ],
  },
  {
    id: "6.8.2",
    title: "Postopek predhodnega evidentiranja",
    paragraphs: [
      "Nepotrjene informacije se lahko evidentirajo kot posebna teoretična kategorija brez ustvarjanja navideznega dejanskega zapisa.",
      "Predhodno evidentiranje lahko obsega izključno opis kategorije. Pri tem je prepovedano pogojni zapis predstavljati kot rezultat dejanskega zbiranja informacij.",
    ],
  },
  {
    id: "6.8.3",
    title: "Razvrstitev neobstoječih podatkov",
    paragraphs: [
      "Informacije, katerih obstoj ni potrjen, se razvrščajo v skladu s točko 6.1.2.",
      "Razvrstitev informacij, katerih obstoj ni potrjen, se opravi v skladu s točko 6.1.2. Obstoj odločitve o razvrstitvi ne spremeni statusa izhodiščnih informacij.",
    ],
  },
  {
    id: "6.8.4",
    title: "Obveznost upoštevanja nezmožnosti evidentiranja",
    paragraphs: [
      "Nezmožnost ugotovitve obstoja informacij je treba upoštevati pri ocenjevanju popolnosti informacijske slike.",
      "Če evidentiranje ni mogoče, lahko Družba sestavi ugotovitev o nezmožnosti evidentiranja. Obstoj ugotovitve potrjuje izvedbo postopka, ne pa obstoja informacij, na katere se je nanašal.",
    ],
  },
  {
    id: "6.8.5",
    title: "Domneva zadostnosti negotovosti",
    paragraphs: [
      "Če ni mogoče potrditi niti obstoja niti odsotnosti podatkov, se njihov negotovi status šteje za zadosten za zaključek predhodne razvrstitve.",
      "Predhodna razvrstitev se lahko šteje za zaključeno, če je dokumentirano ugotovljena nezmožnost izbire med obstojem in odsotnostjo podatkov. Zaključek postopka ne odpravi negotovosti, ki je bila razlog za njegov zaključek.",
    ],
  },
] satisfies AgreementSection;
