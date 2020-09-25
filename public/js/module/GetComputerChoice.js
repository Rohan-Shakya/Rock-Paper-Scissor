const result_p = document.querySelector('.result > p');
const userScore_span = document.getElementById('user-score');
export const getComputerChoice = () => {
    let choices;
    choices = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};
