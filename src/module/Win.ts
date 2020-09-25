const userScore_span = document.getElementById('user-score') as HTMLSpanElement;
const result_p = document.querySelector('.result > p') as HTMLParagraphElement;

// Initial Score
let userScore: number;
userScore = 0;

export const win = (user: string, computer: string) => {
  userScore++;
  userScore_span.innerHTML = userScore;
  const smallUserWord = 'user'.fontsize(5);
  const smallCompWord = 'comp'.fontsize(5);
  result_p.innerHTML =
    user + smallUserWord + ' beats ' + computer + smallCompWord + '. You win !';
  document.getElementById(user).classList.add('green-glow');
  setTimeout(
    () => document.getElementById(user).classList.remove('green-glow'),
    1000
  );
};
