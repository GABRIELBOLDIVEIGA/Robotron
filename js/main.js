const controle = document.querySelectorAll(".controle-ajuste");
const estatistica = document.querySelectorAll("[data-estatistica]");
const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5,
  },

  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20,
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24,
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42,
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2,
  },
};

// console.log(estatistica);
// console.log(pecas.foguetes.energia);

controle.forEach((elemento) => {
  elemento.addEventListener("click", function (evento) {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    atualizaEstatistica(evento.target.dataset.peca);
  });
});

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-contador]");

  if (operacao === "-" && peca.value > 0) {
    peca.value = parseInt(peca.value) - 1;
  } else if (operacao === "+") {
    peca.value = parseInt(peca.value) + 1;
  }
}

function atualizaEstatistica(peca) {
  // console.log(pecas[peca]);

  estatistica.forEach( (element) => {
    console.log(element.dataset.estatistica);
    
    element.textContent = parseInt(element.textContent) + pecas[peca][element.dataset.estatistica]

  })
}
