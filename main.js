var menuItem = document.querySelectorAll('.item-menu');

function selectionLink() {
    menuItem.forEach((item)=>
        item.classList.remove('nav.menu-lateral')

    )
    this.classList.add('nav.menu-lateral')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectionLink)
)

// expandir o menu

var btnExp = document.querySelector('#btn-exp');
var menuSide = document.querySelector('.menu-lateral');

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
    menuSide.classList.toggle('seuPopoEhMeu')


})