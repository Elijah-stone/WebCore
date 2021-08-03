let sideMenu = document.querySelector('.side-menu')
let openButton = document.querySelector('.menu__button')
let exitButton = document.querySelector('.side-menu-top__exit-btn')
let contentContainer = document.querySelector('.content-container')

openButton.addEventListener('click', function () {
    sideMenu.classList.add('side-menu--open')
    contentContainer.classList.add('content-container--blur')
    exitButton.classList.add('side-menu-top__exit-btn--enable')
})

exitButton.addEventListener('click', function () {
    sideMenu.classList.remove('side-menu--open')
    contentContainer.classList.remove('content-container--blur')
    exitButton.classList.remove('side-menu-top__exit-btn--enable')

})