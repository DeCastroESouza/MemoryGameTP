const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');
const timer = document.querySelector('.timer');

const validateInput = ({ target }) => {
}

const handleSubmit = (event) => {
    event.preventDefault();
    //localStorage.setItem('player', input.value);
    window.location = 'pages/game.html';
}

const startTimer = () => {
    this.loop = setInterval(() => {
        const currentTime = timer.innerHTML;
        timer.innerHTML = currentTime - 1; //Number(currentTime) + 1;
        if (timer.innerHTML == 0) {
            timer.innerHTML = "Terra plaaaaaanaaaaaaaa!"
            setInterval(() => {
                timer.innerHTML = "Terra plaaaaaanaaaaaaaa!"
                window.location = 'pages/game.html';
            }, 1000)
        }
    }, 1000);
}

window.onload = () => {
    startTimer();
}
