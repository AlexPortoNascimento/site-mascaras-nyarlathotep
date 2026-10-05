/**
 * footer.js — Insere o ano atual no rodapé dinamicamente.
 *
 * Usa o elemento com id="ano-atual" (presente em todas as páginas).
 * Garante que o ano exibido seja sempre o ano corrente, sem manutenção manual.
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const elementoAno = document.getElementById('ano-atual');
    if (elementoAno) {
      elementoAno.textContent = new Date().getFullYear();
    }
  });
})();
