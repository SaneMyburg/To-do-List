const taskInput = document.querySelector('#add-list');
const form = document.querySelector('.list-form');
const addBtn = document.querySelector('#add-list-btn');
const todoTask = document.querySelector('.to-do-task');
let arrayOfObjects = JSON.parse(localStorage.getItem('todo-list')) || [];




  const editTask = (taskId, taskName)  => {
    let editId;
    let isEditedTask = false;
        editId = taskId;
        isEditedTask = true;
        taskInput.value = taskName;
    
        console.log(taskId, taskName);
    }

    export default editTask
