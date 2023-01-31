const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (!input.value) return;
  
  let todo = input.value;
  input.value = "";

  let li = document.createElement("li");
  li.textContent = todo;

  let button = document.createElement("button");
  button.textContent = "Delete";
  button.addEventListener("click", function() {
    li.remove();
  });

  li.appendChild(button);
  list.appendChild(li);
});

  