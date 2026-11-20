import type { AgreementSection } from "../../types";

export const section03 = [
  {
    id: "3.1.1",
    title: "Concepto de activación",
    paragraphs: [
      "Se considera activación del Dispositivo la acción del Usuario prevista en la interfaz y destinada a iniciar una sesión de concentración. A efectos del Acuerdo, la activación consiste en transmitir una orden a un mecanismo informático, y no en poner en marcha un aparato físico independiente.",
      "La intención de iniciar una sesión sin realizar la acción correspondiente no constituye una activación técnica. No obstante, dicha intención puede preceder a la activación y no requiere una confirmación independiente por parte de la Empresa.",
    ],
  },
  {
    id: "3.1.2",
    title: "Condiciones de disponibilidad de la activación",
    paragraphs: [
      "La posibilidad de activar el Dispositivo depende de la disponibilidad efectiva de la interfaz, del estado de los elementos informáticos y del cumplimiento de las acciones previas necesarias. La presencia visual de un botón no garantiza por sí sola que la sesión se inicie correctamente.",
      "Si la orden no se ha procesado, el Usuario puede repetir la acción después de comprobar el estado de la página. Un intento fallido no genera la obligación de fingir que la sesión ha comenzado.",
    ],
  },
  {
    id: "3.1.3",
    title: "Carácter individual de la orden de inicio",
    paragraphs: [
      "Una acción de inicio debidamente realizada constituye un intento de iniciar una sesión. Una nueva pulsación efectuada antes de recibir una respuesta de la interfaz se evalúa atendiendo al comportamiento real del mecanismo informático.",
      "La Empresa no está obligada a reconocer cada pulsación adicional como una sesión independiente si la interfaz no contempla tal resultado. El número de pulsaciones y el número de sesiones efectivamente realizadas pueden ser distintos.",
    ],
  },
  {
    id: "3.1.4",
    title: "Momento de inicio del cómputo del tiempo",
    paragraphs: [
      "Se considera inicio del cómputo el momento en que la interfaz pasa la sesión al estado activo y comienza a contabilizar el intervalo previsto. El tiempo de espera previo, de carga de la página o de búsqueda del botón no se incluye en la duración de la sesión.",
      "Si la indicación visual del inicio se retrasa, prevalece la información de la que dispone la propia interfaz. La impresión subjetiva del Usuario de que la sesión comenzó antes no modifica automáticamente el momento establecido por el programa.",
    ],
  },
  {
    id: "3.1.5",
    title: "Activación sin certeza sobre el resultado",
    paragraphs: [
      "El Usuario puede iniciar una sesión sin tener la certeza de que logrará concentrarse. El consentimiento para iniciarla implica aceptar la ejecución de la secuencia de acciones prevista, pero no confirma una futura mejora de la atención.",
      "La falta de certeza, las dudas sobre la utilidad del Dispositivo o una actitud escéptica respecto de su nombre no impiden la activación. Tales circunstancias no requieren ser refutadas previamente.",
    ],
  },
  {
    id: "3.2.1",
    title: "Procedimiento general de realización de la sesión",
    paragraphs: [
      "La sesión comprende el inicio, el transcurso del intervalo establecido y la finalización, representados mediante los recursos de la interfaz. La secuencia tiene carácter informático y no requiere un observador externo que certifique cada etapa.",
      "El Usuario puede acompañar la sesión con sus propias acciones o permanecer inmóvil. La presencia o ausencia de tales acciones no altera automáticamente la secuencia de estados técnicos.",
    ],
  },
  {
    id: "3.2.2",
    title: "Relación entre la sesión y las acciones del Usuario",
    paragraphs: [
      "La sesión técnica y la actividad efectiva del Usuario constituyen circunstancias independientes. Poner en marcha el temporizador no demuestra que el Usuario haya mantenido la atención en un objeto determinado durante todo el intervalo.",
      "Al evaluar la conducta del Usuario durante la sesión se aplican también las disposiciones del apartado 4.6.3. Esta remisión no amplía las capacidades de la interfaz ni convierte la observación del temporizador en una forma obligatoria de concentración.",
    ],
  },
  {
    id: "3.2.3",
    title: "Duración del intervalo establecido",
    paragraphs: [
      "La duración reglamentaria de una sesión de concentración en la interfaz es de tres minutos. Este plazo caracteriza el modo de funcionamiento del programa y no constituye una recomendación universal sobre la duración del trabajo mental.",
      "El Usuario puede continuar su propia actividad una vez transcurrido el intervalo. Dicha continuación no supone una prórroga automática de la sesión ya finalizada.",
    ],
  },
  {
    id: "3.2.4",
    title: "Continuidad del proceso mostrado",
    paragraphs: [
      "En condiciones normales de funcionamiento, la interfaz muestra el desarrollo de la sesión como un proceso secuencial. Los cambios en las cifras, los gráficos o las animaciones sirven para representar el estado del programa.",
      "La continuidad de la representación visual no acredita la continuidad de la actividad mental del Usuario. Una distracción breve puede pasar inadvertida para la interfaz y no queda automáticamente registrada por medios técnicos.",
    ],
  },
  {
    id: "3.2.5",
    title: "Ausencia de actividad externa obligatoria",
    paragraphs: [
      "Durante la sesión, el Usuario no está obligado a realizar acciones físicas adicionales, salvo que la interfaz las prevea expresamente. La observación, la lectura, la reflexión y la inactividad pueden acompañar a un mismo modo de funcionamiento del programa.",
      "La Empresa no establece la presunción de que la inmovilidad equivale a la concentración. Del mismo modo, el movimiento del Usuario no constituye una prueba concluyente de falta de atención.",
    ],
  },
  {
    id: "3.3.1",
    title: "Visualización del tiempo en la interfaz",
    paragraphs: [
      "El tiempo restante o transcurrido puede representarse mediante cifras, elementos gráficos y otros recursos visuales. Dicha representación tiene por objeto orientar al Usuario durante la sesión.",
      "El valor mostrado no constituye una medición independiente del estado mental. La información temporal no debe interpretarse como información sobre la cantidad de concentración acumulada.",
    ],
  },
  {
    id: "3.3.2",
    title: "Diferencia entre el tiempo y su percepción subjetiva",
    paragraphs: [
      "El Usuario puede percibir el intervalo de tres minutos como breve, largo o indeterminado. La valoración subjetiva de la velocidad a la que transcurre el tiempo no afecta a la duración establecida del modo de funcionamiento del programa.",
      "Si al Usuario le parece que el tiempo se ha detenido o ha transcurrido más deprisa de lo esperado, esa sensación no se considera un fallo técnico sin indicios objetivos adicionales.",
    ],
  },
  {
    id: "3.3.3",
    title: "Función de la animación durante la sesión",
    paragraphs: [
      "Las animaciones y los cambios de forma, color o posición de los elementos de la interfaz pueden acompañar a una sesión activa. Cumplen funciones informativas y artísticas dentro de la representación informática del Dispositivo.",
      "El movimiento de una imagen no implica por sí mismo el desplazamiento físico de objeto alguno. La ausencia de una animación perceptible tampoco indica que la sesión haya terminado si otros indicadores previstos señalan que continúa.",
    ],
  },
  {
    id: "3.3.4",
    title: "Mensajes informativos",
    paragraphs: [
      "Durante la sesión, la interfaz puede mostrar mensajes sobre el estado actual, la finalización prevista o las acciones disponibles. El contenido de dichos mensajes depende de la implementación vigente del programa.",
      "Un mensaje de carácter informativo no constituye una evaluación individual del Usuario, salvo que así se establezca expresamente. El Usuario no está obligado a interpretar cada frase de la interfaz como una conclusión sobre sus propias capacidades.",
    ],
  },
  {
    id: "3.3.5",
    title: "Límites de precisión de los indicadores visuales",
    paragraphs: [
      "Los indicadores visuales del estado pueden depender de la frecuencia de actualización de la pantalla, del rendimiento del equipo del Usuario y de otras circunstancias técnicas. Su finalidad es ofrecer una representación accesible del proceso, no certificar metrológicamente cada instante.",
      "En caso de discrepancia entre la animación y el estado real del programa, prevalece el estado de la sesión correctamente determinado. La apariencia de la interfaz no crea un tiempo distinto del tiempo de funcionamiento del programa.",
    ],
  },
  {
    id: "3.4.1",
    title: "Posibilidad de distracción",
    paragraphs: [
      "Se considera distracción el desplazamiento temporal de la atención del Usuario desde el objeto elegido hacia otro objeto, acontecimiento o pensamiento. La distracción puede producirse con independencia del estado del Dispositivo y sin alterar el temporizador mostrado.",
      "El mero hecho de distraerse no anula una activación previamente realizada. La cuestión de la calidad de la concentración no sustituye a la cuestión de la finalización técnica de la sesión.",
    ],
  },
  {
    id: "3.4.2",
    title: "Retorno al objeto elegido",
    paragraphs: [
      "Tras una distracción, el Usuario puede recuperar por sí mismo la orientación de su atención dentro del intervalo que sigue en curso. Para ello no es necesario aceptar de nuevo el Acuerdo.",
      "Si el Usuario no advirtió el momento en que se distrajo, la falta de una hora exacta de inicio no impide seguir utilizando la interfaz. La Empresa no está obligada a determinar una duración de la distracción que el propio Usuario desconoce.",
    ],
  },
  {
    id: "3.4.3",
    title: "Estímulos distractores externos",
    paragraphs: [
      "Los sonidos, las notificaciones, los movimientos de otras personas y otras circunstancias externas pueden influir en la percepción de la sesión. La presencia de tales estímulos no implica que se haya modificado la secuencia del programa.",
      "El Usuario decide por sí mismo si debe eliminar el estímulo, ignorarlo o interrumpir su propia actividad. La interfaz no garantiza la creación de un entorno externo libre de interferencias.",
    ],
  },
  {
    id: "3.4.4",
    title: "Actividad paralela",
    paragraphs: [
      "El Usuario puede realizar durante la sesión actividades que no estén directamente relacionadas con la interfaz. Su compatibilidad con el objetivo personal de concentración la determina el Usuario atendiendo a la naturaleza de la actividad.",
      "La existencia de varias pestañas, aplicaciones u objetos de atención abiertos no constituye una prueba automática de incumplimiento de las condiciones técnicas de la sesión. La Empresa no ejerce un control exhaustivo sobre dicha actividad.",
    ],
  },
  {
    id: "3.4.5",
    title: "Ausencia de sanciones por distracción",
    paragraphs: [
      "Si la interfaz vigente no contempla un mecanismo específico para registrar distracciones, estas no generan por sí mismas multas técnicas, sanciones ni puntos negativos. Las suposiciones no verificadas sobre una distracción no pueden sustituir los datos de dicho mecanismo.",
      "El Usuario no está obligado a demostrar que mantuvo la atención de forma ininterrumpida únicamente para que se reconozca la finalización del temporizador. La evaluación de la eficacia sigue siendo una cuestión independiente.",
    ],
  },
  {
    id: "3.5.1",
    title: "Concepto de suspensión",
    paragraphs: [
      "Se considera suspensión la transición temporal, prevista por el programa, del estado activo a un estado de espera con posibilidad de reanudación posterior. Si la interfaz carece de ese modo, el mero deseo del Usuario de detener el tiempo no produce una suspensión.",
      "Cambiar a otra pestaña o dejar de mirar la pantalla no equivale necesariamente a suspender la sesión. Las consecuencias dependen de la implementación efectiva del mecanismo informático.",
    ],
  },
  {
    id: "3.5.2",
    title: "Reanudación después de una pausa",
    paragraphs: [
      "Si la interfaz admite pausas, la reanudación se efectúa mediante la acción prevista del Usuario. La duración del intervalo restante la determina el programa teniendo en cuenta el estado conservado.",
      "Iniciar de nuevo en lugar de reanudar puede dar lugar a una nueva sesión si así funciona la interfaz. El Usuario no puede presumir que ambas acciones son equivalentes sin comprobar su resultado técnico.",
    ],
  },
  {
    id: "3.5.3",
    title: "Finalización anticipada de la sesión",
    paragraphs: [
      "Se considera finalización anticipada la terminación de una sesión activa antes de que transcurra el intervalo establecido, mediante una acción prevista o como consecuencia de la pérdida efectiva de la posibilidad de continuar. Dicha finalización se distingue de la conclusión normal del temporizador.",
      "Las cuestiones relativas a la interrupción del acceso y otras consecuencias se rigen también por el apartado 14.2.2. Esta remisión no significa que cerrar una pestaña ponga fin automáticamente a todas las relaciones entre la Empresa y el Usuario.",
    ],
  },
  {
    id: "3.5.4",
    title: "Cierre de la página durante la sesión",
    paragraphs: [
      "Cerrar la página, recargar el navegador o perder la conexión puede afectar a la visualización y conservación del estado actual. Las consecuencias dependen del funcionamiento real del programa y no presuponen la recuperación obligatoria de un intervalo inacabado.",
      "Si al regresar el Usuario no ve la sesión anterior, ello no demuestra por sí solo que la sesión no hubiera comenzado antes de cerrar la página. Tampoco confirma que haya finalizado correctamente.",
    ],
  },
  {
    id: "3.5.5",
    title: "Interrupción ajena a la voluntad del Usuario",
    paragraphs: [
      "La sesión puede interrumpirse por circunstancias técnicas independientes de la voluntad del Usuario, incluidos un fallo del navegador o un corte de alimentación del dispositivo. Tal acontecimiento debe distinguirse de la renuncia voluntaria a continuar la interacción.",
      "La Empresa evalúa las consecuencias técnicas de la interrupción según la información disponible. La falta de datos acreditativos no debe sustituirse automáticamente por la suposición de una conducta culpable del Usuario.",
    ],
  },
  {
    id: "3.6.1",
    title: "Finalización normal del intervalo",
    paragraphs: [
      "Se considera finalización normal la llegada al punto final establecido del cómputo de tres minutos conforme a la lógica del programa. La interfaz puede señalar ese momento mediante un cambio de estado, un mensaje u otra señal visual.",
      "La finalización del intervalo confirma que ha concluido la secuencia prevista, pero no acredita la obtención de un resultado intelectual concreto. El Usuario puede evaluar el resultado por separado.",
    ],
  },
  {
    id: "3.6.2",
    title: "Notificación de finalización",
    paragraphs: [
      "El mensaje de finalización de la sesión tiene por objeto informar al Usuario de un acontecimiento técnico. Su forma puede variar según la versión de la interfaz y el dispositivo utilizado.",
      "Si el Usuario no advierte la notificación, ello no implica que el intervalo agotado continúe automáticamente. El momento de finalización lo determina el estado del programa, no el momento en que se lee el mensaje.",
    ],
  },
  {
    id: "3.6.3",
    title: "Acciones posteriores a la finalización",
    paragraphs: [
      "Una vez finalizada la sesión, el Usuario puede cerrar la interfaz, continuar su propia actividad o iniciar otra sesión si esa posibilidad está disponible. Ninguna de estas acciones se considera una continuación obligatoria del intervalo ya concluido.",
      "Dejar la página abierta después de finalizar no significa que el modo activo siga utilizándose de forma continua. El tiempo de permanencia posterior en la página no se añade automáticamente a la sesión concluida.",
    ],
  },
  {
    id: "3.6.4",
    title: "Nuevo inicio",
    paragraphs: [
      "Una nueva sesión comienza tras una acción de inicio independiente y prevista, siempre que la interfaz permita volver a activarla. El intervalo anterior ya concluido no se considera inacabado por el mero hecho de que el Usuario decida iniciar el siguiente.",
      "Las sesiones sucesivas pueden percibirse como una práctica personal única, pero técnicamente siguen siendo intervalos independientes. Esa percepción no modifica su procedimiento de registro, si este está previsto.",
    ],
  },
  {
    id: "3.6.5",
    title: "Ausencia de informe obligatorio",
    paragraphs: [
      "Si la interfaz no contempla un formulario específico de informes, el Usuario no está obligado a describir sus pensamientos, enumerar sus distracciones ni confirmar su propia productividad después de cada sesión. La finalización del temporizador no depende de la elaboración de un informe escrito.",
      "La evaluación voluntaria de los resultados sigue siendo una acción personal del Usuario. La Empresa no considera la ausencia de informe una prueba de inutilidad de la sesión.",
    ],
  },
  {
    id: "3.7.1",
    title: "Repetición de las sesiones de concentración",
    paragraphs: [
      "El Usuario puede realizar varias sesiones mientras la interfaz esté disponible. Cada nuevo inicio se considera atendiendo a su propio momento de comienzo y finalización.",
      "El número de sesiones no caracteriza por sí solo la calidad de la atención. Varios intervalos breves no forman automáticamente una única sesión continua de mayor duración.",
    ],
  },
  {
    id: "3.7.2",
    title: "Intervalos entre sesiones",
    paragraphs: [
      "El tiempo comprendido entre la finalización de una sesión y el comienzo de la siguiente no forma parte del tiempo activo de ninguna de ellas. Durante ese intervalo, el Usuario puede descansar, ocuparse de otras cosas o mantener la atención en el objeto anterior.",
      "La ausencia de acciones entre sesiones no crea un modo independiente del Dispositivo. La continuidad personal de la concentración no exige la continuidad del cómputo del programa.",
    ],
  },
  {
    id: "3.7.3",
    title: "Resultado acumulado hipotético",
    paragraphs: [
      "Si la interfaz muestra el número de sesiones realizadas u otros indicadores resumidos, estos describen los acontecimientos informáticos registrados dentro de los datos disponibles. Tales indicadores no constituyen una medición directa de la concentración adquirida.",
      "La suma de las duraciones de los intervalos es admisible como operación aritmética, pero no acredita un incremento equivalente de la capacidad de atención. El Usuario no está obligado a atribuir un significado psicológico a la cifra resultante.",
    ],
  },
  {
    id: "3.7.4",
    title: "Comparabilidad de distintas sesiones",
    paragraphs: [
      "Las sesiones pueden diferir en las condiciones externas, la tarea elegida y las sensaciones subjetivas del Usuario. Una duración idéntica no implica una dificultad igual ni la misma utilidad.",
      "La comparación de varias sesiones está permitida para fines personales; sin embargo, sus resultados no constituyen una clasificación universal de usuarios ni acreditan la superioridad de una persona sobre otra.",
    ],
  },
  {
    id: "3.8.1",
    title: "Sesión sin objetivo establecido",
    paragraphs: [
      "El Usuario puede iniciar una sesión sin haber formulado previamente una tarea concreta. La ausencia de un objetivo formulado no impide el funcionamiento del temporizador si la interfaz no exige indicarlo obligatoriamente.",
      "Dicha sesión no se considera técnicamente inexistente únicamente por la indefinición de las intenciones. La valoración de su utilidad personal corresponde al Usuario.",
    ],
  },
  {
    id: "3.8.2",
    title: "Sesión acompañada de dudas",
    paragraphs: [
      "Las dudas sobre la necesidad de la sesión, su eficacia o la conveniencia del momento elegido no anulan el significado técnico de la activación realizada. El Usuario puede reconsiderar sus propias expectativas mientras funciona la interfaz.",
      "La Empresa no considera el desacuerdo interno del Usuario con la supuesta utilidad de la sesión como una orden de cancelación. Para modificar el estado del programa se requiere una acción prevista o que se produzca el acontecimiento técnico correspondiente.",
    ],
  },
  {
    id: "3.8.3",
    title: "Sesión sin efecto subjetivamente perceptible",
    paragraphs: [
      "Al finalizar la sesión, el Usuario puede no apreciar cambios en su atención, estado de ánimo o rendimiento. La ausencia de un efecto perceptible no equivale a la inexistencia del propio intervalo informático.",
      "La Empresa no garantiza que se produzca una experiencia determinada al terminar el cómputo. El Usuario puede considerar la sesión inútil para sí mismo sin tener que negar que se haya realizado técnicamente.",
    ],
  },
  {
    id: "3.8.4",
    title: "Distinción final entre procedimiento y resultado",
    paragraphs: [
      "A efectos de esta sección, la activación, el desarrollo y la finalización de la sesión forman parte del procedimiento establecido por la interfaz, mientras que la concentración y la utilidad personal son circunstancias que se evalúan por separado. Estas categorías no deben sustituirse entre sí.",
      "Una sesión concluida confirma la ejecución de la secuencia temporal prevista dentro de los datos técnicos disponibles. No certifica el éxito de un pensamiento, la ausencia de distracciones ni la consecución de un objetivo que el Usuario quizá ni siquiera llegó a formular.",
    ],
  },
] satisfies AgreementSection;
