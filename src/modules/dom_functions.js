
// Create a table with new todo
function createTable(title, description, dueDate, i) {
  const newTr = document.createElement("tr")
  const tbody = document.getElementById("tbody")

  const newTitle = document.createElement("td")
  const newDescription = document.createElement("td")
  const newDate = document.createElement("td")

  const newSpanDetails = document.createElement("span")
  const newIconDetails = document.createElement("i")

  const newSpanRemove = document.createElement("span")
  const newIconRemove = document.createElement("i")

  newTr.setAttribute("id", `tr-${i}`)
  newTr.classList.add("created-tr")
  
  newTitle.setAttribute("id", `title-${i}`)
  newTitle.setAttribute("data", `${i}`)

  newDescription.setAttribute("id", `description-${i}`)
  newDescription.setAttribute("data", `${i}`)

  newDate.setAttribute("id", `due_date-${i}`)
  newDate.setAttribute("data", `${i}`)

  newSpanDetails.classList.add("icon")
  newSpanDetails.classList.add("is-small")
  newSpanDetails.classList.add("is-right")
  newSpanDetails.setAttribute("id", `details-${i}`)
  newSpanDetails.setAttribute("data-index", `${i}`)
  newSpanDetails.style.margin = "12px"

  newIconDetails.classList.add("fas")
  newIconDetails.classList.add("fa-info-circle")

  newSpanRemove.classList.add("icon")
  newSpanRemove.classList.add("is-small")
  newSpanRemove.classList.add("is-right")
  newSpanRemove.setAttribute("id", `remove-${i}`)
  newSpanRemove.setAttribute("data-index", `${i}`)
  newSpanRemove.style.margin = "12px"

  newIconRemove.classList.add("fas")
  newIconRemove.classList.add("fa-trash-alt")


  newTitle.innerHTML = title
  newDescription.innerHTML = description
  newDate.innerHTML = dueDate


  newTr.appendChild(newTitle)
  newTr.appendChild(newDescription)
  newTr.appendChild(newDate)
  newTr.appendChild(newSpanDetails)
  newTr.appendChild(newSpanRemove)
  newSpanDetails.appendChild(newIconDetails)
  newSpanRemove.appendChild(newIconRemove)

  tbody.appendChild(newTr)

}

export default createTable
