const correctAnswers = ['B', 'B', 'B', 'B'];

const form = document.querySelector('form');
const finalScoreContainer = document.querySelector('.final-score-container');

let score = 0;
let timer;

const getUserAnswers = () => {
    let userAnswers = [];
                        /** iterou sobre o correctAnswers porque possui o mesmo numero de elementos no array! kkk mto bom */
    // for(let i = 0; i < correctAnswers.length; i++) {
    //     userAnswers.push(form[`inputQuestion${i + 1}`].value);
    // }

    // return userAnswers;
    
    correctAnswers.forEach((_, index) => {
        const userAnswer = form[`inputQuestion${index + 1}`].value;
        userAnswers.push(userAnswer);
    });

    return userAnswers;
};


    /** ira pegar o userAnswers como parametro, que esta dentro do form.addEventListener */
    // não podemos utilziar o map neste forEach porque o SCORE é uma variavel de scopo
    // devemos evitar utilizar metodos em variáveis que executam uma mudança de estado
    // neste caso a váriavel SCORE executa uma mudança de estado;
const calculateUserScore = userAnswers => {
    userAnswers.forEach((answer, index) => {
        const isUserAnswerCorrect = answer === correctAnswers[index];
                /** forma de comparar os valores do arrays, se são iguais ou não */
        if (isUserAnswerCorrect) {
            score += 25;
        };
        
    });
};


const showScore = () => {

    /** deixar a rolagem do scroll mais suave */
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    finalScoreContainer.classList.remove('d-none');
};  


const animationResult = () => {

    let counter = 0;
    // armazena na const timer para poder pegar o ID que é gerado cada vez que um setInterval é criado.
    // com esse ID podemos parar o setInterval;
    timer = setInterval(() => {
        //parar o setInterval quando o counter for igual ao score acertado;
        //passa o timer para o clearInterval pois nele cosnta o ID do setInterval
        
        if (counter === score) {
            clearInterval(timer);
        }
        
        finalScoreContainer.querySelector('span').textContent = `${counter++}%`;
                     //necessário incrementar o counter para o valor poder mudar.
        
    }, 10);
};



form.addEventListener('submit', event => {
    event.preventDefault();
    

    const userAnswers = getUserAnswers();

    calculateUserScore(userAnswers);
    showScore();  
    animationResult();

});


/*
CODE BEFORE REFACTORING


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


*/


