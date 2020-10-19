import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'Amper';
  router: any;
  userid: any;

  constructor(private _router: Router) {
    _router.events.subscribe(() => (this.router = _router.url));
  }

  ngOnInit(): void {
    // console.log(this.userid);
  }

  ClearStorage() {
    localStorage.clear();
  }

  Profil() {
    this.userid = localStorage.getItem('UserID');
    this._router.navigateByUrl(`/profil/${this.userid}`);
  }
}
