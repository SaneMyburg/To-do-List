// import UI from './display.js';
import './style.css';
let arrayOfObjects = [];

  const form = document.querySelector('.list-form');
  const input = document.querySelector('#add-list');
  const todoTask = document.querySelector('.to-do-task');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submit button');
    formValidation();
    renderUI();
});

const formValidation = () => {
  const todoInput = input.value;
  const isDuplicate = arrayOfObjects.some((addInput) => addInput.value === todoInput);

  const isEmpty = todoInput === '';
  if (isEmpty) {
    alert('To do input is empty') 
     } else if (isDuplicate) {
        alert ('To do already exist');
      // }
    } else {
  arrayOfObjects.push({
    value : todoInput,
    checked: false,
  });
  input.value = '';
};
     
}


function renderUI() {
    todoTask.innerHTML = '';
    arrayOfObjects.forEach((task, index) => {
    todoTask.innerHTML += `
              <div class="todo" id=${index}>
                <i class="fa-regular ${task.checked ? 'fa-square-check' : 'fa-square'}" data-action="check"></i>
                <p class="" data-action="check">${task.value}</p>
                <i class="uil uil-trash" data-action="delete"></i>
                <i class="uil uil-ellipsis-v" data-action="edit"></i>
              </div> `

    })
}


todoTask.addEventListener('click', (e) => {
    const target = e.target;
    const parentElement = target.parentNode;
    if (parentElement.className !== 'todo') return;

    // to do id
    const todo = parentElement;
    const todoId = todo.id;

    // target action 
    const action = target.dataset.action
    
    action === "check" && checkToDo(todoId);

    console.log(todoId, action);
});

// Check a to do 
function checkToDo(todoId) {
    arrayOfObjects = arrayOfObjects.map((todo, index) => ({
        ...todo,
        checked: index === todoId ? !todo.checked : todo.checked,
    }));
    renderUI();
}
    