import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { MessageService } from 'app/shared/services/message.service';
import { SpinnerService } from 'app/shared/services/spinner.service';
import { PathRest } from '@path/pathrest';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor(private messageService:MessageService,private spinnerService:SpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {    

    this.spinnerService.setValue(true);
    return next.handle(request).pipe(
      catchError(error=>this.ErrorHandler(error)),
      finalize(()=>this.spinnerService.setValue(false))
    );
  }
  ErrorHandler(error:HttpErrorResponse):Observable<never>{
    if(error instanceof HttpErrorResponse){
      if(error.error instanceof ErrorEvent){
        alert("Error de cliente")
      }
      else{
        this.messageService.Message(error.status)
      }
    }
    else{
      alert("Error desconocido")
    }
    return throwError(error)
  }
}

