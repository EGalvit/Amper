import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Amper';
  router: any;
  userid = localStorage.getItem('UserID');

  constructor(router: Router) {
    router.events.subscribe(() => (this.router = router.url));
  }

  ClearStorage() {
    localStorage.clear();
  }
}
