import type { AgreementSection } from "../../types";

export const section03 = [
  {
    id: "3.1.1",
    title: "Conceito de ativação",
    paragraphs: [
      "Considera-se ativação do Dispositivo a ação do Usuário prevista na interface destinada a iniciar uma sessão de concentração. Para os fins do Acordo, a ativação significa o envio de um comando ao mecanismo de software, e não o acionamento de um aparelho físico independente.",
      "A intenção de iniciar uma sessão sem realizar a ação correspondente não constitui ativação técnica. Essa intenção, contudo, pode preceder a ativação e não exige confirmação separada da Empresa.",
    ],
  },
  {
    id: "3.1.2",
    title: "Condições de disponibilidade da ativação",
    paragraphs: [
      "A possibilidade de ativação depende da disponibilidade efetiva da interface, do estado dos elementos de software e da realização das ações preliminares necessárias. A presença visual de um botão, por si só, não garante o início bem-sucedido da sessão.",
      "Se o comando não for processado, o Usuário poderá repetir a ação após verificar o estado da página. Uma tentativa malsucedida não cria a obrigação de fingir que a sessão começou.",
    ],
  },
  {
    id: "3.1.3",
    title: "Unicidade do comando de início",
    paragraphs: [
      "Uma ação de início devidamente realizada constitui uma tentativa de iniciar uma sessão. Um novo clique efetuado antes de a interface responder será avaliado conforme o comportamento efetivo do mecanismo de software.",
      "A Empresa não é obrigada a reconhecer cada clique adicional como uma sessão distinta se a interface não previr tal resultado. O número de cliques e o número de sessões efetivamente realizadas podem ser diferentes.",
    ],
  },
  {
    id: "3.1.4",
    title: "Momento de início da contagem",
    paragraphs: [
      "Considera-se início da contagem o momento em que a interface coloca a sessão no estado ativo e começa a contabilizar o intervalo previsto. O tempo de espera preliminar, de carregamento da página ou de procura pelo botão não integra a duração da sessão.",
      "Se a indicação visual do início sofrer atraso, prevalecerão as informações de que a própria interface dispõe. A percepção subjetiva do Usuário de que a sessão começou antes não altera automaticamente o momento estabelecido pelo programa.",
    ],
  },
  {
    id: "3.1.5",
    title: "Ativação sem certeza quanto ao resultado",
    paragraphs: [
      "O Usuário pode iniciar uma sessão sem ter certeza de que alcançará a concentração. O consentimento para iniciar significa concordância com a execução da sequência de ações prevista, mas não confirma uma futura melhora da atenção.",
      "A falta de certeza, a dúvida sobre a utilidade do Dispositivo ou o ceticismo em relação ao seu nome não impedem a ativação. Tais circunstâncias não exigem refutação prévia.",
    ],
  },
  {
    id: "3.2.1",
    title: "Procedimento geral de realização da sessão",
    paragraphs: [
      "A sessão compreende o início, o transcurso do intervalo estabelecido e o encerramento, apresentados pelos recursos da interface. A sequência é de natureza computacional e não exige um observador externo que ateste cada etapa.",
      "O Usuário pode acompanhar a sessão com ações próprias ou permanecer imóvel. A presença ou ausência dessas ações não altera automaticamente a sequência dos estados técnicos.",
    ],
  },
  {
    id: "3.2.2",
    title: "Relação entre a sessão e as ações do Usuário",
    paragraphs: [
      "A sessão técnica e a atividade efetiva do Usuário constituem circunstâncias distintas. O acionamento do cronômetro não comprova que o Usuário manteve a atenção em determinado objeto durante todo o intervalo.",
      "Na avaliação do comportamento do Usuário durante a sessão, aplicam-se também as disposições da cláusula 4.6.3. Essa remissão não amplia as capacidades da interface nem transforma a observação do cronômetro em forma obrigatória de concentração.",
    ],
  },
  {
    id: "3.2.3",
    title: "Duração do intervalo estabelecido",
    paragraphs: [
      "A duração regulamentar de uma sessão de concentração na interface é de três minutos. Esse período caracteriza o modo de funcionamento do programa e não constitui recomendação universal quanto à duração do trabalho mental.",
      "O Usuário pode continuar sua própria atividade após o término do intervalo. Essa continuidade não implica prorrogação automática da sessão encerrada.",
    ],
  },
  {
    id: "3.2.4",
    title: "Continuidade do processo exibido",
    paragraphs: [
      "Em condições normais de funcionamento, a interface apresenta o transcurso da sessão como um processo sequencial. Alterações de valores numéricos, gráficos ou animações servem para representar o estado do programa.",
      "A continuidade da exibição visual não comprova a continuidade da atividade mental do Usuário. Uma distração breve pode passar despercebida pela interface e não está sujeita a registro técnico automático.",
    ],
  },
  {
    id: "3.2.5",
    title: "Ausência de atividade externa obrigatória",
    paragraphs: [
      "Durante a sessão, o Usuário não é obrigado a realizar ações físicas adicionais, salvo quando expressamente previstas na interface. Observar, ler, refletir e permanecer inativo podem acompanhar o mesmo modo de funcionamento do programa.",
      "A Empresa não estabelece a presunção de que imobilidade equivale a concentração. Da mesma forma, o movimento do Usuário não é considerado prova incontestável de ausência de atenção.",
    ],
  },
  {
    id: "3.3.1",
    title: "Exibição do tempo na interface",
    paragraphs: [
      "O tempo restante ou decorrido pode ser apresentado por números, elementos gráficos e outros recursos visuais. Essa apresentação destina-se a orientar o Usuário durante a sessão.",
      "O valor exibido não constitui medição independente do estado psicológico. As informações sobre o tempo não devem ser interpretadas como informações sobre a quantidade de concentração acumulada.",
    ],
  },
  {
    id: "3.3.2",
    title: "Diferença entre tempo e percepção subjetiva",
    paragraphs: [
      "Um intervalo de três minutos pode ser percebido pelo Usuário como curto, longo ou indeterminado. A avaliação subjetiva da velocidade da passagem do tempo não afeta a duração estabelecida do modo de funcionamento do programa.",
      "Se o Usuário tiver a impressão de que o tempo parou ou passou mais rapidamente do que o esperado, essa sensação não será considerada falha técnica sem indícios objetivos adicionais.",
    ],
  },
  {
    id: "3.3.3",
    title: "Significado da animação durante a sessão",
    paragraphs: [
      "Animações e alterações de forma, cor ou posição dos elementos da interface podem acompanhar uma sessão ativa. Elas desempenham funções informativas e artísticas no âmbito da representação digital do Dispositivo.",
      "O movimento da imagem, por si só, não implica deslocamento físico de qualquer objeto. A ausência de animação perceptível tampouco indica o encerramento da sessão se outros sinais previstos apontarem para sua continuidade.",
    ],
  },
  {
    id: "3.3.4",
    title: "Mensagens informativas",
    paragraphs: [
      "Durante a sessão, a interface pode exibir mensagens sobre o estado atual, o encerramento esperado ou as ações disponíveis. O conteúdo dessas mensagens é determinado pela implementação vigente do programa.",
      "Uma mensagem de caráter informativo não constitui avaliação individual do Usuário, salvo disposição expressa em contrário. O Usuário não é obrigado a interpretar cada frase da interface como uma conclusão sobre suas próprias capacidades.",
    ],
  },
  {
    id: "3.3.5",
    title: "Limites de precisão dos indicadores visuais",
    paragraphs: [
      "Os indicadores visuais de estado podem depender da taxa de atualização da tela, do desempenho do equipamento do Usuário e de outras circunstâncias técnicas. Sua finalidade é apresentar o processo de maneira acessível, e não certificar metrologicamente cada instante.",
      "Em caso de divergência entre a animação e o estado efetivo do programa, prevalecerá o estado da sessão corretamente apurado. A aparência da interface não cria um tempo separado daquele em que o programa funciona.",
    ],
  },
  {
    id: "3.4.1",
    title: "Possibilidade de distração",
    paragraphs: [
      "Considera-se distração o deslocamento temporário da atenção do Usuário do objeto escolhido para outro objeto, acontecimento ou pensamento. A distração pode ocorrer independentemente do estado do Dispositivo e sem alteração do cronômetro exibido.",
      "A ocorrência de distração não anula uma ativação anteriormente realizada. A questão da qualidade da concentração não substitui a questão do encerramento técnico da sessão.",
    ],
  },
  {
    id: "3.4.2",
    title: "Retorno ao objeto escolhido",
    paragraphs: [
      "Após uma distração, o Usuário pode restabelecer por iniciativa própria o direcionamento da atenção durante o intervalo ainda em curso. Esse retorno não exige nova aceitação do Acordo.",
      "Se o Usuário não perceber o momento da distração, a ausência de um horário exato de início não impede a continuidade do uso da interface. A Empresa não é obrigada a determinar uma duração da distração desconhecida pelo próprio Usuário.",
    ],
  },
  {
    id: "3.4.3",
    title: "Estímulos externos",
    paragraphs: [
      "Sons, notificações, movimentos de pessoas próximas e outras circunstâncias externas podem influenciar a percepção da sessão. A presença desses estímulos não significa que a sequência do programa tenha sido alterada.",
      "Cabe ao Usuário decidir se deve eliminar o estímulo, ignorá-lo ou interromper sua própria atividade. A interface não garante a criação de um ambiente externo livre de interferências.",
    ],
  },
  {
    id: "3.4.4",
    title: "Atividades paralelas",
    paragraphs: [
      "O Usuário pode realizar, simultaneamente à sessão, ações que não estejam diretamente relacionadas à interface. A compatibilidade dessas ações com seu objetivo pessoal de concentração será determinada pelo Usuário conforme a natureza da atividade.",
      "A existência de várias abas, aplicativos ou objetos de atenção abertos não constitui prova automática de violação das condições técnicas da sessão. A Empresa não exerce controle abrangente sobre essas atividades.",
    ],
  },
  {
    id: "3.4.5",
    title: "Ausência de penalidade por distração",
    paragraphs: [
      "Se a interface vigente não dispuser de mecanismo específico para registrar distrações, estas não gerarão multas técnicas, sanções ou pontos negativos autônomos. Suposições não comprovadas sobre distrações não podem substituir os dados desse mecanismo.",
      "O Usuário não é obrigado a comprovar a continuidade da atenção apenas para que se reconheça o encerramento do cronômetro. A avaliação da eficácia permanece uma questão separada.",
    ],
  },
  {
    id: "3.5.1",
    title: "Conceito de pausa",
    paragraphs: [
      "Considera-se pausa a transição temporária, prevista pelo programa, do estado ativo para um estado de espera, com possibilidade de retomada posterior. Se esse modo não existir na interface, o mero desejo do Usuário de parar o tempo não cria uma pausa.",
      "Mudar para outra aba ou deixar de olhar para a tela não equivale necessariamente a uma pausa. As consequências dependem da implementação efetiva do mecanismo de software.",
    ],
  },
  {
    id: "3.5.2",
    title: "Retomada após uma pausa",
    paragraphs: [
      "Se a interface oferecer suporte a pausas, a retomada ocorrerá mediante a ação prevista do Usuário. A duração do intervalo restante será determinada pelo programa considerando o estado preservado.",
      "Reiniciar em vez de retomar pode constituir uma nova sessão, conforme o funcionamento da interface. O Usuário não pode presumir que essas ações sejam idênticas sem confirmação de seu resultado técnico.",
    ],
  },
  {
    id: "3.5.3",
    title: "Encerramento antecipado da sessão",
    paragraphs: [
      "Considera-se encerramento antecipado a conclusão de uma sessão ativa antes do término do intervalo estabelecido, mediante ação prevista ou em decorrência da perda efetiva da possibilidade de continuidade. Esse encerramento difere da conclusão normal pelo cronômetro.",
      "As questões relativas ao encerramento do acesso e a outras consequências também são regidas pela cláusula 14.2.2. Essa remissão não significa que o fechamento de qualquer aba encerre automaticamente todas as relações entre a Empresa e o Usuário.",
    ],
  },
  {
    id: "3.5.4",
    title: "Fechamento da página durante a sessão",
    paragraphs: [
      "Fechar a página, recarregar o navegador ou perder a conexão pode afetar a exibição e a preservação do estado atual. As consequências dependem do funcionamento efetivo do programa e não pressupõem a recuperação obrigatória de um intervalo inacabado.",
      "Se, ao retornar, o Usuário não visualizar a sessão anterior, isso, por si só, não comprova que ela não havia começado antes do fechamento da página. Tampouco confirma sua conclusão bem-sucedida.",
    ],
  },
  {
    id: "3.5.5",
    title: "Interrupção sem intenção do Usuário",
    paragraphs: [
      "Uma sessão pode ser interrompida por circunstâncias técnicas independentes da intenção do Usuário, incluindo falha do navegador ou interrupção do fornecimento de energia ao equipamento. Esse evento deve ser distinguido da desistência voluntária de continuar a interação.",
      "A Empresa avaliará as consequências técnicas da interrupção com base nas informações disponíveis. A ausência de dados comprobatórios não deve ser automaticamente substituída pela presunção de conduta culposa do Usuário.",
    ],
  },
  {
    id: "3.6.1",
    title: "Conclusão normal do intervalo",
    paragraphs: [
      "Considera-se conclusão normal o alcance do ponto final estabelecido da contagem de três minutos, conforme a lógica do programa. A interface pode indicar esse momento por uma mudança de estado, mensagem ou outro sinal visual.",
      "O término do intervalo confirma o encerramento da sequência prevista, mas não estabelece que determinado resultado intelectual tenha sido alcançado. O Usuário pode avaliar o resultado separadamente.",
    ],
  },
  {
    id: "3.6.2",
    title: "Notificação de encerramento",
    paragraphs: [
      "A mensagem de término da sessão destina-se a informar o Usuário sobre um evento técnico. O formato da mensagem pode variar conforme a versão da interface e o dispositivo utilizado.",
      "Se o Usuário não perceber a notificação, isso não implica a continuidade automática do intervalo já encerrado. O momento do término é determinado pelo estado do programa, e não pelo momento em que a mensagem é lida.",
    ],
  },
  {
    id: "3.6.3",
    title: "Ações após o encerramento",
    paragraphs: [
      "Após o encerramento, o Usuário pode fechar a interface, continuar sua própria atividade ou iniciar uma nova sessão, caso essa possibilidade esteja disponível. Nenhuma dessas ações é considerada continuação obrigatória do intervalo já concluído.",
      "Manter a página aberta após o encerramento não significa utilização contínua do modo ativo. O tempo de permanência posterior na página não é automaticamente acrescentado à sessão concluída.",
    ],
  },
  {
    id: "3.6.4",
    title: "Novo início",
    paragraphs: [
      "Uma nova sessão surge após uma ação de início distinta e prevista, caso a interface permita nova ativação. O intervalo anterior, já concluído, não passa a ser considerado inacabado apenas porque o Usuário decidiu iniciar o seguinte.",
      "Sessões consecutivas podem ser percebidas como uma única prática pessoal, mas tecnicamente continuam sendo intervalos independentes. Essa percepção não altera o procedimento de registro, caso haja registro.",
    ],
  },
  {
    id: "3.6.5",
    title: "Ausência de relatório obrigatório",
    paragraphs: [
      "Se a interface não oferecer um formulário específico de relatório, o Usuário não é obrigado a descrever seus pensamentos, enumerar distrações ou confirmar sua produtividade após cada sessão. O encerramento do cronômetro não depende da elaboração de um parecer escrito.",
      "A avaliação voluntária dos resultados permanece uma ação pessoal do Usuário. A Empresa não considera a ausência de relatório como prova da inutilidade da sessão.",
    ],
  },
  {
    id: "3.7.1",
    title: "Repetição de sessões de concentração",
    paragraphs: [
      "O Usuário pode realizar várias sessões enquanto a interface estiver disponível. Cada novo início será considerado segundo seus próprios momentos de início e encerramento.",
      "O número de sessões, por si só, não caracteriza a qualidade da atenção. Vários intervalos curtos não constituem automaticamente uma única sessão contínua de maior duração.",
    ],
  },
  {
    id: "3.7.2",
    title: "Intervalos entre sessões",
    paragraphs: [
      "O período entre o encerramento de uma sessão e o início da seguinte não integra o tempo ativo de nenhuma delas. Nesse período, o Usuário pode descansar, dedicar-se a outras atividades ou manter a atenção no objeto anterior.",
      "A ausência de ações entre sessões não cria um modo separado do Dispositivo. A continuidade pessoal da concentração não exige continuidade da contagem do programa.",
    ],
  },
  {
    id: "3.7.3",
    title: "Resultado acumulado hipotético",
    paragraphs: [
      "Se a interface exibir o número de sessões realizadas ou outros indicadores consolidados, eles caracterizarão os eventos registrados pelo programa dentro dos limites dos dados disponíveis. Esses indicadores não constituem medição direta da concentração adquirida.",
      "A soma das durações dos intervalos é admissível como operação aritmética, mas não comprova crescimento equivalente da capacidade de atenção. O Usuário não é obrigado a atribuir significado psicológico ao número resultante.",
    ],
  },
  {
    id: "3.7.4",
    title: "Comparabilidade de diferentes sessões",
    paragraphs: [
      "As sessões podem diferir quanto às condições externas, à tarefa escolhida e às sensações subjetivas do Usuário. Duração igual não significa dificuldade igual nem utilidade idêntica.",
      "A comparação entre várias sessões é permitida para fins pessoais, mas seus resultados não constituem uma classificação universal dos usuários nem comprovam a superioridade de uma pessoa sobre outra.",
    ],
  },
  {
    id: "3.8.1",
    title: "Sessão sem objetivo definido",
    paragraphs: [
      "O Usuário pode iniciar uma sessão sem ter formulado previamente uma tarefa específica. A ausência de um objetivo formulado não impede o funcionamento do cronômetro se a interface não exigir sua indicação.",
      "Essa sessão não será considerada tecnicamente inexistente apenas em razão da indefinição das intenções. A avaliação de sua utilidade pessoal permanece a cargo do Usuário.",
    ],
  },
  {
    id: "3.8.2",
    title: "Sessão acompanhada de dúvidas",
    paragraphs: [
      "A dúvida sobre a necessidade da sessão, sua eficácia ou a adequação do momento escolhido não anula o significado técnico da ativação realizada. O Usuário pode rever suas próprias expectativas durante o funcionamento da interface.",
      "A Empresa não considera a discordância interna do Usuário quanto ao suposto benefício da sessão como um comando de cancelamento. Para alterar o estado do programa, é necessária a ação prevista ou a ocorrência do evento técnico correspondente.",
    ],
  },
  {
    id: "3.8.3",
    title: "Sessão sem efeito subjetivamente perceptível",
    paragraphs: [
      "Ao término da sessão, o Usuário pode não perceber alterações na atenção, no humor ou no desempenho de suas atividades. A ausência de efeito perceptível não equivale à inexistência do próprio intervalo do programa.",
      "A Empresa não garante o surgimento de determinada experiência ao final da contagem. O Usuário pode considerar a sessão inútil para si sem precisar negar que ela ocorreu tecnicamente.",
    ],
  },
  {
    id: "3.8.4",
    title: "Distinção final entre procedimento e resultado",
    paragraphs: [
      "Para os fins desta seção, a ativação, o transcurso e o encerramento da sessão integram o procedimento estabelecido pela interface, enquanto a concentração e a utilidade pessoal constituem circunstâncias avaliadas separadamente. Essas categorias não devem substituir umas às outras.",
      "Uma sessão concluída confirma a execução da sequência temporal prevista, dentro dos limites das informações técnicas disponíveis. Ela não atesta o êxito de um pensamento, a ausência de distrações ou o alcance de um objetivo que o Usuário talvez nem tenha formulado.",
    ],
  },
] satisfies AgreementSection;
