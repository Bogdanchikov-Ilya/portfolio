import {setDisabledNavigation, renderPagination, scrollToActive} from './main-slider.js'

const data = [
  {
    title: 'Лендинг строительной компании',
    description: 'Простой лендинг сайта стриотленой компании.' +
      'Есть адаптив для планшетов и мобильных устройств. ' +
      'Использовал scss, разбил секции по scss компонентам. ' +
      'Использовал слайдер Swiper Slider',
    skills: 'SCSS, Swiper Slider',
    github: 'https://github.com/Bogdanchikov-Ilya/railway-construction',
    link: 'https://bogdanchikov-ilya.github.io/railway-construction',
    images: ['../../assets/img/sliders/33333.png', '../../assets/img/sliders/33333.png', '../../assets/img/sliders/33333.png']
  },
  {
    title: 'Vue + Laravel',
    description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    skills: 'SCSS, Swiper Slider',
    github: 'https://github.com/',
    link: 'https://bogdanchikov-ilya.github.io/railway-construction',
    images: ['../../assets/img/sliders/33333.png', '../../assets/img/sliders/33333.png', '../../assets/img/sliders/33333.png']
  },
  {
    title: 'Admin - panel',
    description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    skills: 'SCSS, Swiper Slider',
    github: 'https://github.com/',
    link: 'https://bogdanchikov-ilya.github.io/railway-construction',
    images: ['../../assets/img/sliders/33333.png', '../../assets/img/sliders/33333.png', '../../assets/img/sliders/33333.png']
  },
  {
    title: 'Shop on Nuxt js',
    description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    skills: 'SCSS, Swiper Slider',
    github: 'https://github.com/',
    link: 'https://bogdanchikov-ilya.github.io/railway-construction',
    images: ['../../assets/img/sliders/33333.png', '../../assets/img/sliders/33333.png', '../../assets/img/sliders/33333.png']
  },
]

let htmlCollection;
let selectedCardIndex = 0;

function addCloseEvent() {
  document.querySelector('.close-btn').addEventListener('click', () => {
    // закрываю блок
    document.querySelector('.cards-container').classList.remove('container-open')
    document.querySelector('.info-block').remove()
    // убираю активнй класс карточки
    htmlCollection.forEach(item => {
      item.classList.remove('card-active')
    })
  })
}

function loadCard() {
  data.forEach((item, index) => {
    let htmlElem = `<div class="card"><span>${item.title}</span></div>`
    document.querySelector('.cards-container').insertAdjacentHTML('beforeend', htmlElem)
  })
  htmlCollection = document.querySelectorAll('.card')
}

function openCard(item, index){
  selectedCardIndex = index
  setDisabledNavigation()
  renderPagination()
  htmlCollection.forEach(item => {
    item.classList.remove('card-active')
  })
  item.classList.add('card-active')
  // block
  let infoBlock =
    `<div class="info-block">
        <div class="close-btn">
          <span></span>
          <span></span>
        </div>
        <div class="info-content-wrapper">
          
        </div>
      </div>`;

  const textContent = `<div class="content-text">
            <h2 class="info-title">${data[index].title}</h2>
            <p class="info-description">${data[index].description}</p>
            <span class="info-skills">${data[index].skills}</span>
          </div>`

  let contentImages = `<div class="info-images"></div>`

  const contentMedia = `<div class="info-media"></div>`

  // открываю карточку детально
  document.querySelector('.cards-container').classList.add('container-open')

  // добавляю блок с информацией о проекте
  const block = document.querySelector('.info-block')
  if (block)
    block.remove()
  document.querySelector('.cards-wrapper').insertAdjacentHTML('afterbegin', infoBlock)

  // вешаю фунцкию на кнопу закрытия
  addCloseEvent()

  // добавляю текст
  if (data[index].description) {
    document.querySelector('.info-content-wrapper').insertAdjacentHTML('beforeend', textContent)
  }
  // добавляю картинки
  if (data[index].images.length) {
    document.querySelector('.info-content-wrapper').insertAdjacentHTML('beforeend', contentImages)
    data[index].images.forEach((item) => {
      document.querySelector('.info-images').insertAdjacentHTML('beforeend', `<img src="${item}">`)
    })
  }

  // добавляю контейнер для кнопок
  document.querySelector('.info-content-wrapper').insertAdjacentHTML('beforeend', contentMedia)

  // добавляю сами кнопки
  const showBtn = `<div class="link-wrapper">
                         <a href="${data[index].link}" id="show-link" target="_blank">Посмотреть</a>
                       </div>`
  const githubBtn = `<div class="link-wrapper">
                            <a href="${data[index].github}" id="github-project" target="_blank">Проект на GitHub</a>
                         </div>`
  if (data[index].link) {
    document.querySelector('.info-media').insertAdjacentHTML('beforeend', showBtn)
  }
  if (data[index].github) {
    document.querySelector('.info-media').insertAdjacentHTML('beforeend', githubBtn)
  }
  scrollToActive()
}

// функция открывающая карточку по клику
function clickOpenCard() {
  htmlCollection.forEach((item, index) => item.addEventListener('click',() => {
   openCard(item, index)
  }))
}


export { loadCard, htmlCollection, selectedCardIndex, clickOpenCard, openCard }

