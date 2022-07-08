let tartasYTortillas = ["Tarta de Acelga"];
let bolonesa = ["Lasagna con boloñesa", "Berenjenas a la pizza con boloñesa"];
let pollo = [
  "Pollo desmenuzado c/ cebolla, pimiento y zanahoria",
  "Pollo con arvejas",
  "Pollo con salsa de tomate",
  "Pollo con salsa de puerro",
  "Wrap",
  "Nuggets",
];
let solomillo = ["Solomillo de mostaza", "Solomillo de hongos"];
let milanesas = [
  "Milanesa de carne",
  "Milanesa de Pollo",
  "Milanesa de Legumbres",
  "Milanesa de Berenjena",
];
let hamburguesa = ["Hamburguesa de carne", "Hamburguesa de lentejas"];
let ensaladas = [
  "tomate, huevo y zanahoria",
  "tomate y lechuga",
  "remolacha y huevo",
  "chaucha, huevo y tomate",
  "tomate, huevo y lentejas",
];
let guarnicion = [
  "pure mixto",
  "zapallito con huevo revuelto",
  "tortilla de Acelga",
];
let comidas = ["Albondigas", "Pastel de Carne", "Guiso", "Omelette"];

comidas.push(tartasYTortillas);
comidas.push(bolonesa);
comidas.push(pollo);
comidas.push(solomillo);
comidas.push(milanesas);
comidas.push(hamburguesa);

function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function comidasDeLaSemana(comidas) {
  let aleatorio = numeroRandom(0, comidas.length);
  if (Array.isArray(comidas[aleatorio]) == true) {
    let comidaRandom = numeroRandom(0, comidas[aleatorio].length);
    return comidas[aleatorio][comidaRandom];
  } else {
    return comidas[aleatorio];
  }
}

function ensaladasDeLaSemana(ensaladas) {
  let aleatorio = numeroRandom(0, ensaladas.length);
  return ensaladas[aleatorio];
}

function comidaYEnsalada() {
  let comidaFinal = "";
  let comida = comidasDeLaSemana(comidas);
  let ensalada = ensaladasDeLaSemana(ensaladas);
  if (
    comida.includes("Lasagna") ||
    comida.includes("Guiso") ||
    comida.includes("Wrap")
  ) {
    comidaFinal += comida;
  } else if (comida.includes("puerro") || comida.includes("boloñesa")) {
    comidaFinal += comida;
    comidaFinal += " con ";
    comidaFinal += ensaladasDeLaSemana(guarnicion);
  } else {
    comidaFinal += comida;
    comidaFinal += " con ensalada de ";
    comidaFinal += ensalada;
  }
  return comidaFinal;
}

function escribirComida() {
  let celdas = document.querySelectorAll(".celda");
  celdas.forEach(function (valorCelda) {
    valorCelda.innerHTML = comidaYEnsalada();
  });
}

// document.getElementById("lunesAlmuerzo").innerHTML = comidasDeLaSemana(comidas);
// document.getElementById("lunesCena").innerHTML = ensaladasDeLaSemana(ensaladas);

const botonComida = document.getElementById("btnComida");
botonComida.addEventListener("click", escribirComida);
