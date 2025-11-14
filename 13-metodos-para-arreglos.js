//Metodos para arreglos
// const numbers = [2, 5, 8, 23, 56];


// Agregar elementos a mi arreglo, pero se requiere conocer la longitud del arreglo

// numbers[5] = 100;

// Agrega elementos al final del arreglo
// numbers.push(1000, 500);

// Metodo para agregar elementos al principio del array
// numbers.unshift(-2, -1, 0);

// Elimina el ultimo elemento del array
// numbers.pop();

//Elimina el primer elemento del array
// numbers.shift();

// Metodo splice, elimina todos los elementos a partir del indice asignado
// numbers.splice(3);


// const fruits = ["Apple", "lemon", "Pera"]
// fruits.unshift("Sandia");
// fruits.push("Melocoton");

// console.table(fruits);
// console.log(fruits);

// Recorrer un arreglo con For
const colors = ["Red", "Blue", "Green"];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// Recorrer un arreglo con forEach
const animals = ["Tiger", "Cat", "Dog", "Hours"];
animals.forEach((animal) => {
    console.log(animal);
})

// Map para transformar

const numbers = [1, 2, 3, 4];
const squares = numbers.map(num => num * num);
console.log(squares);


