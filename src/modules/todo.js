import { createTable, populateModal } from "./dom_functions";

// Store todos in array
let todos = [];

// Create todos with factory functions
const Todo = (title, description, dueDate, priority, notes, projectIndex, ID) => {
  function eventListeners() {
    // Listen to specific remove icon
    const iconRemove = document.getElementById(`remove-${parseInt(todos[ID].ID+1)}`);
    iconRemove.addEventListener("click", (e) => {
      const table = document.getElementById(
        `tr-${e.currentTarget.dataset.index}`
      );
      // todos.splice(e.currentTarget.dataset.index - 1); // Remove todo from the array
      delete todos[e.currentTarget.dataset.index - 1]; // Remove todo from the array - solution for not working arrays
      table.remove(); // Remove specific table with todo from the page
    });

    // Listen to specific info icon
    const iconInfo = document.getElementById(`details-${parseInt(todos[ID].ID+1)}`);

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
      console.log("todos id " + parseInt(todos[ID].ID+1));

      // Update button data-index to match chosen todo
      button.setAttribute("data-index", e.currentTarget.dataset.index);
    });
  }
  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    eventListeners,
    projectIndex,
    ID
  };
};

// Create todos with Factory function and push them to the array
function createTodo(title, description, dueDate, priority, notes) {
  const projectsTab = document.querySelectorAll(".project");

  // Check which project is active, and assign projectIndex depending on active
  function checkActive() {
    let projectIndex = "";
    for (let project of projectsTab) {
      if (project.classList.contains("is-active")) {
        projectIndex = project.dataset.index;
      }
    }
    return projectIndex;
  }

  function getID() {
    let todoID = todos.length
    return todoID
  }

  const todo = Todo(
    title,
    description,
    dueDate,
    priority,
    notes,
    checkActive(),
    getID()
  );
  todos.push(todo);
}

// Display newly created todo when called
function displayTodo() {
  const todo = todos[todos.length - 1]; // Target specific todo
  const i = todos.length;
  createTable(todo.title, todo.description, todo.dueDate, i); // Use a function to create tables
  todo.eventListeners(); // Run event listener on a todo
  console.log(todo)
}

function grabTodos(e) {
  for (let index = 0; index < todos.length; index++) {
    if(todos[index].projectIndex == e) {
      createTable(todos[index].title, todos[index].description, todos[index].dueDate, index + 1); // Use a function to create tables


      todos[index].eventListeners()
      
      // Run event listener on a todo
    }
  }
}

export { createTodo, displayTodo, todos, grabTodos };
