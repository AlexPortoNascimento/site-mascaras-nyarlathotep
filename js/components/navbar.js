/**
 * navbar.js — Marca o link ativo na navbar com base no atributo
 * data-page do <html> e no href atual.
 *
 * Convenção: cada <a> com data-nav="<valor>" na navbar corresponde ao
 * atributo data-page="<valor>" na tag <html> da página.
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    // Lê a página atual via atributo data-page no elemento <html>
    const paginaAtual = document.documentElement.getAttribute('data-page') || '';

    // Marca links simples (data-nav direto)
    const linksNav = document.querySelectorAll('.navbar-portal .nav-link[data-nav]');
    linksNav.forEach(function (link) {
      if (link.getAttribute('data-nav') === paginaAtual) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });

    // Marca dropdown-toggle quando a página pertence ao grupo do dropdown
    // Ex: sessoes e personagens pertencem ao grupo "campanha";
    //     mapas pertence ao grupo "mundo"
    const gruposDoPagina = {
      sessoes:      'campanha',
      personagens:  'campanha',
      mapas:        'mundo',
      home:         'home',
    };

    const grupoPagina = gruposDoPagina[paginaAtual];
    if (grupoPagina) {
      const togglesDropdown = document.querySelectorAll('.navbar-portal .dropdown-toggle[data-nav]');
      togglesDropdown.forEach(function (toggle) {
        if (toggle.getAttribute('data-nav') === grupoPagina) {
          toggle.classList.add('active');
        }
      });
    }
  });
})();
