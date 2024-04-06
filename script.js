let gameStarted = false;
let player1Choice = null;
let player2Choice = null;


function startGame() {
    const player1Input = document.getElementById('player1Name').value.trim();
    const player2Input = document.getElementById('player2Name').value.trim();

    document.getElementById('player2').classList.add('hidden');

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
    document.getElementById('result').textContent = `${player1Name}, izvelies!`;
}

function makeChoice(player, choice) {
    const resultDisplay = document.getElementById('result');
    const playerName = player === 'player1' ? player1Name : player2Name;
    const Player2Name = player === 'player1' ? player2Name : player1Name;

    if (player === 'player1') {
        player1Choice = choice;
        document.getElementById('player2').classList.remove('hidden');
    } else {
        player2Choice = choice;
    }

    document.getElementById('player1').classList.add('hidden');
    resultDisplay.textContent = `${Player2Name}, izvēlies!`;

    if (player1Choice !== null && player2Choice !== null) {
        determineWinner();
        document.getElementById('player1').classList.add('hidden');
        document.getElementById('player2').classList.add('hidden');
    }

}

function determineWinner() {
    const resultDisplay = document.getElementById('result');
    document.getElementById('container4').classList.remove('hidden');

    if (player1Choice === player2Choice) {
        resultDisplay.textContent = "Neisčirts";
    } else if (
        (player1Choice === 'akmens' && player2Choice === 'šķēres') ||
        (player1Choice === 'papirs' && player2Choice === 'akmens') ||
        (player1Choice === 'šķēres' && player2Choice === 'papirs')
    ) {
        resultDisplay.textContent = `${player1Name} Uzvareja!`;
    } else {
        resultDisplay.textContent = `${player2Name} Uzvareja!`;
    }
    player1Choice = null;
    player2Choice = null;

}

var timeDisplay = document.getElementById("time");
 
document.getElementById("test").innerHTML =
      Intl.DateTimeFormat().resolvedOptions().timeZone;
 
function refreshTime() {
  var dateString = new Date().toLocaleString("en-US", {timeZone: test.innerHTML});
  var formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}
 
setInterval(refreshTime, 1000);