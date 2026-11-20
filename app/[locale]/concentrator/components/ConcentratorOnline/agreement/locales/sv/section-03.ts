import type { AgreementSection } from "../../types";

export const section03 = [
  {
    id: "3.1.1",
    title: "Begreppet aktivering",
    paragraphs: [
      "Med aktivering av Enheten avses en åtgärd som Användaren utför via gränssnittet i syfte att inleda en koncentrationssession. Enligt Avtalet innebär aktivering att ett kommando skickas till en programvarumekanism, inte att en fristående fysisk apparat sätts i rörelse.",
      "En avsikt att inleda en session utan att utföra motsvarande åtgärd räknas inte som teknisk aktivering. En sådan avsikt kan dock föregå aktiveringen och kräver ingen separat bekräftelse från Bolaget.",
    ],
  },
  {
    id: "3.1.2",
    title: "Villkor för att aktivering ska vara tillgänglig",
    paragraphs: [
      "Möjligheten att aktivera beror på gränssnittets faktiska tillgänglighet, programvarukomponenternas tillstånd och att nödvändiga förberedande åtgärder har utförts. Att en knapp syns innebär inte i sig någon garanti för att sessionen kan startas.",
      "Om kommandot inte har behandlats får Användaren upprepa åtgärden efter att ha kontrollerat sidans tillstånd. Ett misslyckat försök medför ingen skyldighet att låtsas att sessionen har börjat.",
    ],
  },
  {
    id: "3.1.3",
    title: "Startkommandots engångskaraktär",
    paragraphs: [
      "En korrekt utförd startåtgärd utgör ett försök att inleda en session. Ytterligare knapptryckningar innan gränssnittet har svarat bedöms med hänsyn till programvarumekanismens faktiska beteende.",
      "Bolaget är inte skyldigt att betrakta varje ytterligare knapptryckning som en separat session om gränssnittet inte ger ett sådant resultat. Antalet knapptryckningar och antalet genomförda sessioner kan skilja sig åt.",
    ],
  },
  {
    id: "3.1.4",
    title: "Tidpunkten då nedräkningen börjar",
    paragraphs: [
      "Nedräkningen anses börja när gränssnittet försätter sessionen i aktivt läge och börjar räkna det föreskrivna tidsintervallet. Tid för föregående väntan, sidladdning eller letande efter knappen ingår inte i sessionens längd.",
      "Om visningen av starten är fördröjd är det uppgifterna i själva gränssnittet som är avgörande. Användarens subjektiva upplevelse av att starten skedde tidigare ändrar inte automatiskt den tidpunkt som programmet har fastställt.",
    ],
  },
  {
    id: "3.1.5",
    title: "Aktivering utan säkerhet om resultatet",
    paragraphs: [
      "Användaren får inleda en session utan att vara säker på att uppnå koncentration. Samtycke till starten innebär samtycke till att genomföra den föreskrivna åtgärdsföljden, inte en bekräftelse på en framtida förbättring av uppmärksamheten.",
      "Bristande säkerhet, tvivel på Enhetens nytta eller en skeptisk inställning till dess namn hindrar inte aktivering. Sådana omständigheter behöver inte motbevisas i förväg.",
    ],
  },
  {
    id: "3.2.1",
    title: "Allmänt förfarande för genomförande av en session",
    paragraphs: [
      "En session består av en början, ett föreskrivet tidsintervall och ett avslut, vilka visas genom gränssnittet. Förloppet är programvarubaserat och kräver ingen extern observatör som intygar varje steg.",
      "Användaren kan utföra egna handlingar under sessionen eller förbli stilla. Förekomsten eller avsaknaden av sådana handlingar ändrar inte automatiskt följden av tekniska tillstånd.",
    ],
  },
  {
    id: "3.2.2",
    title: "Förhållandet mellan sessionen och Användarens handlingar",
    paragraphs: [
      "Den tekniska sessionen och Användarens faktiska verksamhet utgör skilda omständigheter. Att starta timern bevisar inte att Användaren har hållit uppmärksamheten riktad mot ett visst objekt under hela intervallet.",
      "Vid bedömningen av Användarens beteende under sessionen tillämpas även bestämmelserna i punkt 4.6.3. Hänvisningen utvidgar inte gränssnittets möjligheter och gör inte betraktandet av timern till en obligatorisk form av koncentration.",
    ],
  },
  {
    id: "3.2.3",
    title: "Det föreskrivna intervallets längd",
    paragraphs: [
      "Den fastställda längden för en koncentrationssession i gränssnittet är tre minuter. Denna tid avser programmets driftläge och är ingen allmän rekommendation om hur länge mentalt arbete bör pågå.",
      "Användaren får fortsätta sin egen verksamhet efter att intervallet har löpt ut. En sådan fortsättning innebär inte att den avslutade sessionen automatiskt förlängs.",
    ],
  },
  {
    id: "3.2.4",
    title: "Kontinuitet i det visade förloppet",
    paragraphs: [
      "Vid normal drift visar gränssnittet sessionens förlopp som en sammanhängande process. Förändringar i siffror, grafik eller animationer används för att återge programmets tillstånd.",
      "Att den visuella återgivningen är kontinuerlig bevisar inte att Användarens tankeverksamhet är det. En kort distraktion kan förbli oupptäckt av gränssnittet och registreras inte automatiskt tekniskt.",
    ],
  },
  {
    id: "3.2.5",
    title: "Ingen skyldighet att utföra yttre handlingar",
    paragraphs: [
      "Under sessionen är Användaren inte skyldig att utföra ytterligare fysiska handlingar, om dessa inte uttryckligen föreskrivs i gränssnittet. Att observera, läsa, tänka och vara passiv kan alla förekomma under samma programläge.",
      "Bolaget utgår inte från att stillhet är liktydigt med koncentration. Inte heller betraktas Användarens rörelser som ett ovillkorligt bevis på bristande uppmärksamhet.",
    ],
  },
  {
    id: "3.3.1",
    title: "Visning av tid i gränssnittet",
    paragraphs: [
      "Återstående eller förfluten tid kan visas med siffror, grafiska element och andra visuella hjälpmedel. Syftet är att hjälpa Användaren att orientera sig under sessionen.",
      "Det visade värdet är ingen självständig mätning av ett psykiskt tillstånd. Tidsuppgifter får inte tolkas som uppgifter om mängden ackumulerad koncentration.",
    ],
  },
  {
    id: "3.3.2",
    title: "Skillnaden mellan tid och subjektiv upplevelse",
    paragraphs: [
      "Ett intervall på tre minuter kan upplevas som kort, långt eller obestämt. Den subjektiva uppfattningen om hur snabbt tiden går påverkar inte programlägets fastställda längd.",
      "Om Användaren upplever att tiden har stannat eller gått snabbare än väntat räknas denna upplevelse inte som ett tekniskt fel utan ytterligare objektiva tecken.",
    ],
  },
  {
    id: "3.3.3",
    title: "Animationens betydelse under sessionen",
    paragraphs: [
      "Animationer och förändringar av gränssnittselementens form, färg eller placering kan förekomma under en aktiv session. De fyller informativa och konstnärliga funktioner inom Enhetens programvarubaserade återgivning.",
      "Att en bild rör sig innebär inte att något fysiskt föremål förflyttas. Avsaknad av märkbar animation visar inte heller att sessionen har avbrutits om andra föreskrivna tecken visar att den fortsätter.",
    ],
  },
  {
    id: "3.3.4",
    title: "Informationsmeddelanden",
    paragraphs: [
      "Under sessionen kan gränssnittet visa meddelanden om aktuellt tillstånd, förväntat avslut eller tillgängliga åtgärder. Meddelandenas innehåll bestäms av programmets aktuella utförande.",
      "Ett meddelande av informativ karaktär utgör inte en individuell bedömning av Användaren, om detta inte uttryckligen anges. Användaren är inte skyldig att uppfatta varje formulering i gränssnittet som ett omdöme om sin egen förmåga.",
    ],
  },
  {
    id: "3.3.5",
    title: "Gränser för de visuella indikatorernas precision",
    paragraphs: [
      "Visuella tillståndsindikatorer kan påverkas av skärmens uppdateringsfrekvens, Användarens enhets prestanda och andra tekniska omständigheter. Deras syfte är att åskådliggöra förloppet på ett tillgängligt sätt, inte att metrologiskt intyga varje ögonblick.",
      "Vid avvikelser mellan animationen och programmets faktiska tillstånd har det korrekt fastställda sessionstillståndet företräde. Gränssnittets utseende skapar inte en separat tid som skiljer sig från programmets körtid.",
    ],
  },
  {
    id: "3.4.1",
    title: "Möjligheten att bli distraherad",
    paragraphs: [
      "Med distraktion avses att Användarens uppmärksamhet tillfälligt flyttas från det valda objektet till ett annat objekt, en händelse eller en tanke. Distraktion kan uppstå oberoende av Enhetens tillstånd och utan att den visade timern förändras.",
      "En distraktion upphäver inte en aktivering som redan har skett. Frågan om koncentrationens kvalitet får inte ersätta frågan om sessionens tekniska avslut.",
    ],
  },
  {
    id: "3.4.2",
    title: "Återgång till det valda objektet",
    paragraphs: [
      "Efter en distraktion får Användaren på egen hand åter rikta uppmärksamheten mot det valda objektet inom det pågående intervallet. En sådan återgång kräver inte att Avtalet godkänns på nytt.",
      "Om Användaren inte märkte när distraktionen började hindrar avsaknaden av en exakt starttid inte fortsatt användning av gränssnittet. Bolaget är inte skyldigt att fastställa en distraktionslängd som är okänd för Användaren.",
    ],
  },
  {
    id: "3.4.3",
    title: "Yttre störningsmoment",
    paragraphs: [
      "Ljud, aviseringar, andra personers rörelser och andra yttre omständigheter kan påverka upplevelsen av sessionen. Sådana störningar innebär inte att programmets förlopp har ändrats.",
      "Användaren avgör själv om störningen ska undanröjas, ignoreras eller leda till att den egna verksamheten avbryts. Gränssnittet garanterar inte en yttre miljö fri från störningar.",
    ],
  },
  {
    id: "3.4.4",
    title: "Parallella aktiviteter",
    paragraphs: [
      "Användaren kan under sessionen samtidigt utföra handlingar som inte har direkt samband med gränssnittet. Deras förenlighet med det personliga koncentrationsmålet avgörs av Användaren med hänsyn till aktivitetens art.",
      "Flera öppna flikar, applikationer eller uppmärksamhetsobjekt utgör inte automatiskt bevis för brott mot sessionens tekniska villkor. Bolaget bedriver ingen heltäckande övervakning av sådana aktiviteter.",
    ],
  },
  {
    id: "3.4.5",
    title: "Inga påföljder för distraktion",
    paragraphs: [
      "Om det aktuella gränssnittet saknar en särskild mekanism för att registrera distraktioner medför dessa inga självständiga tekniska böter, sanktioner eller minuspoäng. Obekräftade antaganden om distraktion får inte ersätta data från en sådan mekanism.",
      "Användaren är inte skyldig att bevisa oavbruten uppmärksamhet enbart för att timerns avslut ska erkännas. Bedömningen av effektiviteten är fortfarande en separat fråga.",
    ],
  },
  {
    id: "3.5.1",
    title: "Begreppet pausning",
    paragraphs: [
      "Med pausning avses en av programmet föreskriven tillfällig övergång från aktivt läge till vänteläge med möjlighet att senare återuppta sessionen. Om ett sådant läge saknas i gränssnittet skapar Användarens blotta önskan att stoppa tiden ingen pausning.",
      "Att växla till en annan flik eller sluta titta på skärmen är inte nödvändigtvis detsamma som att pausa. Följderna beror på hur programvarumekanismen faktiskt är utformad.",
    ],
  },
  {
    id: "3.5.2",
    title: "Återupptagande efter paus",
    paragraphs: [
      "Om gränssnittet stöder pausning återupptas sessionen genom den föreskrivna åtgärden från Användaren. Längden på det återstående intervallet bestäms av programmet med hänsyn till det sparade tillståndet.",
      "En ny start i stället för ett återupptagande kan utgöra en ny session om gränssnittet fungerar så. Användaren får inte förutsätta att handlingarna är likvärdiga utan att deras tekniska resultat har bekräftats.",
    ],
  },
  {
    id: "3.5.3",
    title: "Förtida avslut av en session",
    paragraphs: [
      "Med förtida avslut avses att en aktiv session upphör före det föreskrivna intervallets slut genom en avsedd åtgärd eller genom att möjligheten att fortsätta faktiskt går förlorad. Ett sådant avslut skiljer sig från ett normalt avslut när timern löper ut.",
      "Frågor om upphörande av åtkomst och andra följder regleras även av punkt 14.2.2. Hänvisningen innebär inte att varje stängning av en flik automatiskt avslutar alla relationer mellan Bolaget och Användaren.",
    ],
  },
  {
    id: "3.5.4",
    title: "Att stänga sidan under en session",
    paragraphs: [
      "Att stänga sidan, ladda om webbläsaren eller förlora anslutningen kan påverka visningen och bevarandet av det aktuella tillståndet. Följderna beror på programmets faktiska utformning och förutsätter inte att ett ofullbordat intervall måste återställas.",
      "Om Användaren efter återkomsten inte ser den tidigare sessionen bevisar detta inte i sig att sessionen aldrig startade innan sidan stängdes. Det bekräftar inte heller att sessionen slutfördes framgångsrikt.",
    ],
  },
  {
    id: "3.5.5",
    title: "Avbrott utan Användarens avsikt",
    paragraphs: [
      "En session kan avbrytas av tekniska omständigheter som inte beror på Användarens avsikt, däribland webbläsarfel eller strömavbrott i enheten. En sådan händelse ska skiljas från ett frivilligt beslut att sluta använda gränssnittet.",
      "Bolaget bedömer avbrottets tekniska följder utifrån tillgängliga uppgifter. Avsaknad av styrkande data får inte automatiskt ersättas med ett antagande om klandervärt beteende från Användarens sida.",
    ],
  },
  {
    id: "3.6.1",
    title: "Normalt avslut av intervallet",
    paragraphs: [
      "Ett normalt avslut inträffar när den föreskrivna slutpunkten för nedräkningen på tre minuter nås enligt programmets logik. Gränssnittet kan markera tidpunkten genom en tillståndsförändring, ett meddelande eller en annan visuell signal.",
      "Att intervallet avslutas bekräftar att den föreskrivna sekvensen har upphört, men fastställer inte att något visst intellektuellt resultat har uppnåtts. Användaren får bedöma resultatet separat.",
    ],
  },
  {
    id: "3.6.2",
    title: "Meddelande om avslut",
    paragraphs: [
      "Meddelandet om att sessionen har avslutats är avsett att informera Användaren om en teknisk händelse. Meddelandets utformning kan variera beroende på gränssnittets version och den använda enheten.",
      "Om Användaren inte märker meddelandet innebär det inte att det utgångna intervallet automatiskt fortsätter. Tidpunkten för avslut bestäms av programmets tillstånd, inte av när meddelandet läses.",
    ],
  },
  {
    id: "3.6.3",
    title: "Åtgärder efter avslut",
    paragraphs: [
      "Efter avslut får Användaren stänga gränssnittet, fortsätta sin egen verksamhet eller inleda en ny session om möjligheten finns. Ingen av dessa åtgärder räknas som en obligatorisk fortsättning på det redan avslutade intervallet.",
      "Att lämna sidan öppen efter avslut innebär inte att det aktiva läget används oavbrutet. Tiden som därefter tillbringas på sidan läggs inte automatiskt till den avslutade sessionen.",
    ],
  },
  {
    id: "3.6.4",
    title: "Ny start",
    paragraphs: [
      "En ny session uppstår efter en separat föreskriven startåtgärd om gränssnittet tillåter återaktivering. Det föregående avslutade intervallet betraktas inte som ofullbordat bara för att Användaren väljer att inleda nästa.",
      "Sessioner som följer på varandra kan uppfattas som en sammanhängande personlig övning, men förblir tekniskt sett separata intervall. Den uppfattningen ändrar inte hur de registreras, om registrering förekommer.",
    ],
  },
  {
    id: "3.6.5",
    title: "Ingen obligatorisk rapport",
    paragraphs: [
      "Om gränssnittet saknar ett särskilt rapporteringsformulär är Användaren inte skyldig att efter varje session beskriva sina tankar, räkna upp distraktioner eller bekräfta sin produktivitet. Timerns avslut är inte beroende av att en skriftlig redogörelse upprättas.",
      "En frivillig sammanfattning är fortfarande en personlig handling från Användarens sida. Bolaget betraktar inte avsaknaden av en rapport som bevis på att sessionen var meningslös.",
    ],
  },
  {
    id: "3.7.1",
    title: "Upprepning av koncentrationssessioner",
    paragraphs: [
      "Användaren får genomföra flera sessioner så länge gränssnittet är tillgängligt. Varje ny start bedöms utifrån sin egen start- och sluttidpunkt.",
      "Antalet sessioner säger i sig inget om uppmärksamhetens kvalitet. Flera korta intervall bildar inte automatiskt en enda sammanhängande session av längre varaktighet.",
    ],
  },
  {
    id: "3.7.2",
    title: "Intervall mellan sessioner",
    paragraphs: [
      "Tiden mellan slutet av en session och början av nästa ingår inte i den aktiva tiden för någon av dem. Under denna tid kan Användaren vila, ägna sig åt annat eller fortsätta att uppmärksamma samma objekt.",
      "Avsaknad av handlingar mellan sessionerna skapar inget separat läge i Enheten. Personlig kontinuitet i koncentrationen kräver inte kontinuitet i programmets nedräkning.",
    ],
  },
  {
    id: "3.7.3",
    title: "Villkorligt ackumulerat resultat",
    paragraphs: [
      "Om gränssnittet visar antalet genomförda sessioner eller andra sammanfattande värden avser de registrerade programhändelser inom ramen för tillgängliga data. Sådana värden är inte direkta mått på förvärvad koncentrationsförmåga.",
      "Det är tillåtet att summera intervallens längd som en aritmetisk operation, men detta bevisar inte en motsvarande ökning av förmågan att hålla uppmärksamheten. Användaren är inte skyldig att tillskriva slutsumman någon psykologisk betydelse.",
    ],
  },
  {
    id: "3.7.4",
    title: "Jämförbarhet mellan olika sessioner",
    paragraphs: [
      "Sessioner kan skilja sig åt vad gäller yttre förhållanden, vald uppgift och Användarens subjektiva upplevelser. Samma längd innebär inte samma svårighetsgrad eller nytta.",
      "Jämförelser mellan flera sessioner får göras för personliga ändamål, men resultaten skapar ingen allmän rangordning av användare och bevisar inte att en person är överlägsen en annan.",
    ],
  },
  {
    id: "3.8.1",
    title: "Session utan fastställt mål",
    paragraphs: [
      "Användaren kan inleda en session utan att i förväg ha formulerat någon konkret uppgift. Avsaknaden av ett formulerat mål hindrar inte timern från att fungera om gränssnittet inte kräver att ett mål anges.",
      "En sådan session anses inte tekniskt ogiltig enbart för att avsikten är oklar. Bedömningen av dess personliga nytta tillkommer Användaren.",
    ],
  },
  {
    id: "3.8.2",
    title: "Session som präglas av tvivel",
    paragraphs: [
      "Tvivel på sessionens nödvändighet, effektivitet eller lämpliga tidpunkt upphäver inte den tekniska betydelsen av en genomförd aktivering. Användaren får ompröva sina förväntningar medan gränssnittet är aktivt.",
      "Bolaget betraktar inte Användarens inre oenighet med sessionens förmodade nytta som ett avbrytningskommando. För att ändra programmets tillstånd krävs en föreskriven åtgärd eller att motsvarande tekniska händelse inträffar.",
    ],
  },
  {
    id: "3.8.3",
    title: "Session utan subjektivt märkbar effekt",
    paragraphs: [
      "Efter avslutad session kan Användaren sakna märkbara förändringar i uppmärksamhet, sinnesstämning eller arbetsresultat. Avsaknad av märkbar effekt är inte detsamma som att själva programintervallet saknades.",
      "Bolaget garanterar inte att en viss upplevelse uppstår när nedräkningen är slut. Användaren får anse sessionen meningslös för egen del utan att behöva förneka att den tekniskt har genomförts.",
    ],
  },
  {
    id: "3.8.4",
    title: "Slutlig åtskillnad mellan förfarande och resultat",
    paragraphs: [
      "I detta avsnitt hör aktivering, förlopp och avslut av en session till det förfarande som fastställs av gränssnittet, medan koncentration och personlig nytta är omständigheter som bedöms separat. Dessa kategorier får inte ersätta varandra.",
      "En avslutad session bekräftar att den föreskrivna tidssekvensen har genomförts inom ramen för tillgängliga tekniska uppgifter. Den intygar inte att en tanke lyckades, att distraktioner saknades eller att ett mål uppnåddes som Användaren kanske inte ens hade formulerat.",
    ],
  },
] satisfies AgreementSection;
