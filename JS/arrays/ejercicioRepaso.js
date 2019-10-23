'use strict'

var array = [], i = 1;
for(i = 0; i < 6; i++)
    array.push(parseInt(prompt('Número '+ (i+1) +': ', 0)))

function show(array, sort = false, reverse = false, longi = false){
    if(sort){
        document.write(array.sort() + '<br>')
        console.log(array.sort())
    }
    if(reverse){
        document.write(array.reverse() + '<br>')
        console.log(array.reverse())
    }
    else{
        document.write(array + '<br>')
        console.log(array)
    }
    if(longi){
        document.write('Longitud: ' + array.length + '<br>')
        console.log('Longitud: ' + array.length)
    }
} 

show(array);
show(array, true, true, true)

let buscar = parseInt(prompt('Buscar: ', 0))
if(array.some(elemento => elemento == buscar)){
    alert('Valor encontrado en índice: ' + array.indexOf(buscar))
}

