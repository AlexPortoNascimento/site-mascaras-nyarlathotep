/**
 * dice-roller.js — Rolador de dados intermediário para Chamado de Cthulhu.
 *
 * Funcionalidades:
 *  - Seleção de tipo de dado: d4, d6, d8, d10, d12, d20
 *  - Seleção de quantidade (1–20 dados)
 *  - Exibe resultado individual de cada dado + soma total
 *  - Histórico das últimas rolagens (máximo 10)
 *
 * Implementação completa na Task 5.
 * Este arquivo contém a estrutura e lógica comentadas prontas para ativação.
 */

(function () {
  'use strict';

  // Máximo de entradas no histórico
  const MAX_HISTORICO = 10;

  /** Histórico em memória (array de strings descritivas) */
  const historico = [];

  /**
   * Rola um único dado de `lados` faces.
   * @param {number} lados - Número de faces do dado (ex: 20 para d20)
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
    const soma = individuais.reduce((acc, val) => acc + val, 0);
    return { individuais, soma };
  }

  /**
   * Atualiza o DOM com o resultado da rolagem.
   * @param {number} lados
   * @param {number} quantidade
   * @param {{ individuais: number[], soma: number }} resultado
   */
  function exibirResultado(lados, quantidade, resultado) {
    const elSoma          = document.getElementById('resultado-soma');
    const elIndividuais   = document.getElementById('resultado-individuais');

    if (!elSoma || !elIndividuais) return;

    elSoma.textContent = resultado.soma;

    if (quantidade === 1) {
      elIndividuais.textContent = `1d${lados} → ${resultado.individuais[0]}`;
    } else {
      elIndividuais.textContent =
        `${quantidade}d${lados} → [${resultado.individuais.join(', ')}] = ${resultado.soma}`;
    }
  }

  /**
   * Adiciona uma entrada ao histórico e atualiza o DOM.
   * @param {number} lados
   * @param {number} quantidade
   * @param {{ individuais: number[], soma: number }} resultado
   */
  function adicionarAoHistorico(lados, quantidade, resultado) {
    const elHistorico = document.getElementById('historico-rolagens');
    if (!elHistorico) return;

    // Descrição textual da rolagem
    const entrada = quantidade === 1
      ? `1d${lados} = ${resultado.soma}`
      : `${quantidade}d${lados} = ${resultado.soma}  [${resultado.individuais.join(', ')}]`;

    historico.unshift(entrada);

    // Mantém o máximo configurado
    if (historico.length > MAX_HISTORICO) {
      historico.pop();
    }

    // Re-renderiza o histórico
    elHistorico.innerHTML = historico
      .map(function (item, idx) {
        const opacidade = Math.max(0.4, 1 - idx * 0.08);
        return `
          <li style="
            font-size: 0.83rem;
            color: var(--cor-tinta-media);
            opacity: ${opacidade};
            padding: 0.2rem 0;
            border-bottom: 1px dotted var(--cor-pergaminho-esc);
            font-family: var(--fonte-subtitulo);
            letter-spacing: 0.04em;
          ">
            <i class="bi bi-dice-3 me-1" style="color: var(--cor-sepia-esc);" aria-hidden="true"></i>
            ${item}
          </li>`.trim();
      })
      .join('');
  }

  /**
   * Handler principal do botão "Rolar".
   */
  function handleRolar() {
    const elTipo       = document.getElementById('dado-tipo');
    const elQuantidade = document.getElementById('dado-quantidade');

    if (!elTipo || !elQuantidade) return;

    const lados     = parseInt(elTipo.value, 10);
    let quantidade  = parseInt(elQuantidade.value, 10);

    // Validação: quantidade entre 1 e 20
    if (isNaN(quantidade) || quantidade < 1) quantidade = 1;
    if (quantidade > 20) quantidade = 20;
    elQuantidade.value = quantidade; // Corrige o valor no input

    const resultado = rolarDados(lados, quantidade);
    exibirResultado(lados, quantidade, resultado);
    adicionarAoHistorico(lados, quantidade, resultado);
  }

  /**
   * Inicializa o rolador de dados: associa eventos.
   */
  function iniciarRolador() {
    const btnRolar = document.getElementById('btn-rolar');
    if (!btnRolar) return; // Não estamos na index — sair silenciosamente

    btnRolar.addEventListener('click', handleRolar);

    // Rolar com Enter no campo de quantidade
    const elQuantidade = document.getElementById('dado-quantidade');
    if (elQuantidade) {
      elQuantidade.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') handleRolar();
      });
    }
  }

  document.addEventListener('DOMContentLoaded', iniciarRolador);
})();
