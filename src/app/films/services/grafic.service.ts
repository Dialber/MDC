import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StarService } from './stars.service';

@Injectable({
  providedIn: 'root'
})
export class GraficService {
   
  mysubject=new BehaviorSubject<boolean>(false);

  constructor() { 
    
  }
  getSubject():Observable<boolean>{
    return this.mysubject.asObservable();
  }

  changeGrafic(change:boolean){
    this.mysubject.next(change);
  }


}
