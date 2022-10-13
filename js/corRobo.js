const opcao = document.getElementsByName('corRobo');

opcao.forEach((element) => {
  element.addEventListener('click', (event) => {
    document.getElementById("robotron").src = `img/CorRobo/Robotron-${event.target.value}.png`;
  });
});