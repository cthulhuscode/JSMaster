$(document).ready(function(){
    //comprobar si el documento ya cargó
    console.log('document ready!')

    //Cargar links a la lista
    loadLinks()

    //Ingresar nuevo link
    $('#btn')
    .removeAttr('disabled')
    .click(function(){
        let txt = $('#txt')      
        $('#list').prepend('<li><a href='+ txt.val() +'>'+txt.val()+'</a></li>')
                //.append - Al final de la lista
                //.before - Antes y fuera de la lista
                //after - Después y fuera de la lista
        txt.val('')
    })
})

//Escribir atributo href en la etiqueta li
function loadLinks(){
    $('a').each(function(){//recorre cada uno de los elementos <a>
        $(this).text($(this).attr('href'))
        $(this).attr('target', '_blank') //Agregar atributo para que la página se cargue en una nueva pestaña
    })
}