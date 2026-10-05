/**
 * dice-roller.js — Rolador de dados intermediário para Chamado de Cthulhu.
 *
 * Funcionalidades:
 *  - Seleção de tipo de dado: d4, d6, d8, d10, d12, d20
 *  - Seleção de quantidade (1–20 dados)
 *  - Exibe resultado individual de cada dado + soma total
 *  - Histórico das últimas rolagens (máximo 10)
 */

(function () {
  'use strict';

  // Máximo de entradas no histórico
  const MAX_HISTORICO = 10;

  /** Histórico em memória (array de objetos {lados, quantidade, individuais, soma}) */
  const historico = [];

  /**
   * Rola um único dado de `lados` faces.
   * @param {number} lados
   * @returns {number} Resultado entre 1 e lados (inclusive)
   */
  function rolarUmDado(lados) {
    return Math.floor(Math.random() * lados) + 1;
  }

  /**
   * Rola `quantidade` dados de `lados` faces.
   * @param {number} lados
   * @param {number} quantidade
   * @returns {{ individuais: number[], soma: number }}
   */
  function rolarDados(lados, quantidade) {
    const individuais = [];
    for (let i = 0; i < quantidade; i++) {
      individuais.push(rolarUmDado(lados));
    }
    const soma = individuais.reduce(function (acc, val) { return acc + val; }, 0);
    return { individuais, soma };
  }

  /**
   * Atualiza a área de resultado com a rolagem atual.
   * @param {number} lados
   * @param {number} quantidade
   * @param {{ individuais: number[], soma: number }} resultado
   */
  function exibirResultado(lados, quantidade, resultado) {
    const elSoma        = document.getElementById('resultado-soma');
    const elIndividuais = document.getElementById('resultado-individuais');
    if (!elSoma || !elIndividuais) return;

    elSoma.textContent = resultado.soma;

    if (quantidade === 1) {
      elIndividuais.textContent = `1d${lados} \u2192 ${resultado.individuais[0]}`;
    } else {
      elIndividuais.textContent =
        `${quantidade}d${lados} \u2192 [${resultado.individuais.join(', ')}] = ${resultado.soma}`;
    }

    // Animação de destaque no resultado (adiciona e remove classe)
    const elRolagem = document.getElementById('resultado-rolagem');
    if (elRolagem) {
      elRolagem.classList.remove('resultado--animado');
      // força reflow para reiniciar animação
      void elRolagem.offsetWidth;
      elRolagem.classList.add('resultado--animado');
    }
  }

  /**
   * Gera o HTML de um item de histórico dado seu índice (0 = mais recente).
   * @param {{ lados, quantidade, individuais, soma }} entrada
   * @param {number} idx
   * @returns {string}
   */
  function htmlItemHistorico(entrada, idx) {
    const { lados, quantidade, individuais, soma } = entrada;
    const texto = quantidade === 1
      ? `1d${lados} = ${soma}`
      : `${quantidade}d${lados} = ${soma}  [${individuais.join(', ')}]`;

    return `<li class="historico-item" data-idx="${idx}">
      <i class="bi bi-dice-3 me-1" aria-hidden="true"></i>${texto}
    </li>`;
  }

  /**
   * Re-renderiza o elemento de histórico a partir do array em memória.
   */
  function renderHistorico() {
    const elHistorico = document.getElementById('historico-rolagens');
    if (!elHistorico) return;

    if (historico.length === 0) {
      elHistorico.innerHTML =
        '<li class="historico-vazio">Nenhuma rolagem ainda.</li>';
      return;
    }

    elHistorico.innerHTML = historico
      .map(function (entrada, idx) { return htmlItemHistorico(entrada, idx); })
      .join('');
  }

  /**
   * Adiciona uma entrada ao histórico e re-renderiza.
   * @param {number} lados
   * @param {number} quantidade
   * @param {{ individuais: number[], soma: number }} resultado
   */
  function adicionarAoHistorico(lados, quantidade, resultado) {
    historico.unshift({ lados, quantidade, individuais: resultado.individuais, soma: resultado.soma });
    if (historico.length > MAX_HISTORICO) historico.pop();
    renderHistorico();
  }

  /**
   * Handler do botão "Rolar" e do Enter no campo de quantidade.
   */
  function handleRolar() {
    const elTipo       = document.getElementById('dado-tipo');
    const elQuantidade = document.getElementById('dado-quantidade');
    if (!elTipo || !elQuantidade) return;

    const lados    = parseInt(elTipo.value, 10);
    let quantidade = parseInt(elQuantidade.value, 10);

    // Sanitiza quantidade
    if (isNaN(quantidade) || quantidade < 1)  quantidade = 1;
    if (quantidade > 20)                       quantidade = 20;
    elQuantidade.value = quantidade;

    const resultado = rolarDados(lados, quantidade);
    exibirResultado(lados, quantidade, resultado);
    adicionarAoHistorico(lados, quantidade, resultado);
  }

  /**
   * Inicializa o rolador: registra eventos.
   * Sai silenciosamente se não estiver na página correta.
   */
  function iniciarRolador() {
    const btnRolar = document.getElementById('btn-rolar');
    if (!btnRolar) return;

    btnRolar.addEventListener('click', handleRolar);

    // Enter no campo de quantidade também rola
    const elQuantidade = document.getElementById('dado-quantidade');
    if (elQuantidade) {
      elQuantidade.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleRolar();
        }
      });
    }

    // Renderiza histórico vazio inicial
    renderHistorico();
  }

  document.addEventListener('DOMContentLoaded', iniciarRolador);
})();
