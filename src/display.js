import { arrayOfObjects, showToDo } from './index.js';

export const createTask = (todo, id) => {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('todo');
  
    const innerDiv1 = document.createElement('div');
    innerDiv1.classList.add('todo-div');
    innerDiv1.dataset.id = id;
  
    const editableInput = document.createElement('INPUT');
    editableInput.value = todo.description;
    editableInput.setAttribute('readonly', true);
    if (todo.complete) {
      editableInput.style.textDecoration = 'line-through';
    } else {
      editableInput.style.textDecoration = 'none';
    }
  
    editableInput.addEventListener('click', () => {
      editableInput.removeAttribute('readonly');
    });
  
    editableInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const newValue = editableInput.value;
        editableInput.setAttribute('readonly', true);
        arrayOfObjects[id].description = newValue;
        localStorage.setItem('todo-list', JSON.stringify(arrayOfObjects));
        // showToDo()
      }
    });
    const checkboxElement = document.createElement('INPUT');
    checkboxElement.setAttribute('type', 'checkbox');
    checkboxElement.dataset.id = id;
    checkboxElement.checked = todo.complete;
  
    checkboxElement.addEventListener('change', () => {
      arrayOfObjects[id].complete = checkboxElement.checked;
      localStorage.setItem('todo-list', JSON.stringify(arrayOfObjects));
      if (checkboxElement.checked) {
        editableInput.style.textDecoration = 'line-through';
      } else {
        editableInput.style.textDecoration = 'none';
      }
    });
  
    innerDiv1.appendChild(checkboxElement);
    innerDiv1.appendChild(editableInput);
  
    const innerDiv2 = document.createElement('div');
    innerDiv2.classList.add('todo-i');
  
    const trashIcon = document.createElement('i');
    trashIcon.classList.add('fa', 'fa-trash');
  
    trashIcon.addEventListener('click', () => {
      arrayOfObjects.splice(id, 1);
      localStorage.setItem('todo-list', JSON.stringify(arrayOfObjects));
      showToDo();
    });
  
    innerDiv2.appendChild(trashIcon);
  
    mainDiv.appendChild(innerDiv1);
    mainDiv.appendChild(innerDiv2);
  
    return mainDiv;
  };




















// const todoTask = document.querySelector('.to-do-task');
//   const showToDo = () => {
//     todoTask.innerHTML = '';
//     if (arrayOfObjects) {
//       arrayOfObjects.forEach((todo, id) => {
//         const newTask = createTask(todo, id);
//         todoTask.appendChild(newTask);
//       });
//     }
//   };

//   export {showToDo}
  