// IDs

const countdown = document.getElementById("countdown");
const instructions = document.getElementById("instructions");
const numbersList = document.getElementById("numbers-list");
const answersForm = document.getElementById("answers-form");

let listElement;

// elementi timer
let timeLeft = 10;
setInterval(() => {
  timeLeft--;
  countdown.textContent = timeLeft;
}, 1000);

// funzione numero casuale
