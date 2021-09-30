
class Corredores {
    constructor(nombre, aceleracion, velocidad){
        this.nombre = nombre,
        this.aceleracion = aceleracion,
        this.velocidad = velocidad
    }
    
}

let Corredores1 = new Corredores("sonic","20","60")
let Corredores2 = new Corredores("pikachu","30","40")
let Corredores3 = new Corredores("luffy","40","50")
let Corredores4 = new Corredores("itachi","35","45")

const cambiarPantalla = (valor) => {

    let arrayDeFases = ["1","2","3","4"];

    arrayDeFases = arrayDeFases.filter(iterador => !valor.includes(iterador));

    document.getElementById(valor).style.display = "block";

    for (let cadaPosicion of arrayDeFases) {

        document.getElementById(cadaPosicion).style.display = "none";
    }


}

// let impala = document.getElementById("impala")

// let mustang = document.getElementById("mustang")

// let mensajeEleccion = document.getElementById("contenedorTexto")

// let equipo1 = {}

// let equipo2 = {}


const selectPersonaje = (Elegido) => {

    mensajeEleccion.innerHTML = `Has seleccionado ${Elegido}`;
    let personajeElegido = document.getElementById(elegido);

    if(personajeElegido.classList.contains("contenedorCorredor2")){
        personajeElegido.classList.remove("contenedorCorredor2");
    } else {
        
        personajeElegido.classList.add("contenedorCoche2");
    }
    console.log("selectPersonaje")
}


// organizer = (arg_0) => {
//     let arrFases = ["1","2","3","4"];
//     arrFases = arrFases.filter(val => !arg_0.includes(val));
//     document.getElementById(arg_0).style.display = "block";
//     for (let _f of arrFases) {
//         document.getElementById(_f).style.display = "none";
//         console.log()
//     }
// }

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }