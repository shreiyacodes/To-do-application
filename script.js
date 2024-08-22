document.getElementById('addButton').addEventListener('click', addTodo);
document.getElementById('todoTitle').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});
document.getElementById('todoDescription').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});

function addTodo() {
    const todoTitle = document.getElementById('todoTitle').value.trim();
    const todoDescription = document.getElementById('todoDescription').value.trim();
    
    if (todoTitle === '' || todoDescription === '') return;

    const todoList = document.getElementById('todoList');
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    todoItem.innerHTML = `
        <span class="title">${todoTitle}</span>
        <span class="description">${todoDescription}</span>
        <button class="delete-button">X</button>
    `;

    todoList.appendChild(todoItem);

    todoItem.addEventListener('click', function() {
        todoItem.classList.toggle('completed');
    });

    todoItem.querySelector('.delete-button').addEventListener('click', function() {
        todoList.removeChild(todoItem);
    });

    document.getElementById('todoTitle').value = '';
    document.getElementById('todoDescription').value = '';
}
