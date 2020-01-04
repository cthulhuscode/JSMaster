/*Interfaz: Indica los métodos obligatorios
que debe implementar o contener una clase,
aunque no es necesario que realicen la misma funcionalidad.
*Más que nada el nombre debe ser igual.
*/

interface Auto{
    go():void;
    lowFuel():void;
    stop():void;
}

//So this class, has to accomplish with all the methods in the before interface.

class Ranfla implements Auto{

    moving:boolean;

    constructor(){
        this.moving = false;
    }

    go(){
        if(!this.moving == true)
            return 'lets go!';
    }

    lowFuel(){

    }

    stop(){

    }
}
