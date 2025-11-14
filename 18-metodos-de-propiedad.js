// Se va a realizar un reproductor de canciones

// Metodos de propiedad

// const player = {
//     play: function (id) {
//         return (`Reproduciendo cancion... ${id}`);
//     },

//     pause: function () {
//         console.log("Pausando cancion...");
//     }
// }

// player.delete = function (id) {
//     return `Eliminando cancion ${id}`;
// }
// console.log(player.play(12));
// console.log(player.pause);
// console.log(player.delete(34));

const album = new Array("Vallenato", "Rock", "Pop");

months.forEach(function (month) {
    console.log(month);

})

const reproductor = {
    play: function (id) {
        return (`Reproduciendo cancion... ${id}`);
    },

    pause: function () {
        console.log("Pausando cancion...");
    }
}
