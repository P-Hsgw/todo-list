import {
  createTodo,
  displayTodo,
  todos,
  grabTodos,
  addTodoToStorage,
} from "./todo";
import { removeProject, createProject, getProjectDetails } from "./projects";

const projectsTab = document.querySelectorAll(".project");

// Remove is-active class from project buttons
function removeActive() {
  for (let i = 0; i < projectsTab.length; i++) {
    projectsTab[i].classList.remove("is-active");
  }
}

// Add is-active to selected project button
function addActive(index) {
  if (index.target) {
    index.target.classList.add("is-active");
  }
}

// Open and close modal
function toggleModal(e) {
  let modal = document.getElementById(`modal-${e.currentTarget.dataset.index}`);
  modal.classList.toggle("is-active");
}

function initialEventListeners() {
  const firstTable = document.getElementById("tr-0");
  const modalBackground = document.getElementById("modal-background-0");
  const modalCloseButton = document.getElementById("modal-close-0");
  const modalSubmitButton = document.getElementById("modal-submit-0");
  const modalTodoBackground = document.getElementById("modal-background-1");
  const modalTodoCloseButton = document.getElementById("modal-close-1");
  const modalTodoEditButton = document.getElementById("modal-submit-1");
  const addNewProject = document.getElementById("add_new_project");
  const requiredPrompt = document.getElementById("requird_prompt");

  // Open a modal and let user create a todo
  firstTable.addEventListener("click", (e) => {
    toggleModal(e);
  });

  // Let user close a modal with table on a background click
  modalBackground.addEventListener("click", (e) => {
    toggleModal(e);
    requiredPrompt.style.display = "none";
  });

  // Let user close a modal with table on a button click
  modalCloseButton.addEventListener("click", (e) => {
    toggleModal(e);
    requiredPrompt.style.display = "none";
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

    if (
      document
        .getElementById(`title-${e.currentTarget.dataset.index}`)
        .checkValidity() &&
      document
        .getElementById(`description-${e.currentTarget.dataset.index}`)
        .checkValidity() &&
      document
        .getElementById(`due_date-${e.currentTarget.dataset.index}`)
        .checkValidity()
    ) {
      createTodo(title, description, dueDate, priority, notes);
      addTodoToStorage();
      displayTodo();
      toggleModal(e);

      // Reset modal values
      document.getElementById(`title-${e.currentTarget.dataset.index}`).value =
        "";
      document.getElementById(
        `description-${e.currentTarget.dataset.index}`
      ).value = "";
      document.getElementById(`due_date-${e.currentTarget.dataset.index}`)
        .value;
      document.getElementById(`select-${e.currentTarget.dataset.index}`).value;
      document.getElementById(`notes-${e.currentTarget.dataset.index}`).value =
        "";
      requiredPrompt.style.display = "none";
    } else {
      requiredPrompt.style.display = "inline";
    }
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
    const title = document.getElementById(`title-${e}`);
    const description = document.getElementById(`description-${e}`);
    const dueDate = document.getElementById(`due_date-${e}`);

    title.innerHTML = todos[`${e - 1}`].title;
    description.innerHTML = todos[`${e - 1}`].description;
    dueDate.innerHTML = todos[`${e - 1}`].dueDate;
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

    renderEditedTodo(e.currentTarget.dataset.index);
    addTodoToStorage();

    let modal = document.getElementById(`modal-1`);
    modal.classList.toggle("is-active");
  });

  const listeningToProjects = () => {
    for (let project of projectsTab) {
      project.addEventListener("click", (e) => {
        removeProject(); // Remove all projects from column
        createProject(e); // Creates new projects
        removeActive(); // Removes isactive from previous project
        addActive(e); // Adds isactive on current project
        grabTodos(e.currentTarget.dataset.index);

        // Create a function to render a projectTab depending on dataset.index
        // Rendering function will need to take todos array and return only arrays with specific dataset.index
      });
    }
  };
  // Listen to each project button, and run functions on click
  listeningToProjects();

  let newProjectOpen = false;

  // Listen to a click on Add New Project and open a form when clicked
  addNewProject.addEventListener("click", () => {
    if (!newProjectOpen) {
      getProjectDetails();
    }
  });
}

export { initialEventListeners, toggleModal, removeActive, addActive };
