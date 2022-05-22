import { createCharacters } from "./createCharacters.js";
import { Card } from "./classes/card.js";

// CREATE CARD COGE DATOS DE CREATE CARACTERS Y, POR CADA UNO, CREA UN CARD

export function createCards() {
  const charactersReady = createCharacters();
  console.log("charactersReady:", charactersReady);

  const cards = [];

  charactersReady.forEach((character) => {
    // console.log(character.__proto__.constructor.name);

    let card = [];

    card = new Card(
      character.name,
      character.family,
      character.age,
      character.image,
      character.isAlive,
      character.metadata
    );

    cards.push(card);
  });
  cards.forEach((card) => {
    card.greet();
    console.log(card.name);
    console.log(card.family);
    // console.log(card.message); // TODO: Esto viene del proto
    // console.log(card.emoji); TODO: Esto viene del proto
    console.log(card.image);
  });
  return cards;
}
