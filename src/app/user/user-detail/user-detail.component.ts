import {Component, Inject} from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  userId: string;
  userForm: FormGroup;
  roles = ["ADMIN", "MODERATOR", "USER"];

  constructor(public dialogRef: MatDialogRef<UserDetailComponent>, @Inject(MAT_DIALOG_DATA) public data: User,
              private userService: UserService) {
    dialogRef.disableClose = true;
    this.userId = data.id;
    this.userForm = new FormGroup({
      username: new FormControl(data.username, [Validators.required]),
      name: new FormControl(data.name, [Validators.required]),
      surname: new FormControl(data.surname, [Validators.required]),
      role: new FormControl(data.role, [Validators.required]),
      email: new FormControl(data.email, [Validators.required]),
      enabled: new FormControl(data.enabled, [Validators.required]),
    });

  }

  save() {
    const user = this.userForm.value;
    user.id = this.userId;
    Object.keys(this.userForm.controls).forEach(key => {
      this.userForm.get(key).markAsTouched();
    });
    if (this.userForm.valid) {
      this.userService.save(user)
        .subscribe(() => this.dialogRef.close());
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
