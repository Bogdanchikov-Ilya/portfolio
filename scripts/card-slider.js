import { data } from './cards.js';
let prevBtn;
let nextBtn;

let contentImages = `<div class="info-images"><div class="info-images-slider"></div></div>`
let sliderContainer;

function renderSlides(index) {
  if (data[index].images.length) {
    document.querySelector('.info-content-wrapper').insertAdjacentHTML('beforeend', contentImages)
    data[index].images.forEach((item) => {
      document.querySelector('.info-images-slider').insertAdjacentHTML('beforeend', `<div class="slide"><img src="${document.location.href + item}"></div>`)
    })
  }
}

function renderInfoNavigation() {
  let infoSliderNavigation = `<div class="slider-navigation info-slider-navigation"><button id="info-btn-prev">←</button><button id="info-btn-next">→</button></div>`
  sliderContainer.insertAdjacentHTML('beforeend', infoSliderNavigation)
}

function renderInfoPagination (index) {
  let infoSliderPagination = `<div class="slider-pagination info-slider-pagination"></div>`
  sliderContainer.insertAdjacentHTML('beforeend', infoSliderPagination)
  for (let i = 0; i < data[index].images.length; i++){
    document.querySelector('.info-slider-pagination').insertAdjacentHTML('beforeend', `<div></div>`)
  }
}

function infoSliderInit(index) {
  renderSlides(index)
  prevBtn = document.querySelector('#info-btn-prev')
  nextBtn = document.querySelector('#info-btn-next')

  sliderContainer = document.querySelector('.info-images')
  renderInfoNavigation()
  renderInfoPagination(index)
}

export { infoSliderInit, renderSlides }
