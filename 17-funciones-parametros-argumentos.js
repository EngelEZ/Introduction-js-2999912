// Los parametros se pasan en los parantesis de la funcion

function add(num1, num2) { //Estos son los parametros
    console.log(num1 + num2);
};

add(7, 10); //Estos son los argumentos y solo actuan en tiempo de ejecucion
add(742, 10); //Estos son los argumentos y solo actuan en tiempo de ejecucion
add(71, 10); //Estos son los argumentos y solo actuan en tiempo de ejecucion
add(834, 10); //Estos son los argumentos y solo actuan en tiempo de ejecucion
add(2, 1); //Estos son los argumentos y solo actuan en tiempo de ejecucion

const add2 = function (num3, num4) {
    const suma = num3 + num4;
    return (suma);
}

add2(5, 2);

const result = add2(5, 1) + 8;
console.log(result);

// Funcion con valores por defecto

function add3(num5 = 9, num6 = 3) {
    console.log(num5 + num6);
}

add3();