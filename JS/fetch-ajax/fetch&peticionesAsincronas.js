'use strict'

window.addEventListener('load', () =>{
    //Fetch es un sustituto de Ajax
    //Fetch y peticiones a servicios / apis rest

    let usuarios;
    let div_users = document.querySelector('#usuarios');
    fetch('https://reqres.in/api/users')
        .then(data => data.json()) //Regresa los datos a un archivo JSON
        .then(users => { //Guardar datos
            usuarios = users.data;
            console.log(usuarios)
        
            usuarios.map((user, i) => {
                let nombre = document.createElement('h4')
                nombre.innerHTML = i + ' - '+  user.first_name + ' ' + user.last_name;
                div_users.appendChild(nombre)
            });
            document.querySelector('.loading').style.display = 'none'
        })
});
