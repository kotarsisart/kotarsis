import type { AgreementSection } from "../../types";

export const section03 = [
  {
    id: "3.1.1",
    title: "Pojem aktivace",
    paragraphs: [
      "Aktivací Zařízení se rozumí úkon Uživatele stanovený rozhraním, jehož účelem je zahájit soustředicí relaci. Pro účely Smlouvy znamená aktivace předání příkazu softwarovému mechanismu, nikoli uvedení samostatného fyzického přístroje do pohybu.",
      "Úmysl zahájit relaci bez provedení příslušného úkonu se nepovažuje za technickou aktivaci. Takový úmysl však může aktivaci předcházet a nevyžaduje samostatné potvrzení Společností.",
    ],
  },
  {
    id: "3.1.2",
    title: "Podmínky dostupnosti aktivace",
    paragraphs: [
      "Možnost aktivace závisí na skutečné dostupnosti rozhraní, stavu softwarových prvků a splnění nezbytných předběžných úkonů. Samotná viditelnost tlačítka nezaručuje úspěšné zahájení relace.",
      "Pokud příkaz nebyl zpracován, je Uživatel oprávněn úkon zopakovat po ověření stavu stránky. Neúspěšný pokus nezakládá povinnost předstírat, že relace začala.",
    ],
  },
  {
    id: "3.1.3",
    title: "Jednorázovost příkazu ke spuštění",
    paragraphs: [
      "Jeden řádný úkon spuštění představuje jeden pokus o zahájení relace. Opakované stisknutí před odezvou rozhraní se posuzuje podle skutečného chování softwarového mechanismu.",
      "Společnost není povinna považovat každé další stisknutí za samostatnou relaci, pokud rozhraní takový výsledek nepředpokládá. Počet stisknutí a počet uskutečněných relací se mohou lišit.",
    ],
  },
  {
    id: "3.1.4",
    title: "Okamžik zahájení odpočítávání",
    paragraphs: [
      "Za začátek odpočítávání se považuje okamžik, kdy rozhraní převede relaci do aktivního stavu a začne započítávat stanovený interval. Doba předběžného čekání, načítání stránky nebo hledání tlačítka se do délky relace nezahrnuje.",
      "Pokud se zobrazení spuštění opozdí, rozhodující jsou údaje, které má k dispozici samotné rozhraní. Subjektivní dojem Uživatele o dřívějším začátku automaticky nemění okamžik stanovený programem.",
    ],
  },
  {
    id: "3.1.5",
    title: "Aktivace bez jistoty výsledku",
    paragraphs: [
      "Uživatel je oprávněn zahájit relaci, aniž by si byl jist dosažením soustředění. Souhlas se spuštěním znamená souhlas s provedením stanovené posloupnosti úkonů, nikoli potvrzení budoucího zlepšení pozornosti.",
      "Nedostatek jistoty, pochybnosti o užitečnosti Zařízení ani skeptický postoj k jeho názvu aktivaci nebrání. Tyto okolnosti není nutné předem vyvracet.",
    ],
  },
  {
    id: "3.2.1",
    title: "Obecný postup průběhu relace",
    paragraphs: [
      "Relace se skládá ze zahájení, průběhu stanoveného intervalu a ukončení, které se zobrazují prostředky rozhraní. Posloupnost má softwarovou povahu a nevyžaduje externího pozorovatele potvrzujícího každou fázi.",
      "Uživatel může relaci doprovázet vlastními úkony nebo zůstat nehybný. Přítomnost či nepřítomnost těchto úkonů automaticky nemění posloupnost technických stavů.",
    ],
  },
  {
    id: "3.2.2",
    title: "Vztah relace a úkonů Uživatele",
    paragraphs: [
      "Technická relace a skutečná činnost Uživatele představují samostatné okolnosti. Spuštění časovače nedokazuje, že Uživatel po celý interval udržoval pozornost na určitém předmětu.",
      "Při posuzování chování Uživatele během relace se rovněž použijí ustanovení bodu 4.6.3. Tento odkaz nerozšiřuje možnosti rozhraní ani nemění sledování časovače v povinnou formu soustředění.",
    ],
  },
  {
    id: "3.2.3",
    title: "Délka stanoveného intervalu",
    paragraphs: [
      "Standardní délka jedné soustředicí relace v rozhraní činí tři minuty. Tato doba charakterizuje softwarový režim a není univerzálním doporučením ohledně délky duševní práce.",
      "Uživatel je oprávněn pokračovat ve vlastní činnosti i po uplynutí intervalu. Takové pokračování automaticky neprodlužuje již ukončenou relaci.",
    ],
  },
  {
    id: "3.2.4",
    title: "Nepřetržitost zobrazovaného procesu",
    paragraphs: [
      "Při běžném provozu zobrazuje rozhraní průběh relace jako souvislý proces. Změny číselných údajů, grafiky či animace představují způsob zobrazení stavu programu.",
      "Nepřetržitost vizuálního zobrazení nedokazuje nepřetržitost myšlenkové činnosti Uživatele. Krátké rozptýlení může rozhraní nezaznamenat a nepodléhá automatické technické evidenci.",
    ],
  },
  {
    id: "3.2.5",
    title: "Absence povinné vnější činnosti",
    paragraphs: [
      "Během relace není Uživatel povinen vykonávat další fyzické úkony, pokud je rozhraní výslovně nestanoví. Pozorování, čtení, přemýšlení i nečinnost mohou doprovázet tentýž softwarový režim.",
      "Společnost nepředpokládá, že nehybnost je totožná se soustředěním. Stejně tak se pohyb Uživatele nepovažuje za nezpochybnitelný důkaz nedostatku pozornosti.",
    ],
  },
  {
    id: "3.3.1",
    title: "Zobrazení času v rozhraní",
    paragraphs: [
      "Zbývající nebo uplynulý čas může být znázorněn čísly, grafickými prvky a dalšími vizuálními prostředky. Toto zobrazení slouží k orientaci Uživatele v průběhu relace.",
      "Zobrazená hodnota není samostatným měřením psychického stavu. Údaje o čase nesmějí být vykládány jako údaje o množství nahromaděného soustředění.",
    ],
  },
  {
    id: "3.3.2",
    title: "Rozdíl mezi časem a subjektivním vnímáním",
    paragraphs: [
      "Tříminutový interval může Uživatel vnímat jako krátký, dlouhý nebo neurčitý. Subjektivní hodnocení rychlosti plynutí času nemá vliv na stanovenou délku softwarového režimu.",
      "Pokud má Uživatel pocit, že se čas zastavil nebo uběhl rychleji, než očekával, nepovažuje se tento pocit bez dalších objektivních známek za technickou závadu.",
    ],
  },
  {
    id: "3.3.3",
    title: "Význam animace během relace",
    paragraphs: [
      "Aktivní relaci mohou doprovázet animace a změny tvaru, barvy či polohy prvků rozhraní. V rámci softwarového zobrazení Zařízení plní informační a uměleckou funkci.",
      "Samotný pohyb obrazu neznamená fyzické přemístění jakéhokoli objektu. Ani nepřítomnost viditelné animace nedokazuje ukončení relace, pokud jiné stanovené znaky svědčí o jejím pokračování.",
    ],
  },
  {
    id: "3.3.4",
    title: "Informační zprávy",
    paragraphs: [
      "Během relace může rozhraní zobrazovat zprávy o aktuálním stavu, očekávaném ukončení nebo dostupných úkonech. Jejich obsah určuje aktuální implementace programu.",
      "Zpráva informační povahy nepředstavuje individuální hodnocení Uživatele, pokud to není výslovně stanoveno. Uživatel není povinen chápat každou větu rozhraní jako závěr o vlastních schopnostech.",
    ],
  },
  {
    id: "3.3.5",
    title: "Meze přesnosti vizuálních ukazatelů",
    paragraphs: [
      "Vizuální ukazatele stavu mohou záviset na obnovovací frekvenci obrazovky, výkonu zařízení Uživatele a dalších technických okolnostech. Jejich účelem je srozumitelně znázornit proces, nikoli metrologicky ověřit každý okamžik.",
      "Při nesouladu mezi animací a skutečným softwarovým stavem má přednost správně zjištěný stav relace. Vzhled rozhraní nevytváří samostatný čas odlišný od času běhu programu.",
    ],
  },
  {
    id: "3.4.1",
    title: "Možnost rozptýlení",
    paragraphs: [
      "Rozptýlením se rozumí dočasné přesunutí pozornosti Uživatele ze zvoleného předmětu na jiný předmět, událost nebo myšlenku. Může nastat nezávisle na stavu Zařízení a beze změny zobrazeného časovače.",
      "Samotné rozptýlení neruší již provedenou aktivaci. Otázka kvality soustředění nenahrazuje otázku technického dokončení relace.",
    ],
  },
  {
    id: "3.4.2",
    title: "Návrat ke zvolenému předmětu",
    paragraphs: [
      "Po rozptýlení je Uživatel oprávněn v průběhu pokračujícího intervalu samostatně obnovit zaměření pozornosti. K takovému návratu není nutné znovu přijímat Smlouvu.",
      "Pokud Uživatel okamžik rozptýlení nezaznamenal, neznalost přesného času jeho začátku nebrání dalšímu používání rozhraní. Společnost není povinna zjišťovat délku rozptýlení, kterou nezná ani Uživatel.",
    ],
  },
  {
    id: "3.4.3",
    title: "Rušivé podněty",
    paragraphs: [
      "Zvuky, oznámení, pohyb okolních osob a jiné vnější okolnosti mohou ovlivnit vnímání relace. Přítomnost takových podnětů neznamená změnu softwarové posloupnosti.",
      "Uživatel sám rozhoduje, zda rušivý podnět odstraní, bude jej ignorovat nebo ukončí vlastní činnost. Rozhraní nezaručuje vytvoření vnějšího prostředí bez rušení.",
    ],
  },
  {
    id: "3.4.4",
    title: "Souběžná činnost",
    paragraphs: [
      "Uživatel může současně s relací vykonávat činnosti, které přímo nesouvisejí s rozhraním. Jejich slučitelnost s osobním cílem soustředění posuzuje Uživatel podle povahy činnosti.",
      "Více otevřených karet, aplikací či předmětů pozornosti automaticky nedokazuje porušení technických podmínek relace. Společnost nad takovou činností nevykonává všestranný dohled.",
    ],
  },
  {
    id: "3.4.5",
    title: "Žádný trest za rozptýlení",
    paragraphs: [
      "Pokud aktuální rozhraní neobsahuje zvláštní mechanismus zaznamenávání rozptýlení, nevznikají z nich samostatné technické pokuty, sankce ani záporné body. Nepodložené domněnky o rozptýlení nemohou nahrazovat údaje takového mechanismu.",
      "Uživatel není povinen prokazovat nepřetržitou pozornost pouze proto, aby bylo uznáno dokončení časového odpočtu. Hodnocení účinnosti zůstává samostatnou otázkou.",
    ],
  },
  {
    id: "3.5.1",
    title: "Pojem pozastavení",
    paragraphs: [
      "Pozastavením se rozumí programem stanovený dočasný přechod z aktivního stavu do stavu čekání s možností následného obnovení. Pokud rozhraní takový režim neobsahuje, samotné přání Uživatele zastavit čas pozastavení nevytváří.",
      "Přepnutí na jinou kartu či ukončení sledování obrazovky nemusí znamenat pozastavení. Důsledky závisí na skutečné implementaci softwarového mechanismu.",
    ],
  },
  {
    id: "3.5.2",
    title: "Obnovení po pauze",
    paragraphs: [
      "Pokud rozhraní podporuje pauzu, obnovení se provádí stanoveným úkonem Uživatele. Délku zbývajícího intervalu určuje program s přihlédnutím k uloženému stavu.",
      "Opětovné spuštění namísto obnovení může představovat novou relaci, pokud tak rozhraní funguje. Uživatel nesmí bez potvrzení technického výsledku předpokládat totožnost těchto úkonů.",
    ],
  },
  {
    id: "3.5.3",
    title: "Předčasné ukončení relace",
    paragraphs: [
      "Předčasným ukončením se rozumí ukončení aktivní relace před uplynutím stanoveného intervalu stanoveným úkonem nebo v důsledku skutečné ztráty možnosti pokračovat. Takové ukončení se liší od řádného dokončení časovače.",
      "Otázky ukončení přístupu a dalších důsledků upravuje také bod 14.2.2. Tento odkaz neznamená, že každé zavření karty automaticky ukončuje všechny vztahy mezi Společností a Uživatelem.",
    ],
  },
  {
    id: "3.5.4",
    title: "Zavření stránky během relace",
    paragraphs: [
      "Zavření stránky, opětovné načtení prohlížeče nebo ztráta připojení mohou ovlivnit zobrazení a uchování aktuálního stavu. Důsledky určuje skutečné fungování programu a nepředpokládá se povinné obnovení nedokončeného intervalu.",
      "Pokud Uživatel po návratu nevidí předchozí relaci, tato okolnost sama o sobě nedokazuje, že před zavřením stránky relace nezačala. Zároveň však nepotvrzuje její úspěšné dokončení.",
    ],
  },
  {
    id: "3.5.5",
    title: "Přerušení bez úmyslu Uživatele",
    paragraphs: [
      "Relace může být přerušena technickými okolnostmi nezávislými na vůli Uživatele, včetně selhání prohlížeče nebo výpadku napájení zařízení. Takovou událost je třeba odlišovat od dobrovolného odmítnutí pokračovat.",
      "Společnost posuzuje technické důsledky přerušení podle dostupných údajů. Nedostatek potvrzujících dat nesmí být automaticky nahrazen domněnkou o zaviněném jednání Uživatele.",
    ],
  },
  {
    id: "3.6.1",
    title: "Řádné dokončení intervalu",
    paragraphs: [
      "Za řádné dokončení se považuje dosažení stanoveného koncového bodu tříminutového odpočtu podle logiky programu. Rozhraní může tento okamžik označit změnou stavu, zprávou nebo jiným vizuálním signálem.",
      "Dokončení intervalu potvrzuje konec stanovené posloupnosti, ale neprokazuje dosažení konkrétního intelektuálního výsledku. Uživatel je oprávněn výsledek hodnotit samostatně.",
    ],
  },
  {
    id: "3.6.2",
    title: "Oznámení o dokončení",
    paragraphs: [
      "Zpráva o skončení relace slouží k informování Uživatele o technické události. Její podoba se může lišit podle verze rozhraní a použitého zařízení.",
      "Pokud Uživatel oznámení nezaznamenal, neznamená to automatické pokračování uplynulého intervalu. Okamžik dokončení určuje stav programu, nikoli okamžik přečtení zprávy.",
    ],
  },
  {
    id: "3.6.3",
    title: "Úkony po dokončení",
    paragraphs: [
      "Po dokončení je Uživatel oprávněn zavřít rozhraní, pokračovat ve vlastní činnosti nebo zahájit novou relaci, pokud je tato možnost dostupná. Žádný z těchto úkonů není povinným pokračováním již dokončeného intervalu.",
      "Ponechání stránky otevřené po dokončení neznamená nepřetržité používání aktivního režimu. Doba následného pobytu na stránce se k dokončené relaci automaticky nepřičítá.",
    ],
  },
  {
    id: "3.6.4",
    title: "Opětovné spuštění",
    paragraphs: [
      "Nová relace vzniká po samostatném stanoveném úkonu spuštění, pokud rozhraní umožňuje opakovanou aktivaci. Předchozí dokončený interval se nepovažuje za nedokončený jen proto, že se Uživatel rozhodl zahájit další.",
      "Po sobě jdoucí relace mohou být vnímány jako jediná osobní praxe, technicky však zůstávají samostatnými intervaly. Toto vnímání nemění způsob jejich evidence, pokud je evidence stanovena.",
    ],
  },
  {
    id: "3.6.5",
    title: "Absence povinného hlášení",
    paragraphs: [
      "Pokud rozhraní neobsahuje zvláštní formu vykazování, Uživatel není povinen po každé relaci popisovat myšlenky, vyjmenovávat rozptýlení ani potvrzovat vlastní produktivitu. Dokončení časovače nezávisí na sepsání písemného závěru.",
      "Dobrovolné zhodnocení výsledků zůstává osobním úkonem Uživatele. Společnost nepovažuje nepředložení hlášení za důkaz neužitečnosti relace.",
    ],
  },
  {
    id: "3.7.1",
    title: "Opakovatelnost soustředicích relací",
    paragraphs: [
      "Uživatel je oprávněn uskutečnit více relací, pokud je rozhraní dostupné. Každé nové spuštění se posuzuje podle vlastního okamžiku zahájení a dokončení.",
      "Počet relací sám o sobě nevypovídá o kvalitě pozornosti. Několik krátkých intervalů automaticky netvoří jednu nepřetržitou relaci delšího trvání.",
    ],
  },
  {
    id: "3.7.2",
    title: "Intervaly mezi relacemi",
    paragraphs: [
      "Doba mezi dokončením jedné relace a zahájením další nepatří do aktivního času žádné z nich. Během této doby může Uživatel odpočívat, věnovat se jiným věcem nebo nadále udržovat pozornost na předchozím předmětu.",
      "Absence úkonů mezi relacemi nevytváří zvláštní režim Zařízení. Osobní nepřetržitost soustředění nevyžaduje nepřetržitost softwarového odpočtu.",
    ],
  },
  {
    id: "3.7.3",
    title: "Podmíněný kumulovaný výsledek",
    paragraphs: [
      "Pokud rozhraní zobrazuje počet uskutečněných relací nebo jiné souhrnné ukazatele, charakterizují zaznamenané softwarové události v rozsahu dostupných údajů. Tyto ukazatele nejsou přímým měřením získané schopnosti soustředění.",
      "Sčítání délek intervalů je přípustné jako aritmetická operace, ale nepotvrzuje odpovídající růst schopnosti udržet pozornost. Uživatel není povinen přisuzovat výslednému číslu psychologický význam.",
    ],
  },
  {
    id: "3.7.4",
    title: "Srovnatelnost různých relací",
    paragraphs: [
      "Relace se mohou lišit vnějšími podmínkami, zvoleným úkolem a subjektivními pocity Uživatele. Stejná délka neznamená stejnou obtížnost ani totožnou užitečnost.",
      "Porovnávání více relací je přípustné pro osobní účely, jeho výsledky však nevytvářejí univerzální žebříček uživatelů ani nedokazují nadřazenost jedné osoby nad druhou.",
    ],
  },
  {
    id: "3.8.1",
    title: "Relace bez stanoveného cíle",
    paragraphs: [
      "Uživatel může zahájit relaci, aniž by si předem formuloval konkrétní úkol. Absence formulovaného cíle nebrání chodu časovače, pokud rozhraní jeho povinné zadání nevyžaduje.",
      "Taková relace se nepovažuje za technicky neuskutečněnou pouze kvůli neurčitosti záměrů. Posouzení její osobní užitečnosti zůstává na Uživateli.",
    ],
  },
  {
    id: "3.8.2",
    title: "Relace doprovázená pochybnostmi",
    paragraphs: [
      "Pochybnosti o potřebnosti relace, její účinnosti nebo správnosti zvoleného okamžiku neruší technický význam provedené aktivace. Uživatel je oprávněn během provozu rozhraní přehodnocovat vlastní očekávání.",
      "Společnost nepovažuje vnitřní nesouhlas Uživatele s předpokládaným přínosem relace za příkaz ke zrušení. Ke změně stavu programu je nutný stanovený úkon nebo příslušná technická událost.",
    ],
  },
  {
    id: "3.8.3",
    title: "Relace bez subjektivně patrného účinku",
    paragraphs: [
      "Po dokončení relace nemusí Uživatel zaznamenat změny pozornosti, nálady ani výkonnosti. Absence patrného účinku není totožná s absencí samotného softwarového intervalu.",
      "Společnost nezaručuje vznik určitého prožitku po dokončení odpočtu. Uživatel je oprávněn považovat relaci za osobně neužitečnou, aniž by musel popírat její technické uskutečnění.",
    ],
  },
  {
    id: "3.8.4",
    title: "Závěrečné rozlišení postupu a výsledku",
    paragraphs: [
      "Pro účely této části patří aktivace, průběh a dokončení relace k postupu stanovenému rozhraním, zatímco soustředění a osobní užitečnost jsou okolnostmi posuzovanými samostatně. Tyto kategorie se nesmějí vzájemně zaměňovat.",
      "Dokončená relace potvrzuje provedení stanovené časové posloupnosti v rozsahu dostupných technických údajů. Neosvědčuje úspěšnost myšlenky, nepřítomnost rozptýlení ani dosažení cíle, který Uživatel možná ani neformuloval.",
    ],
  },
] satisfies AgreementSection;
