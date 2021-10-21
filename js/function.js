/* Autor: Daniel Moreno Herrador
Fecha: 05/10/2021 */


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
    constructor(nombre, imagencorriendo, imagen) {
        this.nombre = nombre;
        this.distancia = 0;
        this.imagencorriendo = imagencorriendo;
        this.imagen = imagen;
    }

    setCorrer(potencia) {
        this.distancia += potencia;
    }
    getCorrer() {

    }
}

let Corredores1 = new Corredores("sonic", "soniccorriendo.gif", "sonicsprite.gif")
let Corredores2 = new Corredores("pikachu", "pikachucorriendo.gif", "pikachusprite.gif")
let Corredores3 = new Corredores("luffy", "luffy.gif", "luffysprite.gif")
let Corredores4 = new Corredores("itachi", "itachicorriendo.gif", "itachisprite.gif")


//Variables

let corredor1 = "";
let corredor2 = "";
let ganador = "";
let potencia = 500;


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
        console.log("El corredor 2 es", corredor2);

        corredoresMostrados();

        setTimeout(() => {
            cambiarPantalla("3");
        }, 2000)

    } else {
        corredor1 = traductorCorredores[personajeElegido];
        console.log("El corredor 1 es", corredor1);


    }



}


// Mostrar los corredores seleccionados

const corredoresMostrados = () => {

    document.getElementById("carrera").innerHTML =
        `
        <div class="posicioncorredores">
            <div class="personajeacorrer1"><img class="pic" src= "items/${corredor1.imagencorriendo}" alt=""></div>
            <div class="personajeacorrer2"><img class="pic" src= "items/${corredor2.imagencorriendo}" alt=""></div>
        </div>
        <div class="metrosrecorridos">
            <div class="metro1" id="potenciacorredor1">${corredor1.distancia}</div>
            <div class="metro2" id="potenciacorredor2">${corredor2.distancia}</div>
        </div>
        <div class="botoncorrer"  id="cmptcn" onclick="acelerar()"><button>CORRER</button></div> 
            `;
}


// Funcion de acelerar para correr

const acelerar1 = () => {
    let random = Math.floor(Math.random() * (50 - 5) + 5);
    corredor1.distancia = parseInt((random + corredor1.distancia))

    console.log(corredor1.distancia);
    document.getElementById("cmptcn").style.botton = `${corredor1.distancia}`
    document.getElementById("potenciacorredor1").innerHTML = `P1:${corredor1.distancia}`;
}
const acelerar2 = () => {

    let random = Math.floor(Math.random() * (50 - 5) + 5);
    corredor2.distancia = parseInt((random + corredor2.distancia))

    console.log(corredor2.distancia);
    document.getElementById("cmptcn").style.botton = `${corredor2.distancia}`
    document.getElementById("potenciacorredor2").innerHTML = `P2:${corredor2.distancia}`;
}


// Funcion para comparar resultados del random

const acelerar = () => {
    acelerar1();
    acelerar2();
    compararCorredores();
}


const compararCorredores = () => {

    if (corredor1.distancia < potencia && corredor2.distancia < potencia) {

        console.log("continua la carrera");
    } else {
        document.getElementById("cmptcn").style.display = "none";
        if (corredor1.distancia > corredor2.distancia && corredor2.distancia < corredor1.distancia) {
            console.log(`El ganador es ${corredor1.nombre}`);

            setTimeout(() => {
                cambiarPantalla("4");
                final();
            }, 1000);

            ganador = corredor1;
            ganador.innerHTML = `El ganador es ${corredor1.nombre}`;
            console.log(ganador)

        } else {
            console.log(`El ganador es ${corredor2.nombre}`)

            setTimeout(() => {
                cambiarPantalla("4");
                final();
            }, 1000);

            ganador = corredor2;
            ganador.innerHTML = `El ganador es ${corredor2.nombre} !!!!`;
            console.log(ganador)

        }
    }
}

// Funcion para mostrar al personaje ganador

const final = () => {
    document.getElementById("winner").innerHTML =
        `
    <div class="camp">
    <h1 class="tituloganador">El ganador es:</h1>
    <div class="imagenganador"><img src='items/${ganador.imagen}'/></div>
    <div class="nombreganador">${ganador.nombre}</div>  
    </div>
    <div class="hwinner">
    <div class="botonrestart">
        <button id="restart" type="button" onclick=restart()>RESTART</button>
        </div>
    </div>
    </div>
    `;
}


//funcion restart
const restart = () => {
    cambiarPantalla("1");
    corredor1.distance = 0;
    corredor2.distance = 0;
    corredor1.potencia = 0;
    corredor2.potencia = 0;
    window.location.reload(true);

}