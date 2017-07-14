import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { myRoutes } from "./app.routes";
import { HomeComponent } from './service/home/home.component';
import { StudentComponent } from './service/student/student.component';
import { DbService } from './service/db.service';
import { ChildComponent } from './service/student/child/child.component';
import { GuardsGuard } from './service/guards.guard';
import { GuardComponent } from './service/guard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    ChildComponent,
    GuardComponent
  ],
  imports: [
    BrowserModule,myRoutes
  ],
  providers: [DbService,GuardsGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
