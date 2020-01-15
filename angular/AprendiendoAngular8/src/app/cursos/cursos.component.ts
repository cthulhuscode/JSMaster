import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public nombre: string;
  public cantidad: number;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    console.log('Component cursos is working')
  }

  ngOnInit() {
    //recoger los parámetros de la ruta
    this._route.params.subscribe((params: Params)=>{
      //this.nombre = params['nombre']; Es lo mismo
      this.nombre = params.nombre;

      //Con el + se convierte la cadena en número
      this.cantidad = +params.cantidad;
    });
  }

  redirigir(){
    this._router.navigate(['/zapatos']);
  }

}
