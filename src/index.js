import { King } from "./classes/king.js";
import { Fighter } from "./classes/fighter.js";
import { Advisor } from "./classes/advisor.js";
import { Squire } from "./classes/squire.js";

import { characters } from "./data/characters.js";

function createCharacters() {
  const charactersReady = [];

  characters.forEach((character) => {
    let name = character.name;

    if (character.role === "king") {
      name = new King(
        character.name,
        character.family,
        character.age,
        character.yearsOfReign,
        character.image
      );
      // console.log(name);
      charactersReady.push(name);
    } else if (character.role === "fighter") {
      name = new Fighter(
        character.name,
        character.family,
        character.age,
        character.dexterity,
        character.weapon,
        character.image
      );
      // console.log(name);
      charactersReady.push(name);
    } else if (character.role === "advisor") {
      name = new Advisor(
        character.name,
        character.family,
        character.age,
        character.counseled,
        character.image
      );
      // console.log(name);
      charactersReady.push(name);
    } else if (character.role === "squire") {
      name = new Squire(
        character.name,
        character.family,
        character.age,
        character.knight,
        character.brownNose
      );
      // console.log(name);
      charactersReady.push(name);
    }
  });
  return charactersReady;
}

console.log(createCharacters());
