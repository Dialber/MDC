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

  ngOnInit(): void { }


  /**************RELLENO LAS ESTRELLAS DE COLOR**************/
  Change(event:any):void{    
    const elementClick:ElementRef=event.target;

    for (let index = 0; index < this.elements.length; index++) {

      if( this.elements.get(index)!.nativeElement == elementClick && this.elements.get(index)!.nativeElement.classList.contains('bi-star-fill') && 
          index==this.elements.length-1){
        this.CleanStart();
        return;
      }
      if( this.elements.get(index)!.nativeElement == elementClick && this.elements.get(index)!.nativeElement.classList.contains('bi-star-fill') && 
          this.elements.get(index+1)!.nativeElement.classList.contains('bi-star')){
        this.CleanStart();
        return;
      }
    }

    this.CleanStart();
    this.ChangeSiblins(elementClick); 
  }



  /*****************START HOVER ***************/
  /************************Cambiando el color de las estrellas de la isquierda
  si hago hover en una(solo las que no esten rellenadas de amarillo)*************************/

  Hover(event:any):void{
    const elementClick:ElementRef=event.target;
    this.HoverSiblins(elementClick);
    
  }
  Leave(event:any):void{
    const elementLeave:ElementRef=event.target;
    this.LeaveSiblins(elementLeave);
    
  }

  LeaveSiblins(element:ElementRef){
    for (let index = 0; index < this.elements.length; index++) {
      if(this.elements.get(index)!.nativeElement.classList.contains('bi-star-fill')){
        continue;
      }
      if((this.elements.get(index)!.nativeElement !== element) && (this.elements.get(index)!.nativeElement.classList.contains('bi-star'))){
         this.render.removeStyle(this.elements.get(index)!.nativeElement,'color')
      }
      else{
        this.render.removeStyle(this.elements.get(index)!.nativeElement,'color')
        return;
      }
    }
  }
  HoverSiblins(element:ElementRef){
    var lista=this.elements;
    for (let index = 0; index < lista.length; index++) {

      if(lista.get(index)!.nativeElement.classList.contains('bi-star-fill') && lista.get(index)!.nativeElement === element){
        return;
      }
      if(lista.get(index)!.nativeElement.classList.contains('bi-star-fill')){
        continue;
      }
      if(lista.get(index)!.nativeElement !== element && 
          lista.get(index)!.nativeElement.classList.contains('bi-star'))          
      {
         this.render.setStyle(lista.get(index)!.nativeElement,'color','yellow')
      }
      else{
        this.render.setStyle(lista.get(index)!.nativeElement,'color','yellow')
        return;
      }
    }
  }
  /***END HOVER***/

  /******************lIMPIO TOTAS LAS ESTRELLAS RELLENADAS QUITANDO LA CLASE ('bi-star-fill') Y ADICIONADO ('bi-star')*/
  private CleanStart():void{
    for (let index = 0; index < this.elements.length; index++) {
     
      this.render.removeClass(this.elements.get(index)!.nativeElement,'bi-star-fill');
      this.render.removeStyle(this.elements.get(index)!.nativeElement,'color');
      this.render.addClass(this.elements.get(index)!.nativeElement,'bi-star');
    }
  }

  /*************RELLENO LAS ESTRELLAS QUITANDO LAS CLASES ('bi-star') Y ADICIONANDO ('bi-star')*/
  public Check(element:ElementRef){
    this.render.addClass(element.nativeElement,'bi-star-fill');
    this.render.removeClass(element.nativeElement,'bi-star');
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
