import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//Obtener los 2 módulos para el routing
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component'; //Importar la clase o componente
import { ZapatosComponent } from './zapatos/zapatos.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';

import {CalculadoraPipe } from './pipes/calculadora.pipe';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [ //Lugar donde se declaran los componentes para llamarlo desde cualquier parte de la aplicación
    AppComponent,
    VideojuegoComponent,
    ZapatosComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    CalculadoraPipe,
    ContactoComponent
  ],
  imports: [ //Permite cargar módulos externos o internos
    BrowserModule,
    FormsModule, 
    routing, //Se carga ahí ya que es un módulo
    HttpClientModule
  ],
  providers: [appRoutingProviders], //Se carga el routing ahí ya que es un servicio
  bootstrap: [AppComponent]
})
export class AppModule { }
