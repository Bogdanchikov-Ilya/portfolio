export function glitch() {
  let timeOn = 2250
  console.log(window.innerWidth)
  if(window.innerWidth <= 768) timeOn = 3200
  setTimeout(() => {
    document.querySelector('h1').classList.add('glitch');
  }, timeOn)
}

