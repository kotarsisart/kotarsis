import type { AgreementSection } from "../../types";

export const section03 = [
  {
    id: "3.1.1",
    title: "Pojem aktivácie",
    paragraphs: [
      "Aktiváciou Zariadenia sa rozumie úkon Používateľa predpokladaný rozhraním, ktorého cieľom je začať reláciu sústredenia. Na účely Dohody aktivácia znamená odoslanie príkazu softvérovému mechanizmu, nie uvedenie samostatného fyzického prístroja do pohybu.",
      "Úmysel začať reláciu bez vykonania príslušného úkonu sa nepovažuje za technickú aktiváciu. Takýto úmysel však môže aktivácii predchádzať a nevyžaduje osobitné potvrdenie zo strany Spoločnosti.",
    ],
  },
  {
    id: "3.1.2",
    title: "Podmienky dostupnosti aktivácie",
    paragraphs: [
      "Možnosť aktivácie závisí od skutočnej dostupnosti rozhrania, stavu softvérových prvkov a vykonania nevyhnutných predbežných úkonov. Samotná vizuálna prítomnosť tlačidla nezaručuje úspešné začatie relácie.",
      "Ak príkaz nebol spracovaný, Používateľ je oprávnený po overení stavu stránky úkon zopakovať. Neúspešný pokus nezakladá povinnosť predstierať, že sa relácia začala.",
    ],
  },
  {
    id: "3.1.3",
    title: "Jednorazovosť príkazu na spustenie",
    paragraphs: [
      "Jeden riadne vykonaný úkon spustenia predstavuje jeden pokus o iniciovanie relácie. Opakované stlačenie vykonané pred prijatím odozvy rozhrania sa posudzuje podľa skutočného správania softvérového mechanizmu.",
      "Spoločnosť nie je povinná uznať každé ďalšie stlačenie za samostatnú reláciu, ak rozhranie takýto výsledok nepredpokladá. Počet stlačení a počet uskutočnených relácií sa môžu líšiť.",
    ],
  },
  {
    id: "3.1.4",
    title: "Okamih začiatku odpočítavania",
    paragraphs: [
      "Za začiatok odpočítavania sa považuje okamih, keď rozhranie prepne reláciu do aktívneho stavu a začne zaznamenávať stanovený interval. Čas predbežného čakania, načítavania stránky alebo hľadania tlačidla sa do trvania relácie nezapočítava.",
      "Ak sa zobrazenie spustenia oneskorí, rozhodujúce sú údaje, ktorými disponuje samotné rozhranie. Subjektívny pocit Používateľa, že relácia začala skôr, automaticky nemení okamih stanovený programom.",
    ],
  },
  {
    id: "3.1.5",
    title: "Aktivácia bez istoty výsledku",
    paragraphs: [
      "Používateľ je oprávnený začať reláciu bez istoty, že dosiahne sústredenie. Súhlas so spustením znamená súhlas s vykonaním predpokladanej postupnosti úkonov, nie potvrdenie budúceho zlepšenia pozornosti.",
      "Nedostatok istoty, pochybnosti o užitočnosti Zariadenia ani skeptický postoj k jeho názvu nebránia aktivácii. Tieto okolnosti nevyžadujú predchádzajúce vyvrátenie.",
    ],
  },
  {
    id: "3.2.1",
    title: "Všeobecný postup priebehu relácie",
    paragraphs: [
      "Relácia pozostáva zo začiatku, plynutia stanoveného intervalu a ukončenia, ktoré sa zobrazujú prostredníctvom rozhrania. Táto postupnosť má softvérový charakter a nevyžaduje prítomnosť externého pozorovateľa osvedčujúceho každú fázu.",
      "Používateľ môže reláciu sprevádzať vlastnými úkonmi alebo zostať nehybný. Prítomnosť či neprítomnosť takýchto úkonov automaticky nemení postupnosť technických stavov.",
    ],
  },
  {
    id: "3.2.2",
    title: "Vzťah medzi reláciou a úkonmi Používateľa",
    paragraphs: [
      "Technická relácia a skutočná činnosť Používateľa predstavujú samostatné okolnosti. Spustenie časovača nedokazuje, že Používateľ počas celého intervalu udržiaval pozornosť na určitom objekte.",
      "Pri posudzovaní správania Používateľa počas relácie sa uplatňujú aj ustanovenia bodu 4.6.3. Tento odkaz nerozširuje možnosti rozhrania a nemení sledovanie časovača na povinnú formu sústredenia.",
    ],
  },
  {
    id: "3.2.3",
    title: "Trvanie stanoveného intervalu",
    paragraphs: [
      "Normatívne trvanie jednej relácie sústredenia v rozhraní predstavuje tri minúty. Uvedený čas charakterizuje softvérový režim a nie je všeobecným odporúčaním týkajúcim sa dĺžky duševnej práce.",
      "Používateľ je oprávnený pokračovať vo vlastnej činnosti aj po uplynutí intervalu. Takéto pokračovanie neznamená automatické predĺženie ukončenej relácie.",
    ],
  },
  {
    id: "3.2.4",
    title: "Nepretržitosť zobrazovaného procesu",
    paragraphs: [
      "Pri riadnej prevádzke rozhranie zobrazuje priebeh relácie ako súvislý proces. Zmeny číselných údajov, grafiky alebo animácie slúžia na znázornenie stavu programu.",
      "Nepretržitosť vizuálneho zobrazenia nepotvrdzuje nepretržitosť duševnej činnosti Používateľa. Krátke rozptýlenie môže zostať rozhraním nezaznamenané a nepodlieha automatickej technickej evidencii.",
    ],
  },
  {
    id: "3.2.5",
    title: "Neexistencia povinnej vonkajšej činnosti",
    paragraphs: [
      "Počas relácie Používateľ nie je povinný vykonávať ďalšie fyzické úkony, pokiaľ ich rozhranie výslovne nepredpokladá. Pozorovanie, čítanie, premýšľanie aj nečinnosť môžu sprevádzať ten istý softvérový režim.",
      "Spoločnosť nestanovuje domnienku, že nehybnosť je totožná so sústredením. Rovnako sa pohyb Používateľa nepovažuje za bezpodmienečný dôkaz neprítomnosti pozornosti.",
    ],
  },
  {
    id: "3.3.1",
    title: "Zobrazenie času v rozhraní",
    paragraphs: [
      "Zostávajúci alebo uplynutý čas môže byť znázornený číslami, grafickými prvkami a inými vizuálnymi prostriedkami. Takéto zobrazenie slúži na orientáciu Používateľa počas relácie.",
      "Zobrazená hodnota nie je samostatným meraním psychického stavu. Údaje o čase sa nesmú vykladať ako údaje o množstve nahromadeného sústredenia.",
    ],
  },
  {
    id: "3.3.2",
    title: "Rozdiel medzi časom a subjektívnym vnímaním",
    paragraphs: [
      "Trojminútový interval môže Používateľ vnímať ako krátky, dlhý alebo neurčitý. Subjektívne hodnotenie rýchlosti plynutia času nemá vplyv na stanovené trvanie softvérového režimu.",
      "Ak sa Používateľovi zdá, že sa čas zastavil alebo uplynul rýchlejšie, než očakával, takýto pocit sa bez ďalších objektívnych znakov nepovažuje za technickú poruchu.",
    ],
  },
  {
    id: "3.3.3",
    title: "Význam animácie počas relácie",
    paragraphs: [
      "Aktívnu reláciu môžu sprevádzať animácie a zmeny tvaru, farby alebo polohy prvkov rozhrania. V rámci softvérového znázornenia Zariadenia plnia informačnú a umeleckú funkciu.",
      "Samotný pohyb obrazu neznamená fyzický pohyb akéhokoľvek objektu. Ani neprítomnosť viditeľnej animácie nesvedčí o ukončení relácie, ak iné predpokladané znaky poukazujú na jej pokračovanie.",
    ],
  },
  {
    id: "3.3.4",
    title: "Informačné oznámenia",
    paragraphs: [
      "Počas relácie môže rozhranie zobrazovať oznámenia o aktuálnom stave, očakávanom ukončení alebo dostupných úkonoch. Obsah takýchto oznámení určuje aktuálna implementácia programu.",
      "Oznámenie informačného charakteru nie je individuálnym hodnotením Používateľa, pokiaľ to nie je výslovne stanovené. Používateľ nie je povinný vnímať každú vetu rozhrania ako záver o vlastných schopnostiach.",
    ],
  },
  {
    id: "3.3.5",
    title: "Hranice presnosti vizuálnych ukazovateľov",
    paragraphs: [
      "Vizuálne ukazovatele stavu môžu závisieť od obnovovacej frekvencie obrazovky, výkonu zariadenia Používateľa a ďalších technických okolností. Ich účelom je prístupné znázornenie procesu, nie metrologické osvedčenie každého okamihu.",
      "Pri nesúlade medzi animáciou a skutočným softvérovým stavom má prednosť správne zistený stav relácie. Vzhľad rozhrania nevytvára osobitný čas odlišný od času fungovania programu.",
    ],
  },
  {
    id: "3.4.1",
    title: "Možnosť rozptýlenia",
    paragraphs: [
      "Rozptýlením sa rozumie dočasné presunutie pozornosti Používateľa zo zvoleného objektu na iný objekt, udalosť alebo myšlienku. K rozptýleniu môže dôjsť nezávisle od stavu Zariadenia a bez zmeny zobrazovaného časovača.",
      "Samotné rozptýlenie neruší predchádzajúcu aktiváciu. Otázka kvality sústredenia nenahrádza otázku technického ukončenia relácie.",
    ],
  },
  {
    id: "3.4.2",
    title: "Návrat k zvolenému objektu",
    paragraphs: [
      "Po rozptýlení je Používateľ oprávnený samostatne obnoviť zameranie pozornosti v rámci prebiehajúceho intervalu. Takýto návrat nevyžaduje opätovné prijatie Dohody.",
      "Ak si Používateľ nevšimol okamih rozptýlenia, neznalosť presného času jeho začiatku nebráni ďalšiemu používaniu rozhrania. Spoločnosť nie je povinná zisťovať dĺžku rozptýlenia, ktorú nepozná ani Používateľ.",
    ],
  },
  {
    id: "3.4.3",
    title: "Rušivé podnety",
    paragraphs: [
      "Zvuky, upozornenia, pohyby okolitých osôb a ďalšie vonkajšie okolnosti môžu ovplyvniť vnímanie relácie. Prítomnosť takýchto podnetov neznamená zmenu softvérovej postupnosti.",
      "Používateľ sám rozhoduje, či rušivý podnet odstráni, bude ho ignorovať alebo ukončí vlastnú činnosť. Rozhranie nezaručuje vytvorenie vonkajšieho prostredia bez rušivých vplyvov.",
    ],
  },
  {
    id: "3.4.4",
    title: "Súbežná činnosť",
    paragraphs: [
      "Používateľ môže súčasne s reláciou vykonávať činnosti, ktoré priamo nesúvisia s rozhraním. Ich zlučiteľnosť s osobným cieľom sústredenia posudzuje Používateľ s prihliadnutím na povahu činnosti.",
      "Viacero otvorených kariet, aplikácií alebo objektov pozornosti nie je automatickým dôkazom porušenia technických podmienok relácie. Spoločnosť nevykonáva všestrannú kontrolu takejto činnosti.",
    ],
  },
  {
    id: "3.4.5",
    title: "Neexistencia trestu za rozptýlenie",
    paragraphs: [
      "Ak aktuálne rozhranie neobsahuje osobitný mechanizmus zaznamenávania rozptýlení, tieto nepredstavujú samostatné technické pokuty, sankcie ani záporné body. Nepotvrdené domnienky o rozptýlení nemôžu nahrádzať údaje takéhoto mechanizmu.",
      "Používateľ nie je povinný dokazovať nepretržitosť pozornosti iba na účely uznania skutočnosti, že časovač skončil. Posúdenie účinnosti zostáva samostatnou otázkou.",
    ],
  },
  {
    id: "3.5.1",
    title: "Pojem pozastavenia",
    paragraphs: [
      "Pozastavením sa rozumie programom predpokladaný dočasný prechod z aktívneho stavu do stavu čakania s možnosťou následného obnovenia. Ak takýto režim v rozhraní neexistuje, samotné želanie Používateľa zastaviť čas pozastavenie nevytvára.",
      "Prepnutie na inú kartu alebo ukončenie sledovania obrazovky nemusí znamenať pozastavenie. Dôsledky závisia od skutočnej implementácie softvérového mechanizmu.",
    ],
  },
  {
    id: "3.5.2",
    title: "Obnovenie po prestávke",
    paragraphs: [
      "Ak rozhranie podporuje pozastavenie, obnovenie sa uskutočňuje úkonom Používateľa predpokladaným rozhraním. Dĺžku zostávajúceho intervalu určuje program so zohľadnením uloženého stavu.",
      "Opätovné spustenie namiesto obnovenia môže vytvoriť novú reláciu, ak tak funguje rozhranie. Používateľ nesmie predpokladať totožnosť týchto úkonov bez potvrdenia ich technického výsledku.",
    ],
  },
  {
    id: "3.5.3",
    title: "Predčasné ukončenie relácie",
    paragraphs: [
      "Za predčasné ukončenie sa považuje skončenie aktívnej relácie pred uplynutím stanoveného intervalu prostredníctvom predpokladaného úkonu alebo v dôsledku skutočnej straty možnosti pokračovať. Takéto ukončenie sa líši od riadneho skončenia podľa časovača.",
      "Otázky ukončenia prístupu a ďalších dôsledkov upravuje aj bod 14.2.2. Odkaz naň neznamená, že každé zatvorenie karty automaticky ukončuje všetky vzťahy medzi Spoločnosťou a Používateľom.",
    ],
  },
  {
    id: "3.5.4",
    title: "Zatvorenie stránky počas relácie",
    paragraphs: [
      "Zatvorenie stránky, opätovné načítanie prehliadača alebo strata spojenia môžu ovplyvniť zobrazenie a zachovanie aktuálneho stavu. Dôsledky určuje skutočná konštrukcia programu a nepredpokladajú povinné obnovenie nedokončeného intervalu.",
      "Ak Používateľ po návrate nevidí predchádzajúcu reláciu, táto okolnosť sama osebe nedokazuje, že relácia pred zatvorením stránky nezačala. Zároveň však nepotvrdzuje jej úspešné dokončenie.",
    ],
  },
  {
    id: "3.5.5",
    title: "Prerušenie bez úmyslu Používateľa",
    paragraphs: [
      "Reláciu môžu prerušiť technické okolnosti nezávislé od úmyslu Používateľa vrátane zlyhania prehliadača alebo výpadku napájania zariadenia. Takúto udalosť treba odlišovať od dobrovoľného odmietnutia pokračovať v interakcii.",
      "Spoločnosť posudzuje technické dôsledky prerušenia podľa dostupných údajov. Nedostatok potvrdzujúcich údajov sa nesmie automaticky nahrádzať domnienkou o zavinenom správaní Používateľa.",
    ],
  },
  {
    id: "3.6.1",
    title: "Riadne ukončenie intervalu",
    paragraphs: [
      "Za riadne ukončenie sa považuje dosiahnutie stanovenej koncovej hranice trojminútového odpočítavania v súlade so softvérovou logikou. Rozhranie môže tento okamih označiť zmenou stavu, oznámením alebo iným vizuálnym signálom.",
      "Ukončenie intervalu potvrdzuje skončenie predpokladanej postupnosti, ale nepreukazuje dosiahnutie konkrétneho intelektuálneho výsledku. Používateľ je oprávnený posúdiť výsledok samostatne.",
    ],
  },
  {
    id: "3.6.2",
    title: "Oznámenie o ukončení",
    paragraphs: [
      "Oznámenie o skončení relácie slúži na informovanie Používateľa o technickej udalosti. Forma oznámenia sa môže líšiť podľa verzie rozhrania a používaného zariadenia.",
      "Ak si Používateľ oznámenie nevšimol, neznamená to automatické pokračovanie uplynutého intervalu. Okamih ukončenia určuje stav programu, nie okamih prečítania oznámenia.",
    ],
  },
  {
    id: "3.6.3",
    title: "Úkony po ukončení",
    paragraphs: [
      "Po ukončení môže Používateľ zatvoriť rozhranie, pokračovať vo vlastnej činnosti alebo iniciovať novú reláciu, ak je takáto možnosť dostupná. Žiadny z týchto úkonov sa nepovažuje za povinné pokračovanie už ukončeného intervalu.",
      "Ponechanie stránky otvorenej po ukončení neznamená nepretržité používanie aktívneho režimu. Dĺžka následného zotrvania na stránke sa automaticky nepripočítava k ukončenej relácii.",
    ],
  },
  {
    id: "3.6.4",
    title: "Opätovné spustenie",
    paragraphs: [
      "Nová relácia vzniká po samostatnom predpokladanom úkone spustenia, ak rozhranie umožňuje opakovanú aktiváciu. Predchádzajúci ukončený interval sa nepovažuje za nedokončený iba preto, že sa Používateľ rozhodol začať ďalší.",
      "Po sebe nasledujúce relácie možno vnímať ako jednotnú osobnú prax, technicky však zostávajú samostatnými intervalmi. Takéto vnímanie nemení spôsob ich evidencie, ak sa evidencia vykonáva.",
    ],
  },
  {
    id: "3.6.5",
    title: "Neexistencia povinného hlásenia",
    paragraphs: [
      "Ak rozhranie nepredpokladá osobitný spôsob podávania správ, Používateľ nie je povinný po každej relácii opisovať svoje myšlienky, vymenúvať rozptýlenia ani potvrdzovať vlastnú produktivitu. Ukončenie časovača nezávisí od vypracovania písomného záveru.",
      "Dobrovoľné zhodnotenie výsledkov zostáva osobným úkonom Používateľa. Spoločnosť nepovažuje neprítomnosť správy za dôkaz neužitočnosti relácie.",
    ],
  },
  {
    id: "3.7.1",
    title: "Opakovateľnosť relácií sústredenia",
    paragraphs: [
      "Používateľ je oprávnený uskutočniť viacero relácií v rámci dostupnosti rozhrania. Každé nové spustenie sa posudzuje s ohľadom na vlastný okamih začiatku a ukončenia.",
      "Samotný počet relácií nevypovedá o kvalite pozornosti. Viacero krátkych intervalov automaticky nevytvára jednu nepretržitú reláciu dlhšieho trvania.",
    ],
  },
  {
    id: "3.7.2",
    title: "Intervaly medzi reláciami",
    paragraphs: [
      "Čas medzi ukončením jednej relácie a začiatkom nasledujúcej nepatrí do aktívneho času ani jednej z nich. Používateľ môže počas tohto obdobia odpočívať, venovať sa iným činnostiam alebo naďalej udržiavať pozornosť na pôvodnom objekte.",
      "Nečinnosť medzi reláciami nevytvára osobitný režim Zariadenia. Osobná nepretržitosť sústredenia nevyžaduje nepretržitosť softvérového odpočítavania.",
    ],
  },
  {
    id: "3.7.3",
    title: "Podmienený kumulovaný výsledok",
    paragraphs: [
      "Ak rozhranie zobrazuje počet uskutočnených relácií alebo iné súhrnné ukazovatele, charakterizujú zaznamenané softvérové udalosti v rozsahu dostupných údajov. Takéto ukazovatele nie sú priamym meraním získaného sústredenia.",
      "Sčítanie trvania intervalov je prípustné ako aritmetická operácia, ale nepotvrdzuje zodpovedajúci rast schopnosti udržiavať pozornosť. Používateľ nie je povinný pripisovať výslednému číslu psychologický význam.",
    ],
  },
  {
    id: "3.7.4",
    title: "Porovnateľnosť rôznych relácií",
    paragraphs: [
      "Relácie sa môžu líšiť vonkajšími podmienkami, zvolenou úlohou a subjektívnymi pocitmi Používateľa. Rovnaké trvanie neznamená rovnakú náročnosť ani rovnakú užitočnosť.",
      "Porovnávanie viacerých relácií je prípustné na osobné účely, jeho výsledky však nevytvárajú univerzálny rebríček používateľov ani nepotvrdzujú nadradenosť jednej osoby nad druhou.",
    ],
  },
  {
    id: "3.8.1",
    title: "Relácia bez stanoveného cieľa",
    paragraphs: [
      "Používateľ môže iniciovať reláciu bez toho, aby si vopred sformuloval konkrétnu úlohu. Neprítomnosť sformulovaného cieľa nebráni fungovaniu časovača, ak rozhranie nevyžaduje jeho povinné uvedenie.",
      "Takáto relácia sa nepovažuje za technicky neuskutočnenú iba z dôvodu neurčitosti úmyslov. Posúdenie jej osobnej užitočnosti zostáva na Používateľovi.",
    ],
  },
  {
    id: "3.8.2",
    title: "Relácia sprevádzaná pochybnosťami",
    paragraphs: [
      "Pochybnosti o potrebe relácie, jej účinnosti alebo správnosti zvoleného okamihu nerušia technický význam vykonanej aktivácie. Používateľ je oprávnený počas fungovania rozhrania prehodnocovať vlastné očakávania.",
      "Spoločnosť nepovažuje vnútorný nesúhlas Používateľa s predpokladaným prínosom relácie za príkaz na zrušenie. Zmena stavu programu vyžaduje predpokladaný úkon alebo nastanie príslušnej technickej udalosti.",
    ],
  },
  {
    id: "3.8.3",
    title: "Relácia bez subjektívne badateľného účinku",
    paragraphs: [
      "Po ukončení relácie Používateľ nemusí spozorovať zmeny pozornosti, nálady ani výsledkov svojej činnosti. Neprítomnosť badateľného účinku nie je totožná s neprítomnosťou samotného softvérového intervalu.",
      "Spoločnosť nezaručuje vznik určitého zážitku po skončení odpočítavania. Používateľ je oprávnený považovať reláciu za osobne neužitočnú bez potreby popierať jej technické uskutočnenie.",
    ],
  },
  {
    id: "3.8.4",
    title: "Záverečné rozlíšenie postupu a výsledku",
    paragraphs: [
      "Na účely tejto časti patria aktivácia, priebeh a ukončenie relácie k postupu stanovenému rozhraním, zatiaľ čo sústredenie a osobná užitočnosť patria medzi okolnosti posudzované samostatne. Tieto kategórie sa nesmú navzájom zamieňať.",
      "Ukončená relácia potvrdzuje vykonanie stanovenej časovej postupnosti v rozsahu dostupných technických údajov. Neosvedčuje úspešnosť myšlienky, neprítomnosť rozptýlení ani dosiahnutie cieľa, ktorý Používateľ možno ani nesformuloval.",
    ],
  },
] satisfies AgreementSection;
