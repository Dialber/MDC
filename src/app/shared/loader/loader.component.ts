import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor() { }
 
 
  ngOnInit(): void {
   /*  this.subscripcion=this.spinnerService.getSubject().subscribe(data=>{
      this.showSpinner=data;
     }); */
  }



}
