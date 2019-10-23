let array = ['Enrique', 'José', 'Elías', 'Adriel', 1, true]

//BUSCAR Y RECUPERAR VALOR
array.find(function(buscado){
    return buscado == 'José';
});

//más simplificada
array.find(buscado => buscado == 'Jos')//Pregunta si se encuentra el valor Jos: undefined
array.find(buscado => buscado == 'Enrique')//Devuelve: Enrique

//RECUPERAR ÍNDICE DE VALOR
array.findIndex(buscado => buscado == 'Elías');

//-----------------

let precios = [20,40,22,33,45,67]
precios.some(precios => precios >= 20)//Compara todos los valores con una condición, si uno lo cumple devuelve true, si ninguno devuelve false

