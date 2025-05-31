import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-archer",
  templateUrl: "./archer.component.html",
  styleUrl: "./archer.component.css",
})
export class ArcherComponent {
  @Output() clickEvent = new EventEmitter<string>();

  chosenClass: string = "archer";

  chooseClass(character: string): void {
    this.clickEvent.emit(character);
  }
}
