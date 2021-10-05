import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PathRest } from '@path/pathrest';

import * as Parse from 'parse';
import { Film } from '../interfaces/film';


@Injectable()
export class StarService {

  url:string=PathRest.SERVERLOCALFILMS;
  list:Film []=[];
  
  constructor(private httpClient:HttpClient) { 
    Parse.initialize(PathRest.IDBACK4APP,PathRest.KEYBACK4APP); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
    (Parse as any).serverURL = PathRest.SERVERBACK4APP; 
  }
  async SendStar(id:string,stars:number[]){

    /**Busco el filme que tenga el id del parámetro */
    const FilmQuery= new Parse.Query("Films");
    FilmQuery.equalTo("objectId",id);

    const resFilm=await FilmQuery.first();
    
    /**Busco en la tabla estrellas la que tenga el id-films del del filme */
    const StarsQuery= new Parse.Query("Stars");
    StarsQuery.equalTo("id_films",resFilm);
    const res=await StarsQuery.first();
    res?.set("stars",stars);
    try {
      const result= await res!.save();
      alert('New object created with objectId: ');
      } catch(error) {
          alert("'Failed to create new object, with error code: '");
      }
  } 


  async GetById(id:string){

          const FilmQuery= new Parse.Query("Films");
          FilmQuery.equalTo("objectId",id);
          const resFilm=await FilmQuery.first();
          
          const StarsQuery= new Parse.Query("Stars");
          StarsQuery.equalTo("id_films",resFilm);
          const res=await StarsQuery.first();

          return res?.get("stars");
  } 
  async GetAllFilms(){

    const FilmQuery= new Parse.Query("Films");
      try {      
        FilmQuery.each(async element => {
          let suma=0;
          var film:Film;
          try {
              film!.Title=await element.get("Title");
              film!.stars=await element.get("stars");
              this.list.push(film!);
          } catch (error) {
            alert("'Error al obtner datos para la gráfica'");
          }
        })
      } catch (error) {
        alert("'Error al obtner datos para la gráfica'");
      }
      return this.list;
  }
          
} 
