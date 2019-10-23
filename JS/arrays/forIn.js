'use strict'
let array1 = ['Enrique', 'José', 'Elías', 'Adriel', 1, true]

//RECORRER ARRAY CON FOREACH
document.write('<h3>Listar arreglo<h3><ul>')

for(let elemento in array1){
    document.write('<li>'+ array1[elemento] +'</li>')
}

document.write('</ul>')