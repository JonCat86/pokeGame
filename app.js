import { pokemonChoice, pokemonOptions } from "./js/gameInit.js";
import GameContent from "./js/GameContent.js";
import PokedexContent from "./js/PokedexContent.js";
import resolveGame from "./js/resolveGame.js";

document.addEventListener("DOMContentLoaded", async () => {
  const pokenum = Math.floor(Math.random() * 151) + 1;
  let pokemon = await pokemonChoice(pokenum);
  let options = await pokemonOptions(pokenum);

  await GameContent(pokemon, options);
  await PokedexContent(pokemon);

  resolveGame(pokemon);

  document.addEventListener("click", (e) => {
    if (e.target.matches(".next-btn") || e.target.matches(".next-btn *")) {
      location.reload();
    }
  });
});
