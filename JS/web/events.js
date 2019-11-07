'use strict'

window.addEventListener('load', ()=>{//Para manipular el document hasta que todo haya sido cargado
    //Mouse events
    //onclick, ondbclick
    let boton = document.querySelector('#boton')

    function changeColor(boton){
        if(boton.style.background == 'red')
            boton.style.background = 'green'
        else
            boton.style.background = 'red';

        boton.style.padding = '20px'
        boton.style.border = '1px solid white'
        console.log('here')
    }

    //Mouse Click
    boton.addEventListener('click', ()=>{
        changeColor(boton)
        console.log(this) //Hace referencia a window
    })

    //Mouse over
    boton.addEventListener('mouseover', ()=>{
        boton.style.background = '#ccc'
    })

    //Mouse out
    boton.addEventListener('mouseout', function(){
        boton.style.background = 'gray'
    })

    let input = document.querySelector('#campo_nombre')

    //Focus - Cuando el foco está en el elemento
    input.addEventListener('focus', ()=>{
        console.log('Estás dentro del input (focus)')
    })

    //Blur
    input.addEventListener('blur', ()=>{
        console.log('Estás saliendo del input (blur)')  
    })

    //Keydown
    input.addEventListener('keydown', (event)=>{
        console.log('[keydown] Estás pulsando la tecla ' + String.fromCharCode(event.keyCode))
    })

    //Keypress 
    input.addEventListener('keypress', (event)=>{
        console.log('[keypress] Tecla presionada ' + String.fromCharCode(event.keyCode))
    })

    //Keyup
    input.addEventListener('keyup', (event)=>{
        console.log('[keyup] Tecla soltada ' +  String.fromCharCode(event.keyCode))
    })
})//end load

