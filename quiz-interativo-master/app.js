const correctAnswers = ['B', 'B', 'B', 'B'];

const form = document.querySelector('form');
const finalResult = document.querySelector('.result');

form.addEventListener('submit', event => {
    event.preventDefault();

    let score = 0;

    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ];

    userAnswers.forEach((answer, index) => {
    
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    finalResult.querySelector('span').textContent = `${score}%`;
    finalResult.classList.remove('d-none');

});