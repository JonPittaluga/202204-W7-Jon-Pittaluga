import { createCards } from "./helpers/createCards.js"; // Receives an array of characters and use the Card class and returns an array of objects.
import { renderCards } from "./helpers/renderCards.js"; // For HTML code injection at page load

function main() {
  const cards = createCards();

  let characterList = (document.querySelector(".characters-list").innerHTML =
    renderCards(cards));

  const targetCards = document.querySelectorAll(".card");

  targetCards.forEach((item) =>
    item.addEventListener("click", (ev) => {
      handlerButtonClick(ev);
    })
  );

  const handlerButtonClick = (ev) => {
    const targetId = ev.target.getAttribute("id")[0]; // There's an id='${id}-kill' or id='${id}-speak' on every buttonb. The id is the first character in the string
    const targetCard = cards[targetId - 1];

    if (ev.target.textContent === "die") {
      // changes the status and re-styles the component
      targetCard.die();
    }

    if (ev.target.textContent === "speak") {
      // builds an HTML code depending on which card has been clicked.
      document.querySelector(".comunications").innerHTML =
        targetCard.buildSpeakHTML();
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
