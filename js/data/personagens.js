const PERSONAGENS = [

  // ─── PROTAGONISTAS (PJ) ──────────────────────────────────────────────────

  {
    id: 'investigador-1',
    nome: 'Investigador 1',
    ocupacao: 'A definir pelo Mestre',
    tipo: 'PJ',
    status: 'Vivo',
    avatar: null,
    bioCurta: 'Um dos investigadores da campanha. Ficha e biografia a serem preenchidas pelo Mestre.',
    bioCompleta: 'Biografia completa a ser preenchida pelo Mestre. Adicione origem, motivações, conexões com Jackson Elias e detalhes pessoais relevantes para a campanha.',
    atributos: {
      FOR: 60, CON: 65, TAM: 55, DES: 70,
      APA: 60, INT: 75, POD: 65, EDU: 80,
    },
    sanidade: 65,
    pv: 12,
    pm: 13,
    habilidades: [
      { nome: 'Biblioteca', valor: 60 },
      { nome: 'Idioma Nativo', valor: 80 },
      { nome: 'Psicologia', valor: 40 },
    ],
  },
  {
    id: 'investigador-2',
    nome: 'Investigador 2',
    ocupacao: 'A definir pelo Mestre',
    tipo: 'PJ',
    status: 'Vivo',
    avatar: null,
    bioCurta: 'Um dos investigadores da campanha. Ficha e biografia a serem preenchidas pelo Mestre.',
    bioCompleta: 'Biografia completa a ser preenchida pelo Mestre.',
    atributos: {
      FOR: 70, CON: 70, TAM: 65, DES: 65,
      APA: 55, INT: 70, POD: 60, EDU: 75,
    },
    sanidade: 60,
    pv: 13,
    pm: 12,
    habilidades: [
      { nome: 'Armas de Fogo', valor: 55 },
      { nome: 'Primeiros Socorros', valor: 50 },
      { nome: 'Furtividade', valor: 45 },
    ],
  },

  // ─── ALIADOS PRINCIPAIS (PNJ) ─────────────────────────────────────────────

  {
    id: 'jackson-elias',
    nome: 'Jackson Elias',
    ocupacao: 'Escritor e Jornalista de Ocultismo',
    tipo: 'PNJ',
    status: 'Morto',
    avatar: null,
    bioCurta: 'Velho amigo dos investigadores e autor de obras sobre cultos mortais ao redor do mundo. Sua morte no Chelsea Hotel, em Nova Iorque, desencadeia toda a investigação.',
    bioCompleta: 'Jackson Elias passou anos investigando cultos mortais ao redor do mundo, documentando suas práticas em livros como "Sons of Death" e "Dark Cult". Era um homem que não acreditava em sobrenatural — até que começou a investigar a expedição Carlyle. Encontrou os investigadores para revelar o que havia descoberto, mas foi assassinado antes de poder fazê-lo. Sua morte, marcada por símbolos rituais, é o ponto de partida de toda a campanha.',
    atributos: {
      FOR: 55, CON: 60, TAM: 60, DES: 65,
      APA: 65, INT: 80, POD: 65, EDU: 85,
    },
    sanidade: 55,
    pv: 12,
    pm: 13,
    habilidades: [
      { nome: 'Biblioteca', valor: 75 },
      { nome: 'Ocultismo', valor: 55 },
      { nome: 'Persuasão', valor: 65 },
      { nome: 'Idioma: Swahili', valor: 40 },
    ],
  },
  {
    id: 'mirella-santos',
    nome: 'Mirella Santos',
    ocupacao: 'Arqueóloga',
    tipo: 'PNJ',
    status: 'Vivo',
    avatar: null,
    bioCurta: 'Arqueóloga brasileira especializada em culturas pré-colombianas. Contato inicial dos investigadores no Peru e aliada essencial nos capítulos seguintes.',
    bioCompleta: 'Mirella Santos é uma arqueóloga formada pela Universidade do Rio de Janeiro, especializada em culturas andinas. Trabalhou brevemente com a expedição Carlyle antes de algo a fazer recuar. Hoje se arrepende de não ter ficado — ou talvez tenha tido sorte. Ela pode fornecer aos investigadores contexto histórico e arqueológico fundamental, mas carrega um segredo sobre o que realmente encontrou no Peru.',
    atributos: {
      FOR: 50, CON: 60, TAM: 55, DES: 65,
      APA: 70, INT: 85, POD: 60, EDU: 90,
    },
    sanidade: 65,
    pv: 11,
    pm: 12,
    habilidades: [
      { nome: 'Arqueologia', valor: 75 },
      { nome: 'História', valor: 65 },
      { nome: 'Idioma: Espanhol', valor: 80 },
      { nome: 'Biblioteca', valor: 60 },
    ],
  },

  // ─── ANTAGONISTAS ─────────────────────────────────────────────────────────

  {
    id: 'nyarlathotep',
    nome: 'Nyarlathotep',
    ocupacao: 'O Faraó Rastejante — Deus Externo',
    tipo: 'Antagonista',
    status: 'Vivo',
    avatar: null,
    bioCurta: 'O Caos Rastejante. Mensageiro dos Outros Deuses. Nyarlathotep assume mil faces para manipular a humanidade rumo à destruição — e seu plano final está prestes a se completar.',
    bioCompleta: 'Nyarlathotep é o único dos Grandes Antigos que age ativamente entre os mortais, manipulando cultos ao redor do mundo para preparar o terreno para o retorno dos Outros Deuses. Diferente de Cthulhu ou Hastur, que dormem, Nyarlathotep está desperto e furioso. Suas manifestações variam — do Faraó Negro ao Mensageiro, da Figura Negra ao Deus Rastejante do Caos — mas seu objetivo é sempre o mesmo: o fim de toda sanidade e ordem.',
    atributos: {
      FOR: 100, CON: 100, TAM: 100, DES: 100,
      APA: 100, INT: 100, POD: 100, EDU: 100,
    },
    sanidade: 0,
    pv: 999,
    pm: 999,
    habilidades: [
      { nome: 'Mitos de Cthulhu', valor: 100 },
      { nome: 'Ocultismo', valor: 100 },
      { nome: 'Enganação', valor: 100 },
    ],
  },
  {
    id: 'edward-gavigan',
    nome: 'Edward Gavigan',
    ocupacao: 'Diretor do Museu Penhew, Londres',
    tipo: 'Antagonista',
    status: 'Vivo',
    avatar: null,
    bioCurta: 'Respeitável diretor de museu por fora, alto sacerdote do Culto do Faraó Negro por dentro. Opera a partir de sua mansão em Mayfair, coordenando as operações britânicas do culto.',
    bioCompleta: 'Edward Gavigan é um dos antagonistas humanos mais sofisticados da campanha. Sua fachada de estudioso egípcio e homem da alta sociedade londrina é impecável. Por baixo dela, é um devoto fanático de Nyarlathotep que coordenou logística da expedição Carlyle e continua coordenando as operações do culto na Europa. Tem acesso a grimórios raros e não hesitará em usar magia se os investigadores o pressionarem demais.',
    atributos: {
      FOR: 60, CON: 65, TAM: 65, DES: 55,
      APA: 70, INT: 90, POD: 85, EDU: 95,
    },
    sanidade: 15,
    pv: 13,
    pm: 17,
    habilidades: [
      { nome: 'Ocultismo', valor: 85 },
      { nome: 'Mitos de Cthulhu', valor: 50 },
      { nome: 'Enganação', valor: 75 },
      { nome: 'Intimidação', valor: 60 },
      { nome: 'Idioma: Árabe', valor: 70 },
    ],
  },
];
