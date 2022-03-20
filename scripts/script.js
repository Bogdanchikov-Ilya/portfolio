import { typing } from './typing-effect.js'
import { glitch } from './glitch.js';
import { addListenerClickOpenCard, loadCard } from './cards.js';

function checkWindowWidth() {
  if(window.innerWidth > 768){
    // загружаю карточи
    loadCard()
    addListenerClickOpenCard(document.querySelectorAll('#open-card-link'))

  } else if(window.innerWidth <= 768) {
    let head = document.getElementsByTagName('head')[0];
    let script = document.createElement("script")
    script.src = "scripts/mobile-cards.js"
    script.type = "module"
    head.appendChild(script)
  }
}

window.onload = function() {
  // подгражю эффект печати
  typing('krike.xyz', document.querySelector('.header__title'), 250)
  glitch()
  checkWindowWidth()
}
