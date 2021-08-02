import {
  stringifyJSONToLocalStorage,
  parseJSONFromLocalStorage,
} from "./utils/localStorage.js";

const form = document.querySelector(".form");
const input = document.querySelector('input[type="text"]');

form.onsubmit = function (event) {
  const checkedRadio = document.querySelector('input[type="radio"]:checked');
  event.preventDefault();
  const newTask = {
    title: "",
    date: "",
    isDone: false,
  };
  newTask.title = input.value;

  newTask.date = checkedRadio.value;

  const oldTasks = parseJSONFromLocalStorage("tasks", []);

  const newTasks = [...oldTasks, newTask];

  stringifyJSONToLocalStorage("tasks", newTasks);

  location.href = "/";
};
