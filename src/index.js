function generateRandomNumber() {
  let number = Math.random();
  number = number * 6;
  number = Math.round(number);
  return number;
}
function insertDiceNumber(i) {
  const diceNumberWrap = document.querySelector(".dice-container.first p");
  diceNumberWrap.textContent = generateRandomNumber();
}

const dado1 = document.querySelector(".button");
const dado2 = document.querySelector(".button.second");
dado1.addEventListener("click", insertDiceNumber);
dado2.addEventListener("click", insertDiceNumber);
