// Objeto literal es la forma directa de crear un objeto usando {} y pares claves y valor

// const person = {
//     userName: "Peter",
// };

// Objeto constructor: Crea objetos mediante una funcion o clase usando new
// 


// const person1 = new Person("Maria", 25, true);

// ---------------------------------------------
// Objeto constructor
function Product(productName, price) {
    this.productName = productName;
    this.price = price;
}

const product = new Product("Monitor curvo 24", 600000);
const product1 = new Product("Mouse", 600000);
const product2 = new Product("Keyboard", 600000);

console.log(product);
console.log(product1);
console.log(product2);

// --------------------------------------------
// Prototype: Prototipo es como un molde o modelo base
// Cuando se crean muchos objetos que se parecen, no se quiere escribir lo mismo muchas veces.

function Car(brand, color) {
    this.brand = brand;
    this.color = color;
}

// Se define una funcion comun para todos los carros
Car.prototype.slowDown = function () {
    console.log(this.brand + " esta frenando");
}

const car1 = new Car("Kia", "Gray");
const car2 = new Car("Toyota", "White");

car1.slowDown();
car2.slowDown();


// --------------------------------------

function User(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
}

User.prototype.textFormat = function () {
    console.log(`El nombre del usuario es: ${this.name}, la edad es: ${this.age} y su email es: ${this.email} `)
};

const user1 = new User("Juan", 17, "juan@email.com");
const user2 = new User("Pedro", 22, "pedro@email.com");
const user3 = new User("Alberto", 32, "alberto@email.com");

user1.textFormat();
user2.textFormat();
user3.textFormat();

// ---------------------------
