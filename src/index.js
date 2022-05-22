import { createCards } from "./createCard.js";

function main() {
  const cards = createCards();
  // const card = document.querySelector(".card");
  // console.log(cards);
  // console.dir(card);
  console.log(cards[0].buildHTML());
}

(() => {
  document.addEventListener("DOMContentLoaded", main);
})();
