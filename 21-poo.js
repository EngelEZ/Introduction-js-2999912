// Programacion orientada a objetos

class Product {
    constructor(productName, price, available) {
        this.productName = productName;
        this.price = price;
        this.available = available;
    }
    // Metodo para formatear el texto
    formaProduct() {
        return `El nombre del producto es ${this.productName}, su precio es ${this.price} y actualmente esta es su disponibilidad ${this.available}`;
    }
};

// Se crean los productos
const product1 = new Product("Marcador", 5000, true);
const product2 = new Product("Borrador", 2000, false);
const product3 = new Product("Rule", 10000, true);

// Impresion de los objetos
console.log(product1.formaProduct());
console.log(product2.formaProduct());
console.log(product3.formaProduct());



