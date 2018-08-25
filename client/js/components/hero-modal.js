export const heroModal = (hero) => {
  return `
    <div class="myhero-info">
      <div class="myhero-img">
        <img src="${heroes.images.lg}" alt="${heroes.name}">
      </div>
      <div class="myhero-text">
        <h2>${hero.name}</h2>
        <p>Hello! I'm ${hero.biography.fullName
}, known as ${hero.name}. I'm a ${hero.appearance.race} ${hero.appearance.gender} born in ${hero.biography.placeOfBirth}. I'm ${hero.appearance.height[1]} tall and I weight ${hero.appearance.weight[1]}. I got ${hero.appearance.eyeColor} eyes and ${hero.appearance.hairColor} hair. I'm living as a ${hero.work.occupation}. J'ai fait ma première apparition dans ${hero.biography.firstAppearance}</p>
      </div>
    </div>
  `
}