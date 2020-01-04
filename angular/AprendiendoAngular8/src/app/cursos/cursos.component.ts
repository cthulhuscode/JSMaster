import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor() { 
    console.log('Component cursos is working')
  }

  ngOnInit() {
  }

}
