import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './website/home/home.component';
import { LoginComponent } from './admin/login/login.component';
import { ListOfParticipantsComponent } from './admin/list-of-participants/list-of-participants.component';
import { MasterListComponent } from './admin/master-list/master-list.component';
import { ListCoachComponent } from './admin/list-coach/list-coach.component';
import { TrainingListComponent } from './admin/training-list/training-list.component';
import { InvestorListComponent } from './admin/investor-list/investor-list.component';
import { ListReferralComponent } from './admin/list-referral/list-referral.component';
import { AddMasterComponent } from './admin/add-master/add-master.component';
import { RegistrationComponent } from './website/registration/registration.component';
import { UserLoginComponent } from './website/user-login/user-login.component';
import {AddParticipantComponent} from './admin/add-participant/add-participant.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'participantList', component: ListOfParticipantsComponent},
  {path: 'masterList', component:  MasterListComponent},
  {path: 'coachList', component:  ListCoachComponent},
  {path: 'investorList', component:  InvestorListComponent},
  {path: 'referalList', component:  ListReferralComponent},
  {path: 'add-master', component:  AddMasterComponent},
  {path: 'registration', component:  RegistrationComponent},
  {path: 'userLogin', component:  UserLoginComponent},
  {path: 'trainings', component:  TrainingListComponent},
  {path: 'add-participant', component:  AddParticipantComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[HomeComponent, DashboardComponent,LoginComponent,ListOfParticipantsComponent, MasterListComponent,ListCoachComponent,ListReferralComponent,InvestorListComponent]
