'use strict'

//El $ hace referencia a jQuery
//jQuery(document).ready(=>{}) - es lo mismo

//Comprobar si está cargado jQuery
$(document).ready(function(){//El 1er paréntesis es para el elemento a seleccionar, luego métodos
    console.log('jQuery is charged!')

    //Selector de ID
    $('#verde').css('background', 'green')
               .css('color','white')
               .css('font', 'bold 30px arial')

    $('#amarillo').css('background', 'yellow')
                  .css('color', 'gray')
                  .css('font', 'bold 30px arial')

    $('#rojo').css('background', 'red')
              .css('color','white')
              .css('font', 'bold 30px arial')

    //Selector de Clase
    let classBorde = $('.borde')

    console.log(classBorde[0]) //devuelve el elemento
    console.log(classBorde.eq(0)) //devuelve el elemento con métodos jQuery

    classBorde.css('padding','5px')
    
    $('.sinBorde').click(function(){
        console.log('click done')
        $(this).addClass('borde')
    })

    //Selectores de etiqueta
    let parrafos = $('span')
    parrafos.css('cursor', 'pointer')
    parrafos.click(function(){
        let self = $(this);
        if(self.hasClass('text'))
            self.removeClass('text')
        else
            self.addClass('text')
    })

    //Selectores de atributo
    $('[title=google]').css('background', '#ccc')
                       .css('text-decoration', 'none')
                       .css('font','bold 30px arial')
                       .css('color', 'gray')
    $('[title=pijamasurf]').css('background', '#ccc')
                            .css('text-decoration', 'none')
                            .css('font','bold 30px arial')
                            .css('color', 'gray')

    //Otros selectores
    $('a, span').addClass('margin')

    //Buscar con find(), ambos métodos equivalentes
    $('#lista .resaltado').css('width','50%')
    $('#lista').find('.resaltado').css('padding','1.5%')

    $('.pie').css('font','bold 20px Helvetica')
    
    //Regresar a métodos padre usando parent()
    let padre = $('.pie').parent().parent().css('font','bold 20px Helvetica')
    padre.css('background','#e6e6ff')
    console.log(padre)
});