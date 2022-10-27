/*
  Apenas 3 exercícios, mas que exigem um certo nível de conhecimento do que  
  vimos até aqui =)
*/

/*
  01

  - Valide o valor do input "username" à medida em que ele é digitado;
  - Ele deve conter: 
    - No mínimo 6 caracteres;
    - Apenas letras maiúsculas e/ou minúsculas;
  - Se o valor inserido não é válido, exiba um parágrafo laranja abaixo do  
    input com a seguinte mensagem: "O valor deve conter no mínimo 6 caracteres,  
    com apenas letras maiúsculas e/ou minúsculas";
  - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem  
    "Username válido =)";
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
  
  Dica: pesquise pelo método "insertAdjacentElement", no MDN;
  
  en-us:
  https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement


*/

const form = document.querySelector('form');
const fieldset = document.querySelector('fieldset');
const button = document.querySelector('button');
const input = document.getElementById('username');
const newParagraph = document.createElement('p');
const regex = /^[a-zA-Z]{6,}$/;


const insertText = (element, text) => {
  element.textContent = text;
};

const insertAttribute = (element, attribute, className) => {
  element.setAttribute(attribute, className);
};

const insertNewAdjacentElement = (elementTarget, attribute, newElement) => {
  elementTarget.insertAdjacentElement(attribute, newElement);
}


const validatingInput = event => {
  
  const usernameInput = event.target.value;
  const resultRegex = regex.test(usernameInput);
      
  if (resultRegex) {
    // newParagraph.textContent = 'Username válido';
    // newParagraph.setAttribute('class', 'username-success-feedback');
    // input.insertAdjacentElement('afterend', newParagraph);
    insertText(newParagraph, 'Username válido');
    insertAttribute(newParagraph, 'class', 'username-success-feedback');
    insertNewAdjacentElement(input, 'afterend', newParagraph);
  
    return;
  }
  // newParagraph.textContent = 'O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas';
  // newParagraph.setAttribute('class', 'username-help-feedback');
  // input.insertAdjacentElement('afterend', newParagraph);
  insertText(newParagraph, 'O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas');
  insertAttribute(newParagraph, 'class', 'username-help-feedback');
  insertNewAdjacentElement(input, 'afterend', newParagraph);

};

fieldset.addEventListener('keyup', validatingInput);



/*
  02

  - Valide o envio do form;
  - Se o username inserido no input é válido, no envio do form, exiba um  
    parágrafo verde abaixo do botão com a mensagem "Dados enviados =)";
  - Se no momento do envio, o valor do input é inválido, o parágrafo deve ser  
    vermelho e exibir "Por favor, insira um username válido".
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
*/

form.addEventListener('submit', event => {
  event.preventDefault();

  const submitForm = event.target.username;
  // const input = form.input;
  // console.log(submitForm)
  const resultRegex = regex.test(submitForm.value);

  if (resultRegex) {
    // newParagraph.textContent = "Dados enviados =)"
    // newParagraph.setAttribute('class', 'submit-success-feedback');
    // button.insertAdjacentElement('afterend', newParagraph);
    insertText(newParagraph, "Dados enviados =)");    
    insertAttribute(newParagraph,'class', 'submit-success-feedback')
    insertNewAdjacentElement(button, 'afterend', newParagraph);
    
    submitForm.value = '';
    submitForm.focus();
    return;
  }

  newParagraph.textContent = "Por favor, insira um username válido";
  newParagraph.setAttribute('class', 'submit-help-feedback');
  button.insertAdjacentElement('afterend', newParagraph);
  submitForm.focus();
  
});



/*
  03

  - Há algumas aulas, falamos sobre o método some;
  - Neste exercício, seu desafio será criar este método do zero;
  - Implemente uma função "some" que possui a mesma funcionalidade do método  
    some original;
  - A assinatura da invocação desta função deverá ser:
    - some([1, 2, 3], item => item > 2) - Retorna true;
    - some([1, 3, 5], item => item === 0) - Retorna false;
  - Se você não se lembra como o método some funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "Desenvolvendo um popup" - Aula 04-04 da etapa 5;
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa  
        6;
    2) Pesquisar no MDN.
*/



/* .some(função com condição) -> Itera sobre o ARRAY e 
 *                               Retorna TRUE quando pelo menos 1 item do ARRAY
 *                               atender a condição informada.
 */


const arr1 = [1, 2, 3];
const arr2 = [1, 3, 5];



const some = (arr = [], exp) => {
  const isTrue = true;
  const isFalse = false;

  for(let i = 0; i < arr.length; i++) {
    // console.log(exp(arr[i]));
    if(exp(arr[i])) {
      return console.log(isTrue);
      // break;
    }
  }

  console.log(isFalse);

  
}

// some([1, 2, 3], item => item > 2);


// const testeFunc = (n) => {
//   return n > 2;
// }


// console.log(testeFunc(1));