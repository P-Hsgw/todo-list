import { createTodo, displayTodo, todos } from "./todo";

function initialEventListeners() {
  // Open and close modal
  function toggleModal(e) {
    let modal = document.getElementById(
      `modal-${e.currentTarget.dataset.index}`
    );
    modal.classList.toggle("is-active");
  }

  const firstTable = document.getElementById("tr-0");
  const modalBackground = document.getElementById("modal-background-0");
  const modalCloseButton = document.getElementById("modal-close-0");
  const modalSubmitButton = document.getElementById("modal-submit-0");
  const modalTodoBackground = document.getElementById("modal-background-1");
  const modalTodoCloseButton = document.getElementById("modal-close-1");
  const modalTodoEditButton = document.getElementById("modal-submit-1");
  const projectsTab = document.querySelectorAll(".project")

  // Open a modal and let user create a todo
  firstTable.addEventListener("click", (e) => {
    toggleModal(e);
  });

  // Let user close a modal with table on a background click
  modalBackground.addEventListener("click", (e) => {
    toggleModal(e);
  });

  // Let user close a modal with table on a button click
  modalCloseButton.addEventListener("click", (e) => {
    toggleModal(e);
  });

  // listen to class of all new TRs, and depending on a choice, display content of specific todo

  // Listen to a button, and on click run functions to create a todo, display a todo, close a modal and clear values of the modal form
  modalSubmitButton.addEventListener("click", (e) => {
    const title = document.getElementById(
      `title-${e.currentTarget.dataset.index}`
    ).value;
    const description = document.getElementById(
      `description-${e.currentTarget.dataset.index}`
    ).value;
    const dueDate = document.getElementById(
      `due_date-${e.currentTarget.dataset.index}`
    ).value;
    const priority = document.getElementById(
      `select-${e.currentTarget.dataset.index}`
    ).value;
    const notes = document.getElementById(
      `notes-${e.currentTarget.dataset.index}`
    ).value;

    createTodo(title, description, dueDate, priority, notes);
    displayTodo();
    toggleModal(e);
    document.getElementById(`title-${e.currentTarget.dataset.index}`).value = "";
    document.getElementById(`description-${e.currentTarget.dataset.index}`).value = "";
    document.getElementById(`due_date-${e.currentTarget.dataset.index}`).value;
    document.getElementById(`select-${e.currentTarget.dataset.index}`).value;
    document.getElementById(`notes-${e.currentTarget.dataset.index}`).value = "";
  });

  // Let user close a modal with content on a background click
  modalTodoBackground.addEventListener("click", (e) => {
    toggleModal(e);
  });

  // Let user close a modal with content on a button click
  modalTodoCloseButton.addEventListener("click", (e) => {
    toggleModal(e);
  });

  function renderEditedTodo(e) {
    const title = document.getElementById(`title-${e}`)
    const description = document.getElementById(`description-${e}`)
    const dueDate = document.getElementById(`due_date-${e}`)

    title.innerHTML = todos[`${e-1}`].title
    description.innerHTML = todos[`${e-1}`].description
    dueDate.innerHTML = todos[`${e-1}`].dueDate
  }

  // Let user edit specific todo by editing form in a modal
  modalTodoEditButton.addEventListener("click", (e) => {
    const title = document.getElementById("control-1").children[0].value;
    const description = document.getElementById("control-2").children[0].value;
    const dueDate = document.getElementById("control-3").children[0].value;
    const priority = document.getElementById("select-1").value;
    const notes = document.getElementById("control-5").children[0].value;

    todos[e.currentTarget.dataset.index - 1].title = title;
    todos[e.currentTarget.dataset.index - 1].description = description;
    todos[e.currentTarget.dataset.index - 1].dueDate = dueDate;
    todos[e.currentTarget.dataset.index - 1].priority = priority;
    todos[e.currentTarget.dataset.index - 1].notes = notes;

    renderEditedTodo(e.currentTarget.dataset.index)

    let modal = document.getElementById(`modal-1`);
    modal.classList.toggle("is-active");
  });

  for (let project of projectsTab) {
    project.addEventListener("click", (e) => {
      console.log(e.target.dataset.index)
      // Create a function that will remove current project
      // Create a function to render a projectTab depending on dataset.index
      // Rendering function will need to take todos array and return only arrays with specific dataset.index
    })
  }



}

export { initialEventListeners };
