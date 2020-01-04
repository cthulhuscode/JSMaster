/*Decorador: Funcionalidades extras que se agregan
a las clases. En este caso se agrega un método a la clase.
*/

//Decorador
function cliente(val: string){
    return function(target: Function){
        target.prototype.garantia = function():string{
            return ('Garantía de 1 año. ' + val);
        }
    }
}

//Agregar el decorador a la clase, no usar ';'
@cliente('Enjoy!')
class Device{
    deviceType: string;
    price: number;
    description: string;

    constructor(deviceType: string, price: number, description: string){
        this.deviceType = deviceType;
        this.price = price;
        this.description = description;
    }
}

let cel = new Device('TV', 4500, 'Form entertainment');
