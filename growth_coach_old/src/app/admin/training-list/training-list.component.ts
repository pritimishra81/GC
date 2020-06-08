import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormBuilder} from '@angular/forms';
import { AdminserviceService } from '../service/adminservice.service';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { AuthenticationService } from  '../service/autheauthentication.service';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {

  constructor(private router: Router,
    private commonService : AdminserviceService,
    private http: HttpClient, 
    private AuthServiceService: AuthenticationService) { }

    result: string [];
    status:Array<any>;
    currentUser:string;
    allData: Array<any>;
  ngOnInit() {
    if(localStorage.getItem('token')) {
      let token=localStorage.getItem('token');
      let headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization": token });
      this.currentUser=localStorage.getItem('currentUser');
    
      //list of Participants

      this.http.get(this.commonService.ip + 'admin/getAllTrainings', {
        headers: headers
      })
      .subscribe(data => {
        this.result = data['allTraining'] as string [];
      });

    }
    else{
      alert("Token Not found Please Login Again");
      this.router.navigate(['']);
    }

    var data = [
      {"id":0,"name":'Initialize'},
      {"id":1,"name":'Pending'},
      {"id":2,"name":'Approve'},
      {"id":3,"name":'Reject'},
  ]
  console.log("sttus=======",data)
  this.status=data;
}

  onChangePage(allData: Array<any>) {
    // update current page of items
    this.allData = allData;
  }

}
