import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { PathRest } from '@path/pathrest';
import { StopVoteService } from 'app/films/services/stop-vote.service';
import { LoaderComponent } from 'app/shared/loader/loader.component';
import { MessageService } from 'app/shared/services/message.service';
import { SpinnerService } from 'app/shared/services/spinner.service';
import { Subscription } from 'rxjs';
import { FilmsListService } from '../../services/films-list.service';
import { BarchartComponent } from '../barchart/barchart.component';
import { FilmsComponent } from '../films/films.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit,OnDestroy,AfterViewChecked {

  /*utiliso la variable (voted),cuando la persona ya votó ,cambio su valor a (true) y notifco al 
  hijo para volver a llenar la grafica en el ngOnchanges,tambien uso esta variable(voted)  para desabilitar 
  el votón de votar */
  voted:boolean=false;
  showAlert:boolean=false;
  showSpinner!:boolean;
  private subscription!:Subscription;
  private subscriptionError!:Subscription;
  error:boolean=false;
  h1:string="¿Cuál prefieres tú?";

  /*componentes hijos (son dos componentes---uno con la lista de los filmes de la marvel y 
    otro de DC comics )*/
  @ViewChildren(FilmsComponent) childs!:QueryList<FilmsComponent>;
  @ViewChild(BarchartComponent) grafic!: BarchartComponent;
  message:string="Usted ha votado";

  constructor( private filmsListService:FilmsListService,private stopVoteService:StopVoteService,private spinnerService:SpinnerService,private chanceDetector:ChangeDetectorRef,private messageService:MessageService) 
  { 
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
        setTimeout(() => {
          this.error=false;
        }, 3000);
      }
        
    })
  }
  
  /**Adicionar voto */
  public AddVote(){
    for (let index = 0; index < this.childs.length; index++) {
      this.childs.get(index)?.SendStarsAllChilds();
    }
    this.voted=true;
    this.stopVoteService.ChanceState(true);    
    this.ShowAlert();        
 
  
  }
  /**Notificación de voto */
  ShowAlert():void{
    this.showAlert=true;
      setTimeout(() => {
        this.showAlert=false;
      }, 3000);
  }
}
