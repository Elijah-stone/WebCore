let swiper = new Swiper('.species-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
        el: '.species-pagination',
        clickable: true,
    },
});



let speciesSlides = document.querySelectorAll('.species__slide');
let speciesShowBtn = document.querySelector('.species__all');
let speciesHideBtn = document.querySelector('.species__hide');
let speciesArrowIcons = document.querySelectorAll('.species__arrow-icon');

function speciesHideSlide(i) {
    for ( i; i < speciesSlides.length; i++) {
        speciesSlides[i].classList.add('species__slide--hidden');
    }
}
function speciesFlip() {
    for (let i = 0; i < speciesArrowIcons.length; i++){
        if (speciesArrowIcons[i].classList.contains('species__arrow-icon--rotate')) {
            speciesArrowIcons[i].classList.remove('species__arrow-icon--rotate');
        }
    }
}
function speciesBackFlip() {
    for (let i = 0; i < speciesArrowIcons.length; i++){
        if (!speciesArrowIcons[i].classList.contains('species__arrow-icon--rotate')) {
            speciesArrowIcons[i].classList.add('species__arrow-icon--rotate');
        }
    }
}
if (window.innerWidth < 1120) {
    speciesHideSlide(3);
} else {
    speciesHideSlide(4);
}

window.addEventListener('resize', function () {
    if (window.innerWidth < 1120) {
        speciesHideSlide(3);
    } else {
        speciesHideSlide(4);
    }
})

if (window.innerWidth < 1120) {
    speciesHideSlide(3);
} else {
    speciesHideSlide(4);
}
speciesShowBtn.addEventListener('click',function () {

    for (let i = 0 ; i < speciesSlides.length; i++) {
        if (speciesSlides[i].classList.contains('species__slide--hidden')) {
            speciesSlides[i].classList.remove('species__slide--hidden');
        }
    }
    speciesShowBtn.classList.add('species__hide');
    speciesHideBtn.classList.remove('species__hide');
    speciesBackFlip();


    /*   let hiddenElements = document.querySelectorAll('.brand-slide--hidden')
       console.log(hiddenElements);
       hiddenElements.classList.remove('brand-slide--hidden');
        */
});

speciesHideBtn.addEventListener('click', function () {
    if (window.innerWidth < 1120) {
        speciesHideSlide(3);
    } else {
        speciesHideSlide(4);
    }
    speciesShowBtn.classList.remove('species__hide');
    speciesHideBtn.classList.add('species__hide');
    speciesFlip();
});