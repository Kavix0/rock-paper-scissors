function getComputerChoice(){
    let choice = Math.floor((Math.random() * 3));

    switch(choice){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();

    return getRoundWinner(playerChoice, computerChoice);
}

function getRoundWinner(playerChoice, computerChoice){
    while(true){
        switch(playerChoice){
            case 'rock':
                switch(computerChoice){
                    case 'rock':
                    return 'Tie Round! Rock vs Rock';
                    case 'paper':
                    return 'You Lose! Rock loses against Paper';
                    case 'scissors':
                    return 'You Win! Rock beats Scissors';
                }
            case 'paper':
                switch(computerChoice){
                    case 'rock':
                    return 'You Win! Paper beats Rock';
                    case 'paper':
                    return 'Tie Round! Paper vs Paper';
                    case 'scissors':
                    return 'You Lose! Paper loses against Scissors';
                }
            case 'scissors':
                switch(computerChoice){
                    case 'rock':
                    return 'You Lose! Scissors loses against Rock';
                    case 'paper':
                    return 'You Win! Scissors beats Paper';
                    case 'scissors':
                    return 'Tie Round! Scissors vs Scissors';
                }
            default:
            console.log('Sorry, you must enter a valid choice (Rock, Paper, Scissors)');
            playerChoice = getPlayerChoice();
        }
 }
}

function getPlayerChoice(){
    return window.prompt('Please enter Rock, Paper, or Scissors');
}

function getRoundScore(roundResult){
    console.log(roundResult[4]);
    switch(roundResult[4]){
        case('W'):
            return 1;
        case('L'):
            return -1;
        case('R'):
            return 0;
    }
}


function getGameWinner(score){
    switch(true){
        case (score >= 1):
            return 'Congratulations! You are the greatest Rock Paper Scissor player in the world!';
        case (score <= -1):
            return 'Oh no.... the computer beat you! You died.';
        default:
            return 'You are evenly matched.... try another round to see if you are skilled enough to win!';
    }
}

function game()
{
    console.log("It's time.... to play some Rock Paper Scissors!");

    let roundResult = '';
    let score = 0;
    
    for(let i = 0; i < 5; i++){
        roundResult = playRound(getPlayerChoice(), getComputerChoice());
        console.log(roundResult);

        score += getRoundScore(roundResult);   //If player is winner, true. Else false.
    }

    console.log(getGameWinner(score));
}

