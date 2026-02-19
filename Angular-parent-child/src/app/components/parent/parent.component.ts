import { Component } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrl: "./parent.component.css",
})
export class ParentComponent {
  classChooser: string = "Choose your class!";
  imgURL: string = "";

  setChosenClass(character: string): void {
    this.classChooser = `You have chosen the ${character}!`;

    switch (character) {
      case "warrior":
        this.imgURL = "assets/img/warrior.jpg";
        break;
      case "archer":
        this.imgURL = "assets/img/archer.jpg";
        break;
      case "mage":
        this.imgURL = "assets/img/mage.jpg";
        break;
      case "rogue":
        this.imgURL = "assets/img/rogue.jpg";
        break;
      default:
        this.imgURL = "";
    }
  }
}
