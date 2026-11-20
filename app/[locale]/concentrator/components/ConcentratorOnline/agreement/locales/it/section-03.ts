import type { AgreementSection } from "../../types";

export const section03 = [
  {
    id: "3.1.1",
    title: "Definizione di attivazione",
    paragraphs: [
      "Per attivazione del Dispositivo si intende l’azione dell’Utente prevista dall’interfaccia e finalizzata all’avvio di una sessione di concentrazione. Ai fini dell’Accordo, l’attivazione consiste nell’invio di un comando a un meccanismo software, non nella messa in movimento di un apparecchio fisico autonomo.",
      "L’intenzione di avviare una sessione senza compiere l’azione corrispondente non costituisce un’attivazione tecnica. Tale intenzione può tuttavia precedere l’attivazione e non richiede una conferma separata da parte della Società.",
    ],
  },
  {
    id: "3.1.2",
    title: "Condizioni di disponibilità dell’attivazione",
    paragraphs: [
      "La possibilità di attivare il Dispositivo dipende dall’effettiva disponibilità dell’interfaccia, dallo stato dei componenti software e dall’esecuzione delle necessarie operazioni preliminari. La presenza visiva di un pulsante non garantisce, di per sé, l’avvio riuscito della sessione.",
      "Se il comando non è stato elaborato, l’Utente può ripetere l’operazione dopo aver verificato lo stato della pagina. Un tentativo fallito non comporta l’obbligo di fingere che la sessione sia iniziata.",
    ],
  },
  {
    id: "3.1.3",
    title: "Unicità del comando di avvio",
    paragraphs: [
      "Una singola azione di avvio correttamente eseguita costituisce un unico tentativo di iniziare una sessione. Un’ulteriore pressione effettuata prima della risposta dell’interfaccia viene valutata alla luce dell’effettivo comportamento del meccanismo software.",
      "La Società non è tenuta a considerare ogni ulteriore pressione come una sessione distinta, qualora l’interfaccia non preveda tale risultato. Il numero delle pressioni e quello delle sessioni effettivamente svolte possono differire.",
    ],
  },
  {
    id: "3.1.4",
    title: "Momento iniziale del conteggio",
    paragraphs: [
      "Il conteggio inizia nel momento in cui l’interfaccia porta la sessione nello stato attivo e comincia a computare l’intervallo previsto. Il tempo dedicato all’attesa preliminare, al caricamento della pagina o alla ricerca del pulsante non rientra nella durata della sessione.",
      "Se la visualizzazione dell’avvio è ritardata, rilevano le informazioni disponibili all’interfaccia stessa. La percezione soggettiva dell’Utente di un inizio precedente non modifica automaticamente il momento stabilito dal programma.",
    ],
  },
  {
    id: "3.1.5",
    title: "Attivazione senza certezza del risultato",
    paragraphs: [
      "L’Utente può iniziare una sessione senza essere certo di raggiungere la concentrazione. Il consenso all’avvio riguarda l’esecuzione della sequenza di operazioni prevista, non costituisce conferma di un futuro miglioramento dell’attenzione.",
      "La mancanza di certezza, i dubbi sull’utilità del Dispositivo o un atteggiamento scettico verso la sua denominazione non impediscono l’attivazione. Tali circostanze non devono essere previamente confutate.",
    ],
  },
  {
    id: "3.2.1",
    title: "Procedura generale di svolgimento della sessione",
    paragraphs: [
      "La sessione comprende l’avvio, lo svolgimento dell’intervallo stabilito e la conclusione, rappresentati mediante gli strumenti dell’interfaccia. La sequenza ha natura informatica e non richiede un osservatore esterno che certifichi ciascuna fase.",
      "L’Utente può accompagnare la sessione con proprie azioni oppure rimanere immobile. La presenza o l’assenza di tali azioni non modifica automaticamente la successione degli stati tecnici.",
    ],
  },
  {
    id: "3.2.2",
    title: "Rapporto tra la sessione e le azioni dell’Utente",
    paragraphs: [
      "La sessione tecnica e l’attività effettiva dell’Utente costituiscono circostanze distinte. L’avvio del timer non dimostra che l’Utente abbia mantenuto l’attenzione su un determinato oggetto per tutto l’intervallo.",
      "Nella valutazione del comportamento dell’Utente durante la sessione si applicano altresì le disposizioni della clausola 4.6.3. Tale rinvio non amplia le capacità dell’interfaccia né trasforma l’osservazione del timer in una forma obbligatoria di concentrazione.",
    ],
  },
  {
    id: "3.2.3",
    title: "Durata dell’intervallo stabilito",
    paragraphs: [
      "La durata ordinaria di una sessione di concentrazione nell’interfaccia è di tre minuti. Tale durata caratterizza la modalità operativa del programma e non costituisce una raccomandazione universale sulla durata dell’attività mentale.",
      "L’Utente può proseguire la propria attività dopo la scadenza dell’intervallo. Tale prosecuzione non comporta la proroga automatica della sessione conclusa.",
    ],
  },
  {
    id: "3.2.4",
    title: "Continuità del processo visualizzato",
    paragraphs: [
      "Durante il normale funzionamento, l’interfaccia rappresenta lo svolgimento della sessione come un processo sequenziale. Le variazioni dei valori numerici, della grafica o dell’animazione costituiscono modalità di rappresentazione dello stato del programma.",
      "La continuità della visualizzazione non dimostra la continuità dell’attività mentale dell’Utente. Una breve distrazione può passare inosservata all’interfaccia e non è soggetta a registrazione tecnica automatica.",
    ],
  },
  {
    id: "3.2.5",
    title: "Assenza di attività esterne obbligatorie",
    paragraphs: [
      "Durante la sessione l’Utente non è tenuto a compiere ulteriori azioni fisiche, salvo che siano espressamente previste dall’interfaccia. Osservazione, lettura, riflessione e inattività possono accompagnare la medesima modalità operativa del programma.",
      "La Società non presume che l’immobilità equivalga alla concentrazione. Analogamente, il movimento dell’Utente non costituisce prova incondizionata dell’assenza di attenzione.",
    ],
  },
  {
    id: "3.3.1",
    title: "Visualizzazione del tempo nell’interfaccia",
    paragraphs: [
      "Il tempo rimanente o trascorso può essere rappresentato mediante numeri, elementi grafici e altri strumenti visivi. Tale rappresentazione serve a orientare l’Utente durante la sessione.",
      "Il valore visualizzato non costituisce una misurazione autonoma dello stato mentale. Le informazioni sul tempo non devono essere interpretate come dati sulla quantità di concentrazione accumulata.",
    ],
  },
  {
    id: "3.3.2",
    title: "Differenza tra il tempo e la sua percezione soggettiva",
    paragraphs: [
      "L’intervallo di tre minuti può essere percepito dall’Utente come breve, lungo o indefinito. La valutazione soggettiva della velocità con cui trascorre il tempo non incide sulla durata stabilita della modalità operativa.",
      "Se all’Utente sembra che il tempo si sia fermato o sia trascorso più rapidamente del previsto, tale sensazione non costituisce un malfunzionamento tecnico in assenza di ulteriori indizi oggettivi.",
    ],
  },
  {
    id: "3.3.3",
    title: "Funzione dell’animazione durante la sessione",
    paragraphs: [
      "Animazioni e cambiamenti di forma, colore o posizione degli elementi dell’interfaccia possono accompagnare una sessione attiva. Essi svolgono funzioni informative e artistiche nell’ambito della rappresentazione software del Dispositivo.",
      "Il movimento dell’immagine non implica lo spostamento fisico di alcun oggetto. Anche l’assenza di un’animazione evidente non dimostra l’interruzione della sessione, qualora altri indicatori previsti ne segnalino la prosecuzione.",
    ],
  },
  {
    id: "3.3.4",
    title: "Messaggi informativi",
    paragraphs: [
      "Durante la sessione l’interfaccia può mostrare messaggi sullo stato corrente, sulla conclusione prevista o sulle azioni disponibili. Il loro contenuto dipende dall’implementazione vigente del programma.",
      "Un messaggio di carattere informativo non costituisce una valutazione individuale dell’Utente, salvo espressa previsione contraria. L’Utente non è tenuto a interpretare ogni frase dell’interfaccia come un giudizio sulle proprie capacità.",
    ],
  },
  {
    id: "3.3.5",
    title: "Limiti di precisione degli indicatori visivi",
    paragraphs: [
      "Gli indicatori visivi dello stato possono dipendere dalla frequenza di aggiornamento dello schermo, dalle prestazioni del dispositivo dell’Utente e da altre circostanze tecniche. La loro funzione consiste nel rappresentare il processo in modo accessibile, non nel certificare metrologicamente ogni istante.",
      "In caso di divergenza tra l’animazione e lo stato effettivo del programma, prevale lo stato della sessione correttamente accertato. L’aspetto dell’interfaccia non crea un tempo distinto da quello di esecuzione del programma.",
    ],
  },
  {
    id: "3.4.1",
    title: "Possibilità di distrazione",
    paragraphs: [
      "Per distrazione si intende lo spostamento temporaneo dell’attenzione dell’Utente dall’oggetto prescelto a un altro oggetto, evento o pensiero. La distrazione può verificarsi indipendentemente dallo stato del Dispositivo e senza modificare il timer visualizzato.",
      "Il verificarsi di una distrazione non annulla l’attivazione già avvenuta. La questione della qualità della concentrazione non sostituisce quella del completamento tecnico della sessione.",
    ],
  },
  {
    id: "3.4.2",
    title: "Ritorno all’oggetto prescelto",
    paragraphs: [
      "Dopo una distrazione, l’Utente può ristabilire autonomamente l’orientamento dell’attenzione entro l’intervallo ancora in corso. Tale ritorno non richiede una nuova accettazione dell’Accordo.",
      "Se l’Utente non si è accorto del momento della distrazione, la mancanza dell’ora esatta del suo inizio non impedisce di continuare a usare l’interfaccia. La Società non è tenuta a stabilire la durata di una distrazione ignota all’Utente.",
    ],
  },
  {
    id: "3.4.3",
    title: "Stimoli esterni",
    paragraphs: [
      "Suoni, notifiche, movimenti delle persone circostanti e altre circostanze esterne possono influire sulla percezione della sessione. La presenza di tali stimoli non implica una modifica della sequenza software.",
      "L’Utente decide autonomamente se eliminare lo stimolo, ignorarlo o interrompere la propria attività. L’interfaccia non garantisce la creazione di un ambiente esterno privo di interferenze.",
    ],
  },
  {
    id: "3.4.4",
    title: "Attività parallele",
    paragraphs: [
      "L’Utente può svolgere, contemporaneamente alla sessione, attività non direttamente connesse all’interfaccia. La loro compatibilità con il proprio obiettivo di concentrazione è valutata dall’Utente in relazione alla natura dell’attività.",
      "La presenza di più schede, applicazioni o oggetti di attenzione aperti non costituisce automaticamente prova di una violazione delle condizioni tecniche della sessione. La Società non esercita un controllo onnipervasivo su tali attività.",
    ],
  },
  {
    id: "3.4.5",
    title: "Assenza di sanzioni per le distrazioni",
    paragraphs: [
      "Se l’interfaccia vigente non prevede uno specifico meccanismo di rilevazione delle distrazioni, queste non comportano penalità tecniche, sanzioni o punti negativi autonomi. Le ipotesi non confermate di distrazione non possono sostituire i dati di tale meccanismo.",
      "L’Utente non è tenuto a dimostrare la continuità dell’attenzione al solo fine di ottenere il riconoscimento dell’avvenuta conclusione del timer. La valutazione dell’efficacia rimane una questione distinta.",
    ],
  },
  {
    id: "3.5.1",
    title: "Definizione di sospensione",
    paragraphs: [
      "Per sospensione si intende il passaggio temporaneo, previsto dal programma, dallo stato attivo a uno stato di attesa con possibilità di successiva ripresa. Se tale modalità non è presente nell’interfaccia, il semplice desiderio dell’Utente di fermare il tempo non determina una sospensione.",
      "Passare a un’altra scheda o smettere di guardare lo schermo non equivale necessariamente a sospendere la sessione. Le conseguenze dipendono dall’effettiva implementazione del meccanismo software.",
    ],
  },
  {
    id: "3.5.2",
    title: "Ripresa dopo una pausa",
    paragraphs: [
      "Se l’interfaccia supporta la pausa, la ripresa avviene mediante l’azione prevista dell’Utente. La durata dell’intervallo residuo è determinata dal programma tenendo conto dello stato memorizzato.",
      "Un nuovo avvio, anziché una ripresa, può costituire una nuova sessione se così è configurata l’interfaccia. L’Utente non può presumere l’equivalenza delle due azioni senza verificarne il risultato tecnico.",
    ],
  },
  {
    id: "3.5.3",
    title: "Interruzione anticipata della sessione",
    paragraphs: [
      "Per interruzione anticipata si intende la conclusione di una sessione attiva prima della scadenza dell’intervallo stabilito, mediante un’azione prevista o in conseguenza dell’effettiva impossibilità di proseguire. Tale interruzione è distinta dalla regolare conclusione al termine del timer.",
      "Le questioni relative alla cessazione dell’accesso e alle altre conseguenze sono disciplinate anche dalla clausola 14.2.2. Tale rinvio non significa che ogni chiusura della scheda ponga automaticamente fine a tutti i rapporti tra la Società e l’Utente.",
    ],
  },
  {
    id: "3.5.4",
    title: "Chiusura della pagina durante la sessione",
    paragraphs: [
      "La chiusura della pagina, il ricaricamento del browser o la perdita della connessione possono incidere sulla visualizzazione e sulla conservazione dello stato corrente. Le conseguenze dipendono dall’effettiva architettura del programma e non implicano necessariamente il ripristino dell’intervallo incompleto.",
      "Se, tornando alla pagina, l’Utente non vede più la sessione precedente, ciò non dimostra di per sé che la sessione non fosse iniziata prima della chiusura. Al tempo stesso, non ne conferma il corretto completamento.",
    ],
  },
  {
    id: "3.5.5",
    title: "Interruzione indipendente dalla volontà dell’Utente",
    paragraphs: [
      "Una sessione può essere interrotta da circostanze tecniche indipendenti dalla volontà dell’Utente, tra cui un errore del browser o l’interruzione dell’alimentazione del dispositivo. Tale evento va distinto dalla rinuncia volontaria a proseguire l’interazione.",
      "La Società valuta le conseguenze tecniche dell’interruzione sulla base delle informazioni disponibili. L’assenza di dati probatori non deve essere automaticamente sostituita dall’ipotesi di un comportamento colpevole dell’Utente.",
    ],
  },
  {
    id: "3.6.1",
    title: "Conclusione regolare dell’intervallo",
    paragraphs: [
      "Per conclusione regolare si intende il raggiungimento del termine stabilito del conteggio di tre minuti secondo la logica del programma. L’interfaccia può segnalare tale momento mediante un cambiamento di stato, un messaggio o un altro segnale visivo.",
      "La conclusione dell’intervallo conferma il completamento della sequenza prevista, ma non accerta il conseguimento di uno specifico risultato intellettuale. L’Utente può valutare il risultato separatamente.",
    ],
  },
  {
    id: "3.6.2",
    title: "Notifica di conclusione",
    paragraphs: [
      "Il messaggio di fine sessione ha lo scopo di informare l’Utente di un evento tecnico. La sua forma può variare in base alla versione dell’interfaccia e al dispositivo utilizzato.",
      "Se l’Utente non nota la notifica, ciò non comporta la prosecuzione automatica dell’intervallo già scaduto. Il momento della conclusione è determinato dallo stato del programma, non dal momento in cui il messaggio viene letto.",
    ],
  },
  {
    id: "3.6.3",
    title: "Azioni successive alla conclusione",
    paragraphs: [
      "Dopo la conclusione, l’Utente può chiudere l’interfaccia, proseguire la propria attività o avviare una nuova sessione, qualora tale possibilità sia disponibile. Nessuna di queste azioni costituisce una prosecuzione obbligatoria dell’intervallo già terminato.",
      "Lasciare la pagina aperta dopo la conclusione non equivale all’utilizzo continuativo della modalità attiva. Il tempo trascorso successivamente sulla pagina non viene aggiunto automaticamente alla sessione conclusa.",
    ],
  },
  {
    id: "3.6.4",
    title: "Nuovo avvio",
    paragraphs: [
      "Una nuova sessione ha inizio a seguito di un’ulteriore e distinta azione di avvio prevista, se l’interfaccia consente la riattivazione. L’intervallo precedente, già concluso, non diventa incompleto per il solo fatto che l’Utente abbia deciso di iniziarne un altro.",
      "Sessioni successive possono essere percepite come un’unica pratica personale, ma sul piano tecnico rimangono intervalli autonomi. Tale percezione non modifica le modalità della loro registrazione, ove prevista.",
    ],
  },
  {
    id: "3.6.5",
    title: "Assenza di obbligo di rendicontazione",
    paragraphs: [
      "Se l’interfaccia non prevede un’apposita forma di rendicontazione, l’Utente non è tenuto, dopo ogni sessione, a descrivere i propri pensieri, elencare le distrazioni o attestare la propria produttività. La conclusione del timer non dipende dalla redazione di una relazione scritta.",
      "Un bilancio volontario della sessione rimane un’attività personale dell’Utente. La Società non considera l’assenza di una relazione come prova dell’inutilità della sessione.",
    ],
  },
  {
    id: "3.7.1",
    title: "Ripetibilità delle sessioni di concentrazione",
    paragraphs: [
      "L’Utente può svolgere più sessioni nei limiti della disponibilità dell’interfaccia. Ogni nuovo avvio viene considerato in relazione al proprio momento iniziale e finale.",
      "Il numero delle sessioni non caratterizza di per sé la qualità dell’attenzione. Più intervalli brevi non costituiscono automaticamente un’unica sessione continua di durata maggiore.",
    ],
  },
  {
    id: "3.7.2",
    title: "Intervalli tra le sessioni",
    paragraphs: [
      "Il periodo compreso tra la conclusione di una sessione e l’inizio della successiva non rientra nel tempo attivo di nessuna delle due. Durante tale intervallo l’Utente può riposare, dedicarsi ad altro o mantenere l’attenzione sull’oggetto precedente.",
      "L’assenza di azioni tra le sessioni non crea una modalità distinta del Dispositivo. La continuità personale della concentrazione non richiede la continuità del conteggio software.",
    ],
  },
  {
    id: "3.7.3",
    title: "Risultato cumulativo convenzionale",
    paragraphs: [
      "Se l’interfaccia visualizza il numero delle sessioni svolte o altri indicatori riepilogativi, questi descrivono gli eventi software registrati nei limiti dei dati disponibili. Tali indicatori non costituiscono una misura diretta della concentrazione acquisita.",
      "La somma delle durate degli intervalli è ammissibile come operazione aritmetica, ma non dimostra un incremento equivalente della capacità di attenzione. L’Utente non è tenuto ad attribuire un significato psicologico al totale.",
    ],
  },
  {
    id: "3.7.4",
    title: "Comparabilità di sessioni diverse",
    paragraphs: [
      "Le sessioni possono differire per condizioni esterne, attività scelta e sensazioni soggettive dell’Utente. Una durata identica non implica pari difficoltà o uguale utilità.",
      "Il confronto tra più sessioni è consentito per finalità personali, ma i risultati non costituiscono una classifica universale degli utenti né dimostrano la superiorità di una persona su un’altra.",
    ],
  },
  {
    id: "3.8.1",
    title: "Sessione senza obiettivo definito",
    paragraphs: [
      "L’Utente può avviare una sessione senza aver formulato in anticipo un compito specifico. La mancanza di un obiettivo formulato non impedisce il funzionamento del timer, se l’interfaccia non ne richiede obbligatoriamente l’indicazione.",
      "Una simile sessione non è considerata tecnicamente inesistente per il solo fatto che le intenzioni siano indefinite. La valutazione della sua utilità personale spetta all’Utente.",
    ],
  },
  {
    id: "3.8.2",
    title: "Sessione accompagnata da dubbi",
    paragraphs: [
      "Il dubbio sulla necessità della sessione, sulla sua efficacia o sull’opportunità del momento scelto non annulla il significato tecnico dell’attivazione effettuata. L’Utente può rivedere le proprie aspettative mentre l’interfaccia è in funzione.",
      "La Società non considera il dissenso interiore dell’Utente rispetto all’utilità presunta della sessione come un comando di annullamento. Per modificare lo stato del programma occorre l’azione prevista o il verificarsi del corrispondente evento tecnico.",
    ],
  },
  {
    id: "3.8.3",
    title: "Sessione priva di effetti soggettivamente percepibili",
    paragraphs: [
      "Al termine della sessione, l’Utente può non rilevare cambiamenti nell’attenzione, nell’umore o nell’efficacia della propria attività. L’assenza di un effetto percepibile non equivale all’inesistenza dell’intervallo software stesso.",
      "La Società non garantisce il verificarsi di una particolare esperienza soggettiva alla fine del conteggio. L’Utente può ritenere la sessione inutile per sé senza dover negare che essa si sia tecnicamente svolta.",
    ],
  },
  {
    id: "3.8.4",
    title: "Distinzione conclusiva tra procedura e risultato",
    paragraphs: [
      "Ai fini della presente sezione, l’attivazione, lo svolgimento e la conclusione della sessione appartengono alla procedura stabilita dall’interfaccia, mentre la concentrazione e l’utilità personale costituiscono circostanze da valutare separatamente. Tali categorie non devono essere confuse né sostituirsi reciprocamente.",
      "Una sessione conclusa conferma l’esecuzione della sequenza temporale prevista nei limiti delle informazioni tecniche disponibili. Non certifica il successo di un pensiero, l’assenza di distrazioni o il raggiungimento di un obiettivo che l’Utente potrebbe non aver neppure formulato.",
    ],
  },
] satisfies AgreementSection;
