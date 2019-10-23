'use strict'
//DOM: Document Object Model
//getElementById
let caja = document.getElementById('caja').innerHTML; //Recuperar valor dentro de etiqueta
console.log(caja)

caja = document.getElementById('caja'); //Recuperar etiqueta
console.log(caja)

//Modificando valor
caja.innerHTML = 'Texto modificado desde variable'

//Modificar estilos CSS
caja.style.background = 'black'
caja.style.padding = '20px'
caja.style.color = 'white'
caja.style.font = "italic bold 30px calibri";

function changeColor(color){
    caja.style.color = color
}

//Añadir clases
caja.className = 'clase1 clase2'

//querySelector - Sólo devuelve el primer valor, no una colección
//Seleccionar la etiqueta con id: caja
document.querySelector('#caja')

//Seleccionar la etiqueta con class: .caja
document.querySelector('.caja')

//Seleccionar la etiqueta con nombre: caja
document.querySelector('caja')

//getElementsByTagName (Seleccionar etiquetas)
let divArray = document.getElementsByTagName('div')
console.log('divs: ' + divArray)
let contenido = divArray[1].textContent
console.log('contenido = ' + contenido)


//Crear elementos
let parrafo,texto
for(let elemento in divArray){
    if(typeof divArray[elemento].textContent == 'string'){
        console.log('Elemento ' + (elemento) + ':' + divArray[elemento])
        parrafo = document.createElement('p') //Crea etiqueta
        texto = document.createTextNode(divArray[elemento].textContent) //Añadir valor a la etiqueta
        parrafo.append(texto)
        document.querySelector('#seccion').append(parrafo) //Meter todo dentro de seccion
    }    
}

//Modificar elementos
let p = document.getElementsByTagName('p')
p[1].style.font = 'bold 15px calibri red';
p[2].style.font = 'bold 15px calibri red';
p[3].style.font = 'bold 15px calibri red';

//Poner separación
let hr = document.createElement('hr')
document.querySelector('#seccion').append(hr)

//getElementsByClassName
let spanRojos = document.getElementsByClassName('rojo');
console.log(spanRojos)

for(let i in spanRojos){
    if(spanRojos[i].className == 'rojo')
        spanRojos[i].style.background = 'red'
}

document.getElementsByClassName('verde')[0].style.background = 'green'; //Siempre devolverá un arreglo

//Probando con querySelector
console.log('\n')
console.log(document.querySelectorAll('.rojo')) //Sólo regresa el primer elemento
console.log(document.querySelectorAll('.rojo')) //Regresa todos los elementos



    
