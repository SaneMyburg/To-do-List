export default class UI {
   static displayList() {
    
    const arrayOfObjects = [
          {
            index: 1,
            description: 'wash the dishes',
            completed: false,
          },
          {
            index: 1,
            description: 'complete To Do list project',
            completed: false,
          },
        ];

        let addList = () => {
          arrayOfObjects['description'] = input.value;
          console.log(arrayOfObjects);
          // displayList();
      };
      

        const form = document.querySelector('.list-form');
        const input = document.querySelector('#add-list');
        const todoTask = document.querySelector('.to-do-task');

        form.addEventListener('submit', (e) => {
          e.preventDefault();
          console.log('submit button');
          formValidation();
      });
      
      let formValidation = () => {
          if (input.value === ""){
              console.log('failure');
          }
      
          else {
              console.log('success');
              addList();
          }
      };

        arrayOfObjects.forEach((task) => {
          const div = document.createElement('div');
          div.classList.add('todo');
          div.innerHTML += `
        
                  <i class="uil uil-square-full"></i>
                  <i class="uil uil-check-square"></i>
                  <p class="">${task.description}</p>
                  <i class="uil uil-trash-alt"></i>
                  <i class="uil uil-ellipsis-v"></i>
            `;
          todoTask.append(div);
        });     
    }
}


