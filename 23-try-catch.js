// Try catch
// Es una estructura utilizada para manejar errores en tiempo de ejecucion permitiendo que el programa continue ejecutandose sin fallar completamente
// Try: Dentro de este bloque se coloca el codigo que puede generar error.
// catch: Captura el error si ocurre dentro del bloque try y permite manejarlo.
// finalle(opcional): Ejecuta el codigo siempre, ocurra o no un error.

const num1 = 20;
const num3 = 30;

console.log(num1);
console.log(num3);

try {
    console.log(num2);

} catch (error) {
    console.log("Error, la variable no ha sido creada");
}

// -----------------------------------------

try {
    console.log(x);
} catch (error) {
    console.log("Ocurrio un error", error.message);
}

// ---------------------------------------
// Un try catch con error personalizado throw

try {
    const age = 23;

    if (isNaN(age)) {
        throw "La edad debe ser un numero"
    }
    console.log("Edad valida");
} catch (error) {
    console.log("Este es un error personalizado", error);

}
// -------------------------------------

// Capturar en funciones

function divide(a, b) {
    try {
        if (b === 0)
            throw " No se puede divir sobre 0"
        return a / b;

    } catch (error) {
        return "Error" + error;
    }
}

console.log(divide(10, 2));