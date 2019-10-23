import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from "./user/user-list/user-list.component";
import {UserDetailComponent} from "./user/user-detail/user-detail.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [{path: '', redirectTo: '/users', pathMatch: 'full'},
  {path: 'users', component: UserListComponent},
  {path: 'user-detail', component: UserDetailComponent},
  {path: 'about', component: AboutComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
