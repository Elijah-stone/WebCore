


let brand = document.getElementById('11')
let device = document.getElementById('12')
let price = document.getElementById('13')
let contact = document.getElementById('14')
let special = document.getElementById('15')
let feedback = document.getElementById('16')
let content = document.querySelector('.content-1')
let list = [brand,device,price,contact,special,feedback]
let lorem ='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda dignissimos ea facere magni, nisi obcaecati similique! Accusamus adipisci atque deserunt dolores dolorum ea eaque excepturi itaque modi obcaecati odio officia praesentium quidem, quis sed sint soluta sunt, vitae voluptas voluptate! Adipisci architecto consequatur doloribus ea excepturi explicabo hic incidunt ipsa iste molestias, natus nesciunt nihil placeat quod recusandae reiciendis, voluptas voluptates voluptatibus. A accusamus assumenda, commodi dolore earum, eligendi esse exercitationem, iure labore nostrum numquam officia quae recusandae totam voluptates. Asperiores laborum magnam molestias pariatur ratione recusandae! A earum esse impedit provident quaerat voluptates. Asperiores consectetur explicabo iusto quos?\n'

console.log(list)
console.log(content)


let remove = function () {
    for (let i = 0 ; i<list.length; i++) {
        if (list[i].classList.contains('list__item_active')) {
            list[i].classList.remove('list__item_active')
        }
    }
}

brand.addEventListener('click', function () {
    content.innerHTML = 'Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.\n' +
        '                            <br><br> Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam assumenda cum debitis, dicta, dignissimos dolor dolorem doloremque eius error eveniet illo incidunt inventore maxime minus mollitia natus obcaecati officia officiis quaerat quam repellat saepe veritatis voluptate voluptatibus.'
    remove()
    brand.classList.add('list__item_active')
})
device.addEventListener('click', function () {
    content.innerHTML = lorem
    remove()
    device.classList.add('list__item_active')
})
price.addEventListener('click', function () {
    content.innerHTML = lorem
    remove()
    price.classList.add('list__item_active')
})
contact.addEventListener('click', function () {
    content.innerHTML = lorem
    remove()
    contact.classList.add('list__item_active')
})
special.addEventListener('click', function () {
    content.innerHTML = lorem
    remove()
    special.classList.add('list__item_active')
})
feedback.addEventListener('click', function () {
    content.innerHTML = lorem
    remove()
    feedback.classList.add('list__item_active')
})














let description = document.querySelector('.text-img-description__description')
let descriptionAllButton = document.querySelector('.text-img-description__button--open')
let descriptionHideButton = document.querySelector('.text-img-description__button--close')



descriptionAllButton.addEventListener('click', function () {
    description.classList.add('text-img-description__description--all')
    descriptionAllButton.classList.add('text-img-description__button--remove')
    descriptionHideButton.classList.remove('text-img-description__button--remove')
})

descriptionHideButton.addEventListener('click', function () {
    description.classList.remove('text-img-description__description--all')
    descriptionAllButton.classList.remove('text-img-description__button--remove')
    descriptionHideButton.classList.add('text-img-description__button--remove')
})






