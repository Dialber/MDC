import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../../interfaces/film';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {

  
  @Input()element :Film=<Film>{};

  nombre:string="";
  director:string="";
  clasif:string="";

  constructor() { }

  ngOnInit(): void {    
  this.nombre=this.element.nombre;
  this.director=this.element.director;
  this.clasif=this.element.clasificacion;

  }

}
