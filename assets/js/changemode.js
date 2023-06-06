const btn = document.querySelector('.ChangeMode')
const iconSun = document.querySelector('#sun')
const iconMoon = document.querySelector('#moon')
const texts = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span')
       
    //Pega info de todas as cores
   // const currentColor = window.getComputedStyle(text).getPropertyValue('color');
    
   
btn.addEventListener('click', function mudarModo(e){
    e.preventDefault()

    if (window.getComputedStyle(iconMoon).display === 'none') {
        iconSun.style.display = 'none'
        iconMoon.style.display = 'block'       
        texts.forEach(function(text) {
        text.style.color = "white"
        })
    } else {
        iconSun.style.display = 'block'
        iconMoon.style.display = 'none'
        texts.forEach(function(text) {
        text.style.color = "blue"
        })
    }
})


