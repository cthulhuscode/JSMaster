/*Herencia: Mecanismo en el cual una clase hija hereda las 
propiedades y métodos de una clase padre */

class Ropa{
    public color: string;
    public tipoPrenda: string;
    public marca: string;
    public talla: string;
    private precio: number;
    
    constructor(color: string, tipoPrenda: string, marca: string, talla: string, precio: number){
        this.color = color;
        this.tipoPrenda = tipoPrenda;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setPrecio(precio: number){
        this.precio = precio;
    }
    public getPrecio():number{
        return this.precio;
    }
}

class Sudadera extends Ropa{
    private capucha: boolean;
    constructor(color: string, tipoPrenda: string, marca: string, talla: string, precio: number, capucha: boolean){
        super(color, tipoPrenda, marca, talla, precio);
        this.capucha = capucha;
    }

    setCapucha(val:boolean):void{val?this.capucha = true : this.capucha = false}

    hasCapucha():boolean{return this.capucha}
}