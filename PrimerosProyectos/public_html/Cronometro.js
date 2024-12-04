let idTemporizador; // Variable para almacenar el temporizador
let contador = 0; // Contador en centésimas de segundo 
let corriendo = false; // Para evitar múltiples temporizadores activos

// Elementos del DOM
const pantalla = document.querySelector("#pantallaContainer");
const hora = document.querySelector("#horas");
const min = document.querySelector("#minutos");
const seg = document.querySelector("#segundos");
const cent = document.querySelector("#centesimas");
const valorBtn = document.querySelectorAll(".btn");

valorBtn.forEach((boton) => {
    boton.addEventListener("click", () => {
        const botonDado = boton.textContent;
        if (botonDado === "RESET") {
            resetCronometro();
        } else if (botonDado === "START") {
            iniciarCronometro();
        } else if (botonDado === "STOP") {
            detenerCronometro();
        }
    });
});

function iniciarCronometro() {
    if (!corriendo) {
        corriendo = true;
        idTemporizador = setInterval(actualizarPantalla, 10); // Actualización cada 10 ms
    }
}

function detenerCronometro() {
    corriendo = false;
    clearInterval(idTemporizador);
}

function resetCronometro() {
    detenerCronometro();
    contador = 0;
    actualizarPantalla(); 
}

function actualizarPantalla() {
    contador++;
    const horas = Math.floor(contador / 360000); 
    const minutos = Math.floor((contador % 360000) / 6000); 
    const segundos = Math.floor((contador % 6000) / 100); 
    const centesimas = contador % 100;
    pantalla.textContent = `${formatear(horas)}:${formatear(minutos)}:${formatear(segundos)}:${formatear(centesimas)}`;
}

function formatear(numero) {
    return numero.toString().padStart(2, "0");
}

resetCronometro();
