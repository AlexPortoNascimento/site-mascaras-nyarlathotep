/**
 * data/sessoes.js — Banco de dados das sessões da campanha.
 *
 * Estrutura canônica de Máscaras de Nyarlathotep (edição completa, 2018).
 * Ordem: Prólogo (Peru) → Nova Iorque → Inglaterra → Egito → Quênia → Austrália → China
 *
 * Para adicionar uma sessão: localize o capítulo, crie o arquivo de resumo em
 * js/data/resumos/, carregue-o em sessoes.html ANTES deste arquivo, e adicione
 * o objeto abaixo referenciando a constante.
 *
 * Datas: sessões de 2 em 2 semanas a partir de 05/10/2026.
 * Sessão 1  → 05/10/2026
 * Sessão 2  → 19/10/2026
 * Sessão 3  → 02/11/2026
 * Sessão 4  → 16/11/2026
 * Sessão 5  → 30/11/2026
 * Sessão 6  → 14/12/2026
 * Sessão 7  → 28/12/2026
 * Sessão 8  → 11/01/2027
 * Sessão 9  → 25/01/2027
 * Sessão 10 → 08/02/2027
 * Sessão 11 → 22/02/2027
 * Sessão 12 → 08/03/2027
 * Sessão 13 → 22/03/2027
 * Sessão 14 → 05/04/2027
 * Sessão 15 → 19/04/2027
 * Sessão 16 → 03/05/2027
 * Sessão 17 → 17/05/2027
 * Sessão 18 → 31/05/2027
 * Sessão 19 → 14/06/2027
 */

