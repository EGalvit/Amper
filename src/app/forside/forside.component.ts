import { Component, OnInit } from '@angular/core';
import { HttpService } from "../helpers/http.service";
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ObjectUnsubscribedError } from 'rxjs';
import { darkblue } from 'color-name';
@Component({
  selector: 'app-discover',
  templateUrl: './forside.component.html',
  styleUrls: ['./forside.component.scss']
})
export class ForsideComponent implements OnInit {
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
  CreatePost(){
    // this.post = document.getElementById("postText").innerHTML;
    // console.log(this.post);
    // this._http.HomePost(this.id, this.post).toPromise().then((data) =>{
      
    // });
    // this.lastRowNumber = 0;
    // this.LoadMore();
    const formValue = this.opslagForm.value;
    console.log(formValue.opslagText)
  }

}
