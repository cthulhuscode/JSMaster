$(document).ready(function (){
    $('#btnAnimate').click(function (){
        $('#divBox').animate({
            marginLeft:'35%',
            borderRadius: '10px',
            size:'30px',
            fontSize: '30px',
        },'slow')
        .animate({
            marginTop: '30%',
        },'slow')
        .animate({
            marginLeft:'0%',
        },'slow')
        .animate({
            marginTop: '0%',
        },'slow')
        .animate({
            width:'100px',
            fontSize:'10px'
        },'slow')
    });
});