/*
Napisz skrypt, który po kliknięciu przycisku «Start», 
raz na sekundę zmienia kolor tła <body> na wartość 
losową używając stylu inline. 
Po kliknięciu przycisku «Stop», kolor tła powinien 
przestać się zmieniać.
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerID = null;

// function startChangingColors() {
//   const randomColor = getRandomHexColor();
//   body.style.backgroundColor = randomColor;
//   console.log(`Background color is: ${randomColor}`);
// }

startBtn.addEventListener('click', () => {
  timerID = setInterval(() => {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
    console.log(`Background color is: ${randomColor}`);
    startBtn.disabled = true;
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerID);
  console.log('Changing color has stopped.');
  startBtn.disabled = false;
});
