const product = {
    productName: "Multimetro",
    price: 150,
    available: true,
}

// Con el metodo o funcion freeze blosqueamos el objeto para que No se pueda agregar, ni modificar, ni eliminar propiedades
// Object.freeze(product);

// Eliminar propiedad
// delete product.price;

// Agregar propiedad
// product.color = "Yellow";
// product.quantity = 10;

// Modificar propiedad
// product.price = 500;

// El metodo seal NO permite eliminar propiedades, agregar, pero si permite modificar
Object.seal(product);
// Eliminar propiedad
delete product.price;
product.color = "Yellow";
product.price = 500;

console.log(product);

console.log(Object.isFrozen(product));
console.log(Object.isSealed(product));
