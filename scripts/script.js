import { typing } from './typing-effect.js'
import { glitch } from './glitch.js';
import { addListenerClickOpenCard, loadCard, openCard } from './cards.js';
import { renderPagination } from './main-slider.js'
window.onload = function() {
  // подгражю эффект печати
  typing('portfolio', document.querySelector('h1'), 250)
  glitch()
  // загружаю карточи
  loadCard()
  addListenerClickOpenCard(document.querySelectorAll('#open-card-link'))
  // scrollOnKeyDown()
  renderPagination()
}
