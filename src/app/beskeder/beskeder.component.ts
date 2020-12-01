import { Component, AfterViewInit, ViewChild, OnInit} from '@angular/core'
import {MatSnackBar} from '@angular/material/snack-bar'
import { HttpService } from '../helpers/http.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { AfterContentChecked, AfterViewChecked } from '@angular/core';
import { ScrollToBottomDirective } from '../scroll-to-bottom.directive';

@Component({
  selector: 'app-beskeder',
  templateUrl: './beskeder.component.html',
  styleUrls: ['./beskeder.component.scss']
})
export class BeskederComponent implements OnInit {
  
  @ViewChild(ScrollToBottomDirective)
  scroll: ScrollToBottomDirective;
  id: any;
  messages: Object;
  lastRowNumber: number = 0;
  senderid: any;
  reciverid: any;
  message: string;
  posterid: any;
  scrollBottom: any;
  isTrue: Boolean = false;

  postForm: FormGroup;
  postText = new FormControl(null, [Validators.required]);

  constructor(private _http: HttpService, private fb: FormBuilder) {
    this.postForm = this.fb.group({postText: this.postText})
  }
  
  ngOnInit(): void {
    this.reciverid = 103;
    this.senderid = localStorage.getItem('UserID');
    this.id = localStorage.getItem('UserID');
    this.LoadMore();
  }

  senderMyself(){
    if (this.id == this.senderid){
      this.isTrue = true;
    }
  }

  LoadMore(){
    this._http.MessageGet(this.lastRowNumber, this.senderid, this.reciverid)
    .subscribe((data) =>{
      this.messages = data;
      console.log(data);
    })
  }
  CreatePost(){
    // this.post = document.getElementById("postText").innerHTML;
    // console.log(this.post);
    // this._http.HomePost(this.id, this.post).toPromise().then((data) =>{
      
    // });
    // this.lastRowNumber = 0;
    // this.LoadMore();
    const formValue = this.postForm.value;
    this._http.MessagePost(this.id, formValue.postText, this.reciverid).toPromise().then((data) => {
      console.log(data);
    });
    console.log(formValue.postText);
  }
}