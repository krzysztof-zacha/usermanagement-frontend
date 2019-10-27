import {NgModule} from "@angular/core";
import {UserListComponent} from "./user-list.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatButtonModule} from "@angular/material/button";
import {MenuComponentModule} from "../../components/menu/menu.component.module";
import {BrowserModule} from "@angular/platform-browser";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ConfirmDialogComponentModule} from "./confirm-dialog/confirm-dialog.component.module";
import {AlertDialogComponentModule} from "./alert-dialog/alert-dialog.component.module";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [UserListComponent],
  imports: [
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MenuComponentModule,
    MatFormFieldModule,
    BrowserModule,
    ConfirmDialogComponentModule,
    AlertDialogComponentModule,
    MatInputModule,
  ],
  exports: [UserListComponent]
})

export class UserListComponentModule {

}
