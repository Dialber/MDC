import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthjwtService } from '../auth/services/authjwt.service';

@Injectable({
  providedIn: 'root'
})
export class FilmsGuard implements CanActivate {

  constructor(private authjwtService:AuthjwtService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("************guard***********"+this.authjwtService.IsLogued());
      
    return this.authjwtService.IsLogued();
  }
  
}
