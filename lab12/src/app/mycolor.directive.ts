import { Directive,ElementRef,Renderer,HostListener,Input,Output,
EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {
  @Output() changeColorEvt:EventEmitter<string>;
  currColor:string="";
  colorArray:string[]=["Red","Blue","Green","Yellow","Maroon"];
  constructor(private e:ElementRef,private r:Renderer) {
    this.changeColorEvt=new EventEmitter();
   }

@HostListener('click') changeColor(){
  this.currColor=this.colorArray[Math.floor(Math.random()*this.colorArray.length)];
  this.r.setElementStyle(this.e.nativeElement,"color",this.currColor);
  this.changeColorEvt.emit(this.currColor);
}
ngOnInit() {

}
 

}
