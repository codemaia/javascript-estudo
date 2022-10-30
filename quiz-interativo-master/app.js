const correctAnswers = ['B', 'B', 'B', 'B'];

const form = document.querySelector('form');

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

    alert(`Good job, your score is ${score}!`);

});