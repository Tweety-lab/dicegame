function createDice(number) {
    const dotPositionMatrix = {
      1: [[50, 50]],
      2: [[25, 25], [75, 75]],
      3: [[25, 25], [50, 50], [75, 75]],
      4: [[25, 25], [25, 75], [75, 25], [75, 75]],
      5: [[25, 25], [25, 75], [50, 50], [75, 25], [75, 75]],
      6: [[25, 25], [25, 75], [50, 25], [50, 75], [75, 25], [75, 75]]
    };
  
    const dice = document.createElement("div");
    dice.classList.add("dice");
  
    for (const dotPosition of dotPositionMatrix[number]) {
      const dot = document.createElement("div");
      dot.classList.add("dice-dot");
      dot.style.top = dotPosition[0] + "%";
      dot.style.left = dotPosition[1] + "%";
      dice.appendChild(dot);
    }
  
    return dice;
  }
  
  function rollDice() {
    const diceContainer = document.querySelector(".dice-container");
    const randomDiceNumber = Math.floor(Math.random() * 6) + 1;
    const dice = createDice(randomDiceNumber);
  
    const dicetop = diceContainer.querySelector("#dicetop");
    dicetop.innerHTML = "";
    dicetop.appendChild(dice);
  }
  
  // Center dice on page load
  window.addEventListener("DOMContentLoaded", function() {
    rollDice();
  });
  