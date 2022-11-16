// export default 
// import {addBtn, addEventListener, taskInput} from './tasks.js'

const taskInput = document.querySelector('#add-list');
const addBtn = document.querySelector('#add-list-btn');
const newToDo = document.querySelector('.to-do-task')

let todoArray = JSON.parse(localStorage.getItem('todo-list'));



export default class RenderList {
      static displayToDo() {
        let div = '';
        todoArray.forEach((todo, index) => {
            div += `
                 <div class="todo">
                        <input onclick="updateStatus(this)" type="checkbox" id="${index}">
                        <p class="checked" contenteditable="true">${todo.description}</p>
                        <div class="edit">
                           <i class="fa-solid fa-ellipsis-vertical"></i> 
                        </div>
                  </div> 
            `;
          console.log(index, todo);

        });
        newToDo.innerHTML = div;
      }

      updateStatus = (checkedTask) => {
        console.log(this);
      }
    }

   
    // displayToDO();


addBtn.addEventListener('click', e => {
    e.preventDefault();
    let userTask = taskInput.value.trim();
    if (e.target === addBtn) {
      console.log(userTask);
      if (!todoArray) {
        todoArray = [];
      }
  
      let taskInfo = {description: userTask, completed: false};
      todoArray.push(taskInfo);
      localStorage.setItem('todo-list', JSON.stringify(todoArray));
    //   displayToDo();
     }
  });
