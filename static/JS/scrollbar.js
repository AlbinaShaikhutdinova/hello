/*
const field = document.querySelector('.todo-list');

field.addEventListener('mouseenter',showScrollbar);
field.addEventListener('mouseleave',hideScrollbar);

function showScrollbar(){
    field.classList.add('scroll');
}
function hideScrollbar(){
    field.classList.remove('scroll');
}*/



const fieldList = document.querySelector('.todo-list');
const fieldHeader = document.querySelector('.header');

const heightWindow = document.documentElement.clientHeight;
const heightHeader = fieldHeader.offsetHeight;
const heightInput = document.querySelector('.todo-input').offsetHeight;
const heightFooter = document.querySelector('.footer').offsetHeight;
fieldList.style.maxHeight = (heightWindow - heightHeader - heightInput - heightFooter - 50) + 'px';

//alert(fieldList.style.maxHeight);

fieldList.addEventListener('mouseenter',showScrollbar);
fieldList.addEventListener('mouseleave',hideScrollbar);

function showScrollbar(){
    fieldList.classList.add('scroll');
}
function hideScrollbar() {
    fieldList.classList.remove('scroll');
}