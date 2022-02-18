const data = [
  {
    title: 'Лендинг строительной компании',
    description: 'Простой лендинг сайта стриотленой компании.' +
      'Есть адаптив для планшетов и мобильных устройств. ' +
      'Использовал scss, разбил секции по scss компонентам. ' +
      'Использовал слайдер Swiper Slider',
    skills: 'SCSS, Swiper Slider',
    gitHub: 'https://github.com/Bogdanchikov-Ilya/railway-construction',
    link: 'https://bogdanchikov-ilya.github.io/railway-construction',
    image: '../../assets/img/sliders/33333.png'
  },
  {
    title: 'Vue + Laravel',
    description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    gitHub: 'https://github.com/',
    image: '../../assets/img/sliders/33333.png'
  },
  {
    title: 'Admin - panel',
    description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    gitHub: 'https://github.com/',
    image: '../../assets/img/sliders/33333.png'
  },
  {
    title: 'Shop on Nuxt js',
    description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    gitHub: 'https://github.com/',
    image: '../../assets/img/sliders/33333.png'
  },
]

function addCloseEvent () {
  document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.cards-container').classList.remove('container-open')
    document.querySelector('.info-block').remove()
  })
}
export function loadCard () {
  data.forEach((item, index) => {
    let htmlElem = `<div class="card"><span>${item.title}</span></div>`
    document.querySelector('.cards-container').insertAdjacentHTML('beforeend', htmlElem)
  })
}

export function openCard() {
    const htmlCollection = document.querySelectorAll('.card')
    htmlCollection.forEach((item, index) => item.addEventListener('click', () =>{
      // block
      let infoBlock =
      `<div class="info-block">
        <div class="close-btn">
          <span></span>
          <span></span>
        </div>
        <div class="info-content-wrapper">
          <h2 class="info-title">${data[index].title}</h2>
          <p class="info-description">${data[index].description}</p>
          <span class="info-skills">${data[index].skills}</span>
          <div class="info-media">
            <div class="link-wrapper">
              <a href="https://github.com/Bogdanchikov-Ilya" id="github" target="_blank">Просмотреть</a>
            </div>
            <div class="link-wrapper">
              <a href="https://github.com/Bogdanchikov-Ilya" id="github" target="_blank">Проект на GitHub</a>
            </div>
          </div>
        </div>
      </div>`;
      // ---------------------
      document.querySelector('.cards-container').classList.add('container-open')
      const block = document.querySelector('.info-block')
      if(block)
        block.remove()
      document.querySelector('.cards-wrapper').insertAdjacentHTML('afterbegin', infoBlock)

      // delete button function
      addCloseEvent()
    }))
}
