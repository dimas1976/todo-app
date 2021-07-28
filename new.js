const form = document.querySelector(".form");
const input = document.querySelector('input[type="text"]');
const checkedRadio = document.querySelector('input[type="radio"]:checked');

form.onsubmit = function (event) {
  event.preventDefault();
  const newTaskObj = {
    title: "",
    date: "",
    isDone: false,
  };
  newTaskObj.title = input.value;
  newTaskObj.date = checkedRadio.value;
  console.log(
    `Input value ${newTaskObj.title} und 
${newTaskObj.date}`
  );
};
