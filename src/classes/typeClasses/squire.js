import { Character } from "./character.js";

export class Squire extends Character {
  message = "I'm a loser";
  emoji = "🛡";

  constructor(id, name, family, age, image, metadata) {
    super(id, name, family, age);
    this.image = image;
    this.metadata = metadata;
  }
}
