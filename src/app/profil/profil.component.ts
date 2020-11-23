import { Component, OnInit, HostListener } from '@angular/core';
import { HttpService } from "../helpers/http.service";
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ObjectUnsubscribedError } from 'rxjs';
import { darkblue } from 'color-name';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  posts: Object;
  lastRowNumber: number = 0;
  id: any;
  post: string;
  
  opslagForm: FormGroup;
  opslagText = new FormControl(null, [Validators.required]);

  constructor(private _http: HttpService,  private fb: FormBuilder){ 
    this.opslagForm = this.fb.group({opslagText: this.opslagText})
  }

  ngOnInit(): void {
    this.id = localStorage.getItem('UserID')
    this.LoadMore();
  }

  LoadMore(){
    this._http.HomeGet(this.lastRowNumber, this.id)
    .subscribe((data) =>{
      this.posts = data;
      console.log(data);
    });
    this.lastRowNumber += 50;
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      console.log("End");
    }
  }

}
