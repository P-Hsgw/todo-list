

function eventListeners() {
  const tr = document.getElementById("tr-0")
  const modalBackground = document.getElementById("modal-background-0")
  const modalCloseButton = document.getElementById("modal-close-0")

  function toggleModal () {
    let modal = document.getElementById(`modal-${tr.dataset.index}`)
    modal.classList.toggle("is-active")
  }

  tr.addEventListener("click", () => {
    toggleModal()
  })

  modalBackground.addEventListener("click", () => {
    toggleModal()
  })

  modalCloseButton.addEventListener("click", () => {
    toggleModal()
  })

}

export default eventListeners;