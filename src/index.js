const dado1 = document.querySelector(".button.first");
const dado2 = document.querySelector(".button.second");
const dado3 = document.querySelector(".button.third");
dado1.addEventListener("click", insertDiceNumberFirst);
dado2.addEventListener("click", insertDiceNumberSecond);
dado3.addEventListener("click", insertDiceNumberThird);

function generateRandomNumber() {
  let number = Math.random();
  number = number * 6;
  number = Math.round(number);
  return number;
}
function insertDiceNumberFirst() {
  const diceNumberWrap = document.querySelector(".dice-container.first p");
  diceNumberWrap.textContent = generateRandomNumber();
}

function insertDiceNumberSecond() {
  const diceNumberWrap = document.querySelector(".dice-container.second p");
  diceNumberWrap.textContent = generateRandomNumber();
}

function insertDiceNumberThird() {
  const diceNumberWrap = document.querySelector(".dice-container.third p");
  diceNumberWrap.textContent = generateRandomNumber();
}
