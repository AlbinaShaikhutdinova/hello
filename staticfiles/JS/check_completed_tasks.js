/*cross out completed tasks*/
const checkField= document.getElementsByClassName('todo-list__checkbox-label');

function changeTaskStatus(event){
    const trgt=event.target;
    const inputField = trgt.querySelector('.todo-list__text');
    changeInputFieldStatus(inputField);
    changeClassStatus(trgt);
    hideIfTypeUnfit(trgt);
}

/* disable/enable input field*/
function changeInputFieldStatus(input){
    input.disabled = !input.disabled;
}

/* add/remove class active/completed */
function changeClassStatus(trgt){
    const listElem = trgt.closest('li');
    if(listElem.classList.contains('active'))
    {
        listElem.classList.remove('active');
        listElem.classList.add('completed');
    }
    else{
        listElem.classList.remove('completed');
        listElem.classList.add('active');
    }
}

/* checks if chosen element fits the current type of shown tasks and hides it if not*/
function hideIfTypeUnfit(trgt){
    const curTaskType=document.querySelector('.current-task-type').id;
    const listElem = trgt.closest('li');
    if(curTaskType==='all' || listElem.classList.contains(curTaskType)) return;
    setTimeout(() =>listElem.style.display = 'none',300);
}

