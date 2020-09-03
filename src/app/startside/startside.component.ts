import { Component, OnInit } from '@angular/core';
import { HttpService } from "../helpers/http.service";
import { AuthenticationService } from "../helpers/authentication.service";
import { Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';


@Component({
  selector: 'app-startside',
  templateUrl: './startside.component.html',
  styleUrls: ['./startside.component.scss'],
})
export class StartsideComponent implements OnInit {
  usernameCreate: string;
  passwordCreate: string;
  usernameLogin: string;
  passwordLogin: string;


  constructor(private _http: HttpService, private AuthenticationService: AuthenticationService, private router: Router) {
  }

  CreateSubmit() {
    this._http.CreateUser(this.usernameCreate, this.passwordCreate);
  }

  LoginSubmit() {
    this._http.Login(this.usernameLogin, this.passwordLogin);
  }

  ngOnInit(): void {
    if (this.AuthenticationService.GetToken()) {
      this.router.navigate(['/forside'])
    }
  }
}
