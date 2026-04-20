var questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        answer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "NaCl", "O2"],
        answer: "H2O"
    },
    {
        question: "Who is the author of 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "F. Scott Fitzgerald"],
        answer: "Harper Lee"
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: "2"
    }
];

var currentQuestionIndex = 0;
var userAnswers = new Array(questions.length).fill(null);
var timeLeft = 120;
var timerElement = document.getElementById("count-down");

function displayQuestion() {
    var questionElement = document.getElementById("question");
    var progressElement = document.getElementById("progress");

    questionElement.textContent = questions[currentQuestionIndex].question;
    progressElement.textContent =
        "Question " + (currentQuestionIndex + 1) + " of " + questions.length;

    document.getElementById("choice0").textContent = questions[currentQuestionIndex].options[0];
    document.getElementById("choice1").textContent = questions[currentQuestionIndex].options[1];
    document.getElementById("choice2").textContent = questions[currentQuestionIndex].options[2];
    document.getElementById("choice3").textContent = questions[currentQuestionIndex].options[3];

    document.getElementById("btn0").onclick = function () {
        selectAnswer(0);
    };
    document.getElementById("btn1").onclick = function () {
        selectAnswer(1);
    };
    document.getElementById("btn2").onclick = function () {
        selectAnswer(2);
    };
    document.getElementById("btn3").onclick = function () {
        selectAnswer(3);
    };

    updateSelectedOption();
    updateNavigationButtons();
}

function selectAnswer(optionIndex) {
    userAnswers[currentQuestionIndex] = questions[currentQuestionIndex].options[optionIndex];
    updateSelectedOption();
}

function updateSelectedOption() {
    var buttons = [
        document.getElementById("btn0"),
        document.getElementById("btn1"),
        document.getElementById("btn2"),
        document.getElementById("btn3")
    ];

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "";
        buttons[i].style.color = "";
    }

    var selectedAnswer = userAnswers[currentQuestionIndex];

    if (selectedAnswer === questions[currentQuestionIndex].options[0]) {
        buttons[0].style.backgroundColor = "#d633b6";
        buttons[0].style.color = "#fff";
    } else if (selectedAnswer === questions[currentQuestionIndex].options[1]) {
        buttons[1].style.backgroundColor = "#d633b6";
        buttons[1].style.color = "#fff";
    } else if (selectedAnswer === questions[currentQuestionIndex].options[2]) {
        buttons[2].style.backgroundColor = "#d633b6";
        buttons[2].style.color = "#fff";
    } else if (selectedAnswer === questions[currentQuestionIndex].options[3]) {
        buttons[3].style.backgroundColor = "#d633b6";
        buttons[3].style.color = "#fff";
    }
}

function updateNavigationButtons() {
    var prevBtn = document.getElementById("prev-btn");
    var nextBtn = document.getElementById("next-btn");

    prevBtn.disabled = currentQuestionIndex === 0;

    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.textContent = "Submit";
    } else {
        nextBtn.textContent = "Next";
    }
}

document.getElementById("prev-btn").onclick = function () {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
};

document.getElementById("next-btn").onclick = function () {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        endQuiz();
    }
};

function endQuiz() {
    var score = 0;

    for (var i = 0; i < questions.length; i++) {
        if (userAnswers[i] === questions[i].answer) {
            score++;
        }
    }

    document.querySelector(".quiz-box").innerHTML = `
        <h1>Quiz Finished</h1>
        <div class="end-screen">
            <p>Your score is: ${score} / ${questions.length}</p>
        </div>
    `;
}

function startTimer() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        timerElement.textContent = "Time Left: " + timeLeft + " seconds";

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerElement.textContent = "Time's up!";
            endQuiz();
        }
    }, 1000);
}

displayQuestion();
startTimer();