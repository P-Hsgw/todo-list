

function eventListeners() {
  const firstTable = document.getElementById("tr-0")
  const modalBackground = document.getElementById("modal-background-0")
  const modalCloseButton = document.getElementById("modal-close-0")
  const modalSubmitButton = document.getElementById("modal-submit")

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

  modalSubmitButton.addEventListener("click", () => {
    console.log('submitted')
    // Add a logic that will create new todo after submit
  })
}

export default eventListeners;