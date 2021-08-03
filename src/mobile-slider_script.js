

 let swiper = new Swiper('.brand-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
        el: '.brand-pagination',
        clickable: true,
    },
});









let brandSlides = document.querySelectorAll('.brand-slide');
let showBtn = document.querySelector('.brands--all');
let hideBtn = document.querySelector('.brands--hide');
let arrowIcons = document.querySelectorAll('.arrow-icon');
function hideSlide(i) {
    for ( i; i < brandSlides.length; i++) {
        brandSlides[i].classList.add('brand-slide--hidden');
    }
}
function flip() {
    for (let i = 0; i < arrowIcons.length; i++){
        if (arrowIcons[i].classList.contains('rotate-arrow-icon')) {
            arrowIcons[i].classList.remove('rotate-arrow-icon');
        }
    }
}
function backFlip() {
    for (let i = 0; i < arrowIcons.length; i++){
        if (!arrowIcons[i].classList.contains('rotate-arrow-icon')) {
            arrowIcons[i].classList.add('rotate-arrow-icon');
        }
    }
}
if (window.innerWidth < 1120) {
    hideSlide(6);
} else {
    hideSlide(8);
}

window.addEventListener('resize', function () {
    if (window.innerWidth < 1120) {
        hideSlide(6);
    } else {
        hideSlide(8);
    }
})

if (window.innerWidth < 1120) {
    hideSlide(6);
    } else {
    hideSlide(8);
}
showBtn.addEventListener('click',function () {

    for (let i = 0 ; i < brandSlides.length; i++) {
        if (brandSlides[i].classList.contains('brand-slide--hidden')) {
            brandSlides[i].classList.remove('brand-slide--hidden');
        }
    }
    showBtn.classList.add('hide');
    hideBtn.classList.remove('hide');
    backFlip();


 /*   let hiddenElements = document.querySelectorAll('.brand-slide--hidden')
    console.log(hiddenElements);
    hiddenElements.classList.remove('brand-slide--hidden');
     */
});

hideBtn.addEventListener('click', function () {
    if (window.innerWidth < 1120) {
        hideSlide(6);
    } else {
        hideSlide(8);
    }
    showBtn.classList.remove('hide');
    hideBtn.classList.add('hide');
    flip();
});

