"use strict";
/*Herencia: Mecanismo en el cual una clase hija hereda las
propiedades y métodos de una clase padre */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ropa = /** @class */ (function () {
    function Ropa(color, tipoPrenda, marca, talla, precio) {
        this.color = color;
        this.tipoPrenda = tipoPrenda;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Ropa.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    Ropa.prototype.getPrecio = function () {
        return this.precio;
    };
    return Ropa;
}());
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera(color, tipoPrenda, marca, talla, precio, capucha) {
        var _this = _super.call(this, color, tipoPrenda, marca, talla, precio) || this;
        _this.capucha = capucha;
        return _this;
    }
    Sudadera.prototype.setCapucha = function (val) { val ? this.capucha = true : this.capucha = false; };
    Sudadera.prototype.hasCapucha = function () { return this.capucha; };
    return Sudadera;
}(Ropa));
