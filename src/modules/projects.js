// Function that will remove current project
function removeProject() {
    var contentColumn = document.getElementById("content_column");
    var firstChild = contentColumn.firstElementChild;
    while (firstChild) {
      firstChild.remove();
      firstChild = contentColumn.firstElementChild;
    }
}

// Function that will create a column 
function createProject() {

}

// Function that will populate the project depending on dataset.index
function populateProject() {

}

// Function that will create a new project tab
function createProjectTab() {

}

export default removeProject