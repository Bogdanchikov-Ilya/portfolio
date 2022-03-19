import {  scrollToActiveVertical, showSlider } from './main-slider.js'
import { infoSliderInit } from './card-slider.js';
import data from '../assets/projects-data.js'

let htmlCollection,
  selectedCardIndex

let cardsContainer = document.querySelector('.cards-container')

function loadCard() {
  data.forEach((item) => {
    let htmlElem = `<div class="card"><div class="front"><span>${item.title}</span></div><div class="back"><span id="open-card-link">Подробнее</span><a href="${item.github}" target="_blank"><img src="https://img.icons8.com/ios-filled/30/ffffff/github-2.png"/>GitHub</a><div></div>`
    cardsContainer.insertAdjacentHTML('beforeend', htmlElem)
  })
  htmlCollection = document.querySelectorAll('.card')
}

function addCloseEvent() {
  // функции закрытия
  function close () {
    document.querySelector('.info-block').classList.add('close-animation')
    document.querySelector('.container-open').classList.add('default-transform')
    document.querySelector('.card-container-wrapper').classList.remove('open')
    document.querySelector('.cards-container').style = null;
    cardsContainer.classList.remove('container-open')
    setTimeout(() => {
      document.querySelector('.info-block').remove()
    }, 1000)
    // убираю активнй класс карточки
    htmlCollection.forEach(item => {
      item.classList.remove('card-active')
    })
    showSlider(false)
    document.removeEventListener('keydown', closeSliderOnKeyDown)
    selectedCardIndex = null
  }

  // вешаю события
  document.addEventListener('keydown', closeSliderOnKeyDown)
  document.querySelector('.close-btn').addEventListener('click', closeSliderOnClick)

  function closeSliderOnKeyDown(e){
    if(e.keyCode === 27){
      close()
    }
  }
  function closeSliderOnClick(e){
    close()
  }
}

function openCard(item, index){
  function addButtons() {
    // добавляю контейгер для кнопок
    document.querySelector('.info-content-wrapper').insertAdjacentHTML('beforeend', `<div class="info-media-btn"></div>`)
    // добавляю кнопки
    let buttonContainer = document.querySelector('.info-media-btn')
    if (data[index].link) {
      buttonContainer.insertAdjacentHTML('beforeend', `<div class="link-wrapper">
                         <a href="${data[index].link}" id="show-link" target="_blank">Посмотреть</a>
                       </div>`)
    }
    if (data[index].github) {
      buttonContainer.insertAdjacentHTML('beforeend', `<div class="link-wrapper">
                            <a href="${data[index].github}" id="github-project" target="_blank">Проект на GitHub</a>
                         </div>`)
    }
  }
  selectedCardIndex = index
  showSlider(true)
  htmlCollection.forEach(item => {
    item.classList.remove('card-active')
  })
  item.classList.add('card-active')
  document.querySelector('.card-container-wrapper').classList.add('open')
  cardsContainer.classList.remove('default-transform')

  // block
  let infoBlock =
    `<div class="info-block">
        <div class="close-btn">
          <span></span>
          <span></span>
        </div>
        <div class="info-content-wrapper">
          
        </div>
      </div>`;

  const textContent = `<div class="content-text">
            <h2 class="info-title">${data[index].title}</h2>
            <p class="info-description">${data[index].description}</p>
            <span class="info-skills">${data[index].skills}</span>
          </div>`

  // открываю карточку детально
  cardsContainer.classList.add('container-open')

  // добавляю блок с информацией о проекте
  const block = document.querySelector('.info-block')
  if (block) {
    block.remove()
    scrollToActiveVertical()
  } else {
    setTimeout(() => {
      scrollToActiveVertical()
    }, 1000)
  }
  document.querySelector('.cards-wrapper').insertAdjacentHTML('afterbegin', infoBlock)

  // вешаю фунцкию на кнопу закрытия
  addCloseEvent()

  // добавляю текст
  if (data[index].description) {
    document.querySelector('.info-content-wrapper').insertAdjacentHTML('beforeend', textContent)
  }

  // добавляю слайдер с картинкми
  if(data[index].images.length){
    infoSliderInit(data[index].images)
  }
  addButtons()
}

function addListenerClickOpenCard(collection) {
  collection.forEach((item, index) => item.addEventListener('click',() => {
    addListenerClickOpenCard(document.querySelectorAll('.front'))
    if(index !== selectedCardIndex){
      openCard(htmlCollection[index], index)
    }
  }))
}

export { loadCard, htmlCollection, selectedCardIndex, addListenerClickOpenCard, openCard }
