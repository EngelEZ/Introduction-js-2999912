// Unir dos objetos
const product = {
    productName: "Multimetro",
    price: 150,
    available: true,
}

Object.freeze(product);

// Objeto que almacena medidas
const measurements = {
    weight: "1KG",
    measurements: "15CM",
}

// Rest operator
const newProduct = { ...product, ...measurements };
console.log(newProduct);
console.log(product);