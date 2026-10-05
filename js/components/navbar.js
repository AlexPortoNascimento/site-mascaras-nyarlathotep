/**
 * navbar.js — Marca o link ativo na navbar com base no atributo
 * data-page do <html>.
 *
 * Comportamento:
 *  1. Marca com .active o nav-link simples que corresponde à página atual
 *     (ex: "Início" fica ativo na index).
 *  2. Marca com .active o dropdown-toggle cujo grupo contém a página atual
 *     (ex: dropdown "Campanha" fica ativo em sessoes.html e personagens.html).
 *  3. Marca com .active o dropdown-item que aponta para a página atual
 *     (ex: "Crônicas & Capítulos" fica destacado dentro do dropdown em sessoes.html).
 *
 * Convenção: cada <a data-nav="X"> e <html data-page="X"> usam o mesmo valor.
 * O mapeamento de grupos define a qual dropdown cada página pertence.
 */

(function () {
  'use strict';

  /**
   * Mapeamento: data-page → grupo do dropdown-toggle (data-nav do toggle).
   * Adicione novas páginas aqui se o projeto crescer.
   */
  const GRUPOS = {
    sessoes:      'campanha',
    personagens:  'campanha',
    mapas:        'mundo',
    home:         'home',
  };

  /**
   * Mapeamento: data-page → href do arquivo correspondente.
   * Usado para marcar o dropdown-item correto dentro do menu aberto.
   */
  const HREF_POR_PAGINA = {
    home:         'index.html',
    sessoes:      'sessoes.html',
    personagens:  'personagens.html',
    mapas:        'mapas.html',
  };

  document.addEventListener('DOMContentLoaded', function () {
    const paginaAtual = document.documentElement.getAttribute('data-page') || '';

    // ── 1. Marca nav-link simples ──────────────────────────────────────────
    const linksNav = document.querySelectorAll('.navbar-portal .nav-link[data-nav]');
    linksNav.forEach(function (link) {
      if (link.getAttribute('data-nav') === paginaAtual) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });

    // ── 2. Marca dropdown-toggle do grupo ao qual a página pertence ────────
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

    // ── 3. Marca dropdown-item que aponta para a página atual ──────────────
    const hrefAtual = HREF_POR_PAGINA[paginaAtual];
    if (hrefAtual) {
      const itensDropdown = document.querySelectorAll('.navbar-portal .dropdown-item');
      itensDropdown.forEach(function (item) {
        const hrefItem = item.getAttribute('href') || '';
        // Marca apenas correspondência exata de arquivo (ignora links de âncora como sessoes.html#timeline)
        if (hrefItem === hrefAtual) {
          item.classList.add('active');
          item.setAttribute('aria-current', 'page');
        }
      });
    }
  });
})();
