import { getTasksFromLocalStorage } from "./utils/localStorage.js";

let taskList = document.querySelector(".tasksList");

const tasks = getTasksFromLocalStorage("tasks", []);

let tasksArr = tasks.map((task) => createNewTaskListItem(task));
console.log(tasksArr);

taskList.append(...tasksArr);

function createNewTaskListItem(task) {
  const taskListItem = document.createElement("li");
  taskListItem.className = "taskList_item";

  const label = document.createElement("label");
  label.className = "task-item";

  const input = document.createElement("input");
  input.className = "task-item__checkbox";
  input.type = "checkbox";
  input.checked = task.isDone;
  input.setAttribute("name", "tasks");

  const span = document.createElement("span");
  span.className = "task-item__text";
  span.innerText = task.title;

  label.append(input, span);

  taskListItem.append(label);

  return taskListItem;
}

function onClickFilter(date) {
  const filteredTasks = tasks.filter((task) => task.date === date);
  tasksArr = filteredTasks.map((task) => createNewTaskListItem(task));
  taskList.innerHTML = "";
  taskList.append(...tasksArr);
}

const radios = document.querySelectorAll(".dateSelect__input");

radios.forEach((radio) => {
  radio.onclick = () => onClickFilter(radio.value);
});
