import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdminserviceService } from './adminservice.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService{

  constructor(private http: HttpClient, private AdminService: AdminserviceService) { }

  login(user) {
    const headers = new HttpHeaders()
    .set("Access-Control-Allow-Origin", "*")
    .set('Content-Type', 'application/json');
    return this.http.post(this.AdminService.ip + 'admin/login', JSON.stringify(user), { headers: headers })
  }


  isLoggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  getAuthorizationToken() {
    const currentUser = localStorage.getItem('token');
    let token = new HttpHeaders({ 'Content-Type': 'application/json', "Authorization": currentUser });
    return token;
    //return currentUser.token || [];
 
  }


  logout() {
    localStorage.removeItem('token');
  }

}
