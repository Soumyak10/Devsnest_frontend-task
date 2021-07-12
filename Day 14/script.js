let btn = document.querySelector("button");
let img = document.querySelector("img");
let container = document.getElementsByClassName("container")[0];
let next = document.createElement("button");
let note = document.createElement("h4");
let heading = document.createElement("h2");
var v = document.createElement("video");

next.innerHTML = "NEXT";

btn.addEventListener("click", () => {
  img.classList.add("show");
  note.innerHTML = "Double click image to zoom in or out";
  container.appendChild(note);
  container.appendChild(next);
});

img.addEventListener("dblclick", () => {
  img.classList.toggle("zoom");
});

next.addEventListener("click", () => {
  container.innerHTML = "";
  heading.innerHTML = "Video Events";
  note.innerHTML = "Use forward arrow keys to move 1 sec forward or backward";
  container.appendChild(heading);
  v.src = "./video/trimed.mp4";
  v.controls = true;
  container.appendChild(v);
  container.appendChild(note);
});

document.addEventListener("keypress", (e) => {
  console.log("working");
  if (e.key === ArrowLeft) {
    v.currentTime = Math.max(0, v.currentTime - 10);
  } else if (e.key === ArrowRight) {
    v.currentTime = Math.min(v.duration, v.currentTime + 10);
  }
});
