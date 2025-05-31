import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ParentComponent } from "./components/parent/parent.component";
import { WarriorComponent } from './components/warrior/warrior.component';
import { ArcherComponent } from './components/archer/archer.component';
import { MageComponent } from './components/mage/mage.component';
import { RogueComponent } from './components/rogue/rogue.component';

@NgModule({
  declarations: [AppComponent, ParentComponent, WarriorComponent, ArcherComponent, MageComponent, RogueComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
