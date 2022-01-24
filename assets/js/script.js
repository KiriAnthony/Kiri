var buttonSelection = document.querySelector(".button");

var questions = ["Q1", "Q2", "Q3", "Q4", "Q5"];
var answerText = ["A1", "A2", "A3", "A4", "A5"];
var additionalWrongAnswers = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10"];
var scoreRecording = 0;
var index = 0;

// function to intake start button click, output timer start and call display question function
var buttonClickHandler = function(event) {
    if (event.target.matches(".start-btn")) {
        //start timer upon button click
        var timeLimit = 120;
            
        var countDown = setInterval(function() {
            var minutes = Math.floor(timeLimit/60);
            var seconds = timeLimit % 60;
            if (seconds <10) {
                document.querySelector(".timer").innerHTML = minutes + ":0" + seconds;
            }
            else {
                document.querySelector(".timer").innerHTML = minutes + ":" + seconds;
            }
            timeLimit--;

            if(timeLimit <= 0) {
                // update to end quiz when time reaches zero
                clearInterval(countDown);
            }
        }, 1000);
        // Change start button to submit button
        document.querySelector(".btn").style.display = "none";

        var submitDiv = document.createElement("div");
        submitDiv.className = "submit";

        var submitButton = document.createElement("button");
        submitButton.textContent = "Submit";
        submitButton.className = "submit-btn";

        //append button to page
        document.querySelector(".button").appendChild(submitDiv);
        document.querySelector(".submit").appendChild(submitButton);

        // hide paragraph
        document.querySelector(".paragraph").style.display = "none";
        // calling function to display first question
        displayQuestion();
    } else {
        getUserInput();
    }
};

// function to display question
var displayQuestion = function() {
    // display  question
    document.querySelector(".questionDisplay").textContent = questions[index];
    //create a checkbox including the corresponding correct answer and 3 other wrong answers
    document.querySelector(".questions").style.display = "inline";
    document.querySelector(".possibleAnswersDisplay").style.display = "block";
    // randomly select which radiobutton will contain correct answer
    var correctAnswerLocation = randomNum(4);
    // run through for loop to add labels to radio buttons
    for (var i = 0; i < 4; i++) {
        if (i == correctAnswerLocation) {
            var r = document.getElementsByTagName("label");
            r[i].innerHTML = answerText[index];
        } else {
            var r = document.getElementsByTagName("label");
            r[i].innerHTML = additionalWrongAnswers[randomNum(additionalWrongAnswers.length)];
        }
    }
};

var getUserInput = function() {
    const radioButtons = document.querySelectorAll("input[name='answer']");
    let selectedInput;
    for (const radioButton of radioButtons) {
        selectedInput = radioButton.value;
        console.log(selectedInput);
        break;
    }
    // get user input when submit button is clicked
    console.log(selectedInput);
    //var userInput = (select the checkbox that was clicked).text().trim();
    // call correctness function

    //isCorrect(userInput);
    // if (i = questions.length-1) {endQuiz()}
    
};
// function to intake question answer selection, output correctness (boolean) & call next functions
var isCorrect = function (userInput) {
    if (userInput === answerText[index]) {
        //increase score
        scoreRecording++;
        //display "correct"
        document.querySelector(".correct").textContent = "You got question " + index + " correct!";
        index++;
        displayQuestion();
    } else {
        //display "wrong"
        document.querySelector(".correct").textContent = "You got question " + index + " wrong!";
        index++;
        displayQuestion();
    }
};

// function to end quiz (called when all questions answered or when timer runs out)
var endQuiz = function() {
    // display textarea for user initals
    // save the scoreRecording as an object with user initials in localStorage
};

var randomNum = function(max) {
    return Math.floor(Math.random()*max);
};

buttonSelection.addEventListener("click", buttonClickHandler);
//var submitSelection = document.querySelector(".submit");
//submitSelection.addEventListener("click", getUserInput);