'use strict'

let array1 = ['Enrique', 'José', 'Elías', 'Adriel', 1, true]
let array2 = new Array('A','B',2,4.3,false)

let length = array1.length//longitud

//RECORRER ARRAY CON FOREACH
document.write('<h3>Listar arreglo<h3><ul>')
array1.forEach((valor, indice, arr) => {
    document.write('<li>' + '['+ indice +']: ' + valor + '</li>')
})
document.write('</ul>')