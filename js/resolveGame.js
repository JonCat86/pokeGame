export default async function resolveGame(pokemon) {
  const pokeName = pokemon.forms[0].name;
  document.addEventListener("click", (e) => {
    //click option
    if (e.target.matches(".list-options li")) {
      document.querySelector(".list-options").style.pointerEvents = "none";
      setTimeout(async () => {
        const data = await fetch(pokemon.species.url);
        const pdxData = await data.json();

        const pdx = document.querySelector(".pokedex-content");
        pdx.querySelector(".pdx-name").innerHTML = pokemon.forms[0].name;
        pdx.querySelector(".pdx-num").innerHTML = `Nº: ${pokemon.id}`;
        const badDescription = pdxData.flavor_text_entries[1].flavor_text;
        const goodDescription = badDescription.replace("", " ");
        pdx.querySelector(".pdx-description p").innerHTML = goodDescription;

        pdx.querySelector(".height").innerHTML = pokemon.height / 10 + " m";
        pdx.querySelector(".category").innerHTML = pdxData.genera[7].genus;
        pdx.querySelector(".weight").innerHTML = pokemon.weight / 10 + " kg";
        pdx.querySelector(".habitat").innerHTML = pdxData.habitat.name;

        pdx.querySelector(".pdx-type-items").innerHTML = "";
        pokemon.types.forEach((type) => {
          const typeItem = document.createElement("h3");
          typeItem.classList.add(type.type.name, "pdx-type-item");
          typeItem.innerHTML = type.type.name;
          pdx.querySelector(".pdx-type-items").appendChild(typeItem);
        });
        document
          .querySelector(`li[data-name='${pokeName}']`)
          .classList.add("correct");
      }, 1200);
      //if correct
      if (e.target.getAttribute("data-name") === pokeName) {
        e.target.classList.add("correct");
        //if wrong
      } else {
        e.target.classList.add("wrong");
      }
      setTimeout(() => {
        document.querySelector(".pokemon-img").classList.add("show");
      }, 480);
    }
  });
}
