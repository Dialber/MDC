import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private subject=new BehaviorSubject(1);

  constructor() { }
  public Message(value:number):void{
    this.subject.next(value);
  }
  getSubject():Observable<number>{
    return this.subject.asObservable();
  }

}
