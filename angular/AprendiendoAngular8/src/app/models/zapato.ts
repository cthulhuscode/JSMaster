//Un modelo contiene características de una clase, es en singular ya que funciona como molde para una clase.

export class Zapato{
    /*
    public nombre: string;
    public precio: number;
    public marca: string;
    public color: string;
    public stock: boolean;

    constructor(nombre, marca, color, precio, stock){
        this.nombre = nombre;
        this.marca = marca;
        this.color = color;
        this.precio = precio;
        this.stock = stock;
    }
    */

    //Las propiedades pueden ser declaradas desde los parámetros del constructor, lo que permite ahorrar código.
    constructor(
        public nombre: string,
        public marca: string,
        public color: string,
        public precio: number,
        public stock: boolean
    ){}
}