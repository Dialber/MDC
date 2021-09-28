import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
/* import { Login } from '../interfaces/login'; */
import { Login } from '../interfaces/login';
import { PathRest } from '../../../static/pathrest';
import { Film } from '../../films/interfaces/film';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _films = PathRest.API_OMDB; 
  private _apikey:string="&apikey=48c954a3";

  constructor(private httpclient:HttpClient) { }

  public Get(id:string):Observable<any>{
    return this.httpclient.get<any>(this._films+id+this._apikey);
  }
}
