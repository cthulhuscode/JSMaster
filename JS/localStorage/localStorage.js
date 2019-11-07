'use strict'
//Local Storage: Información persistente almacenada en navegador mientras se usa la página web
//Utilizada en sesiones

window.addEventListener('load', ()=>{
    //Comprobar compatibilidad
    if(typeof Storage !== 'undefined')
        console.log('LocalStorage is available')
    else
        console.log('LocalStorage is unavailable')

    //Save data
    localStorage.setItem('title', 'Hello bro')

    //Get element
    let title = localStorage.getItem('title')

    //Print on the document
    console.log(title)
    document.querySelector('#movies').append(title);

    let user = {
        name: 'Enrique',
        email: 'jruvalcaba1@ucol.mx',
        web: 'soon'
    }

    //Save objects
    localStorage.setItem('user', JSON.stringify(user)) //Los datos deben convertirse a una cadena de texto json

    //Get objects
    user = JSON.parse(localStorage.getItem('user')) //La cadena devuelta debe convertirse a JSON
    console.log(user)

    document.querySelector('#movies').append(' ' + user.name + ' my email is ' + user.email)
    //Se puede actualizar la página y los datos no se borran

    //Eliminar un valor
    //localStorage.removeItem('user')

    //Limpiar todo el localStorage
    //localStorage.clear()
});


