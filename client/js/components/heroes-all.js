export const createHeroes = (heroes) => {
  return `
    <div id="${heroes.id}" class="heroImg">
			<img src="${heroes.images.md}" alt="${heroes.images.name}">
		</div>
  `
}