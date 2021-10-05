//Cambio de pantalla

const cambiarPantalla = (valor) => {

    let arrayDeFases = ["1", "2", "3", "4"];

    arrayDeFases = arrayDeFases.filter(iterador => !valor.includes(iterador));

    document.getElementById(valor).style.display = "block";

    for (let cadaPosicion of arrayDeFases) {

        document.getElementById(cadaPosicion).style.display = "none";
    }

}


// Instanciar los corredores

class Corredores {
    constructor(nombre, aceleracion, velocidad) {
        this.nombre = nombre,
            this.aceleracion = aceleracion,
            this.velocidad = velocidad
    }

}

let Corredores1 = new Corredores("sonic", "20", "60")
let Corredores2 = new Corredores("pikachu", "30", "40")
let Corredores3 = new Corredores("luffy", "40", "50")
let Corredores4 = new Corredores("itachi", "35", "45")


//Variables

let corredor1 = "";
let corredor2 = "";
let arrayDeCorredores = ["", ""]
var indice = 0;


// Traductor

let traductorCorredores = {
    "sonic": Corredores1,
    "pikachu": Corredores2,
    "luffy": Corredores3,
    "itachi": Corredores4
}



// Seleccion de corredores

const seleccionarCorredores = (personajeElegido) => {

    if (corredor1 != "") {
        corredor2 = traductorCorredores[personajeElegido]

        console.log("El corredor 1 es", corredor1);
        console.log("El corredor 2 es", corredor2);

        setTimeout(() => {
            cambiarPantalla("3");
        }, 2000)
    } else {

        corredor1 = traductorCorredores[personajeElegido];

    }
}

// Distancia que recorren los corredores

var Metroscorredor1 = 0;
var Metroscorredor2 = 0;
var Metrosarecorrer = 4000;


// Mostrar los corredores seleccionados






// Funcion de carrera mediante click


const pulsacionAvanzar = (correr) => {

    var btn = document.getElementById('btn-go');
    btn.addEventListener()

}