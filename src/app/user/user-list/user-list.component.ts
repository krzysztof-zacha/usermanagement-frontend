import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['username', 'name', 'surname', 'email',
    'role', 'registrationDate', 'enabled', 'actions'];

  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>([]);

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.findAll().subscribe((val: User[]) => {
      this.dataSource = new MatTableDataSource(val);
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
