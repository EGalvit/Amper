import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-beskeder',
  templateUrl: './beskeder.component.html',
  styleUrls: ['./beskeder.component.scss']
})
export class BeskederComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) {}
  
  openSnackBar() {
    this._snackBar.open('You pressed me', 'Close', {duration: 3000});
  }
  ngOnInit(): void {
  }

}