// This en JS

// This es una palabra reservada del sistema y No podemos usarla para nombrar variables o funciones.

const reservation = {
    userName: "Edwar",
    lastName: "Velasquez",
    userAge: 42,
    totalPay: 420000,
    isPayed: true,

    information: function () {
        return (`El cliente ${this.userName} reservo y la cantidad a pagar es ${this.totalPay}`);
    }
};

const reservation2 = {
    userName: "Juan",
    lastName: "Velasquez",
    userAge: 42,
    totalPay: 420000,
    isPayed: true,


    information: function () {
        return (`El cliente ${this.userName} reservo y la cantidad a pagar es ${this.totalPay}`);
    }
};

const reservation3 = {
    userName: "Carlos",
    lastName: "Perez",
    userAge: 42,
    totalPay: 20000,
    isPayed: true,


    information: function () {
        return (`El cliente ${this.userName} reservo y la cantidad a pagar es ${this.totalPay}`);
    }
};


console.log(reservation.information());
console.log(reservation2.information());
console.log(reservation.lastName);
console.log(reservation3.information());
