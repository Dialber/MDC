import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private subject=new BehaviorSubject(false);

  constructor() { }

  setValue(value:boolean):void{
    this.subject.next(value);
  }

  getSubject():Observable<boolean>{
    return this.subject.asObservable();
  }
}
