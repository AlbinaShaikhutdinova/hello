const counter = document.getElementById('counter');
/*all of li*/
const allTasks = document.getElementsByClassName('checkbox__label');
for(const elem of allTasks) {
    elem.addEventListener('mouseup', recountAfterChecking)
}

/*current amount of items*/
let currCount = allTasks.length;
counter.innerHTML=currCount+' items left';

/*buttons for switching type of tasks*/
const taskButtonsFooter = document.getElementsByClassName("task-button");
for(let el of taskButtonsFooter)
    el.addEventListener('click', countTasks);

/*clear button*/
document.getElementById('button_clear').addEventListener('click', recountAfterClear);

/*delete button*/
const buttonDelete = document.getElementsByClassName('todo-list__delete-button');
for(const elem of buttonDelete) {
    elem.addEventListener('click', recountAfterDelete);
}

/*enter*/
const inputTask = document.querySelector('.todo-input__input-field');
inputTask.addEventListener('keydown',recountAfterAdd);


/*count after adding new task*/
function recountAfterAdd(event){
    if (event.code == 'Enter' && document.querySelector('.current-task-type').id!=='completed')
    {
        currCount++;
        counter.innerHTML=currCount+' items left';
    }
}

/*count tasks after displaying different type of tasks*/
function countTasks(event){
    const type = event.target.id;
    if(type==='all')
        currCount=allTasks.length;
    else
        currCount=document.getElementsByClassName(type).length;
    counter.innerHTML = currCount +' items left';
}

/* recount tasks after changing status(active/completed) of a specific task*/
function recountAfterChecking(event){
    if(document.querySelector('.current-task-type').id==='all') return;
    if(event.target.type==='text') return;
    currCount--;
    counter.innerHTML = currCount +' items left';
}

/*recount amount of tasks after clear*/
function recountAfterClear(){
    const currTypeTask = document.querySelector('.current-task-type');
    if(currTypeTask.id !== 'completed')
        currCount=document.getElementsByClassName('active').length;
    else currCount=0;
    counter.innerHTML = currCount +' items left';
}

/*recount amount of tasks after deleting 1*/
function recountAfterDelete(){
     currCount--;
     counter.innerHTML = currCount +' items left';
}