import { Injectable} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StopVoteService {

  /*Utilizo este services para gestionar si el user ya realizó la votacion*/
  subject = new BehaviorSubject<boolean>(false); 

  constructor() { }

  getSubject():Observable<boolean>{
    return this.subject.asObservable();
  }
  ChanceState(state:boolean){
    this.subject.next(state);
  }
 
}
