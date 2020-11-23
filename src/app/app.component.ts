import { Component, ViewEncapsulation } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';

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

  searchForm: FormGroup;
  searchInput = new FormControl(null, [Validators.required]);

  constructor(private _router: Router, private fb: FormBuilder) {
    _router.events.subscribe(() => (this.router = _router.url));
    this.searchForm = this.fb.group({searchInput: this.searchInput})
  }

  ngOnInit(): void {
    // console.log(this.userid);
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
