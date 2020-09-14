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
}
