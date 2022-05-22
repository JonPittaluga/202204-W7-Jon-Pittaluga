import { Character } from "./character.js";

export class Squire extends Character {
  constructor(name, family, age, image, metadata) {
    super(name, family, age);
    this.image = image;
    this.metadata = metadata;
  }
  message = "I'm a loser";
  emoji = "🛡";
}
