import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/auth/services/login.service';
import { FilmsList } from '../../class/films-list';
import { FilmsListService } from '../../services/films-list.service';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss','../../../../styles/_variables.scss']
})
export class FilmsComponent implements OnInit,OnDestroy {

  list:any[]=[];

  @Input()listaF!:string[];

  film:any={
    Title:"The Avengers",
    Year:"1985",
    Runtime:"242min",
    Poster:"../../../../assets/Greyhound.jpg"
  }
  constructor( private loginService: LoginService) { }

  ngOnInit(): void {
    this.listaF.forEach(element => {
      this.loginService.Get(element).subscribe(data=>{
        this.list.push(data);
      })
    });
    if(this.list.length==0){
      for (let index = 0; index < 5; index++) {
      this.list.push(this.film);
      }
    }
  }
  ngOnDestroy(): void {
   
  }


}
