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
    constructor(nombre, aceleracion, velocidad) {
        this.nombre = nombre;
        this.aceleracion = aceleracion;
        this.velocidad = velocidad;
    }

}

let Corredores1 = new Corredores("sonic", "20", "60")
let Corredores2 = new Corredores("pikachu", "30", "40")
let Corredores3 = new Corredores("luffy", "40", "50")
let Corredores4 = new Corredores("itachi", "35", "45")


//Variables

let corredor1 = "";
let corredor2 = "";
let indice = 0;


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
        
    } else {
        corredor1 = traductorCorredores[personajeElegido];
        console.log("El corredor 1 es", corredor1);
    
     setTimeout(() => {
            cambiarPantalla("3");
        }, 2000)
    }

   
}


// Distancia que recorren los corredores

let Metroscorredor1 = 0;
let Metroscorredor2 = 0;
let Metrosarecorrer = 4000;


// Mostrar los corredores seleccionados

const corredoresMostrados = () => {
    document.getElementById("carrera").innerHTML=
        `

    <div class="personajeacorrer1">
            <div> <img src="/items/${corredor1.nombre}.gif></div>
        </div>
        <div class="personajeacorrer2">
            <div> <img src="/items/${corredor2.nombre}.gif"/></div>
        </div>
            `;
}



// const CorredoresMostrados2 = (corredor1, corredor2) => {

//     if (corredor1 = !traductorCorredores[Corredores2], !traductorCorredores[Corredores3], !traductorCorredores[Corredores4]) {
//         return document.getElementById("sonic");
//     } else (corredor1 = !traductorCorredores[Corredores1], !traductorCorredores[Corredores3], !traductorCorredores[Corredores4]); {
//         return document.getElementById("pikachu");
//     } 
// }

// Funcion de carrera


// function checkIndice() {
//     if (indice == 2) {  
//         cambiarPantalla("4");
//         var IntervaloDistancia = window.setInterval(function () {
//             Metroscorredor1 += Math.random() * (100 - 50) + 50;
//             Metroscorredor2 += Math.random() * (100 - 50) + 50;
//             if (Metroscorredor1 >= Metrosarecorrer || Metroscorredor2 >= Metrosarecorrer) {
//                 document.getElementById("botonResultado").style.display = "block";
//                 clearInterval(IntervaloDistancia);
//                 if (Metroscorredor1 < Metroscorredor2) {
//                     document.getElementById("ganador").src = "img/" + corredor1 + ".jpg";
//                 }
//                 else {
//                     document.getElementById("ganador").src = "img/" + corredor2 + ".jpg";
//                 }
//             }   
//             document.getElementById("contadorcorredor1").innerHTML = "Metros recorridos: " + Metroscorredor1.toFixed(2);
//             document.getElementById("contadorcorredor2").innerHTML = "Metros recorridos: " + Metroscorredor2.toFixed(2);
//         }, 1000);
//     }
// }

// Funcion resetear carrera

// function resetearJuego() {
//     indice = 0;
//     Metroscorredor1 = 0;
//     Metroscorredor2 = 0;
//     cambiarPantalla("1");
//     document.getElementById("botonResultado").style.display = "none";
// }