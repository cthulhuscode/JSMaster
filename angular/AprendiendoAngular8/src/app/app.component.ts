import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title: string;
  public hide: boolean;
  public conf: any;

  constructor(){
    this.conf = Configuracion;
    this.title = this.conf.titulo;
    this.hide = false;
  }
  
  hideComponent(flag: boolean):void{
    this.hide = flag;
  }
}
