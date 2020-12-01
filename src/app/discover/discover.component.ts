import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from "../helpers/http.service";
import { ObjectUnsubscribedError } from 'rxjs';
import { isTemplateExpression } from 'typescript';
import { post } from 'selenium-webdriver/http';
@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {
  posts: Object;
  lastRowNumber: number = 0;
  id: any;
  likeCount: any;
  ampCount: any;
  postText: any;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem("UserID");
    this.LoadMore();
  }

  LoadMore(){
    console.log(this.id);
    this._http.DiscoverGet(this.lastRowNumber, this.id)
    .subscribe((data) =>{
      this.posts = data;
      console.log(data);
    });
    this.lastRowNumber += 50;
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
  // GoToProfile(posterID: number)
}
