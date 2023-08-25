let words = [
  { word: "apple", hint: "A fruit" },
  { word: "banana", hint: "A yellow fruit" },
  { word: "cherry", hint: "A red fruit" },
  { word: "grape", hint: "A small fruit" },
  { word: "orange", hint: "A citrus fruit" },
  { word: "pear", hint: "A fruit that is not an apple" },
  { word: "strawberry", hint: "A red fruit with seeds on the outside" },
  { word: "watermelon", hint: "A large green fruit with a red inside" },
];

let chosenWord = "";
let wordHint = "";
let lettersInChosenWord = [];
let numBlanks = 0;
let blanksAndSuccesses = [];
let wrongGuesses = [];

let winCounter = 0;
let lossCounter = 0;
let numGuesses = 9;

function startGame() {
  wordHint = "";
  numGuesses = 9;
  chosenObj = words[Math.floor(Math.random() * words.length)];
  chosenWord = chosenObj.word;
  wordHint = chosenObj.hint;
  lettersInChosenWord = chosenWord.split("");
  numBlanks = lettersInChosenWord.length;
  blanksAndSuccesses = [];
  wrongGuesses = [];
  blanksAndSuccesses = Array(numBlanks).fill("_");
  document.getElementById("hint").innerHTML = "Hint:" + " " + wordHint;
  document.getElementById("guesses-left").innerHTML = numGuesses;
  document.getElementById("word-blanks").innerHTML =
    blanksAndSuccesses.join(" ");
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}

function checkLetters(letter) {
  let letterInWord = false;

  for (let i = 0; i < numBlanks; i++) {
    if (chosenWord[i] === letter) {
      letterInWord = true;
    }
  }

  if (letterInWord) {
    for (let j = 0; j < numBlanks; j++) {
      if (chosenWord[j] === letter) {
        blanksAndSuccesses[j] = letter;
      }
    }
  } else {
    wrongGuesses.push(letter);
    numGuesses--;
  }
}

function roundComplete() {
  document.getElementById("guesses-left").innerHTML = numGuesses;
  document.getElementById("word-blanks").innerHTML =
    blanksAndSuccesses.join(" ");
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

  if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
    winCounter++;
    alert("You win!");
    document.getElementById("win-counter").innerHTML = winCounter;
    startGame();
  } else if (numGuesses === 0) {
    lossCounter++;
    alert("You lose");
    document.getElementById("loss-counter").innerHTML = lossCounter;
    startGame();
  }
}

startGame();
document.onkeyup = (event) => {
  let letterGuessed = event.key.toLowerCase();
  checkLetters(letterGuessed);
  roundComplete();
};
