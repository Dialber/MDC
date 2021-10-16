import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Film } from 'app/films/interfaces/film';
import {  StarService } from 'app/films/services/stars.service';
import { from, Observable } from 'rxjs';
import { StartsComponent } from '../starts/starts.component';
@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
  providers:[StarService]
})
export class FileComponent implements OnInit {

/*   
  @Input()element :Film=<Film>{}; */

  @Input() element :any;
  @ViewChild(StartsComponent) containerStars!:StartsComponent;

  Title:string="";
  Year:string="";
  Released:string="";
  Poster:string="";
  Runtime:string="";
  /*Las estrellas las recojo desde el método GetStars() ,vienen desde un eventEmiter*/
  starss:number[];
  id:string="";
  allStarst:number[]=[];
  

  constructor(private starService:StarService) { 
   
    this.starss=[];
  }
  

  ngOnInit(): void {    
  this.Title=this.element.Title;
  this.Year=this.element.Year;
  this.Released=this.element.Released;
  this.Poster=this.element.Poster;
  this.Runtime=this.element.Runtime;
  this.id=this.Addid(this.Title);
  }

  public async SendStarsFilms(){  
    if(this.starss.length!=0){ 
      this.starService.SendStar(this.id,this.Title,this.starss);
    }
  }

  public Addid(Title:string):string{
    let id:string="";
    switch (Title) {
      case "Wonder Woman":
        id="AgyCfTWsWm";
        break;
    
      case "Aquaman":
        id="kiZT9vk2Ry";
        break;
    
      case "Man of Steel":
        id="MGWfkMnQ1B";
        break;
    
      case "The Suicide Squad":
        id="qPxZCLMgCj";
        break;
    
      case "Zack Snyder's Justice League":
        id="azkTxmvQFE";
        break;
    
      case "The Avengers":
        id="RVNJyEiwjl";
        break;
    
      case "Avengers: Infinity War":
        id="CY2vCTSBHD";
        break;
    
      case "Spider-Man: Homecoming":
        id="PfLaVm0D22";
        break;

      case "Avengers: Endgame":
        id="6OGeXHqXHC";
        break;

      case "Black Panther":
        id="6erXRzjCDs"
        break;
    
      default:
        break;
    }
    return id;
  }

  GetStars(event:any):void{
    if(event!=0 || event!=undefined){
      this.starss.push(event);
      
    }
  }

  

}


