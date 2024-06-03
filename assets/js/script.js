var startButton = document.querySelector(".start-button");
var timer = document.querySelector(".timer-count");
var secondsLeft = 10;
var wins = 0;
var losses = 0;
var guessWords = ["JavaScript", "CSS", "HTML", "Python", "React", "Java", "Node", "Express"];



function startGame() {
startTimer();

}

function startTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            secondsLeft = 10;
            timer.textContent = secondsLeft;
        }
    }, 1000);
}

startButton.addEventListener("click", startGame);