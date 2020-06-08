import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor() { }
  get ip() {
    //return 'http://192.168.43.183:4000/v1/' 
    return 'http://growthcoach.ckmeout.com:50014/v1/'
  }

    // emailValidate
    validateEmail(v) {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(v) == false) {
          return false;
        }
        return true;
    }

   
}
