import { Component, OnInit } from '@angular/core';
import { HttpService } from "../helpers/http.service";
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
  
  constructor(private _http: HttpService){ }

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
    this.post = document.getElementById("postText").innerHTML;
    console.log(this.post);
    this._http.HomePost(this.id, this.post).toPromise().then((data) =>{
      
    });
    this.lastRowNumber = 0;
    this.LoadMore();
  }

}
