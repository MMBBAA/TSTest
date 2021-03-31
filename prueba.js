function holaMundo(nombre2) {
    return "Hola Mundo, soy " + nombre2;
}
//var nombre="Alberto!";
var resultado = holaMundo(nombre2);
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = resultado;
//Variables y tipos
var nombre2 = 12;
var edad = 22;
var programador = true;
var langs = ["php", "javascript", "css"];
//nombre2=102;
etiqueta.innerHTML = nombre2 + " - " + edad;
var a = 7;
var b = 12;
if (a === 7) {
    var a_1 = 4;
    var b = 1;
    console.log("dentro del if: " + a_1 + " - " + b);
}
console.log("fuera del if: " + a + " - " + b);
//Funciones y tipado
function devuelveNumero(num) {
    return "número devuelto " + num;
}
function devuelveString(texto) {
    if (texto == "hola") {
        var num = true;
    }
    var num = false;
    return num;
}
alert(devuelveNumero(34));
alert(devuelveString("adios"));
