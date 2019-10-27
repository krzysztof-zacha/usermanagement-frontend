import {Component, Inject} from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  userId: string;
  userForm: FormGroup;
  roles = ["ADMIN", "MODERATOR", "USER"];
  title;

  constructor(public dialogRef: MatDialogRef<UserDetailComponent>, @Inject(MAT_DIALOG_DATA) public data: User,
              private userService: UserService) {
    dialogRef.disableClose = true;
    this.title = isNullOrUndefined(data.id) ? 'Create new user' : 'Edit existing user';
    this.userId = data.id;
    this.userForm = new FormGroup({
      username: new FormControl(data.username, [Validators.required, Validators.maxLength(30)]),
      name: new FormControl(data.name, [Validators.required, Validators.maxLength(30)]),
      surname: new FormControl(data.surname, [Validators.required, Validators.maxLength(30)]),
      role: new FormControl(data.role, [Validators.required, Validators.maxLength(30)]),
      email: new FormControl(data.email, [Validators.required, Validators.maxLength(30),
        Validators.email]),
      enabled: new FormControl(data.enabled,),
    });

  }

  save() {
    const user = this.userForm.value;
    user.id = this.userId;
    Object.keys(this.userForm.controls).forEach(key => {
      this.userForm.get(key).markAsTouched();
    });
    this.userForm.updateValueAndValidity();
    if (this.userForm.valid) {
      this.userService.save(user)
        .subscribe(() => this.dialogRef.close());
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
