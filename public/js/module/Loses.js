const result_p = document.querySelector('.result > p');
const computerScore_span = document.getElementById('computer-score');
let computerScore;
computerScore = 0;
export const loses = (user, computer) => {
    computerScore++;
    computerScore_span.innerText = computerScore;
    const smallUserWord = 'user'.fontsize(3);
    const smallCompWord = 'comp'.fontsize(3);
    result_p.innerHTML =
        computer +
            smallCompWord +
            ' beats ' +
            user +
            smallUserWord +
            '. You lose !';
    document.getElementById(user).classList.add('red-glow');
    setTimeout(() => document.getElementById(user).classList.remove('red-glow'), 1000);
};
