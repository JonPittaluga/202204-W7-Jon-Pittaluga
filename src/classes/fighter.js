import { Character } from "./character.js";

export class Fighter extends Character {
  constructor(name, family, age, dexterity, weapon, image) {
    super(name, family, age);
    this.dexterity = dexterity;
    this.weapon = weapon;
    this.image = image;
  }
  message = "Strike first, then ask questions";
  emoji = "🗡";
}
