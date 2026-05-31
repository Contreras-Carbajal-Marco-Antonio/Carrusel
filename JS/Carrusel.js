let imagenes = [
    "../Img/aguacero.png",
    "../Img/lluvia.png",
    "../Img/marcador.png",
    "../Img/nublado.png",
    "../Img/sol.png"
];

let indice = 0;

function siguiente() {
    indice++;

    if (indice >= imagenes.length) {
        indice = 0;
    }

    document.getElementById("imagen").src = imagenes[indice];

}
document.getElementById("after").addEventListener("click",siguiente)

function anterior() {
    indice--;

    if (indice < 0) {
        indice = imagenes.length - 1;
    }

    document.getElementById("imagen").src = imagenes[indice];
}
document.getElementById("before").addEventListener("click",anterior)