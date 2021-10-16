import { AfterContentInit, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {  single,multi } from 'app/films/interfaces/bar-char';
import { Film } from 'app/films/interfaces/film';
import { GraficService } from 'app/films/services/grafic.service';
import { StarService } from 'app/films/services/stars.service';


@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss'],
  providers:[StarService]
})
export class BarchartComponent implements OnInit,OnChanges,DoCheck{

  single: any[]=[];
  multi: any[]=[];

  /* view: [number,number] = [700,400]; */

  // options
  
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  below='below';
  showXAxisLabel = true;
  xAxisLabel = 'Filmes';
  showYAxisLabel = true;
  yAxisLabel = 'Estrellas';

  colorScheme:any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  
  @Input()modificGrafic:boolean;
  constructor( private starService:StarService,private graficService:GraficService) {
    this.modificGrafic=false;
  }
  ngDoCheck(): void {
   
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.graficService.getSubject().subscribe(data=>{
      if(data==true){
        this.fillGrafic();
      }
    }
    )
  }
  
  ngOnInit(): void {
     this.fillGrafic();
  }

  async fillGrafic () {
    try {
      const data= await this.starService.GetNamesAndAllAddStars();
      this.single=data;
    } catch (error) {
      alert(`Error al llenar la gráfica+ ${error}`)
    }
   
  }
  onSelect(event:any) {
    console.log(event);
  }
}
