// app.js

const input = document.querySelector('input');
const addButton = document.querySelector('.todo__add');
const todoList = document.querySelector('.list');

let counter = 0

let todos = [];

function addTodo() {
    // Get the input value
    const todoText = input.value;
    
    // Create a new todo object with the text
    const todo = {
        text: todoText,
        id: counter++
    };
    console.log(todo)
    
    // Add the todo to the array
    todos.push(todo);

    // Clear the input
    input.value = '';
    
    // Render the todos
    renderTodos();
}

function renderTodos() {
    // Clear the todo list
    todoList.innerHTML = ""
    console.log(renderTodos)
    
    // Render each todo
    todos.forEach((todo) => {
        // Create a new list item
        const li = document.createElement('li');
        li.setAttribute('data-id', todo.id);
        li.innerHTML = `
        <label>${todo.text}</label>
        <button class="todo__delete">X</button>
        `;
        
        // Append the list item to the todo list
        todoList.appendChild(li);
    });
}

function onInputChange(event) {
    // Enable or disable the add button based on whether the input is empty
}


input.addEventListener('change', onInputChange);

todoList.addEventListener('click', (event) => {
    // Check if the click was on a delete button
    if (event.target.className === 'todo__delete') {
        // Get the todo's id
        const todoId = event.target.parentElement.getAttribute('data-id');
                
        // Find the todo in the array and remove it
        todos = todos.filter((todo) => todo.id != todoId);
        
        
        // Render the todos
    }
    renderTodos();
});
