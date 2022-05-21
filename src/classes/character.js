export class Character {
  constructor(
    name = "Name",
    family = "Family",
    age = undefined,
    communication
  ) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.communication = communication;
  }

  isAlive = true;

  die() {
    this.isAlive = false;
  }

  speak() {
    console.log(this.communication); // the message comes with all the role data
    return this.communication;
  }
}
