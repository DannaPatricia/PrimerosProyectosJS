

const boton = document.querySelector(".btn");
const fondoCartel = document.querySelector("#contenedorCartel");
const fondo = document.querySelector("body");
const texto = document.querySelector("p");
var numAux;
var numAleatorio;

boton.addEventListener("click", () => {
    let color;
    while (numAux === numAleatorio) {
        numAleatorio = numRandom();
    }
    switch (numAleatorio) {
        case 0:
            color = "rojo";
            break;
        case 1:
            color = "naranja";
            break;
        case 2:
            color = "amarillo";
            break;
        case 3:
            color = "verde";
            break;
        case 4:
            color = "azul";
            break;
        case 5:
            color = "añil";
            break;
        case 6:
            color = "violeta";
            break;
        case 7:
            color = "rosa";
            break;
        case 8:
            color = "blanco";
            break;
    }
    cambiaFondo(color);
    numAux = numAleatorio;
});

function numRandom() {
    return Math.floor(Math.random() * 9);
}

/*https://www.digitalocean.com/community/tutorials/como-modificar-atributos-clases-y-estilos-en-el-dom-es*/
function cambiaFondo(color) {
    if (color === "rojo") {
        texto.textContent = "ROJO";
        fondo.style.backgroundColor = "#a7160c";
        fondoCartel.style.backgroundColor = "#c45149";
        fondoCartel.style.boxShadow = "13px 10px #351715";
    } else if (color == "naranja") {
        texto.textContent = "NARANJA";
        fondo.style.backgroundColor = "#a7450c";
        fondoCartel.style.backgroundColor = "#cf6f37";
        fondoCartel.style.boxShadow = "13px 10px #2c1406";
    } else if (color == "amarillo") {
        texto.textContent = "AMARILLO";
        fondo.style.backgroundColor = "#e9c80c";
        fondoCartel.style.backgroundColor = "#9b850a";
        fondoCartel.style.boxShadow = "13px 10px #473f18";
    } else if (color == "verde") {
        texto.textContent = "VERDE";
        fondo.style.backgroundColor = "#52ac09";
        fondoCartel.style.backgroundColor = "#2d530d";
        fondoCartel.style.boxShadow = "13px 10px #152508";
    } else if (color == "azul") {
        texto.textContent = "AZUL";
        fondo.style.backgroundColor = "#0986ac";
        fondoCartel.style.backgroundColor = "#0b485a";
        fondoCartel.style.boxShadow = "13px 10px #0b2c36";
    } else if (color == "añil") {
        texto.textContent = "AÑIL";
        fondo.style.backgroundColor = "#092272";
        fondoCartel.style.backgroundColor = "#2f4ba7";
        fondoCartel.style.boxShadow = "13px 10px #0e1741";
    } else if (color == "violeta") {
        texto.textContent = "VIOLETA";
        fondo.style.backgroundColor = "#590972";
        fondoCartel.style.backgroundColor = "#7f3894";
        fondoCartel.style.boxShadow = "13px 10px #301638";
    } else if (color == "rosa") {
        texto.textContent = "ROSA";
        fondo.style.backgroundColor = "#a32c8f";
        fondoCartel.style.backgroundColor = "#bd62ae";
        fondoCartel.style.boxShadow = "13px 10px #5e3156";
    } else {
        texto.textContent = "BLANCO";
        fondo.style.backgroundColor = "white";
        fondoCartel.style.backgroundColor = "rgb(65, 63, 63)";
        fondoCartel.style.boxShadow = "13px 10px black";
    }
    fondo.style.transition = "0.4s";
    fondoCartel.style.transition = "0.4s";
}