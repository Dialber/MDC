import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { PathRest } from '@path/pathrest';
import { StopVoteService } from 'app/films/services/stop-vote.service';
import { LoaderComponent } from 'app/shared/loader/loader.component';
import { MessageService } from 'app/shared/services/message.service';
import { SpinnerService } from 'app/shared/services/spinner.service';
import { Subscription } from 'rxjs';
import { FilmsListService } from '../../services/films-list.service';
import { FilmsComponent } from '../films/films.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit,OnDestroy,AfterViewChecked {

  voted:boolean=false;
  showAlert:boolean=false;
  showSpinner!:boolean;
  private subscription!:Subscription;
  private subscriptionError!:Subscription;
  error:boolean=false;
  hideBotoomAddVote:boolean=false;
  h1:string="¿Cuál prefieres tú?";

  @ViewChildren(FilmsComponent) childs!:QueryList<FilmsComponent>;

  
  message:string="Usted ha votado";

  constructor( private filmsListService:FilmsListService,private stopVoteService:StopVoteService,private spinnerService:SpinnerService,private chanceDetector:ChangeDetectorRef,private messageService:MessageService) 
  { 
 /*    this.showSpinner=false; */
     
  }
  ngAfterViewChecked(): void {
   this.chanceDetector.detectChanges();
    
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscriptionError.unsubscribe();
  }

  
  
    
  /*back*/

  listaDC_id:string[]=this.filmsListService.listDC_id;
  listaMA_id:string[]=this.filmsListService.listMarvel_id;

  listUrlImagenesLocal_DC:string[]=this.filmsListService.listUrlLocalImagesDC_films;
  listUrlImagenesLocal_MA:string[]=this.filmsListService.listUrlLocalImagesMarvel_films;

  ngOnInit(): void {
    this.subscription= this.spinnerService.getSubject().subscribe(data=>{
      this.showSpinner=data;
    })
    this.subscriptionError= this.messageService.getSubject().subscribe(data=>{
      if(data!=1){
        this.error=true;
        this.hideBotoomAddVote=true;
        setTimeout(() => {
          this.error=false;
        }, 3000);
      }
        
    })
  }
  
  AddVote(){
    this.childs.forEach(element => {
      element.SendStarsAllChilds();
    });
    this.voted=true;
    this.stopVoteService.ChanceState(true);    
    this.ShowAlert();
  }
  ShowAlert():void{
    this.showAlert=true;
      setTimeout(() => {
        this.showAlert=false;
      }, 3000);
  }
}
