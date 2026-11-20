import type { AgreementSection } from "../../types";

export const section06 = [
  {
    id: "6.1.1",
    title: "Postanowienia ogólne dotyczące przetwarzania informacji",
    paragraphs: [
      "Określa się kategorie informacji, które mogą mieć znaczenie dla działania „Urządzenia” i oceny wyników.",
      "Ustanowienie kategorii nie potwierdza, że odpowiednie informacje są faktycznie gromadzone lub przechowywane. Rzeczywisty zakres przetwarzania zależy od możliwości technicznych interfejsu i obowiązujących przepisów.",
    ],
  },
  {
    id: "6.1.2",
    title: "Klasyfikacja przetwarzanych danych",
    paragraphs: [
      "Informacje dzieli się na faktycznie uzyskane, pochodne, domniemane i niepotwierdzone.",
      "Informacje faktycznie uzyskane mają ustalone źródło; pochodne powstają na podstawie dostępnych danych; domniemane opisują możliwości; w przypadku niepotwierdzonych nie ustalono faktu ich istnienia. Przeniesienie między kategoriami wymaga odrębnej podstawy.",
    ],
  },
  {
    id: "6.1.3",
    title: "Dane techniczne sesji koncentracji",
    paragraphs: [
      "Do informacji technicznych należą zdarzenia aktywacji, zatrzymania i zakończenia sesji.",
      "Możliwość techniczna zarejestrowania zdarzenia nie oznacza, że zapis jest koniecznie tworzony lub przechowywany. W razie braku zapisu fakt zdarzenia ustala się na podstawie innych dopuszczalnych okoliczności.",
    ],
  },
  {
    id: "6.1.4",
    title: "Informacje o wynikach korzystania",
    paragraphs: [
      "Informacje o osiągnięciach Użytkownika stanowią odrębną kategorię danych.",
      "Oświadczenie Użytkownika o osiągnięciu nie jest równoznaczne z niezależnym pomiarem. Spółka może uwzględnić je jako deklarację, wskazując stopień jej potwierdzenia.",
    ],
  },
  {
    id: "6.1.5",
    title: "Rozróżnienie danych i przypuszczeń",
    paragraphs: [
      "Informacje domniemane nie są utożsamiane z ustalonymi faktami wyłącznie wskutek umieszczenia ich w klasyfikacji.",
      "Na potrzeby Umowy opis hipotezy musi zachowywać informację o jej niepewności, nawet przy wielokrotnym powtarzaniu. Liczba powtórzeń przypuszczenia nie zastępuje dowodu.",
    ],
  },
  {
    id: "6.2.1",
    title: "Rejestrowanie działań Użytkownika",
    paragraphs: [
      "Działania w interfejsie mogą być traktowane jako zdarzenia charakteryzujące przebieg korzystania z „Urządzenia”.",
      "Do takich zdarzeń mogą należeć naciśnięcie przycisku, zmiana stanu sesji i inne dostępne interakcje. Niniejszy punkt określa ich klasyfikację prawną, lecz nie obiecuje stałego nadzoru technicznego.",
    ],
  },
  {
    id: "6.2.2",
    title: "Status prawny bezczynności",
    paragraphs: [
      "Brak interakcji w określonym czasie uznaje się za odrębną okoliczność.",
      "Bezczynność rozpatruje się w odniesieniu do oczekiwanego działania i określonego okresu. Jeżeli nie ustalono takiego oczekiwania, brak zdarzenia nie stanowi samodzielnego naruszenia.",
    ],
  },
  {
    id: "6.2.3",
    title: "Rozróżnienie bezczynności zamierzonej i przypadkowej",
    paragraphs: [
      "Bezczynność można klasyfikować z uwzględnieniem domniemanych przyczyn jej wystąpienia.",
      "Zamiaru nie wywodzi się automatycznie z braku naciśnięcia przycisku. W razie braku wiarygodnych informacji przyczyna bezczynności pozostaje domniemana.",
    ],
  },
  {
    id: "6.2.4",
    title: "Brak działań jako zdarzenie informacyjne",
    paragraphs: [
      "Dopuszcza się odrębne uwzględnianie niewystąpienia oczekiwanego działania, niezależnie od działań faktycznie wykonanych.",
      "Na potrzeby sprawozdawczości wewnętrznej można osobno odnotować zdarzenie oczekiwane i zdarzenie, które rzeczywiście nastąpiło. Niewykonanego działania nie wolno rejestrować jako wykonanego.",
    ],
  },
  {
    id: "6.2.5",
    title: "Niemożność ustalenia faktu bezczynności",
    paragraphs: [
      "Jeżeli nie prowadzono obserwacji, brak zarejestrowanych działań nie potwierdza bezczynności Użytkownika.",
      "Brak obserwacji i obserwacja braku to dwie różne okoliczności. Spółka nie może przedstawiać pierwszej jako drugiej tylko dlatego, że obie skutkują pustym wierszem raportu.",
    ],
  },
  {
    id: "6.3.1",
    title: "Pojęcie danych potencjalnych",
    paragraphs: [
      "Za potencjalne uznaje się informacje, które mogłyby powstać w określonych okolicznościach.",
      "Dane potencjalne istnieją jako kategoria opisu możliwego zdarzenia, a nie jako obowiązkowy zapis w pamięci „Urządzenia”. Ich zakres może pozostawać nieokreślony bez obowiązku wyliczenia wszystkich możliwości.",
    ],
  },
  {
    id: "6.3.2",
    title: "Informacje o domniemanych zamiarach",
    paragraphs: [
      "Domniemane dane o zamiarach Użytkownika podlegają szczególnemu reżimowi poufności zgodnie z punktem 7.3.3.",
      "Domniemanego zamiaru nie uznaje się za ustaloną myśl Użytkownika. Zasady zachowania poufności takich przypuszczeń określa punkt 7.3.3.",
    ],
  },
  {
    id: "6.3.3",
    title: "Klasyfikacja niezrealizowanych działań",
    paragraphs: [
      "Działania, które Użytkownik mógł wykonać, lecz ich nie wykonał, mogą być traktowane jako zdarzenia teoretyczne.",
      "Niezrealizowanego działania nie uznaje się za wykonane nawet wtedy, gdy Spółka uważa je za najbardziej prawdopodobne. Prawdopodobieństwo uwzględnia się oddzielnie od faktu.",
    ],
  },
  {
    id: "6.3.4",
    title: "Formułowanie przypuszczeń przy niedostatku informacji",
    paragraphs: [
      "Brakujące informacje można zastępować hipotezami obliczeniowymi, pod warunkiem zachowania ich hipotetycznego statusu.",
      "Hipotezie obliczeniowej musi towarzyszyć wskazanie sposobu jej uzyskania albo niemożności jego wskazania. Brak danych wyjściowych nie czyni hipotezy wiarygodnym wynikiem.",
    ],
  },
  {
    id: "6.3.5",
    title: "Zakaz utożsamiania możliwości z faktem",
    paragraphs: [
      "Możliwość istnienia informacji nie potwierdza jej faktycznego powstania.",
      "Gdyby z możliwości wykonania działania wynikało uznanie samego działania, każdy Użytkownik wykonywałby jednocześnie nieokreśloną liczbę wzajemnie wykluczających się działań. Taka klasyfikacja jest niedopuszczalna na potrzeby ewidencji faktów.",
    ],
  },
  {
    id: "6.4.1",
    title: "Pojęcie stanu koncentracji",
    paragraphs: [
      "Stan koncentracji rozpatruje się jako zbiór cech uwagi Użytkownika.",
      "Pojęcie to służy opisowi przedmiotu oceny i nie zakłada, że interfejs ma bezpośredni dostęp do aktywności myślowej.",
    ],
  },
  {
    id: "6.4.2",
    title: "Dostępność informacji o stanie uwagi",
    paragraphs: [
      "Bezpośrednie określanie stanu uwagi nie należy do potwierdzonych możliwości technicznych „Urządzenia”.",
      "Wizualny licznik czasu i elementy sterujące nie są czujnikami stanu poznawczego. Braku bezpośredniego pomiaru nie można uzupełnić wyłącznie przez nadanie wskaźnikowi nazwy prawnej.",
    ],
  },
  {
    id: "6.4.3",
    title: "Pośrednie oznaki koncentracji",
    paragraphs: [
      "Dostępne informacje o przebiegu sesji mogą służyć do formułowania przypuszczeń dotyczących stanu uwagi.",
      "Oznaka pośrednia pozwala sformułować przypuszczenie, ale sama nie dowodzi stanu uwagi. W raportach takie przypuszczenie należy odróżniać od faktycznie zarejestrowanego zdarzenia.",
    ],
  },
  {
    id: "6.4.4",
    title: "Subiektywne informacje Użytkownika",
    paragraphs: [
      "Samodzielne oświadczenia Użytkownika o własnym stanie mogą być uwzględniane oddzielnie od danych technicznych.",
      "Subiektywne oświadczenie można uwzględnić w formie, w jakiej zostało otrzymane. Spółka nie może przedstawiać niezgłoszonych odczuć jako informacji uzyskanych bezpośrednio od Użytkownika.",
    ],
  },
  {
    id: "6.4.5",
    title: "Status prawny stanu niezmierzonego",
    paragraphs: [
      "Niemożność zmierzenia koncentracji nie stoi na przeszkodzie ustanowieniu zasad klasyfikacji domniemanych stanów.",
      "Jeżeli stanu nie zmierzono, procedura może zakończyć się przypisaniem kategorii „nie ustalono”. Zakończenie klasyfikacji nie oznacza pełnej wiedzy o stanie.",
    ],
  },
  {
    id: "6.5.1",
    title: "Ogólne zasady ustalania okresów przechowywania",
    paragraphs: [
      "Okres przechowywania faktycznie uzyskanych informacji określa się zgodnie z ich przeznaczeniem i warunkami technicznymi.",
      "Okresy przechowywania można ustalać wyłącznie dla informacji, które są faktycznie przechowywane. Wskazanie okresu w Umowie nie dowodzi istnienia odpowiedniej bazy danych.",
    ],
  },
  {
    id: "6.5.2",
    title: "Rozróżnienie przetwarzania tymczasowego i trwałego przechowywania",
    paragraphs: [
      "Informacje mogą być przetwarzane tymczasowo albo przechowywane przez przewidziany okres.",
      "Przetwarzanie tymczasowe nie jest równoznaczne z trwałym przechowywaniem. Niemożność odzyskania informacji po zakończeniu sesji sama w sobie nie potwierdza ich usunięcia z wcześniej istniejącego repozytorium.",
    ],
  },
  {
    id: "6.5.3",
    title: "Status prawny danych niezapisanych",
    paragraphs: [
      "Brak zachowanego zapisu nie wyklucza wystąpienia wcześniejszego zdarzenia, lecz ogranicza możliwość jego udokumentowania.",
      "Brak zachowanego zapisu nie wyklucza wystąpienia wcześniejszego zdarzenia, lecz ogranicza możliwość jego udokumentowania. Przy rozpatrywaniu spornych okoliczności stosuje się rozróżnienie między zdarzeniem a jego zapisem.",
    ],
  },
  {
    id: "6.5.4",
    title: "Okres przechowywania nieistniejących informacji",
    paragraphs: [
      "W odniesieniu do informacji, których nie uzyskano, nie powstaje okres faktycznego przechowywania.",
      "Dla nieistniejących informacji można ustalić umowny okres rozpatrywania kwestii ich ewentualnego pojawienia się. Okres ten nie jest okresem przechowywania danych, które nie istnieją.",
    ],
  },
  {
    id: "6.5.5",
    title: "Potwierdzenie braku przechowywanych informacji",
    paragraphs: [
      "Niemożność odnalezienia zapisu nie zawsze pozwala ustalić, czy istniał on wcześniej.",
      "Wniosek o braku zapisu potwierdza jedynie wynik przeprowadzonej kontroli w granicach dostępnych źródeł. Nie potwierdza automatycznie braku zdarzenia, któremu zapis mógł odpowiadać.",
    ],
  },
  {
    id: "6.6.1",
    title: "Ogólne warunki przekazywania informacji",
    paragraphs: [
      "Faktyczne przekazywanie informacji jest dopuszczalne wyłącznie na przewidzianych podstawach.",
      "Niniejszy punkt nie stwierdza faktu przekazania danych ani nie rozszerza katalogu informacji rzeczywiście przetwarzanych. Każde faktyczne przekazanie podlega ocenie zgodnie z obowiązującym prawem.",
    ],
  },
  {
    id: "6.6.2",
    title: "Kategorie możliwych odbiorców",
    paragraphs: [
      "Odbiorcami mogą być upoważnione osoby i organizacje uczestniczące w przewidzianych procesach.",
      "Samo określenie kategorii odbiorców nie oznacza przyznania im dostępu. Możliwość otrzymania informacji i fakt jej otrzymania odnotowuje się oddzielnie.",
    ],
  },
  {
    id: "6.6.3",
    title: "Nieokreśleni potencjalni odbiorcy",
    paragraphs: [
      "Na potrzeby dokumentacji wewnętrznej dopuszcza się uwzględnianie kategorii osób, którym informacje teoretycznie mogłyby zostać przekazane.",
      "Nieokreślony potencjalny odbiorca stanowi kategorię ryzyka, a nie konkretną osobę, której już przekazano informacje. Nieustalona tożsamość nie jest dowodem dokonanego przekazania.",
    ],
  },
  {
    id: "6.6.4",
    title: "Przekazywanie informacji domniemanych",
    paragraphs: [
      "Hipotetycznej możliwości przekazania danych domniemanych nie uznaje się za fakt ich przekazania.",
      "Hipotetyczny opis przekazania nie zastępuje technicznego zdarzenia przekazania. Spółka ma obowiązek rozróżniać operacje planowane, dopuszczalne i faktycznie wykonane.",
    ],
  },
  {
    id: "6.6.5",
    title: "Odpowiedzialność za przekazanie, które nie nastąpiło",
    paragraphs: [
      "Brak przekazania nie wyklucza oceny potencjalnych skutków takiego przekazania.",
      "Ocena potencjalnych skutków może zakończyć się wnioskiem o braku przedmiotu faktycznego naruszenia. Sporządzenie takiego wniosku nie oznacza, że przekazanie nastąpiło.",
    ],
  },
  {
    id: "6.7.1",
    title: "Ogólne podstawy usuwania danych",
    paragraphs: [
      "Faktycznie przechowywane informacje mogą być usuwane, jeżeli istnieją przewidziane ku temu podstawy.",
      "Zastosowanie procedury usuwania zakłada istnienie obiektu możliwego do usunięcia. Brak obiektu nie wymaga symulowania operacji technicznej.",
    ],
  },
  {
    id: "6.7.2",
    title: "Potwierdzenie zakończenia usuwania",
    paragraphs: [
      "Usuwanie uznaje się za zakończone po wykonaniu przewidzianych operacji technicznych.",
      "Potwierdzenie może dotyczyć wyłącznie rzeczywiście wykonanych działań i dostępnego zakresu danych. Niemożności sprawdzenia usunięcia nie należy przedstawiać jako potwierdzenia jego wykonania.",
    ],
  },
  {
    id: "6.7.3",
    title: "Usuwanie danych domniemanych",
    paragraphs: [
      "W odniesieniu do informacji domniemanych dopuszcza się zaprzestanie ich ewidencjonowania bez technicznego usuwania.",
      "Zaprzestanie ewidencjonowania hipotezy oznacza wyłączenie jej z aktualnej klasyfikacji, a nie zniszczenie nieistniejącego pliku. Umowna nazwa procedury nie zmienia jej faktycznego charakteru.",
    ],
  },
  {
    id: "6.7.4",
    title: "Przywracanie wcześniej usuniętych informacji",
    paragraphs: [
      "Przywrócenie jest możliwe, jeżeli istnieje technicznie dostępna kopia lub inne dopuszczalne źródło.",
      "W razie braku dostępnej kopii Spółka może odnotować niemożność przywrócenia. Takie odnotowanie nie tworzy kopii ani nie zmienia skutku wcześniej dokonanego usunięcia.",
    ],
  },
  {
    id: "6.7.5",
    title: "Przywracanie informacji, które wcześniej nie istniały",
    paragraphs: [
      "Utworzenie nowego zapisu na podstawie przypuszczeń nie jest uznawane za przywrócenie wcześniej istniejących danych.",
      "Odtworzone przypuszczenie podlega ewidencji jako nowa informacja pochodna lub domniemana. Nazwa „przywrócenie” nie może służyć nadaniu mu statusu faktu historycznego.",
    ],
  },
  {
    id: "6.8.1",
    title: "Pojęcie danych niepotwierdzonych",
    paragraphs: [
      "Za niepotwierdzone uznaje się informacje, których istnienia nie można ustalić dostępnymi środkami.",
      "Brak potwierdzenia nie jest równoznaczny z udowodnionym brakiem. Na potrzeby Umowy można osobno odnotować niemożność zweryfikowania samej kwestii istnienia informacji.",
    ],
  },
  {
    id: "6.8.2",
    title: "Zasady wstępnej ewidencji",
    paragraphs: [
      "Informacje niepotwierdzone mogą być uwzględniane jako odrębna kategoria teoretyczna bez tworzenia fikcyjnego zapisu faktycznego.",
      "Wstępna ewidencja może polegać wyłącznie na opisaniu kategorii. Zabrania się przy tym przedstawiania umownego zapisu jako wyniku rzeczywistego gromadzenia informacji.",
    ],
  },
  {
    id: "6.8.3",
    title: "Klasyfikacja nieistniejących danych",
    paragraphs: [
      "Informacje, których istnienia nie potwierdzono, klasyfikuje się zgodnie z punktem 6.1.2.",
      "Klasyfikacja informacji, których istnienia nie potwierdzono, odbywa się zgodnie z punktem 6.1.2. Podjęcie decyzji klasyfikacyjnej nie zmienia statusu informacji źródłowych.",
    ],
  },
  {
    id: "6.8.4",
    title: "Obowiązek uwzględnienia niemożności ewidencji",
    paragraphs: [
      "Niemożność ustalenia istnienia informacji należy uwzględnić przy ocenie kompletności obrazu informacyjnego.",
      "Jeżeli ewidencja jest niemożliwa, Spółka może sporządzić wniosek o niemożności ewidencji. Istnienie wniosku potwierdza przeprowadzenie procedury, ale nie istnienie informacji, których dotyczyła.",
    ],
  },
  {
    id: "6.8.5",
    title: "Domniemanie wystarczalności niepewności",
    paragraphs: [
      "Jeżeli nie można potwierdzić ani istnienia, ani braku danych, ich nieokreślony status uznaje się za wystarczający do zakończenia wstępnej klasyfikacji.",
      "Wstępną klasyfikację można uznać za zakończoną po udokumentowanym stwierdzeniu niemożności wyboru między istnieniem a brakiem danych. Zakończenie procedury nie usuwa niepewności, która stanowiła podstawę jej zakończenia.",
    ],
  },
] satisfies AgreementSection;
