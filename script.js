function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('user-choice').textContent = `Your Choice: ${capitalize(userChoice)}`;
    document.getElementById('computer-choice').textContent = `Computer's Choice: ${capitalize(computerChoice)}`;

    const winner = determineWinner(userChoice, computerChoice);
    document.getElementById('winner').textContent = `Result: ${winner}`;
}

function determineWinner(user, computer) {
    if (user === computer) {
        return "It's a Draw!";
    }

    if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return "You Win! 🎉";
    } else {
        return "You Lose! 😢";
    }
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
