import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormBuilder} from '@angular/forms';
import { AdminserviceService } from '../service/adminservice.service';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { AuthenticationService } from  '../service/autheauthentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    /* Variable initailization */
    loginForm: FormGroup;
    submitted = false;
    error = '';

  constructor(private router: Router,
    private commonService : AdminserviceService,
    private http: HttpClient, 
    private AuthServiceService: AuthenticationService) { }

  ngOnInit() {
  }

   //Login of Admin
   body = {
    "email": "",
    "password": ""
  }
  token:string;
  errMsg='';

  login(){
    if(this.body.email == '' || this.body.password == '') {
      if (!this.commonService.validateEmail(this.body.email)) {
        alert("Please Enter Valid Email")
        return false;
      }
      alert("kindly fill all required field")
      return false;
    }
    
    this.AuthServiceService.login(this.body).subscribe((req)=>{
      if (req['token']) {
        console.log("After Susccess---------",req)
        this.submitted = true;
        this.token = req['token'];     
        localStorage.setItem('token', req['token']);
        localStorage.setItem('currentUser', req['user'].firstName);
        localStorage.setItem('trainings', req['trainings']);
        window.location.href = "/dashboard";
      } 
      else {
        alert(req['error'])
      }
    },
    err => {
      alert(err.error['error']);
      this.errMsg = 'Login failed wrong user credentials.';
      
    }
    )
  }

}
