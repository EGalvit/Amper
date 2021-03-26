import { Component, ViewChild, OnInit, ElementRef} from '@angular/core'
import { HttpService } from '../helpers/http.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-beskeder',
  templateUrl: './beskeder.component.html',
  styleUrls: ['./beskeder.component.scss']
})
export class BeskederComponent implements OnInit, AfterViewChecked {

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  id: any;
  ownID: any;
  messages: Object;
  messagePerson: Object;
  lastRowNumber: number = 0;
  senderid: any;
  reciverid: any;
  posterid: any;
  scrollBottom: any;
  sameUser: Boolean = false;
  userID: string = localStorage.getItem('UserID');

  postForm: FormGroup;
  postText = new FormControl(null, [Validators.required]);

  constructor(private _http: HttpService, private fb: FormBuilder, private route: ActivatedRoute, private _route: Router) {
    this.postForm = this.fb.group({postText: this.postText});
    this._route.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    
    this.reciverid = this.route.snapshot.paramMap.get("messageid");
    this.senderid = localStorage.getItem('UserID');
    this.id = localStorage.getItem('UserID');
    this.ownID = localStorage.getItem('UserID');
    if (this.senderid == this.reciverid){
      this.sameUser = false;
    }
    else {
      this.sameUser = true;
    }
    this.LoadPerson();
    this.LoadMore();
    this.scrollToBottom();
  }

  ngAfterViewChecked() {        
    this.scrollToBottom();        
} 

  LoadMore(){
    this._http.MessageGet(this.lastRowNumber, this.senderid, this.reciverid)
    .subscribe((data) =>{
      this.messages = data;
      console.log(data);
    })
  }

  CreateMessage(){
    const formValue = this.postForm.value;
    this._http.MessagePost(this.id, formValue.postText, this.reciverid).toPromise().then((data) => {
      // console.log(data);
    });
    this.postForm.reset();
    console.log(formValue.postText);
    this.refresh();
  }

  LoadPerson(){
    this._http.MessagePersonGet(this.lastRowNumber, this.ownID)
    .subscribe((data) =>{
      this.messagePerson = data;
      console.log(data);
    })
  }

  ChangeMessenger(changeTo){
    this._route.navigateByUrl(`/beskeder/${changeTo}`);
  }

  refresh() {
    window.location.reload();
    console.log('reload');
  }

  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
  }
  
  handleKeyUp(e){
    if(e.keyCode === 13){
       this.CreateMessage();
    }
 }
  handleSubmit(e: any) {
    throw new Error("Method not implemented.");
  }
}