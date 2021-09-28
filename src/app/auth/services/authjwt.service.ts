import { Injectable } from '@angular/core';
import { LocalStorageJWT } from '../../../static/localStorage';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthjwtService {

  constructor() { }
  Loginn(token:any):void{
    /*let decode=jwtDecode<Jwt>(token); uso la libreria para decodificar el jwt y acceder a los valores que este trae*/
    localStorage.setItem(LocalStorageJWT.LS_ACCESS_TOKEN,JSON.stringify(token));
    /* localStorage.setItem(LocalStorageJWT.LS_ACCESS_email,JSON.stringify(decode.email)); */
  }
  IsLogued():boolean{
    console.log(localStorage.getItem(LocalStorageJWT.LS_ACCESS_TOKEN));
    
    if(localStorage.getItem(LocalStorageJWT.LS_ACCESS_TOKEN)==null){
      return false;
    }
    return true;
  }
 
}
