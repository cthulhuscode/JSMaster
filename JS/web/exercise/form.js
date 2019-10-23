'use strict'

function createH3(text){
    let h3 = document.createElement('h3')
    h3.innerHTML = text;
    return h3;
}

window.addEventListener('load', function(){
    console.log('DOM charged')

    //Operador: this - Hace referencia al elemento utilizado, por ejemplo a window

    let formulario = document.querySelector('#formulario');
    let box_dashed = document.querySelector('.dashed')
    box_dashed.style.display = 'none'

    //Evento click del botón
    formulario.addEventListener('submit', ()=>{
        console.log('Submit capturado')

        //Obtener elementos del documento
        let nombre = document.querySelector('#nombre').value
        let apellidos = document.querySelector('#apellidos').value
        let edad = parseInt(document.querySelector('#edad').value)

        //Validación
        if(nombre.trim() == null || nombre.trim().length == 0){
            this.alert('Nombre inválido')
            return false;
        }
        if(apellidos.trim() == null || apellidos.trim().length == 0){
            this.alert('Apellidos inválidos')
            return false;
        }
        if(edad == null || edad <= 0 || isNaN(edad)){
            this.alert('Edad inválida')
            return false;
        }

        //Ingresar datos al cuadro
        let array = [nombre, apellidos, edad]
        box_dashed.innerHTML = '';
        box_dashed.append(createH3('Datos del usuario'))
        box_dashed.style.display = 'block'

        for(let i in array){
            let p = document.createElement('p')
            p.append(array[i])
            box_dashed.append(p)
        }
    })
})
