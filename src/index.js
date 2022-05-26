import { createCards } from "./helpers/createCards.js"; // Receives an array of characters and use the Card class and returns an array of objects.
import { renderCards } from "./helpers/renderCards.js";

function main() {
  const cards = createCards();

  document.querySelector(".characters-list").innerHTML = renderCards(cards);

  const targetCards = document.querySelectorAll(".card");

  targetCards.forEach((item) =>
    item.addEventListener("click", (ev) => {
      handlerButtonClick(ev);
    })
  );

  const handlerButtonClick = (ev) => {
    let targetId = ev.target.getAttribute("id")[0]; // There's an id='${id}-kill' or id='${id}-speak' on every buttonb. The id is the first character in the string
    let targetCard = cards[targetId - 1];

    let targetStatus = ev.innerHTML; // There's an id='${id}-kill' or id='${id}-speak' on every buttonb. The id is the first character in the string
    if (ev.target.textContent === "die") {
      targetCard.die(); // changes the status
    }

    if (ev.target.textContent === "speak") {
      document.querySelector(".comunications").innerHTML =
        targetCard.buildSpeakHTML(); // buildSpeakHTML is a Card class method.
      document.querySelector(".comunications").classList.add("on");

      setTimeout(() => {
        document.querySelector(".comunications").classList.remove("on");
      }, 2500);
    }
  };
}

(() => {
  document.addEventListener("DOMContentLoaded", main);
})();
