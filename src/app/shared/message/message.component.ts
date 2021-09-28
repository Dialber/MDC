import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit,AfterViewChecked,OnDestroy{
   message:string="";
   show:boolean=false;

   private subscription:Subscription=new Subscription();

  constructor(private messageService:MessageService) { }
  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }
  ngAfterViewChecked(): void {
    
  }

  showMessage(data:number):void{
    console.log(data);
    
    if(data==0){
      this.message="No se pudo conectar al servidor.";
    }
    if(data==401){
      this.message="Usted no tiene permisos"
    }
    if(data>=500 && data<=599){
      this.message=`Error de serivor+ ${data}`;
    }
  
  }

  ngOnInit(): void {
    this.subscription=this.messageService.getSubject().subscribe(data=>{
      this.showMessage(data);
    });
  }

 
}
