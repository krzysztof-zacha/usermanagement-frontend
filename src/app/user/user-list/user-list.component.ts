import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {UserDetailComponent} from "../user-detail/user-detail.component";
import {AlertDialogComponent} from "./alert-dialog/alert-dialog.component";
import {MatSort} from "@angular/material/sort";
import {ConfirmDialogComponent} from "./confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['username', 'name', 'surname', 'email',
    'role', 'registrationDate', 'enabled', 'actions'];

  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>([]);
  @ViewChild(MatSort) sort: MatSort;
  isActive = false;

  constructor(private userService: UserService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.loadAllUsers();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(user: User) {
    if (this.isPossibleToDeleteUser()) {
      this.dialog.open(AlertDialogComponent, {width: '500px',});
    } else {
      this.confirmDelete(user);
    }
  }

  formatDate(registrationDate: any) {
    return registrationDate ?
      `${registrationDate.dayOfMonth}.${registrationDate.monthValue}.${registrationDate.year}` : '';
  }

  showTable() {
    return this.isActive && this.dataSource.data.length > 0;
  }

  private confirmDelete(user: User) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {width: '500px', data: user});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.delete(user).subscribe(() => this.loadAllUsers());
      }
    });
  }

  private isPossibleToDeleteUser() {
    return this.dataSource.data.length == 1;
  }

  private openUserDetail(user?: User) {
    const dialogRef = this.dialog.open(UserDetailComponent, {
      width: '500px',
      data: user ? user : {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadAllUsers();
    });
  }

  private loadAllUsers() {
    this.isActive = false;
    this.userService.findAll().subscribe((val: User[]) => {
      this.dataSource = new MatTableDataSource(val);
      this.dataSource.sort = this.sort;
      this.isActive = true;
    })
  }
}
