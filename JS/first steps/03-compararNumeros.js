'use strict'

let n1 = parseInt(prompt('Ingresa el número 1: '))
let n2 = parseInt(prompt('Ingresa el número 2: '))

if(n1 == n2)
    alert('Son iguales')
else if(n1 > n2){
    alert('Número 1 es mayor que el 2')
    alert('Número 2 es menor que el 1')
}
else if(n1 < n2){
    alert('Número 2 es mayor que el 1')
    alert('Número 1 es menor que el 2')
}
else
    alert('Introduce valores correctos')
    