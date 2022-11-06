/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, busque fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.
*/

const correctAnswer = ['C', 'D', 'C', 'B'];

const form = document.querySelector('form');
const pEn = document.querySelectorAll('#enus');
const pPt = document.querySelectorAll('#ptbr');
const labelEn = document.querySelector('.translate-en');
const labelPt = document.querySelector('.translate-pt');
const popup = document.querySelector('.popup-wrapper');
const popupContent = document.querySelector('.popup-content');
let idSetInterval;


//functions
const removeClasses = (element, className) => {
    element.classList.remove(className);
};


const translateForEnglish = () => {

    //maybe function
     pEn.forEach(p => {
        removeClasses(p, 'hidden')
    });

    pPt.forEach(p => {
        p.classList.add('hidden');
    });
    
};


const translateForPortuguese = () => {

    //maybe function
    pPt.forEach(p => {
        removeClasses(p, 'hidden');
    });

    pEn.forEach(p => {
        p.classList.add('hidden');
    });

};


const closeThePopup = event => {

    const getClassClicked = event.target.classList[0];

    if (getClassClicked !== null) {
        popup.classList.add('hidden');
    }

    document.location.reload(true);
    
};



const logicOfQuiz = event => {
    event.preventDefault();
    
    let scoreUser = 0;

    const answerUser = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ];

    answerUser.forEach((answer, index) => {
        
        if (answer === correctAnswer[index]) {
            scoreUser += 25;
        }

    });


    const popupContentParagraphPt = popupContent.childNodes[3];
    const popupContentParagraphEn = popupContent.childNodes[5];
    let count = 0;    


    const resultOfQuiz = () => {
        
    };

    //vai virar function kk 
    if (scoreUser === 0) {

       removeClasses(popup, 'hidden');

       popupContentParagraphPt.textContent = `Calma jovem, tenta de novo <3! Você não acertou nenhuma alternativa, mas não significa nada! =)`
       popupContentParagraphEn.textContent = `Your score is 0 :(`;

    } else if (scoreUser === 25) {
        
        removeClasses(popup, 'hidden');

        idSetInterval = setInterval(() => {

            if(scoreUser === count) {
                clearInterval(idSetInterval);
            }

            popupContentParagraphPt.textContent = `Boa, ${count}% do quiz! mas da pra melhorar!`;
            popupContentParagraphEn.textContent = `Nice, your score is ${count}% of the quiz!`;

            count++;

        }, 10);


    } else if (scoreUser === 50) {

        removeClasses(popup, 'hidden')

        idSetInterval = setInterval(() => {
            if (scoreUser === count) {
                clearInterval(idSetInterval);
            }

            popupContentParagraphPt.textContent = `Muito bom, ${count}% do quiz! Vamo que da pra fechar o quiz!`
            popupContentParagraphEn.textContent = `Very good, your score is ${count}% of the quiz!`
            count++
        }, 10)

    } else if (scoreUser === 75) {

        removeClasses(popup, 'hidden');
        
        idSetInterval = setInterval(() => {

            if (scoreUser === count) {
                clearInterval(idSetInterval);
            }
            popupContentParagraphPt.textContent = `Show, acertou ${count}%! Quase perfeito hein?! Vamo acertar tudo agora?`
            popupContentParagraphEn.textContent = `Good job! Your score is ${count}% of the quiz!`
            count++
        }, 10)

    } else {

        removeClasses(popup, 'hidden');

        idSetInterval = setInterval(() => {
            
            if (scoreUser === count) {
                clearInterval(idSetInterval);
            }

            popupContentParagraphPt.textContent = `Perfeito! você acertou ${count}% do quiz`
            popupContentParagraphEn.textContent = `Perfect! ${count}% of the quiz`
            count++
        }, 10);

    };

    scrollTo(0,0);
};



// refactored
labelEn.addEventListener('click', translateForEnglish);

labelPt.addEventListener('click', translateForPortuguese);

form.addEventListener('submit', logicOfQuiz);



/** close popup */
popup.addEventListener('click', closeThePopup);