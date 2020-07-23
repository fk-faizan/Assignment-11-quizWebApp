window.onload = function() {
    show(0);
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

    if(name !== "") {
        sessionStorage.setItem("name", name);
        location.href = "./quiz.html";
    } else {
        alert("Enter Your Name To Start Quiz !")
    }

    // console.log(name)
}

let question_count = 0;

function next() {
    question_count++;
    show(question_count);
}

function show(count) {
    let question = document.getElementById("questions");

    question.innerHTML = '';

    let h2 = document.createElement("h2");
    let h2Text = document.createTextNode(questions[count].question);
    h2.appendChild(h2Text);
    question.appendChild(h2);

    let ul = document.createElement("ul");
    ul.setAttribute('class', 'option-group');
    question.appendChild(ul);

    for(var i = 0; i < questions[count].options.length; i++) {
        let li = document.createElement("li");
        let liText = document.createTextNode(questions[count].options[i]);
        li.setAttribute('class', 'option');
        li.appendChild(liText);
        ul.appendChild(li);
    }

    // console.log(question)

    // question.innerHTML = "<h2>" + questions[count].question + "</h2>";
    // print li with loop

}
