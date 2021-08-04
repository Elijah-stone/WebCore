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


let sideMenuList = document.querySelectorAll('.side-menu-list__item')
let sideMenuRepair = sideMenuList[0];
let sideMenuServices = sideMenuList[1];
let sideMenuClients = sideMenuList[2];
let sideMenuTraders = sideMenuList[3];
let sideMenuPartners = sideMenuList[4];
let sideMenuManufacturer = sideMenuList[5];
let sideMenuCenters = sideMenuList[6];
let sideMenuContacts = sideMenuList[7];

let sideRemove = function () {
    for (let i = 0 ; i<sideMenuList.length; i++) {
        if (sideMenuList[i].classList.contains('side-menu-list__item_active')) {
            sideMenuList[i].classList.remove('side-menu-list__item_active')
        }
    }
}

sideMenuRepair.addEventListener('click', function () {
    sideRemove()
    sideMenuRepair.classList.add('side-menu-list__item_active')
})
sideMenuServices.addEventListener('click', function () {
    sideRemove()
    sideMenuServices.classList.add('side-menu-list__item_active')
})
sideMenuClients.addEventListener('click', function () {
    sideRemove()
    sideMenuClients.classList.add('side-menu-list__item_active')
})
sideMenuTraders.addEventListener('click', function () {
    sideRemove()
    sideMenuTraders.classList.add('side-menu-list__item_active')
})
sideMenuManufacturer.addEventListener('click', function () {
    sideRemove()
    sideMenuManufacturer.classList.add('side-menu-list__item_active')
})
sideMenuPartners.addEventListener('click', function () {
    sideRemove()
    sideMenuPartners.classList.add('side-menu-list__item_active')
})
sideMenuCenters.addEventListener('click', function () {
    sideRemove()
    sideMenuCenters.classList.add('side-menu-list__item_active')
})
sideMenuContacts.addEventListener('click', function () {
    sideRemove()
    sideMenuContacts.classList.add('side-menu-list__item_active')
})

let sideMenuRU = document.querySelector('.side-menu-bottom__ru')
let sideMenuEN = document.querySelector('.side-menu-bottom__en')
let sideMenuCH = document.querySelector('.side-menu-bottom__ch')
let sideMenuLang = [sideMenuRU,sideMenuEN, sideMenuCH]

let sideRemoveLang = function () {
    for (let i = 0 ; i<sideMenuLang.length; i++) {
        if (sideMenuLang[i].classList.contains('side-menu-bottom_active')) {
            sideMenuLang[i].classList.remove('side-menu-bottom_active')
        }
    }
}
sideMenuRU.addEventListener('click', function () {
    sideRemoveLang()
    sideMenuRU.classList.add('side-menu-bottom_active')
})
sideMenuEN.addEventListener('click', function () {
    sideRemoveLang()
    sideMenuEN.classList.add('side-menu-bottom_active')
})
sideMenuCH.addEventListener('click', function () {
    sideRemoveLang()
    sideMenuCH.classList.add('side-menu-bottom_active')
})