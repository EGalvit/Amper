import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  Kage: any;
  constructor() { }

  ngOnInit(): void {
    let list: number[] = [1, 2, 3];
    console.log(list)
  }

}
