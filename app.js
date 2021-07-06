const body = document.querySelector('body')

a = 'https://images.unsplash.com/photo-1505461099166-6f27e1f6537c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80'
b = 'https://images.unsplash.com/photo-1508176850193-21de4476f385?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZjElMjBtY2xhcmVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
c = 'https://images.unsplash.com/photo-1508175911810-a4817cd3d7b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80'
d = 'https://images.unsplash.com/photo-1505461449698-814c63b54277?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
f = 'https://images.unsplash.com/photo-1552849397-7a2d7864a9b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
const URL = [a, b, c, d, f]

const titles = ['Williams', 'McLaren', 'Ferrari', 'Aston', 'Red Bull']
const SLIDE = 5

const container = document.createElement('div')
container.classList.add('container')
for(let i = 0; i < SLIDE; i++) {
    const slides = document.createElement('div')
    slides.classList.add('slide')
    const index = i
    url = URL[index]
    slides.style.backgroundImage  = `url(${url})`
    container.appendChild(slides)

    const titleList = document.createElement('h3')
    text = titles[index]
    titleList.append(`${text}`)
    slides.appendChild(titleList)
    console.log(slides)
}
body.appendChild(container)

function slidesPluggin(activeSlide=0){
const slides = document.querySelectorAll('.slide')

  slides[activeSlide].classList.add('active')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
  }
}

slidesPluggin (4)

function changeColor(colorValue) {
    document.body.style.background =     document.getElementById(colorValue).dataset.color;
}