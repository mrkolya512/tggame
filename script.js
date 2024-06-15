document.addEventListener('DOMContentLoaded', () => {
    const guessInput = document.getElementById('guess');
    const submitButton = document.getElementById('submit');
    const message = document.getElementById('message');
    
    const targetNumber = Math.floor(Math.random() * 100) + 1;
    
    submitButton.addEventListener('click', () => {
        const userGuess = parseInt(guessInput.value);
        
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            message.textContent = 'Будь ласка, введіть число від 1 до 100';
            return;
        }
        
        if (userGuess < targetNumber) {
            message.textContent = 'Більше!';
        } else if (userGuess > targetNumber) {
            message.textContent = 'Менше!';
        } else {
            message.textContent = 'Вітаю! Ви вгадали число!';
        }
    });
});