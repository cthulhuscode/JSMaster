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

//PARAMETROS REST Y SPREAD
//REST

function fruitList(f1, f2, ...restOfFruits){//El resto se convierte en un arreglo
    console.log(f1)    
    console.log(f2)    
    console.log(restOfFruits)
}

fruitList('Pera', 'Manzana', 'Limon', 'Sandia', 'Durazno')

//SPREAD
let fruits = ['Pera', 'Manzana', 'Limon', 'Sandia', 'Durazno']
fruitList(...fruits, 'Papayo', 'Platano')
//Los valores del arreglo se ingresan como si estuviesen uno por uno en los parámetros
