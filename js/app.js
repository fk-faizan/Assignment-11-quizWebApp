window.onload = function () {
  show(0);
  timer();
  let user_name = sessionStorage.getItem("name");
  document.querySelector("span.name").innerHTML = user_name;
  // console.log(user_name)
}

// Questions 
let questions = [
  {
    id: 1,
    question: "What is the full form of RAM ?",
    answer: "Random Access Memory",
    options: [
      "Random Access Memory",
      "Randomely Access Memory",
      "Run Aceapt Memory",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  }
];


function submitForm(e) {
  e.preventDefault();
  let name = document.forms["main-form"]["name"].value;

  if (name !== "") {
    sessionStorage.setItem("name", name);
    location.href = "./quiz.html";
  } else {
    alert("Enter Your Name To Start Quiz !")
  }

  // console.log(name)
}

let question_count = 0;
let points = 0;

function next() {

  if (question_count == questions.length - 1) {
    location.href = "end.html";
    show(0);
    return;
  }

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
    sessionStorage.setItem("tltQues", questions.length);

    console.log(points)
  }
  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let quesDetail = document.getElementById("questions-detail");

  let ef = count + 1;
  let eef = questions.length;

  question.innerHTML = '';
  quesDetail.innerHTML = ef+ ' of ' + eef + ' Question';

  let h2 = document.createElement("h2");
  let h2Text = document.createTextNode(questions[count].question);
  h2.appendChild(h2Text);
  question.appendChild(h2);

  let ul = document.createElement("ul");
  ul.setAttribute('class', 'option-group');
  question.appendChild(ul);

  for (let i = 0; i < questions[count].options.length; i++) {
    let li = document.createElement("li");
    let liText = document.createTextNode(questions[count].options[i]);
    li.setAttribute('class', 'option');
    li.appendChild(liText);
    ul.appendChild(li);
  }

  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}

function timer() {
  let dt = new Date(new Date().setTime(0));
  let ctime = dt.getTime();
  let seconds = Math.floor((ctime % (1000 * 60)) / 1000);
  let minutes = Math.floor((ctime % (1000 * 60 * 60)) / (1000 * 60));
  console.log(seconds, minutes);
  let time = 0;
  let mytime = setInterval(function () {
    time++;

    if (seconds < 35) {
      seconds++;
    } else if (seconds == 35) {
      ++question_count;
      show(question_count);
      seconds = 0
      seconds++
    }
    let formatted_sec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    document.querySelector("span.time").innerHTML = `${formatted_sec}`;
  }, 1000);
}