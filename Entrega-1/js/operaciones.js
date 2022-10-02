/*
  Curso: Javascript
  Estudiante: Nicolás Brogna
  1era Entrega


  El ejercicio tiene lo solicitado para la 1era entrega:
*/

//letIABLES GLOBALES
let sobre = 0;
let album = 0;
let tipo = "";
let resultadoAlbum = 0;
let resultadosobre = 0;
let total = 0;
let nombre = ""
let numeros = [];


//CONSTANTES
//Precios 1 sobre
const PreciosobreFigurita = 150;
//Precio de 1 album
const PrecioAlbum = 1000;


function solicitarSobreFigurita(){
    tipo = "SOBRE";
    sobre = parseInt(prompt("Sobre de Figus\n\nPrecio unitario: " + PreciosobreFigurita + " PESOS\n\nIngrese la cantidad:"));
    noEsNumero(sobre,tipo);
    resultadosobre = calculos(sobre,tipo,PreciosobreFigurita,resultadosobre);
    return resultadosobre;
}

function solicitarAlbum(){
    tipo = "ALBUM";
    album = parseInt(prompt("Album\n\nPrecio unitario: " + PrecioAlbum + " PESOS\n\nIngrese la cantidad:"));
    noEsNumero(album,tipo);
    resultadoAlbum = calculos(album,tipo,PrecioAlbum,resultadoAlbum);
    return resultadoAlbum;
}

function bienvenido() {

    for (let i = 0; i <= 3; i++) {
        let ingresados = parseInt(prompt("Bienvenido, por favor Ingresa 4 numeros para el sorteo (del 1 al 20 )\n\n Se sortea 1 caja de figuritas en unos momentos (mientras puede ser comprando): \n\n"));
        numeros[i] = ingresados;
    }

}

setTimeout(function(){
    let min = 0;
    let max = 20; 
    let x = Math.floor(Math.random()*(max-min+1)+min);
    console.log(x)
    console.log(numeros)
    if(numeros.includes(x)){
        alert("Hora del sorteo \n\n El numero ganador es: " + x + "\n\n Felicitaciones! Ganaste!")
    }else{
        alert("Hora del sorteo \n\n El numero ganador es: " + x + "\n\n Perdón! Perdiste!")
    }

}, 20000);


function totalCotizacion(){
    let miCotizacion = new Cotizacion(sobre,album);
    miCotizacion.composicion();
}   

//OBJETO COTIZACION
function Cotizacion (cantsobre, cantalbum) {


        //COMPONENTES DEL OBJETO COTIZACION
        this.composicion = function () {
            alert("\n\nMi cotización finalmente se compuso de: " +
                "\n" + cantsobre + " Sobres" +
                "\n" + cantalbum + " Album");
        };


    }

//ARREGLO RESUMEN DE CANTIDADES SOLICITADAS
function arregloResumenCantidades(){
    let partesCotizacion = [];
    partesCotizacion.push("paquetetipos: " + sobre);
    partesCotizacion.push("Combo caja: " + album);
    partesCotizacion = partesCotizacion.join(" / ");
    return partesCotizacion;
}


//VALIDAR NUMERO
function noEsNumero(numero,tipo){
    //si no es numero ó si es menor que cero, indica al cliente solicitar de nuevo
    if(isNaN(numero) || numero < 0){
        alert("Debes ingresar una Cantidad de " + tipo + " válido\nHaz una nueva solicitud");
    }
}


//FUNCION PARA CALCULAR EL COSTO DE LAS SOLICITUDES
function calculos(cantidad,tipo,precio,resultado){
    if(cantidad == 1 || cantidad == 0){
        resultado = cantidad*precio;
        console.log("Cantidad de " + tipo + ": " + cantidad +  " | Precio: " + resultado + " PESOS");
        alert("Cantidad de " + tipo + ": " + cantidad +  " | Precio: " + resultado + " PESOS");
    }
    if(cantidad > 1){
        resultado = cantidad*precio;
        console.log("Cantidad de " + tipo + ": " + cantidad +  " | Precio: " + resultado + " PESOS");
        alert("Cantidad de " + tipo + ": " + cantidad +  " | Precio: " + resultado + " PESOS");
    }
    return resultado;
}

