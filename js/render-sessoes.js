(function () {
  'use strict';

  function textoParaParagrafos(texto) {
    return texto
      .trim()
      .split(/\n\s*\n/)  
      .filter(function (p) { return p.trim(); })
      .map(function (p) {
        return '<p>' + p.trim().replace(/\n/g, ' ') + '</p>';
      })
      .join('');
  }

  function htmlSessao(sessao, idxSessao) {
    const temData   = sessao.data !== '00/00/0000';
    const badgeData = temData
      ? `<span class="sessao-data"><i class="bi bi-calendar3 me-1" aria-hidden="true"></i>${sessao.data}</span>`
      : `<span class="sessao-data sessao-data--pendente"><i class="bi bi-calendar-x me-1" aria-hidden="true"></i>Data a confirmar</span>`;

    return `
      <article class="sessao-item${!temData ? ' sessao-item--pendente' : ''}" aria-label="${sessao.titulo}">
        ${badgeData}
        <h4>${sessao.titulo}</h4>
        <div class="sessao-resumo">${textoParaParagrafos(sessao.resumo)}</div>
      </article>`.trim();
  }

  function htmlCapitulo(cap, idxCap) {
    const aberto       = idxCap === 0;
    const colapsadoCls = aberto ? '' : ' collapsed';
    const showCls      = aberto ? ' show' : '';
    const expanded     = aberto ? 'true' : 'false';

    const headerId = `heading-${cap.id}`;
    const bodyId   = `collapse-${cap.id}`;

    const sessoesHtml = cap.sessoes
      .map(function (s, i) { return htmlSessao(s, i); })
      .join('\n');

    const totalSessoes  = cap.sessoes.length;
    const sessoesReais  = cap.sessoes.filter(function (s) { return s.data !== '00/00/0000'; }).length;
    const badgeContagem = `<span class="sessao-contagem" aria-label="${sessoesReais} de ${totalSessoes} sessões jogadas">${sessoesReais}/${totalSessoes}</span>`;

    return `
      <div class="accordion-item" id="cap-${cap.id}">
        <h3 class="accordion-header" id="${headerId}">
          <button
            class="accordion-button${colapsadoCls}"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#${bodyId}"
            aria-expanded="${expanded}"
            aria-controls="${bodyId}"
          >
            <i class="bi ${cap.icone} me-2" aria-hidden="true"></i>
            <span class="capitulo-nome">${cap.capitulo}</span>
            ${badgeContagem}
          </button>
        </h3>
        <div
          id="${bodyId}"
          class="accordion-collapse collapse${showCls}"
          aria-labelledby="${headerId}"
          data-bs-parent="#accordion-capitulos"
        >
          <div class="accordion-body">
            ${sessoesHtml}
          </div>
        </div>
      </div>`.trim();
  }

  function renderCapitulos() {
    const container = document.getElementById('accordion-capitulos');
    if (!container) return;

    if (!Array.isArray(CAPITULOS) || CAPITULOS.length === 0) {
      container.innerHTML = `
        <p class="text-center" style="color: var(--cor-tinta-suave); font-style: italic; padding: 2rem 0;">
          <i class="bi bi-exclamation-circle me-2" aria-hidden="true"></i>
          Nenhum capítulo encontrado em data/sessoes.js.
        </p>`;
      return;
    }

    container.innerHTML = CAPITULOS
      .map(function (cap, idx) { return htmlCapitulo(cap, idx); })
      .join('\n');
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (typeof CAPITULOS === 'undefined') return;
    renderCapitulos();
  });
})();
