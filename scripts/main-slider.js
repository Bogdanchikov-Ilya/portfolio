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

prevBtn.addEventListener('click', () => {
  const prevIndex = selectedCardIndex - 1
  openCard(htmlCollection[prevIndex], prevIndex)
})

nextBtn.addEventListener('click', () => {
  const nextIndex = selectedCardIndex + 1
  openCard(htmlCollection[nextIndex], nextIndex)
})

function renderPagination() {
  console.log(htmlCollection.length)
  const paginationContainer = document.querySelector('.slider-pagination')
  paginationContainer.innerHTML = ''
  for (let i = 0; i < htmlCollection.length; i++) {
    (i === selectedCardIndex)
    ? paginationContainer.insertAdjacentHTML('beforeend', '<div class="active"></div>')
    : paginationContainer.insertAdjacentHTML('beforeend', '<div></div>')

  }
}

function scrollToActive() {
  const scrollContainer = document.querySelector('.container-open')
  htmlCollection[selectedCardIndex].parentNode.scrollTop = htmlCollection[selectedCardIndex].offsetTop - ((scrollContainer.scrollHeight + scrollContainer.scrollTop) / 4) / 1.5
}

export { setDisabledNavigation, renderPagination, scrollToActive }
