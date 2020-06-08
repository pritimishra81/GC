import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './website/home/home.component';
import { LoginComponent } from './admin/login/login.component';
import { ListOfParticipantsComponent } from './admin/list-of-participants/list-of-participants.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'listofParticipants', component: ListOfParticipantsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[HomeComponent,DashboardComponent,LoginComponent,ListOfParticipantsComponent]
