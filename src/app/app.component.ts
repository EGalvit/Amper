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
  userid = localStorage.getItem('UserID');
  openedSubject = new Subject<boolean>();

  constructor(router: Router) {
    router.events.subscribe(() => (this.router = router.url));
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
}
