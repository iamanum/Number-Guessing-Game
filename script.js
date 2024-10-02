let randomNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
console.log("Random Number:", randomNumber); // Log the random number for debugging
let attempts = 0;

document.getElementById('submit').addEventListener('click', function() {
    const userGuess = Number(document.getElementById('guess').value);
    attempts++;
    
    let resultMessage = '';
    
    if (userGuess === randomNumber) {
        resultMessage = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
        document.getElementById('restart').style.display = 'block';
    } else if (userGuess < randomNumber) {
        resultMessage = 'Too low! Try again.';
    } else {
        resultMessage = 'Too high! Try again.';
    }
    
    document.getElementById('result').textContent = resultMessage;
    document.getElementById('guess').value = '';
});

document.getElementById('restart').addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 10) + 1; // Reset random number between 1 and 10
    console.log("New Random Number:", randomNumber); // Log the new random number for debugging
    attempts = 0;
    document.getElementById('result').textContent = '';
    this.style.display = 'none';
    document.getElementById('guess').value = '';
});
