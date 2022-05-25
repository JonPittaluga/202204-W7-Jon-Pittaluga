import { createCards } from "./createCard.js";

function main() {
  const cards = createCards();
  let cardBodyHTMLToInject = "";
  // let speakHTMLToInject = ""; // TODO: Remove if not used

  function injectCardHTML() {
    cards.forEach((card) => {
      let html = card.buildCardHTML();
      cardBodyHTMLToInject += html;
    });
  }

  injectCardHTML();
  document.querySelector(".characters-list").innerHTML = cardBodyHTMLToInject;

  const target = document.querySelectorAll(".card");

  target.forEach((item) =>
    item.addEventListener("click", (ev) => {
      handlerButtonClick(ev);
    })
  );

  const handlerButtonClick = (ev) => {
    let targetCard = ev.target.getAttribute("id"); // There's an id='${id}-kill' or id='${id}-speak' on every buttonb
    console.log(targetCard);
    let id = targetCard[0];
    targetCard = cards[id - 1];

    if (ev.target.textContent === "die") {
      document.getElementById(`${targetCard.character.id}`).innerHTML =
        targetCard.die();
    }

    // TODO: Refactor this code and isolate some code
    if (ev.target.textContent === "speak") {
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
