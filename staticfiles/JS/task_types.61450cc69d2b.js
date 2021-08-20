/*switching between types of tasks */

/* all objects in button-centre*/
const taskFooter = document.getElementsByClassName("task-button");

for(let el of taskFooter)
    el.addEventListener('click', showTasks);

function showTasks(event){
    const type = event.target.id;
    displayTasks(type);
    changeCurrentTaskType(type);
}

/* displays tasks of required types*/
function displayTasks(type){
    const allTypes=document.getElementsByClassName('todo-list__item');
    for(const elem of allTypes){
        if(elem.classList.contains(type) || type==='all') {
            elem.style.display = 'grid';
        }
        else{
            elem.style.display = 'none';
        }
    }
}

/* assigns class current-task-type to current type of task */
function changeCurrentTaskType(type){
    const curTask = document.querySelector('.current-task-type');
    if(curTask.id === type) return;
    curTask.classList.remove('current-task-type');
    document.getElementById(type).classList.add('current-task-type');
}

