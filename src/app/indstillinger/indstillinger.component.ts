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

  openBrugernavnDialog(): void {
    // let brugernavn: boolean = false;
    const dialogRef = this.dialog.open(BrugernavnDialog, {
      // width: '250px',
      data: {},
      backdropClass: 'backdropBackground'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  // let brugernavn: boolean = false;
  hvilkenDialog() {
    // let brugernavn: boolean = false;
    // brugernavn = true;
  }

  openKodeordDialog(): void {
    const dialogRef = this.dialog.open(KodeordDialog, {
      // width: '250px',
      data: {},
      backdropClass: 'backdropBackground'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openFodselsdagDialog(): void {
    const dialogRef = this.dialog.open(FødselsdagDialog, {
      // width: '250px',
      data: {},
      backdropClass: 'backdropBackground'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openLokationDialog(): void {
    const dialogRef = this.dialog.open(LokationDialog, {
      // width: '250px',
      data: {},
      backdropClass: 'backdropBackground'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openKonDialog(): void {
    const dialogRef = this.dialog.open(KønDialog, {
      // width: '250px',
      data: {},
      backdropClass: 'backdropBackground'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openBeskrivelseDialog(): void {
    const dialogRef = this.dialog.open(BeskrivelseDialog, {
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
  selector: 'app-indstillinger-brugernavnDialog',
  templateUrl: './indstillinger-brugernavnDialog.component.html',
  styleUrls: ['./indstillinger.component.scss']
})
export class BrugernavnDialog {

  brugernavn: boolean = true;
  kodeord: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<BrugernavnDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  Test() {
    console.log("This needs to wooooork!");
  }
}

@Component({
  selector: 'app-indstillinger-kodeordDialog',
  templateUrl: './indstillinger-kodeordDialog.component.html',
  styleUrls: ['./indstillinger.component.scss']
})
export class KodeordDialog {

  constructor(
    public dialogRef: MatDialogRef<KodeordDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-indstillinger-fødselsdagDialog',
  templateUrl: './indstillinger-fødselsdagDialog.component.html',
  styleUrls: ['./indstillinger.component.scss']
})
export class FødselsdagDialog {

  constructor(
    public dialogRef: MatDialogRef<FødselsdagDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-indstillinger-lokationDialog',
  templateUrl: './indstillinger-lokationDialog.component.html',
  styleUrls: ['./indstillinger.component.scss']
})
export class LokationDialog {

  constructor(
    public dialogRef: MatDialogRef<FødselsdagDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-indstillinger-konDialog',
  templateUrl: './indstillinger-konDialog.component.html',
  styleUrls: ['./indstillinger.component.scss']
})
export class KønDialog {

  constructor(
    public dialogRef: MatDialogRef<FødselsdagDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-indstillinger-beskrivelseDialog',
  templateUrl: './indstillinger-beskrivelseDialog.component.html',
  styleUrls: ['./indstillinger.component.scss']
})
export class BeskrivelseDialog {

  constructor(
    public dialogRef: MatDialogRef<BeskrivelseDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
