
function createTable(title, description, dueDate, priority, notes) {
  const tbody = document.getElementById("tbody")
  const newTr = document.createElement("tr")

  const newTitle = document.createElement("td")
  const newDescription = document.createElement("td")
  const newDate = document.createElement("td")
  const newPriority = document.createElement("td")
  
  newTitle.innerHTML = title
  newDescription.innerHTML = description
  newDate.innerHTML = dueDate
  newPriority.innerHTML = priority


  newTr.appendChild(newTitle)
  newTr.appendChild(newDescription)
  newTr.appendChild(newDate)
  newTr.appendChild(newPriority)
  tbody.appendChild(newTr)

}

export default createTable