import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {UserDetailComponent} from './user/user-detail/user-detail.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {UserService} from "./user/user.service";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {AlertDialogComponent} from "./user/user-list/alert-dialog/alert-dialog.component";
import {ConfirmDialogComponent} from "./user/user-list/confirm-dialog/confirm-dialog.component";
import {UserListComponentModule} from "./user/user-list/user-list.component.module";
import {AboutComponentModule} from "./about/about.component.module";
import {UserDetailComponentModule} from "./user/user-detail/user-detail.component.module";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserDetailComponentModule,
    UserListComponentModule,
    AboutComponentModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
