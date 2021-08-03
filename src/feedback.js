let feedback = document.querySelector('.feedback')
let openButton1 = document.querySelector('.side-menu-bottom__message')
let openButton2 = document.querySelector('.message__button')
let exitButton1 = document.getElementById('feed-exit-btn')
let absoluteContainer = document.querySelector('.absolute-container')

console.log(exitButton1)

openButton1.addEventListener('click', function () {
    feedback.classList.add('feedback--open')
    absoluteContainer.classList.add('absolute-container--blur')
})

openButton2.addEventListener('click', function () {
    feedback.classList.add('feedback--open')
    absoluteContainer.classList.add('absolute-container--blur')
})

exitButton1.addEventListener('click', function () {
    feedback.classList.remove('feedback--open')
    absoluteContainer.classList.remove('absolute-container--blur')
    console.log('cool')

})