const correctAnswers = ['B', 'B', 'B', 'B'];

const form = document.querySelector('form');
const finalResult = document.querySelector('.result');

let score = 0;
let counter = 0;
let timer;

const getUserAnswers = () => {

    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ];

    return userAnswers;
};


    /** ira pegar o userAnswers como parametro, que esta dentro do form.addEventListener */
const calculateUserScore = userAnswers => {
    userAnswers.forEach((answer, index) => {
    
        if (answer === correctAnswers[index]) {
            score += 25;
        }
        
    });
};


const showScore = () => {
    scrollTo(0, 0);
    finalResult.classList.remove('d-none');
};  


const animationResult = () => {
    // armazena na const timer para poder pegar o ID que é gerado cada vez que um setInterval é criado.
    // com esse ID podemos parar o setInterval;
    timer = setInterval(() => {
        //parar o setInterval quando o counter for igual ao score acertado;
        //passa o timer para o clearInterval pois nele cosnta o ID do setInterval
        
        if (counter === score) {
            clearInterval(timer);
        }
        
        finalResult.querySelector('span').textContent = `${counter++}%`;
                     //necessário incrementar o counter para o valor poder mudar.
        
    }, 10);
};



form.addEventListener('submit', event => {
    event.preventDefault();
    
    
// OBTEM A RESPOSTA DO USUARIO
    const userAnswers = getUserAnswers();

// CALCULA A PONTUAÇÃO DO USUARIO
    calculateUserScore(userAnswers);


// EXIBE A PONTUAÇÃO
    showScore();
    
// ANIMA O RESULTADO
    animationResult();

});

//setInterval


//setTimeout 


