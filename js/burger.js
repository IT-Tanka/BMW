const burger=document.querySelector('.humburger-menu');
const menu=document.querySelector('.menu');
const menuListItems=document.querySelectorAll('.menu-list__item');

burger.addEventListener('click',()=>{
    menu.classList.toggle('menu-active') 
    });

menuListItems.forEach(item=>{
    item.addEventListener('click',()=> menu.classList.remove('menu-active')
)});

    