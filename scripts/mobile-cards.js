import { data } from './cards.js'

let cardCollection;
const cardContainer = document.querySelector('.cards-wrapper')
const mediaBlock = document.querySelector('.media')

// добавляю блок с ссылками
document.querySelector('header').getElementsByClassName('container')[0].appendChild(mediaBlock)

// удаляю лишние обертки
while (cardContainer.firstChild){
  cardContainer.firstChild.remove()
}

// добавляю контейнер
let defaultContainer = document.createElement("div")
defaultContainer.className = 'container'
cardContainer.appendChild(defaultContainer)

data.forEach((item) => {
  let htmlElem = `<div class="card"><div class="front"><span>${item.title}</span></div><div class="back"><a href="${item.link}" target="_blank">Перейти</a><a href="${item.github}" target="_blank"><img src="https://img.icons8.com/ios-filled/30/ffffff/github-2.png"/>GitHub</a><div></div>`
  cardContainer.getElementsByClassName('container')[0].insertAdjacentHTML('beforeend', htmlElem)
})
cardCollection = document.querySelectorAll('.card')

cardCollection.forEach(item => {
  item.addEventListener('click', () => {
    // удаляю активные классы
    cardCollection.forEach((item) => {
      if(item.classList.contains('active')){
        item.classList.remove('active')
      }
    })
    item.classList.add('active')
  })
})
