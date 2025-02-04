
const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

let targetColor = "";
let score = 0; //handle score

let colorBox = document.getElementById("colorBox");
let colorOptions = document.getElementById("colorOptions");
let gameStatus = document.getElementById("gameStatus");
let scoreDisplay = document.getElementById("score");
let newGameButton = document.getElementById("newGameButton");

//start game
function startGame() {
    targetColor = colors[Math.floor(Math.random() * colors.length)];
     colorBox.style.backgroundColor = "grey";
     isColorRevealed = false; 
console.log(targetColor);
    
    gameStatus.textContent = "";
    

    colorOptions.innerHTML = ""; 

    colors.forEach(color => {
        const button = document.createElement("button");
        
        button.style.backgroundColor = color ;
        button.setAttribute("data-testid", "colorOption");
        button.onclick = () => checkGuess(color);
        colorOptions.appendChild(button);
    });
}

// Function to check users guess
function checkGuess(selectedColor) {
    if (selectedColor === targetColor && !isColorRevealed) {
        gameStatus.innerHTML = "Correct! 🚀";
        gameStatus.style.color = "green";          colorBox.style.backgroundColor = targetColor;
          isColorRevealed = true; 
        score++;
    } else {
        gameStatus.textContent = "Wrong! Please Try again. ❌";
        gameStatus.style.color = "red";
    }
    scoreDisplay.textContent = score;
}

// Event listener for new game button
newGameButton.addEventListener("click", startGame);

startGame();


function checkGuess(selectedColor) {
    if (selectedColor === targetColor) {
        gameStatus.textContent = "Correct! 🚀";
        gameStatus.style.color = "green";
        colorBox.style.backgroundColor = targetColor;
        colorBox.classList.add("correct");
        setTimeout(() => colorBox.classList.remove("correct"), 500);
        score++;
    } else {
        gameStatus.textContent = "Wrong! Try again. ❌";
        gameStatus.style.color = "red";
        colorBox.classList.add("wrong");
        setTimeout(() => colorBox.classList.remove("wrong"), 300);
    }
    scoreDisplay.textContent = score;
}
