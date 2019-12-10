$(document).ready(function(){
    console.log('ajax')

    //Load
    //$('#divDatos').load('https://reqres.in/') //Se puede cargar toda la página

   
    //Al dar click se cargarán los datos
    $('#btnCargar').click(function (){
        $('#divDatos').empty()

         //GET - Obtiene un JSON
        $.get('https://reqres.in/api/users', {page: 2}, function(response){
            console.log(response); //Devuelve un objeto
            response.data.forEach((element, index) => {
                $('#divDatos').append('<p>'+element.first_name+' '+element.last_name+'</p>');
            })
        });
    });

    //POST

    //Mandando valores ya generados
    let usuario = { //se pueden usar comillas o no en la clave
        id: "user1",
        "name": "Enrique Ruvalcaba",
        email: "jruvalcaba1@ucol.mx"  
    };

    $.post('https://reqres.in/api/users', usuario, (response) => {
        console.log(response);
    });

    //Capturar evento submit del formulario
    $('#formulario').submit(function(e){
        e.preventDefault(); //Para que no se redirija la página

        //Mandando valores ingresados vía web
        let usuario2 = { //se pueden usar comillas o no en la clave
            id: $('input[name="id"]').val(),
            nombre: $('input[name="nombre"]').val(),
            correo: $('input[name="correo"]').val()  
        };  

        /*Al presionar el botón, attr action permitirán tomar los valores
        del formulario como si fuera desde una url */
        $.post($(this).attr('action'), usuario2, (response) => {
            console.log(response);
        }).done(function(){
            console.log('usuario añadido')
        });

        return false; //Para que no se redirija la página
    });
})