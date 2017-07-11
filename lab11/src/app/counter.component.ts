import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="decrement()">-</button>
    <span>{{counterValue}}</span>
    <button (click)="increment()">+</button>
  `,
  styles: [],
})
export class CounterComponent implements OnInit {
  @Input('ComponentCounterValue') counterValue:number=0;
  @Output() counterChange:EventEmitter<number>;
  constructor() { 
    this.counterChange=new EventEmitter();
  }
  increment(){
    this.counterValue+=1;
     this.counterChange.emit(this.counterValue);
  }
  decrement(){
    this.counterValue-=1;
    this.counterChange.emit(this.counterValue);
  }
  ngOnInit() {
     this.counterChange.emit(this.counterValue);
  }

}
