import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../models/user";
import { Router } from '@angular/router';
//import {Observable} from 'rxjs/operators';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient, private router: Router) { }

  postData: any;
  result: any;
  user: User;


  CreateUser(usernameInput: string, passwordInput: string) {
    this.postData = {
      username: usernameInput,
      password: passwordInput
    };
    this.http
      .post(`http://10.0.5.120/Services/api/User/post`, this.postData)
      .toPromise()
      .then((data) => {});
  }

  Login(username: string, password: string) {
    return this.http.get(`https://localhost:44358/api/Login/get/values?username=${username}&password=${password}`)
  }

  PostLike(postid: number, likerid: number) {
    return this.http.post(`https://localhost:44358/api/PostLike/post/values?postid=${postid}&likerid=${likerid}`, "", { observe: 'response' });
  }

  CommentLike(commentid: number, likerid: number) {
    return this.http.post(`https://localhost:44358/api/CommentLike/post/values?commentid=${commentid}&likerid=${likerid}`, "", { observe: 'response' });
  }

  Follow(followerid: number, followedid:number){
    return this.http.post(`https://localhost:44358/api/Follower/post/values?followerid=${followerid}&followedid=${followedid}`, "", { observe: 'response' });
  }

  DiscoverGet(lastRowNumber: number) {
    return this.http.get(`https://localhost:44358/api/Discover/get/values?lastRowNumber=${lastRowNumber}`);
  }

  HomeGet(lastRowNumber: number, id: number) {
    return this.http.get(`https://localhost:44358/api/Home/get/values?id=${id}&lastRowNumber=${lastRowNumber}`);
  }

  HomePost(UserID: number, post: string){
    this.postData = {
      posterid: UserID,
      post: post
    };
    return this.http.post(`https://localhost:44358/api/Post/post`, this.postData);
  }

  Amplify(UserID: number, post: string, ampOf: Number, isAmp: number){
    this.postData = {
      posterid: UserID,
      post: post,
      ampOf: ampOf,
      isAmp: isAmp
    };
    return this.http.post(`https://localhost:44358/api/Post/post`, this.postData, { observe: 'response' });
  }
}
