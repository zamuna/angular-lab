import { Directive, ElementRef, Renderer, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective implements AfterViewInit {
  @Input('appMyvisibility') appMyvisibility: boolean;
  // isValid:boolean;
  constructor(private e: ElementRef, private r: Renderer) {
  }

  ngAfterViewInit(): void {
    console.log(this.appMyvisibility);
    this.r.setElementStyle(this.e.nativeElement, "visibility", (this.appMyvisibility) ? "visible" : "hidden");
  }

}
