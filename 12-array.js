// Arreglos de numeros
// const numbers = [2, 5, 8, 23, 56];

// console.table(numbers);

// Instanciar es el proceso mediante el cual yo creo un objeto a partir de una clase
// const months = new Array("May", "January", "July", "December");

// console.table(months);

// Los arreglos en JS aceptan todos los tipos de datos del lenguaje
const userName = "Edwar";
const myArray = ["Hello", userName, 42, true, false, null, undefined, { lastName: "Velasquez", myJob: "Instructor" }, [3172293, 2999912, 3147206]];

console.table(myArray);

// Consultar el valor del elemento y su tipo
console.table(myArray[2]);

// Metodo length para conocer la longitud de un arreglo
console.log("Edwar tu arreglo tiene: " + myArray.length + " elementos")
// const numbers = [2, 5, 8, 23, 56];

// Iterador con forEach
// numbers.forEach(function (number) {
// console.log(number);
// })






const months = new Array("May", "January", "July", "December");

months.forEach(function (month) {
    console.log(month);

})