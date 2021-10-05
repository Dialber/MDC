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

  @Input()element :any=<any>{};
  @ViewChild(StartsComponent) containerStars!:StartsComponent;

  Title:string="";
  Year:string="";
  Released:string="";
  Poster:string="";
  Runtime:string="";
  /*Las estrellas las recojo desde el método GetStars() ,vienen desde un eventEmiter*/
  starss:number[]=[];
  id:string="";
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

   async SendStarsFilms(){
    if(this.starss.length!=0){ 
        const result = await this.starService.GetById(this.id);
        this.allStarst=[...result,...this.starss];
        this.starService.SendStar(this.id,this.allStarst);
    }
  }
 /*  public SendStarsFilms():void{
    if(this.starss.length!=0){
      this.starService.GetById(this.id).subscribe((data)=>{
        this.allStarst=[...data.stars,...this.starss];
        this.starService.SendStar(this.id,this.Title,this.allStarst); 
      })
     
    }
  } */
  public Addid(Title:string):string{
    let id:string="";
    switch (Title) {
      case "Wonder Woman":
        id="t6rUgQMbEz";
        break;
    
      case "Aquaman":
        id="ChI7Roj4wE";
        break;
    
      case "Man of Steel":
        id="9gPA7UqBo3";
        break;
    
      case "The Suicide Squad":
        id="GYanGHBdjS";
        break;
    
      case "Zack Snyder's Justice League":
        id="OL72q8hTs0";
        break;
    
      case "The Avengers":
        id="HWfidnRvoV";
        break;
    
      case "Avengers: Infinity War":
        id="2Xdrc2SGnE";
        break;
    
      case "Spider-Man: Homecoming":
        id="6ovHdADhDV";
        break;

      case "Avengers: Endgame":
        id="cHo6BWofEh";
        break;

      case "Black Panther":
        id="6jJXBnlgmF"
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


