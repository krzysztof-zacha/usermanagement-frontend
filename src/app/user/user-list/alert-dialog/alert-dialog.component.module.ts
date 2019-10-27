import {NgModule} from "@angular/core";
import {MatDialogModule} from "@angular/material/dialog";
import {AlertDialogComponent} from "../alert-dialog/alert-dialog.component";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [AlertDialogComponent],
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [AlertDialogComponent],
  exports: [AlertDialogComponent]
})

export class AlertDialogComponentModule {

}
