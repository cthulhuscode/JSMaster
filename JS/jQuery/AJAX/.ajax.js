$(document).ready(function(){
    console.log('ajax')

    //Capturar evento submit del formulario
    $('#formulario').submit(function(e){
        e.preventDefault(); //Para que no se redirija la página

        //Mandando valores ingresados vía web
        let usuario = { //se pueden usar comillas o no en la clave
            id: $('input[name="id"]').val(),
            nombre: $('input[name="nombre"]').val(),
            correo: $('input[name="correo"]').val()  
        };  

        //Este método es mejor ya que permite controlar varias características
        /*Dentro del método va un JSON con todos los parámetros*/
        $.ajax({
            type: 'POST',
            //dataType: 'json', //tipos de datos a recibir o enviar
            //contentType: 'application/json', //formato en que trabajarán los datos
            data: usuario, //datos enviados
            beforeSend: function(){
                console.log('Enviando usuario');
            },
            success: function(){
                console.log(response);
            },
            error: function(){
                console.log('Ha ocurrido un error');
            },
            timeout: 10 //tiempo de duración de la petición, si se pasa da error
        });

        return false; //Para que no se redirija la página
    });
})