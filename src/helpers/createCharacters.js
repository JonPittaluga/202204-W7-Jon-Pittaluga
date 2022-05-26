// Classes
import { King } from "../classes/typeClasses/king.js";
import { Fighter } from "../classes/typeClasses/fighter.js";
import { Advisor } from "../classes/typeClasses/advisor.js";
import { Squire } from "../classes/typeClasses/squire.js";

// Data
import { charactersData } from "../data/characters.js";

export function createCharacters() {
  const characters = [];

  charactersData.forEach((character) => {
    if (character.role === "king") {
      characters.push(
        new King(
          character.id,
          character.name,
          character.family,
          character.age,
          character.image,
          [character.yearsOfReign]
        )
      );
    } else if (character.role === "fighter") {
      characters.push(
        new Fighter(
          character.id,
          character.name,
          character.family,
          character.age,
          character.image,
          [character.dexterity, character.weapon]
        )
      );
    } else if (character.role === "advisor") {
      characters.push(
        new Advisor(
          character.id,
          character.name,
          character.family,
          character.age,
          character.image,
          [character.counseled]
        )
      );
    } else if (character.role === "squire") {
      characters.push(
        new Squire(
          character.id,
          character.name,
          character.family,
          character.age,
          character.image,
          [character.knight, character.brownNose]
        )
      );
    }
  });
  return characters;
}
