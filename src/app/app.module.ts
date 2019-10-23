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

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UserListComponent,
    UserDetailComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
