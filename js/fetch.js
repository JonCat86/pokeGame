export default async function fetchPokemons(pokenum) {
  const pokedata = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokenum}/`);
  const pokejson = await pokedata.json();
  return pokejson;
}
