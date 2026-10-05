/**
 * data/personagens.js — Banco de dados dos personagens da campanha.
 *
 * Cada personagem contém:
 *  - id:          identificador único
 *  - nome:        nome completo
 *  - ocupacao:    ocupação/profissão
 *  - tipo:        'PJ' | 'PNJ' | 'Antagonista'
 *  - status:      'Vivo' | 'Morto' | 'Preso' | 'Ferido'
 *  - avatar:      caminho para a imagem (ou null para placeholder)
 *  - bioCurta:    texto curto para o card
 *  - bioCompleta: texto longo para o modal
 *  - atributos:   { FOR, CON, TAM, DES, APA, INT, POD, EDU }  (valores 1–100)
 *  - sanidade:    número
 *  - pv:          Pontos de Vida
 *  - pm:          Pontos de Magia
 *  - habilidades: array de { nome, valor } com % das perícias principais
 *
 * Preenchido com personagens reais na Task 7.
 * Atualmente contém placeholders para validação da fundação.
 */

// eslint-disable-next-line no-unused-vars
const PERSONAGENS = [
  {
    id: 'investigador-placeholder-pj',
    nome: 'Investigador (Placeholder)',
    ocupacao: 'Ocupação a definir',
    tipo: 'PJ',
    status: 'Vivo',
    avatar: null,
    bioCurta: 'Biografia resumida do investigador. Será preenchida pelo Mestre.',
    bioCompleta: 'Biografia completa do investigador. Será preenchida pelo Mestre com detalhes de origem, motivações e eventos marcantes.',
    atributos: {
      FOR: 60, CON: 65, TAM: 55, DES: 70,
      APA: 60, INT: 75, POD: 65, EDU: 80,
    },
    sanidade: 65,
    pv: 12,
    pm: 13,
    habilidades: [
      { nome: 'Biblioteca', valor: 60 },
      { nome: 'Medicina', valor: 40 },
      { nome: 'Idioma Nativo', valor: 80 },
    ],
  },
  {
    id: 'aliado-placeholder-pnj',
    nome: 'Aliado (Placeholder)',
    ocupacao: 'Ocupação a definir',
    tipo: 'PNJ',
    status: 'Vivo',
    avatar: null,
    bioCurta: 'Biografia resumida do aliado. Será preenchida pelo Mestre.',
    bioCompleta: 'Biografia completa do aliado. Será preenchida pelo Mestre.',
    atributos: {
      FOR: 50, CON: 55, TAM: 60, DES: 55,
      APA: 65, INT: 70, POD: 60, EDU: 75,
    },
    sanidade: 60,
    pv: 11,
    pm: 12,
    habilidades: [
      { nome: 'Charme', valor: 55 },
      { nome: 'Persuasão', valor: 50 },
    ],
  },
  {
    id: 'antagonista-placeholder',
    nome: 'Antagonista (Placeholder)',
    ocupacao: 'Cultista',
    tipo: 'Antagonista',
    status: 'Vivo',
    avatar: null,
    bioCurta: 'Biografia resumida do antagonista. Será preenchida pelo Mestre.',
    bioCompleta: 'Biografia completa do antagonista. Será preenchida pelo Mestre.',
    atributos: {
      FOR: 70, CON: 70, TAM: 65, DES: 60,
      APA: 40, INT: 80, POD: 85, EDU: 70,
    },
    sanidade: 20,
    pv: 13,
    pm: 17,
    habilidades: [
      { nome: 'Ocultismo', valor: 80 },
      { nome: 'Mitos de Cthulhu', valor: 45 },
      { nome: 'Intimidação', valor: 65 },
    ],
  },
];
