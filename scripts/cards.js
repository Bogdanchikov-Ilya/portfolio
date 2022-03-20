import {  scrollToActiveVertical, showSlider } from './main-slider.js'
import { infoSliderInit } from './card-slider.js';
import data from '../assets/projects-data.js'

let htmlCollection,
  selectedCardIndex

let cardsContainer = document.querySelector('.cards__list')

function loadCard() {
  data.forEach((item) => {
    let htmlElem = `<div class="card"><div class="front-card"><span>${item.title}</span></div><div class="back-card"><span id="card-open__link">Подробнее</span><a href="${item.github}" target="_blank"><img src="https://img.icons8.com/ios-filled/30/ffffff/github-2.png"/>GitHub</a><div></div>`
    cardsContainer.insertAdjacentHTML('beforeend', htmlElem)
  })
  htmlCollection = document.querySelectorAll('.card')
}

function addCloseEvent() {
  // функции закрытия
  function close () {
    document.querySelector('.content').classList.add('close-animation')
    document.querySelector('.cards__list').classList.add('default-transform')
    document.querySelector('.cards__inner').classList.remove('cards__inner_open')
    document.querySelector('.cards__list').style = null;
    cardsContainer.classList.remove('cards__list_open')
    setTimeout(() => {
      document.querySelector('.content').remove()
    }, 1000)
    // убираю активнй класс карточки
    htmlCollection.forEach(item => {
      item.classList.remove('card_active')
    })
    showSlider(false)
    document.removeEventListener('keydown', closeSliderOnKeyDown)
    document.querySelector('.header__title').removeEventListener('click', close)
    selectedCardIndex = null
  }

  function closeSliderOnKeyDown(e){
    if(e.keyCode === 27){
      close()
    }
  }
  function closeSliderOnClick(e){
    close()
  }

  // вешаю события
  document.addEventListener('keydown', closeSliderOnKeyDown)
  document.querySelector('.content-close__button').addEventListener('click', closeSliderOnClick)
  document.querySelector('.header__title').addEventListener('click', close)
}

function openCard(item, index){
  function addButtons() {
    // добавляю контейгер для кнопок
    document.querySelector('.content__inner').insertAdjacentHTML('beforeend', `<div class="content__links"></div>`)
    // добавляю кнопки
    let buttonContainer = document.querySelector('.content__links')
    if (data[index].link) {
      buttonContainer.insertAdjacentHTML('beforeend', `<div class="links__item media__item">
                         <a href="${data[index].link}" id="show-link" target="_blank">Посмотреть</a>
                       </div>`)
    }
    if (data[index].github) {
      buttonContainer.insertAdjacentHTML('beforeend', `<div class="links__item media__item">
                            <a href="${data[index].github}" id="github-project" target="_blank">Проект на GitHub</a>
                         </div>`)
    }
  }
  selectedCardIndex = index
  showSlider(true)
  htmlCollection.forEach(item => {
    item.classList.remove('card_active')
  })
  item.classList.add('card_active')
  document.querySelector('.cards__inner').classList.add('cards__inner_open')
  cardsContainer.classList.remove('default-transform')

  // block
  let infoBlock =
    `<div class="content">
        <div class="content-close__button">
          <span></span>
          <span></span>
        </div>
        <div class="content__inner">
          
        </div>
      </div>`;

  const textContent = `<div class="content__text">
            <h2 class="content__title">${data[index].title}</h2>
            <p class="content__description">${data[index].description}</p>
            <span class="content__skills">${data[index].skills}</span>
          </div>`

  // открываю карточку детально
  cardsContainer.classList.add('cards__list_open')

  // добавляю блок с информацией о проекте
  const block = document.querySelector('.content')
  if (block) {
    block.remove()
    scrollToActiveVertical()
  } else {
    setTimeout(() => {
      scrollToActiveVertical()
    }, 1000)
  }
  document.querySelector('.cards').insertAdjacentHTML('afterbegin', infoBlock)

  // вешаю фунцкию на кнопу закрытия
  addCloseEvent()

  // добавляю текст
  if (data[index].description) {
    document.querySelector('.content__inner').insertAdjacentHTML('beforeend', textContent)
  }

  // добавляю слайдер с картинкми
  if(data[index].images.length){
    infoSliderInit(data[index].images)
  }
  addButtons()
}

function addListenerClickOpenCard(collection) {
  collection.forEach((item, index) => item.addEventListener('click',() => {
    addListenerClickOpenCard(document.querySelectorAll('.front-card'))
    if(index !== selectedCardIndex){
      openCard(htmlCollection[index], index)
    }
  }))
}

export { loadCard, htmlCollection, selectedCardIndex, addListenerClickOpenCard, openCard }
