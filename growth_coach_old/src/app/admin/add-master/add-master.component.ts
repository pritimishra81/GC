import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormBuilder} from '@angular/forms';
import { AdminserviceService } from '../service/adminservice.service';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { AuthenticationService } from  '../service/autheauthentication.service';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-add-master',
  templateUrl: './add-master.component.html',
  styleUrls: ['./add-master.component.css']
})
export class AddMasterComponent implements OnInit {

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
    addMaster:FormGroup;
    fileData="";
  ngOnInit() {
      //Add master frenchise 
      this.addMaster = this.formBuilder.group({
        "firstName": "",
        "midName": "",
        "lastName": "",
        "email": "",
        "phone":"",
        "password":"",
        "address":"",
        "pinCode":"",
        "userType":3,
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
    this.addMaster.get('file').patchValue({file:this.fileData});
  }
}


addMasterForm(){
  const formData = new FormData();


    Object.keys(this.addMaster.value).forEach(key => {
      let data =this.addMaster.get(key).value;
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
    this.addMaster.reset()
    });
}


}
