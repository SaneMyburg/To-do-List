import './style.css';
import { createTask } from './display.js'; // eslint-disable-line import/no-cycle

const taskInput = document.querySelector('#add-list');
const todoTask = document.querySelector('.to-do-task');
export let arrayOfObjects = JSON.parse(localStorage.getItem('todo-list')) || []; // eslint-disable-line import/no-mutable-exports

// const clearAllButton = document.getElementById('clear-all-button');

export const showToDo = () => {
  todoTask.innerHTML = '';
  if (arrayOfObjects) {
    arrayOfObjects.forEach((todo, id) => {
      const newTask = createTask(todo, id);
      todoTask.appendChild(newTask);
    });
  }
};

showToDo();

// Create new Todo
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const userTask = taskInput.value.trim();

    if (!arrayOfObjects) { // if list is empty, pass empty array
      arrayOfObjects = [];
    }
    const taskInfo = { description: userTask, complete: false };
    arrayOfObjects.push(taskInfo);

    taskInput.value = '';
    localStorage.setItem('todo-list', JSON.stringify(arrayOfObjects));
  }
});
