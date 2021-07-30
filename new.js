import { saveTasksToLocalStorage } from "./utils/localStorage.js";
import { getTasksFromLocalStorage } from "./utils/localStorage.js";
const form = document.querySelector(".form");
const input = document.querySelector('input[type="text"]');

form.onsubmit = function (event) {
  const checkedRadio = document.querySelector('input[type="radio"]:checked');
  event.preventDefault();
  const newTaskObj = {
    title: "",
    date: "",
    isDone: false,
  };
  newTaskObj.title = input.value;

  newTaskObj.date = checkedRadio.value;

  const oldTask = getTasksFromLocalStorage("tasks", []);

  const tasksArr = [...oldTask, newTaskObj];

  saveTasksToLocalStorage("tasks", tasksArr);

  location.href = "/";
};
