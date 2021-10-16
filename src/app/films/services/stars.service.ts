import { Injectable, Query } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PathRest } from '@path/pathrest';

import * as Parse from 'parse';
import { GraficService } from './grafic.service';

@Injectable()
export class StarService {

  url:string=PathRest.SERVERLOCALFILMS;
 
  
  constructor(private httpClient:HttpClient,private graficService:GraficService) { 
    Parse.initialize(PathRest.IDBACK4APP,PathRest.KEYBACK4APP); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
    (Parse as any).serverURL = PathRest.SERVERBACK4APP; 
  }

  /*Enviar las estrellas de un filme dado un nombre */
  async SendStar(id:string,title:string,stars:number[]){

    var all:number[] = await this.GetByName(title);    
    all=[...all,...stars];

    const Films = new Parse.Object("Films");
    Films.set('objectId',id );
    Films.set("stars",all );
   
   try{    
        let result = await Films.save();
        this.graficService.changeGrafic(true);
    }
    catch(error)
    {
        alert('Problemas al enviar las estrellas' );
    }

  } 


  /**Devuelve un arreglo con todas las estrellas dado un id */
  public async GetByName(title:string){
          var allStars=[];
          let film = null;
        // Create Parse Query and get object by state_name
        const filmObject = new Parse.Query("Films");
        filmObject.equalTo("title", title);
        try {
          film = await filmObject.first();
          allStars= await film!.get("stars");
          return allStars;
        } catch (error) {
          console.log(`Failed to query object:`);
          return allStars;
        }
   }
 
  

  /**Devuelve un arreglo de objetos con 
   los nombres y la suma de las estrellas de cada filme 
   para mostrar en la gráfica*/
  async GetNamesAndAllAddStars(){
    var list:any[]=[];
    var all:any[]=[];

    var films= new Parse.Query("Films");
     
      all=await films.findAll();
      all.forEach(element => {
        if(element.get("title") != undefined){
          let name="";
          let sumStar:number[];
          sumStar= element.get("stars");
          name= element.get("title");
    
          let cant=0;
          sumStar.forEach(item => {
            cant+=item;
          });
          let film:any={
            name:name,
            value:cant
          }      
          list.push(film);       
        }
    })
     return list;
  }
          
} 
