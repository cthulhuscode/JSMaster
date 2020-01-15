//Clase inyectable
import { Injectable } from '@angular/core';
import { Zapato } from '../models/zapato'

@Injectable()
export class ZapatoService{
    public zapatos: Array<Zapato>;

    constructor(){
        this.zapatos = [
            new Zapato('Ultra Shadow', 'Adidas', 'Black', 1800, true),
            new Zapato('Nike Air', 'Nike', 'White', 4600, true),
            new Zapato('Boats', 'Timberland', 'Brown', 1689, true),
            new Zapato('Ultra Shadow', 'Adidas', 'White', 1189, false),
            new Zapato('Air Max 200', 'Nike', 'White', 1198, true)
        ];
    }

    getPrueba(): string{
        return 'Hola mundo desde un servicio';
    }

    //Revolver los zapatos
    getZapatos(): Array<Zapato>{
        return this.zapatos;
    }
}