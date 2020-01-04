"use strict";
/*HOLA MUNDO */
console.log('Hola mundo con TypeScript');
console.log('Creo que ya lo arreglé ');
/*
 -- error ts6053 file '*.ts' not found
     tsc --init
     tsc -p ./ -w
*/
/*VARIABLES Y TIPOS DE DATOS */
//string
var cadena = 'enridev.com';
//number
var edad = 19;
//boolean
var flag = true;
//any - cualquier cosa
var xValor = 'xdxd';
xValor = 12; //sí se puede debido al tipo de valor que acepta cualquier cosa
//Array
var lenguajes = ["PHP", "Python", "C#", "Javascript"]; //Se crea un arreglo de cadenas
//any
//number
var lang = ['JS', 'Py']; //otra forma de definirlo
var years = [12.2, 31.5];
console.log(cadena, edad, flag, xValor, lenguajes, lang, years);
//MÚLTIPLES TIPOS DE DATOS
var texto = 'ora raza';
texto = 11;
console.log(texto);
var parrafo = 'Ora raza cómo andan. Cambiaré el valor a 8';
console.log('Tipo de datos: ' + typeof parrafo);
console.log(parrafo);
parrafo = 8;
console.log('Tipo de datos: ' + typeof parrafo);
console.log(parrafo);
//LET - utilizado a nivel de bloque
//VAR - es global
//FUNCIONES
function getFuncion(num) {
    if (num === void 0) { num = 1; }
    return 'Función normal de JS';
}
console.log(getFuncion());
//función en TS
function getNumero(num) {
    if (num === void 0) { num = 1; }
    return 'El número es = ' + num;
}
console.log(getNumero(99));
