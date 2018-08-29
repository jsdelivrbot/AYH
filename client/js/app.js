import { createHeroes } from "./components/heroes-all.js"
import { heroModal } from "./components/hero-modal.js"

const getHeroes = "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json"
// Modal's element
const modal = document.getElementById('heroModal')
const buttonModal = document.getElementsByClassName("my-hero")
const closeModal = document.getElementsByClassName("close")[0]
// event for closing the modal
closeModal.onclick = () => modal.style.display = "none"
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}
// Fetch heroes' data
window.fetch(getHeroes)
  .then(res => res.json())
  .then(heroes => {
    console.log(heroes)
    const heroesAll = document.getElementById('heroes-all')
    heroesAll.innerHTML = heroes.map(createHeroes).join(' ')
    for (let i of buttonModal) { // on each hero's div :
      i.onclick = () => { // ad envent listener
        modal.style.display = "block"
        let heroId = i.getAttribute("id") // get hero id
        const insertHero = document.getElementById('heroDetail')
        insertHero.innerHTML = heroModal(heroes[heroId]) // insert hero info on modal content
      }
    }
  })
