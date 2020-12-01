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
  imageName: string;
  likeCount: any;
  ampCount: any;
  textPost: any;
  
  postForm: FormGroup;
  postText = new FormControl(null, [Validators.required]);
  postImage = new FormControl();

  constructor(private _http: HttpService, private fb: FormBuilder){ 
    this.postForm = this.fb.group({postText: this.postText, postImage: this.postImage})
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
    const formValue = this.postForm.value;
    this._http.HomePost(this.id, formValue.postText).toPromise().then((data) => {
      console.log(data);
    });
    this.postForm.reset();
    console.log(formValue.postText);
    console.log(formValue.postImage);
  }

  //converter et uploadet billed til en base64 string som kan sendes til apiet
  onFileChange($event){
    // console.log($event.target.files[0]);
    let me = this;
    let file = $event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      //me.modelvalue = reader.result;
      console.log(reader.result);
      me.imageName = file.name;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  removeImage() {
    console.log("removed image", this.imageName);
    this.imageName ="";
    this.postImage.reset();
  }

  Like(PostID: number, index: number){
    this.likeCount = document.getElementById("likeCount"+index).innerHTML;
    
    
    this._http.PostLike(PostID, this.id)
    .toPromise()
    .then((data) =>{    
      console.log(data.status);
      if (data.status == 201) {
        this.likeCount++;    
      } else {
        this.likeCount--;
      }
      document.getElementById("likeCount"+index).innerHTML = this.likeCount;
    });
  }
  Amp(PostID: number, index: number){
    console.log("Amp virker ikke!!!")
    // this.ampCount = document.getElementById("ampCount"+index).innerHTML;
    // this.textPost = document.getElementById("opslagtext"+index).innerHTML;

    // this._http.Amplify(this.id, this.textPost, PostID, 1)
    // .toPromise()
    // .then((data) => {
    //   console.log(data.status)
    //   if (data.status == 201){
    //     this.ampCount++;
    //   }
    //   document.getElementById("ampCount"+index).innerHTML = this.ampCount;
    // });
  }

}
