import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../models/user";
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient, private router: Router) {}

  postData: any;
  result: any;
  user: User;

  CreateUser(usernameInput: string, passwordInput: string) {
    this.postData = {
      username: usernameInput,
      password: passwordInput,
    };
    console.log(this.postData);
    this.http
      .post(`http://10.0.5.120/Services/api/User/post`, this.postData)
      .toPromise()
      .then((data) => {
        console.log(data)
      });
  }

  Login(username: string, password: string) {
    return this.http
      .get(
        `http://10.0.5.120/Services/api/Login/get/values?username=${username}&password=${password}`
      )
      .subscribe((data) => {
        this.user = Object.assign((new User), data)
        localStorage.setItem('UserID',this.user.UserID.toString());
        localStorage.setItem('User', JSON.stringify(this.user));
        this.router.navigate(['/forside']);
      });
  }
}
