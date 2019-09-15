'use strict'
//FUNCIONES ANÓNIMAS
//Función que no tiene nombre, utilizada para hacer Callbacks
//Callback: Una función que se ejecuta dentro de otra.

//ANONIMA
let suma = function(a, b, documento, consola){//es anónima por no tener un nombre y poder asignarse a la variable
    return a + b;
}

console.log(suma(5,5))

//NORMAL FUNCTION
function mul(a, b, documento, consola){
    documento(a*b)
    consola(a*b)
    //return a * b;
}

//CALLBACK
mul(5,5, function(valor){
    document.write(valor)
},
function(valor){
    console.log(valor)
});
 