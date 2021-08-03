let callback = document.querySelector('.callback')
let openButton1 = document.querySelector('.side-menu-bottom__call')
let openButton2 = document.querySelector('.call__button')
let exitButton1 = document.getElementById('call-exit-btn')
let absoluteContainer = document.querySelector('.absolute-container')

console.log(exitButton1)

openButton1.addEventListener('click', function () {
    callback.classList.add('callback--open')
    absoluteContainer.classList.add('absolute-container--blur')
})

openButton2.addEventListener('click', function () {
    callback.classList.add('callback--open')
    absoluteContainer.classList.add('absolute-container--blur')
})

exitButton1.addEventListener('click', function () {
    callback.classList.remove('callback--open')
    absoluteContainer.classList.remove('absolute-container--blur')
    console.log('cool')

})