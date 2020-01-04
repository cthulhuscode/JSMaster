import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'videojuego', //El nombre de la etiqueta o directiva del componente
    templateUrl: './videojuego.component.html'
    //En el template va el archivo o código HTML del elemento
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public subtitulo: string;

    constructor(){
        this.titulo = 'Componente de videojuegos';
        this.subtitulo = 'Listado de videojuegos';
        console.log('1. Ora raza, iniciando en Angular');
    }

    ngOnInit(){ //Se ejecuta al carga el componente
        console.log('2. OnInit ejecutado!');
    }

    ngDoCheck(){ //Se ejecuta cada vez que existe un cambio en el componente o aplicación de Angular general
        console.log('3. DoCheck ejecutado!');
    }

    ngOnDestroy(){ //Ejecuta algo antes de eliminar la instancia de un componente
        console.log('4. OnDestroy ejecutado!')
    }

    cambiarTitulo(titulo: string = 'Nuevo título del componente'){
        this.titulo = titulo;
    }
}