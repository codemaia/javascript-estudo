/*
  01

  - Faça com que o texto do h1 do index.html seja exibido com todas as letras  
    maiúsculas.
*/

const h1 = document.querySelector('h1');
// console.log(h1.textContent.toUpperCase());
h1.textContent = h1.textContent.toUpperCase();

/*
  02

  - Adicione, na ul vazia do index.html, os números do array "numbers" abaixo;
  - Cada número deve estar dentro de uma <li> com a classe "number".
*/

const numbers = [ 53, 24, 3, 8, 1, 6, 57, 80, 77, 98, 55 ];
let liNumbers = ``
const classNumber = document.querySelector('.numbers');

const insertNumberIntoUl = number => {
  classNumber.innerHTML +=`<li class="number">${number}</li>`
};
numbers.forEach(insertNumberIntoUl);  


// numbers.forEach(number => {

//   liNumbers =  `<li>${number}</li>`;
//   classNumber.innerHTML += liNumbers;

//   if(liNumbers !== null) {
//     const newLi = document.querySelectorAll('li');
//     newLi.forEach(element => {
//       element.classList.add('number');
//     });
    
//   };
  
// });
// const newLi = document.querySelectorAll('li');

// newLi.forEach(element => {
//   element.classList.add('numbers');
// });
// console.log(newLi)



/*
  03

  - Modifique as cores dos números dentro da ul da seguinte forma:
    - Se o número é par, ele deve ser exibido na cor "lightblue";
    - Se o número é ímpar, exiba-o na cor "pink".
*/

const newLi = document.querySelectorAll('.number');
// console.log(newLi);

newLi.forEach((number) => {
  const isEven = Number(number.textContent) % 2 === 0;

  // console.log(number.textContent)
  if (isEven) {
      // console.log(`${number.textContent} + aqui é PAR`);
      number.style.color = 'lightblue';
      return
  }

  number.style.color = 'pink';
  // } else {
  //     // console.log(`${number.textContent}`);
  //     number.style.color = 'pink';
  // }
});



/*
  04

  - Adicione a classe "body-background" no corpo do index.html;

  P.s: a classe "body-background" já está declarada no style.css.
*/

// const body = document.querySelector('body');
const body = document.body;
// console.log(body);
body.classList.add('body-background');

/*
  05

  - Adicione so link 
    https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo no href  
    do link do index.html.
*/

const hrefA = document.querySelector('a');
// console.log(hrefA);

hrefA.setAttribute('href', 'https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo');


/*
  06

  - Exiba o novo valor do atributo href do link no console.
*/

const href = document.querySelector('a')
// console.log(href.getAttribute('href'));

/*
  07

  - Exiba, no console, um objeto com todas as propriedades CSS que podem ser  
    manipuladas via JS no h1.
*/

const h1Styles = document.querySelector('h1');
// console.log(h1Styles)
// console.log(h1Styles.style);


/*
  08
  - Remova a classe "body-background", do elemento body.
*/

const removeBody = document.querySelector('body');
// removeBody.classList.toggle('body-background');
removeBody.classList.remove('body-background');


/*
  09

  - Se o link da página possuir uma classe "link", remova-a;
  - Não utilize o método remove() para fazer isso.
*/

const aLink = document.querySelector('a');
aLink.classList.toggle('link');
// aLink.classList.toggle('link');