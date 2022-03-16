import { typing } from './typing-effect.js'
import { glitch } from './glitch.js';
import { addListenerClickOpenCard, loadCard, openCard } from './cards.js';
import { renderPagination } from './main-slider.js'

window.onload = function() {
  // подгражю эффект печати
  typing('krike.xyz', document.querySelector('h1'), 250)
  glitch()
  // загружаю карточи
  loadCard()
  addListenerClickOpenCard(document.querySelectorAll('#open-card-link'))
  // scrollOnKeyDown()
  renderPagination()

  if(window.innerWidth < 768){
    let head = document.getElementsByTagName('head')[0];
    let script = document.createElement("script")
    script.src = "scripts/mobile-cards.js"
    script.type = "module"
    head.appendChild(script)
  }
}
