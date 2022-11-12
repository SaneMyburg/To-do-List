// import editTask from './display';
import './style.css';

const taskInput = document.querySelector('#add-list');
const form = document.querySelector('.list-form');
const addBtn = document.querySelector('#add-list-btn');
const todoTask = document.querySelector('.to-do-task');
let arrayOfObjects = JSON.parse(localStorage.getItem('todo-list')) || [];

// let editId;
// let isEditedTask = false;

 const showToDo = () => {
  todoTask.innerHTML = '';
    if (arrayOfObjects) {
       arrayOfObjects.forEach((todo, id) => {
        let isCompleted = todo.complete === true ? 'checked' : '';
          todoTask.innerHTML += `

          <div class="todo">
            <div class="todo-div" id="${id}">
              <input onclick="updateStatus(this)" type="checkbox" id="${id}">
              <p class="${isCompleted}">${todo.description}</p>
            </div> 
            <div class="todo-i">
             <i onclick="deleteTask(${id})" class="fa fa-trash"></i>
             <i onclick="editTask(${id},  '${todo.description}')" class="fa fa-ellipsis-v"></i>
            </div>
          </div> `;
    
        });
    }    
}

showToDo();
editTask();


const deleteTask = (deletedId) => {
    arrayOfObjects.splice(deletedId, 1);
    localStorage.setItem('todo-list', JSON.stringify(arrayOfObjects));
    showToDo();
    console.log(deletedId);

}

const updateStatus = (selectedTask) => {
    let taskName = selectedTask.parentElement.lastElementChild;
    if (selectedTask.checked) {
        taskName.classList.add('checked');
        arrayOfObjects[selectedTask.id].complete = true;
    } else {
        taskName.classList.remove('checked');
        arrayOfObjects[selectedTask.id].complete = false;
    }
    localStorage.setItem('todo-list', JSON.stringify(arrayOfObjects));
    console.log(selectedTask);

}

taskInput.addEventListener('keypress', e => {
    console.log('keypress')
    if (e.key === 'Enter') {
        let userTask = taskInput.value.trim();
        console.log(userTask);
        if (isEditedTask) {
            if(!arrayOfObjects) { // if list is empty, pass empty array
                arrayOfObjects = [];
        }
        let taskInfo = {description: userTask, complete: false};
        arrayOfObjects.push(taskInfo);  
        console.log(taskInfo);  
        } else {
            isEditedTask = false;
            arrayOfObjects[editId].description = userTask;
        }
        taskInput.value = '';
        localStorage.setItem('todo-list', JSON.stringify(arrayOfObjects));
    }    
});
