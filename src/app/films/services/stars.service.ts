import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PathRest } from '@path/pathrest';
import { Observable } from 'rxjs';
import { Film } from '../interfaces/film';


@Injectable()
export class StarService {

  url:string=PathRest.SERVERLOCALFILMS;
  
  constructor(private httpClient:HttpClient) { }

  SendStar(id:number,nombre:string,stars:number[]):Observable<Film>{
    let starss:number[]=stars;
    return this.httpClient.put<Film>(this.url+`/${id}`,{"stars":starss,"nombre":`${nombre}`});
    
  }
  GetById(id:number):Observable<Film>{
    return this.httpClient.get<Film>(this.url+"/"+id)
  }
} 
