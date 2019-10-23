'use strict'
let array1 = ['Enrique', 'José', 'Elías', 'Adriel', 1, true]

//RECORRER ARRAY CON FOREACH
document.write('<h3>Listar arreglo<h3><ul>')
array1.forEach((valor, indice, arr) => {
    document.write('<li>' + '['+ indice +']: ' + valor + '</li>')
    console.log(arr)
})
document.write('</ul>')