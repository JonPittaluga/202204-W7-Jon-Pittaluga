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

  // console.log(cards);

  const target = document.querySelectorAll(".card");

  target.forEach((item) =>
    item.addEventListener("click", (ev) => {
      handlerButtonClick(ev);
    })
  );

  const handlerButtonClick = (ev) => {
    // every button stores an id='1-kill' or id='1-speak'
    let targetCard = ev.target.getAttribute("id");
    let id = targetCard[0];
    targetCard = cards[id - 1];

    if (ev.target.textContent === "die") {
      document.getElementById(`${targetCard.character.id}`).innerHTML =
        targetCard.die();
    }

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
