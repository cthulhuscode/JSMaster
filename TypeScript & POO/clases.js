"use strict";
//Clase (molde del objeto)
var Camiseta = /** @class */ (function () {
    //public - se puede acceder a las propiedades y métodos desde cualquier lugar y otras clases
    //protected - se puede acceder a todo de la clase o clases que lo hereden
    //private - sus atributos y métodos sólo son accesible desde la clase que los define
    //Constructor - primer método en ejecutarse, inicializa propiedades
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    //Métodos (funciones o acciones del objeto)
    Camiseta.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    Camiseta.prototype.getPrecio = function () {
        return this.precio;
    };
    return Camiseta;
}());
var camiseta = new Camiseta('', '', '', '', 0);
camiseta.color = 'Rojo';
camiseta.modelo = 'Manga larga';
camiseta.marca = 'Adidas';
camiseta.talla = 'M';
camiseta.setPrecio(1200);
console.log(camiseta);
var playera = new Camiseta('', '', '', '', 0);
playera.color = 'Azul';
playera.modelo = 'Manga corta';
playera.marca = 'Adidas';
playera.talla = 'M';
playera.setPrecio(600);
console.log(playera);
