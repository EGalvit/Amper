import { Component, ViewEncapsulation } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit{
  title = 'Amper';
  router: any;
  userid: any;
  openedSubject = new Subject<boolean>();

  constructor(private _router: Router) {
    _router.events.subscribe(() => (this.router = _router.url));
  }

  ngOnInit(): void {
    this.userid = localStorage.getItem('UserID');
    console.log(this.userid);
  }

  ClearStorage() {
    localStorage.clear();
  }

  dismissSidebar() {
    this.openedSubject.next(false);
  }

  Profil() {
    this.userid = localStorage.getItem("UserID");
    this._router.navigateByUrl(`/profil/${this.userid}`);
  }
}
