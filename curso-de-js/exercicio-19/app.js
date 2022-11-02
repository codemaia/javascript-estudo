/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, busque fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.
*/

const correctAnswer = ['C', 'C', 'C', 'C'];

const form = document.querySelector('form');
const pEn = document.querySelectorAll('#enus');
const pPt = document.querySelectorAll('#ptbr');
const labelEn = document.querySelector('.translate-en');
const labelPt = document.querySelector('.translate-pt');




labelEn.addEventListener('click', () => {

     pEn.forEach(p => {
        p.classList.remove('hidden');
    });

    pPt.forEach(p => {
        p.classList.add('hidden');
    });
    
});


labelPt.addEventListener('click', () => {

    pPt.forEach(p => {
        p.classList.remove('hidden');
    });

    pEn.forEach(p => {
        p.classList.add('hidden');
    });

});




form.addEventListener('submit', event => {
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

    if (scoreUser === 0) {
        alert(`Calma jovem, tenta de novo <3! Você tirou ${scoreUser}, mas não significa nada! =)`);
    } else if (scoreUser === 25) {
        alert(`Boa, ${scoreUser}% do quiz! mas da pra melhorar!`);
    } else if (scoreUser === 50) {
        alert(`Muito bom, ${scoreUser}% do quiz! Vamo que da pra fechar o quiz!`);
    } else if (scoreUser === 75) {
        alert(`Show, acertou ${scoreUser}%! Quase perfeito hein?! Vamo acertar tudo agora?`);
    } else {
        alert(`Perfeito! você acertou ${scoreUser}% do quiz`)
    };

});