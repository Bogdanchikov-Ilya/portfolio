import data from '../assets/projects-data.js'

let cardCollection;
const cardContainer = document.querySelector('.cards')

// удаляю лишние обертки
while (cardContainer.firstChild){
  cardContainer.firstChild.remove()
}

// добавляю контейнер
let defaultContainer = document.createElement("div")
defaultContainer.className = 'container'
cardContainer.appendChild(defaultContainer)

data.forEach((item) => {
  let htmlElem = `<div class="card"><div class="front-card"><span>${item.title}</span></div><div class="back-card"><a href="${item.link}" target="_blank">Перейти</a><a href="${item.github}" target="_blank"><img src="https://img.icons8.com/ios-filled/30/ffffff/github-2.png"/>GitHub</a><div></div>`
  cardContainer.getElementsByClassName('container')[0].insertAdjacentHTML('beforeend', htmlElem)
})
cardCollection = document.querySelectorAll('.card')

function deleteActive() {
  cardCollection.forEach((item) => {
    if(item.classList.contains('active')){
      item.classList.remove('active')
    }
  })
}

cardCollection.forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('canvas').addEventListener('click', deleteActive)
    document.querySelector('.header__title').addEventListener('click', deleteActive)
    // удаляю активные классы
    deleteActive()
    item.classList.add('active')
  })
})
