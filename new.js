const form = document.querySelector(".form");
const checkedInput = document.querySelector('input[type="text"]');
const checkedRadio = document.querySelector('input[type="radio"]:checked');

form.onsubmit = function (event) {
  event.preventDefault();
  console.log(
    "Input value:: " +
      checkedInput.value +
      "\n" +
      "Radio value:: " +
      checkedRadio.value
  );
};
