let container = document.getElementsByClassName("container")[0];
for (let i = 0; i < 36; i++) {
  let box = document.createElement("div");
  box.className = "box";
  container.appendChild(box);
}

let boxes = document.querySelectorAll(".box");
var booked_seat = document.querySelector(".booked");
var total_seat = document.querySelector(".total");
var booked = 0;
var total = 36;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.classList.contains("boxclicked")) {
      box.classList.remove("boxclicked");
      booked -= 1;
      total += 1;
    } else {
      box.classList.add("boxclicked");
      booked += 1;
      total -= 1;
    }
    // console.log("booked: " + booked + " total: " + total);
    booked_seat.innerText = "Booked Seat : " + booked;
    total_seat.innerText = "Total Seat : " + total;
  });
});
