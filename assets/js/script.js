var wordBlanks = document.querySelector(".word-blanks");
var startButton = document.querySelector(".start-button");
var timer = document.querySelector(".timer-count");
var winText = document.querySelector(".win");
var loseText = document.querySelector(".lose");
var secondsLeft = 10;
var wins = 0;
var losses = 0;
var guessWords = ["javaScript", "css", "html", "python", "react", "java", "node", "express"];
var underscoreArr = [];
var guessLetters = [];
var isWin = false;

function init() {
    getWins();
    getLosses();
}



function startGame() {
   startTimer();
   startButton.disabled = true;
randomWord();

}

function randomWord() {
    var randomWord = guessWords[Math.floor(Math.random() * guessWords.length)].split("")
    console.log(randomWord.length);
    for (i = 0; i < randomWord.length; i++) {
        underscoreArr.push("_");
        wordBlanks.textContent = underscoreArr.join(" ");
    }
}

function setWins() {
    wins++;
winText.textContent = wins;
localStorage.setItem("wins-saved", wins);
}

function setLosses() {
    losses++;
    loseText.textContent = losses;
    localStorage.setItem("losses-saved", losses);
}

function getWins() {
    var winsSaved = localStorage.getItem("wins-saved");
    winText.textContent = winsSaved;
}

function getLosses() {
    var lossesSaved = localStorage.getItem("losses-saved");
    loseText.textContent = lossesSaved;
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
}, 1000)};

startButton.addEventListener("click", startGame);

init();
