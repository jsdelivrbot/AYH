export const createHeroes = (heroes, index) => {
  return `
    <div id="${index}" class="heroImg my-hero" onclick="getID(${heroes.id})">
			<img src="${heroes.images.md}" alt="${heroes.name}">
		</div>
  `
}