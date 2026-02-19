import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-warrior",
  templateUrl: "./warrior.component.html",
  styleUrl: "./warrior.component.css",
})
export class WarriorComponent {
  @Output() clickEvent = new EventEmitter<string>();

  chosenClass: string = "warrior";

  chooseClass(character: string): void {
    this.clickEvent.emit(character);
  }
}
