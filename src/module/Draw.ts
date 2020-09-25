const result_p = document.querySelector('.result > p') as HTMLParagraphElement;

export const draws = (user: string, computer: string) => {
  const smallUserWord = 'user'.fontsize(3);
  const smallCompWord = 'comp'.fontsize(3);
  result_p.innerHTML =
    user +
    smallUserWord +
    ' equals ' +
    computer +
    smallCompWord +
    ". It's draw !";
  document.getElementById(user).classList.add('gray-glow');
  setTimeout(
    () => document.getElementById(user).classList.remove('gray-glow'),
    1000
  );
};
