if (
    document.getElementById('easy').addEventListener('click', function() {
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        score = 100;
        document.querySelector('.score').textContent = score;
    })
) {} else if (
    document.getElementById('med').addEventListener('click', function() {
        secretNumber = Math.trunc(Math.random() * 50) + 1;
        score = 200;
        document.querySelector('.score').textContent = score;
    })
) {} else if (
    document.getElementById('hard').addEventListener('click', function() {
        secretNumber = Math.trunc(Math.random() * 100) + 1;
        score = 300;
        document.querySelector('.score').textContent = score;
    })
) {}