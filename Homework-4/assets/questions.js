let questions = [
    {
        title: 'Inside which HTML element do we put the JavaScript?',
        choices: ["<scripting>", "<script>", "<javascript>", "<js>"],
        answer: "<script>"
    },
    {
        title: "What is the correct syntax for referring to an external script called \"xxx.js\"?",
        choices: ["<script src=\"xxx.js\">", "<script href=\"xxx.js\">", "<script name=\"xxx.js\">"],
        answer: "<script src=\"xxx.js\">"
    },
    {
        title: "How do you create a function in JavaScript?",
        choices: ["function myFunction()", "function = myFunction()", "function:myFunction()"],
        answer: "function myFunction()"
    },
    {
        title: "How to write an IF statement in JavaScript?",
        choices: ["if i == 5 then", "if (i == 5)", "if i = 5", "if i = 5 then"],
        answer: "if (i == 5)"
    },
    {
        title: "How to write an IF statement for executing some code if \"i\" is NOT equal to 5?",
        choices: ["if i =! 5 then", "if (i <> 5)", "if (i != 5)", "if i <> 5"],
        answer: "if (i != 5)"
    },

];
let score = 0;
let questionIndex = 0;

let currentTime = document.querySelector("#currentTime");
let timer = document.querySelector("#startTime");
let questionsDiv = document.querySelector("#questionsDiv");


let timeRemaining = 60;

let holdInterval = 0;

let penalty = 10;
let questionUl = document.createElement("ul");

timer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            timeRemaining--;
            currentTime.textContent = "Time: " + timeRemaining;
            if (timeRemaining <= 0) {
                clearInterval(holdInterval);
                endGame();
                currentTime.textContent = "Game Over";
            }
        }, 1000);
    }
    addQuestion(questionIndex);
});

function addQuestion(questionIndex) {
    questionsDiv.innerHTML = "";
    questionUl.innerHTML = "";
    for (let i = 0; i < questions.length; i++) {
        let userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    userChoices.forEach(function (newItem) {
        let listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(questionUl);
        questionUl.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct! The answer is:  " + questions[questionIndex].answer;
        } else {
            timeRemaining = timeRemaining - penalty;
            createDiv.textContent = "Wrong! The correct answer is:  " + questions[questionIndex].answer;
        }

    }
    questionIndex++;

    if (questionIndex >= questions.length) {
        endGame();
        createDiv.textContent =  "You got  " + score + "/" + questions.length + " Correct!";
    } else {
        addQuestion(questionIndex);
    }
    questionsDiv.appendChild(createDiv);

}
function endGame() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";

    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = " Done!"

    questionsDiv.appendChild(createH1);

    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsDiv.appendChild(createP);

    if (timeRemaining >= 0) {
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your score is: " + timeRemaining;

        questionsDiv.appendChild(createP2);
    }


    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";

    questionsDiv.appendChild(createLabel);


    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    questionsDiv.appendChild(createInput);

    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    questionsDiv.appendChild(createSubmit);

    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;

        if (initials === null) {

            console.log("No value entered!");

        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            window.location.replace("./scores.html");
        }
    });

}