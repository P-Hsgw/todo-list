import { populateModal } from "./dom_functions";

// Function that will remove current project
function removeProject() {
    let contentColumn = document.getElementById("content_column");
    let firstChild = contentColumn.firstElementChild;
    while (firstChild) {
      firstChild.remove();
      firstChild = contentColumn.firstElementChild;
    }
}

// Function that will create a column taking data-index as an argument
function createProject() {
  const column = document.getElementById("content_column")

  const content = document.createElement("div") 

  const title = document.createElement("p")

  const table = document.createElement("table")
  const thead = document.createElement("thead")
  const tr = document.createElement("tr")
  const thTitle = document.createElement("th")
  const thDescription = document.createElement("th")
  const thDueDate = document.createElement("th")
  const thActions = document.createElement("th")

  const tBody = document.createElement("tbody")
  const trNewTask = document.createElement("tr")
  const tdNewTask = document.createElement("td")

  column.classList.add("column")
  column.setAttribute("id", "content_column")

  content.classList.add("content")

  title.classList.add("title")
  // title.innerHTML = ""

  table.classList.add("table")
  table.classList.add("is-hoverable")
  table.classList.add("is-fullwidth")

  thTitle.innerHTML = "Title"
  thDescription.innerHTML = "Description"
  thDueDate.innerHTML = "Due Date"
  thActions.innerHTML = "Actions"

  tBody.setAttribute("id", "tbody")
  trNewTask.setAttribute("id", "tr-0")
  trNewTask.setAttribute("data-index", "0")
  tdNewTask.innerHTML = "Add a new task"

  column.appendChild(content)
  content.appendChild(title)
  content.appendChild(table)

  table.appendChild(thead)

  thead.appendChild(tr)
  tr.appendChild(thTitle)
  tr.appendChild(thDescription)
  tr.appendChild(thDueDate)
  tr.appendChild(thActions)

  table.appendChild(tBody)
  tBody.appendChild(trNewTask)
  trNewTask.appendChild(tdNewTask)
}

// Function that will populate the project depending on dataset.index
function populateProject() {

}

// Function that will create a new project tab
function createProjectTab() {

}

export { removeProject, createProject }