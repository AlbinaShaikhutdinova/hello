const fieldInput = document.querySelector('.input__icon');


fieldInput.addEventListener('click',toggleListDisplay);

function toggleListDisplay(){
    const list = document.querySelector('.todo-list');
    const fieldList = document.querySelector('.todo-main-part__center-items');
    const footer = document.querySelector('.footer');
    const icon = document.querySelector('.input__icon');
    list.classList.toggle('close');
    fieldList.classList.toggle('close');
    footer.classList.toggle('close');
    icon.classList.toggle('input__icon_close');
}