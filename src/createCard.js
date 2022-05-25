import { createCharacters } from "./createCharacters.js";
import { Card } from "./classes/card.js";

// CREATE CARD COGE DATOS DE CREATE CARACTERS Y, POR CADA UNO, CREA UN CARD

export function createCards() {
  const charactersReady = createCharacters();
  // console.log("charactersReady:", charactersReady);

  const cards = [];

  charactersReady.forEach((character) => {
    // console.log(character.__proto__.constructor.name);

    let card = [];

    card = new Card(character);
    cards.push(card);
  });

  cards.forEach((card) => {
    // console.log("card", card.character);
    console.log("card.id", card.character.id);
  });
  return cards;
}
