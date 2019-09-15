'use strict'

//Variables y comentarios

var pais = 'Mexico';
var continente = 'Europa'
var antiguedad = 2019
var pais_continente = pais + ' ' + continente;

//Declarar variables Let & Var
let prueba = 'Hola'
var texto = 'Hola tengo sueño'
console.log('var: ' + texto)

if(true){
    let texto = 'A dormir'
    console.log('let: '+texto)
}

console.log('var: ' + texto)

//CONSTANTES
console.log('CONSTANTES')
var  web = 'https://pijamasurf.com'
const ip = '127.0.0.1' 

//OPERADORES Y TIPOS DE DATOS
console.log('OPERADORES Y TIPOS DE DATOS')
var n1 = 7, n2 = 12;
var operacion = n1 + n2;

console.log('Resultado = ' + operacion)

var entero = 1, texto = 'hola', flotante = 1.1, bool = true;

console.log(Number('5')+n1);

//TYPEOF
console.log(typeof n1)

//OPERADORES LÓGICOS (||, &&, )
let year = 2019;
if(year == 2019 || year == 2020)
    console.log('sí es')

//SWITCH
switch(year){
    case 2019:
        console.log('you have 19 years old')
        break;
    case 2020:
        console.log('you have 20 years old')
        break;
    default:
        console.log("the year doesn't match with anything")
}

//BUCLES
var nums = 0;
var i = 0;
for(i = 0; i <= 10; i++){
    nums += i;
    debugger; //Activa el depurador
}

i = 0;
while(i<=20){
    nums += i;
    i++;
}

i = 0;
do{
    nums += i;
    i++;
}while(i <= 30);

console.log('nums = ' + nums)



