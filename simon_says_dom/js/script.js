// IDs

const coundown = document.getElementById("countdown");
const instructions = document.getElementById("instruction");
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
