import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar/navbar.service';

@Component({
  selector: 'app-forside',
  templateUrl: './forside.component.html',
  styleUrls: ['./forside.component.scss']
})
export class ForsideComponent implements OnInit {

  constructor( public nav: NavbarService ){ }

  ngOnInit(): void {
    this.nav.show();
    this.nav.doSomethingElseUseful();
  }

}
