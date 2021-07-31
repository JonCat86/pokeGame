export default function GameContent(pokemon, options) {
  const gameBox = document.createElement("div");
  gameBox.classList.add("game-content");
  gameBox.innerHTML = `
  <div class="unknown-pokemon">
  <img class="pokemon-img" src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.forms[0].name}">
  </div>
  <div class="game-options">
  <ul class="list-options">
    <li data-name="${options[0]}">${options[0]}</li>
    <li data-name="${options[1]}">${options[1]}</li>
    <li data-name="${options[2]}">${options[2]}</li>
    <li data-name="${options[3]}">${options[3]}</li>
    <li data-name="${options[4]}">${options[4]}</li>
  </ul>
  </div>
  <button class="next-btn">next <i class="fas fa-caret-right"></i></button>
  `;
  document.querySelector("main").appendChild(gameBox);
}
