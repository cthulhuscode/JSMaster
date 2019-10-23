'use strict'
let num = 777;
num.toString()

let text1 = 'Hola'

let dato = text1.toUpperCase();
    dato = text1.toLowerCase();
    dato = text1.length;

//MÉTODOS DE BÚSQUEDA
let text2 = ' chavo'
    dato = text1.concat(text2)//'Hola chavo'
    dato2 = dato.indexOf('chavo')//encuentra una palabra, devuelve el índice
    dato3 = dato.lastIndexOf('o')//Devuelve índice de la última aparación del valor
    dato4 = dato.search('chavo')//igual a indexOf
    dato5 = dato.match('vo')//Devuelve arreglo con valor que coincide: ['vo']
    dato6 = dato.substr(0, 4)//Obtiene valores dado un rago: 'Hola'
    dato7 = dato.charAt(3)//Obtiene un sólo caracter: 'a'
    dato8 = dato.startsWith('Hola')//booleano comprueba que inicie con el valor de parametro: true
    dato9 = dato.includes('Hola')//Busca valor, devuelve booleano

//MÉTODOS DE REEMPLAZO
let text3 = 'Hola amigos, estoy programando'
    d1 = text3.replace('programando', 'leyendo')//Reemplaza el primer valor por el segundo en una string
    d2 = text3.slice(5,10);//Corta una cadena a partir de un inicio y un final: "amigo"
    d3 = text3.split(" ");//Divide en partes cada que encuentra una coincidencia y lo mete en un arreglo: ["Hola", "amigos,", "estoy", "programando"]
    d4 = text3.trim();//Quitar espacio por delante y atrás.

