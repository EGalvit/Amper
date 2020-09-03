import { Component, OnInit } from '@angular/core';
import { HttpService } from "../helpers/http.service";
import { AuthenticationService } from "../helpers/authentication.service";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ConfirmedValidator } from "../helpers/password.validator";


@Component({
  selector: 'app-startside',
  templateUrl: './startside.component.html',
  styleUrls: ['./startside.component.scss'],
})
export class StartsideComponent implements OnInit {

  loginForm: FormGroup;
  loginUsername = new FormControl(null, [Validators.required, Validators.minLength(6)]);
  loginPassword = new FormControl(null, [Validators.required, Validators.minLength(6)]);

  signupForm: FormGroup
  signupUsername = new FormControl(null, [Validators.required, Validators.minLength(6)]);
  signupPassword = new FormControl(null, [Validators.required, Validators.minLength(6)]);
  signupConFirmPassword = new FormControl(null, [Validators.required]);
  
  constructor(private _http: HttpService, private AuthenticationService: AuthenticationService, private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      loginUsername: this.loginUsername,
      loginPassword: this.loginPassword
    });
    
    this.signupForm = this.fb.group({
      signupUsername: this.signupUsername,
      signupPassword: this.signupPassword,
      signupConFirmPassword: this.signupConFirmPassword,

    },
    { validator: ConfirmedValidator('signupPassword', 'signupConFirmPassword') });
  }
  
  loginSubmit() {
    const formValue = this.loginForm.value;
    this._http.Login(formValue.loginUsername, formValue.loginPassword);
  }

  signupSubmit() {
    const formValue = this.signupForm.value;
    this._http.CreateUser(formValue.signupUsername, formValue.signupPassword);
  }
  
  get f(){
    return this.loginForm.controls;
  }

  get s(){
    return this.signupForm.controls;
  }

  ngOnInit(): void {
    if (this.AuthenticationService.GetToken()) {
      this.router.navigate(['/forside'])
    }
  }
}
