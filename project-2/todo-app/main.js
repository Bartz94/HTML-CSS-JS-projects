function init() {
    const todoButton = document.querySelector('.todo_button');
    const todoInput = document.querySelector('.todo_input');
    const todoList = document.querySelector('.todo_list');

    todoInput.focus();

    todoButton.addEventListener('click', createNewItem)

    function createNewItem(event) {
        if (todoInput.value !== '') {
            event.preventDefault();

            const newItem = document.createElement('li');
            newItem.innerText = todoInput.value;

            newItem.addEventListener('click', () => {
                newItem.classList.toggle('completed')
            });

            newItem.addEventListener('contextmenu', (event) => {
                event.preventDefault();
                newItem.remove();
            });

            todoList.appendChild(newItem);
            todoInput.value = '';
            updateLocalStorage();
        }
        else {
            event.preventDefault();
            return;
        };
    };
};
window.onload = init;
