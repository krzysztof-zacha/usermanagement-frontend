import {Component} from "@angular/core";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'alert-dialog',
  templateUrl: './alert-dialog.component.html'
})
export class AlertDialogComponent {

  constructor(public dialogRef: MatDialogRef<AlertDialogComponent>) {
    dialogRef.disableClose = true;
  }

  close() {
    this.dialogRef.close();
  }
}
