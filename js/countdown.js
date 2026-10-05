/**
 * countdown.js — Contagem regressiva para a próxima sessão.
 *
 * ─── COMO CONFIGURAR ────────────────────────────────────────────────────────
 * Altere a constante PROXIMA_SESSAO abaixo com a data e hora da próxima sessão.
 * Use o formato ISO 8601: 'AAAA-MM-DDTHH:MM:SS'
 *
 * Exemplo:
 *   const PROXIMA_SESSAO = '2025-11-15T20:00:00';
 *
 * O script assume o fuso horário local do navegador do usuário.
 * ────────────────────────────────────────────────────────────────────────────
 *
 * Implementação completa na Task 4.
 * Este arquivo contém a estrutura e a lógica comentada prontas para ativação.
 */

(function () {
  'use strict';

  // ─── CONFIGURAÇÃO ──────────────────────────────────────────────────────────
  // ⚙️  EDITE AQUI: data e hora da próxima sessão (fuso horário local)
  const PROXIMA_SESSAO = '2026-10-19T20:00:00';

  // Texto exibido junto ao countdown
  const LABEL_DATA = 'Próxima sessão: 19 de Outubro de 2026, às 20h00';
  // ──────────────────────────────────────────────────────────────────────────

  /**
   * Formata um número com zero à esquerda (ex: 5 → "05")
   * @param {number} n
   * @returns {string}
   */
  function pad(n) {
    return String(n).padStart(2, '0');
  }

  /**
   * Calcula a diferença em dd/hh/mm/ss entre agora e a data-alvo.
   * @param {Date} alvo
   * @returns {{ dias: number, horas: number, minutos: number, segundos: number, expirou: boolean }}
   */
  function calcularDiferenca(alvo) {
    const agora      = Date.now();
    const diferenca  = alvo.getTime() - agora;

    if (diferenca <= 0) {
      return { dias: 0, horas: 0, minutos: 0, segundos: 0, expirou: true };
    }

    const totalSegundos = Math.floor(diferenca / 1000);
    const dias          = Math.floor(totalSegundos / 86400);
    const horas         = Math.floor((totalSegundos % 86400) / 3600);
    const minutos       = Math.floor((totalSegundos % 3600) / 60);
    const segundos      = totalSegundos % 60;

    return { dias, horas, minutos, segundos, expirou: false };
  }

  /**
   * Atualiza os elementos do DOM com os valores calculados.
   * @param {{ dias, horas, minutos, segundos, expirou: boolean }} dados
   */
  function atualizarDOM(dados) {
    const elDias      = document.getElementById('countdown-dias');
    const elHoras     = document.getElementById('countdown-horas');
    const elMinutos   = document.getElementById('countdown-minutos');
    const elSegundos  = document.getElementById('countdown-segundos');
    const elMensagem  = document.getElementById('countdown-mensagem');
    const elLabel     = document.getElementById('countdown-data-texto');

    if (!elDias) return; // Script carregado em outra página por engano

    if (dados.expirou) {
      elDias.textContent     = '00';
      elHoras.textContent    = '00';
      elMinutos.textContent  = '00';
      elSegundos.textContent = '00';
      if (elMensagem) {
        elMensagem.textContent = '⚠ A sessão já ocorreu ou está em andamento.';
        elMensagem.style.color = 'var(--cor-sangue)';
      }
      return;
    }

    elDias.textContent     = pad(dados.dias);
    elHoras.textContent    = pad(dados.horas);
    elMinutos.textContent  = pad(dados.minutos);
    elSegundos.textContent = pad(dados.segundos);

    if (elLabel)   elLabel.textContent   = LABEL_DATA;
    if (elMensagem) elMensagem.textContent = '';
  }

  /**
   * Inicializa e inicia o setInterval da contagem regressiva.
   */
  function iniciarContagem() {
    // Só executa se o elemento countdown existir (evita erros em outras páginas)
    if (!document.getElementById('countdown-dias')) return;

    const dataAlvo = new Date(PROXIMA_SESSAO);

    // Verificar se a data é válida
    if (isNaN(dataAlvo.getTime())) {
      console.error('[countdown.js] Data inválida em PROXIMA_SESSAO:', PROXIMA_SESSAO);
      return;
    }

    // Renderiza imediatamente (evita piscar com "--" por 1s)
    atualizarDOM(calcularDiferenca(dataAlvo));

    // Atualiza a cada segundo
    const intervalo = setInterval(function () {
      const dados = calcularDiferenca(dataAlvo);
      atualizarDOM(dados);
      if (dados.expirou) {
        clearInterval(intervalo);
      }
    }, 1000);
  }

  // Iniciar após o DOM estar pronto
  document.addEventListener('DOMContentLoaded', iniciarContagem);
})();
