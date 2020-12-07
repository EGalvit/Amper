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
      .post(`https://localhost:44358/api/User/post`, this.postData)
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

  DiscoverGet(lastRowNumber: number, id: number) {
    return this.http.get(`https://localhost:44358/api/Discover/get/values?id=${id}&lastRowNumber=${lastRowNumber}`);
  }

  HomeGet(lastRowNumber: number, id: number) {
    return this.http.get(`https://localhost:44358/api/Home/get/values?id=${id}&lastRowNumber=${lastRowNumber}`);
  }

  SearchGet(s: string){
    return this.http.get(`https://localhost:44358/api/Search/get/values?searchQuery=${s}`);
  }

  SearchGet2(s: string){
    return this.http.get(`https://localhost:44358/api/SearchPost/get/values?searchQuery=${s}`);
  }

  UserGet(id: number) {
    return this.http.get(`https://localhost:44358/api/User/get/values?id=${id}`)
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

  MessagePost(UserID: number, Message: string, ReciverID: number) {
    this.postData = {
      senderid: UserID,
      message: Message,
      recipientid: ReciverID
    };
    return this.http.post(`https://localhost:44358/api/Message/post`, this.postData);
  }

  MessageGet(lastRowNumber: number, senderid: number, reciverid: number) {
    return this.http.get(`https://localhost:44358/api/Message/get/values?senderid=${senderid}&reciverid=${reciverid}&lastRowNumber=${lastRowNumber}`);
  }

  MessagePersonGet(lastRowNumber: number, ownID: number){
    return this.http.get(`https://localhost:44358/api/MessagePerson/get/values?ownID=${ownID}&lastRowNumber=${lastRowNumber}`);
  }
}
