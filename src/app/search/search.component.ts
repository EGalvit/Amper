import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpService } from "../helpers/http.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private _http: HttpService, private route: ActivatedRoute, private router: Router) { }
  searchInput: string;
  userResults: Object;
  postResults: Object;

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    }
    this.currentRoute();
    this._http.SearchGet(this.searchInput).subscribe((data) =>{
      // console.log(data);
      this.userResults = data;
    });

    this._http.SearchGet2(this.searchInput).subscribe((data) =>{
      // console.log(data);
      this.postResults = data;
    });
  }

  currentRoute(){
    this.route.queryParams.subscribe(param => { this.searchInput = param[''];})
  }
}