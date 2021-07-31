export default function PokedexContent() {
  const pokedex = document.createElement("div");
  pokedex.classList.add("pokedex-content");
  pokedex.innerHTML = `
<div class="pdx-name">???</div>
<div class="pdx-num">Nº: ???</div>
<div class="pdx-description">
<h3>Description:</h3>
<p>???</p>
</div>
<div class="pdx-char-box">
  <div class="char-box-item">
    <span class="char-box-item-title">Height</span>
    <span class="char-box-item-text height">???</span>
  </div>
  <div class="char-box-item">
    <span class="char-box-item-title">Category</span>
    <span class="char-box-item-text category">???</span>
  </div>
  <div class="char-box-item">
    <span class="char-box-item-title">Weight</span>
    <span class="char-box-item-text weight">???</span>
  </div>
  <div class="char-box-item">
    <span class="char-box-item-title">Habitat</span>
    <span class="char-box-item-text habitat">???</span>
  </div>
</div>
<div class="pdx-type-box">
  <h3>Type:</h3>
  <div class="pdx-type-items">
  <h3>???</h3>
  </div>
  </div>
  `;
  document.querySelector("main").appendChild(pokedex);
}

{
  /* <div class="pdx-type-item">Electric</div> */
}
