// Classes
import { King } from "./typeClasses/king.js";
import { Fighter } from "./typeClasses/fighter.js";
import { Squire } from "./typeClasses/squire.js";
import { Advisor } from "./typeClasses/advisor.js";

export class Card {
  constructor(character) {
    this.character = character;
  }

  // Used to handle dynamic rendering when building the HTML template
  getMetadataHTML() {
    let metadata = ``;

    if (this.character instanceof Fighter) {
      metadata = `      
      <ul class="list-unstyled">
        <li> Dexterity: ${this.character.metadata[0]}</li>
        <li> Weapon: ${this.character.metadata[1]}</li>
      </ul>`;
    } else if (this.character instanceof King) {
      metadata = `      
      <ul class="list-unstyled">
        <li> Years of reign: ${this.character.metadata[0]}</li>      
      </ul>`;
    } else if (this.character instanceof Advisor) {
      metadata = `      
      <ul class="list-unstyled">
        <li> Counseled: ${this.character.metadata[0]}</li>      
      </ul>`;
    } else if (this.character instanceof Squire) {
      metadata = `      
      <ul class="list-unstyled">
        <li> Knight: ${this.character.metadata[0]}</li>      
        <li> Brown nose: ${this.character.metadata[1]}</li>      
      </ul>`;
    }
    return metadata;
  }

  buildCardHTML() {
    let html = `
    <li class="character col" id="${this.character.id}">
      <div class="card character__card">
        <img 
          src="${this.character.image}"
          alt="${this.character.name} ${this.character.family}"
          class="character__picture card-img-top"
        />
        <div class="card-body">
          <h2 class="character__name card-title h4">${this.character.name} ${
      this.character.family
    }</h2>
          <div class="character__info">
            <ul class="list-unstyled">
              <li>Age: ${this.character.age} years old</li>
              <li class="emoji">${this.character.emoji}</li>
              <li id="${this.character.id}-status">
                Status:
                ${
                  this.character.isAlive === true
                    ? '<i class="fas fa-thumbs-up"></i>'
                    : '<i class="fas fa-thumbs-down"></i>'
                }
              </li>
            </ul>
          </div>
          <div class="character__overlay">`;

    const metadataHTML = this.getMetadataHTML();

    const htmlPart2 = `
            <div class="character__actions">
              <button class="character__action btn speak" id="${this.character.id}-speak">speak</button>
              <button class="character__action btn kill" id="${this.character.id}-kill">die</button>
            </div>
          </div>
        </div>
        <i class="emoji"></i>
      </div>
    </li>
    `;

    html = html + metadataHTML + htmlPart2;
    return html;
  }

  die() {
    this.character.isAlive = false;
    const status = document.getElementById(`${this.character.id}-status`)
      .children[0];
    status.classList.remove("fa-thumbs-up");
    status.classList.add("fa-thumbs-down");
    const image = document.querySelectorAll(".card img")[this.character.id - 1];
    console.log(image);
    image.style = "transform: rotate(180deg)";
  }

  buildSpeakHTML() {
    const html = `    
      <p class="comunications__text display-1">${this.character.message}</p>
      <img
        class="comunications__picture"
        src="${this.character.image}"
        alt="${this.character.name} ${this.character.family}"
      />
    `;

    return html;
  }
}
