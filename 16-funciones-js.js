// Funciones en JS
// Hoisting
// Es el comportamiento por defecto en el que el interprete mueve las declaraciones (variables y funciones), a la parte superior de su ambito (scope)
// antes de ejecutar el codigo

// Declaracion de una funcion.
function add() {
    // console.log(10 + 20);
}

add();

// La expresion de la funcion

const add2 = function () {
    // console.log(30 + 40);
}

add2();

// Funcion IIFE, esta funcion se invoca asi misma
// Son utiles para proteger variables, para que no se mezclen con las variables de otros archivos

(function () {
    // console.log("Esto es una funcion IIFE");
})();

// console.log(client);

// Diferencia entre funcion y metodo
const num1 = 20;
const num2 = "10";

console.log(num1);
console.log(num2);

// Funcion que convierte String a Number
console.log(parseInt(num2));
console.log(num2);

// Un metodo siempre colocamos una variable y despues un punto.
// Funcion que convierte Number a String
console.log(num1.toString());
