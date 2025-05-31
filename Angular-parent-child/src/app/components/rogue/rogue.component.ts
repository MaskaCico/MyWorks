import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-rogue",
  templateUrl: "./rogue.component.html",
  styleUrl: "./rogue.component.css",
})
export class RogueComponent {
  @Output() clickEvent = new EventEmitter<string>();

  chosenClass: string = "rogue";

  chooseClass(character: string): void {
    this.clickEvent.emit(character);
  }
}
