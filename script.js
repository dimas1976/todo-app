const menuButton = document.querySelector(".menuButton");

menuButton.onclick = sendAlert;
function sendAlert() {
  alert("Hellol World");
}

const taskList = document.querySelector(".tasksList");

taskList.appendChild(createNewTaskListItem());

function createNewTaskListItem() {
  const taskListItem = document.createElement("li");
  taskListItem.className = "taskList_item";

  const label = document.createElement("label");
  label.className = "task-item";

  const input = document.createElement("input");
  input.className = "task-item__checkbox";
  input.setAttribute("type", "checkbox");
  input.setAttribute("name", "tasks");

  const span = document.createElement("span");
  span.className = "task-item__text";
  span.innerText = "Joggen abends 20km";

  label.append(input);
  label.append(span);

  taskListItem.append(label);

  return taskListItem;
}
