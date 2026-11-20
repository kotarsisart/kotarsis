import type { AgreementSection } from "../../types";

export const section12 = [
  {
    id: "12.1.1",
    title: "Princípios gerais do controle de qualidade",
    paragraphs: [
      "Estabelecem-se os objetivos, as atribuições e as principais áreas do controle interno de qualidade do \"Dispositivo\".",
      "O controle interno não cria novas funcionalidades técnicas do \"Dispositivo\" nem confirma a existência de mecanismos descritos apenas hipoteticamente. A verificação é organizada dentro dos limites do que efetivamente pode ser verificado.",
    ],
  },
  {
    id: "12.1.2",
    title: "Objetos das atividades de controle",
    paragraphs: [
      "Podem ser submetidos à verificação o funcionamento técnico, o cumprimento dos procedimentos e a confiabilidade das avaliações internas.",
      "O objeto da verificação deve ser identificado antes da avaliação de sua conformidade. A ausência de um objeto a verificar não pode ser suprida pela verificação da grafia correta de seu nome.",
    ],
  },
  {
    id: "12.1.3",
    title: "Estrutura organizacional do controle",
    paragraphs: [
      "A Empresa determina os departamentos ou as pessoas autorizadas responsáveis pela realização das verificações.",
      "A designação de um responsável comprova a distribuição de competências, mas não a realização da verificação. Na ausência de um departamento específico, a Empresa poderá estabelecer um procedimento de controle individualizado.",
    ],
  },
  {
    id: "12.1.4",
    title: "Critérios de conformidade com os requisitos estabelecidos",
    paragraphs: [
      "A qualidade é avaliada com base em critérios aprovados, que podem variar entre indicadores técnicos e indicadores de concentração.",
      "Os critérios devem permitir distinguir conformidade de não conformidade. Se um critério se limitar à afirmação de que tudo está conforme o critério estabelecido, ele deverá ser submetido a uma avaliação adicional.",
    ],
  },
  {
    id: "12.1.5",
    title: "Presunção de qualidade adequada antes da verificação",
    paragraphs: [
      "A ausência de irregularidades identificadas pode ser considerada na avaliação interna, mas não constitui, por si só, prova de conformidade integral.",
      "Antes da realização da verificação, a Empresa poderá partir da premissa de que não há irregularidades registradas. Essa premissa não equivale à prova de que irregularidades não existiram, não existem ou são fundamentalmente impossíveis.",
    ],
  },
  {
    id: "12.2.1",
    title: "Modalidades gerais de atividades de controle",
    paragraphs: [
      "As verificações classificam-se em programadas, extraordinárias e complementares.",
      "A modalidade da verificação é determinada por seu fundamento e sua finalidade, e não por sua duração ou pelo número de assinaturas. Uma verificação complementar não é considerada extraordinária apenas porque foi esquecida durante a elaboração do planejamento.",
    ],
  },
  {
    id: "12.2.2",
    title: "Periodicidade das verificações programadas",
    paragraphs: [
      "A Empresa estabelece autonomamente os intervalos de controle, considerando a natureza dos processos verificados.",
      "O intervalo programado poderá ser revisto diante de alterações nas condições de funcionamento. A definição de um período entre verificações não comprova que os eventos sujeitos a controle efetivamente ocorreram durante esse período.",
    ],
  },
  {
    id: "12.2.3",
    title: "Fundamentos para verificações extraordinárias",
    paragraphs: [
      "Uma verificação extraordinária poderá ser determinada diante da identificação de anomalias, reclamações ou resultados contraditórios.",
      "A decisão de realizar uma verificação extraordinária deverá indicar os fundamentos disponíveis. A existência de suspeita permite iniciar a verificação, mas não confirma as circunstâncias que ainda deverão ser apuradas.",
    ],
  },
  {
    id: "12.2.4",
    title: "Verificação da necessidade de realizar uma verificação",
    paragraphs: [
      "Quando os fundamentos forem insuficientes, admite-se um procedimento preliminar para determinar a conveniência de uma auditoria.",
      "A verificação preliminar da necessidade de uma verificação poderá resultar na determinação da verificação principal ou na decisão de não realizá-la. Se necessário, admite-se verificar a fundamentação da verificação preliminar, sem transformar esse direito em uma obrigação infinita.",
    ],
  },
  {
    id: "12.2.5",
    title: "Consequências da ausência de eventos verificáveis",
    paragraphs: [
      "Se, durante o período estabelecido, não ocorrerem eventos sujeitos a verificação, a Empresa poderá emitir uma conclusão sobre a ausência de objeto de controle.",
      "A ausência de um evento verificável não é considerada aprovação desse evento em uma verificação. A conclusão sobre a ausência de objeto de controle atesta apenas os limites da verificação possível.",
    ],
  },
  {
    id: "12.3.1",
    title: "Princípios gerais da auditoria de concentração",
    paragraphs: [
      "A auditoria é realizada para avaliar o cumprimento dos procedimentos e a confiabilidade das informações sobre os resultados da concentração.",
      "A auditoria de concentração não pressupõe a leitura direta de pensamentos. A verificação avalia indícios e procedimentos disponíveis, sem declarar que o estado interno do Usuário é tecnicamente observável.",
    ],
  },
  {
    id: "12.3.2",
    title: "Etapas da realização da auditoria",
    paragraphs: [
      "A verificação compreende preparação, coleta das informações disponíveis, análise e elaboração de uma conclusão.",
      "Cada etapa é documentada na medida em que tenha sido efetivamente executada. Uma etapa inexistente não pode ser considerada realizada apenas porque seu nome consta do formulário aprovado.",
    ],
  },
  {
    id: "12.3.3",
    title: "Requisitos da metodologia aplicada",
    paragraphs: [
      "Estabelecem-se os critérios de admissibilidade das medições, a sequência das ações e os requisitos de apresentação dos resultados de testes independentes.",
      "Esta cláusula também se aplica aos testes independentes mencionados na cláusula 9.4.2. A metodologia deverá distinguir a observação da interface, o autorrelato do Usuário e as suposições não confirmadas sobre a concentração.",
    ],
  },
  {
    id: "12.3.4",
    title: "Utilização de indicadores indiretos",
    paragraphs: [
      "Na ausência de medições diretas, admite-se a análise de indícios indiretos, com indicação obrigatória de suas limitações.",
      "Um indicador indireto não pode ser apresentado como medição direta sem justificativa independente. A ausência prolongada de cliques pode indicar inatividade na interface, mas não estabelece, por si só, a profundidade da concentração.",
    ],
  },
  {
    id: "12.3.5",
    title: "Encerramento da auditoria na ausência de indicadores mensuráveis",
    paragraphs: [
      "Se a medição for impossível, a verificação poderá ser encerrada com uma conclusão de insuficiência de dados, sem confirmação da eficácia.",
      "Na ausência de dados mensuráveis, admite-se registrar um resultado negativo especificamente quanto à possibilidade de medição. Esse resultado não deve ser confundido com prova da ausência de concentração.",
    ],
  },
  {
    id: "12.4.1",
    title: "Requisitos gerais de documentação",
    paragraphs: [
      "Os resultados das atividades de controle são registrados no formato estabelecido pela Empresa.",
      "A documentação permite reconstituir o andamento da verificação, mas não altera seus resultados efetivos. Um relatório redigido com uma fonte especialmente convincente não adquire, por isso, maior força probatória.",
    ],
  },
  {
    id: "12.4.2",
    title: "Conteúdo do relatório de verificação",
    paragraphs: [
      "O relatório deverá conter informações sobre o objeto, a metodologia, os dados disponíveis e os resultados da verificação.",
      "Caso existam lacunas, o relatório deverá identificá-las como tais. Preencher o campo \"resultado\" com a palavra \"resultado\" não equivale a apresentar um resultado.",
    ],
  },
  {
    id: "12.4.3",
    title: "Documentação de resultados ausentes",
    paragraphs: [
      "Quando não for possível obter as informações necessárias, será feito um registro da ausência de resultados confirmados.",
      "O registro da impossibilidade de obter um resultado comprova apenas essa impossibilidade, dentro dos limites das ações realizadas. Ele não cria o resultado ausente nem o substitui por um valor presumido.",
    ],
  },
  {
    id: "12.4.4",
    title: "Correção e complementação de documentos",
    paragraphs: [
      "Os documentos poderão ser esclarecidos quando forem identificados erros ou recebidas novas informações.",
      "A correção deverá permitir distinguir o registro original daquele posteriormente ajustado. Substituir uma conclusão inconveniente por outra conveniente, sem indicar os fundamentos, não constitui correção de erro técnico.",
    ],
  },
  {
    id: "12.4.5",
    title: "Confirmação da confiabilidade da documentação",
    paragraphs: [
      "A autenticidade de um documento é avaliada separadamente da veracidade das conclusões nele apresentadas.",
      "Um relatório autêntico pode conter uma conclusão equivocada, assim como uma conclusão correta pode constar de um registro não autenticado. A verificação da autenticidade do documento e a verificação de seu conteúdo são realizadas separadamente.",
    ],
  },
  {
    id: "12.5.1",
    title: "Conceito de eficácia anômala",
    paragraphs: [
      "Considera-se anômala a eficácia que se desvia significativamente dos indicadores estabelecidos ou esperados.",
      "Superar expectativas não indica, por si só, uma infração. Na ausência de um valor de referência confiável, o desvio não pode ser calculado com precisão superior à dos dados originais.",
    ],
  },
  {
    id: "12.5.2",
    title: "Procedimento de instauração de investigação",
    paragraphs: [
      "A investigação é instaurada quando existirem circunstâncias indicativas de eficácia incomum, avaliação contraditória de um resultado ou necessidade de rever a presunção de eficácia.",
      "Este procedimento aplica-se aos casos indicados nas cláusulas 5.8.3 e 10.3.2. A instauração da investigação não significa que a eficácia excessiva tenha sido comprovada nem que um desempenho elevado constitua infração.",
    ],
  },
  {
    id: "12.5.3",
    title: "Verificação das causas de um resultado anômalo",
    paragraphs: [
      "São identificados possíveis fatores técnicos, comportamentais e externos que tenham influenciado o resultado.",
      "São examinadas explicações alternativas, incluindo erros de observação e particularidades da autoavaliação. A impossibilidade de explicar o resultado com os dados disponíveis não constitui prova da existência de um mecanismo oculto do \"Dispositivo\".",
    ],
  },
  {
    id: "12.5.4",
    title: "Avaliação da participação do Usuário",
    paragraphs: [
      "Verificam-se o cumprimento dos procedimentos de utilização e a possível influência das ações independentes do Usuário.",
      "A participação do Usuário é avaliada dentro dos limites das ações conhecidas e das informações disponíveis. Não se exige que ele apresente seus pensamentos em forma material para comprovar que realmente se concentrou.",
    ],
  },
  {
    id: "12.5.5",
    title: "Consequências da impossibilidade de explicar uma anomalia",
    paragraphs: [
      "Na ausência de informações suficientes, o resultado poderá permanecer classificado como inexplicado, sem reconhecimento automático de infração.",
      "A Empresa poderá deixar a anomalia sem explicação e encerrar a investigação. A expressão \"não foi possível explicar\" é uma conclusão sobre os limites da verificação, não uma explicação autônoma do resultado.",
    ],
  },
  {
    id: "12.6.1",
    title: "Disposições gerais sobre os órgãos de controle",
    paragraphs: [
      "A Empresa determina os órgãos internos ou as pessoas autorizadas responsáveis pelo exercício das funções de controle.",
      "A criação de um órgão de controle será formalizada por decisão específica, quando necessária. A menção a esse órgão no Acordo não comprova sua efetiva constituição.",
    ],
  },
  {
    id: "12.6.2",
    title: "Principais competências das unidades de controle",
    paragraphs: [
      "Os órgãos de controle poderão realizar verificações, solicitar informações disponíveis e elaborar conclusões.",
      "A solicitação de informações limita-se aos dados que existem e podem ser legitimamente fornecidos. Uma unidade de controle não adquire a capacidade de medir pensamentos apenas por força de uma ordem de nomeação.",
    ],
  },
  {
    id: "12.6.3",
    title: "Procedimento de atribuição de competências de controle",
    paragraphs: [
      "As competências poderão ser atribuídas por decisão interna da Empresa, inclusive mediante decisão de criar um órgão autorizado a fiscalizar outros órgãos de controle.",
      "Admite-se a criação de um órgão para fiscalizar outros órgãos de controle, inclusive para verificar suas competências. Contudo, a competência para nomear um fiscal não isenta quem o nomeou de eventual verificação da legalidade da nomeação.",
    ],
  },
  {
    id: "12.6.4",
    title: "Delimitação de competências",
    paragraphs: [
      "Quando houver sobreposição de competências entre várias unidades, a Empresa estabelecerá o procedimento de interação entre elas.",
      "Em caso de conflito de competências, a Empresa poderá designar um responsável para determinar quem tem competência para resolver o conflito. Essa designação deverá ter fundamento próprio, sem se apoiar exclusivamente na existência do conflito.",
    ],
  },
  {
    id: "12.6.5",
    title: "Verificação da legalidade do exercício das competências",
    paragraphs: [
      "As ações de um órgão de controle poderão ser submetidas a uma verificação interna de conformidade com suas competências estabelecidas.",
      "A verificação da legalidade das competências é realizada separadamente da avaliação da correção das conclusões. Um órgão de controle pode atuar dentro de suas competências e ainda assim estar errado, ou chegar por acaso à conclusão correta fora de sua competência.",
    ],
  },
  {
    id: "12.7.1",
    title: "Direito de contestar os resultados da auditoria",
    paragraphs: [
      "O Usuário tem o direito de contestar as conclusões de uma verificação interna conforme o procedimento previsto.",
      "A contestação não exige o reconhecimento prévio de que as conclusões da auditoria estejam corretas. A discordância do Usuário em relação à verificação não constitui, por si só, confirmação de que ela foi conduzida adequadamente.",
    ],
  },
  {
    id: "12.7.2",
    title: "Fundamentos para apresentação de objeções",
    paragraphs: [
      "As objeções poderão referir-se à metodologia aplicada, à confiabilidade das informações e à correção das conclusões.",
      "A objeção deverá permitir identificar a circunstância contestada. Se o Usuário contestar a ausência de resultados, a Empresa deverá distinguir a ausência de resultado da verificação da ausência da própria verificação.",
    ],
  },
  {
    id: "12.7.3",
    title: "Procedimento de reexame",
    paragraphs: [
      "A contestação poderá resultar em nova avaliação dos resultados por outra pessoa ou unidade autorizada.",
      "O reexame poderá utilizar os materiais originais, com indicação de suas limitações. A repetição do mesmo erro por outro auditor não transforma o erro em um padrão de qualidade consensual.",
    ],
  },
  {
    id: "12.7.4",
    title: "Verificação da regularidade do procedimento de contestação",
    paragraphs: [
      "Caso sejam identificadas irregularidades no exame das objeções, admite-se uma verificação adicional do próprio procedimento.",
      "Ao identificar uma irregularidade processual, admite-se verificar o procedimento de verificação do procedimento de contestação. Novas verificações somente serão determinadas quando houver necessidade independente, e não para manter a continuidade do fluxo documental.",
    ],
  },
  {
    id: "12.7.5",
    title: "Encerramento da análise da reclamação",
    paragraphs: [
      "A análise termina com a formalização de uma decisão, que poderá manter ou modificar as conclusões originais.",
      "A decisão deverá apresentar uma conclusão sobre o objeto das objeções ou explicar a impossibilidade de fazê-lo. O encerramento da análise não significa que o Usuário seja obrigado a considerar a conclusão convincente.",
    ],
  },
  {
    id: "12.8.1",
    title: "Princípios gerais da fiscalização dos órgãos fiscalizadores",
    paragraphs: [
      "A atuação das unidades internas de controle poderá ser submetida a verificação adicional.",
      "O controle adicional destina-se a identificar erros da verificação inicial. O aumento do número de auditores não implica automaticamente maior confiabilidade se todos utilizarem os mesmos dados iniciais incorretos.",
    ],
  },
  {
    id: "12.8.2",
    title: "Designação de órgão para fiscalizar os órgãos fiscalizadores",
    paragraphs: [
      "Para verificar a atuação das unidades de controle, a Empresa poderá designar órgãos adicionais, nos termos da cláusula 12.6.3.",
      "A designação desse órgão será realizada nos termos da cláusula 12.6.3. O fato de designar um órgão para fiscalizar os órgãos fiscalizadores não elimina a questão de quem fiscaliza a observância do procedimento de sua designação.",
    ],
  },
  {
    id: "12.8.3",
    title: "Verificação da independência do órgão de controle",
    paragraphs: [
      "Na avaliação dos resultados, consideram-se as circunstâncias capazes de influenciar a imparcialidade dos auditores.",
      "A independência é avaliada considerando subordinação, interesses envolvidos e outras circunstâncias disponíveis. A declaração de um órgão sobre sua própria independência não constitui comprovação exaustiva dessa independência.",
    ],
  },
  {
    id: "12.8.4",
    title: "Fiscalização do órgão de controle adicional",
    paragraphs: [
      "O órgão que fiscaliza outras unidades de controle poderá, ele próprio, tornar-se objeto de fiscalização.",
      "A fiscalização do órgão de controle adicional é admitida segundo os mesmos princípios aplicáveis ao órgão inicial. O direito a essa fiscalização não implica a obrigação de criar indefinidamente novos órgãos para fiscalizar os anteriores.",
    ],
  },
  {
    id: "12.8.5",
    title: "Limites do controle em múltiplos níveis",
    paragraphs: [
      "A Empresa poderá encerrar a sequência de atividades de controle quando novas verificações não tiverem perspectiva de produzir informações relevantes adicionais.",
      "O encerramento do controle em múltiplos níveis poderá ser fundamentado na ausência de novas circunstâncias verificáveis. A conclusão pelo encerramento das verificações poderá ser examinada quanto à legalidade, mas essa possibilidade, por si só, não reabre a sequência encerrada.",
    ],
  },
] satisfies AgreementSection;
