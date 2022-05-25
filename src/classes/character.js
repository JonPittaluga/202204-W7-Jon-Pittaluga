export class Character {
  constructor(
    id,
    name = "Name",
    family = "Family",
    age = undefined,
    communication = "Hello, kingdom"
  ) {
    this.id = id;
    this.name = name;
    this.family = family;
    this.age = age;
    this.communication = communication;
  }

  isAlive = true;

  speak() {
    console.log(this.communication); // the message comes with all the role data
    return this.communication;
  }
}
