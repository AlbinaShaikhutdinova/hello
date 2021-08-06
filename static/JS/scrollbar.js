const field = document.querySelector('.todo-list');

field.addEventListener('mouseenter',showScrollbar);
field.addEventListener('mouseleave',hideScrollbar);

function showScrollbar(){
    field.classList.add('scroll');
}
function hideScrollbar(){
    field.classList.remove('scroll');
}