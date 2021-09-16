import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmsListService {

  listMarvel:string[]=["Black Panther","Iron Man","Avengers:Endgame","Guardianes de la galaxia",
    "Capitan America:Civil War","Thor:Ragnarok","Spider-Man:Homecoming","Doctor Strange",
    "Capitan America:El soldado de invierno","Ant-Man y la Avispa"];


  listMarvelID:string[]=["tt1825683","tt1441105","tt4529214"];


  listDC:string[]=["Hombre de acero","Escuadron suicida","Liga de la justicia",
    "Batman vs Super Man:El amanecer de la justicia","Aves de presa",
    "Wonder Woman","Wonder Woman 1984","Aquaman","Shazam","El escuadron suicida"];



  listDC2:string[]=["Zack Snyder's Justice League","The Suicide Squad 2","Wonder Woman","Man of Steel",
    "Aquaman"];
    
  listMarvel2:string[]=["The Avengers","Avengers:Infinity war","Spider-Man home coming",
  "Avengers: Endgame","Black Panther"];

  /********************************lOS QUE ESTOY USANDO PARA HACER LA PETICION A OMDB*********************************/
  listDC_id:string[]=["tt12361974","tt6334354","tt0451279","tt0770828","tt1477834"];

  listMarvel_id:string[]=["tt0848228","tt4154756","tt2250912","tt4154796","tt1825683"];


  constructor() { }
}
