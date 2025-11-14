// Desestructuracion de objetos en JS
// ¿Qué es?
// En JS es una forma de extraer los valores de un objeto y asignarlos a variables de manera directa y mas variables de manera directa y mas sencilla

const person = {
    userName: "Edwar",
    age: 42,
}

// console.log(person);
// console.log(person.userName);
// console.log(person.age);

// Variables o clave son por defecto
// Desestructuracion
const { userName, age } = person;
// console.log(userName);
// console.log(age);

// Desestructuracion con renombramiento de variables
const { userName: personName, age: personAge } = person;
// console.log(personName);
// console.log(personAge);

// Entonces la desestructuracion no solo simplifica el acceso a propiedades, sino que tambien permite renombrar variables segun se necesite.

const people = person.userName;
// console.log(people);

// Ejemplo de extraccion de datos de respuesta de API

const respons = {
    responsStatus: 200,
    data: { id: 1, productName: "Tables", price: 800 },
}
// 
const { responsStatus, data: { productName, price } } = respons;

console.log(`El estado es: ${responsStatus}`);
console.log(`El estado es: ${data}`);




