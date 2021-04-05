import {createTodo, displayTodo} from "./todo"
// import displayTodo from "./dom_functions"

function initialEventListeners() {
  const firstTable = document.getElementById("tr-0")
  const modalBackground = document.getElementById("modal-background-0")
  const modalCloseButton = document.getElementById("modal-close-0")
  const modalSubmitButton = document.getElementById("modal-submit-0")

  function toggleModal (e) {
    let modal = document.getElementById(`modal-${e.currentTarget.dataset.index}`)
    modal.classList.toggle("is-active")
  }

  firstTable.addEventListener("click", (e) => {
    toggleModal(e)
  })

  modalBackground.addEventListener("click", (e) => {
    toggleModal(e)
  })

  modalCloseButton.addEventListener("click", (e) => {
    toggleModal(e)
  })

  // listen to class of all new TRs, and depending on a choice, display content of specific todo
  modalSubmitButton.addEventListener("click", (e) => {
    const title = document.getElementById(`title-${e.currentTarget.dataset.index}`).value
    const description = document.getElementById(`description-${e.currentTarget.dataset.index}`).value
    const dueDate = document.getElementById(`due_date-${e.currentTarget.dataset.index}`).value
    const priority = document.getElementById(`select-${e.currentTarget.dataset.index}`).value
    const notes = document.getElementById(`notes-${e.currentTarget.dataset.index}`).value

    createTodo(title, description, dueDate, priority, notes)
    displayTodo()
    toggleModal(e)
  })
}



export default initialEventListeners;