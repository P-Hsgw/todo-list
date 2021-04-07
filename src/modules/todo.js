import { createTable, populateModal } from "./dom_functions";

// Store todos in array
let todos = [];

// Create todos with factory functions
const Todo = (title, description, dueDate, priority, notes) => {
  function eventListeners() {
    // Listen to specific remove icon
    const iconRemove = document.getElementById(`remove-${todos.length}`);
    iconRemove.addEventListener("click", (e) => {
      const table = document.getElementById(
        `tr-${e.currentTarget.dataset.index}`
      );
      todos.splice(e.currentTarget.dataset.index - 1, 1); // Remove todo from the array
      table.remove(); // Remove specific table with todo from the page
    });

    // Listen to specific info icon
    const iconInfo = document.getElementById(`details-${todos.length}`);

    iconInfo.addEventListener("click", (e) => {
      const modal = document.getElementById(`modal-1`);
      const button = document.getElementById("modal-submit-1");
      modal.classList.toggle("is-active"); // Open modal
      populateModal(
        todos[e.currentTarget.dataset.index - 1].title,
        todos[e.currentTarget.dataset.index - 1].description,
        todos[e.currentTarget.dataset.index - 1].dueDate,
        todos[e.currentTarget.dataset.index - 1].priority,
        todos[e.currentTarget.dataset.index - 1].notes
      );
      console.log(todos)

      // Update button data-index to match chosen todo
      button.setAttribute("data-index", e.currentTarget.dataset.index);
    });
  }
  return { title, description, dueDate, priority, notes, eventListeners };
};

// Create todos with Factory function and push them to the array
function createTodo(title, description, dueDate, priority, notes) {
  const todo = Todo(title, description, dueDate, priority, notes);
  todos.push(todo);
}

// Display newly created todo when called
function displayTodo() {
  const todo = todos[todos.length - 1]; // Target specific todo
  const i = todos.length;
  createTable(todo.title, todo.description, todo.dueDate, i); // Use a function to create tables
  todo.eventListeners(); // Run event listener on a todo
}

export { createTodo, displayTodo, todos };
