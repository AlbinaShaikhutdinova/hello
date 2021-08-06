const deleteButton = document.getElementsByClassName('todo-list__delete-button');

for(const elem of deleteButton) {
    elem.addEventListener('click', deleteTask);
}

function deleteTask(event){
    const button = event.currentTarget;
    const task = button.parentElement;
    const numId = button.previousElementSibling.previousElementSibling.id.split('d');
    changeId(numId[1]);
    task.remove();
}


const clearCompletedTaskButton = document.getElementById('button_clear');

clearCompletedTaskButton.addEventListener('click',clearCompletedTask);

function clearCompletedTask(){
    const elemOfList = document.getElementsByClassName('todo-list__item')
    const length = elemOfList.length;

    for(let i = length-1; i >= 0; i--){
        if(elemOfList[i].classList.contains('completed'))
        {
            changeId(i+1);
            elemOfList[i].remove();
        }
    }
}

function changeId(idNum){
    const task = document.getElementsByClassName('todo-list__checkbox');
    const label = document.getElementsByClassName('todo-list__checkbox-label');
    const length = task.length;

    for(let i=length-1;i>=idNum;i--)
    {
        task[i].id = task[i-1].id;
        label[i].htmlFor = label[i-1].htmlFor;
    }

}