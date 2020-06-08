import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './website/header/header.component';
import { FooterComponent } from './website/footer/footer.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {
  MatInputModule,
  MatPaginatorModule,
 MatProgressSpinnerModule,
  MatSortModule,
 MatTableModule,
  MatIconModule,
  MatButtonModule,
 MatCardModule,
 MatDatepickerModule,
 MatNativeDateModule,
 MatFormFieldModule,MatSelectModule,MatRadioModule
} from '@angular/material';  
import { FilterPipe } from './filter.pipe';

import { AddMasterComponent } from './admin/add-master/add-master.component';
import { RegistrationComponent } from './website/registration/registration.component';
import { UserLoginComponent } from './website/user-login/user-login.component';
import { TrainingListComponent } from './admin/training-list/training-list.component';
import { AddParticipantComponent } from './admin/add-participant/add-participant.component';





@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FilterPipe,
    AddMasterComponent,
    RegistrationComponent,
    UserLoginComponent,
    JwPaginationComponent,
    TrainingListComponent,
    AddParticipantComponent,
   
  
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatRadioModule
  ]
  ,

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
