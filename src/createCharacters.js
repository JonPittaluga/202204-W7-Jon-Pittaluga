// Classes
import { King } from "./classes/king.js";
import { Fighter } from "./classes/fighter.js";
import { Advisor } from "./classes/advisor.js";
import { Squire } from "./classes/squire.js";

// Data
import { characters } from "./data/characters.js";

export function createCharacters() {
  const charactersReady = [];

  characters.forEach((character) => {
    let name = character.name;

    if (character.role === "king") {
      name = new King(
        character.id,
        character.name,
        character.family,
        character.age,
        character.image,
        [character.yearsOfReign],
        (character.role = "king")
      );
      charactersReady.push(name);
    } else if (character.role === "fighter") {
      name = new Fighter(
        character.id,
        character.name,
        character.family,
        character.age,
        character.image,
        [character.dexterity, character.weapon]
      );
      charactersReady.push(name);
    } else if (character.role === "advisor") {
      name = new Advisor(
        character.id,
        character.name,
        character.family,
        character.age,
        character.image,
        [character.counseled]
      );
      charactersReady.push(name);
    } else if (character.role === "squire") {
      name = new Squire(
        character.id,
        character.name,
        character.family,
        character.age,
        character.image,
        [character.knight, character.brownNose]
      );
      charactersReady.push(name);
    }
  });
  return charactersReady;
}
