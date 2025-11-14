// Metodos para arreglos

// Crear un arreglo de objetos para un carrito de compras
const months = ["December", "November", "January", "February"];

const shoppingCart = [
    { productName: "Tablet", price: 800 },
    { productName: "Mouse", price: 50 },
    { productName: "Smart Tv", price: 1500 },
    { productName: "Computer", price: 2200 },
    { productName: "Play Station", price: 1800 },
    { productName: "X-Box", price: 1800 },
    { productName: "Nintendo Wii", price: 900 },
    { productName: "Keyboard", price: 400 },
    { productName: "Sound-bar", price: 700 },
];

// Recorre el arreglo y muestra todos sus elementos
// months.forEach(function (month) {
// if (month == "January"){
//     console.log("January si existe");
// }
// else {
//     console.log(month);
// }})

const month = months.includes("December");
// console.log(month);


// El metodo includes No funciona bien con objetos
// const product = shoppingCart.includes("Tablet");
// console.log(product);


// Para arreglos planos usamos includes y para objetos some
// const result = shoppingCart.some(function (product) {
//     return product.productName === "Tablet"
//         ;
// })

// const result = shoppingCart.some(function (product) {
//     return product.price === "Tablet"
//         ;
// })
// console.log(result);

// const result = shoppingCart.some(product => product.productName === "Tablet");

// El metodo reduce nos sirve para realizar la sumatoria de los precios
// const result = shoppingCart.reduce(function (total, product) {
//     return total + product.price
// }, 0);
// El 0 es la posicion donde inicia

// Funcion flecha
// const result = shoppingCart.reduce((total, product) => total + product.price, 0);



// Metodo filter

// const result = shoppingCart.filter(function (product) {
//     return product.price > 100;
// });

// const result = shoppingCart.filter(product => product.price > 100);
// const result = shoppingCart.filter(function (product) {
//     return.productName != "Sound-bar";
// })

console.log(result);