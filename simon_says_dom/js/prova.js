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

let timeLeftMs = 30000;
let countdownIntervalId;

// condizioni fine countdown
const timeIsOver = () => {
  countdown.style.display = "none";
  instructions.style.display = "none";
  answersForm.classList.remove("d-none");
  clearInterval(countdownIntervalId);
};

const timerStart = () => {
  countdownIntervalId = setInterval(() => {
    timeLeftMs -= 1000;
    console.log(timeLeftMs);
    if (timeLeftMs <= 0) {
      timeIsOver();
    }
  }, 1000);
};

timerStart();
