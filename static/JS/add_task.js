

const inputField = document.querySelector('.todo-input__input-field');

//inputField.addEventListener('keydown',handleEvent);




function addTask(cur_id) {
    const list = document.querySelector('.todo-list-checkbox');
    const newTask = document.createElement('li');
    //const inputField = document.querySelector('.todo-input__input-field');
    const textTask = inputField.value;
    newTask.className = 'todo-list__item todo-list__item_style active';
    list.append(newTask);
    const label = addLabel(newTask,cur_id);
    addButton(newTask,cur_id);
    addCheckbox(label,cur_id);
    const form = addForm(label,cur_id);
    addInput(form,textTask,cur_id);

    //label.addEventListener('click', changeTaskStatus);
    inputField.value = '';
    hideIfInCompleted(newTask);

}
function addCheckbox(label,cur_id){
    const checkbox = document.createElement('input');
    checkbox.className = 'checkbox todo-list__checkbox';
    checkbox.type = 'checkbox';
    checkbox.id = 'id' + cur_id;
    checkbox.value = 'no';
    label.append(checkbox);
}
function addForm(label,cur_id){
    const form = document.createElement('form');
    form.className = 'input-field__form';
    form.method = 'post';
    form.id = 'form-content-task';
    label.append(form);
    return form;
}
function addInput(form,textTask,cur_id){
    const input = document.createElement('input');
    input.className = 'todo-list__text input-field text';
    input.type = 'text';
    input.value = textTask;
    input.setAttribute('data-id',cur_id);
    form.append(input);
    //?????form.addEventListener('mouseup', recountAfterChecking);
}
function addLabel(newTask,cur_id){
    const label = document.createElement('label');
    label.className = 'checkbox__label todo-list__checkbox-label';
    label.htmlFor = 'id' + cur_id;
    newTask.append(label);
    return label;
}



function addButton(newTask,cur_id){
    const button = document.createElement('button');
    button.className = 'button todo-list__delete-button todo-list__delete-button_hover';
    button.setAttribute('data-id',cur_id);
    newTask.append(button);
    const img = document.createElement('img');
    img.className = 'icon';
    img.src = "static/icons/close.png";
    img.setAttribute('data-id',cur_id);
    button.append(img);
    button.addEventListener('click', delete_element);
    button.addEventListener('click', recountAfterDelete);
}

function hideIfInCompleted(task){
    if(document.querySelector('.current-task-type').id ==='completed')
        task.style.display = 'none';
}
