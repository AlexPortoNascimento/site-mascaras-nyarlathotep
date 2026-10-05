/**
 * data/locais.js — Banco de dados das locações da campanha.
 *
 * Cada locação contém:
 *  - id:          identificador único (slug)
 *  - pais:        nome do país
 *  - cidade:      cidade principal visitada
 *  - descricao:   texto descritivo do local
 *  - clima:       descrição do clima e ambiente
 *  - mapa:        caminho para a imagem do mapa (ou null para placeholder)
 *  - culto:       { nome, foto, descricao }
 *
 * Preenchido com dados reais na Task 9.
 * Atualmente contém placeholders estruturais para validação da fundação.
 */

// eslint-disable-next-line no-unused-vars
const LOCAIS = [
  {
    id: 'peru',
    pais: 'Peru',
    cidade: 'Lima',
    descricao: 'Descrição de Lima e do Peru a ser preenchida. Capital costeira do Peru, porta de entrada para os Andes e para os segredos da expedição Carlyle.',
    clima: 'Clima desértico costeiro. Neblina frequente (garúa) entre junho e novembro. Calor moderado no verão andino.',
    mapa: null,
    culto: {
      nome: 'Culto Residente (a definir)',
      foto: null,
      descricao: 'Descrição do culto residente no Peru a ser preenchida pelo Mestre.',
    },
  },
  {
    id: 'nova-york',
    pais: 'Nova Iorque',
    cidade: 'Nova Iorque',
    descricao: 'A metrópole americana dos anos 1920. Berço da investigação: foi aqui que Jackson Elias foi assassinado e onde tudo começa.',
    clima: 'Clima continental úmido. Invernos rigorosos com neve. Verões quentes e úmidos. Outono de 1925.',
    mapa: null,
    culto: {
      nome: 'Culto Residente (a definir)',
      foto: null,
      descricao: 'Descrição do culto residente em Nova Iorque a ser preenchida pelo Mestre.',
    },
  },
  {
    id: 'inglaterra',
    pais: 'Inglaterra',
    cidade: 'Londres',
    descricao: 'A capital do Império Britânico nos anos 1920. Biblioteca do Museu Britânico, clubes privados e segredos escondidos sob a névoa londrina.',
    clima: 'Clima oceânico. Névoa frequente, chuvas moderadas ao longo do ano. Invernos frios e úmidos.',
    mapa: null,
    culto: {
      nome: 'Culto Residente (a definir)',
      foto: null,
      descricao: 'Descrição do culto residente na Inglaterra a ser preenchida pelo Mestre.',
    },
  },
  {
    id: 'egito',
    pais: 'Egito',
    cidade: 'Cairo',
    descricao: 'O Cairo dos anos 1920 — entre a modernidade colonial britânica e os milenares mistérios do deserto. As pirâmides guardam segredos mais antigos que a história.',
    clima: 'Clima desértico quente. Verões extremamente quentes (40°C+). Invernos amenos. Tempestades de areia ocasionais.',
    mapa: null,
    culto: {
      nome: 'Culto Residente (a definir)',
      foto: null,
      descricao: 'Descrição do culto residente no Egito a ser preenchida pelo Mestre.',
    },
  },
  {
    id: 'quenia',
    pais: 'Quênia',
    cidade: 'Nairóbi',
    descricao: 'A África Oriental Britânica de 1925. Safáris, colônias de colonos e uma escuridão ancestral que pulsa nas montanhas.',
    clima: 'Clima tropical de altitude. Duas estações das chuvas (março-maio e outubro-dezembro). Temperaturas amenas (15–25°C) devido à altitude.',
    mapa: null,
    culto: {
      nome: 'Culto Residente (a definir)',
      foto: null,
      descricao: 'Descrição do culto residente no Quênia a ser preenchida pelo Mestre.',
    },
  },
  {
    id: 'australia',
    pais: 'Austrália',
    cidade: 'Sydney / Interior',
    descricao: 'O continente isolado. O Outback escondes segredos mais velhos que o próprio Dreamtime. A distância da Europa dá uma falsa sensação de segurança.',
    clima: 'Clima variado: temperado no sul (Sydney), árido no interior (Outback). Verão no hemisfério sul (dezembro–fevereiro) coincide com o inverno europeu.',
    mapa: null,
    culto: {
      nome: 'Culto Residente (a definir)',
      foto: null,
      descricao: 'Descrição do culto residente na Austrália a ser preenchida pelo Mestre.',
    },
  },
  {
    id: 'china',
    pais: 'China',
    cidade: 'Xangai',
    descricao: 'Xangai, 1925 — a "Paris do Oriente". Concessões internacionais, tríades, ópio e um culto que vai ao coração das tradições mais obscuras da China milenares.',
    clima: 'Clima subtropical úmido. Verões quentes e úmidos (35°C+). Invernos frios. Tufões ocasionais no outono.',
    mapa: null,
    culto: {
      nome: 'Culto Residente (a definir)',
      foto: null,
      descricao: 'Descrição do culto residente na China a ser preenchida pelo Mestre.',
    },
  },
];
