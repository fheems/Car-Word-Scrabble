const words = [
    { word: "brake", clue: "You apply to stop the car." },
    { word: "battery", clue: "If its flat the car wont start." },
    { word: "indicator", clue: "You use to signal others." },
    { word: "horn", clue: "You use to warn or gets somebody's attention." },
    { word: "lights", clue: "You turn them on when visibility is low." }
];
let currentWord = "";
let currentClue = "";
let timer;
let timeLeft = 60;
let correctCount = 0;
let totalCount = 0;

function scrambleWord(word) {
    return word.split('').sort(() => Math.random() - 0.5).join('');
}
// function to start the game below /

function startGame() {
    clearInterval(timer);
    timeLeft = 60;
    correctCount = 0;
    totalCount = 0;
    document.getElementById("time").innerText = timeLeft;
    document.getElementById("correct-count").innerText = correctCount;
    document.getElementById("total-count").innerText = totalCount;
    document.getElementById("result").innerText = "";
    loadNextWord();
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timeLeft--;
    document.getElementById("time").innerText = timeLeft;
    if (timeLeft === 0) {
        clearInterval(timer);
        document.getElementById("result").innerText = "Time's up! The word was: " + currentWord;
    }
}
// function to check if answer is coorect below /
function checkAnswer() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.toLowerCase() === currentWord) {
        document.getElementById("result").innerText = "Correct!";
        correctCount++;
        document.getElementById("correct-count").innerText = correctCount;
    } else {
        document.getElementById("result").innerText = "Try again!";
    }
    totalCount++;
    document.getElementById("total-count").innerText = totalCount;
    loadNextWord();
}
// function to skip word if user doesnt know below /

function skipWord() {
    totalCount++;
    document.getElementById("total-count").innerText = totalCount;
    loadNextWord();
}
// function to get a clue below /

function giveClue() {
    document.getElementById("result").innerText = "Clue: " + currentClue;
}
// function to load the next word below /

function loadNextWord() {
    const wordObject = words[Math.floor(Math.random() * words.length)];
    currentWord = wordObject.word;
    currentClue = wordObject.clue;
    document.getElementById("scrambled-word").innerText = scrambleWord(currentWord);
    document.getElementById("user-input").value = "";
}
