'use strict'
/*Las promesas se ejecutan en secuencia, es decir
hasta que no carga una continua la otra. Se hacen funciones para evitar
un entramado de promesas y Callbacks y así mejorar la legibilidad del código*/

let usuarios;
let div_users, div_user;

//Fetch y promesas
window.addEventListener('load', () =>{
    getUsers()
        .then(data => data.json()) //Promesa que regresa los datos a un archivo JSON
        .then(users => { //Promesa para guardar datos
            listarUsuarios(users.data)          
            return getUser(2)
        })
        .then(data => data.json()) //Promesa para obtener los datos y convertirlos a JSON del usuario
        .then(user => { //Promesa para mostrar los valores
            mostrarUsuario(user.data) 
            return getProfesor()
        })
        .then(data => console.log(data)) //Promesa del profesor
        .catch(error => {//Permite atrapar el error
            console.log(error)
            alert('Error en las peticiones')
        })

});

function getUsers(){
    return fetch('https://reqres.in/api/users')
}

function getUser(user_num){
    return fetch('https://reqres.in/api/users/' + user_num)
}

//Crear promesa
function getProfesor(){
    let profesor = {
        nombre: 'Jorge',
        apellido: 'Pulido',
        facultad: 'Telemática'
    }
    return new Promise((resolve, reject)=>{
        let profesor_string = JSON.stringify(profesor)
        if(typeof profesor_string != 'string') return reject('error')

        return resolve(profesor_string)
    })
}

function listarUsuarios(usuarios){
    usuarios.map((user, i) => {
        let nombre = document.createElement('p')
        nombre.innerHTML = i + ' - '+  user.first_name + ' ' + user.last_name;

        div_users = document.querySelector('#usuarios')
        div_users.appendChild(nombre)
    });
    document.querySelector('.loading').style.display = 'none'
}

function mostrarUsuario(user){
    console.log(user)
    let nombre = document.createElement('p')
    nombre.innerHTML = user.first_name + ' ' + user.last_name;

    div_user = document.querySelector('#usuario')
    div_user.appendChild(nombre)

    let img = document.createElement('img')
    img.src = user.avatar;
    img.width = 150;
    div_user.appendChild(img)

    document.querySelector('.lusuario').style.display = 'none'
}
