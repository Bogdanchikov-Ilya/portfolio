import {  renderPagination, scrollToActiveVertical, initPaginationNavigation } from './main-slider.js'
import { infoSliderInit } from './card-slider.js';
const data = [
  {
    title: 'Лендинг строительной компании',
    description: 'Простой лендинг сайта стриотленой компании.' +
      'Есть адаптив для планшетов и мобильных устройств. ' +
      'Использовал scss, разбил секции по scss компонентам. ' +
      'Использовал слайдер Swiper Slider',
    skills: 'SCSS, Swiper Slider',
    github: 'https://github.com/Bogdanchikov-Ilya/railway-construction',
    link: 'https://bogdanchikov-ilya.github.io/railway-construction',
    images: ['/assets/img/sliders/railway/img.png', '/assets/img/sliders/railway/img_1.png', '/assets/img/sliders/railway/img_2.png', '/assets/img/sliders/railway/img_1.png', '/assets/img/sliders/railway/img_1.png', '/assets/img/sliders/railway/img_1.png', '/assets/img/sliders/railway/img_1.png', '/assets/img/sliders/railway/img_1.png',]
  },
  {
    title: 'Vue + Laravel',
    description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    skills: 'SCSS, Swiper Slider',
    github: 'https://github.com/',
    link: 'https://bogdanchikov-ilya.github.io/railway-construction',
    images: ['/assets/img/sliders/33333.png', '/assets/img/sliders/33333.png', '/assets/img/sliders/33333.png']
  },
  {
    title: 'Admin - panel',
    description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    skills: 'SCSS, Swiper Slider',
    github: 'https://github.com/',
    link: 'https://bogdanchikov-ilya.github.io/railway-construction',
    images: ['/assets/img/sliders/33333.png', '/assets/img/sliders/33333.png', '/assets/img/sliders/33333.png']
  },
  {
    title: 'Shop on Nuxt js',
    description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    skills: 'SCSS, Swiper Slider',
    github: 'https://github.com/',
    link: 'https://bogdanchikov-ilya.github.io/railway-construction',
    images: ['/assets/img/sliders/33333.png', '/assets/img/sliders/33333.png', '/assets/img/sliders/33333.png']
  },
]

let htmlCollection;
let selectedCardIndex = null

function showSlider (status){

  if(status) {

    if(!document.querySelector('.main-slider-navigation') && !document.querySelector('.main-slider-pagination')){
      let elem = '<div class="slider-navigation main-slider-navigation">\n' +
        '      <button id="prev">↑</button>\n' +
        '      <button id="next">↓</button>\n' +
        '    </div>\n' +
        '    <div class="slider-pagination main-slider-pagination"></div>'
      document.querySelector('.cards-wrapper').insertAdjacentHTML('beforeend', elem)
      initPaginationNavigation()
      renderPagination()
    }
  }
  else{
    console.log('false sliders selected')
    document.querySelector('.main-slider-navigation').classList.add('close-animation')
    document.querySelector('.main-slider-pagination').classList.add('close-animation')
    setTimeout(() => {
      document.querySelector('.main-slider-navigation').classList.remove('close-animation')
      document.querySelector('.main-slider-pagination').classList.remove('close-animation')

      document.querySelector('.main-slider-navigation').remove()
      document.querySelector('.main-slider-pagination').remove()
    }, 850)
  }
}

function addCloseEvent() {
  // вешаю события
  document.addEventListener('keydown', closeSliderOnKeyDown)
  document.querySelector('.close-btn').addEventListener('click', closeSliderOnClick)
  // функции закрытия
  function close () {
    document.querySelector('.info-block').classList.add('close-animation')
    // закрываю блок
    document.querySelector('.container-open').classList.add('default-transform')
    document.querySelector('.container-open').style = null;
    document.querySelector('.card-container-wrapper').classList.remove('open')

    document.querySelector('.cards-container').classList.remove('container-open')
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
  function closeSliderOnKeyDown(e){
    if(e.keyCode === 27){
      close()
    }
  }
  function closeSliderOnClick(e){
    close()
  }
}

function loadCard() {
  data.forEach((item, index) => {
    let htmlElem = `<div class="card"><div class="front"><span>${item.title}</span></div><div class="back"><span id="open-card-link">Подробнее</span><a href="${item.github}" target="_blank"><img src="https://img.icons8.com/ios-filled/30/ffffff/github-2.png"/>GitHub</a><div></div>`
    document.querySelector('.cards-container').insertAdjacentHTML('beforeend', htmlElem)
  })
  htmlCollection = document.querySelectorAll('.card')
}

function openCard(item, index){
  function addButtons() {
    // добавляю контейнер для кнопок
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
  showSlider(true)
  selectedCardIndex = index
  renderPagination()
  htmlCollection.forEach(item => {
    item.classList.remove('card-active')
  })
  item.classList.add('card-active')
  document.querySelector('.card-container-wrapper').classList.add('open')
  document.querySelector('.cards-container').classList.remove('default-transform')

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
  document.querySelector('.cards-container').classList.add('container-open')

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

export { loadCard, htmlCollection, selectedCardIndex, addListenerClickOpenCard, openCard, data }
