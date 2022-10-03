
const dado = document.querySelector(".button");
dado.addEventListener("click", insertDiceNumber);

function throwDice() {
  let number = Math.random();
  number = number * 6;
  number = Math.round(number);
  return number;
}
function insertDiceNumber() {
  const diceNumberWrap = document.querySelector(".dice-container p");
  diceNumberWrap.textContent = throwDice();
}
