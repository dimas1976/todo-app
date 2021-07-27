const menuButton = document.querySelector(".menuButton");

menuButton.onclick = sendAlert;
function sendAlert() {
  alert("Hellol World");
}

const taskList = document.querySelector(".tasksList");
const newTask = document.createElement("li");
newTask.innerText = "Example task";
taskList.append(newTask);

function createNewTaskListItem() {
  const taskListItem = document.createElement("li");
  taskListItem.className = "taskList_item";

  const label = document.createElement("label");
  label.className = "task-item";

  const input = document.createElement("input");
  input.className = "task-item__checkbox";

  const span = document.createElement("span");
  span.className = "task-item__text";

  label.append(input);
  label.append(span);

  taskListItem.append(label);

  return taskListItem;
}
