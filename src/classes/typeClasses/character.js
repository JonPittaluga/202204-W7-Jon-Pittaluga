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

  speak(message) {
    return console.log(this.message); // the message comes with all the role data
  }
}
