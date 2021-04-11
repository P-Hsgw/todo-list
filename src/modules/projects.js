import { toggleModal, addActive } from "./event_listeners";

let projectsArray = [];

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
  const projectTitle = document.getElementById(`project-${index.target.dataset.index}`);

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const thTitle = document.createElement("th");
  const thDescription = document.createElement("th");
  const thDueDate = document.createElement("th");
  const thActions = document.createElement("th");

  const tBody = document.createElement("tbody");
  const trNewTask = document.createElement("button");
  const textSpan = document.createElement("span")
  const iconSpan = document.createElement("span")
  const icon = document.createElement("i")

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
  trNewTask.classList.add("button")
  trNewTask.classList.add("is-info")

  iconSpan.classList.add("icon")
  iconSpan.classList.add("is-small")
  icon.classList.add("fas")
  icon.classList.add("fa-plus-circle")

  textSpan.innerHTML = "Add new task"

  column.appendChild(content);
  content.appendChild(title);

  content.appendChild(trNewTask);
  trNewTask.appendChild(iconSpan)
  iconSpan.appendChild(icon)
  trNewTask.appendChild(textSpan)

  content.appendChild(table);

  table.appendChild(thead);

  thead.appendChild(tr);
  tr.appendChild(thTitle);
  tr.appendChild(thDescription);
  tr.appendChild(thDueDate);
  tr.appendChild(thActions);


  table.appendChild(tBody);

  const firstTable = document.getElementById("tr-0");

  firstTable.addEventListener("click", (e) => {
    toggleModal(e);
  });
}

function Project(name, index) {
  const eventProjectListeners = () => {
    const projectsTab = document.querySelectorAll(".project");
    for (let project of projectsTab) {
      project.addEventListener("click", (e) => {
        removeProject(); // Remove all projects from column
        createProject(e); // Creates new projects
        function removeActive() {
          const projectsTab = document.querySelectorAll(".project");
          for (let i = 0; i < projectsTab.length; i++) {
            projectsTab[i].classList.remove("is-active");
          }
        }
        removeActive();
        addActive(e);

        // Create a function to render a projectTab depending on dataset.index
        // Rendering function will need to take todos array and return only arrays with specific dataset.index
      });
    }
  };
  return { name, index, eventProjectListeners };
}

function pushProjects(name, index) {
  const project = Project(name, index);
  projectsArray.push(project);
}

function addProjectToStorage() {
  localStorage.setItem("projects", JSON.stringify(projectsArray))
}

// Function that will populate the project depending on dataset.index 
// function populateProject() {


// Create a new project tab in menu bar
function renderProjectTab(i, value) {
  const projects = document.getElementById("created_projects");
  const li = document.createElement("li");
  const a = document.createElement("a");

  a.classList.add("project");
  a.setAttribute("data-index", i);
  a.setAttribute("id", `project-${i}`);

  projects.appendChild(li);
  li.appendChild(a);

  if (value != "") {
    a.innerHTML = value;
  } else {
    a.innerHTML = "Project";
  }
}

// Pulls projects from dataStorage and calls function to render them
function getProjectsFromStorage() {
  projectsArray.forEach(function (project) {
      renderProjectTab(project.index, project.name)
  })
}

  if (!localStorage.getItem("projects")) {
    // eslint-disable-next-line no-extra-semi
  } else {
    let retrievedData = localStorage.getItem("projects");
    projectsArray = JSON.parse(retrievedData);
    console.log(projectsArray);
    getProjectsFromStorage() 
    
  }


function getProjectDetails() {
  const projects = document.getElementById("add_new");
  const div = document.createElement("div");
  const fieldInput = document.createElement("div");
  const controlInput = document.createElement("div");
  const input = document.createElement("input");
  const fieldButtons = document.createElement("div");
  const controlButtons = document.createElement("div");
  const submitButton = document.createElement("button");

  div.setAttribute("id", "form-wrapper");
  fieldInput.classList.add("field");
  controlInput.classList.add("control");
  input.classList.add("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Project name");
  input.setAttribute("id", "input-0");
  fieldButtons.classList.add("field");
  controlButtons.classList.add("control");
  submitButton.classList.add("button");
  submitButton.classList.add("is-primary");
  submitButton.classList.add("is-fullwidth")
  submitButton.innerHTML = "Add";

  projects.prepend(div);
  div.appendChild(fieldInput);
  div.appendChild(fieldButtons);

  fieldInput.appendChild(controlInput);
  controlInput.appendChild(input);

  fieldButtons.appendChild(controlButtons);
  controlButtons.appendChild(submitButton);

  // Listen to a submit button
  submitButton.addEventListener("click", () => {
    pushProjects(input.value, projectsArray.length + 2);
    const project = projectsArray[projectsArray.length - 1];
    renderProjectTab(projectsArray.length + 1, project.name);
    projects.childNodes[0].remove();
    // project.eventProjectListeners();
    addProjectToStorage()

  });
}

export { removeProject, createProject, getProjectDetails };