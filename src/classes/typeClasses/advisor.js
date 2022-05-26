import { Character } from "./character.js";

export class Advisor extends Character {
  message = "I don't know why, but I think I'm going to die soon.";
  emoji = "🎓";

  constructor(id, name, family, age, image, metadata) {
    super(id, name, family, age);
    this.image = image;
    this.metadata = metadata;
  }
}
