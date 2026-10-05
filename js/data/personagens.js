/**
 * data/personagens.js — Banco de dados dos personagens da campanha.
 *
 * Para adicionar um personagem, insira um objeto no array PERSONAGENS.
 * Para adicionar avatar: coloque a imagem em assets/img/personagens/ e
 * preencha o campo avatar com o caminho relativo.
 */

// eslint-disable-next-line no-unused-vars
const PERSONAGENS = [

  // ─── PROTAGONISTAS (PJ) ────────────────────────────────────────────────────

  {
    id: 'amelie-hugo',
    nome: 'Amélie Hugo',
    ocupacao: 'Médica',
    tipo: 'PJ',
    status: 'Vivo',
    avatar: 'assets/img/personagens/amelie-hugo.png',
    bioCurta: 'Médica francesa de 26 anos. Sua frieza clínica e coragem sob pressão já salvaram vidas — inclusive dentro de um almoxarifado universitário no Peru, onde realizou uma cirurgia improvisada para remover um verme de outro mundo do estômago de um professor.',
    bioCompleta: 'Amélie Hugo, 26 anos, nascida na França. Médica de formação, ela/dela. Sua habilidade com Primeiros Socorros e Psicologia a tornam o suporte vital do grupo. Foi ela quem, com sangue frio impressionante, abriu o abdômen do Professor Sanchez no chão da Universidade de Lima para extrair uma criatura parasita — e salvou sua vida. Psicóloga por necessidade e cirurgiã por circunstância, Amélie carrega os horrores que viu com uma compostura que assusta até os companheiros mais endurecidos.',
    atributos: {
      FOR: 35, CON: 55, TAM: 40, DES: 50,
      APA: 55, INT: 80, POD: 60, EDU: 65,
    },
    sanidade: 60,
    pv: 9,
    pm: 12,
    habilidades: [
      { nome: 'Medicina', valor: 70 },
      { nome: 'Primeiros Socorros', valor: 70 },
      { nome: 'Psicologia', valor: 40 },
      { nome: 'Psicanálise', valor: 43 },
      { nome: 'Persuasão', valor: 60 },
      { nome: 'Arte/Ofício (Base)', valor: 80 },
      { nome: 'Escutar', valor: 50 },
      { nome: 'Encontrar', valor: 25 },
      { nome: 'Língua Nativa', valor: 65 },
      { nome: 'Inglês', valor: 61 },
    ],
  },

  {
    id: 'claire-johnson',
    nome: 'Claire Johnson',
    ocupacao: 'Jornalista',
    tipo: 'PJ',
    status: 'Vivo',
    avatar: 'assets/img/personagens/claire-johnson.png',
    bioCurta: 'Jornalista inglesa de 30 anos radicada na Rússia. Perspicaz e corajosa, usa a pena e a observação para desvendar verdades que outros preferem esconder. Admiradora de Jackson Elias, cujos livros sobre cultos a inspiraram a ir mais fundo nas histórias que o mundo tenta silenciar.',
    bioCompleta: 'Claire Johnson, 30 anos, nascida na Inglaterra, residente na Rússia. Jornalista, ela/dela. Admiradora confessa de Jackson Elias — cuja morte no Chelsea Hotel a abalou profundamente e acirrou sua determinação. Sua Psicologia apurada (50%) e sua capacidade de Encontrar pistas (65%) a tornam a investigadora mais afiada do grupo em ambientes urbanos. Foi uma das primeiras a ver o corpo de Trinidad Rizo no almoxarifado da universidade e sofreu um ataque de pânico que revelou o quanto esses horrores cobram um preço mesmo dos mais fortes.',
    atributos: {
      FOR: 40, CON: 65, TAM: 60, DES: 45,
      APA: 75, INT: 80, POD: 65, EDU: 70,
    },
    sanidade: 65,
    pv: 12,
    pm: 13,
    habilidades: [
      { nome: 'Encontrar', valor: 65 },
      { nome: 'Psicologia', valor: 50 },
      { nome: 'Furtividade', valor: 50 },
      { nome: 'Charme', valor: 60 },
      { nome: 'Persuasão', valor: 45 },
      { nome: 'Escutar', valor: 60 },
      { nome: 'História', valor: 50 },
      { nome: 'Usar Bibliotecas', valor: 60 },
      { nome: 'Arte/Ofício (Base)', valor: 80 },
      { nome: 'Língua Nativa', valor: 70 },
    ],
  },

  {
    id: 'jaskiel-dandelion',
    nome: 'Jaskiel Dandelion',
    ocupacao: 'Músico',
    tipo: 'PJ',
    status: 'Vivo',
    avatar: 'assets/img/personagens/jaskiel-dandelion.png',
    bioCurta: 'Músico polonês de 27 anos que viaja pelo mundo sem destino fixo. Seu charme natural e sua capacidade de escutar o que outros ignoram o tornam um investigador improvável — e surpreendentemente eficaz. Perdeu um braço durante os horrores de Londres.',
    bioCompleta: 'Jaskiel Dandelion, 27 anos, nascido na Polônia, sem residência fixa ("Pelo mundo neahh"). Músico, ele/dele. Charme 70% e Escutar 60% fazem dele o negociador natural do grupo. Já foi confundido com morto, já perdeu membros, já encarou criaturas que não deveriam existir — e continua tocando. Sua presença leve e sua lábia são a cola social que mantém o grupo funcional quando os nervos estão à flor da pele.',
    atributos: {
      FOR: 20, CON: 55, TAM: 60, DES: 75,
      APA: 70, INT: 60, POD: 55, EDU: 30,
    },
    sanidade: 55,
    pv: 11,
    pm: 11,
    habilidades: [
      { nome: 'Charme', valor: 70 },
      { nome: 'Escutar', valor: 60 },
      { nome: 'Lábia', valor: 70 },
      { nome: 'Furtividade', valor: 60 },
      { nome: 'Encontrar', valor: 50 },
      { nome: 'Persuasão', valor: 50 },
      { nome: 'Esquivar', valor: 47 },
      { nome: 'Inglês', valor: 50 },
      { nome: 'Língua Nativa', valor: 30 },
    ],
  },

  {
    id: 'marina-sebrova',
    nome: 'Marina Sebrova',
    ocupacao: 'Ex-oficial da Força Aérea Imperial Russa',
    tipo: 'PJ',
    status: 'Vivo',
    avatar: 'assets/img/personagens/marina-sebrova.png',
    bioCurta: 'Veterana russa de 54 anos, ex-pilota da Força Aérea Imperial. Forte, pragmática e sem paciência para rodeios. Sua experiência militar e habilidade com armas de fogo fazem dela o músculo do grupo — quando não está convencendo todo mundo com sua lábia habitual.',
    bioCompleta: 'Marina Sebrova, 54 anos, nascida na Rússia. Ex-oficial da Força Aérea Imperial Russa, ela/dela. A mais velha e experiente do grupo. Com STR 75, CON 75 e Pistola 70%, Marina é quem resolve os problemas que não se resolvem com palavras — embora sua Persuasão de 65% e seu Russo 60% provem que ela é igualmente perigosa numa negociação. Foi ela quem convenceu o Condestável Tumwell a ceder sua espingarda calibre 12 em Lesser Edale, e quem pilotou aviões sob pressão quando a situação exigia. Seu DB 1D4 e build +1 falam por si.',
    atributos: {
      FOR: 75, CON: 75, TAM: 65, DES: 60,
      APA: 35, INT: 45, POD: 80, EDU: 60,
    },
    sanidade: 80,
    pv: 14,
    pm: 16,
    habilidades: [
      { nome: 'Pistola', valor: 70 },
      { nome: 'Rifles/Escopetas', valor: 25 },
      { nome: 'Pilotar (Avião)', valor: 70 },
      { nome: 'Persuasão', valor: 65 },
      { nome: 'Intimidação', valor: 50 },
      { nome: 'Encontrar', valor: 50 },
      { nome: 'Navegação', valor: 65 },
      { nome: 'Russo', valor: 60 },
      { nome: 'Inglês', valor: 30 },
      { nome: 'Sobrevivência (Base)', valor: 60 },
    ],
  },

  {
    id: 'tonho-monteiro',
    nome: 'Tonho Monteiro',
    ocupacao: 'Carpinteiro',
    tipo: 'PJ',
    status: 'Morto',
    avatar: 'assets/img/personagens/tonho-monteiro.png',
    bioCurta: 'Carpinteiro brasileiro de 40 anos. Habilidoso com as mãos e com uma espada, Tonho carregava uma força silenciosa que mantinha o grupo em movimento. Perdeu a vida durante a campanha, deixando um vazio que seus companheiros sentem a cada decisão difícil.',
    bioCompleta: 'Tonho Monteiro, 40 anos, brasileiro. Carpinteiro, he/him. O homem prático do grupo — quando havia algo para consertar, carregar ou cortar, Tonho estava lá. Consertos Mecânicos 70%, Carpintaria 80% e Sword 80% descrevem um homem que resolvia problemas com as mãos, sejam elas segurando uma ferramenta ou uma lâmina. Sua Lábia surpreendente de 80% e Persuasão de 70% escondiam uma inteligência social que poucos esperavam de um carpinteiro. Foi derrubado por uma pancada na cabeça no almoxarifado da Universidade de Lima ainda no Prólogo — e sobreviveu a horrores que poucas pessoas veriam. Não sobreviveu ao fim.',
    atributos: {
      FOR: 25, CON: 35, TAM: 45, DES: 80,
      APA: 55, INT: 65, POD: 50, EDU: 65,
    },
    sanidade: 50,
    pv: 8,
    pm: 10,
    habilidades: [
      { nome: 'Carpintaria', valor: 80 },
      { nome: 'Sword', valor: 80 },
      { nome: 'Consertos Mecânicos', valor: 70 },
      { nome: 'Persuasão', valor: 70 },
      { nome: 'Lábia', valor: 80 },
      { nome: 'Mundo Natural', valor: 50 },
      { nome: 'Esquivar', valor: 40 },
      { nome: 'Língua Nativa', valor: 65 },
      { nome: 'Nível de Crédito', valor: 50 },
    ],
  },

  // ─── ALIADOS (PNJ) ─────────────────────────────────────────────────────────

  {
    id: 'jackson-elias',
    nome: 'Jackson Elias',
    ocupacao: 'Escritor e Jornalista de Ocultismo',
    tipo: 'PNJ',
    status: 'Morto',
    avatar: 'assets/img/personagens/jackson-elias.png',
    bioCurta: 'Escritor americano especializado em cultos mortais. Autor de obras como "Sons of Death". Seu assassinato ritual no Chelsea Hotel em Nova York desencadeou toda a investigação.',
    bioCompleta: 'Jackson Elias passou anos investigando cultos mortais ao redor do mundo, documentando suas práticas em livros que o tornaram relativamente famoso. Sua última investigação — sobre a expedição Carlyle e um culto que operava desde o Peru — o levou à morte. Assassinado com símbolos rituais gravados na pele no Chelsea Hotel, Nova York, sua morte é o ponto de partida da campanha. Claire Johnson o conhecia e o admirava. No Peru, se disfarçou de Jesse Hughes para se aproximar dos investigadores sem alertar de Mendonza. Suas últimas palavras nunca foram ditas.',
    atributos: {
      FOR: 55, CON: 60, TAM: 60, DES: 65,
      APA: 65, INT: 80, POD: 65, EDU: 85,
    },
    sanidade: 0,
    pv: 12,
    pm: 13,
    habilidades: [
      { nome: 'Usar Bibliotecas', valor: 75 },
      { nome: 'Ocultismo', valor: 55 },
      { nome: 'Persuasão', valor: 65 },
      { nome: 'Disfarce', valor: 50 },
    ],
  },

  // ─── ANTAGONISTAS ──────────────────────────────────────────────────────────

  {
    id: 'nyarlathotep',
    nome: 'Nyarlathotep',
    ocupacao: 'O Faraó Rastejante — Deus Externo',
    tipo: 'Antagonista',
    status: 'Vivo',
    avatar: 'assets/img/personagens/nyarlathotep.png',
    bioCurta: 'O Caos Rastejante. Mensageiro dos Outros Deuses. Nyarlathotep assume mil faces para manipular a humanidade rumo à destruição — e seu plano final está prestes a se completar.',
    bioCompleta: 'Nyarlathotep é o único dos Grandes Antigos que age ativamente entre os mortais, manipulando cultos ao redor do mundo. Diferente de Cthulhu ou Hastur, que dormem, Nyarlathotep está desperto e furioso. Suas manifestações variam — do Faraó Negro ao Mensageiro, da Figura Negra ao Deus Rastejante do Caos — mas seu objetivo é sempre o mesmo: o fim de toda sanidade e ordem.',
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
    avatar: 'assets/img/personagens/edward-gavigan.png',
    bioCurta: 'Respeitável diretor de museu por fora, alto sacerdote do Culto do Faraó Negro por dentro. Opera a partir de sua mansão em Mayfair, coordenando as operações britânicas do culto.',
    bioCompleta: 'Edward Gavigan é um dos antagonistas humanos mais sofisticados da campanha. Sua fachada de estudioso egípcio e homem da alta sociedade londrina é impecável. Por baixo dela, é um devoto fanático de Nyarlathotep que coordenou a logística da expedição Carlyle e continua coordenando as operações do culto na Europa. Os investigadores o confrontaram na Fundação Penhew — suas palavras finais foram uma ameaça velada que assombrou o grupo por sessões seguidas.',
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
      { nome: 'Árabe', valor: 70 },
    ],
  },
];
