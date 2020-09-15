import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'Amper';
  router: any;
  userid = localStorage.getItem('UserID');
  openedSubject = new Subject<boolean>();

  constructor(router: Router) {
    router.events.subscribe(() => (this.router = router.url));
  }

  ClearStorage() {
    localStorage.clear();
  }

  dismissSidebar() {
    this.openedSubject.next(false);
  }
}
