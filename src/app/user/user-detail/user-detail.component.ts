import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  save() {
    this.userService.save(this.user);
  }

  goBack() {
    window.history.back();
  }
}
