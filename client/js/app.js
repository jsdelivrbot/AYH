import { createHeroes } from "./components/heroes-all.js"
const getHeroes = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.2.0/api/all.json"

window.fetch(getHeroes)
.then(res => res.json())
.then(heroes => {
  console.log(heroes)
  const heroesAll = document.getElementById('heroes-all')
  heroesAll.innerHTML = heroes.map(createHeroes).join(' ')
})