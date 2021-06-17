let container = document.getElementsByClassName("container")[0];
for (let i = 0; i < 324; i++) {
  let box = document.createElement("div");
  box.className = "box";
  container.appendChild(box);
}

let clicked_box = document.querySelectorAll(".box");

clicked_box.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.classList.toggle("white");
  });
});
