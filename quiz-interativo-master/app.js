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

    scrollTo(0, 0);

    finalResult.classList.remove('d-none');
    
    let counter = 0;
    
    // armazena na const timer para poder pegar o ID que é gerado cada vez que um setInterval é criado.
    // com esse ID podemos parar o setInterval;
    const timer = setInterval(() => {
        //parar o setInterval quando o counter for igual ao score acertado;
        //passa o timer para o clearInterval pois nele cosnta o ID do setInterval
        
        if (counter === score) {
            clearInterval(timer);
        }
        
        finalResult.querySelector('span').textContent = `${counter}%`;
        counter++ //necessário incrementar o counter para o valor poder mudar.
        
    }, 10);

});

//setInterval


//setTimeout 


