import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormBuilder} from '@angular/forms';
import { AdminserviceService } from '../service/adminservice.service';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { AuthenticationService } from  '../service/autheauthentication.service';

@Component({
  selector: 'app-list-of-participants',
  templateUrl: './list-of-participants.component.html',
  styleUrls: ['./list-of-participants.component.css']
})
export class ListOfParticipantsComponent implements OnInit {

  constructor(private router: Router,
    private commonService : AdminserviceService,
    private http: HttpClient, 
    private AuthServiceService: AuthenticationService) { }

    result: string [];
    currentUser:string;
    allData: Array<any>;
    searchText:any[];
  ngOnInit() {
    if(localStorage.getItem('token')) {
      let token=localStorage.getItem('token');
      let headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization": token });
      this.currentUser=localStorage.getItem('currentUser');
    
      //list of Participants

      this.http.get(this.commonService.ip + 'admin/participants', {
        headers: headers
      })
      .subscribe(data => {
        this.result = data['participants'] as string [];
      });

    }
    else{
      alert("Token Not found Please Login Again");
      this.router.navigate(['']);
    }
  }

  onChangePage(allData: Array<any>) {
    // update current page of items
    this.allData = allData;
  }

}
