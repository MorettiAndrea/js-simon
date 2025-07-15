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
numbersList.classList.add("d-none");
  clearInterval(clock);
};

let generatedNumbers = []

const randomNumbersGenerator = (min,max)=>{
  const rng = Math.floor(Math.random() *(max-min+1)+min)
  return rng
}


  for (let i = 0; generatedNumbers.length < 5;){
    
    const randomNumber = randomNumbersGenerator(1,10);
    if(!generatedNumbers.includes(randomNumber))
   { generatedNumbers.push(randomNumber);
  i++}
   }

   console.log(generatedNumbers);

   const numbersIntoList = generatedNumbers.map((randomNumber)=>`<li>${randomNumber}</li>`)
   
   numbersList.innerHTML = numbersIntoList.join("")