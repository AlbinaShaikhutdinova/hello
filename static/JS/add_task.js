const inputField = document.querySelector('.todo-input__input-field');

inputField.addEventListener('keydown',handleEvent);

function handleEvent(event){
    if (event.code == 'Enter' && inputField.value != '' )
    {
        addTask();
    }
}

function addTask() {
    const list = document.querySelector('.todo-list-checkbox');
    const newTask = document.createElement('li');
    const textTask = inputField.value;
    newTask.className = 'todo-list__item todo-list__item_style active';
    list.append(newTask);
    const numElem = list.children.length.toString();
    addCheckbox(numElem,newTask);
    addLabel(numElem,newTask,textTask);
    addButton(newTask);
    newTask.addEventListener('click', changeTaskStatus);
    inputField.value = '';
    hideIfInCompleted(newTask);
}
function addCheckbox(numElem,newTask){
    const checkbox = document.createElement('input');
    checkbox.className = 'checkbox todo-list__checkbox';
    checkbox.type = 'checkbox';
    checkbox.id = 'id' + numElem;
    checkbox.value = 'no';
    newTask.append(checkbox);
}

function addLabel(numElem,newTask,textTask){
    const label = document.createElement('label');
    label.className = 'checkbox__label todo-list__checkbox-label';
    label.htmlFor = 'id' + numElem;
    newTask.append(label);
    const input = document.createElement('input');
    input.className = 'todo-list__text input-field text';
    input.type = 'text';
    input.value = textTask;
    label.append(input);
    label.addEventListener('mouseup', recountAfterChecking)
}

function addButton(newTask){
    const button = document.createElement('button');
    button.className = 'button todo-list__delete-button todo-list__delete-button_hover';
    newTask.append(button);
    const img = document.createElement('img');
    img.className = 'icon';
    img.src = 'icons/close.png';
    button.append(img);
    button.addEventListener('click', deleteTask);
    button.addEventListener('click', recountAfterDelete);
}

function hideIfInCompleted(task){
    if(document.querySelector('.current-task-type').id ==='completed')
        task.style.display = 'none';
}