

const inputField = document.querySelector('.todo-input__input-field');

//inputField.addEventListener('keydown',handleEvent);

/*$(document).ready(function () {
        $("#friend-form").submit(function (e) {
            // preventing from page reload and default actions
            e.preventDefault();
            // serialize the data for sending the form data.
            var serializedData = $(this).serialize();
            // make POST ajax call
            $.ajax({
                type: 'POST',
                url: "{% url 'post_friend' %}",
                data: serializedData,
                success: function (response) {
                    // on successfull creating object
                    // 1. clear the form.
                    //$("#friend-form").trigger('reset');
                    addTask()
                },
                error: function (response) {
                    // alert the error if any error occured
                    alert(response["responseJSON"]["error"]);
                }
            })
        })
})*/



function addTask(cur_id) {
    const list = document.querySelector('.todo-list-checkbox');
    const newTask = document.createElement('li');
    //const inputField = document.querySelector('.todo-input__input-field');
    const textTask = inputField.value;
    newTask.className = 'todo-list__item todo-list__item_style active';
    list.append(newTask);
    const numElem = list.children.length.toString();
    addCheckbox(numElem,newTask,cur_id);
    addLabel(numElem,newTask,textTask,cur_id);
    addButton(newTask);
    //newTask.addEventListener('click', changeTaskStatus);
    inputField.value = '';
    hideIfInCompleted(newTask);

}
function addCheckbox(numElem,newTask,cur_id){
    const checkbox = document.createElement('input');
    checkbox.className = 'checkbox todo-list__checkbox';
    checkbox.type = 'checkbox';
    checkbox.id = 'id' + cur_id;
    checkbox.value = 'no';
    newTask.append(checkbox);
}

function addLabel(numElem,newTask,textTask,cur_id){
    const label = document.createElement('label');
    label.className = 'checkbox__label todo-list__checkbox-label';
    label.htmlFor = 'id' + cur_id;
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
    img.src = "static/icons/close.png";
    button.append(img);
    button.addEventListener('click', deleteTask);
    button.addEventListener('click', recountAfterDelete);
}

function hideIfInCompleted(task){
    if(document.querySelector('.current-task-type').id ==='completed')
        task.style.display = 'none';
}