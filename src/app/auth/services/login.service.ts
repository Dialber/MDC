import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../interfaces/login';
import { PathRest } from 'src/pathrest/pathrest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _http = PathRest.RESTLOGIN;  

  constructor(private httpclient:HttpClient) { }

  public Login(login:Login):Observable<Login>{
    return this.httpclient.post<Login>(this._http,login);
  }
}
