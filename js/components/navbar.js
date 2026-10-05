(function () {
  'use strict';

  const GRUPOS = {
    sessoes:      'campanha',
    personagens:  'campanha',
    mapas:        'mundo',
    home:         'home',
  };

  const HREF_POR_PAGINA = {
    home:         'index.html',
    sessoes:      'sessoes.html',
    personagens:  'personagens.html',
    mapas:        'mapas.html',
  };

  document.addEventListener('DOMContentLoaded', function () {
    const paginaAtual = document.documentElement.getAttribute('data-page') || '';

    const linksNav = document.querySelectorAll('.navbar-portal .nav-link[data-nav]');
    linksNav.forEach(function (link) {
      if (link.getAttribute('data-nav') === paginaAtual) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });

    const grupoPagina = GRUPOS[paginaAtual];
    if (grupoPagina) {
      const togglesDropdown = document.querySelectorAll('.navbar-portal .dropdown-toggle[data-nav]');
      togglesDropdown.forEach(function (toggle) {
        if (toggle.getAttribute('data-nav') === grupoPagina) {
          toggle.classList.add('active');
          toggle.setAttribute('aria-current', 'true');
        }
      });
    }

    const hrefAtual = HREF_POR_PAGINA[paginaAtual];
    if (hrefAtual) {
      const itensDropdown = document.querySelectorAll('.navbar-portal .dropdown-item');
      itensDropdown.forEach(function (item) {
        const hrefItem = item.getAttribute('href') || '';
        if (hrefItem === hrefAtual) {
          item.classList.add('active');
          item.setAttribute('aria-current', 'page');
        }
      });
    }
  });
})();
