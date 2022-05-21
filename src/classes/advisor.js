import { Character } from "./character.js";

export class Advisor extends Character {
  constructor(name, family, age, counseled, image) {
    super(name, family, age);
    this.counseled = counseled;
    this.image = image;
  }
  message = "I don't know why, but I think I'm going to die soon";
  emoji = "🎓";
}
