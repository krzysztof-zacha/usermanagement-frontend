import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['username', 'name', 'surname', 'email',
    'role', 'registrationDate', 'enabled', 'actions'];

  dataSource: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.findAll().subscribe(val => this.dataSource = val);
  }

}
