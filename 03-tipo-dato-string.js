// Strikng o cadena de texto

const userName = "Carlos";
const userName1 = 'Edwar';

// Typeof para mirar el tipo de dato
console.log(typeof userName);
console.log(userName);

// Dos formas no tan comunes

const userName2 = String("Vero");
// Creamos una variable, mediante el constructor, instanciando a partir de la palabra new.
// Instanciar, es el proceso mediante el cual yo creo un objeto a partir de una clase
const userName4 = new String("Vero");

console.log(userName2);
console.log(typeof userName4);

let product = 'Televisor de 50P\'';
console.log(product);
let product2 = "Televisor de 50\"";
console.log(product2);

let phrase = "Estamos aprendiendo JS en el CDITI";
console.log(phrase.length);

// Busca si una cadena existe y meda su indexación.
// Si el resultado es menor que 0, la cadena No existe.
console.log(phrase.indexOf("JS"));

// Método mas moderno para buscar si una cadena existe
console.log(phrase.includes("JS"));
