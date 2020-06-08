import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormBuilder} from '@angular/forms';
import { AdminserviceService } from '../service/adminservice.service';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { AuthenticationService } from  '../service/autheauthentication.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router,
    private commonService : AdminserviceService,
    private http: HttpClient, 
    private AuthServiceService: AuthenticationService) { }
    result: string [];
    countTraining:string;
    countParticipant:number;
    countMaster:number;
    countOperational:number;
    countReferal:number;
    countInvestor:number;
    currentUser:string;
    
  ngOnInit() {
    
    if(localStorage.getItem('token')) {
      let token=localStorage.getItem('token');
      let headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization": token });
      this.currentUser=localStorage.getItem('currentUser');
      this.countTraining=localStorage.getItem('trainings');
      //Count Masters

      this.http.get(this.commonService.ip + 'admin/masters', {
        headers: headers
      })
      .subscribe(data => {
        this.result = data['masters'] as string [];
        this.countMaster=this.result.length;
        });

      //Count Operationals

      this.http.get(this.commonService.ip + 'admin/operationals', {
        headers: headers
      })
      .subscribe(data => {
        this.result = data['coaches'] as string [];
        this.countOperational=this.result.length;
        });
      
       //Count Referals

       this.http.get(this.commonService.ip + 'admin/referals', {
        headers: headers
      })
      .subscribe(data => {
        this.result = data['referals'] as string [];
        this.countReferal=this.result.length;
        });

       //Count Investment

       this.http.get(this.commonService.ip + 'admin/investments', {
        headers: headers
      })
      .subscribe(data => {
        this.result = data['investors'] as string [];
        this.countInvestor=this.result.length;
        });


       //Count Participants

       this.http.get(this.commonService.ip + 'admin/participants', {
        headers: headers
      })
      .subscribe(data => {
        this.result = data['participants'] as string [];
        this.countParticipant=this.result.length;
        });

    }
    else{
      alert("Token Not found Please Login Again");
      this.router.navigate(['']);
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

}
