import { Character } from "./character.js";

export class King extends Character {
  constructor(name, family, age, yearsOfReign, image) {
    super(name, family, age);
    this.yearsOfReign = yearsOfReign;
    this.image = image;
  }
  message = "You are all going to die";
  emoji = "👑 ";
}
