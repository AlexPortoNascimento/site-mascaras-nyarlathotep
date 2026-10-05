/**
 * destaques.js — Renderiza os 3 cards de destaque da index.html.
 *
 * Lê os dados de CAPITULOS (data/sessoes.js), PERSONAGENS (data/personagens.js)
 * e LOCAIS (data/locais.js) e monta os cards dinamicamente.
 *
 * Lógica de seleção:
 *  - Capítulo em destaque: último capítulo com pelo menos uma sessão real (data != '00/00/0000')
 *    — se nenhum, usa o primeiro do array como fallback.
 *  - Personagem em destaque: primeiro PJ do array (o mais proeminente).
 *  - Local em destaque: primeiro local do array LOCAIS.
 *
 * Para alterar qual item aparece em destaque, reordene os arrays nos arquivos
 * de dados — o primeiro elegível de cada tipo sempre será exibido.
 */

(function () {
  'use strict';

  // ─── Helpers ──────────────────────────────────────────────────────────────

  /**
   * Retorna o HTML do badge de status de um personagem.
   * @param {string} status
   * @returns {string}
   */
  function badgeStatus(status) {
    const mapa = {
      'Vivo':   'badge-vivo',
      'Morto':  'badge-morto',
      'Preso':  'badge-preso',
      'Ferido': 'badge-ferido',
    };
    const cls = mapa[status] || 'badge-vivo';
    return `<span class="badge-status ${cls}">${status}</span>`;
  }

  /**
   * Retorna o HTML do bloco de imagem — real ou placeholder.
   * @param {string|null} src  - caminho da imagem
   * @param {string}      alt  - texto alternativo
   * @param {string}      icon - classe bi-* para o placeholder
   * @returns {string}
   */
  function blocoImagem(src, alt, icon) {
    if (src) {
      return `<img src="${src}" alt="${alt}" class="w-100" style="height:180px;object-fit:cover;border-bottom:var(--borda);" loading="lazy" />`;
    }
    return `
      <div class="placeholder-img placeholder-img-md" aria-label="${alt}">
        <i class="bi ${icon}" style="font-size:2.5rem;" aria-hidden="true"></i>
      </div>`;
  }

  // ─── Card 1: Capítulo em destaque ──────────────────────────────────────────

  function renderCardCapitulo(container) {
    if (typeof CAPITULOS === 'undefined' || !CAPITULOS.length) return;

    // Prefere o último capítulo com sessão real; fallback para o primeiro
    const comSessaoReal = CAPITULOS.filter(function (c) {
      return c.sessoes.some(function (s) { return s.data !== '00/00/0000'; });
    });
    const cap = comSessaoReal.length
      ? comSessaoReal[comSessaoReal.length - 1]
      : CAPITULOS[0];

    // Última sessão real, ou a primeira placeholder
    const sessaoReal = cap.sessoes.filter(function (s) { return s.data !== '00/00/0000'; });
    const ultimaSessao = sessaoReal.length ? sessaoReal[sessaoReal.length - 1] : cap.sessoes[0];

    container.innerHTML = `
      ${blocoImagem(null, 'Capa do capítulo ' + cap.pais, 'bi-book')}
      <div class="p-3 d-flex flex-column h-100-rest">
        <div class="destaque-tag mb-2">
          <i class="bi bi-bookmark-fill me-1" aria-hidden="true"></i>Último Capítulo
        </div>
        <h3 class="card-title mb-1">${cap.capitulo}</h3>
        <p class="destaque-local mb-2">
          <i class="bi bi-geo-alt me-1" aria-hidden="true"></i>${cap.pais}
        </p>
        <p class="card-text flex-grow-1">${ultimaSessao.titulo}</p>
        <a href="sessoes.html" class="btn-portal-secundario d-inline-block mt-3 align-self-start">
          <i class="bi bi-arrow-right me-1" aria-hidden="true"></i>Ver Crônicas
        </a>
      </div>`;
  }

  // ─── Card 2: Personagem em destaque ────────────────────────────────────────

  function renderCardPersonagem(container) {
    if (typeof PERSONAGENS === 'undefined' || !PERSONAGENS.length) return;

    // Primeiro PJ (protagonista), fallback para qualquer personagem
    const pj = PERSONAGENS.find(function (p) { return p.tipo === 'PJ'; }) || PERSONAGENS[0];

    container.innerHTML = `
      ${blocoImagem(pj.avatar, 'Avatar de ' + pj.nome, 'bi-person-badge')}
      <div class="p-3 d-flex flex-column h-100-rest">
        <div class="destaque-tag mb-2">
          <i class="bi bi-person-fill me-1" aria-hidden="true"></i>Investigador em Destaque
        </div>
        <h3 class="card-title mb-1">${pj.nome}</h3>
        <p class="destaque-local mb-2">
          ${badgeStatus(pj.status)}
          <span class="ms-2" style="font-size:0.85rem;color:var(--cor-tinta-media);">${pj.ocupacao}</span>
        </p>
        <p class="card-text flex-grow-1">${pj.bioCurta}</p>
        <a href="personagens.html" class="btn-portal-secundario d-inline-block mt-3 align-self-start">
          <i class="bi bi-arrow-right me-1" aria-hidden="true"></i>Ver Fichas
        </a>
      </div>`;
  }

  // ─── Card 3: Local em destaque ─────────────────────────────────────────────

  function renderCardLocal(container) {
    if (typeof LOCAIS === 'undefined' || !LOCAIS.length) return;

    const local = LOCAIS[0];

    container.innerHTML = `
      ${blocoImagem(local.mapa, 'Mapa de ' + local.pais, 'bi-map')}
      <div class="p-3 d-flex flex-column h-100-rest">
        <div class="destaque-tag mb-2">
          <i class="bi bi-globe-americas me-1" aria-hidden="true"></i>Próxima Locação
        </div>
        <h3 class="card-title mb-1">${local.pais}</h3>
        <p class="destaque-local mb-2">
          <i class="bi bi-buildings me-1" aria-hidden="true"></i>${local.cidade}
        </p>
        <p class="card-text flex-grow-1">${local.descricao.substring(0, 120).trimEnd()}…</p>
        <a href="mapas.html" class="btn-portal-secundario d-inline-block mt-3 align-self-start">
          <i class="bi bi-arrow-right me-1" aria-hidden="true"></i>Ver Mapas
        </a>
      </div>`;
  }

  // ─── Init ──────────────────────────────────────────────────────────────────

  function iniciarDestaques() {
    const grid = document.getElementById('cards-destaques');
    if (!grid) return;

    // Obtém os 3 elementos col existentes ou cria se necessário
    const cols = grid.querySelectorAll('.col-12');
    if (cols.length < 3) return;

    // Limpa conteúdo placeholder e re-popula
    const wrappers = [
      cols[0].querySelector('.card-portal'),
      cols[1].querySelector('.card-portal'),
      cols[2].querySelector('.card-portal'),
    ];

    if (wrappers[0]) renderCardCapitulo(wrappers[0]);
    if (wrappers[1]) renderCardPersonagem(wrappers[1]);
    if (wrappers[2]) renderCardLocal(wrappers[2]);
  }

  document.addEventListener('DOMContentLoaded', iniciarDestaques);
})();
