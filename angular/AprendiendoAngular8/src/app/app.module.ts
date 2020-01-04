import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component'; //Importar la clase o componente
import { ZapatosComponent } from './zapatos/zapatos.component';
import { CursosComponent } from './cursos/cursos.component';

@NgModule({
  declarations: [ //Lugar donde se declaran los componentes para llamarlo desde cualquier parte de la aplicación
    AppComponent,
    VideojuegoComponent,
    ZapatosComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
