import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( public nav: NavbarService ) { }

  ngOnInit(): void {
  }

}
