$(document).ready(function(){
    console.log('ajax')

    //Load
    //$('#divDatos').load('https://reqres.in/') //Se puede cargar toda la página

   
    //Al dar click se cargarán los datos
    $('#btnCargar').click(function (){
        $('#divDatos').empty()

         //GET y POST
        $.get('https://reqres.in/api/users', {page: 2}, function(response){
            console.log(response); //Devuelve un objeto
            response.data.forEach((element, index) => {
                $('#divDatos').append('<p>'+element.first_name+' '+element.last_name+'</p>');
            })
        });

    })


})