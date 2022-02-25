// Posts
let posts = [
  {
    date: '25 de fev, 2022',
    name: 'Sou um post de teste',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, facere amet repudiandae nisi excepturi atque voluptatibus doloribus accusantium quis modi dolor, quidem adipisci veniam quod animi iste ullam maxime labore!'
  },
  {
    date: '25 de fev, 2022',
    name: 'Calor da superfície de Vênus pode alimentar fortes ventos acima das nuvens',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, facere amet repudiandae nisi excepturi atque voluptatibus doloribus accusantium quis modi dolor, quidem adipisci veniam quod animi iste ullam maxime labore!'
  },
  {
    date: '25 de fev, 2022',
    name: 'Como o asteroide com a maior risco de se chocar com a Terra agora é inofensivo?',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, facere amet repudiandae nisi excepturi atque voluptatibus doloribus accusantium quis modi dolor, quidem adipisci veniam quod animi iste ullam maxime labore!'
  },
  {
    date: '25 de fev, 2022',
    name: 'CLuz de estrelas da Via Láctea indica detalhes de galáxias engolidas no passado',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, facere amet repudiandae nisi excepturi atque voluptatibus doloribus accusantium quis modi dolor, quidem adipisci veniam quod animi iste ullam maxime labore!'
  },
]

const mainContainer = document.querySelector('main .container')

posts.forEach((post) => {
  const card = document.createElement('div')
  card.classList.add('card')

  card.innerHTML = 
  `<div>
    <span class="date">${post.date}</span>
    <span class="like">
      <img src="./src/img/like.svg" alt="Like!">
    </span>
  </div>
  <h2>${post.name}</h2>
  <p>${post.content}</p>
  `

  mainContainer.appendChild(card)
})

const reservationMainContainer = mainContainer.innerHTML

// Search

const searchBtn = document.getElementById('search')
let searchContent = ''

searchBtn.onkeyup = () => {
  
  if(searchBtn.value) {
    searchContent = searchBtn.value
    
    let searched = posts.filter(post => post.name.toLowerCase().includes(searchContent.toLowerCase()))

    mainContainer.innerHTML = ''
    
    searched.forEach((post) => {
      const card = document.createElement('div')
       card.classList.add('card')
      card.innerHTML = 
      `<div>
        <span class="date">${post.date}</span>
        <span class="like">
          <img src="./src/img/like.svg" alt="Like!">
        </span>
      </div>
      <h2>${post.name}</h2>
      <p>${post.content}</p>
      `
      mainContainer.appendChild(card)
    })


  } else {
    mainContainer.innerHTML = reservationMainContainer
  }
}

//NO VUE...

// TEMOS A RENDERIZAÇÃO DA NOSSA LISTA NORMAL COM V-FOR

// IDENTIFICAMOS UM VALOR BUSCADO => EXECUTAMOS A FUNÇÃO DE FILTRO NO NOSSO ARRAY,
// ESCONDEMOS NOSSA LISTA ORIGINAL, EXIBIMOS NOSSA LISTA DE DADOS ENCONTRADA