// eslint-disable-next-line no-unused-vars
const CAPITULOS = [

  // ─── PRÓLOGO — PERU ────────────────────────────────────────────────────────
  {
    id: 'peru',
    pais: 'Peru',
    capitulo: 'Prólogo — Lima, Peru',
    icone: 'bi-compass',
    sessoes: [
      {
        data: '05/10/2026',
        titulo: 'Sessão 1 — O Chamado de Lima',
        resumo: typeof RESUMO_PERU_S1 !== 'undefined' ? RESUMO_PERU_S1 : '',
      },
      {
        data: '19/10/2026',
        titulo: 'Sessão 2 — O Verme e o Selo',
        resumo: typeof RESUMO_PERU_S2 !== 'undefined' ? RESUMO_PERU_S2 : '',
      },
    ],
  },

  // ─── CAPÍTULO I — NOVA IORQUE ──────────────────────────────────────────────
  {
    id: 'nova-york',
    pais: 'Nova Iorque',
    capitulo: 'Capítulo I — Nova Iorque, EUA',
    icone: 'bi-building',
    sessoes: [
      {
        data: '02/11/2026',
        titulo: 'Sessão 3 — A Morte de Jackson Elias',
        resumo: typeof RESUMO_NOVA_YORK_S1 !== 'undefined' ? RESUMO_NOVA_YORK_S1 : '',
      },
      {
        data: '16/11/2026',
        titulo: 'Sessão 4 — Pistas nas Sombras de Nova York',
        resumo: typeof RESUMO_NOVA_YORK_S2 !== 'undefined' ? RESUMO_NOVA_YORK_S2 : '',
      },
      {
        data: '30/11/2026',
        titulo: 'Sessão 5 — O Testamento e o Harlem',
        resumo: typeof RESUMO_NOVA_YORK_S3 !== 'undefined' ? RESUMO_NOVA_YORK_S3 : '',
      },
      {
        data: '14/12/2026',
        titulo: 'Sessão 6 — A Estrada e o Capitão Robson',
        resumo: typeof RESUMO_NOVA_YORK_S4 !== 'undefined' ? RESUMO_NOVA_YORK_S4 : '',
      },
      {
        data: '28/12/2026',
        titulo: 'Sessão 7 — A Invasão da Casa Ju-Ju',
        resumo: typeof RESUMO_NOVA_YORK_S5 !== 'undefined' ? RESUMO_NOVA_YORK_S5 : '',
      },
      {
        data: '11/01/2027',
        titulo: 'Sessão 8 — Erica Carlyle e os Segredos da Expedição',
        resumo: typeof RESUMO_NOVA_YORK_S6 !== 'undefined' ? RESUMO_NOVA_YORK_S6 : '',
      },
    ],
  },

  // ─── CAPÍTULO II — INGLATERRA ──────────────────────────────────────────────
  {
    id: 'inglaterra',
    pais: 'Inglaterra',
    capitulo: 'Capítulo II — Londres, Inglaterra',
    icone: 'bi-buildings',
    sessoes: [
      {
        data: '25/01/2027',
        titulo: 'Sessão 9 — A Chegada a Londres',
        resumo: typeof RESUMO_INGLATERRA_S1 !== 'undefined' ? RESUMO_INGLATERRA_S1 : '',
      },
      {
        data: '08/02/2027',
        titulo: 'Sessão 10 — A Fundação Penhew',
        resumo: typeof RESUMO_INGLATERRA_S2 !== 'undefined' ? RESUMO_INGLATERRA_S2 : '',
      },
      {
        data: '22/02/2027',
        titulo: 'Sessão 11 — Os Nervos à Flor da Pele',
        resumo: typeof RESUMO_INGLATERRA_S3 !== 'undefined' ? RESUMO_INGLATERRA_S3 : '',
      },
      {
        data: '08/03/2027',
        titulo: 'Sessão 12 — A Criatura das Névoas',
        resumo: typeof RESUMO_INGLATERRA_S4 !== 'undefined' ? RESUMO_INGLATERRA_S4 : '',
      },
      {
        data: '22/03/2027',
        titulo: 'Sessão 13 — O Equipamento do Navio Suspeito',
        resumo: typeof RESUMO_INGLATERRA_S5 !== 'undefined' ? RESUMO_INGLATERRA_S5 : '',
      },
      {
        data: '05/04/2027',
        titulo: 'Sessão 14 — O Blue Pyramid Club',
        resumo: typeof RESUMO_INGLATERRA_S6 !== 'undefined' ? RESUMO_INGLATERRA_S6 : '',
      },
      {
        data: '19/04/2027',
        titulo: 'Sessão 15 — Yalesha e as Fornalhas',
        resumo: typeof RESUMO_INGLATERRA_S7 !== 'undefined' ? RESUMO_INGLATERRA_S7 : '',
      },
      {
        data: '03/05/2027',
        titulo: 'Sessão 16 — O Horror em Lesser Edale',
        resumo: typeof RESUMO_INGLATERRA_S8 !== 'undefined' ? RESUMO_INGLATERRA_S8 : '',
      },
      {
        data: '17/05/2027',
        titulo: 'Sessão 17 — Prata e Preparativos',
        resumo: typeof RESUMO_INGLATERRA_S9 !== 'undefined' ? RESUMO_INGLATERRA_S9 : '',
      },
      {
        data: '31/05/2027',
        titulo: 'Sessão 18 — Mam Tor e o Buraco sem Fundo',
        resumo: typeof RESUMO_INGLATERRA_S10 !== 'undefined' ? RESUMO_INGLATERRA_S10 : '',
      },
    ],
  },

  // ─── CAPÍTULO III — EGITO ──────────────────────────────────────────────────
  {
    id: 'egito',
    pais: 'Egito',
    capitulo: 'Capítulo III — Cairo, Egito',
    icone: 'bi-triangle',
    sessoes: [
      {
        data: '14/06/2027',
        titulo: 'Sessão 19 — O Agente Soviético e a Fuga para o Egito',
        resumo: typeof RESUMO_EGITO_S1 !== 'undefined' ? RESUMO_EGITO_S1 : '',
      },
    ],
  },

  // ─── CAPÍTULO IV — QUÊNIA ──────────────────────────────────────────────────
  {
    id: 'quenia',
    pais: 'Quênia',
    capitulo: 'Capítulo IV — Nairóbi, Quênia',
    icone: 'bi-tree',
    sessoes: [
      {
        data: '00/00/0000',
        titulo: 'Sessão 20 — A ser jogada',
        resumo: 'Esta sessão ainda não foi jogada.',
      },
    ],
  },

  // ─── CAPÍTULO V — AUSTRÁLIA ────────────────────────────────────────────────
  {
    id: 'australia',
    pais: 'Austrália',
    capitulo: 'Capítulo V — Austrália',
    icone: 'bi-sun',
    sessoes: [
      {
        data: '00/00/0000',
        titulo: 'Sessão — A ser jogada',
        resumo: 'Esta sessão ainda não foi jogada.',
      },
    ],
  },

  // ─── CAPÍTULO VI — CHINA ───────────────────────────────────────────────────
  {
    id: 'china',
    pais: 'China',
    capitulo: 'Capítulo VI — Xangai, China',
    icone: 'bi-yin-yang',
    sessoes: [
      {
        data: '00/00/0000',
        titulo: 'Sessão — A ser jogada',
        resumo: 'Esta sessão ainda não foi jogada.',
      },
    ],
  },
];
