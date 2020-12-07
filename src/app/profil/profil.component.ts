import { Component, OnInit, HostListener } from '@angular/core';
import { HttpService } from "../helpers/http.service";
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ObjectUnsubscribedError } from 'rxjs';
import { darkblue } from 'color-name';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  posts: Object;
  lastRowNumber: number = 0;
  id: any;
  userID: any;
  post: string;
  likeCount: any;
  ampCount: any;
  textPost: any;
  beskedid: any;
  
  opslagForm: FormGroup;
  opslagText = new FormControl(null, [Validators.required]);

  constructor(private _http: HttpService,  private fb: FormBuilder, private route: ActivatedRoute, private _route: Router){ 
    this.opslagForm = this.fb.group({opslagText: this.opslagText})
  }

  ngOnInit(): void {
    this.userID = localStorage.getItem("UserID");
    this.id = this.route.snapshot.paramMap.get("id");
    this.LoadMore();
  }

  LoadMore(){
    console.log(this.id);
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
  Like(PostID: number, index: number){
    this.likeCount = document.getElementById("likeCount"+index).innerHTML;
    
    
    this._http.PostLike(PostID, this.userID)
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
  Beskeder() {
    this.beskedid = this.route.snapshot.paramMap.get("id");
    this._route.navigateByUrl(`/beskeder/${this.beskedid}`);
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
