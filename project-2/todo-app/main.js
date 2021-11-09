function init() {
    const todoForm = document.querySelector('#form');
    const todoInput = document.querySelector('.todo_input');
    const todoList = document.querySelector('.todo_list');

    todoInput.focus();

    todoForm.addEventListener('submit', createNewItem)

    function createNewItem(event) {
        event.preventDefault();

        const newItem = document.createElement('li');
        newItem.innerText = todoInput.value;

        newItem.addEventListener('click', () => {
            newItem.classList.toggle('completed')
            updateLocalStorage();
        });

        newItem.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            newItem.remove();
        });

        todoList.appendChild(newItem);
        todoInput.value = '';
        updateLocalStorage();
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

    localStorage.setItem('Tasks', JSON.stringify(arrayOfTask));
    console.log(arrayOfTask)
};
window.onload = init;
