
    let userWins = 0;
    let computerWins = 0;

    function determineWinner(user, computer) {
        if (user === computer) {
            return "It's a tie!";
        } else if ((user === "rock" && computer === "scissors") || 
                   (user === "paper" && computer === "rock") || 
                   (user === "scissors" && computer === "paper")) {
            return "You win!";
        } else {
            return "Computer wins!";
        }
    }

    function playGame(userChoice) {
        const choices = ["rock", "paper", "scissors"];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        const result = determineWinner(userChoice, computerChoice);
        document.getElementById("result").innerHTML = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;

        if (result === "You win!") {
            userWins++;
        } else if (result === "Computer wins!") {
            computerWins++;
        }

        document.getElementById("score").innerHTML = `Score: You - ${userWins}, Computer - ${computerWins}`;

        if (userWins === 5) {
            alert("Congratulations! You won the game!");
            resetGame();
        } else if (computerWins === 5) {
            alert("Sorry, the computer won. Better luck next time.");
            resetGame();
        }
    }

    function resetGame() {
        userWins = 0;
        computerWins = 0;
        document.getElementById("result").innerHTML = "";
        document.getElementById("score").innerHTML = "Score: You - 0, Computer - 0";
    }

