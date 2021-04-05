
let todos = []

const Todo = (title, description, dueDate, priority, notes) => {
  
  return {title, description, dueDate, priority, notes}
}

function createTodo(title, description, dueDate="10", priority="low", notes="none") {
  const todo = Todo(title, description, dueDate , priority, notes)
  todos.push(todo)
  console.log(`Todo Array Test: ${todos}`)
}

export default createTodo