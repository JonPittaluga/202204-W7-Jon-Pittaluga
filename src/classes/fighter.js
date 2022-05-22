import { Character } from "./character.js";

export class Fighter extends Character {
  constructor(name, family, age, image, metadata) {
    super(name, family, age);
    this.image = image;
    this.metadata = metadata;
  }
  message = "Strike first, then ask questions";
  emoji = "🗡";
}
