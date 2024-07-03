// variable to store four multiple choice questions and answers about cosmology
var multiple_choice = [
    {
        question: "What is the name of the theory that describes a universe where gravity wins over dark energy?",
        answers: {
            a: "The Big Crunch",
            b: "The Big Rip",
            c: "The Big Freeze",
            d: "The Big Bounce"
        },
        correct_answer: "a"
    },
    {
        question: "What is the name of the theory that describes a universe where dark energy wins over gravity?",
        answers: {
            a: "The Big Crunch",
            b: "The Big Rip",
            c: "The Big Freeze",
            d: "The Big Bounce"
        },
        correct_answer: "b"
    },
    {
        question: "What is the name of the theory that describes a universe where dark energy and gravity are in balance?",
        answers: {
            a: "The Big Crunch",
            b: "The Big Rip",
            c: "The Big Freeze",
            d: "The Big Bounce"
        },
        correct_answer: "c"
    },
    {
        question: "What is the name of the theory that describes a universe that expands and contracts in a cycle?",
        answers: {
            a: "The Big Crunch",
            b: "The Big Rip",
            c: "The Big Freeze",
            d: "The Big Bounce"
        },
        correct_answer: "d"
    }
];
// variable to store 3 written answer questions
var free_selection = [
    {
        question: "What is the name of Github's coding assistant?",
        correct_answer: "copilot"
    },
    {
        question: "What is the name of the programming language that is used to style web pages?",
        correct_answer: "css"
    },
    {
        question: "What is the name of the programming language that is used to make web pages interactive?",
        correct_answer: "javascript"
    }
];
// function to build the multiple choice questions with clickable buttons (not radio buttons)
function buildMultipleChoice() {
var output = [];
multiple_choice.forEach(
(current_question, question_number) => {
    var answers = [];
    for (letter in current_question.answers) {
        answers.push(
            `<button onclick="checkAnswer(this, '${current_question.correct_answer}')">${letter}: ${current_question.answers[letter]}</button>`
        );
    }
    output.push(
        `<div class="question"> ${current_question.question} </div>
        <div class="answers"> ${answers.join('')} </div><br>`
    );
}
);
document.getElementById('question1').innerHTML = output.join('');
}

// function turn the correct button green and the incorrect button red, and grey out all other buttons
// function to print Correct! or Incorrect! below each question after clicking an answer
function checkAnswer(button, correct_answer) {
    if (button.textContent[0] == correct_answer) {
        button.style.backgroundColor = "#10A010";
        var result = "Correct!"

    } else {
        button.style.backgroundColor = "red";
        var result = "Incorrect!"
    }
    button.style.color = "black";
    button.disabled = true;
    button.style.transform = "translateY(-4px) rotate(-3deg)";
    button.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.2)";
    var buttons = button.parentElement.children;
    for (var i = 0; i < buttons.length; i++) {
    if (buttons[i] != button) {
        buttons[i].style.backgroundColor = "lightgray";
        buttons[i].disabled = true;
        }
    }
    button.parentElement.insertAdjacentHTML('beforeend', `<div class="result">${result}</div>`);
}
// function to build written answer questions with a text field and submit button
function buildFreeSelection() {
    var output = [];
    free_selection.forEach(
    (current_question, question_number) => {
        output.push(
            `<div class="question"> ${current_question.question} </div>
            <input type="text" id="answer${question_number}">
            <button onclick="checkFreeSelection(${question_number}, '${current_question.correct_answer}')">Submit</button><br>`
        );
    }
    );
    document.getElementById('question2').innerHTML = output.join('');
}

// function to print Correct! or Incorrect and the correct answer below each question after clicking the button
function checkFreeSelection(question_number, correct_answer) {
    var answer = document.getElementById(`answer${question_number}`).value;
        if (answer.toLowerCase() == correct_answer) {
        var result = "Correct!"
    } else {
       var result = "Incorrect. The correct answer is " + correct_answer + "."
    }
    document.getElementById(`answer${question_number}`).disabled = true;
    document.getElementById(`answer${question_number}`).style.backgroundColor = "lightgray";
    document.getElementById(`answer${question_number}`).insertAdjacentHTML('afterend', `<div class="result">${result}</div>`);
    // Disable the button after it is clicked
    var button = document.querySelector(`button[onclick="checkFreeSelection(${question_number}, '${correct_answer}')"]`);
    button.disabled = true;
    button.style.color = "black";
    if (result == "Correct!") {
        button.style.backgroundColor = "#10A010";
    } else {
        button.style.backgroundColor = "red";
    }
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("myHeader").style.fontSize = "24px";
    } else {
      document.getElementById("myHeader").style.fontSize = "48px";
    }
    // increase height of footer when reaching the bottom of the page
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        document.getElementById("footer").style.bottom = "0px";
    } else {
        document.getElementById("footer").style.bottom = "-50px";
    }
}