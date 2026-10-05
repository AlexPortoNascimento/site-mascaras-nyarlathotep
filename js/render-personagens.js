(function () {
  'use strict';

  let filtroAtivo = 'todos';


  const BADGE_STATUS = {
    'Vivo':   'badge-vivo',
    'Morto':  'badge-morto',
    'Preso':  'badge-preso',
    'Ferido': 'badge-ferido',
  };

  const ICONE_TIPO = {
    'PJ':          'bi-person-fill',
    'PNJ':         'bi-person-lines-fill',
    'Antagonista': 'bi-person-x-fill',
  };

  function htmlAvatar(src, nome) {
    if (src) {
      return `<img
        src="${src}"
        alt="Avatar de ${nome}"
        class="card-personagem-avatar"
        loading="lazy"
      />`;
    }
    return `<div class="card-personagem-avatar placeholder-img placeholder-img-sq" aria-label="Sem avatar para ${nome}">
      <i class="bi bi-person-square" style="font-size:3rem;" aria-hidden="true"></i>
    </div>`;
  }

  function htmlCard(p) {
    const badgeCls  = BADGE_STATUS[p.status]  || 'badge-vivo';
    const iconeTipo = ICONE_TIPO[p.tipo]       || 'bi-person';

    return `
      <div class="col-12 col-sm-6 col-lg-4 d-flex" data-tipo="${p.tipo}">
        <article
          class="card-portal card-personagem w-100"
          role="button"
          tabindex="0"
          data-id="${p.id}"
          aria-label="Ver ficha de ${p.nome}"
        >
          ${htmlAvatar(p.avatar, p.nome)}
          <div class="card-personagem-corpo">

            <div class="card-personagem-topo">
              <span class="card-personagem-tipo">
                <i class="bi ${iconeTipo} me-1" aria-hidden="true"></i>${p.tipo}
              </span>
              <span class="badge-status ${badgeCls}">${p.status}</span>
            </div>

            <h3 class="card-personagem-nome">${p.nome}</h3>
            <p class="card-personagem-ocupacao">${p.ocupacao}</p>
            <p class="card-personagem-bio">${p.bioCurta}</p>

            <div class="card-personagem-rodape">
              <span class="card-personagem-ver">
                Ver ficha completa <i class="bi bi-arrow-right ms-1" aria-hidden="true"></i>
              </span>
            </div>

          </div>
        </article>
      </div>`.trim();
  }

  function renderCards() {
    const grid = document.getElementById('grid-personagens');
    if (!grid) return;

    if (!Array.isArray(PERSONAGENS) || PERSONAGENS.length === 0) {
      grid.innerHTML = `<div class="col-12 text-center" style="color:var(--cor-tinta-suave);font-style:italic;padding:2rem 0;">
        <i class="bi bi-exclamation-circle me-2" aria-hidden="true"></i>
        Nenhum personagem encontrado em data/personagens.js.
      </div>`;
      return;
    }

    grid.innerHTML = PERSONAGENS.map(htmlCard).join('\n');
  }

  function aplicarFiltro(tipo) {
    filtroAtivo = tipo;

    const grid = document.getElementById('grid-personagens');
    if (!grid) return;

    const colunas = grid.querySelectorAll('[data-tipo]');
    colunas.forEach(function (col) {
      const visivel = tipo === 'todos' || col.getAttribute('data-tipo') === tipo;
      col.classList.toggle('d-none', !visivel);
    });

    const botoes = document.querySelectorAll('[data-filtro]');
    botoes.forEach(function (btn) {
      const ativo = btn.getAttribute('data-filtro') === tipo;
      btn.setAttribute('aria-pressed', ativo ? 'true' : 'false');

      if (ativo) {
        btn.classList.add('btn-portal-primario');
        btn.classList.remove('btn-portal-secundario');
      } else {
        btn.classList.remove('btn-portal-primario');
        btn.classList.add('btn-portal-secundario');
      }
    });
  }

  function abrirFicha(pid) {
    const personagem = PERSONAGENS.find(function (p) { return p.id === pid; });
    if (!personagem) return;

    const elTitulo = document.getElementById('ficha-modal-titulo');
    const elCorpo  = document.getElementById('ficha-modal-corpo');

    if (elTitulo) elTitulo.textContent = personagem.nome;

    if (elCorpo) {
      elCorpo.innerHTML = htmlFichaCompleta(personagem);
    }

    const modalEl = document.getElementById('ficha-modal');
    if (modalEl && typeof bootstrap !== 'undefined') {
      const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
      modal.show();
    }
  }

  function htmlFichaCompleta(p) {
    const badgeCls = BADGE_STATUS[p.status] || 'badge-vivo';

    const ATTRS = ['FOR', 'CON', 'TAM', 'DES', 'APA', 'INT', 'POD', 'EDU'];
    const atrsHtml = ATTRS.map(function (attr) {
      const val = p.atributos[attr] || '—';
      const metade   = val !== '—' ? Math.floor(val / 2)  : '—';
      const um_quinto = val !== '—' ? Math.floor(val / 5) : '—';
      return `<tr>
        <th scope="row">${attr}</th>
        <td>${val}</td>
        <td>${metade}</td>
        <td>${um_quinto}</td>
      </tr>`;
    }).join('');

    const habsHtml = (p.habilidades || []).map(function (h) {
      const pct = Math.min(100, h.valor);
      return `
        <div class="ficha-habilidade">
          <div class="ficha-hab-header">
            <span class="ficha-hab-nome">${h.nome}</span>
            <span class="ficha-hab-valor">${h.valor}%</span>
          </div>
          <div class="ficha-hab-barra-bg" role="progressbar" aria-valuenow="${h.valor}" aria-valuemin="0" aria-valuemax="100" aria-label="${h.nome}: ${h.valor}%">
            <div class="ficha-hab-barra" style="width:${pct}%"></div>
          </div>
        </div>`.trim();
    }).join('');

    return `
      <div class="ficha-modal-conteudo">

        <!-- Cabeçalho do personagem -->
        <div class="ficha-cabecalho d-flex gap-3 align-items-start mb-4">
          <div class="ficha-avatar-modal">
            ${p.avatar
              ? `<img src="${p.avatar}" alt="Avatar de ${p.nome}" class="ficha-avatar-img" />`
              : `<div class="ficha-avatar-placeholder"><i class="bi bi-person-square" aria-hidden="true"></i></div>`
            }
          </div>
          <div>
            <div class="d-flex align-items-center gap-2 mb-1 flex-wrap">
              <span class="badge-status ${badgeCls}">${p.status}</span>
              <span class="ficha-tipo-label">
                <i class="bi ${ICONE_TIPO[p.tipo] || 'bi-person'} me-1" aria-hidden="true"></i>${p.tipo}
              </span>
            </div>
            <p class="ficha-ocupacao-modal mb-2">${p.ocupacao}</p>
            <p class="ficha-bio-modal">${p.bioCompleta}</p>
          </div>
        </div>

        <!-- Estatísticas vitais -->
        <div class="ficha-vitais d-flex gap-3 flex-wrap mb-4">
          <div class="ficha-vital-item">
            <span class="ficha-vital-label">Sanidade</span>
            <span class="ficha-vital-valor">${p.sanidade}</span>
          </div>
          <div class="ficha-vital-item">
            <span class="ficha-vital-label">PV</span>
            <span class="ficha-vital-valor">${p.pv}</span>
          </div>
          <div class="ficha-vital-item">
            <span class="ficha-vital-label">PM</span>
            <span class="ficha-vital-valor">${p.pm}</span>
          </div>
        </div>

        <!-- Tabela de atributos -->
        <h4 class="ficha-secao-titulo">Atributos</h4>
        <div class="table-responsive mb-4">
          <table class="tabela-atributos">
            <thead>
              <tr>
                <th scope="col">Atributo</th>
                <th scope="col">Valor</th>
                <th scope="col">Metade</th>
                <th scope="col">1/5</th>
              </tr>
            </thead>
            <tbody>${atrsHtml}</tbody>
          </table>
        </div>

        <!-- Habilidades -->
        ${habsHtml ? `<h4 class="ficha-secao-titulo">Habilidades Principais</h4>
        <div class="ficha-habilidades mb-2">${habsHtml}</div>` : ''}

      </div>`.trim();
  }

  function iniciar() {
    if (typeof PERSONAGENS === 'undefined') return;

    renderCards();

    const barraFiltros = document.getElementById('filtros');
    if (barraFiltros) {
      barraFiltros.addEventListener('click', function (e) {
        const btn = e.target.closest('[data-filtro]');
        if (!btn) return;
        aplicarFiltro(btn.getAttribute('data-filtro'));
      });
    }

    const grid = document.getElementById('grid-personagens');
    if (grid) {
      grid.addEventListener('click', function (e) {
        const card = e.target.closest('[data-id]');
        if (!card) return;
        abrirFicha(card.getAttribute('data-id'));
      });
      grid.addEventListener('keydown', function (e) {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        const card = e.target.closest('[data-id]');
        if (!card) return;
        e.preventDefault();
        abrirFicha(card.getAttribute('data-id'));
      });
    }
  }

  document.addEventListener('DOMContentLoaded', iniciar);
})();
