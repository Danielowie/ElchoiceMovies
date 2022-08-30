const toggle = document.querySelector('.toggle')
const close = document.querySelector('.close')
const ul = document.querySelector('ul')


toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    ul.classList.toggle('active')

})

if (close){
    close.addEventListener('click', () => {
        close.classList.remove('active')
        ul.classList.toggle('active')
    })
}