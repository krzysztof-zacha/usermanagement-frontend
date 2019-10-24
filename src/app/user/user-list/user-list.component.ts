import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {UserDetailComponent} from "../user-detail/user-detail.component";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['username', 'name', 'surname', 'email',
    'role', 'registrationDate', 'enabled', 'actions'];

  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>([]);

  constructor(private userService: UserService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.loadAllUsers();
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(user: User) {
    if (confirm("Are you sure to delete " + user.name)) {
      this.userService.delete(user).subscribe(() => this.loadAllUsers());
    }
  }

  openUserDetail(user?: User) {
    const dialogRef = this.dialog.open(UserDetailComponent, {
      width: '500px',
      data: user ? user : {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.loadAllUsers();
    });
  }

  formatDate(registrationDate: any) {
    return registrationDate ?
      `${registrationDate.dayOfMonth}.${registrationDate.monthValue}.${registrationDate.year}` : '';
  }

  private loadAllUsers() {
    this.userService.findAll().subscribe((val: User[]) => {
      this.dataSource = new MatTableDataSource(val);
    })
  }

}
