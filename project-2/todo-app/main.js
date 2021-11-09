function init() {
    const todoForm = document.querySelector('#form');
    const todoInput = document.querySelector('.todo_input');
    const todoList = document.querySelector('.todo_list');
    const NumberOfTasks = document.querySelector('#num_of_task')

    const localStoragedTasks = JSON.parse(localStorage.getItem('tasks'));
    NumberOfTasks.innerText = localStoragedTasks.length;



    if (localStoragedTasks) {
        localStoragedTasks.forEach(task => {
            createNewItem(task);
        });
    };

    todoInput.focus();

    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        createNewItem();
    });

    function createNewItem(task) {
        let taskText = todoInput.value;

        if (task) {
            taskText = task.text;
        }

        if (taskText) {
            const newItem = document.createElement('li');
            if (task && task.completed) {
                newItem.classList.add('completed');
            };

            newItem.innerText = taskText;

            newItem.addEventListener('click', () => {
                newItem.classList.toggle('completed')
                updateLocalStorage();
            });

            newItem.addEventListener('contextmenu', (event) => {
                event.preventDefault();
                newItem.remove();
                updateLocalStorage();
            });

            todoList.appendChild(newItem);
            todoInput.value = '';
            updateLocalStorage();
        };
    };
};

function updateLocalStorage() {
    const taskElements = document.querySelectorAll('li');
    const arrayOfTask = [];

    taskElements.forEach((taskElement) => {
        arrayOfTask.push({
            text: taskElement.innerText,
            completed: taskElement.classList.contains('completed'),
        });
    });

    localStorage.setItem('tasks', JSON.stringify(arrayOfTask));
};
window.onload = init;
