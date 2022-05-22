export class Card {
  constructor(name, family, role, age, isAlive, image, metadata) {
    this.name = name;
    this.family = family;
    this.role = role;
    this.age = age;
    this.image = image;
    this.isAlive = isAlive;
    this.metadata = metadata;
  }
  // message = "Strike first, then ask questions";
  // emoji = "🗡";
  greet() {
    console.log(`This is ${this.name}`); // TODO: message access
  }

  // TODO: Añadir la familia en el alt
  buildHTML() {
    return `
      <div class="card character__card">
        <img
          src="${this.image}"
          alt="${this.name} ${this.family}"
          class="character__picture card-img-top"
        />
        <div class="card-body">
          <h2 class="character__name card-title h4">${this.name} ${this.family}</h2>
          <div class="character__info">
            <ul class="list-unstyled">
              <li>Age: ${this.age} years old</li>
              <li>
                Status:
                <i class="fas fa-thumbs-down"></i>
                <i class="fas fa-thumbs-up"></i>
              </li>
            </ul>
          </div>
          <div class="character__overlay">
            <ul class="list-unstyled">
            ${this.age}
              <li>Años de reinado: X</li>
              <li>Arma: XXX</li>
              <li>Destreza: X</li>
              <li>Peloteo: X</li>
              <li>Asesora a: X</li>
              <li>Sirve a: X</li>
            </ul>
            <div class="character__actions">
              <button class="character__action btn">habla</button>
              <button class="character__action btn">muere</button>
            </div>
          </div>
        </div>
        <i class="emoji"></i>
      </div>
    `;
  }
}
// El card tiene que tener el template de html
