import createTable from "./dom_functions"

let todos = []

const Todo = (title, description, dueDate, priority, notes) => {
  
  return {title, description, dueDate, priority, notes}
}

function createTodo(title, description, dueDate="10", priority="low", notes="none") {
  const todo = Todo(title, description, dueDate , priority, notes)
  todos.push(todo)
  console.log(todos)
}


// Create a function that will generate new TRs and TDs, and accept title, description etc. as an argument - 
// this function will run in dom_functions, while displayToto diwll run in todo and just imput those arguments
function displayTodo() {
  const todo = todos[todos.length-1]
  createTable(todo.title, todo.description, todo.dueDate, todo.priority)
}


export {createTodo, displayTodo}