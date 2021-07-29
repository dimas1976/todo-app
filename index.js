const taskList = document.querySelector(".tasksList");

const tasks = [
  {
    title: "Book appoinment with Jack",
    date: "tomorrow",
    isDone: true,
  },
  {
    title: "Play tennis with Jane ",
    date: "tomorrow",
    isDone: true,
  },
  {
    title: "Cook delicious dinner",
    date: "tomorrow",
    isDone: false,
  },
  {
    title: "Go to cinema with the whole family",
    date: "tomorrow",
    isDone: false,
  },
];

const tasksArr = tasks.map((task) => createNewTaskListItem(task));

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
