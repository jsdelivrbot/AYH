import { createHeroes } from "./components/heroes-all.js"
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
})
.then(() => { // add event on all heroes
  for (let i of buttonModal) {
    i.onclick = () => modal.style.display = "block"
  }
})
