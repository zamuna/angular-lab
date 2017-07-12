import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-str-component',
  template: `
    <ul>
  <li *ngFor="let eachStr of data" appUpper [appMyvisibility]="visibilityVal" appMycolor (changeColorEvt)="changeMe($event)" > {{ eachStr }} </li>
</ul>
<h5>{{ currColor }}</h5>
  `,
  styles: []
})
export class StrComponentComponent implements OnInit {
  @Input('testdata') data:string[];
  @Input('currColor') colorVal:String;
  @Input() visibilityVal:boolean;
  currColor:string;

  changeMe(val){
    console.log(val);
    this.currColor=val;
  }
  ngOnInit() {

  }

}
