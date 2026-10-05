/**
 * data/sessoes.js — Banco de dados das sessões da campanha.
 *
 * Estrutura por capítulo/país, seguindo a ordem canônica de
 * Máscaras de Nyarlathotep (edição completa).
 *
 * Cada capítulo contém:
 *  - id:       identificador único (slug)
 *  - pais:     nome do país
 *  - capitulo: número e título do capítulo
 *  - icone:    classe Bootstrap Icon para o header do accordion
 *  - sessoes:  array de sessões (data, titulo, resumo)
 *
 * Preenchido com dados reais na Task 6.
 * Atualmente contém placeholders estruturais para validação da fundação.
 */

// eslint-disable-next-line no-unused-vars
const CAPITULOS = [
  {
    id: 'peru',
    pais: 'Peru',
    capitulo: 'Prólogo — Lima, Peru',
    icone: 'bi-compass',
    sessoes: [
      {
        data: '00/00/0000',
        titulo: 'Sessão 1 — Placeholder',
        resumo: 'Resumo da sessão a ser preenchido pelo Mestre.',
      },
    ],
  },
  {
    id: 'nova-york',
    pais: 'Nova Iorque',
    capitulo: 'Capítulo I — Nova Iorque, EUA',
    icone: 'bi-building',
    sessoes: [
      {
        data: '00/00/0000',
        titulo: 'Sessão 1 — Placeholder',
        resumo: 'Resumo da sessão a ser preenchido pelo Mestre.',
      },
    ],
  },
  {
    id: 'inglaterra',
    pais: 'Inglaterra',
    capitulo: 'Capítulo II — Londres, Inglaterra',
    icone: 'bi-buildings',
    sessoes: [
      {
        data: '00/00/0000',
        titulo: 'Sessão 1 — Placeholder',
        resumo: 'Resumo da sessão a ser preenchido pelo Mestre.',
      },
    ],
  },
  {
    id: 'egito',
    pais: 'Egito',
    capitulo: 'Capítulo III — Cairo, Egito',
    icone: 'bi-triangle',
    sessoes: [
      {
        data: '00/00/0000',
        titulo: 'Sessão 1 — Placeholder',
        resumo: 'Resumo da sessão a ser preenchido pelo Mestre.',
      },
    ],
  },
  {
    id: 'quenia',
    pais: 'Quênia',
    capitulo: 'Capítulo IV — Nairóbi, Quênia',
    icone: 'bi-tree',
    sessoes: [
      {
        data: '00/00/0000',
        titulo: 'Sessão 1 — Placeholder',
        resumo: 'Resumo da sessão a ser preenchido pelo Mestre.',
      },
    ],
  },
  {
    id: 'australia',
    pais: 'Austrália',
    capitulo: 'Capítulo V — Austrália',
    icone: 'bi-sun',
    sessoes: [
      {
        data: '00/00/0000',
        titulo: 'Sessão 1 — Placeholder',
        resumo: 'Resumo da sessão a ser preenchido pelo Mestre.',
      },
    ],
  },
  {
    id: 'china',
    pais: 'China',
    capitulo: 'Capítulo VI — Xangai, China',
    icone: 'bi-yin-yang',
    sessoes: [
      {
        data: '00/00/0000',
        titulo: 'Sessão 1 — Placeholder',
        resumo: 'Resumo da sessão a ser preenchido pelo Mestre.',
      },
    ],
  },
];
