
function clearCompletedTask(){
    const elemOfList = document.getElementsByClassName('todo-list__item')
    const length = elemOfList.length;

    for(let i = length-1; i >= 0; i--){
        if(elemOfList[i].classList.contains('completed'))
        {
            //changeId(i+1);
            elemOfList[i].remove();
        }
    }
}

