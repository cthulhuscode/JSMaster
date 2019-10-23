//JSON: Javascript Object Notation

window.addEventListener('load', ()=>{
    //Objeto JSON
    let pelicula = {
        title: 'Batman',
        year: 2000, 
        country: 'EEUU'
    };
    
    pelicula.title = 'Superman' //Cambiar propiedad
    
    //Array de objetos JSON
    movies = [
        {title: 'Fight Club', year: 2000, country: 'EEUU'},
        pelicula //Es el objeto anterior,
        //[title= 'Fight Club', year= 2000, country= 'EEUU'],
    ];
    
    console.log(pelicula)
    console.log(movies)

    var divMovies = document.querySelector('#movies')

    //Recorrer objeto
    for(let i in movies){
        let p = document.createElement('p')
        p.append(movies[i].title + ' - ' + movies[i].year)
        divMovies.append(p)
    }
});

//See uses of JSON.stringify and JSON.parse() on LocalStorage.js

