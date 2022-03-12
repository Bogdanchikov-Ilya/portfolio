let data;
let slidesHtmlCollection;
let paginationHtmlCollection;
let prevBtn;
let nextBtn;

let selectedImageIndex = 0;

let contentImages = `<div class="info-images"><div class="info-images-slider"></div></div>`
let sliderContainer;

function rerenderSlider() {

}

function prevSlide() {
  selectedImageIndex -= 1
  for(let i = 0; i < slidesHtmlCollection.length; i++) {
    if(slidesHtmlCollection[i].classList.contains('slide-active') && i !== selectedImageIndex){
      slidesHtmlCollection[i].classList.remove('slide-active')
      paginationHtmlCollection[i].classList.remove('active')
    } else if(i === selectedImageIndex) {
      slidesHtmlCollection[i].classList.add('slide-active')
      paginationHtmlCollection[i].classList.add('active')
    }
  }
}

function nextSlide() {
  selectedImageIndex += 1
  for(let i = 0; i < slidesHtmlCollection.length; i++) {
    if(slidesHtmlCollection[i].classList.contains('slide-active') && i !== selectedImageIndex){
      slidesHtmlCollection[i].classList.remove('slide-active')
      paginationHtmlCollection[i].classList.remove('active')
    } else if(i === selectedImageIndex) {
      slidesHtmlCollection[i].classList.add('slide-active')
      paginationHtmlCollection[i].classList.add('active')
    }
  }
}

function renderSlides() {
    if(document.querySelector('.info-images')) document.querySelector('.info-images').remove()
    document.querySelector('.content-text').insertAdjacentHTML('afterend', contentImages)
    data.forEach((item, imageIndex) => {
      (imageIndex === selectedImageIndex)
      ? document.querySelector('.info-images-slider').insertAdjacentHTML('beforeend', `<div class="slide slide-active"><img src="${document.location.href + item}"></div>`)
      : document.querySelector('.info-images-slider').insertAdjacentHTML('beforeend', `<div class="slide"><img src="${document.location.href + item}"></div>`)
    })
  slidesHtmlCollection = document.querySelectorAll('.slide')

}

function renderInfoNavigation() {
  let infoSliderNavigation = `<div class="slider-navigation info-slider-navigation"><button id="info-btn-prev">←</button><button id="info-btn-next">→</button></div>`
  sliderContainer.insertAdjacentHTML('beforeend', infoSliderNavigation)

  prevBtn = document.querySelector('#info-btn-prev')
  nextBtn = document.querySelector('#info-btn-next')


  prevBtn.addEventListener('click', prevSlide)
  nextBtn.addEventListener('click', nextSlide)
}

function renderInfoPagination () {
  if(document.querySelector('.info-slider-pagination')) document.querySelector('.info-slider-pagination').remove()
  let infoSliderPagination = `<div class="slider-pagination info-slider-pagination"></div>`
  sliderContainer.insertAdjacentHTML('beforeend', infoSliderPagination)
  console.log('after m')
  for (let i = 0; i < data.length; i++){
    (i === selectedImageIndex)
    ? document.querySelector('.info-slider-pagination').insertAdjacentHTML('beforeend', `<div class="active"></div>`)
    : document.querySelector('.info-slider-pagination').insertAdjacentHTML('beforeend', `<div></div>`)
  }
  paginationHtmlCollection = document.querySelector('.info-slider-pagination').getElementsByTagName('*')
}


function infoSliderInit(imagesArray) {
  data = imagesArray
  renderSlides()

  sliderContainer = document.querySelector('.info-images')
  renderInfoNavigation()
  renderInfoPagination()



}

export { infoSliderInit, renderSlides }
