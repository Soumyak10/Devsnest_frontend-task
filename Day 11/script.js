const questions = [
  {
    question: " How many time zones are there in Russia?",
    options: ["10", "11", "12", "13"],
    ans: "10",
  },
  {
    question: "For which of the following disciplines is Nobel Prize awarded?",
    options: [
      "All of the above",
      "Physics and Chemistry",
      "Physiology or Medicine",
      "Literature, Peace and Economics",
    ],
    ans: "All of the above",
  },

  {
    question: "What's the biggest animal in the world?",
    options: ["The blue whale", "Elephant", "Rhinosaures", "All of the above"],
    ans: "The blue whale",
  },

  {
    question:
      "Who was the first Indian Chief of Army Staff of the Indian Army ?",
    options: [
      "Gen. K.M. Cariappa",
      "Vice-Admiral R.D. Katari",
      "Gen. Maharaja Rajendra Singhji",
      "None of the above",
    ],
    ans: "Gen. K.M. Cariappa",
  },

  {
    question: "FRS stands for",
    options: [
      "Fellow Research System",
      "Federation of Regulation Society",
      "Fellow of Royal Society",
      "None of the above",
    ],
    ans: "Fellow Research System",
  },
];

let body = document.querySelector("body");
let container = document.createElement("div");
let front = document.getElementsByClassName("front")[0];
let scard = document.getElementById("popup");
let s = document.querySelector("h3");
let playagain = document.querySelectorAll("button")[0];
let exit = document.querySelectorAll("button")[1];

console.log(playagain);

var qno = -1;
var score = 0;
let f = 0;

function createque() {
  container.classList.add("quiz-container");

  let que = document.createElement("h2");
  que.classList.add("question");
  que.innerText = questions[qno].question;

  let optionholder = document.createElement("div");
  optionholder.classList.add("options");

  let options = questions[qno].options;
  shuffle(options);

  let count = 1;

  options.forEach((element) => {
    let opt = createopt(element, optionholder);
    opt.addEventListener("click", () => {
      if (count == 1) {
        if (opt.innerText == questions[qno].ans) {
          opt.classList.add("correct");
          score++;
          s.innerHTML = "Score : " + score;
          console.log(s);
        } else {
          opt.classList.add("wrong");
        }
        count++;
      } else {
        alert("You have choosed one option! Click on next to continue");
        opt.disabled = true;
      }
    });
  });

  // container.appendChild(front);
  container.appendChild(que);
  container.appendChild(optionholder);
  body.appendChild(container);
}

function createopt(text, parent) {
  let option = document.createElement("button");
  option.classList.add("option");
  option.innerText = text;
  parent.appendChild(option);
  return option;
}

function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function nxt() {
  let next = document.createElement("button");
  next.classList.add("next");
  next.innerText = "NEXT";

  body.appendChild(next);

  next.addEventListener("click", () => {
    if (f == 0) {
      front.classList.add("hide");
      f++;
    }
    qno++;

    if (qno == questions.length) {
      scard.classList.add("show");
      body.removeChild(next);

      playagain.addEventListener("click", () => {
        qno = 0;
        score = 0;
        createque();
        scard.classList.remove("show");
        body.appendChild(next);
      });

      exit.addEventListener("click", () => {
        body.innerHTML = "";
        let Thank = document.createElement("h3");
        Thank.innerHTML = "Thank You for playing!";
        Thank.classList.add("thank");
        body.appendChild(Thank);
      });
    }

    container.innerHTML = "";
    createque();
  });
}

nxt();
