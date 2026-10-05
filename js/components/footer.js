(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const elementoAno = document.getElementById('ano-atual');
    if (elementoAno) {
      elementoAno.textContent = new Date().getFullYear();
    }
  });
})();
