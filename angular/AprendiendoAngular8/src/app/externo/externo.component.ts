import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'], 
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;
  //para el servicio rest - POST
  public userPost: any;
  //para la imagen
  public userId: any;
  //para el usuario devuelto - POST
  public userResponse: any;
  public fecha: any;

  constructor(
    private _peticionesService: PeticionesService
  ){ 
    this.userId = 1;
    this.userPost = {
      name: "",
      job: ""
    }
  }

  ngOnInit() {
    this.fecha = new Date();
    this.cargaUsuario();
  }

  cargaUsuario(){
    this.user = false;
    this._peticionesService.getUser(this.userId).subscribe(
      result => {
        this.user = result.data;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onSubmit(form){
    this._peticionesService.addUser(this.userPost).subscribe(
      response => {
        console.log(response);
        this.userResponse = response;
        form.reset();
      },
      error => {
        console.log(<any>error)
      }
    );
  }
}
