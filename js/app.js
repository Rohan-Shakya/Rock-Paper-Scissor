// Caching DOM
const playButton = document.querySelector('#play-img');
const frontPage = document.querySelector('.front-page')
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector('.score-board')
const result = document.querySelector('.result')
const result_p = document.querySelector('.result > p');
const choices = document.querySelector('.choices')
const rock_div = document.getElementById('rock')
const paper_div = document.getElementById('paper')
const scissor_div = document.getElementById('scissor')
const actionResult_id = document.getElementById('action-message')

// Initial Score
let userScore = 0;
let computerScore = 0;

// playbutton for toggling front-page
playButton.addEventListener('click', () => {
    frontPage.classList.add('hide');
    scoreBoard_div.classList.remove('hide')
    result.classList.remove('hide')
    choices.classList.remove('hide')
    actionResult_id.classList.remove('hide')
})


function main() {
    rock_div.addEventListener('click', () => game('rock'))
    
    paper_div.addEventListener('click', () => game('paper'))

    scissor_div.addEventListener("click", () => game('scissor'))
}

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissor']
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]
}


function win(user, computer) {
    userScore++
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(5);
    const smallCompWord = "comp".fontsize(5);
    result_p.innerHTML = user + smallUserWord + " beats " + computer + smallCompWord + ". You win !"
    document.getElementById(user).classList.add('green-glow')
    setTimeout(() => document.getElementById(user).classList.remove('green-glow'), 1000)
}

function loses(user, computer) {
    computerScore++
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3);
    const smallCompWord = "comp".fontsize(3);
    result_p.innerHTML = computer + smallCompWord + " beats " + user + smallUserWord + ". You lose !"
    document.getElementById(user).classList.add('red-glow')
    setTimeout(() => document.getElementById(user).classList.remove('red-glow'), 1000)
    
}

function draws(user, computer) {
    const smallUserWord = "user".fontsize(3);
    const smallCompWord = "comp".fontsize(3);
    result_p.innerHTML = user + smallUserWord + " equals " + computer + smallCompWord + ". It's draw !"
    document.getElementById(user).classList.add('gray-glow')
    setTimeout(() => document.getElementById(user).classList.remove('gray-glow'), 1000)
}


function game(userChoice){
    const computerChoice = getComputerChoice()
    switch (userChoice + " " + computerChoice){ 
        case "rock scissor":
        case "scissor paper":
        case "paper rock":
            win(userChoice, computerChoice)
            break;
        case "paper scissor":
        case "rock paper":
        case "scissor rock":
            loses(userChoice, computerChoice)
            break;
        case "scissor scissor":
        case "paper paper":
        case "rock rock":
            draws(userChoice, computerChoice)
            break;
    }
}

main();


