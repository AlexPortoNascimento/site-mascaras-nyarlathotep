/**
 * countdown.js — Contagem regressiva para a próxima sessão.
 *
 * ─── COMO CONFIGURAR ────────────────────────────────────────────────────────
 * Altere as constantes abaixo com a data/hora e o texto descritivo da sessão.
 *
 *   const PROXIMA_SESSAO = '2025-11-15T20:00:00';
 *   const LABEL_DATA = 'Próxima sessão: 15 de Novembro de 2025, às 20h';
 *
 * Formato: 'AAAA-MM-DDTHH:MM:SS' (fuso horário local do navegador).
 * ────────────────────────────────────────────────────────────────────────────
 */

(function () {
  'use strict';

  // ─── ⚙️  CONFIGURAÇÃO — edite aqui ────────────────────────────────────────
  const PROXIMA_SESSAO = '2026-10-19T20:00:00';
  const LABEL_DATA     = 'Próxima sessão: 19 de Outubro de 2026, às 20h00';
  // ──────────────────────────────────────────────────────────────────────────

  /**
   * Formata número com zero à esquerda: 5 → "05".
   * @param {number} n
   * @returns {string}
   */
  function pad(n) {
    return String(n).padStart(2, '0');
  }

  /**
   * Calcula diferença dd/hh/mm/ss entre agora e a data-alvo.
   * @param {Date} alvo
   * @returns {{ dias: number, horas: number, minutos: number, segundos: number, expirou: boolean }}
   */
  function calcularDiferenca(alvo) {
    const diff = alvo.getTime() - Date.now();

    if (diff <= 0) {
      return { dias: 0, horas: 0, minutos: 0, segundos: 0, expirou: true };
    }

    const total    = Math.floor(diff / 1000);
    const dias     = Math.floor(total / 86400);
    const horas    = Math.floor((total % 86400) / 3600);
    const minutos  = Math.floor((total % 3600) / 60);
    const segundos = total % 60;

    return { dias, horas, minutos, segundos, expirou: false };
  }

  /**
   * Atualiza o DOM com os valores calculados.
   * @param {{ dias, horas, minutos, segundos, expirou: boolean }} dados
   */
  function atualizarDOM(dados) {
    const elDias     = document.getElementById('countdown-dias');
    const elHoras    = document.getElementById('countdown-horas');
    const elMinutos  = document.getElementById('countdown-minutos');
    const elSegundos = document.getElementById('countdown-segundos');
    const elMensagem = document.getElementById('countdown-mensagem');
    const elLabel    = document.getElementById('countdown-data-texto');
    const elWidget   = document.getElementById('countdown');

    // Guard: se os elementos não existem, o script foi carregado na página errada
    if (!elDias) return;

    if (dados.expirou) {
      // Zera os dígitos
      elDias.textContent     = '00';
      elHoras.textContent    = '00';
      elMinutos.textContent  = '00';
      elSegundos.textContent = '00';

      // Aplica classe de cor "expirado" no widget
      if (elWidget) elWidget.classList.add('countdown--expirado');

      // Mensagem de aviso
      if (elMensagem) {
        elMensagem.textContent = '⚠ A sessão já ocorreu ou está em andamento.';
        elMensagem.style.color = 'var(--cor-sangue)';
      }

      return;
    }

    // Atualiza dígitos normalmente
    elDias.textContent     = pad(dados.dias);
    elHoras.textContent    = pad(dados.horas);
    elMinutos.textContent  = pad(dados.minutos);
    elSegundos.textContent = pad(dados.segundos);

    // Garante que a classe expirado não esteja presente
    if (elWidget) elWidget.classList.remove('countdown--expirado');

    // Preenche o label com a data descritiva
    if (elLabel)    elLabel.textContent    = LABEL_DATA;
    if (elMensagem) elMensagem.textContent = '';
  }

  /**
   * Inicializa a contagem regressiva.
   * Renderiza imediatamente e depois atualiza a cada segundo via setInterval.
   */
  function iniciarContagem() {
    if (!document.getElementById('countdown-dias')) return;

    const dataAlvo = new Date(PROXIMA_SESSAO);

    if (isNaN(dataAlvo.getTime())) {
      console.error('[countdown.js] Data inválida em PROXIMA_SESSAO:', PROXIMA_SESSAO);
      return;
    }

    // Primeira renderização imediata (sem esperar 1 segundo)
    atualizarDOM(calcularDiferenca(dataAlvo));

    // Atualiza a cada segundo
    const intervalo = setInterval(function () {
      const dados = calcularDiferenca(dataAlvo);
      atualizarDOM(dados);

      // Quando expirar, para o intervalo
      if (dados.expirou) {
        clearInterval(intervalo);
      }
    }, 1000);
  }

  document.addEventListener('DOMContentLoaded', iniciarContagem);
})();
