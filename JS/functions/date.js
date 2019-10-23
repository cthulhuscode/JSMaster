'use strict'

let fecha = new Date()
console.log(fecha)

let dateText = `
    year: ${fecha.getFullYear()}
    month: ${fecha.getMonth()+1}
    day: ${fecha.getDate()}
    hours: ${fecha.getHours()}
`

console.log(dateText)