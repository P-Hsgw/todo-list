import createTable from "./dom_functions";

// Store todos in array
let todos = [];

// Create todos with factory functions
const Todo = (title, description, dueDate, priority, notes) => {
  function eventListener() { // Event listener on a remove button
    const icon = document.getElementById(`span-${todos.length}`); // Listen to specific remove button
    icon.addEventListener("click", (e) => {
      const table = document.getElementById(
        `tr-${e.currentTarget.dataset.index}`
      );
      todos.splice(e.currentTarget.dataset.index - 1); // Remove todo from the array
      table.remove(); // Remove specific table with from the page
    });
  }
  return { title, description, dueDate, priority, notes, eventListener };
};

// Create todos with Factory function and push them to the array
function createTodo(
  title = "title",
  description,
  dueDate,
  priority,
  notes = "none"
) {
  const todo = Todo(title, description, dueDate, priority, notes);
  todos.push(todo);
}

// Display newly created todo when called
function displayTodo() {
  const todo = todos[todos.length - 1]; // Target specific todo
  const i = todos.length;
  createTable(todo.title, todo.description, todo.dueDate, todo.priority, i); // Use a function to create tables
  todo.eventListener(); // Run event listener on a todo
}

export { createTodo, displayTodo };
