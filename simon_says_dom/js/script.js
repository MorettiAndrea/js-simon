// IDs

const countdown = document.getElementById("countdown");
const instructions = document.getElementById("instructions");
const numbersList = document.getElementById("numbers-list");
const answersForm = document.getElementById("answers-form");

// funzione numeri casuali

function fromRandomToArray() {
  let randomArray = [];

  // Genera 5 numeri casuali
  for (let i = 0; i < 5; i++) {
    let randomNumbers = Math.floor(Math.random() * 50) + 1;
    randomArray.push(randomNumbers);
  }

  return randomArray;
}

console.log(fromRandomToArray());

// creazione timer

let timeLeftMs = 3000;
let countdownIntervalId;

// condizioni fine countdown
const timeIsOver = () => {
  if (timeLeftMs === 0) {
    countdown.style.display = "none";
    instructions.style.display = "none";
    answersForm.classList.remove("d-none");
    clearInterval(countdownIntervalId);
  }
  return timeIsOver;
};
const timerStart = () => {
  timeLeftMs -= 1000;
  countdownIntervalId = setInterval(timeLeftMs, 1000);
  return countdownIntervalId;
};
timeIsOver();
timerStart();
console.log(timeIsOver);
console.log(timerStart);
