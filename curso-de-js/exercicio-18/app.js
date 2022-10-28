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
const button = document.querySelector('button');
const input = document.getElementById('username');
const paragraphUsername = document.createElement('p');
const paragraphSubmit = document.createElement('p');
paragraphSubmit.setAttribute('data-feedback', 'submit-feedback'); //para retirar o paragrado de "Por favor, insira um username válido"
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

  const paragraphSubmitExists = document.querySelector('[data-feedback="submit-feedback"]');

  if(paragraphSubmitExists) {
    paragraphSubmit.remove();
  }

      
  if (resultRegex) {
    // newParagraph.textContent = 'Username válido';
    // newParagraph.setAttribute('class', 'username-success-feedback');
    // input.insertAdjacentElement('afterend', newParagraph); // ou event.target.insertAdjacentElement('afterend', newParagraph);
    insertText(paragraphUsername, 'Username válido');
    insertAttribute(paragraphUsername, 'class', 'username-success-feedback');
    insertNewAdjacentElement(input, 'afterend', paragraphUsername);
    return;
  }
  // paragraphUsername.textContent = 'O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas';
  // paragraphUsername.setAttribute('class', 'username-help-feedback');
  // input.insertAdjacentElement('afterend', paragraphUsername); // ou event.target.insertAdjacentElement('afterend', paragraphUsername);
  insertText(paragraphUsername, 'O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas');
  insertAttribute(paragraphUsername, 'class', 'username-help-feedback');
  insertNewAdjacentElement(input, 'afterend', paragraphUsername);

};

input.addEventListener('input', validatingInput); // alterado keyup para input, para poder ser enviado com o ENTER


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

const validatingSubmit = event => {
  event.preventDefault();

  const submitForm = event.target.username;
  const resultRegex = regex.test(submitForm.value);

  if (resultRegex) {
    // paragraphSubmit.textContent = "Dados enviados =)"
    // paragraphSubmit.setAttribute('class', 'submit-success-feedback');
    // button.insertAdjacentElement('afterend', paragraphSubmit);
    insertText(paragraphSubmit, "Dados enviados =)");    
    insertAttribute(paragraphSubmit,'class', 'submit-success-feedback')
    insertNewAdjacentElement(button, 'afterend', paragraphSubmit);

    submitForm.value = '';
    submitForm.focus();
    return;
  }

  // paragraphSubmit.textContent = "Por favor, insira um username válido";
  // paragraphSubmit.setAttribute('class', 'submit-help-feedback');
  // button.insertAdjacentElement('afterend', paragraphSubmit);
  insertText(paragraphSubmit, "Por favor, insira um username válido");
  insertAttribute(paragraphSubmit, 'class', 'submit-help-feedback');
  insertNewAdjacentElement(button, 'afterend', paragraphSubmit);
  submitForm.focus();
  
};

form.addEventListener('submit', validatingSubmit);



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


const some = (arr = [], func) => {
 

  for(let i = 0; i < arr.length; i++) {
    
    if(func(arr[i])) {
      return true;
      
    }
  }

  return false;

  
}

console.log(some([1, 2, 3], item => item > 2));
console.log(some([1, 3, 5], item => item === 0));


// const testeFunc = (n) => {
//   return n > 2;
// }


// console.log(testeFunc(1));