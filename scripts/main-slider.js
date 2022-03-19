import { htmlCollection, selectedCardIndex, openCard } from "./cards.js";


let nextBtn,
  prevBtn,
  mainSliderPagination,
  mainSliderNavigation

function setDisabledNavigation(index, prevBtn, nextBtn, collection){
  (index <= 0)
  ? prevBtn.disabled = true
  :prevBtn.disabled = false;

  (index >= collection.length - 1)
  ? nextBtn.disabled = true
  :nextBtn.disabled = false;
}

function renderNavigationEvents() {
  prevBtn = document.querySelector('#prev')
  nextBtn = document.querySelector('#next')
  // navigation functions
  prevBtn.addEventListener('click', () => {
    const prevIndex = selectedCardIndex - 1
    openCard(htmlCollection[prevIndex], prevIndex)
  })

  nextBtn.addEventListener('click', () => {
    const nextIndex = selectedCardIndex + 1
    openCard(htmlCollection[nextIndex], nextIndex)
  })
}

document.addEventListener('keydown',(e) => {
  if(selectedCardIndex !== null && selectedCardIndex !== undefined){
    if(e.keyCode === 37 & selectedCardIndex !== 0 || e.keyCode === 38 & selectedCardIndex !== 0) {
      const prevIndex = selectedCardIndex - 1
      openCard(htmlCollection[prevIndex], prevIndex)
    }
    if(e.keyCode === 39 & selectedCardIndex + 1 < htmlCollection.length || e.keyCode === 40 & selectedCardIndex + 1 < htmlCollection.length) {
      const nextIndex = selectedCardIndex + 1
      openCard(htmlCollection[nextIndex], nextIndex)
    }
  }
})

function renderPagination() {
  setDisabledNavigation(selectedCardIndex, prevBtn, nextBtn, htmlCollection)
  const paginationContainer = document.querySelector('.main-slider-pagination')
  paginationContainer.innerHTML = ''
  for (let i = 0; i < htmlCollection.length; i++) {
    (i === selectedCardIndex)
    ? paginationContainer.insertAdjacentHTML('beforeend', '<div class="active"></div>')
    : paginationContainer.insertAdjacentHTML('beforeend', '<div></div>')
  }
  // вешаю клик на каждый эелемент пагинации
  const paginationCollection = document.querySelector('.main-slider-pagination')
  Array.from(paginationCollection.children).forEach((child, index) => {
    child.addEventListener('click', () => {
      openCard(htmlCollection[index], index)
    })
  });
}

function scrollToActiveVertical() {
  const scrollContainer = document.querySelector('.container-open')
  let scrollValue = document.querySelector('.card-active').offsetHeight * selectedCardIndex
  scrollContainer.style.transform = `rotate(0) translate3d(0px, -${scrollValue}px, 0px)`
}

function showSlider(status) {
  mainSliderNavigation = document.querySelector('.main-slider-navigation')
  mainSliderPagination = document.querySelector('.main-slider-pagination')
  if(status) {
    if(!mainSliderNavigation && !mainSliderPagination){
      let mainSliderNavigation = '<div class="slider-navigation main-slider-navigation">\n' +
        '      <button id="prev">↑</button>\n' +
        '      <button id="next">↓</button>\n' +
        '    </div>\n'
      let mainSliderPagination = `<div class="slider-pagination main-slider-pagination"></div>`
      document.querySelector('.cards-wrapper').insertAdjacentHTML('beforeend', mainSliderNavigation)
      document.querySelector('.cards-wrapper').insertAdjacentHTML('beforeend', mainSliderPagination)
      renderNavigationEvents()
    }
    renderPagination()
  } else{
    mainSliderNavigation.classList.add('close-animation')
    mainSliderPagination.classList.add('close-animation')
    setTimeout(() => {
      mainSliderNavigation.classList.remove('close-animation')
      mainSliderPagination.classList.remove('close-animation')

      mainSliderNavigation.remove()
      mainSliderPagination.remove()
    }, 850)
  }
}

export { setDisabledNavigation, scrollToActiveVertical, showSlider }
