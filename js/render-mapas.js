/**
 * render-mapas.js — Renderiza o grid de locações e modal de mapa em mapas.html.
 *
 * Lê LOCAIS (data/locais.js) e gera os cards de país com:
 *  - imagem do mapa (real ou placeholder)
 *  - nome do país + cidade
 *  - descrição e clima
 *  - bloco do culto residente (foto + nome + descrição)
 *  - botão "Expandir mapa" → modal #mapa-modal
 *
 * Delegação de eventos no #grid-locais para o botão de expansão.
 */

(function () {
  'use strict';

  // ─── Helpers ────────────────────────────────────────────────────────────────

  /**
   * Gera bloco de imagem de mapa — real ou placeholder temático.
   * @param {string|null} src
   * @param {string} pais
   * @returns {string}
   */
  function htmlImagemMapa(src, pais) {
    if (src) {
      return `<img
        src="${src}"
        alt="Mapa de ${pais}"
        class="card-mapa-img"
        loading="lazy"
      />`;
    }
    return `<div class="card-mapa-img placeholder-img" aria-label="Mapa de ${pais} — imagem a adicionar">
      <i class="bi bi-map" style="font-size:2.5rem;" aria-hidden="true"></i>
    </div>`;
  }

  /**
   * Gera bloco do culto residente.
   * @param {{ nome, foto, descricao }} culto
   * @param {string} pais
   * @returns {string}
   */
  function htmlCulto(culto, pais) {
    const fotoHtml = culto.foto
      ? `<img src="${culto.foto}" alt="Culto em ${pais}" class="culto-foto" loading="lazy" />`
      : `<div class="culto-foto placeholder-img" aria-label="Foto do culto em ${pais}">
           <i class="bi bi-eye-fill" style="font-size:1.8rem;" aria-hidden="true"></i>
         </div>`;

    return `
      <div class="culto-bloco">
        <div class="culto-header">
          <i class="bi bi-eye-fill me-2" aria-hidden="true"></i>
          <span class="culto-titulo">Culto Residente</span>
        </div>
        ${fotoHtml}
        <p class="culto-nome">${culto.nome}</p>
        <p class="culto-descricao">${culto.descricao}</p>
      </div>`.trim();
  }

  /**
   * Gera o HTML completo do card de uma locação.
   * @param {Object} local
   * @returns {string}
   */
  function htmlCard(local) {
    const temMapa = !!local.mapa;

    return `
      <div class="col-12 col-md-6 col-xl-4 d-flex">
        <article class="card-portal card-mapa w-100" aria-label="Locação: ${local.pais}">

          <!-- Imagem do mapa -->
          <div class="card-mapa-topo">
            ${htmlImagemMapa(local.mapa, local.pais)}
            ${temMapa ? `
            <button
              class="btn-expandir-mapa"
              data-mapa-src="${local.mapa}"
              data-mapa-pais="${local.pais}"
              aria-label="Expandir mapa de ${local.pais}"
              title="Expandir mapa"
            >
              <i class="bi bi-arrows-fullscreen" aria-hidden="true"></i>
            </button>` : ''}
          </div>

          <!-- Corpo do card -->
          <div class="card-mapa-corpo">

            <div class="card-mapa-head">
              <i class="bi ${local.icone} card-mapa-icone" aria-hidden="true"></i>
              <div>
                <h3 class="card-mapa-pais">${local.pais}</h3>
                <p class="card-mapa-cidade">
                  <i class="bi bi-geo-alt me-1" aria-hidden="true"></i>${local.cidade}
                </p>
              </div>
            </div>

            <p class="card-mapa-descricao">${local.descricao}</p>

            <div class="card-mapa-clima">
              <i class="bi bi-thermometer-sun me-1" aria-hidden="true"></i>
              <span>${local.clima}</span>
            </div>

            ${htmlCulto(local.culto, local.pais)}

          </div><!-- /card-mapa-corpo -->
        </article>
      </div>`.trim();
  }

  // ─── Renderização ────────────────────────────────────────────────────────────

  /**
   * Renderiza todos os cards no #grid-locais.
   */
  function renderLocais() {
    const grid = document.getElementById('grid-locais');
    if (!grid) return;

    if (!Array.isArray(LOCAIS) || LOCAIS.length === 0) {
      grid.innerHTML = `<div class="col-12 text-center" style="color:var(--cor-tinta-suave);font-style:italic;padding:2rem 0;">
        <i class="bi bi-exclamation-circle me-2" aria-hidden="true"></i>
        Nenhuma locação encontrada em data/locais.js.
      </div>`;
      return;
    }

    grid.innerHTML = LOCAIS.map(htmlCard).join('\n');
  }

  // ─── Modal de expansão de mapa ───────────────────────────────────────────────

  /**
   * Abre o modal #mapa-modal com a imagem ampliada do mapa.
   * @param {string} src    - URL da imagem
   * @param {string} pais   - nome do país (para título e alt)
   */
  function expandirMapa(src, pais) {
    const elTitulo = document.getElementById('mapa-modal-titulo');
    const elCorpo  = document.getElementById('mapa-modal-corpo');

    if (elTitulo) elTitulo.textContent = 'Mapa — ' + pais;

    if (elCorpo) {
      elCorpo.innerHTML = `<img
        src="${src}"
        alt="Mapa expandido de ${pais}"
        class="mapa-modal-img"
      />`;
    }

    const modalEl = document.getElementById('mapa-modal');
    if (modalEl && typeof bootstrap !== 'undefined') {
      bootstrap.Modal.getOrCreateInstance(modalEl).show();
    }
  }

  // ─── Eventos ─────────────────────────────────────────────────────────────────

  /**
   * Inicializa a página: renderiza cards e registra eventos.
   */
  function iniciar() {
    if (typeof LOCAIS === 'undefined') return;

    renderLocais();

    // Delegação de eventos no grid — botão de expansão de mapa
    const grid = document.getElementById('grid-locais');
    if (grid) {
      grid.addEventListener('click', function (e) {
        const btn = e.target.closest('.btn-expandir-mapa');
        if (!btn) return;
        const src  = btn.getAttribute('data-mapa-src');
        const pais = btn.getAttribute('data-mapa-pais');
        if (src) expandirMapa(src, pais);
      });
    }
  }

  document.addEventListener('DOMContentLoaded', iniciar);
})();
