const taskList = document.querySelector(".tasksList");

const newTaskObj = {
  title: "Listen to music",
  date: "tomorrow",
  isDone: true,
};

const taskOne = createNewTaskListItem(newTaskObj);

taskList.append(taskOne);

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
