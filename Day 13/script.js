const btn = document.querySelector("button");
let div = document.querySelector("div");

let work = document.createElement("p");
let type = document.createElement("p");

btn.addEventListener("click", fetchwork);
function fetchwork() {
  fetch(`https://www.boredapi.com/api/activity/`)
    .then((res) => res.json())
    .then((data) => {
      getresponse(data);
    });
}

function getresponse(data) {
  work.innerHTML = "";
  type.innerHTML = "";
  work.innerHTML = "Work : " + data.activity;
  type.innerHTML = "Type of work : " + data.type;
  div.append(work);
  div.append(type);
}
