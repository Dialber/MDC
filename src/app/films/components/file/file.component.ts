import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../../interfaces/film';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {

/*   
  @Input()element :Film=<Film>{}; */

  @Input()element :any=<any>{};

  Title:string="";
  Year:string="";
  Released:string="";
 /*  "Title":"Black Panther","Year":"2018" */

  constructor() { }

  ngOnInit(): void {    
  this.Title=this.element.Title;
  this.Year=this.element.Year;
  this.Released=this.element.Released;

  }

}
