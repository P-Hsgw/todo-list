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


function displayTodo() {
  const todo = todos[todos.length-1]
  const i = todos.length
  createTable(todo.title, todo.description, todo.dueDate, todo.priority, i)

}


export {createTodo, displayTodo}