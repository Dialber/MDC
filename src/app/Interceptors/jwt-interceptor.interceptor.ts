import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LocalStorageJWT } from 'src/static/localStorage';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor(private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {    
    
    var token=localStorage.getItem(LocalStorageJWT.LS_ACCESS_TOKEN);
    if(token != null){
      const req=request.clone(
        {
        headers:request.headers.set('Authorization',`Bearer ${token}`)
        }
      );
      return next.handle(req).pipe(
        catchError(error=>this.ErrorHandler(error))
      );
    } 
    return next.handle(request).pipe(
      catchError(error=>this.ErrorHandler(error))
    );
    
  }
  ErrorHandler(error:HttpErrorResponse):Observable<never>{
    if(error instanceof HttpErrorResponse){
      if(error.error instanceof ErrorEvent){
       /*  alert("Error de cliente") */
      }
      else{
        if(error.status===401){
       /*    alert("no tiene permisos") */
        }
        else{
          /* alert("Error de servidor") */
        }
      }
    }
    else{
      alert("error desconocido")
    }
    return throwError(error)
  }
}
