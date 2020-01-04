"use strict";
/*Interfaz: Indica los métodos obligatorios
que debe implementar o contener una clase,
aunque no es necesario que realicen la misma funcionalidad.
*Más que nada el nombre debe ser igual.
*/
//So this class, has to accomplish with all the methods in the before interface.
var Ranfla = /** @class */ (function () {
    function Ranfla() {
        this.moving = false;
    }
    Ranfla.prototype.go = function () {
        if (!this.moving == true)
            return 'lets go!';
    };
    Ranfla.prototype.lowFuel = function () {
    };
    Ranfla.prototype.stop = function () {
    };
    return Ranfla;
}());
