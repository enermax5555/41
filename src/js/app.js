import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
	fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
	.then(r => r.json())
	.then(r => {
		let result = r.results;
		result.forEach(pokemons => {
			let list = document.createElement('li');
			list.innerText = pokemons.name;
			ul.appendChild(list);
		})
	})
});
