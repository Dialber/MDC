import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';
import { Film } from '../../interfaces/film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss','../../../../styles/_variables.scss']
})
export class FilmsComponent implements OnInit,OnDestroy {

  list:Film[]=[];
  
  constructor( private loginService: LoginService) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.loginService.Films().subscribe(data=>{
      this.list=data;
    })
  }

}
