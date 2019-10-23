'use strict'

function cargarDatos(){
    document.querySelector('#list').innerHTML = ''
    for(let i in localStorage){
        if(typeof localStorage[i] == 'string'){
            var li = document.createElement('li')
            li.append(localStorage[i])
            document.querySelector('#list').append(li)
        }
    }
}

window.addEventListener('load', ()=>{
    
    localStorage.clear()

    //Añadir valor
    let formulario = document.querySelector('#peli')
    formulario.addEventListener('submit', ()=>{
        let titulo = document.querySelector('#name').value
        if(titulo.length >= 1)
            localStorage.setItem(titulo, titulo)
            
        cargarDatos()
    })

    //Eliminar valor
    let formularioD = document.querySelector('#peliD')
    formularioD.addEventListener('submit', ()=>{
        let titulo = document.querySelector('#nameD').value
        if(titulo.length >= 1)
            localStorage.removeItem(titulo)

        cargarDatos()
    })
})


