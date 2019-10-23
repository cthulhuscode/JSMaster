'use strict'
//ARROW
//Igual a una anónima pero usa '=>' en lugar de 'Function'
div = (a, b, documento) => {
    documento(a/b)
    //return a/b;
}

div(10, 2, res => {
    document.write(res)
})


//NORMAL FUNCTION
function mul(a, b, documento, consola){
    documento(a*b)
    consola(a*b)
    //return a * b;
}

//CALLBACK
mul(5,5, (valor) => {//Se cambia 'Function' por '=>'
    document.write(valor)
},
valor => {//Para un sólo parámetro los paréntesis no son necesarios
    console.log(valor)
});
 