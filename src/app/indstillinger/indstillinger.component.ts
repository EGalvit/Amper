import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'

export interface DialogData {
  brugerNavn: string;
}

@Component({
  selector: 'app-indstillinger',
  templateUrl: './indstillinger.component.html',
  styleUrls: ['./indstillinger.component.scss'],
})
export class IndstillingerComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      // width: '250px',
      data: {},
      backdropClass: 'backdropBackground'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
  }

}
@Component({
  selector: 'app-indstillinger-dialog',
  templateUrl: './indstillinger-dialog.component.html',
  styleUrls: ['./indstillinger.component.scss']
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
