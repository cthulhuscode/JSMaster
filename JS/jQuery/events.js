'use strict'

function rectOver(){
    $(this).css('background','red')
    .css('cursor','pointer')
}

function rectOut(){
    $(this).css('background','cornflowerblue')
}

$(document).ready(function (){
    console.log('charged')

    let caja = $('#caja');

    //Mouse over
    caja.mouseover(function(){
        $(this).css('background','orange')
                .css('cursor','pointer')
    })
    //Mouse out
    caja.mouseout(function(){
        $(this).css('background', 'yellow')
    })

    let rect = $('#rect')
    //Hover: Tiene dos funciones de callback, uno para el over y otro para el out
    rect.hover(rectOver, rectOut)

    //Click
    rect.click(function(){
        $(this).css('width', '150px')
    })
    caja.click(function(){
        $(this).css('width', '150px')
    })

    //doubleClick
    rect.dblclick(function(){
        $(this).css('width', '350px')
    })
    caja.dblclick(function(){
        $(this).css('width', '250px')
    })

    //Focus
    let nombre = $('#nombre')
    nombre.focus(function(){
        $(this).css('border','2px solid green')
    })

    let datos = $('#datos');
    //Blur - Salida del focus
    nombre.blur(function(){
        $(this).css('border','2px solid #ccc')
        datos.find('h4').text($(this).val()).show()
    })

    //mousedown: haciendo click y mouseup: liberar click
    datos.mousedown(function(){
        $(this).css('border','3px solid red')
    })

    datos.mouseup(function(){
        $(this).css('border','3px solid #ccc')
    })

    //mousemove: captura coordenadas del ratón
    $(document).mousemove(function(){
        $('body').css('cursor','none')
        console.log('x = ' + event.clientX)
        console.log('y = ' + event.clientY)
        $('#circle').css('left',event.clientX)
                    .css('top', event.clientY)
    })
})

