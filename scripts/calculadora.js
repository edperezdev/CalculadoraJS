const resultado = document.getElementById("resultado");
let igual = document.getElementById("igual");
let reset = document.getElementById("reset");

// Función para mostrar los números y signos de operación al hacer clic

function clicenboton(element) {
  this.element = document.getElementById(element);
  this.element.onclick = () => {
    event.preventDefault();
    this.element.innerHTML !== "exp" ?
    resultado.innerHTML = resultado.innerHTML + this.element.innerHTML
    : resultado.innerHTML = resultado.innerHTML + `^`
  };
}

// Botones

let siete = new clicenboton("siete");
let ocho = new clicenboton("ocho");
let nueve = new clicenboton("nueve");
let cuatro = new clicenboton("cuatro");
let cinco = new clicenboton("cinco");
let seis = new clicenboton("seis");
let uno = new clicenboton("uno");
let dos = new clicenboton("dos");
let tres =new clicenboton("tres");
let cero =new clicenboton("cero");
let suma =new clicenboton("suma");
let resta = new clicenboton("resta");
let multiplicacion = new clicenboton("multiplicacion");
let division = new clicenboton("division");
let punto = new clicenboton("punto");
let potencia = new clicenboton("potencia");

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
    resultado.innerHTML = parseFloat(array[0]) / parseFloat(array[1]);

    return parseFloat(resultado.innerHTML);
  } else if (resultado.innerHTML.includes("^") === true) {
    let array = resultado.innerHTML.split("^", 2);
    resultado.innerHTML = Math.pow(parseFloat(array[0]), parseFloat(array[1]));

    return parseFloat(resultado.innerHTML);
  }
}
