
// Create a table with new todo
function createTable(title, description, dueDate, priority, i) {
  const newTr = document.createElement("tr")
  const tbody = document.getElementById("tbody")

  const newTitle = document.createElement("td")
  const newDescription = document.createElement("td")
  const newDate = document.createElement("td")
  const newPriority = document.createElement("td")
  const newSpan = document.createElement("span")
  const newIcon = document.createElement("i")

  newTr.setAttribute("id", `tr-${i}`)
  
  newTitle.setAttribute("id", `title-${i}`)
  newTitle.setAttribute("data", `${i}`)

  newDescription.setAttribute("id", `description-${i}`)
  newDescription.setAttribute("data", `${i}`)

  newDate.setAttribute("id", `due_date-${i}`)
  newDate.setAttribute("data", `${i}`)

  newPriority.setAttribute("id", `priority-${i}`)
  newPriority.setAttribute("data-index", `${i}`)

  newSpan.classList.add("icon")
  newSpan.classList.add("is-small")
  newSpan.classList.add("is-right")
  newSpan.setAttribute("id", `span-${i}`)
  newSpan.setAttribute("data-index", `${i}`)
  newSpan.style.margin = "12px"

  newIcon.classList.add("fas")
  newIcon.classList.add("fa-trash-alt")


  newTitle.innerHTML = title
  newDescription.innerHTML = description
  newDate.innerHTML = dueDate
  newPriority.innerHTML = priority


  newTr.appendChild(newTitle)
  newTr.appendChild(newDescription)
  newTr.appendChild(newDate)
  newTr.appendChild(newPriority)
  newTr.appendChild(newSpan)
  newSpan.appendChild(newIcon)

  tbody.appendChild(newTr)

}

export default createTable
