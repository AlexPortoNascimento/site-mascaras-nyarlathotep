(function () {
  'use strict';

  // ─── ⚙️  CONFIGURAÇÃO — edite aqui ────────────────────────────────────────
  const PROXIMA_SESSAO = '2026-10-19T20:00:00';
  const LABEL_DATA     = 'Próxima sessão: 19 de Outubro de 2026, às 20h00';
  // ──────────────────────────────────────────────────────────────────────────

  function pad(n) {
    return String(n).padStart(2, '0');
  }

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

  function atualizarDOM(dados) {
    const elDias     = document.getElementById('countdown-dias');
    const elHoras    = document.getElementById('countdown-horas');
    const elMinutos  = document.getElementById('countdown-minutos');
    const elSegundos = document.getElementById('countdown-segundos');
    const elMensagem = document.getElementById('countdown-mensagem');
    const elLabel    = document.getElementById('countdown-data-texto');
    const elWidget   = document.getElementById('countdown');

    if (!elDias) return;

    if (dados.expirou) {
      elDias.textContent     = '00';
      elHoras.textContent    = '00';
      elMinutos.textContent  = '00';
      elSegundos.textContent = '00';

      if (elWidget) elWidget.classList.add('countdown--expirado');

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

    if (elWidget) elWidget.classList.remove('countdown--expirado');

    if (elLabel)    elLabel.textContent    = LABEL_DATA;
    if (elMensagem) elMensagem.textContent = '';
  }

  function iniciarContagem() {
    if (!document.getElementById('countdown-dias')) return;

    const dataAlvo = new Date(PROXIMA_SESSAO);

    if (isNaN(dataAlvo.getTime())) {
      console.error('[countdown.js] Data inválida em PROXIMA_SESSAO:', PROXIMA_SESSAO);
      return;
    }

    atualizarDOM(calcularDiferenca(dataAlvo));

    const intervalo = setInterval(function () {
      const dados = calcularDiferenca(dataAlvo);
      atualizarDOM(dados);

      if (dados.expirou) {
        clearInterval(intervalo);
      }
    }, 1000);
  }

  document.addEventListener('DOMContentLoaded', iniciarContagem);
})();
