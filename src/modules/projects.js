// import { populateModal } from "./dom_functions";
import { toggleModal } from "./event_listeners";

// Remove current project
function removeProject() {
  let contentColumn = document.getElementById("content_column");
  let firstChild = contentColumn.firstElementChild;
  while (firstChild) {
    firstChild.remove();
    firstChild = contentColumn.firstElementChild;
  }
}

// Create a column taking data-index as an argument
function createProject(index) {
  const column = document.getElementById("content_column");

  const content = document.createElement("div");

  const title = document.createElement("p");
  const projectTitle = document.getElementById(
    `project-${index.target.dataset.index}`
  );

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const thTitle = document.createElement("th");
  const thDescription = document.createElement("th");
  const thDueDate = document.createElement("th");
  const thActions = document.createElement("th");

  const tBody = document.createElement("tbody");
  const trNewTask = document.createElement("tr");
  const tdNewTask = document.createElement("td");

  column.classList.add("column");
  column.setAttribute("id", "content_column");

  content.classList.add("content");

  title.classList.add("title");
  title.innerHTML = projectTitle.innerHTML;

  table.classList.add("table");
  table.classList.add("is-hoverable");
  table.classList.add("is-fullwidth");

  thTitle.innerHTML = "Title";
  thDescription.innerHTML = "Description";
  thDueDate.innerHTML = "Due Date";
  thActions.innerHTML = "Actions";

  tBody.setAttribute("id", "tbody");
  trNewTask.setAttribute("id", "tr-0");
  trNewTask.setAttribute("data-index", "0");
  tdNewTask.innerHTML = "Add a new task";

  column.appendChild(content);
  content.appendChild(title);
  content.appendChild(table);

  table.appendChild(thead);

  thead.appendChild(tr);
  tr.appendChild(thTitle);
  tr.appendChild(thDescription);
  tr.appendChild(thDueDate);
  tr.appendChild(thActions);

  table.appendChild(tBody);
  tBody.appendChild(trNewTask);
  trNewTask.appendChild(tdNewTask);

  const firstTable = document.getElementById("tr-0");

  firstTable.addEventListener("click", (e) => {
    toggleModal(e);
  });
}

// Function that will populate the project depending on dataset.index
function populateProject() {}

// Create a new project tab in menu bar

// Projects should also be an object, and they should be pushed into an array

function renderProjectTab(value) {
  const projects = document.getElementById("created_projects")
  const li = document.createElement("li")
  const a = document.createElement("a")


  a.classList.add("project")

  projects.prepend(li)
  li.appendChild(a)
  a.innerHTML = value;

}


function getProjectDetails () {
  const projects = document.getElementById("add_new")
  const div = document.createElement("div")
  const fieldInput = document.createElement("div")
  const controlInput = document.createElement("div")
  const input = document.createElement("input")
  const fieldButtons = document.createElement("div")
  const controlButtons = document.createElement("div")
  const submitButton = document.createElement("button")
  

  div.setAttribute("id", "form-wrapper")
  fieldInput.classList.add("field")
  controlInput.classList.add("control")
  input.classList.add("input")
  input.setAttribute("type", "text")
  input.setAttribute("placeholder", "Project name")
  input.setAttribute("id", "input-0")
  fieldButtons.classList.add("field")
  controlButtons.classList.add("control")
  submitButton.classList.add("button")
  submitButton.classList.add("is-primary")
  submitButton.innerHTML = "Add"
  
  projects.prepend(div)
  div.appendChild(fieldInput)
  div.appendChild(fieldButtons)

  fieldInput.appendChild(controlInput)
  controlInput.appendChild(input)

  fieldButtons.appendChild(controlButtons)
  controlButtons.appendChild(submitButton)

  // Listen to a submit button
  submitButton.addEventListener("click", () => {
    renderProjectTab(input.value)
    projects.childNodes[0].remove()
    
    
  })

}


export { removeProject, createProject, getProjectDetails };
