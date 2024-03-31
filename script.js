let gameStarted = false;
let player1Choice = null;
let player2Choice = null;

function startGame() {
    const player1Input = document.getElementById('player1Name').value.trim();
    const player2Input = document.getElementById('player2Name').value.trim();

    if (!player1Input || !player2Input) {
        alert("Lūdzu, ievadiet savus vārdus, lai sāktu spēli");
        return;
    }

    player1Name = player1Input;
    player2Name = player2Input;
    gameStarted = true;
    document.getElementById('nameInputs').classList.add('hidden');
    document.getElementById('gameArea').classList.remove('hidden');
    document.getElementById('player1Display').textContent = player1Name;
    document.getElementById('player2Display').textContent = player2Name;
}

function makeChoice(player, choice) {
    
    const resultDisplay = document.getElementById('result');
    const playerName = player === 'player1' ? player1Name : player2Name;
    const Player2Name = player === 'player1' ? player2Name : player1Name;

    if (player === 'player1') {
        player1Choice = choice;
    } else {
        player2Choice = choice;
    }

    resultDisplay.textContent = `${Player2Name}, izvēlies`;

    if (player1Choice !== null && player2Choice !== null) {
        determineWinner();
    }
}

function determineWinner() {
    const resultDisplay = document.getElementById('result');

    if (player1Choice === player2Choice) {
        resultDisplay.textContent = "neisčirts";
    } else if (
        (player1Choice === 'akmens' && player2Choice === 'šķēres') ||
        (player1Choice === 'papirs' && player2Choice === 'akmens') ||
        (player1Choice === 'šķēres' && player2Choice === 'papirs')
    ) {
        resultDisplay.textContent = `${player1Name} uzvareja!`;
    } else {
        resultDisplay.textContent = `${player2Name} uzvareja!`;
    }

    // Reset choices
    player1Choice = null;
    player2Choice = null;
}