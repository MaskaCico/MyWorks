import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-mage",
  templateUrl: "./mage.component.html",
  styleUrl: "./mage.component.css",
})
export class MageComponent {
  @Output() clickEvent = new EventEmitter<string>();

  chosenClass: string = "mage";

  chooseClass(character: string): void {
    this.clickEvent.emit(character);
  }
}
