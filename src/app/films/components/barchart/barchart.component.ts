import { Component, OnInit } from '@angular/core';
import {  single,multi } from 'app/films/interfaces/bar-char';
import { Film } from 'app/films/interfaces/film';
import { StarService } from 'app/films/services/stars.service';


@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {

  single: any[]=[];
  multi: any[]=[];

  view: [number,number] = [700,400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme:any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private starService:StarService) {
    
  }
  ngOnInit(): void {
   /*  this.single=this.starService.GetAllFilms(); */
   this.single=single;
  
  }

  onSelect(event:any) {
    console.log(event);
  }
}
