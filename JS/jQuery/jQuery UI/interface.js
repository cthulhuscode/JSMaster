$(this).ready(function(){
    console.log('jQuery is ready!')

    //draggable - Mover elemento por la página
    $('.elemento').draggable();

    //resizable - Redimensionar elementos
    $('.elemento').resizable();

    //selectable - Lista cuyos elementos son dimensionables
    //$('.lista').selectable();

    //sortable - permite ordenar los elementos de forma libre (funciona sin el selectable)
    $('.lista').sortable({
        update: function(event, ui){
            console.log('Ha cambiado la lista');
        }
    });

    //droppable - Permite colocar un objeto dentro de éste
    $('#elementoMover').draggable();
    $('#area').droppable({
        drop: function(){
            console.log('Hay un objeto en el área');
        }
    });

    //------------------------------ Efectos ---------------------------------
    $('#btnMostrar').click(function(){
        $('#divEfectos').toggle('scale', {} ,4000); //Se puede pasar un json para configurar más propiedades
                                //puff
                                //scale
                                //drop
                                //fade
                                //blind
                                //shake
    });

    //----------------------------- Widgets -----------------------------------

    //tooltip - Diálogo mostrando una ayuda
    $(document).tooltip();

    //dialog - Cuadro de diálogo
    $('#popup').click(function(){
        $('#dialogo').dialog();
    });

    //datepicker - calendario
    $('#calendario').datepicker();

    //tabs
    $('#pestana').tabs();
});