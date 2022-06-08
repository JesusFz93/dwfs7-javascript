var numero1 = 10;
var numero2 = 20;

// funcion con argumentos
function suma(number1, number2) {
  var resultado = number1 + number2;
  //   console.log(resultado);
}

suma(numero1, numero2);

// funcion con un argumento
function saludo(nombre, edad) {
  //   console.log("Bienvenidos a la clase grupal " + nombre + " tienes " + edad);
}

saludo("Jose", 21);

// funcion dentro de otra funcion

function sumar_edad(age) {
  return age + 5;
}

function biografia(nombre, apellido, edad, estatus) {
  let edad_en_cinco_anios = sumar_edad(edad);

  console.log(
    "Hola soy " +
      nombre +
      " " +
      apellido +
      ", tengo " +
      edad +
      ", y soy un usuario " +
      estatus +
      ". En cinco anios tendre " +
      edad_en_cinco_anios
  );
}

// biografia("Juan", "Perez", 26, true);
// biografia("Maria", "Lopez", 21, false);

// Variables (var, let) Constantes (const)

const GRAVEDAD = 9.8;

// console.log(GRAVEDAD);

var alumno1 = "Pedro";
let alumno2 = "Oscar";

if (alumno1 === alumno2) {
  console.log("Hola");
} else {
  let alumno1 = "Mariana";
  //   console.log(alumno1);
}

// console.log(alumno1);

// let edad_en_cinco_anios = 34;

// console.log(alumno1);
// console.log(alumno2);

// alumno1 = "Maria";
// alumno2 = "Guadalupe";

// console.log(alumno1);
// console.log(alumno2);

let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(arreglo[arreglo.length - 1]);

arreglo.forEach(function (elemento, indice) {
  console.log(elemento);
});

let arreglo2 = arreglo.map(function (elemento, indice) {
  return elemento + 10;
});

console.log(arreglo2);
