import { Component, OnInit } from '@angular/core';
import { HttpService } from "../helpers/http.service";
import { AuthenticationService } from "../helpers/authentication.service";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { ErrorStateMatcher } from '@angular/material/core';
import { User } from "../models/user";

export class PasswordCheck implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-startside',
  templateUrl: './startside.component.html',
  styleUrls: ['./startside.component.scss'],
})

export class StartsideComponent implements OnInit {
  
  matcher = new PasswordCheck();
    
  loginForm: FormGroup;
  loginUsername = new FormControl(null, [Validators.required, Validators.minLength(6)]);
  loginPassword = new FormControl(null, [Validators.required, Validators.minLength(6)]);

  signupForm: FormGroup
  signupUsername = new FormControl(null, [Validators.required, Validators.minLength(6)]);
  signupPassword = new FormControl('', [Validators.required, Validators.minLength(6)]);
  signupConFirmPassword = new FormControl('', [Validators.required]);
  
  user: User;
  constructor(private _http: HttpService, private AuthenticationService: AuthenticationService, private router: Router, private fb: FormBuilder, private snackBar: MatSnackBar) {

    this.loginForm = this.fb.group({
      loginUsername: this.loginUsername,
      loginPassword: this.loginPassword
    });
    
    this.signupForm = this.fb.group({
      signupUsername: this.signupUsername,
      signupPassword: this.signupPassword,
      signupConFirmPassword: this.signupConFirmPassword,
    },
    { validator: this.checkPasswords });
  }
  
  loginSubmit() {
    const formValue = this.loginForm.value;
    this._http.Login(formValue.loginUsername, formValue.loginPassword)
    .subscribe((data) => {
      this.user = Object.assign((new User), data)
      localStorage.setItem('UserID',this.user.UserID.toString());
      localStorage.setItem('User', JSON.stringify(this.user));
      this.router.navigate(['/forside']);
    });;
  }

  signupSubmit() {
    const formValue = this.signupForm.value;
    this._http.CreateUser(formValue.signupUsername, formValue.signupPassword);
    let config = new MatSnackBarConfig();
    config.panelClass = ['snackTest'];
    config.duration = 5000;
    this.snackBar.open('Bruger oprettet', 'Luk', config);
  }

  checkPasswords(fg: FormGroup) { 
  let pass = fg.controls.signupPassword.value;
  let confirmPass = fg.controls.signupConFirmPassword.value;

  return pass === confirmPass ? null : { notSame: true }
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
