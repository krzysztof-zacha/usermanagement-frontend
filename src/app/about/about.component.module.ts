import {NgModule} from "@angular/core";
import {AboutComponent} from "./about.component";
import {MatChipsModule} from "@angular/material/chips";
import {MenuComponentModule} from "../components/menu/menu.component.module";
import {AppRoutingModule} from "../app-routing.module";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [AboutComponent],
  imports: [MenuComponentModule, MatChipsModule, AppRoutingModule, MatButtonModule],
  exports: [AboutComponent]
})

export class AboutComponentModule {

}
