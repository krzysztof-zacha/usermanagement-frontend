import {NgModule} from "@angular/core";
import {UserDetailComponent} from "./user-detail.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [UserDetailComponent],
  imports: [MatFormFieldModule, MatSelectModule, MatRadioModule, ReactiveFormsModule, MatInputModule, MatDialogModule, CommonModule, MatButtonModule],
  exports: [UserDetailComponent]
})

export class UserDetailComponentModule {

}
