import { game } from './module/Game.js';
// Caching DOM
const playButton = document.querySelector('#play-img');
const frontPage = document.querySelector('.front-page');
const scoreBoard_div = document.querySelector('.score-board');
const result = document.querySelector('.result');
const choices = document.querySelector('.choices');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissor_div = document.getElementById('scissor');
const actionResult_id = document.getElementById('action-message');
// playButton for toggling front-page
playButton.addEventListener('click', () => {
    frontPage.classList.add('hide');
    scoreBoard_div.classList.remove('hide');
    result.classList.remove('hide');
    choices.classList.remove('hide');
    actionResult_id.classList.remove('hide');
});
const main = () => {
    rock_div.addEventListener('click', () => game('rock'));
    paper_div.addEventListener('click', () => game('paper'));
    scissor_div.addEventListener('click', () => game('scissor'));
};
main();
