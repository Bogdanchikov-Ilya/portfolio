import { htmlCollection, selectedCardIndex, openCard } from "./cards.js";

const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')

function setDisabledNavigation(){
  (selectedCardIndex <= 0)
  ? prevBtn.disabled = true
  :prevBtn.disabled = false;

  (selectedCardIndex >= htmlCollection.length - 1)
  ? nextBtn.disabled = true
  :nextBtn.disabled = false;
}
// navigation
prevBtn.addEventListener('click', () => {
  const prevIndex = selectedCardIndex - 1
  openCard(htmlCollection[prevIndex], prevIndex)
})

nextBtn.addEventListener('click', () => {
  const nextIndex = selectedCardIndex + 1
  openCard(htmlCollection[nextIndex], nextIndex)
})

document.addEventListener('keydown',(e) => {
  if(selectedCardIndex !== null && selectedCardIndex !== undefined){
    if(e.keyCode === 37 || e.keyCode === 38){
      const prevIndex = selectedCardIndex - 1
      openCard(htmlCollection[prevIndex], prevIndex)
    }
    if(e.keyCode === 39 || e.keyCode === 40) {
      const nextIndex = selectedCardIndex + 1
      openCard(htmlCollection[nextIndex], nextIndex)
    }
  }
})

function renderPagination() {
  const paginationContainer = document.querySelector('.slider-pagination')
  paginationContainer.innerHTML = ''
  for (let i = 0; i < htmlCollection.length; i++) {
    (i === selectedCardIndex)
    ? paginationContainer.insertAdjacentHTML('beforeend', '<div class="active"></div>')
    : paginationContainer.insertAdjacentHTML('beforeend', '<div></div>')
  }
  // вешаю клик на каждый эелемент пагинации
  const paginationCollection = document.querySelector('.slider-pagination')
  Array.from(paginationCollection.children).forEach((child, index) => {
    child.addEventListener('click', () => {
      openCard(htmlCollection[index], index)
    })
  });
}

function scrollToActive() {
  const scrollContainer = document.querySelector('.container-open')
  htmlCollection[selectedCardIndex].parentNode.scrollTop = htmlCollection[selectedCardIndex].offsetTop - ((scrollContainer.scrollHeight + scrollContainer.scrollTop) / 4) / 1.5
}

export { setDisabledNavigation, renderPagination, scrollToActive }
