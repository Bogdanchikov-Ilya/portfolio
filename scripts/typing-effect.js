function writeTextByJS(text, elem, speed){
  text = text.split("");
  let interval = setInterval(() => {
    if(!text.length) return clearInterval(interval);
    elem.innerHTML += text.shift();
  }, speed);

  return false;

}
writeTextByJS('portfolio', document.querySelector('h1'), 250)
