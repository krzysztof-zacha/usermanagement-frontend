import {NgModule} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MenuComponent} from "./menu.component";
import {RouterModule} from "@angular/router";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [MenuComponent],
  imports: [MatButtonModule, RouterModule, MatDialogModule],
  exports: [MenuComponent]
})

export class MenuComponentModule {

}
