import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab12';
  data:any[]=["Daisy","Tiger","Rocky",1,2,"Tommy"];
  visibilityValue=true;
}
