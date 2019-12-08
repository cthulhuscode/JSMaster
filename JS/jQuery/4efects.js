$(document).ready(function (){
    $('#btnShow').hide()
    
    //Mostrar boton
    $('#btnShow').click(function (){
        $(this).hide() //Ocultarlo
        $('#btnHide').show() //Mostrar el otro 
        $('#divBox').fadeTo('fast', function (){
            console.log('Cartel al descubierto')
        })
                    //slideDown
                    //slideUp
                    //.fadeTo('slow', 1)
                    //.fadeTo('slow', 0)
                    //.show('fast')
                    //.show('normal')
                    //fadeIn('fast')
                    //fadeOut('fast')
    })

    //Ocultar botón
    $('#btnHide').click(function (){
        $(this).hide()
        $('#btnShow').show()
        $('#divBox').fadeOut('fast', function (){ //El callback se ejecuta al termino del efecto
            console.log('Cartel oculto') 
        })
    })

    /*Con este sólo botón se realiza la misma funcionalidad
    que los dos anteriores botones*/
    //Todo en un sólo botón
    $('#btnAceptar').click(function (){
        $('#divBox').toggle('fast');
                    //.fadeToggle()
                    //slideToggle()
                    //slideDown() - Para mostrar
                    //siledeUp() - Para ocultar
    });
});