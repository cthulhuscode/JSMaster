//PARAMETROS REST Y SPREAD
//REST

function fruitList(f1, f2, ...restOfFruits){//El resto se convierte en un arreglo
    console.log(f1)    
    console.log(f2)    
    console.log(restOfFruits)
}

fruitList('Pera', 'Manzana', 'Limon', 'Sandia', 'Durazno')

//SPREAD
let fruits = ['Pera', 'Manzana', 'Limon', 'Sandia', 'Durazno']
fruitList(...fruits, 'Papayo', 'Platano')
//Los valores del arreglo se ingresan como si estuviesen uno por uno en los parámetros