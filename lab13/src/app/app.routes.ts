import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './service/home/home.component';
import { StudentComponent } from './service/student/student.component';
import { ChildComponent } from './service/student/child/child.component';
import { GuardsGuard } from './service/guards.guard';
import { GuardComponent } from './service/guard.component';

const MY_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'students', component: StudentComponent,
    children: [{ path: 'profile/:id', component: ChildComponent, canActivate: [GuardsGuard] }]
  },
  { path: 'error', component: GuardComponent },
  { path: 'profile', redirectTo: 'error' },
  { path: '**', redirectTo: 'error' }

];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);