import { King } from "./classes/king.js";
import { Fighter } from "./classes/fighter.js";
import { Advisor } from "./classes/advisor.js";
import { Squire } from "./classes/squire.js";
import { characters } from "./data/characters.js";

export function createCharacters() {
  const charactersReady = [];

  characters.forEach((character) => {
    let name = character.name;

    if (character.role === "king") {
      name = new King(
        character.name,
        character.family,
        character.age,
        character.image,
        {
          metadata: [{ "Years of reign": character.yearsOfReign }],
        }
      );
      // console.log(name);
      charactersReady.push(name);
    } else if (character.role === "fighter") {
      name = new Fighter(
        character.name,
        character.family,
        character.age,
        character.image,
        {
          metadata: [
            { Dexterity: character.dexterity },
            { Weapon: character.weapon },
          ],
        }
      );
      // console.log(name);
      charactersReady.push(name);
    } else if (character.role === "advisor") {
      name = new Advisor(
        character.name,
        character.family,
        character.age,
        character.image,
        {
          metadata: [{ counseled: character.counseled }],
        }
      );
      // console.log(name);
      charactersReady.push(name);
    } else if (character.role === "squire") {
      name = new Squire(
        character.name,
        character.family,
        character.age,
        character.image,
        {
          metadata: [
            { knight: character.knight },
            { "brown-nose": character.brownNose },
          ],
        }
      );
      // console.log(name);
      charactersReady.push(name);
    }
  });
  return charactersReady; // TODO: Pensar qué estoy haciendo. Saco lo mismo que tengo, pero en nuevos objetos que instancio.
}
