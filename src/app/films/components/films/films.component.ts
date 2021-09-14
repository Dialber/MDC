import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';
import { Film } from '../../interfaces/film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss','../../../../styles/_variables.scss']
})
export class FilmsComponent implements OnInit,OnDestroy {

  list:any[]=[];

  listMarvel:string[]=["Black Panther","Iron Man","Avengers:Endgame","Guardianes de la galaxia",
                      "Capitan America:Civil War","Thor:Ragnarok","Spider-Man:Homecoming","Doctor Strange",
                      "Capitan America:El soldado de invierno","Ant-Man y la Avispa"];

  listDC:string[]=["Hombre de acero","Escuadron suicida","Liga de la justicia",
                  "Batman vs Super Man:El amanecer de la justicia","Aves de presa",
                  "Wonder Woman","Wonder Woman 1984","Aquaman","Shazam","El escuadron suicida"];
  
  constructor( private loginService: LoginService) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    /* this.loginService.Films().subscribe(data=>{
      this.list=data;
    }) */
   this.loginService.Get().subscribe(data=>{
     this.list=data;
   })
  }

}
