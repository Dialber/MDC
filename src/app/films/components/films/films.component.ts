
import { AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, QueryList, Renderer2, SimpleChanges, ViewChildren } from '@angular/core';
import { FileComponent } from '../file/file.component';
import { LoginService } from '../../../../app/auth/services/login.service';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss','../../../../styles/_variables.scss']
})
export class FilmsComponent implements OnInit,OnDestroy,AfterViewChecked,DoCheck{

  listFilmsResponseToShow:any[]=[];

  @Input() listUrlImagenesLocal!:string[];

  @Input()lista_idToRequest!:string[];

  @ViewChildren('film') imgToChangeUrlNewImage!:QueryList<ElementRef>;  
  @ViewChildren(FileComponent) filmsChilds!:QueryList<FileComponent>;  
  

  
  private film:any={
    Title:"Wonder Woman",
    Year:"1985",
    Runtime:"242min",
    Poster:"../../../../assets/Greyhound.jpg"
  }


  constructor( private loginService: LoginService,private render:Renderer2) { }
  ngDoCheck(): void {
   
  }
  ngAfterViewChecked(): void {
    /* 
     if(this.listFilmsResponseToShow.length==0){
      for (let index = 0; index < 5; index++) {
        this.listFilmsResponseToShow.push(this.film);
      }
    }  */
    
    if(this.listFilmsResponseToShow.length!=0){
      this.AddFigure();
    }
  }

  AddFigure():void{
    if(this.listFilmsResponseToShow.length==5 && this.imgToChangeUrlNewImage.length==5){
      for (let i= 0; i < this.listFilmsResponseToShow.length; i++) {
        for (let index = 0; index <  this.ListNamesFilmGetsByURL().length; index++) {
          if(this.listFilmsResponseToShow[i].Title.toUpperCase().includes(this.ListNamesFilmGetsByURL()[index])){        
            this.render.setAttribute(this.imgToChangeUrlNewImage.get(i)!.nativeElement,'src',this.listUrlImagenesLocal[index])           
            
          }        
        }
       
      }
    }
  }
  ListNamesFilmGetsByURL():string[]{
    let list:string[]=[];
    var result:string[]=[];

    for (let index = 0; index < this.listUrlImagenesLocal.length; index++) {
      list=this.listUrlImagenesLocal[index].split('/');
      let element: string=list[list.length-1].split('.')[0];
      result.push(element.toUpperCase());
    }
    return result;
  }

  /*Verifico si algun elemento de la lista contiene la subcadena y devuelvo el elemento de la lista*/
  findElement(element:string,listFull:string[]){
    for (let index = 0; index < listFull.length; index++) {
      if(listFull[index].toUpperCase().includes(element.toUpperCase())){
        return listFull[index];
      }
    }
    return"";
  }

  ngOnInit(): void {
    this.lista_idToRequest.forEach(element => {
      this.loginService.Get(element).subscribe(data=>{
        this.listFilmsResponseToShow.push(data);        
      })
    });
  }
  SendStarsAllChilds():void{
    this.filmsChilds.forEach(element => {
     element.SendStarsFilms();
   });
  }
  ngOnDestroy(): void {
   
  }



}
