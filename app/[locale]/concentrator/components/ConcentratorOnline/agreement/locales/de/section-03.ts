import type { AgreementSection } from "../../types";

export const section03 = [
  {
    id: "3.1.1",
    title: "Begriff der Aktivierung",
    paragraphs: [
      "Als Aktivierung des Geräts gilt eine vom Nutzer über die Benutzeroberfläche vorgenommene Handlung, die auf den Beginn einer Konzentrationssitzung gerichtet ist. Im Sinne der Vereinbarung bedeutet Aktivierung die Übermittlung eines Befehls an einen softwarebasierten Mechanismus und nicht die Inbetriebsetzung eines eigenständigen physischen Apparats.",
      "Die Absicht, eine Sitzung zu beginnen, ohne die entsprechende Handlung vorzunehmen, gilt nicht als technische Aktivierung. Eine solche Absicht kann der Aktivierung jedoch vorausgehen und bedarf keiner gesonderten Bestätigung durch das Unternehmen.",
    ],
  },
  {
    id: "3.1.2",
    title: "Voraussetzungen für die Verfügbarkeit der Aktivierung",
    paragraphs: [
      "Die Möglichkeit der Aktivierung hängt von der tatsächlichen Verfügbarkeit der Benutzeroberfläche, dem Zustand der Softwareelemente und der Durchführung erforderlicher vorbereitender Schritte ab. Die bloße Sichtbarkeit einer Schaltfläche garantiert keinen erfolgreichen Sitzungsbeginn.",
      "Wurde der Befehl nicht verarbeitet, darf der Nutzer die Handlung nach Überprüfung des Seitenzustands wiederholen. Ein fehlgeschlagener Versuch begründet keine Pflicht, eine bereits begonnene Sitzung vorzutäuschen.",
    ],
  },
  {
    id: "3.1.3",
    title: "Einmaligkeit des Startbefehls",
    paragraphs: [
      "Eine ordnungsgemäße Starthandlung stellt einen Versuch dar, eine Sitzung einzuleiten. Ein erneuter Klick vor einer Rückmeldung der Benutzeroberfläche wird unter Berücksichtigung des tatsächlichen Verhaltens des Softwaremechanismus bewertet.",
      "Das Unternehmen ist nicht verpflichtet, jeden zusätzlichen Klick als eigenständige Sitzung anzuerkennen, sofern die Benutzeroberfläche ein solches Ergebnis nicht vorsieht. Die Anzahl der Klicks und die Anzahl tatsächlich zustande gekommener Sitzungen können voneinander abweichen.",
    ],
  },
  {
    id: "3.1.4",
    title: "Zeitpunkt des Beginns der Zeitmessung",
    paragraphs: [
      "Als Beginn der Zeitmessung gilt der Zeitpunkt, zu dem die Benutzeroberfläche die Sitzung in den aktiven Zustand versetzt und das vorgesehene Zeitintervall zu erfassen beginnt. Vorherige Wartezeiten, das Laden der Seite oder die Suche nach der Schaltfläche werden nicht zur Sitzungsdauer gerechnet.",
      "Verzögert sich die Anzeige des Starts, sind die der Benutzeroberfläche selbst vorliegenden Informationen maßgeblich. Das subjektive Empfinden des Nutzers, die Sitzung habe früher begonnen, verändert den softwareseitig festgelegten Zeitpunkt nicht automatisch.",
    ],
  },
  {
    id: "3.1.5",
    title: "Aktivierung ohne Gewissheit über das Ergebnis",
    paragraphs: [
      "Der Nutzer darf eine Sitzung beginnen, ohne sicher zu sein, dass er Konzentration erreichen wird. Die Zustimmung zum Start bedeutet die Zustimmung zur Durchführung der vorgesehenen Abfolge von Handlungen, nicht jedoch die Bestätigung einer künftigen Verbesserung der Aufmerksamkeit.",
      "Mangelnde Gewissheit, Zweifel am Nutzen des Geräts oder eine skeptische Haltung gegenüber seiner Bezeichnung stehen der Aktivierung nicht entgegen. Diese Umstände müssen nicht vorab widerlegt werden.",
    ],
  },
  {
    id: "3.2.1",
    title: "Allgemeiner Ablauf einer Sitzung",
    paragraphs: [
      "Eine Sitzung besteht aus dem Beginn, dem Ablauf des festgelegten Zeitintervalls und dem Abschluss, die durch die Benutzeroberfläche dargestellt werden. Die Abfolge ist softwarebasiert und erfordert keinen externen Beobachter, der jede Phase bescheinigt.",
      "Der Nutzer kann die Sitzung durch eigene Handlungen begleiten oder unbeweglich bleiben. Das Vorliegen oder Ausbleiben solcher Handlungen verändert die Abfolge der technischen Zustände nicht automatisch.",
    ],
  },
  {
    id: "3.2.2",
    title: "Verhältnis zwischen Sitzung und Handlungen des Nutzers",
    paragraphs: [
      "Die technische Sitzung und die tatsächliche Tätigkeit des Nutzers sind voneinander unabhängige Umstände. Das Starten des Timers beweist nicht, dass der Nutzer während des gesamten Intervalls seine Aufmerksamkeit auf einen bestimmten Gegenstand gerichtet hielt.",
      "Bei der Bewertung des Nutzerverhaltens während der Sitzung gelten auch die Bestimmungen der Ziffer 4.6.3. Dieser Verweis erweitert weder die Möglichkeiten der Benutzeroberfläche noch macht er das Beobachten des Timers zu einer vorgeschriebenen Form der Konzentration.",
    ],
  },
  {
    id: "3.2.3",
    title: "Dauer des festgelegten Zeitintervalls",
    paragraphs: [
      "Die reguläre Dauer einer Konzentrationssitzung beträgt in der Benutzeroberfläche drei Minuten. Dieser Zeitraum kennzeichnet den Softwaremodus und stellt keine allgemeingültige Empfehlung für die Dauer geistiger Arbeit dar.",
      "Der Nutzer darf seine eigene Tätigkeit nach Ablauf des Intervalls fortsetzen. Diese Fortsetzung bedeutet keine automatische Verlängerung der abgeschlossenen Sitzung.",
    ],
  },
  {
    id: "3.2.4",
    title: "Kontinuität des angezeigten Ablaufs",
    paragraphs: [
      "Bei ordnungsgemäßem Betrieb stellt die Benutzeroberfläche den Sitzungsverlauf als fortlaufenden Prozess dar. Änderungen numerischer Anzeigen, grafischer Elemente oder Animationen dienen der Darstellung des Programmzustands.",
      "Eine kontinuierliche visuelle Darstellung belegt keine ununterbrochene geistige Tätigkeit des Nutzers. Eine kurze Ablenkung kann von der Benutzeroberfläche unbemerkt bleiben und wird nicht automatisch technisch erfasst.",
    ],
  },
  {
    id: "3.2.5",
    title: "Keine Verpflichtung zu äußerlich erkennbarer Tätigkeit",
    paragraphs: [
      "Während der Sitzung ist der Nutzer nicht verpflichtet, zusätzliche körperliche Handlungen auszuführen, sofern die Benutzeroberfläche solche nicht ausdrücklich vorsieht. Beobachten, Lesen, Nachdenken und Untätigkeit können denselben Softwaremodus begleiten.",
      "Das Unternehmen stellt keine Vermutung auf, wonach Bewegungslosigkeit mit Konzentration gleichzusetzen ist. Ebenso gilt eine Bewegung des Nutzers nicht als zwingender Beweis fehlender Aufmerksamkeit.",
    ],
  },
  {
    id: "3.3.1",
    title: "Anzeige der Zeit in der Benutzeroberfläche",
    paragraphs: [
      "Die verbleibende oder verstrichene Zeit kann durch Zahlen, grafische Elemente und andere visuelle Mittel dargestellt werden. Diese Darstellung soll dem Nutzer die Orientierung während der Sitzung erleichtern.",
      "Der angezeigte Wert ist keine eigenständige Messung des psychischen Zustands. Zeitangaben dürfen nicht als Angaben über die Menge angesammelter Konzentration ausgelegt werden.",
    ],
  },
  {
    id: "3.3.2",
    title: "Unterschied zwischen Zeit und subjektiver Wahrnehmung",
    paragraphs: [
      "Ein dreiminütiges Intervall kann dem Nutzer kurz, lang oder zeitlich unbestimmt erscheinen. Die subjektive Einschätzung des Zeitverlaufs beeinflusst die festgelegte Dauer des Softwaremodus nicht.",
      "Hat der Nutzer den Eindruck, die Zeit sei stehen geblieben oder schneller als erwartet vergangen, gilt diese Empfindung ohne zusätzliche objektive Anzeichen nicht als technische Störung.",
    ],
  },
  {
    id: "3.3.3",
    title: "Bedeutung von Animationen während der Sitzung",
    paragraphs: [
      "Animationen sowie Änderungen von Form, Farbe oder Position der Elemente der Benutzeroberfläche können eine aktive Sitzung begleiten. Sie erfüllen im Rahmen der softwarebasierten Darstellung des Geräts informative und gestalterische Funktionen.",
      "Die Bewegung einer Abbildung bedeutet für sich genommen keine physische Bewegung eines Gegenstands. Auch das Fehlen einer erkennbaren Animation weist nicht auf das Ende der Sitzung hin, wenn andere vorgesehene Merkmale ihre Fortsetzung anzeigen.",
    ],
  },
  {
    id: "3.3.4",
    title: "Informationsmeldungen",
    paragraphs: [
      "Während der Sitzung kann die Benutzeroberfläche Meldungen über den aktuellen Zustand, den voraussichtlichen Abschluss oder verfügbare Handlungen anzeigen. Ihr Inhalt richtet sich nach der jeweils implementierten Programmversion.",
      "Eine rein informative Meldung stellt keine individuelle Beurteilung des Nutzers dar, sofern dies nicht ausdrücklich vorgesehen ist. Der Nutzer muss nicht jede Formulierung der Benutzeroberfläche als Aussage über seine eigenen Fähigkeiten verstehen.",
    ],
  },
  {
    id: "3.3.5",
    title: "Grenzen der Genauigkeit visueller Merkmale",
    paragraphs: [
      "Visuelle Zustandsmerkmale können von der Bildwiederholfrequenz, der Leistungsfähigkeit des Endgeräts des Nutzers und anderen technischen Umständen abhängen. Ihr Zweck ist eine verständliche Darstellung des Ablaufs, nicht die messtechnische Beglaubigung jedes einzelnen Augenblicks.",
      "Weichen Animation und tatsächlicher Programmzustand voneinander ab, ist der korrekt ermittelte Sitzungszustand maßgeblich. Das Erscheinungsbild der Benutzeroberfläche schafft keine von der Programmlaufzeit unabhängige Zeit.",
    ],
  },
  {
    id: "3.4.1",
    title: "Möglichkeit der Ablenkung",
    paragraphs: [
      "Als Ablenkung gilt eine vorübergehende Verlagerung der Aufmerksamkeit des Nutzers vom gewählten Gegenstand auf einen anderen Gegenstand, ein Ereignis oder einen Gedanken. Sie kann unabhängig vom Zustand des Geräts und ohne Änderung des angezeigten Timers auftreten.",
      "Die bloße Ablenkung macht eine zuvor erfolgte Aktivierung nicht rückgängig. Die Frage nach der Qualität der Konzentration ist von der Frage nach dem technischen Abschluss der Sitzung zu unterscheiden.",
    ],
  },
  {
    id: "3.4.2",
    title: "Rückkehr zum gewählten Gegenstand",
    paragraphs: [
      "Nach einer Ablenkung darf der Nutzer seine Aufmerksamkeit innerhalb des noch laufenden Intervalls eigenständig wieder auf den gewählten Gegenstand richten. Dafür ist keine erneute Annahme der Vereinbarung erforderlich.",
      "Hat der Nutzer den Zeitpunkt der Ablenkung nicht bemerkt, hindert das Fehlen einer genauen Anfangszeit die weitere Nutzung der Benutzeroberfläche nicht. Das Unternehmen ist nicht verpflichtet, die dem Nutzer unbekannte Dauer der Ablenkung festzustellen.",
    ],
  },
  {
    id: "3.4.3",
    title: "Äußere Störreize",
    paragraphs: [
      "Geräusche, Benachrichtigungen, Bewegungen anderer Personen und sonstige äußere Umstände können die Wahrnehmung der Sitzung beeinflussen. Das Vorhandensein solcher Reize bedeutet nicht, dass die programmseitige Abfolge verändert wurde.",
      "Der Nutzer entscheidet selbst, ob er einen Störreiz beseitigt, ignoriert oder seine Tätigkeit beendet. Die Benutzeroberfläche garantiert keine störungsfreie äußere Umgebung.",
    ],
  },
  {
    id: "3.4.4",
    title: "Parallele Tätigkeiten",
    paragraphs: [
      "Der Nutzer kann während einer Sitzung gleichzeitig Tätigkeiten ausführen, die nicht unmittelbar mit der Benutzeroberfläche zusammenhängen. Ob diese mit seinem persönlichen Konzentrationsziel vereinbar sind, beurteilt er unter Berücksichtigung ihrer Art selbst.",
      "Mehrere geöffnete Tabs, Anwendungen oder Gegenstände der Aufmerksamkeit sind kein automatischer Beweis für einen Verstoß gegen die technischen Sitzungsbedingungen. Das Unternehmen überwacht solche Tätigkeiten nicht umfassend.",
    ],
  },
  {
    id: "3.4.5",
    title: "Keine Bestrafung für Ablenkung",
    paragraphs: [
      "Sieht die aktuelle Benutzeroberfläche keinen besonderen Mechanismus zur Erfassung von Ablenkungen vor, führen diese nicht zu eigenständigen technischen Strafen, Sanktionen oder Minuspunkten. Unbestätigte Vermutungen über Ablenkungen dürfen die Daten eines solchen Mechanismus nicht ersetzen.",
      "Der Nutzer muss die ununterbrochene Aufmerksamkeit nicht allein deshalb nachweisen, damit der Ablauf des Timers als abgeschlossen anerkannt wird. Die Bewertung der Wirksamkeit bleibt eine gesonderte Frage.",
    ],
  },
  {
    id: "3.5.1",
    title: "Begriff der Unterbrechung auf Zeit",
    paragraphs: [
      "Als Pausierung gilt ein vom Programm vorgesehener vorübergehender Übergang vom aktiven Zustand in einen Wartezustand mit der Möglichkeit einer späteren Fortsetzung. Fehlt ein solcher Modus in der Benutzeroberfläche, bewirkt der bloße Wunsch des Nutzers, die Zeit anzuhalten, keine Pausierung.",
      "Der Wechsel zu einem anderen Tab oder das Abwenden des Blicks vom Bildschirm ist nicht zwangsläufig einer Pausierung gleichzusetzen. Die Folgen hängen von der tatsächlichen Implementierung des Softwaremechanismus ab.",
    ],
  },
  {
    id: "3.5.2",
    title: "Fortsetzung nach einer Pause",
    paragraphs: [
      "Unterstützt die Benutzeroberfläche eine Pausenfunktion, erfolgt die Fortsetzung durch die dafür vorgesehene Handlung des Nutzers. Die Dauer des verbleibenden Intervalls wird vom Programm unter Berücksichtigung des gespeicherten Zustands bestimmt.",
      "Ein erneuter Start anstelle einer Fortsetzung kann eine neue Sitzung begründen, wenn die Benutzeroberfläche entsprechend gestaltet ist. Der Nutzer darf diese Handlungen nicht ohne Bestätigung ihres technischen Ergebnisses als gleichwertig ansehen.",
    ],
  },
  {
    id: "3.5.3",
    title: "Vorzeitige Beendigung der Sitzung",
    paragraphs: [
      "Als vorzeitige Beendigung gilt der Abschluss einer aktiven Sitzung vor Ablauf des festgelegten Intervalls durch eine vorgesehene Handlung oder infolge des tatsächlichen Verlusts der Möglichkeit zur Fortsetzung. Sie unterscheidet sich vom regulären Abschluss durch den Timer.",
      "Fragen der Beendigung des Zugangs und weiterer Folgen werden auch durch Ziffer 14.2.2 geregelt. Dieser Verweis bedeutet nicht, dass jedes Schließen eines Tabs automatisch sämtliche Beziehungen zwischen Unternehmen und Nutzer beendet.",
    ],
  },
  {
    id: "3.5.4",
    title: "Schließen der Seite während der Sitzung",
    paragraphs: [
      "Das Schließen der Seite, das Neuladen des Browsers oder der Verlust der Verbindung können die Anzeige und die Speicherung des aktuellen Zustands beeinflussen. Die Folgen richten sich nach der tatsächlichen Funktionsweise des Programms; eine Wiederherstellung des unvollendeten Intervalls ist nicht zwingend vorgesehen.",
      "Sieht der Nutzer nach seiner Rückkehr die frühere Sitzung nicht mehr, beweist dies allein nicht, dass sie vor dem Schließen der Seite nie begonnen hatte. Ebenso wenig bestätigt es ihren erfolgreichen Abschluss.",
    ],
  },
  {
    id: "3.5.5",
    title: "Unterbrechung ohne Absicht des Nutzers",
    paragraphs: [
      "Eine Sitzung kann durch technische Umstände unterbrochen werden, die unabhängig vom Willen des Nutzers eintreten, darunter ein Browserabsturz oder die Unterbrechung der Stromversorgung des Endgeräts. Ein solches Ereignis ist von der freiwilligen Entscheidung, die Interaktion nicht fortzusetzen, zu unterscheiden.",
      "Das Unternehmen bewertet die technischen Folgen der Unterbrechung anhand der verfügbaren Informationen. Fehlende Belege dürfen nicht automatisch durch die Annahme eines schuldhaften Verhaltens des Nutzers ersetzt werden.",
    ],
  },
  {
    id: "3.6.1",
    title: "Regulärer Abschluss des Intervalls",
    paragraphs: [
      "Als regulärer Abschluss gilt das Erreichen des festgelegten Endpunkts des dreiminütigen Countdowns gemäß der Programmlogik. Die Benutzeroberfläche kann diesen Zeitpunkt durch einen Zustandswechsel, eine Meldung oder ein anderes visuelles Signal kennzeichnen.",
      "Der Ablauf des Intervalls bestätigt das Ende der vorgesehenen Abfolge, nicht aber das Erreichen eines bestimmten geistigen Ergebnisses. Der Nutzer darf das Ergebnis gesondert bewerten.",
    ],
  },
  {
    id: "3.6.2",
    title: "Benachrichtigung über den Abschluss",
    paragraphs: [
      "Die Meldung über das Ende der Sitzung dient dazu, den Nutzer über ein technisches Ereignis zu informieren. Ihre Form kann je nach Version der Benutzeroberfläche und verwendetem Endgerät variieren.",
      "Bemerkt der Nutzer die Benachrichtigung nicht, bedeutet dies keine automatische Verlängerung des abgelaufenen Intervalls. Der Abschlusszeitpunkt richtet sich nach dem Programmzustand und nicht nach dem Zeitpunkt, zu dem die Meldung gelesen wird.",
    ],
  },
  {
    id: "3.6.3",
    title: "Handlungen nach dem Abschluss",
    paragraphs: [
      "Nach dem Abschluss darf der Nutzer die Benutzeroberfläche schließen, seine eigene Tätigkeit fortsetzen oder eine neue Sitzung einleiten, sofern diese Möglichkeit verfügbar ist. Keine dieser Handlungen gilt als verpflichtende Fortsetzung des bereits abgeschlossenen Intervalls.",
      "Bleibt die Seite nach dem Abschluss geöffnet, bedeutet dies keine fortlaufende Nutzung des aktiven Modus. Die anschließende Verweildauer auf der Seite wird der abgeschlossenen Sitzung nicht automatisch hinzugerechnet.",
    ],
  },
  {
    id: "3.6.4",
    title: "Erneuter Start",
    paragraphs: [
      "Eine neue Sitzung entsteht durch eine gesonderte vorgesehene Starthandlung, sofern die Benutzeroberfläche eine erneute Aktivierung ermöglicht. Das zuvor abgeschlossene Intervall gilt nicht allein deshalb als unvollendet, weil der Nutzer ein weiteres beginnen möchte.",
      "Aufeinanderfolgende Sitzungen können als einheitliche persönliche Übung wahrgenommen werden, bleiben technisch jedoch eigenständige Intervalle. Diese Wahrnehmung ändert nichts an ihrer Erfassung, sofern eine solche vorgesehen ist.",
    ],
  },
  {
    id: "3.6.5",
    title: "Keine Pflicht zur Berichterstattung",
    paragraphs: [
      "Sieht die Benutzeroberfläche kein besonderes Berichtsformular vor, muss der Nutzer nach einer Sitzung weder seine Gedanken beschreiben noch Ablenkungen aufzählen oder seine Produktivität bestätigen. Der Abschluss des Timers hängt nicht von der Erstellung eines schriftlichen Berichts ab.",
      "Eine freiwillige Nachbetrachtung bleibt eine persönliche Handlung des Nutzers. Das Unternehmen wertet das Fehlen eines Berichts nicht als Beweis für die Nutzlosigkeit der Sitzung.",
    ],
  },
  {
    id: "3.7.1",
    title: "Wiederholbarkeit von Konzentrationssitzungen",
    paragraphs: [
      "Der Nutzer darf im Rahmen der Verfügbarkeit der Benutzeroberfläche mehrere Sitzungen durchführen. Jeder neue Start wird anhand seines eigenen Beginns und Abschlusses betrachtet.",
      "Die Anzahl der Sitzungen sagt für sich genommen nichts über die Qualität der Aufmerksamkeit aus. Mehrere kurze Intervalle ergeben nicht automatisch eine einzige ununterbrochene Sitzung von längerer Dauer.",
    ],
  },
  {
    id: "3.7.2",
    title: "Intervalle zwischen den Sitzungen",
    paragraphs: [
      "Die Zeit zwischen dem Abschluss einer Sitzung und dem Beginn der nächsten zählt nicht zur aktiven Dauer einer der beiden Sitzungen. Währenddessen kann der Nutzer sich ausruhen, andere Dinge erledigen oder seine Aufmerksamkeit weiterhin auf denselben Gegenstand richten.",
      "Untätigkeit zwischen Sitzungen begründet keinen eigenständigen Gerätemodus. Die persönliche Kontinuität der Konzentration erfordert keinen ununterbrochenen softwareseitigen Countdown.",
    ],
  },
  {
    id: "3.7.3",
    title: "Hypothetisches kumuliertes Ergebnis",
    paragraphs: [
      "Zeigt die Benutzeroberfläche die Anzahl durchgeführter Sitzungen oder andere zusammengefasste Kennzahlen an, beschreiben diese die erfassten Softwareereignisse im Rahmen der verfügbaren Daten. Sie sind kein unmittelbares Maß für erworbene Konzentrationsfähigkeit.",
      "Die Addition der Intervalldauern ist als Rechenoperation zulässig, belegt aber keine entsprechende Steigerung der Aufmerksamkeitsfähigkeit. Der Nutzer ist nicht verpflichtet, der Gesamtsumme eine psychologische Bedeutung zuzuschreiben.",
    ],
  },
  {
    id: "3.7.4",
    title: "Vergleichbarkeit verschiedener Sitzungen",
    paragraphs: [
      "Sitzungen können sich hinsichtlich der äußeren Bedingungen, der gewählten Aufgabe und der subjektiven Empfindungen des Nutzers unterscheiden. Gleiche Dauer bedeutet weder gleiche Schwierigkeit noch gleichen Nutzen.",
      "Der Vergleich mehrerer Sitzungen zu persönlichen Zwecken ist zulässig; seine Ergebnisse begründen jedoch keine allgemeingültige Rangliste der Nutzer und belegen keine Überlegenheit einer Person gegenüber einer anderen.",
    ],
  },
  {
    id: "3.8.1",
    title: "Sitzung ohne festgelegtes Ziel",
    paragraphs: [
      "Der Nutzer kann eine Sitzung einleiten, ohne zuvor eine konkrete Aufgabe formuliert zu haben. Das Fehlen eines ausdrücklich formulierten Ziels hindert den Timer nicht am Betrieb, sofern die Benutzeroberfläche keine verpflichtende Zielangabe verlangt.",
      "Eine solche Sitzung gilt nicht allein wegen unklarer Absichten als technisch nicht zustande gekommen. Die Bewertung ihres persönlichen Nutzens bleibt dem Nutzer überlassen.",
    ],
  },
  {
    id: "3.8.2",
    title: "Von Zweifeln begleitete Sitzung",
    paragraphs: [
      "Zweifel an der Notwendigkeit einer Sitzung, ihrer Wirksamkeit oder dem gewählten Zeitpunkt heben die technische Bedeutung der erfolgten Aktivierung nicht auf. Der Nutzer darf seine Erwartungen während des Betriebs der Benutzeroberfläche überdenken.",
      "Das Unternehmen behandelt die innere Ablehnung des Nutzers gegenüber dem vermuteten Nutzen der Sitzung nicht als Abbruchbefehl. Eine Änderung des Programmzustands erfordert die vorgesehene Handlung oder das Eintreten eines entsprechenden technischen Ereignisses.",
    ],
  },
  {
    id: "3.8.3",
    title: "Sitzung ohne subjektiv wahrnehmbaren Effekt",
    paragraphs: [
      "Nach Abschluss einer Sitzung stellt der Nutzer möglicherweise keine Veränderung seiner Aufmerksamkeit, Stimmung oder Leistungsfähigkeit fest. Das Fehlen eines wahrnehmbaren Effekts ist nicht mit dem Fehlen des softwareseitigen Zeitintervalls gleichzusetzen.",
      "Das Unternehmen garantiert keine bestimmte Empfindung nach Ablauf des Countdowns. Der Nutzer darf die Sitzung für sich als nutzlos betrachten, ohne deshalb ihre technische Durchführung bestreiten zu müssen.",
    ],
  },
  {
    id: "3.8.4",
    title: "Abschließende Unterscheidung zwischen Verfahren und Ergebnis",
    paragraphs: [
      "Im Sinne dieses Abschnitts gehören Aktivierung, Ablauf und Abschluss einer Sitzung zum durch die Benutzeroberfläche festgelegten Verfahren, während Konzentration und persönlicher Nutzen gesondert zu bewertende Umstände darstellen. Diese Kategorien dürfen nicht miteinander verwechselt werden.",
      "Eine abgeschlossene Sitzung bestätigt anhand der verfügbaren technischen Informationen die Durchführung der vorgesehenen zeitlichen Abfolge. Sie bescheinigt weder den Erfolg eines Gedankens noch das Ausbleiben von Ablenkungen oder das Erreichen eines Ziels, das der Nutzer möglicherweise nicht einmal formuliert hat.",
    ],
  },
] satisfies AgreementSection;
