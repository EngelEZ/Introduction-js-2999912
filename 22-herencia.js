// Programacion orientada a objetos

// class Product {
//     constructor(productName, price, available) {
//         this.productName = productName;
//         this.price = price;
//         this.available = available;
//     }
//     // Metodo para formatear el texto
//     formaProduct() {
//         return `El nombre del producto es ${this.productName}, su precio es ${this.price} y actualmente esta es su disponibilidad ${this.available}`;
//     }
// };

// // Se crean los productos
// const product1 = new Product("Marcador", 5000, true);
// const product2 = new Product("Borrador", 2000, false);
// const product3 = new Product("Rule", 10000, true);

// Impresion de los objetos
// console.log(product1.formaProduct());
// console.log(product2.formaProduct());
// console.log(product3.formaProduct());

// class Book {
//     constructor(bookName, price, isbn) {
//         this.bookName = bookName;
//         this.price = price;
//         this.isbn = isbn;
//     }
// };

// const book1 = new Book("El Perfume", 10000, 123456789);
// const book2 = new Book("Luna Caliente", 20000, 12345);
// const book3 = new Book("Cien años de soledad", 15000, 555555);

// console.log(book1);
// console.log(book2);
// console.log(book3);

// ----------------------------------------------

// La herencia permite que los objetos y clases re-utilicen propiedades y metodos de otros

// class Book extends Product {
//     constructor(bookName, price, isbn) {
//         super(bookName, price)
//         this.isbn = isbn;
//     }
//     formaProduct() {
//         return `El nombre del libro es ${this.productName}, su precio es ${this.price} y este es su isbn ${this.isbn}`;
//     }
// };

// const book1 = new Book("El Perfume", 10000, 123456789);
// const book2 = new Book("Luna Caliente", 20000, 12345);
// const book3 = new Book("Cien años de soledad", 15000, 555555);

// console.log(book1.formaProduct());
// console.log(book2.formaProduct());
// console.log(book3.formaProduct());

// -------------------------------
// Heredar metodos

// class Book extends Product {
//     constructor(bookName, price, isbn) {
//         super(bookName, price)
//         this.isbn = isbn;
//     }
//     formaProduct() {
//         return `${super.formaProduct()} y su isbn es ${this.isbn}`
//     }
// };

// const book1 = new Book("El Perfume", 10000, 123456789);
// const book2 = new Book("Luna Caliente", 20000, 12345);
// const book3 = new Book("Cien años de soledad", 15000, 555555);

// console.log(book1.formaProduct());
// console.log(book2.formaProduct());
// console.log(book3.formaProduct());


class Medicine {
    constructor(medicineName = '', medicinePrice, brand = '') {
        this.medicineName = medicineName;
        this.medicinePrice = medicinePrice;
        this.brand = brand;
    }
    Result() {
        return `El nombre de la medicina es: ${this.medicineName}, su precio es: ${this.medicinePrice} y su marca es: ${this.brand}`;
    }
}

const medicine1 = new Medicine("Acetaminofen", 2004400, "Bayer");
const medicine2 = new Medicine("Dolex", 30000, "JGB");
const medicine3 = new Medicine("Hibuprofeno", 20000, "Bayer");

// console.log(medicine1.Result());
// console.log(medicine2.Result());
// console.log(medicine3.Result());

// --------- EXTEND
class Hospital extends Medicine {
    constructor(hospitalName, hospitalPrice, brand) {
        super('', hospitalPrice, '')
        this.hospitalName = hospitalName;
        this.brand = brand;
    }
    Result() {
        return `El nombre de la medicina es: ${this.hospitalName}, su precio es: ${this.medicinePrice} y su marca es: ${this.brand}`;
    }
}

const Hospital1 = new Hospital("Acetaminofen", 20000, "Bayer");
const Hospital2 = new Hospital("Dolex", 30000, "JGB");
const Hospital3 = new Hospital("Hibuprofeno", 20000, "Bayer");

console.log(Hospital1.Result());
console.log(Hospital2.Result());
console.log(Hospital3.Result());


