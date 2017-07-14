import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataDrivenComponent } from './data-driven/data-driven.component';
import { MyhttpServiceService } from './myhttp-service.service';
import { HttpModule} from '@angular/http'

@NgModule({
  declarations: [
    AppComponent,
    DataDrivenComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,HttpModule
  ],
  providers: [MyhttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
