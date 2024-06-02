var startButton = document.querySelector(".start-button");
var timer = document.querySelector(".timer-count");
var secondsLeft = 10;

function startGame() {
startTimer();

}

function startTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

startButton.addEventListener("click", startGame);