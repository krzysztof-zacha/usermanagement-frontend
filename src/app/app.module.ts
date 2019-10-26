import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {UserListComponent} from './user/user-list/user-list.component';
import {UserDetailComponent} from './user/user-detail/user-detail.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MenuComponent} from './components/menu/menu.component';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {UserService} from "./user/user.service";
import {HttpClientModule} from "@angular/common/http";
import {MatSortModule} from "@angular/material/sort";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatRadioModule} from "@angular/material/radio";
import {AlertDialogComponent} from "./user/user-list/alert-dialog/alert-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UserListComponent,
    UserDetailComponent,
    MenuComponent,
    AlertDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule
  ],
  entryComponents:[AlertDialogComponent],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
