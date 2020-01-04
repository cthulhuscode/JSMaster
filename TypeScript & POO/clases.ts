//Clase (molde del objeto)
class Camiseta{
    //Propiedades (características del objeto)
    public color: string;
    public modelo: string;
    public marca: string;
    public talla: string;
    private precio: number;
    //public - se puede acceder a las propiedades y métodos desde cualquier lugar y otras clases
    //protected - se puede acceder a todo de la clase o clases que lo hereden
    //private - sus atributos y métodos sólo son accesible desde la clase que los define

    //Constructor - primer método en ejecutarse, inicializa propiedades
    constructor(color: string, modelo: string, marca: string, talla: string, precio: number){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    //Métodos (funciones o acciones del objeto)
    public setPrecio(precio: number){
        this.precio = precio;
    }
    public getPrecio():number{
        return this.precio;
    }
}

let camiseta = new Camiseta('','','','',0);
camiseta.color = 'Rojo';
camiseta.modelo = 'Manga larga';
camiseta.marca = 'Adidas';
camiseta.talla = 'M';
camiseta.setPrecio(1200);
console.log(camiseta);

let playera = new Camiseta('','','','',0);
playera.color = 'Azul';
playera.modelo = 'Manga corta';
playera.marca = 'Adidas';
playera.talla = 'M';
playera.setPrecio(600);
console.log(playera);

