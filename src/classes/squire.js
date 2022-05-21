import { Character } from "./character.js";

export class Squire extends Character {
  constructor(name, family, age, knight, brownNose, image) {
    super(name, family, age);
    this.knight = knight;
    this.brownNose = brownNose;
    this.image = image;
  }
  message = "'m a loser";
  emoji = "🛡";
}
