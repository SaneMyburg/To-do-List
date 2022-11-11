import UI from './display.js';
import './style.css';

document.addEventListener('DOMContentLoaded', UI.displayList);










// let form = document.querySelector('.list-form');
// let input = document.querySelector('#add-list');
// let newTask = document.querySelector('.to-do-task');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log('submit button');
//     formValidation();
// });

// let formValidation = () => {
//     if (input.value === ""){
//         console.log('faulure');
//     }

//     else {
//         console.log('success');
//         addList();
//     }
// };

// let arrayOfObjects = [{index: 1}, {description: ''}, {completed: false}];
// let addList = () => {
//     arrayOfObjects['description'] = input.value;
//     console.log(arrayOfObjects);
//     displayList();
// };

// let displayList = () => {
//     arrayOfObjects.forEach((task) => {  
//     newTask.innerHTML += `

//     <i class="uil uil-square-full"></i>
//     <i class="uil uil-check-square"></i>
//     <p class="">${task.description}</p>
//     <i class="uil uil-trash-alt"></i>
//     <i class="uil uil-ellipsis-v"></i>
    
//     `    
//     arrayOfObjects.description;

// });
// }