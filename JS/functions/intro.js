'use strict'

//Funciones: Agrupación reutilizable de un conjunto de instrucciones
function calculadora(){
    return 'Hola soy una calculadora xd'
}

console.log(calculadora())

//--------------------------

var res = calculadora(); //Pasa el valor

//----PARAMETROS------

function sum(a,b){//Parametros a usar en la función
    return a+b
}

//PARAMETROS OPCIONALES
function div(a, b, show = false){//Vienen ya igualados y no es necesario ponerlos al llamar la función
    if(show)
        document.write(a/b)
    else
        console.log(a/b)
}

div(5,5)
div(5,5,true)

//FUNCIONES ANIDADAS
function cal(a, b){
    sum(a, b)
    div(a, b)
}

cal()




//FUNCIONES ANÓNIMAS
