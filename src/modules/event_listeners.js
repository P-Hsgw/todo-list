import {createTodo, displayTodo} from "./todo"

function initialEventListeners() {
  const firstTable = document.getElementById("tr-0")
  const modalBackground = document.getElementById("modal-background-0")
  const modalCloseButton = document.getElementById("modal-close-0")
  const modalSubmitButton = document.getElementById("modal-submit-0")

  // Open and close modal
  function toggleModal (e) {
    let modal = document.getElementById(`modal-${e.currentTarget.dataset.index}`)
    modal.classList.toggle("is-active")
  }

  // Open a modal and let user create a todo
  firstTable.addEventListener("click", (e) => {
    toggleModal(e)
  })

  // Let user close a modal on a background click
  modalBackground.addEventListener("click", (e) => {
    toggleModal(e)
  })

  // Let user close a modal on a button click
  modalCloseButton.addEventListener("click", (e) => {
    toggleModal(e)
  })

  // listen to class of all new TRs, and depending on a choice, display content of specific todo

  // Listen to a button, and on click run functions to create a todo, display a todo, close a modal and clear values of the modal form
  modalSubmitButton.addEventListener("click", (e) => {
    const title = document.getElementById(`title-${e.currentTarget.dataset.index}`).value
    const description = document.getElementById(`description-${e.currentTarget.dataset.index}`).value
    const dueDate = document.getElementById(`due_date-${e.currentTarget.dataset.index}`).value
    const priority = document.getElementById(`select-${e.currentTarget.dataset.index}`).value
    const notes = document.getElementById(`notes-${e.currentTarget.dataset.index}`).value

    createTodo(title, description, dueDate, priority, notes)
    displayTodo()
    toggleModal(e)
    document.getElementById(`title-${e.currentTarget.dataset.index}`).value = ""
    document.getElementById(`description-${e.currentTarget.dataset.index}`).value = ""
    document.getElementById(`due_date-${e.currentTarget.dataset.index}`).value
    document.getElementById(`select-${e.currentTarget.dataset.index}`).value
    document.getElementById(`notes-${e.currentTarget.dataset.index}`).value = ""
  })
}



export default initialEventListeners;