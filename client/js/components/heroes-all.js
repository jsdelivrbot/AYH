const heroesAll = (hero) => {
  return `
    <div id="${hero.id}" class="heroeImg">
			<img src="${hero.images.md}" alt="${hero.images.name}">
		</div>
  `
}