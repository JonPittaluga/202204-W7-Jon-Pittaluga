export function renderCards(cards) {
  let cardBodyHTMLToInject = "";
  cards.forEach((card) => {
    let html = card.buildCardHTML(); // Card method, returns an HTML template
    cardBodyHTMLToInject += html;
  });
  return cardBodyHTMLToInject;
}
