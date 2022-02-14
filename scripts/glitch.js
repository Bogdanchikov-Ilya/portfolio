export function glitch() {
  let timeOn = 2250
  if(window.innerWidth <= 768) timeOn = 3200
  setTimeout(() => {
    document.querySelector('h1').classList.add('glitch');
  }, timeOn)
}

