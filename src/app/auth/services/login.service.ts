import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../interfaces/login';
import { PathRest } from 'src/static/pathrest';
import { Film } from 'src/app/films/interfaces/film';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _http = PathRest.RESTLOGIN;
  private _films = PathRest.RESTfilms;

  constructor(private httpclient:HttpClient) { }

  public Login(login:Login):Observable<any>{
    return this.httpclient.post<any>(this._http,login);
  }
  public Films():Observable<Film[]>{
    return this.httpclient.get<Film[]>(this._films);
  }
}
