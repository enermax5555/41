import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
	fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
	.then(r => r.json())
	.then(r => {
		pokemons.forEach(pokemon => {
			let list = document.createElement('li');
			list.innerText = pokemon.name;
			ul.appendChild(list);
		})
	})
});
