import { Component, ElementRef, Renderer2, OnInit, ViewChildren, QueryList } from '@angular/core';


@Component({
  selector: 'app-starts',
  templateUrl: './starts.component.html',
  styleUrls: ['./starts.component.scss']
})
export class StartsComponent implements OnInit{

  @ViewChildren('start') elements!:QueryList<ElementRef>;

  lists:number[]=[1,2,3,4,5];
  
  constructor( private render:Renderer2) { }

  Change(event:any):void{    
    const elementClick:ElementRef=event.target;
    console.log(event);
    this.CleanStart();
    this.ChangeSiblins(elementClick); 
  }
 /*  Hover(event:any):void{
    const elementClick:ElementRef=event.target;
    this.HoverSiblins(elementClick);
    
  }

  HoverSiblins(element:ElementRef){
    for (let index = 0; index < this.elements.length; index++) {
      if((this.elements.get(index)?.nativeElement != element) && (this.elements.get(index)?.nativeElement.classList.contains('bi-star'))){
         this.render.setStyle(element,'color','yellow')
      }
      else{
        this.render.setStyle(element,'color','')
      }
    }
  } */

  private CleanStart():void{
    for (let index = 0; index < this.elements.length; index++) {
      this.render.setAttribute(this.elements.get(index)!.nativeElement,'checked','false');
      this.render.removeClass(this.elements.get(index)!.nativeElement,'bi-star-fill');
      this.render.addClass(this.elements.get(index)!.nativeElement,'bi-star');
    }
  }

  public Check(element:ElementRef){
    this.render.removeClass(element.nativeElement,'bi-star');
    this.render.addClass(element.nativeElement,'bi-star-fill');
  }
  ngOnInit(): void {
  }

  ChangeSiblins(param:ElementRef){
    for (let index = 0; index < this.elements.length; index++) {
      if(this.elements.get(index)?.nativeElement !=param){
         this.Check(this.elements.get(index)!)
      }
      else{
        this.Check(this.elements.get(index)!)
        return;
      }
    }
  }

}
