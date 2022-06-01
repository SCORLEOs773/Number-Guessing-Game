// SEC 7 PROJECT 1 med

let secretNumber = Math.trunc(Math.random() * 50) + 1;
console.log(secretNumber);
let score = 200;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function check() {
    const guess = Number(document.querySelector('.guess').value);

    //No Input
    if (!guess) {
        document.querySelector('.message').textContent = '... ⛔ No Number! ...';
        //Player Wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent =
            '... 🥳 Correct Number! ...';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highScore').textContent = highScore;
        }
        //Guess is not equal
    } else if (guess !== secretNumber) {
        if (score > 10) {
            document.querySelector('.message').textContent =
                guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
            score = score - 10;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game! ';
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = '... Start Guessing ...';
    document.querySelector('.number').style.width = '15rem';
    score = 200;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 50) + 1;
    console.log(secretNumber);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
});