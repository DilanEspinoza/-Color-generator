let $btnRandomColor = document.getElementById("btn__generate__color");
let $title = document.getElementById("color__hexadecimal");
let $body = document.body;

$btnRandomColor.addEventListener("click", function () {
  let longitud = 6;
  let letras = "abcdef";
  let numeros = "0123456789";

  function generadarColorRandom(longitudColor, letra, numero) {
    let allChareters = "";
    let color = "";

    allChareters += letra;
    allChareters += numero;

    for (let i = 1; i <= longitudColor; i++) {
      let randomIndex = Math.floor(Math.random() * allChareters.length);
      color += allChareters[randomIndex];
    }
    $title.innerHTML = ` #${color}`;
    $body.style.background = `#${color}`;
  }
  return generadarColorRandom(longitud, letras, numeros);
});
