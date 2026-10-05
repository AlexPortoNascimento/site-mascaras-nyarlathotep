/**
 * data/sessoes.js — Banco de dados das sessões da campanha.
 *
 * Estrutura canônica de Máscaras de Nyarlathotep (edição completa, 2018).
 * Ordem: Prólogo (Peru) → Nova Iorque → Inglaterra → Egito → Quênia → Austrália → China
 *
 * Para adicionar uma sessão: localize o capítulo e insira um objeto no array sessoes:
 *   { data: 'DD/MM/AAAA', titulo: 'Sessão N — Título', resumo: 'Texto completo...' }
 *
 * Para marcar uma sessão como placeholder (ainda não jogada), use data: '00/00/0000'.
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
        titulo: 'Sessão 1 — A Expedição Carlyle',
        resumo: 'Os investigadores se reúnem em Lima após o contato de Jackson Elias, que promete revelar verdades perturbadoras sobre a expedição Carlyle — desaparecida misteriosamente em 1919. O que começou como uma reunião informativa rapidamente se transforma em corrida contra forças desconhecidas.',
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
        titulo: 'Sessão 1 — Morte no Chelsea Hotel',
        resumo: 'Jackson Elias é encontrado morto no Chelsea Hotel — sua garganta cortada com símbolos rituais gravados na pele. Os investigadores chegam tarde demais para salvá-lo, mas a tempo de encontrar pistas que apontam para a Fundação Ju-Ju, no Harlem, e para conexões com a expedição Carlyle.',
      },
      {
        data: '00/00/0000',
        titulo: 'Sessão 2 — Os Segredos do Harlem',
        resumo: 'A investigação leva ao coração do Harlem, onde a Fundação Ju-Ju esconde mais do que aparenta. Os investigadores descobrem que a morte de Elias está ligada a um culto que opera nas sombras da cidade, com tentáculos que se estendem até Londres, Cairo e além.',
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
        titulo: 'Sessão 1 — A Névoa de Londres',
        resumo: 'Chegando a Londres sob a névoa típica do outono inglês, os investigadores buscam contatos da expedição Carlyle. O Museu Britânico guarda segredos em suas coleções egípcias, e uma mansão em Mayfair pertencente a Edward Gavigan revela-se mais ameaçadora do que esperado.',
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
        titulo: 'Sessão 1 — Sombras sobre o Cairo',
        resumo: 'O Cairo de 1925 fervilha entre a modernidade colonial britânica e os mistérios milenares do deserto. Os investigadores buscam a Pirâmide Sombria — uma construção que não consta em nenhum mapa oficial — enquanto o culto de Nyarlathotep aperta o cerco.',
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
        titulo: 'Sessão 1 — A Montanha da Escuridão',
        resumo: 'A África Oriental Britânica guarda um dos templos mais antigos do culto. Após desembarcarem em Mombasa e viajarem de trem até Nairóbi, os investigadores devem penetrar nas terras selvagens do Monte Quênia para encontrar o que a expedição Carlyle descobriu — e não deveria ter descoberto.',
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
        titulo: 'Sessão 1 — O Outback Eterno',
        resumo: 'O continente mais isolado do mundo esconde segredos mais velhos que a história humana. Os investigadores chegam a Sydney e partem para o interior — o Outback — onde algo que dorme há éons começa a despertar. A distância da Europa não oferece a proteção que esperavam.',
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
        titulo: 'Sessão 1 — A Paris do Oriente',
        resumo: 'Xangai, 1925 — a cidade mais cosmopolita da Ásia, onde tríades, ópio e poderes coloniais dividem o poder. Os investigadores chegam ao fim de sua jornada global, mas o pior ainda está por vir. Nos subterrâneos da cidade, o Culto da Língua de Prata prepara o ritual final.',
      },
    ],
  },
];
