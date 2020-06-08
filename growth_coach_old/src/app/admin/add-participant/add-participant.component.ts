import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormBuilder} from '@angular/forms';
import { AdminserviceService } from '../service/adminservice.service';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { AuthenticationService } from  '../service/autheauthentication.service';
import {formatDate } from '@angular/common';
@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.css']
})
export class AddParticipantComponent implements OnInit {

  constructor(private router: Router,
    private commonService : AdminserviceService,
    private http: HttpClient,
    private formBuilder:FormBuilder, 
    private AuthServiceService: AuthenticationService) { }

    result: string [];
    states: string [];
    cityList:string [];
    planTypes:string [];
    currentUser:string;
    addParticipant:FormGroup;
    fileData="";
  ngOnInit() {
       //Add participent 
       this.addParticipant = this.formBuilder.group({
        "firstName": "",
        "midName": "",
        "lastName": "",
        "email": "",
        "phone":"",
        "password":"",
        "address":"",
        "pinCode":"",
        "userType":1,
        "file":"",
        "state":"",
        "city":"",
        "gender":"",
        "planType":"",
        "DOB":""
      });

    if(localStorage.getItem('token')) {
      let token=localStorage.getItem('token');
      let headers = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization": token });
      this.currentUser=localStorage.getItem('currentUser');

    //GEt ALl States
    this.http.get(this.commonService.ip + 'getAllStates', {
      headers: headers
    })
    .subscribe(data => {
      this.states = data['states'] as string [];
    });

      //GEt Plan Type
      this.http.get(this.commonService.ip + 'getPaymentPlanType', {
        headers: headers
      })
      .subscribe(data => {
        this.planTypes = data['planTypes'] as string [];
      });

    }
    else{
      alert("Token Not found Please Login Again");
      this.router.navigate(['']);
    }
  }

  getCityOfState(event){ //GEt city
    let state_id=event.target.value;
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.get(this.commonService.ip + 'getCityByState/'+state_id, {
      headers: headers
    })
    .subscribe(data => {
      this.cityList = data['cities'] as string [];
      });
  }


  onFileSelect(event) { //upload file
    if (event.target.files.length > 0) {
      this.fileData= event.target.files[0];
      this.addParticipant.get('file').patchValue({file:this.fileData});
    }
  }


  addParticipantForm(){
    const formData = new FormData();
  

      Object.keys(this.addParticipant.value).forEach(key => {
        let data =this.addParticipant.get(key).value;
        console.log("Reading",key , data)
        if(key == "DOB"){
          data = formatDate(data, 'dd/MM/yyyy', 'en-US', '+0530');
        }
       
        if(data instanceof Array){
          data.forEach(elem => {
            formData.append(key,elem)
          });
          console.log(formData)
        }
        else if(data instanceof Object && (!(data instanceof Date))){
          Object.keys(data).forEach((elem,k)=>formData.append(`${key}[${k}]`,elem));
        }else{
          formData.append(key,data)
        }
      });

    if(!formData.has('file')){
      formData.set('file',this.fileData);
      
    }
     this.http.post(this.commonService.ip + 'users',formData)
    .subscribe(data => {
      alert(data['message'])
      this.addParticipant.reset()
      });
  }


}
