import type { AgreementSection } from "../../types";

export const section04 = [
  {
    id: "4.1.1",
    title: "Allmänna krav på förberedelser",
    paragraphs: [
      "Innan en session påbörjas ska Användaren säkerställa förhållanden som möjliggör interaktion med ”Enheten”.",
      "Förberedelserna anses genomförda inom ramen för de möjligheter som faktiskt står till Användarens förfogande. Att det inte går att skapa idealiska förhållanden utesluter inte att sessionen påbörjas, men kan beaktas vid den efterföljande bedömningen av omständigheterna kring den.",
    ],
  },
  {
    id: "4.1.2",
    title: "Kontroll av gränssnittets beredskap",
    paragraphs: [
      "Användaren är skyldig att försäkra sig om att de huvudsakliga reglagen är tillgängliga och visas korrekt.",
      "Kontrollen utförs genom en vanlig visuell granskning av gränssnittet. Användaren behöver inte bekräfta det interna tillståndet hos programvarukomponenter som denne inte har åtkomst till; avsaknaden av synliga fel garanterar inte att dolda fel saknas.",
    ],
  },
  {
    id: "4.1.3",
    title: "Fastställande av koncentrationens mål",
    paragraphs: [
      "Före aktiveringen rekommenderas Användaren att fastställa den uppgift som uppmärksamheten ska riktas mot.",
      "Målet får formuleras mentalt och behöver inte anges i gränssnittet. Ett oklart mål är tillåtet men befriar inte från behovet att avgöra om det fanns en avsikt att fastställa det.",
    ],
  },
  {
    id: "4.1.4",
    title: "Förhandsbedömning av distraktionsfaktorer",
    paragraphs: [
      "Användaren ska i möjligaste mån identifiera omständigheter som kan försvåra koncentrationen.",
      "Sådana omständigheter kan omfatta ljud utifrån, meddelanden, andra uppgifter och Användarens egna tankar. Att inga distraktionsfaktorer har identifierats bekräftar inte att de inte kommer att uppstå efter aktiveringen.",
    ],
  },
  {
    id: "4.1.5",
    title: "Bekräftelse av beredskap för förberedelser",
    paragraphs: [
      "Genom att inleda förberedelserna bekräftar Användaren en tillräcklig grad av beredskap för att utföra de förberedande åtgärderna.",
      "Att de förberedande åtgärderna påbörjas anses utgöra en preliminär bekräftelse av beredskapen för dem. Om Användaren påbörjar förberedelserna enbart för att pröva sin egen beredskap, betraktas denna prövning som en del av förberedelserna.",
    ],
  },
  {
    id: "4.2.1",
    title: "Villkor för tillåtelse att aktivera",
    paragraphs: [
      "Aktivering är tillåten när nödvändiga åtkomstvillkor har uppfyllts och Avtalet har godkänts.",
      "Tillåtelse att aktivera förutsätter inget separat godkännande från Bolaget om gränssnittet ger tillgång till startknappen. Den tekniska möjligheten att trycka på knappen ersätter inte samtycke till Avtalet när sådant samtycke krävs enligt åtkomstvillkoren.",
    ],
  },
  {
    id: "4.2.2",
    title: "Knapptryckningens rättsliga betydelse",
    paragraphs: [
      "En knapptryckning betraktas som en handling med rättslig betydelse enligt punkt 1.5.3.",
      "Aktivering av ”Enheten” betraktas som en självständig handling av Användaren efter den rättsliga tidpunkt för godkännande av Avtalet som anges i punkt 1.5.3. En upprepad knapptryckning anses inte innebära att Avtalet ingås på nytt.",
    ],
  },
  {
    id: "4.2.3",
    title: "Bekräftelse av avsikten att aktivera ”Enheten”",
    paragraphs: [
      "Det faktum att aktivering har skett anses vara tillräcklig bekräftelse på avsikten att inleda en koncentrationssession.",
      "För att aktiveringen ska erkännas krävs ingen separat muntlig eller skriftlig avsiktsförklaring. Ett senare förnekande av avsikten upphäver inte en tekniskt registrerad start, men kan beaktas vid bedömningen av omständigheterna kring aktiveringen.",
    ],
  },
  {
    id: "4.2.4",
    title: "Aktivering utan avsikt",
    paragraphs: [
      "Oavsiktlig aktivering medför de föreskrivna följderna fram till dess att den avslutas.",
      "En oavsiktlig beröring, ett felaktigt val av reglage eller någon annan oavsiktlig handling gör inte en påbörjad session till en session som aldrig har påbörjats. Oavsiktligheten betraktas dock inte som bevis för ett medvetet åsidosättande av skyldigheten att koncentrera sig.",
    ],
  },
  {
    id: "4.2.5",
    title: "Registrering av sessionens starttidpunkt",
    paragraphs: [
      "Sessionen anses börja när ”Enheten” övergår till aktivt tillstånd, oavsett Användarens subjektiva uppfattning.",
      "Starttidpunkten är den tidpunkt då gränssnittet registrerar övergången till aktivt tillstånd, inte den tidpunkt då Användaren får känslan av att sessionen har börjat. Om dessa tidpunkter skiljer sig åt har den tekniskt fastställda händelsen företräde vid tidtagningen.",
    ],
  },
  {
    id: "4.3.1",
    title: "Allmän ordning för upprepad interaktion",
    paragraphs: [
      "En upprepad knapptryckning i aktivt tillstånd betraktas som en begäran om att avsluta den pågående sessionen.",
      "Om en aktiv session avslutas genom att samma knapp trycks ned, betraktas tryckningen som ett stoppkommando. En handling som utförs efter sessionens slut bedöms utifrån gränssnittets faktiska tillstånd när handlingen registrerades.",
    ],
  },
  {
    id: "4.3.2",
    title: "Rätt att avsluta i förtid",
    paragraphs: [
      "Användaren har rätt att avsluta sessionen innan den fastställda tiden har löpt ut.",
      "Ett förtida avslut är ett tillåtet sätt att styra sessionen och utgör inte i sig någon överträdelse. Skälen till och frekvensen av sådana avslut kan bedömas separat vid prövningen av ett lojalt utövande av rättigheter enligt avsnitt III.",
    ],
  },
  {
    id: "4.3.3",
    title: "Upprepad knapptryckning utan ändrad avsikt",
    paragraphs: [
      "En knapptryckning kan få rättsliga följder oavsett om Användaren avsåg att ändra ”Enhetens” tillstånd.",
      "Den rättsliga betydelsen av en registrerad knapptryckning bestäms av dess resultat i gränssnittet och inte enbart av Användarens inre avsikt. Om tillståndet inte ändrades anses en förmodad avsikt att ändra det inte vara en slutförd åtgärd.",
    ],
  },
  {
    id: "4.3.4",
    title: "Följder av upprepade knapptryckningar",
    paragraphs: [
      "På varandra följande knapptryckningar betraktas som självständiga handlingar om gränssnittet har hunnit registrera motsvarande tillståndsändring.",
      "Flera snabba knapptryckningar medför inte automatiskt lika många separata sessioner. Endast övergångar mellan tillstånd som faktiskt har behandlats av gränssnittet beaktas; obekräftade övergångar förblir hypotetiska.",
    ],
  },
  {
    id: "4.3.5",
    title: "Presumtion om medvetenhet vid upprepad handling",
    paragraphs: [
      "Användaren anses vara medveten om följderna av en upprepad knapptryckning även om den utförs av vana.",
      "Presumtionen om medvetenhet gäller erkännandet av handlingens följder men bevisar inte att Användaren faktiskt känner till varje teknisk process. En vanemässig knapptryckning kan anses medveten i procedurens mening även utan medveten eftertanke kring den.",
    ],
  },
  {
    id: "4.4.1",
    title: "Sessionens föreskrivna längd",
    paragraphs: [
      "En koncentrationssession varar normalt 180 sekunder.",
      "Den fastställda längden är tre minuter och avser gränssnittets driftläge. Den avgör inte hur länge faktisk koncentration måste pågå och fastställer ingen minimitid för att uppnå ett resultat.",
    ],
  },
  {
    id: "4.4.2",
    title: "Regler för tidsberäkning",
    paragraphs: [
      "Tiden beräknas med hjälp av ”Enheten”, med beaktande av bestämmelserna om tidsanomalier i punkt 11.4.1.",
      "Tidsberäkningen utförs med hjälp av ”Enheten” enligt förfarandet för bedömning av tidsanomalier i punkt 11.4.1. Skillnaden mellan visad tid och den subjektiva upplevelsen av tidens gång bekräftar inte i sig att en anomali föreligger.",
    ],
  },
  {
    id: "4.4.3",
    title: "Sessionens tidsmässiga kontinuitet",
    paragraphs: [
      "Tiden fortsätter att räknas enligt timerns logik oavsett hur snabbt den subjektivt upplevs gå.",
      "Sessionens förlopp bestäms av tidtagningens tillstånd, inte av att Användaren oavbrutet tittar på skärmen. Att rikta uppmärksamheten mot själva timern pausar inte tiden och skapar ingen ytterligare period som ska dras av.",
    ],
  },
  {
    id: "4.4.4",
    title: "Mellantidsmarkeringarnas rättsliga status",
    paragraphs: [
      "De tidsvärden som visas betraktas som information om sessionens förlopp.",
      "Mellantidsmarkeringar återger den fastställda tidtagningens tillstånd och är inte resultat av mätningar av uppmärksamhet. Inte ens exakt kunskap om återstående tid innebär att Användaren korrekt har bedömt graden av sin egen koncentration.",
    ],
  },
  {
    id: "4.4.5",
    title: "Följder när den fastställda tiden löper ut",
    paragraphs: [
      "När nedräkningen är avslutad övergår ”Enheten” till det föreskrivna sluttillståndet, vilket i sig inte bekräftar någon faktisk förbättring av koncentrationen.",
      "När den föreskrivna tidsperioden löper ut avslutas sessionen enligt gränssnittets fastställda logik. Avslutet bekräftar att tidtagningsförfarandet har slutförts men utgör inget självständigt bevis för att Användaren framgångsrikt har utfört sin valda uppgift.",
    ],
  },
  {
    id: "4.5.1",
    title: "Grunder för att avsluta en session",
    paragraphs: [
      "En session avslutas på Användarens initiativ, när tiden löper ut eller till följd av tekniska omständigheter.",
      "Grunden för avslutet fastställs utifrån tillgängliga tecken, däribland Användarens kommando, avslutad nedräkning eller teknisk otillgänglighet. Om orsaken inte kan fastställas får avslutet klassificeras som outrett utan att det därför betraktas som godtyckligt.",
    ],
  },
  {
    id: "4.5.2",
    title: "Förtida avslut på Användarens initiativ",
    paragraphs: [
      "Användaren har rätt att stoppa ”Enheten” utan att behöva förklara varför.",
      "Användaren behöver inte ge Bolaget en förklaring till varje förtida avslut. Avsaknaden av förklaring får inte ersättas med en påhittad orsak, även om själva det förtida stoppet får beaktas inom ramen för föreskrivna bedömningsförfaranden.",
    ],
  },
  {
    id: "4.5.3",
    title: "Skillnaden mellan stopp och paus",
    paragraphs: [
      "Att det aktiva tillståndet upphör innebär inte att ett separat pausläge existerar.",
      "Om gränssnittet saknar pausfunktion ger ett stopp ingen rätt att återuppta den tidigare nedräkningen från den sparade tidpunkten. En mental avsikt att tillfälligt avbryta sessionen skapar inget tekniskt pausläge.",
    ],
  },
  {
    id: "4.5.4",
    title: "Bestående följder efter stopp",
    paragraphs: [
      "Att gränssnittets drift upphör upphäver inte följder av tidigare användning.",
      "Följderna av handlingar som redan har inträtt inom ramen för Avtalet består. Detta innebär inte att ”Enheten” fortsätter att fungera tekniskt efter stoppet eller att nya händelser uppstår utan föreskriven grund.",
    ],
  },
  {
    id: "4.5.5",
    title: "Ny start efter avslut",
    paragraphs: [
      "En ny start betraktas som en självständig session om gränssnittet inte medger att den föregående fortsätts.",
      "En ny aktivering efter stopp inleder en ny nedräkning om gränssnittet inte föreskriver något annat. Att koncentrationsmålet är detsamma som tidigare förenar inte automatiskt två separata sessioner till en sammanhängande session.",
    ],
  },
  {
    id: "4.6.1",
    title: "Allmän definition av distraktion",
    paragraphs: [
      "Med distraktion avses att uppmärksamhetens inriktning förändras i förhållande till den pågående sessionens mål.",
      "En distraktion kan vara kortvarig, oavsiktlig eller orsakad av omständigheter utanför Användarens kontroll. Dess förekomst kan inte fastställas enbart utifrån att inga handlingar utförs i gränssnittet, eftersom koncentration kan ske utan knapptryckningar.",
    ],
  },
  {
    id: "4.6.2",
    title: "Kriterier för tillåtna distraktioner",
    paragraphs: [
      "Huruvida en distraktion är tillåten avgörs med beaktande av den rättsligt erkända koncentration som fastställs i punkt 1.3.2.",
      "Vid bedömningen beaktas definitionen av rättsligt erkänd koncentration i punkt 1.3.2. Att uppmärksamheten flyttas innebär inte alltid att koncentrationen upphör, om föremålet för den nya uppmärksamheten är förenligt med de tillämpliga kriterierna.",
    ],
  },
  {
    id: "4.6.3",
    title: "Undantag från skyldigheten till oavbruten koncentration",
    paragraphs: [
      "Tillåtna undantag omfattar objektivt nödvändiga handlingar, förebyggande av fara och omständigheter som uttryckligen anges i Avtalet.",
      "Undantag från skyldigheten att upprätthålla koncentration enligt punkt 3.2.2 omfattar handlingar som krävs för att förebygga fara, tillgodose brådskande behov och reagera på objektivt betydelsefulla omständigheter. Bolaget får inte kräva att sessionen fortsätter på bekostnad av Användarens eller andra personers säkerhet.",
    ],
  },
  {
    id: "4.6.4",
    title: "Otillåtna distraktioner",
    paragraphs: [
      "Att avsiktligt flytta uppmärksamheten till en ovidkommande aktivitet kan betraktas som ett brott mot användningsreglerna.",
      "Att medvetet flytta uppmärksamheten till en orelaterad aktivitet får beaktas som en överträdelse av reglerna för sessionens genomförande om det finns tillräcklig grund. Att en ovidkommande tanke uppstår bevisar inte i sig en avsiktlig distraktion och kräver inget separat erkännande av skuld.",
    ],
  },
  {
    id: "4.6.5",
    title: "Distraktion genom meddelanden från ”Enheten”",
    paragraphs: [
      "Att ta del av meddelanden från Concentrator™ Online befriar inte Användaren från skyldigheten att behålla koncentrationen.",
      "Meddelanden som visas av Concentrator™ Online självt kan kräva Användarens uppmärksamhet, men att de kommer från ”Enheten” medför inget automatiskt undantag från koncentrationsskyldigheten. Behovet av att läsa ett meddelande bedöms separat från skyldigheten att inte låta sig distraheras av det.",
    ],
  },
  {
    id: "4.7.1",
    title: "Väntelägets rättsliga status",
    paragraphs: [
      "Vänteläget betraktas som ett självständigt tillstånd hos ”Enheten” och utgör ingen koncentrationssession.",
      "Vänteläget omfattar gränssnittets tillstånd före sessionens början och efter dess avslut, när ingen aktiv nedräkning pågår. Dess förekomst bekräftar varken att koncentration har påbörjats eller att den har övergetts.",
    ],
  },
  {
    id: "4.7.2",
    title: "Tillåtna åtgärder före aktivering",
    paragraphs: [
      "Användaren har rätt att utföra förberedande åtgärder utan att starta nedräkningen.",
      "Användaren får välja en uppgift, kontrollera reglagen och undanröja distraherande omständigheter utan att starta timern. Sådana åtgärder kan betraktas som förberedande även om förberedelserna inte leder till någon senare aktivering.",
    ],
  },
  {
    id: "4.7.3",
    title: "Skyldighet att bibehålla potentiell beredskap",
    paragraphs: [
      "Användaren rekommenderas att upprätthålla förhållanden som gör en senare aktivering möjlig.",
      "Rekommendationen att bibehålla beredskap skapar ingen skyldighet att ständigt befinna sig vid skärmen. Om Användaren förlorar sin beredskap medan den upprätthålls innebär detta inte automatiskt en överträdelse av väntelägets regler.",
    ],
  },
  {
    id: "4.7.4",
    title: "Passivitet i vänteläge",
    paragraphs: [
      "Avsaknad av handlingar betraktas inte i sig som användning av ”Enheten”, om inte särskilda bestämmelser föreskriver annat.",
      "Avsaknad av interaktion i vänteläge är inte detsamma som en aktiv session och ger inte upphov till någon registrerbar koncentrationstid. Den får dock betraktas som en separat omständighet om särskilda bestämmelser reglerar passivitet.",
    ],
  },
  {
    id: "4.8.1",
    title: "Användning utan direkt observation",
    paragraphs: [
      "Användaren kan fortsätta en session utan att titta på gränssnittet, förutsatt att ”Enhetens” drift tekniskt upprätthålls.",
      "Om sessionens tekniska tillstånd består avbryts inte nedräkningen av att Användaren saknar visuell kontakt med gränssnittet. Att skärmen inte kan observeras bekräftar varken förekomst eller frånvaro av koncentration under den aktuella perioden.",
    ],
  },
  {
    id: "4.8.2",
    title: "Användning av ”Enheten” utan uppnådd koncentration",
    paragraphs: [
      "Avsaknad av koncentration innebär inte automatiskt att användning inte har ägt rum.",
      "Faktisk användning fastställs utifrån interaktionen med gränssnittet och sessionens tillstånd, inte enbart utifrån den uppnådda effekten. Ett misslyckat försök att koncentrera sig kan fortfarande utgöra ett fullvärdigt användningstillfälle för ”Enheten”.",
    ],
  },
  {
    id: "4.8.3",
    title: "Koncentration utan användning av ”Enheten”",
    paragraphs: [
      "Användarens självständiga koncentration räknas inte som en session i Concentrator™ Online.",
      "Koncentration som uppnås utan att Concentrator™ Online aktiveras skapar ingen teknisk sessionshändelse. Resultatet kan ha ett självständigt värde för Användaren men förs inte automatiskt in i statistiken över genomförda sessioner.",
    ],
  },
  {
    id: "4.8.4",
    title: "Samtidig användning av flera instanser",
    paragraphs: [
      "Vid interaktion med flera instanser av gränssnittet kan varje session registreras separat.",
      "Att flera flikar eller fönster är öppna innebär inte nödvändigtvis att flera sessioner genomförs: det faktiska tillståndet hos varje instans av gränssnittet beaktas. Bolaget är inte skyldigt att summera deras längd utan en föreskriven metod.",
    ],
  },
  {
    id: "4.8.5",
    title: "Omöjlighet att fastställa faktisk användning",
    paragraphs: [
      "Om uppgifterna är otillräckliga får Bolaget klassificera en händelse som förmodad användning utan att betrakta den som bevisad.",
      "Om tillgängliga uppgifter varken gör det möjligt att bekräfta en start eller att fastställa att ingen start skett, får händelsen ges status som förmodad användning. Klassificeringen syftar till att ange osäkerhet och ersätter inte bevis för faktisk användning.",
    ],
  },
] satisfies AgreementSection;
