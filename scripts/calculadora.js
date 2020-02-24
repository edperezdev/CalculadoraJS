// Variables

let resultado = document.getElementById("resultado");
let reset = document.getElementById("reset");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let nueve = document.getElementById("nueve");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let seis = document.getElementById("seis");
let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cero = document.getElementById("cero");
let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let multiplicacion = document.getElementById("multiplicacion");
let division = document.getElementById("division");
let igual = document.getElementById("igual");
let punto = document.getElementById("punto");
let potencia = document.getElementById("potencia");

// Clic en botones

uno.addEventListener("click", function() {
  event.preventDefault();
  resultado.innerHTML = resultado.innerHTML + uno.innerHTML;
});
dos.addEventListener("click", function() {
  event.preventDefault();
  resultado.innerHTML = resultado.innerHTML + dos.innerHTML;
});
tres.addEventListener("click", function() {
  event.preventDefault();
  resultado.innerHTML = resultado.innerHTML + tres.innerHTML;
});
cuatro.addEventListener("click", function() {
  event.preventDefault();
  resultado.innerHTML = resultado.innerHTML + cuatro.innerHTML;
});
cinco.addEventListener("click", function() {
  event.preventDefault();
  resultado.innerHTML = resultado.innerHTML + cinco.innerHTML;
});
seis.addEventListener("click", function() {
  event.preventDefault();
  resultado.innerHTML = resultado.innerHTML + seis.innerHTML;
});
siete.addEventListener("click", function() {
  event.preventDefault();
  resultado.innerHTML = resultado.innerHTML + siete.innerHTML;
});
ocho.addEventListener("click", function() {
  event.preventDefault();
  resultado.innerHTML = resultado.innerHTML + ocho.innerHTML;
});
nueve.addEventListener("click", function() {
  event.preventDefault();
  resultado.innerHTML = resultado.innerHTML + nueve.innerHTML;
});
cero.addEventListener("click", function() {
  event.preventDefault();
  resultado.innerHTML = resultado.innerHTML + cero.innerHTML;
});

punto.addEventListener("click", function() {
  event.preventDefault();
  resultado.innerHTML = resultado.innerHTML + punto.innerHTML;
});

// Botones de operación
suma.addEventListener("click", function() {
  event.preventDefault();
  resultado.innerHTML = resultado.innerHTML + suma.innerHTML;
});
resta.addEventListener("click", function() {
  event.preventDefault();
  resultado.innerHTML = resultado.innerHTML + resta.innerHTML;
});
multiplicacion.addEventListener("click", function() {
  event.preventDefault();
  resultado.innerHTML = resultado.innerHTML + multiplicacion.innerHTML;
});
division.addEventListener("click", function() {
  event.preventDefault();
  resultado.innerHTML = resultado.innerHTML + division.innerHTML;
});

potencia.addEventListener("click", function() {
  event.preventDefault();
  resultado.innerHTML = resultado.innerHTML + "^";
});

// Botón reset y back

reset.addEventListener("click", function() {
  event.preventDefault();
  resultado.innerHTML = "";
});

back.addEventListener("click", function() {
  event.preventDefault();
  resultado.innerHTML = resultado.innerHTML.substring(
    0,
    resultado.innerHTML.length - 1
  );
});

// Operaciones
igual.addEventListener("click", function() {
  event.preventDefault();
  operando();
});

function operando() {
  if (resultado.innerHTML.includes("+") === true) {
    let array = resultado.innerHTML.split("+", 2);
    resultado.innerHTML = parseFloat(array[0]) + parseFloat(array[1]);

    return parseFloat(resultado.innerHTML);
  } else if (resultado.innerHTML.includes("-") === true) {
    let array = resultado.innerHTML.split("-", 2);
    resultado.innerHTML = parseFloat(array[0]) - parseFloat(array[1]);

    return parseFloat(resultado.innerHTML);
  } else if (resultado.innerHTML.includes("x") === true) {
    let array = resultado.innerHTML.split("x", 2);
    resultado.innerHTML = parseFloat(array[0]) * parseFloat(array[1]);

    return parseFloat(resultado.innerHTML);
  } else if (resultado.innerHTML.includes("/") === true) {
    let array = resultado.innerHTML.split("/", 2);
    resultado.innerHTML = parseInt(array[0]) / parseInt(array[1]);

    return parseFloat(resultado.innerHTML);
  } else if (resultado.innerHTML.includes("^") === true) {
    let array = resultado.innerHTML.split("^", 2);
    resultado.innerHTML = Math.pow(parseFloat(array[0]), parseFloat(array[1]));

    return parseFloat(resultado.innerHTML);
  }
}
