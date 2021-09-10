import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
   message:string="";
   error:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  public Set(): void{
    this.error=true;
    setTimeout(() => {
      this.error=false;
    }, 3000);
    
  }

}
