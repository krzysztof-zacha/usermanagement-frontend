import {Component, Inject} from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";

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
      username: new FormControl(data.username),
      name: new FormControl(data.name),
      surname: new FormControl(data.surname),
      role: new FormControl(data.role),
      email: new FormControl(data.email),
      enabled: new FormControl(data.enabled),
    });

  }

  save() {
    const user = this.userForm.value;
    user.id = this.userId;
    this.userService.save(user)
      .subscribe(() => this.dialogRef.close());
  }

  cancel() {
    this.dialogRef.close();
  }
}
