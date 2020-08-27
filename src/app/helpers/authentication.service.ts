import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  GetToken() {
    return !!localStorage.getItem('UserID');
  }
}
