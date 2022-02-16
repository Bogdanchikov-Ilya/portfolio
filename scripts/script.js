import { typing } from './typing-effect.js'
import { glitch } from './glitch.js';
import { loadCard, openCard } from './cards.js';

window.onload = function() {
  typing('portfolio', document.querySelector('h1'), 250)
  glitch()
  loadCard()
  openCard()
}
