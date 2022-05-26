import { Character } from "./character.js";

export class Fighter extends Character {
  message = "Strike first,  then ask";
  emoji = "🗡";

  constructor(id, name, family, age, image, metadata) {
    super(id, name, family, age);
    this.image = image;
    this.metadata = metadata;
  }
}
