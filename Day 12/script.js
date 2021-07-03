function addtodo(event) {
  let todos = document.getElementById("todo-container");

  if (event.code == "Enter") {
    let todo = document.getElementById("todo-input").value;
    if (todo) {
      let list = `<li>
        <span>
          <i class="fa fa-minus"></i>
        </span>
        ${todo}
      </li>`;
      // console.log(list);
      let container = document.getElementById("todo-container");
      container.innerHTML += list;
      document.getElementById("todo-input").value = "";
    } else {
      alert("Enter a value");
    }
    localStorage.setItem("todos", todos.innerHTML);
  }

  var listitems = document.querySelector("ul");

  listitems.addEventListener("click", (event) => {
    if (event.target.tagName === "I") {
      event.target.parentElement.parentElement.remove();
    }
    if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
    }
    // if (event.classList.contains("completed")) {
    //   event.classList.remove("completed");
    // } else {
    //   event.classList.add("completed");
    // }
    localStorage.setItem("todos", todos.innerHTML);
  });

  let todoList = localStorage.getItem("todos");
  console.log(todoList);
  todos.innerHTML = todoList;
}
