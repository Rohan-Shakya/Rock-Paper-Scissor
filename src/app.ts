import { game } from './module/Game.js';

// Caching DOM
const playButton = document.querySelector('#play-img') as HTMLImageElement;
const frontPage = document.querySelector('.front-page') as HTMLElement;
const scoreBoard_div = document.querySelector('.score-board') as HTMLDivElement;
const result = document.querySelector('.result') as HTMLDivElement;
const choices = document.querySelector('.choices') as HTMLDivElement;
const rock_div = document.getElementById('rock') as HTMLDivElement;
const paper_div = document.getElementById('paper') as HTMLDivElement;
const scissor_div = document.getElementById('scissor') as HTMLDivElement;
const actionResult_id = document.getElementById(
  'action-message'
) as HTMLParagraphElement;

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
