export function glitch() {
  setTimeout(() => {
    document.querySelector('h1').classList.add('glitch');
  }, 2000)
}

