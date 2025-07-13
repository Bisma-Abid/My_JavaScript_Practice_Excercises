function playGame(guess) {
  let randomNumber = Math.random();
  let result = randomNumber < 0.5 ? 'heads' : 'tails';

  // ✅ Step 1: Get existing score or set default
  let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0
  };

  let message = '';

  // ✅ Step 2: Update the score based on result
  if (guess === result) {
    score.wins++;
    message = `You chose "${guess}" while result is "${result}". 🎉 You Won! Your score: ${score.wins} Wins`;
  } else {
    score.losses++;
    message = `You chose "${guess}" while result is "${result}". 😢 You Lost! Your score: ${score.losses} Losses`;
  }

  // ✅ Step 3: Save updated score to localStorage
  localStorage.setItem('score', JSON.stringify(score));

  // ✅ Step 4: Display result
  document.getElementById('guessMe').innerHTML = message;
}
