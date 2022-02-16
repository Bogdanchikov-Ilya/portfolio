const data = [
  {
    title: 'Layout',
    descr: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    gitHub: 'https://github.com/',
    image: '../../assets/img/sliders/33333.png'
  },
  {
    title: 'Vue + Laravel',
    descr: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    gitHub: 'https://github.com/',
    image: '../../assets/img/sliders/33333.png'
  },
  {
    title: 'Admin - panel',
    descr: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    gitHub: 'https://github.com/',
    image: '../../assets/img/sliders/33333.png'
  },
  {
    title: 'Shop on Nuxt js',
    descr: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    gitHub: 'https://github.com/',
    image: '../../assets/img/sliders/33333.png'
  },
]
export function loadCard () {
  data.forEach((item, index) => {
    console.log(index)
    let htmlElem = `<div class="card"><span>${item.title}</span></div>`
    document.querySelector('.cards-container').insertAdjacentHTML('afterbegin', htmlElem)
  })
}

export function openCard() {
    const htmlCollection = document.querySelectorAll('.card')
    htmlCollection.forEach((item, index) => item.addEventListener('click', () =>{
      // block
      let infoBlock =
      `<div class="info-block">
        <h1>${data[index].title}</h1>
      </div>`;
      // ---------------------
      document.querySelector('.cards-container').classList.add('container-open')
      const block = document.querySelector('.info-block')
      if(block)
        block.remove()
      document.querySelector('.cards-wrapper').insertAdjacentHTML('afterbegin', infoBlock)
    }))
}
