const cards = document.querySelectorAll(".card");
var count = 0;
const congrats = document.getElementById("popup1"); //Congratulations Msg
var score = document.getElementById("score");
var s = 0;

//function to flip card
function flipcard() {
  if (!this.classList.contains("flip") && count < 2) {
    this.classList.add("flip");
    count++;
  }
  if (count == 2) {
    var fliped_cards = document.querySelectorAll(".flip");

    //time set to unflip card
    setTimeout(() => {
      count = 0;
      var s1 = fliped_cards[0].childNodes[3].src;
      var s2 = fliped_cards[1].childNodes[3].src;

      //comparision of flipped cards
      if (s1 == s2) {
        s++;
        score.innerText = "Score: " + s;
        fliped_cards.forEach((card) => {
          card.classList.add("matched");
          congo();
        });
      }
      //if cards ARE mismatched
      fliped_cards.forEach((cards) => cards.classList.remove("flip"));
    }, 1000);
  }
}

//function to shuffle cards
function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 7);
    card.style.order = randomPos;
  });
}
shuffle();

//function to pop up congo msg
function congo() {
  let matched = document.querySelectorAll(".matched");
  console.log(matched.length);
  if (matched.length == 12) {
    congrats.classList.add("show");
  }
}

cards.forEach((card) => card.addEventListener("click", flipcard));
