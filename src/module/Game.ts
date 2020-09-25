import { draws } from './Draw.js';
import { getComputerChoice } from './GetComputerChoice.js';
import { loses } from './Loses.js';
import { win } from './Win.js';

export const game = (userChoice: string) => {
  const computerChoice = getComputerChoice();

  switch (userChoice + ' ' + computerChoice) {
    case 'rock scissor':
    case 'scissor paper':
    case 'paper rock':
      win(userChoice, computerChoice);
      break;
    case 'paper scissor':
    case 'rock paper':
    case 'scissor rock':
      loses(userChoice, computerChoice);
      break;
    case 'scissor scissor':
    case 'paper paper':
    case 'rock rock':
      draws(userChoice, computerChoice);
      break;
  }
};
