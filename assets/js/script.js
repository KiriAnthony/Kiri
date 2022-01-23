var buttonSelection = document.querySelector(".button");

var questions = [];
var answerText = [];
var additionalWrongAnswers = [];
var scoreRecording = 0;

// update count down every 1 second

// function to intake start button click, output timer start and call display question function
var buttonClickHandler = function() {
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
    
}
// function to display question

// function to intake question answer selection, output correctness (boolean) & call next functions

// function input boolean, output "correct" and next question if true & scoreRecording++/"wrong" and next question if false

// function to end quiz (called when all questions answered or when timer runs out)

buttonSelection.addEventListener("click", buttonClickHandler);