import { Character } from "./character.js";

export class King extends Character {
  message = "You are all going to die";
  emoji = "👑";

  constructor(id, name, family, age, image, metadata) {
    super(id, name, family, age);
    this.image = image;
    this.metadata = metadata;
  }

  testCalling() {
    console.log("BRAVO");
  }

  speak() {
    super.speak(message);
  }
}
