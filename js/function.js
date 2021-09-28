// class Vehiculos {
//     constructor(color, marca, velocidad, frenada, ocupantes, aceleracion){
//         this.velocidad = velocidad,
//         this.frenada = frenada,
//         this.color = color,
//         this.marca = marca,
//         this.ocupantes = ocupantes,
//         this.aceleracion = aceleracion
//     }

// acelerar(){
//     this.velocidad += this.aceleracion
// }
// frenar(){}
// }



// class Coche extends Vehiculos {

//     constructor(marca, color, ruedas, motor, cv, transmision, combustible){
//         super(marca, color, ruedas)
//         this.motor = motor,
//         this.cv = cv,
//         this.transmision = transmision,
//         this.combustible = combustible
//     }


//     aparcar(){}
// }





// class Bici extends Vehiculos{

//     constructor(marchas, tipo){
//         this.marchas = marchas,
//         this.tipo = tipo
//     }
// }

// let Coche1 = new Coche("toyota","negro",4,0,50,4,2.0,110,"automatica","gasolina", )

// let Bici1 = new Bici("btwin","verde",3,0,50,)


let impala = document.getElementById("impala")

let mustang = document.getElementById("mustang")

let mensajeEleccion = document.getElementById("contenedorTexto")

let equipo1 = {}

let equipo2 = {}


const Selectcar = (Elegido) => {

    mensajeEleccion.innerHTML = `Has seleccionado ${Elegido}`;
    let cocheElegido = document.getElementById(elegido);

    if(cocheElegido.classList.contains("contenedorCoche2")){
        cocheElegido.classList.remove("contenedorCoche2");
    } else {
        
        cocheElegido.classList.add("contenedorCoche2");
    }
    console.log (Selectcar)
}