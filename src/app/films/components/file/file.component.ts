import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Film } from 'app/films/interfaces/film';
import {  StarService } from 'app/films/services/stars.service';
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

  @Input()element :any=<any>{};
  @ViewChild(StartsComponent) containerStars!:StartsComponent;

  Title:string="";
  Year:string="";
  Released:string="";
  Poster:string="";
  Runtime:string="";
  /*Las estrellas las recojo desde el método GetStars() ,vienen desde un eventEmiter*/
  starss:number[]=[];
  id:number=0;
  allStarst:number[]=[];
  

  constructor(private starService:StarService) { }
  

  ngOnInit(): void {    
  this.Title=this.element.Title;
  this.Year=this.element.Year;
  this.Released=this.element.Released;
  this.Poster=this.element.Poster;
  this.Runtime=this.element.Runtime;
  this.id=this.Addid(this.Title);
  }

  public SendStarsFilms():void{
    if(this.starss.length!=0){
      this.starService.GetById(this.id).subscribe((data)=>{
        this.allStarst=[...data.stars,...this.starss];
        this.starService.SendStar(this.id,this.Title,this.allStarst).subscribe();
      })
     
    }
  }
  public Addid(Title:string):number{
    let id:number=0;
    switch (Title) {
      case "Wonder Woman":
        id=1;
        break;
    
      case "Aquaman":
        id=2;
        break;
    
      case "Man of Steel":
        id=3;
        break;
    
      case "The Suicide Squad":
        id=4;
        break;
    
      case "Zack Snyder's Justice League":
        id=5;
        break;
    
      case "The Avengers":
        id=6;
        break;
    
      case "Avengers: Infinity War":
        id=7;
        break;
    
      case "Spider-Man: Homecoming":
        id=8;
        break;

      case "Avengers: Endgame":
        id=9;
        break;

      case "Black Panther":
        id=10
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


