import { Character } from "./character.js";

export class King extends Character {
  constructor(name, family, age, image, metadata) {
    super(name, family, age);
    this.image = image;
    this.metadata = metadata;
  }
  message = "You are all going to die";
  emoji = "👑 ";
}
