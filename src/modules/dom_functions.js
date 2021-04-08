// Create a table with new todo
function createTable(title, description, dueDate, i) {
  const newTr = document.createElement("tr");
  const tbody = document.getElementById("tbody");

  const newTitle = document.createElement("td");
  const newDescription = document.createElement("td");
  const newDate = document.createElement("td");

  const newSpanDetails = document.createElement("span");
  const newIconDetails = document.createElement("i");

  const newSpanRemove = document.createElement("span");
  const newIconRemove = document.createElement("i");

  const newA1 = document.createElement("a");
  const newA2 = document.createElement("a");

  newTr.setAttribute("id", `tr-${i}`);
  newTr.classList.add("created-tr");

  newTitle.setAttribute("id", `title-${i}`);
  newTitle.setAttribute("data", `${i}`);

  newDescription.setAttribute("id", `description-${i}`);
  newDescription.setAttribute("data", `${i}`);

  newDate.setAttribute("id", `due_date-${i}`);
  newDate.setAttribute("data", `${i}`);

  newSpanDetails.classList.add("icon");
  newSpanDetails.classList.add("is-small");
  newSpanDetails.classList.add("is-right");
  newSpanDetails.setAttribute("id", `details-${i}`);
  newSpanDetails.setAttribute("data-index", `${i}`);
  newSpanDetails.style.margin = "12px";

  newIconDetails.classList.add("fas");
  newIconDetails.classList.add("fa-info-circle");

  newSpanRemove.classList.add("icon");
  newSpanRemove.classList.add("is-small");
  newSpanRemove.classList.add("is-right");
  newSpanRemove.setAttribute("id", `remove-${i}`);
  newSpanRemove.setAttribute("data-index", `${i}`);
  newSpanRemove.style.margin = "12px";

  newIconRemove.classList.add("fas");
  newIconRemove.classList.add("fa-trash-alt");

  newTitle.innerHTML = title;
  newDescription.innerHTML = description;
  newDate.innerHTML = dueDate;

  newTr.appendChild(newTitle);
  newTr.appendChild(newDescription);
  newTr.appendChild(newDate);
  newTr.appendChild(newSpanDetails);
  newTr.appendChild(newSpanRemove);
  newSpanDetails.appendChild(newA1);
  newSpanRemove.appendChild(newA2);
  newA1.appendChild(newIconDetails);
  newA2.appendChild(newIconRemove);

  tbody.appendChild(newTr);
}

// Fill a modal 1 with data taken from todos variable, depending on a button choice
function populateModal(title, description, dueDate, priority, notes) {
  const todoTitle = document.getElementById("control-1").children[0];
  const todoDescription = document.getElementById("control-2").children[0];
  const todoDueDate = document.getElementById("control-3").children[0];
  const todoPriority = document.getElementById("select-1").options;
  const todoNotes = document.getElementById("control-5").children[0];

  todoTitle.value = title;
  todoDescription.value = description;
  todoDueDate.value = dueDate;
  // Check wich option is chosen in todo and set it as default
  for (let n = 0; n < todoPriority.length; ++n) {
    if (todoPriority[n].value === priority) {
      todoPriority[n].defaultSelected = true;
    } else {
      todoPriority[n].defaultSelected = false;
    }
  }
  todoNotes.value = notes;
}

export { createTable, populateModal };
