import fetchPokemons from "./fetch.js";

const getRandomNum = () => {
  return Math.floor(Math.random() * 151) + 1;
};

export async function pokemonChoice(pokenum) {
  const pokemon = await fetchPokemons(pokenum);
  return pokemon;
}

export async function pokemonOptions(pokenum) {
  const options = [];

  const numToName = async (num) => {
    const res = await fetchPokemons(num);
    const name = res.forms[0].name;
    return name;
  };

  options.push(await numToName(pokenum));

  while (options.length < 5) {
    let option = await numToName(getRandomNum());
    if (!options.includes(option)) options.push(option);
  }
  const optionsShuffled = [];

  for (let i = 0; i < 5; i++) {
    const num = Math.floor(Math.random() * options.length);
    optionsShuffled.push(options[num]);
    options.splice(num, 1);
  }

  return optionsShuffled;
}
