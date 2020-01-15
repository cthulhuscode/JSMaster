import { Component, OnInit } from '@angular/core';
import { Zapato } from './../models/zapato';
import { ZapatoService } from '../services/zapato.service'

@Component({
    selector: 'zapatos',
    templateUrl: './zapatos.component.html',
    //Inyectar el ZapatoService como un servicio del componente
    providers: [ZapatoService] //En el array se cargan todos los servicios del componente
})
export class ZapatosComponent implements OnInit{
    public titulo: string;
    public zapatos: Array<Zapato>;
    public marcas: String[];
    public color: string;
    public comentario: string;
    public marca: string;
    
    constructor(
        private _zapatoService: ZapatoService //Los servicios llevan '_' al inicio
    ){
        this.color = 'orange';
        this.marcas = new Array();
        this.marca = '';
        this.comentario = 'Buenos zapatos';
        this.titulo = 'Componente de zapatos';

        //Está comentado ya que después fue importado desde ZapatoService
        /*
        this.zapatos = [
            new Zapato('Ultra Shadow', 'Adidas', 'Black', 1800, true),
            new Zapato('Nike Air', 'Nike', 'White', 4600, true),
            new Zapato('Boats', 'Timberland', 'Brown', 1689, true),
            new Zapato('Ultra Shadow', 'Adidas', 'White', 1189, false),
            new Zapato('Air Max 200', 'Nike', 'White', 1198, true)
        ];
        */
    }

    ngOnInit(){
        this.zapatos = this._zapatoService.getZapatos();
        console.log(this.zapatos);
        console.log(this._zapatoService.getPrueba());
        this.getMarcas();
    }

    getMarcas(){
        this.zapatos.forEach((value, index)=>{
            //Comprobar que no exista ese elemento en el arreglo
            if(this.marcas.indexOf(value.marca))
            this.marcas.push(value.marca);
            console.log(index);
        });
        console.log(this.marcas);
    }
    
    alertComentario(){
        alert(this.comentario);
    }

    addMarca(){
        this.marcas.push(this.marca);
    }

    deleteMarca(index){
        //delete this.marcas[index];
        this.marcas.splice(index, 1);
    }

    onBlur(){
        console.log('Has salido del input');
    }

    showMarca(){
        alert(this.marca);
    }
}