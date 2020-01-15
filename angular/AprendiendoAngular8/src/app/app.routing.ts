//En este archivo se establece toda la configuración de rutas de la página

//Importar módulos del router de Angular
//Son módulos internos de Angular que permiten trabajar con el router
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import { ZapatosComponent } from './zapatos/zapatos.component';
import { CursosComponent } from './cursos/cursos.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';


//Array de configuracion de las rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent}, //Definir la ruta y componente a cargar
    {path: 'zapatos', component: ZapatosComponent},
    {path: 'videojuego', component: VideojuegoComponent}, 
    {path: 'cursos', component: CursosComponent},
    
    //Los puntos permiten insertar parámetros a la ruta
    {path: 'cursos/:nombre', component: CursosComponent},
    {path: 'cursos/:nombre/:cantidad', component: CursosComponent},
    {path: 'externo', component: ExternoComponent},

    {path: 'contacto', component: ContactoComponent},

    //Ruta 404, se debe definir al final, para cuando no se encuentra el component buscado o página
    {path: '**', component: HomeComponent}
];

//Exportar el módulo del router
export const appRoutingProviders: any[] = []; //Exportar servicio de routing
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); //Se ingresa el arreglo de configuración de rutas