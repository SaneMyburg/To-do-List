import './style.css';
const arrayOfObjects = [
    {
        index: 1,
        description: "wash the dishes",
        completed: false,
    },
    {
        index: 1,
        description: "complete To Do list project",
        completed: false,
    }
];

const todoTask = document.querySelector('.to-do-task');
    arrayOfObjects.forEach((element) => {
        const div = document.createElement('div');
        div.classList.add("todo");
        div.innerHTML += `

          <i class="uil uil-square-full"></i>
          <p class="">${element.description}</p>
          <i class="uil uil-ellipsis-v"></i>
    `;
    todoTask.append(div);

    });
    