// IDs

const countdown = document.getElementById("countdown");
const instructions = document.getElementById("instructions");
const numbersList = document.getElementById("numbers-list");
const answersForm = document.getElementById("answers-form");

// funzione numero casuale

// elementi timer
let timeLeft = 3;

const clock = setInterval(() => {
  timeLeft--;
  if (timeLeft <= 0) {
    timeIsOver();
  }
  countdown.textContent = timeLeft;
}, 1000);

const timeIsOver = () => {
  countdown.style.display = "none";
  instructions.style.display = "none";
  answersForm.classList.remove("d-none");
  listElement.style.display = "none";
  clearInterval(clock);
};

// da riprendere per aiuto video tiziano da 20:21
