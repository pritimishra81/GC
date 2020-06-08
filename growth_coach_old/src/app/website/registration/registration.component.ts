import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormBuilder} from '@angular/forms';
import { AdminserviceService } from '../../admin/service/adminservice.service';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { AuthenticationService } from  '../../admin/service/autheauthentication.service';
import { DatePipe } from '@angular/common';
import {formatDate } from '@angular/common';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router,
    private commonService : AdminserviceService,
    private http: HttpClient, 
    private formBuilder:FormBuilder,
    private AuthServiceService: AuthenticationService) { }

    result: string [];
    states: string [];
    cityList:string [];
    planTypes:string[];
    courses:string[];
    masterForm:FormGroup;
    operationalForm:FormGroup;
    referalForm:FormGroup;
    investmentForm:FormGroup;
    fileData="";
  ngOnInit() {

        //Add master frenchise 
        this.masterForm = this.formBuilder.group({
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
          "DOB":"",
          "parentId":226 //Created By admin
        });


        //Add operational frenchise 
        this.operationalForm = this.formBuilder.group({
          "firstName": "",
          "midName": "",
          "lastName": "",
          "email": "",
          "phone":"",
          "password":"",
          "address":"",
          "pinCode":"",
          "userType":4,
          "file":"",
          "state":"",
          "city":"",
          "gender":"",
          "planType":"",
          "DOB":"",
          "courses":[]
        });
        

                //Add Referal frenchise 
                this.referalForm = this.formBuilder.group({
                  "firstName": "",
                  "midName": "",
                  "lastName": "",
                  "email": "",
                  "phone":"",
                  "password":"",
                  "address":"",
                  "pinCode":"",
                  "userType":6,
                  "file":"",
                  "state":"",
                  "city":"",
                  "gender":"",
                  "planType":"",
                  "DOB":""
                });


                     //Add Investment frenchise 
                     this.investmentForm = this.formBuilder.group({
                      "firstName": "",
                      "midName": "",
                      "lastName": "",
                      "email": "",
                      "phone":"",
                      "password":"",
                      "address":"",
                      "pinCode":"",
                      "userType":5,
                      "file":"",
                      "state":"",
                      "city":"",
                      "gender":"",
                      "planType":"",
                      "DOB":""
                    });

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

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


        //GEt all courses
        this.http.get(this.commonService.ip + 'courses', {
          headers: headers
        })
        .subscribe(data => {
          this.courses = data['course'] as string [];
        });
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
      this.masterForm.get('file').patchValue({file:this.fileData});
    }
  }

  formSubmit(type){
    const formData = new FormData();
  
    if(type == "masterForm"){
      Object.keys(this.masterForm.value).forEach(key => {
        let data =this.masterForm.get(key).value;
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
    }
    if(type == "operationalForm"){
      Object.keys(this.operationalForm.value).forEach(key => {
        let data =this.operationalForm.get(key).value;
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
    }


    if(type == "referalForm"){
      Object.keys(this.referalForm.value).forEach(key => {
        let data =this.referalForm.get(key).value;
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
    }
    
    if(type == "investmentForm"){
      Object.keys(this.investmentForm.value).forEach(key => {
        let data =this.investmentForm.get(key).value;
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
    }


    if(!formData.has('file')){
      formData.set('file',this.fileData);
      
    }
     this.http.post(this.commonService.ip + 'users',formData)
    .subscribe(data => {
      alert(data['message'])
      if(type == "masterForm") this.masterForm.reset()
      if(type == "operationalForm") this.operationalForm.reset()
      if(type == "investmentForm") this.investmentForm.reset()
      if(type == "referalForm"){
        alert("Plese note down your referal code-->"+data['user'].userCode)
        this.referalForm.reset()
      } 
    });
  
 
  }
 
  }


