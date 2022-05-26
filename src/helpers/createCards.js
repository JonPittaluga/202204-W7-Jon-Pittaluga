import { createCharacters } from "./createCharacters.js";
import { Card } from "../classes/card.js";

// CREATE CARD COGE DATOS DE CREATE CARACTERS Y, POR CADA UNO, CREA UN CARD

export function createCards() {
  const characters = createCharacters();

  const cards = [];

  characters.forEach((character) => {
    cards.push(new Card(character));
  });

  return cards;
}
