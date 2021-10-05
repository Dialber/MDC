import { Injectable } from '@angular/core';
import { StarService } from './stars.service';

@Injectable({
  providedIn: 'root'
})
export class GraficService {
    single =[
    {
      "name": "Germany",
      "value": 40632
    },
    {
      "name": "United States",
      "value": 50000
    },
    {
      "name": "France",
      "value": 36745
    },
    {
      "name": "United Kingdom",
      "value": 36240
    },
    {
      "name": "Spain",
      "value": 33000
    },
    {
      "name": "Italy",
      "value": 35800
    }
  ];

  constructor(private starService:StarService) { 
    /* this.single=starService.GetAllFilms() */
  }


}
