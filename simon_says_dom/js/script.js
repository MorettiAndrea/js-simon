// IDs

const countdown = document.getElementById("countdown");
const instructions = document.getElementById("instructions");
const numbersList = document.getElementById("numbers-list");
const answersForm = document.getElementById("answers-form");
const formButton = document.getElementById("form-button")
 const inputs = document.querySelectorAll("input");
const message = document.getElementById("message")
const resetBtn = document.getElementById("reset-btn")


// variabili generali
let generatedNumbers = []
let playerNumbers= []

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





// funzione numero casuale

const randomNumbersGenerator = (min,max)=>{
  const rng = Math.floor(Math.random() *(max-min+1)+min)
  return rng
}


  for (let i = 0; generatedNumbers.length < 5;){
    
    const randomNumber = randomNumbersGenerator(1,50);
    if(!generatedNumbers.includes(randomNumber))
   { generatedNumbers.push(randomNumber);
  i++}
   }

 
   const numbersIntoList = generatedNumbers.map((randomNumber)=>`<li>${randomNumber}</li>`)
   
   numbersList.innerHTML = numbersIntoList.join("")

   formButton.addEventListener("click",(e)=>
 { e.preventDefault(); 

  for (let i = 0; i<inputs.length;i++){
    const currentInput= inputs[i]
    const inputValue = parseInt(currentInput.value)
    if(!playerNumbers.includes(inputValue))
      { playerNumbers.push(parseInt(inputValue));}
    else{alert("non puoi inserire due numeri uguali"); 
      playerNumbers=[];
      return}
  }
 
  const matchingNumbers = []
  for(const number of generatedNumbers)
    {
    if(playerNumbers.includes(number))
      {matchingNumbers.push(number)}
   
  }
 resetBtn.classList.remove("d-none")
    resetBtn.classList.add("d-flex")
    resetBtn.addEventListener("click",(e)=>{
      location.reload()
    })

matchingNumbers.length ? message.innerHTML=`Complimenti! hai indovinato i numeri ${matchingNumbers.join(",")}`: message.innerHTML=`Nessun numero indovinato`




  console.log(generatedNumbers);
   console.log(playerNumbers);
   console.log(matchingNumbers);

  })
   
  


  
   