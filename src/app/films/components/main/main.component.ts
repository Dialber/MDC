import { Component, OnInit } from '@angular/core';
import { FilmsListService } from '../../services/films-list.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor( private filmsListService:FilmsListService) { }

  listaDC:string[]=this.filmsListService.listDC_id;
  listaMA:string[]=this.filmsListService.listMarvel_id;

  ngOnInit(): void {
  }

}
