# Portal da Campanha — Máscaras de Nyarlathotep

> Hub interativo e enciclopédia digital de apoio à campanha de RPG *Máscaras de Nyarlathotep* para *Chamado de Cthulhu* 7ª edição. Ambientada em 1925.

---

## 📋 Requisitos Técnicos

- **HTML5** — Semântico, acessível, validado (W3C)
- **CSS3** — Mobile-first, variáveis CSS, sem pré-processadores
- **JavaScript ES6+** — Vanilla JS puro, sem frameworks
- **Bootstrap 5.3** — Via CDN (grid, navbar, accordion, cards, modal, badges)
- **Bootstrap Icons 1.11** — Via CDN
- **Google Fonts** — Cinzel Decorative, Cinzel, EB Garamond (CDN)

> O site funciona abrindo diretamente via `file://` (sem servidor local necessário).

---

## 🗂️ Estrutura de Arquivos

```
site-mascaras-nyarlathotep/
│
├── index.html              # Home / Mural Principal
├── sessoes.html            # Crônicas e Capítulos
├── personagens.html        # Investigadores e Figuras
├── mapas.html              # Mapas e Locações
│
├── css/
│   ├── variables.css       # Variáveis CSS (paleta, fontes, hooks de background)
│   └── style.css           # Estilos customizados (carregado após Bootstrap)
│
├── js/
│   ├── data/
│   │   ├── sessoes.js       # Array de capítulos → sessões
│   │   ├── personagens.js   # Array de personagens (atributos CoC 7e)
│   │   └── locais.js        # Array de países/locações
│   │
│   ├── components/
│   │   ├── navbar.js        # Marca link ativo na navbar via data-page
│   │   └── footer.js        # Ano atual dinâmico no rodapé
│   │
│   ├── dice-roller.js       # Rolador de dados (index)
│   ├── countdown.js         # Contagem regressiva próxima sessão (index)
│   ├── render-sessoes.js    # Renderiza accordion de capítulos/sessões
│   ├── render-personagens.js# Renderiza cards + filtro + modal de ficha
│   └── render-mapas.js      # Renderiza grid de locações + modal de mapa
│
└── assets/
    └── img/
        ├── backgrounds/     # hero.jpg, textura.png, etc.
        ├── personagens/     # avatares dos personagens
        ├── mapas/           # mapas dos países
        └── locais/          # fotos de locações e cultos
```

---

## 🎨 Como Adicionar Backgrounds (via variáveis CSS)

Abra `css/variables.css` e localize a seção **HOOKS DE BACKGROUND**.

Substitua `none` pela URL da imagem desejada:

```css
/* Antes: */
--bg-hero: none;

/* Depois: */
--bg-hero: url('../assets/img/backgrounds/hero.jpg');
```

### Variáveis disponíveis

| Variável               | Onde aplica                        |
|------------------------|------------------------------------|
| `--bg-hero`            | Hero da `index.html`               |
| `--bg-textura-global`  | Textura em todo o `body`           |
| `--bg-page-header`     | Banner de topo das páginas internas|
| `--bg-navbar`          | Textura na navbar                  |
| `--bg-footer`          | Textura no footer                  |
| `--bg-sessoes`         | Fundo específico de `sessoes.html` |
| `--bg-personagens`     | Fundo específico de `personagens.html` |
| `--bg-mapas`           | Fundo específico de `mapas.html`   |

> **Ajuste de sobreposição:** se o texto ficar ilegível sobre a imagem, aumente a opacidade do overlay:
> ```css
> --overlay-hero: rgba(43, 33, 23, 0.75);  /* de 0.60 para 0.75 */
> ```

---

## 📅 Como Configurar a Próxima Sessão (Countdown)

Abra `js/countdown.js` e altere a constante no topo do arquivo:

```js
const PROXIMA_SESSAO = '2025-11-15T20:00:00';  // Data e hora locais
const LABEL_DATA = 'Próxima sessão: 15 de Novembro de 2025, às 20h';
```

---

## 👥 Como Adicionar Personagens

Abra `js/data/personagens.js` e adicione um objeto ao array `PERSONAGENS`:

```js
{
  id: 'nome-unico',
  nome: 'Nome Completo',
  ocupacao: 'Detetive Particular',
  tipo: 'PJ',           // 'PJ' | 'PNJ' | 'Antagonista'
  status: 'Vivo',       // 'Vivo' | 'Morto' | 'Preso' | 'Ferido'
  avatar: 'assets/img/personagens/nome.jpg',  // ou null
  bioCurta: 'Texto curto para o card.',
  bioCompleta: 'Texto longo para o modal.',
  atributos: {
    FOR: 60, CON: 65, TAM: 55, DES: 70,
    APA: 60, INT: 75, POD: 65, EDU: 80,
  },
  sanidade: 65,
  pv: 12,
  pm: 13,
  habilidades: [
    { nome: 'Biblioteca', valor: 60 },
    { nome: 'Medicina', valor: 45 },
  ],
}
```

---

## 📖 Como Adicionar Sessões

Abra `js/data/sessoes.js`, localize o capítulo correspondente e adicione ao array `sessoes`:

```js
{
  data: '15/11/2025',
  titulo: 'Sessão 3 — O Segredo da Mansão Gavigan',
  resumo: 'Texto completo do resumo da sessão...',
}
```

---

## 🗺️ Como Atualizar Locações

Abra `js/data/locais.js` e edite as propriedades do país desejado. Para adicionar imagem:

```js
mapa: 'assets/img/mapas/london.jpg',
culto: {
  nome: 'A Ordem do Faraó Negro',
  foto: 'assets/img/locais/culto-egito.jpg',
  descricao: 'Descrição do culto...',
}
```

---

## 📜 Créditos

- *Chamado de Cthulhu* e *Máscaras de Nyarlathotep* são marcas registradas da **Chaosium Inc.**
- H.P. Lovecraft (1890–1937) — criador do universo Cthulhu Mythos
- Campanha desenvolvida por Larry DiTillio e Lynn Willis
