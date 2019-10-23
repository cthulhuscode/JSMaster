let movies = ['Trainspotting','Fight Club','Treasure Planet']
movies.push('Interestellar') //Ingresa un elemento hasta atrás del último elemento
movies.push('xd')
movies.pop()//quita el último elemento
movies[0] = undefined

//Obtener número de index x pelicula
let index = movies.indexOf('Trainspotting')// devuelve 0
movies.splice(index,1)//elimina Trainspotting

//CONVERTIR ARRAY -> STRING
movies = ['Trainspotting','Fight Club','Treasure Planet']
console.log(movies.join())

//CONVERTIR STRING -> ARRAY
let text = 'Transformers, Dark, Breaking Bad, Melancholia'
let cadena_array = text.split(', ')
console.log(cadena_array)

//ORDENAR ARRAY
console.log(movies)
console.log(movies.reverse()) //orden alrevés de los elementos
console.log(movies.sort()) //orden alfabético

