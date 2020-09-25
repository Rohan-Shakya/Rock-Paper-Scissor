const result_p = document.querySelector('.result > p') as HTMLParagraphElement;
const userScore_span = document.getElementById('user-score') as HTMLSpanElement;

export const getComputerChoice = () => {
  let choices: [string, string, string];
  choices = ['rock', 'paper', 'scissor'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};
