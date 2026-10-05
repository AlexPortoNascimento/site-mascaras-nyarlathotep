(function () {
  'use strict';

  const MAX_HISTORICO = 10;

  const historico = [];

  function rolarUmDado(lados) {
    return Math.floor(Math.random() * lados) + 1;
  }

  function rolarDados(lados, quantidade) {
    const individuais = [];
    for (let i = 0; i < quantidade; i++) {
      individuais.push(rolarUmDado(lados));
    }
    const soma = individuais.reduce(function (acc, val) { return acc + val; }, 0);
    return { individuais, soma };
  }

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

    const elRolagem = document.getElementById('resultado-rolagem');
    if (elRolagem) {
      elRolagem.classList.remove('resultado--animado');
      void elRolagem.offsetWidth;
      elRolagem.classList.add('resultado--animado');
    }
  }

  function htmlItemHistorico(entrada, idx) {
    const { lados, quantidade, individuais, soma } = entrada;
    const texto = quantidade === 1
      ? `1d${lados} = ${soma}`
      : `${quantidade}d${lados} = ${soma}  [${individuais.join(', ')}]`;

    return `<li class="historico-item" data-idx="${idx}">
      <i class="bi bi-dice-3 me-1" aria-hidden="true"></i>${texto}
    </li>`;
  }

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

  function adicionarAoHistorico(lados, quantidade, resultado) {
    historico.unshift({ lados, quantidade, individuais: resultado.individuais, soma: resultado.soma });
    if (historico.length > MAX_HISTORICO) historico.pop();
    renderHistorico();
  }

  function handleRolar() {
    const elTipo       = document.getElementById('dado-tipo');
    const elQuantidade = document.getElementById('dado-quantidade');
    if (!elTipo || !elQuantidade) return;

    const lados    = parseInt(elTipo.value, 10);
    let quantidade = parseInt(elQuantidade.value, 10);

    if (isNaN(quantidade) || quantidade < 1)  quantidade = 1;
    if (quantidade > 20)                       quantidade = 20;
    elQuantidade.value = quantidade;

    const resultado = rolarDados(lados, quantidade);
    exibirResultado(lados, quantidade, resultado);
    adicionarAoHistorico(lados, quantidade, resultado);
  }

  function iniciarRolador() {
    const btnRolar = document.getElementById('btn-rolar');
    if (!btnRolar) return;

    btnRolar.addEventListener('click', handleRolar);

    const elQuantidade = document.getElementById('dado-quantidade');
    if (elQuantidade) {
      elQuantidade.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleRolar();
        }
      });
    }

    renderHistorico();
  }

  document.addEventListener('DOMContentLoaded', iniciarRolador);
})();
