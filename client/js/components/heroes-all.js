export const createHeroes = (heroes) => {
  return `
    <div id="${heroes.id}" class="heroImg my-hero">
			<img src="${heroes.images.md}" alt="${heroes.name}">
		</div>
  `
}