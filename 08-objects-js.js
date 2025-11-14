// Objetos en JS

// Aqui tenemos tres variables
const productName = "Multimetro";
const price = 150;
const available = true;

console.log = {
    productName: "Multimetro",
    price: 150,
    available: true,
}

console.log(typeof product);

//Acceder a las propiedades de un objeto

console.log("The product name is: " + product.productName);
console.log("The price product: " + product.price);
console.log("Is available the product? :" + product.available);


// Agregar propiedades al objeto
product.image = "Multimetro.png"
// Eliminar una propiedad de un objeto
delete product.price;

console.log(product);