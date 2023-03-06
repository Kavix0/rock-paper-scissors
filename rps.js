let score = 0;
let compScore = 0;
const header = document.getElementById('header');
const compButton = document.getElementById('computerChoice');

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

function playRound(e){
    if(score == 5 || compScore == 5){
        score = 0;
        compScore = 0;
        document.getElementById('score').textContent = score;
        document.getElementById('compScore').textContent = compScore;
        header.textContent = "Please make your selection!"
    }

    playerChoice = (e.currentTarget.id).toLowerCase();

    e.currentTarget.classList.add('clicked');

    let computerChoice = getComputerChoice();

    compButton.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

    let compPic = document.createElement('img'); 
    compPic.classList.add('gameImage');

    switch(computerChoice){
        case 'rock':
            compPic.src = "images/noun-rock-3575783.png";
            compPic.alt = "Rock Image";
            break;
        case 'paper':
            compPic.src = "images/noun-paper-5547609.png";
            compPic.alt = "Paper Image";
            break;
        case 'scissors':
            compPic.src = "images/noun-scissors-180853.png";
            compPic.alt = "Scissors Image";
            break;
    }
    
    compButton.appendChild(compPic);

    let winner = getRoundWinner(playerChoice, computerChoice);
    console.log(winner);
    updateRoundScore(winner);

    if(score == 5){
        header.textContent = "You win!! You're the greatest Rock Paper Scissors player in the world!"
    }else if(compScore ==5){
        header.textContent = "Wow..... you lost against the computer, way to go."
    }
    return ;
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

function updateRoundScore(roundResult){

    switch(roundResult[4]){
        case('W'):
            score += 1;
            console.log("Player score: " + score);
            document.getElementById('score').textContent = score;
            return;
        case('L'):
            compScore += 1;
            console.log("Computer score: " + compScore);
            document.getElementById('compScore').textContent = compScore;
            return;
        case('R'):
            return;
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
    
    for(let i = 0; i < 5; i++){
        roundResult = playRound(getPlayerChoice(), getComputerChoice());
        console.log(roundResult);

        /*score += getRoundScore(roundResult);   */
    }
}

function endTransition(e){
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('clicked');
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('click',playRound);
})

buttons.forEach(button => {
    button.addEventListener('transitionend',endTransition);
})

