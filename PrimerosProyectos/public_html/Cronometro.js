

/*TEMPORIZADORES
    setTimeOut(funcion, tiempo en ms)
    setInterval(funcion, tiempo en ms)*/

/*DECLARACION DE LA VARIABLE QUE GUARDARA EL IDENTIFICADOR DEL TEMPORIZADOR
let identificadorIntervaloDeTiempo;

DECLARACION DEL INTERVAL --> ESTE REPETIRA LA FUNCION QUE LE PASAMOS POR PARAMTETRO PASADO EL TIEMPO INDICADO
function repetirCadaSegundo() {
  identificadorIntervaloDeTiempo = setInterval(mandarMensaje, 1);
}
A DIFERENCIA DEL setTimeOut(), EL CUAL SE ENCARGA DE EJECUTAR LA FUNCION PASADA POR PARAMETRO DESPUES DE X TIEMPO,
NO SE REPITE DE MANERA AUTOMATICA

FUNCION QUE SE EJECUTARA CON EL TEMPORIZADOR
function mandarMensaje() {
  console.log("Ha pasado 1 segundo.")
  -- ESTO SE UTILIZA PARA DETENER EL TEMPORIZADOR
  clearInterval(identificadorIntervaloDeTiempo);
  clearTimeOut(nombreTemporizador)
}
function empezarContar(){
    
}*/

var contador = 0;

const pantalla = document.querySelector("#pantallaContainer");
const hora = document.querySelector("#horas");
const min = document.querySelector("#minutos");
const seg = document.querySelector("#segundos");
const cent = document.querySelector("#centesimas");
const valorBtn = document.querySelectorAll(".btn");
valorBtn.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonDado = boton.textContent;
        if (botonDado === "RESET") {
            pantalla.textContent = "00:00:00:00";
        } else if (botonDado === "START") {

        }

    });
});

/*let idTemporizador;*/
function comenzarContar(){
    idTemporizador =setInterval(temporizador, 1);
}

function temporizador(){
    contador++;
    cent.textContent = contador;
}
comenzarContar();
repetirCadaSegundo();


/*
var contador = 0;
function repetirCadaSegundo() {
    setInterval(() => {
        pantalla.textContent = contador;
        contador++;
        console.log("Ha pasado 1 segundo.");
    }, 1000);
}

function mandarMensaje() {
    console.log("Ha pasado 1 segundo.");
}
*/