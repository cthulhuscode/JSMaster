"use strict";
/*Decorador: Funcionalidades extras que se agregan
a las clases. En este caso se agrega un método a la clase.
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Decorador
function cliente(val) {
    return function (target) {
        target.prototype.garantia = function () {
            return ('Garantía de 1 año. ' + val);
        };
    };
}
//Agregar el decorador a la clase
var Device = /** @class */ (function () {
    function Device(deviceType, price, description) {
        this.deviceType = deviceType;
        this.price = price;
        this.description = description;
    }
    Device = __decorate([
        cliente('Enjoy!')
    ], Device);
    return Device;
}());
var cel = new Device('TV', 4500, 'Form entertainment');
