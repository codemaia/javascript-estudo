/*
  01

  - Obtenha a ul do index.html e adicione em todos os elementos filhos dela,  
    uma classe 'video';
  - Exiba no console os elementos filhos da ul com a classe já inserida.
*/

const ul = document.querySelector('ul');
const lis = Array.from(ul.children);

const insertVideoClass = element => {
  element.classList.add('video');
}

lis.forEach(insertVideoClass);

// console.log({ul, lis});
// console.log(lis);

/*
  02

  - Usando a propriedade adequada, descubra quem é o elemento pai do h2
    e exiba-o no console;
*/

const h2 = document.querySelector('h2');
// console.log(h2.parentElement);


/*
  03

  - Descubra quem é o próximo elemento irmão do h1 e exiba-o no console;
*/

const h1 = document.querySelector('h1');
// console.log(h1.nextElementSibling);


/*
  04

  - Descubra quem é o irmão anterior da ul e exiba-o no console;
*/

// console.log(ul.previousElementSibling);


/*
  05

  - Quando um clique acontecer em alguma das lis, faça com que a li clicada seja  
    exibida no console.
*/

// const lis = document.querySelectorAll('li');
// console.log(lis2);

const showClickedLi = event => {
  console.log(event.target);
}

const addClickEvent = li => {
  li.addEventListener('click', showClickedLi);
}

lis.forEach(addClickEvent);




/*
  06

  - Quando o botão for clicado, adicione o nome dos vídeos abaixo dentro da ul;
  - Cada nome deve estar dentro de uma li.
*/

const videos = [{
  name: 'Como o promise all funciona | JavaScript',
  length: '00:01:52'
}, {
  name: 'Como refatorar um for loop | JavaScript',
  length: '00:04:18'
}, {
  name: 'Como fazer requisições HTTP com o método fetch | JavaScript',
  length: '00:02:55'
}];

//ja possuimos a referencia da 'ul' no inicio do script

/* my resolution
const button = document.querySelector('button');

button.addEventListener('click', () => {
    
    videos.forEach(video => {
      const li = document.createElement('li');
      
      li.textContent = video.name;

      ul.append(li);
      
    });

});
*/

//RESOLUÇÃO PROFESSOR + DESTRUCTURING EM PARAMETROS DE FUNÇÕES

//destructuring
const insertVideoLi = ({ name, length }) => {
  ul.innerHTML += `<li>${name}</li>`
}

const handleClickButton = () => {

  videos.forEach(insertVideoLi);
  
};

const button = document.querySelector('button');

button.addEventListener('click', handleClickButton);




/*
  07

  - Se um clique no h1 acontecer, faça com que todos os elementos dentro do body 
    sejam removidos.
*/


//ja possuimos a referencia do h1 mais a cima do script

// h1.addEventListener('click', event => {
//     // console.log(event.target);
//     const body = document.querySelector('body');
//     // body.remove();
//     // console.log(body.children);
//     Array.from(body.children).forEach(children => {
//       children.remove();
//     })
    
// });


//RESOLUÇÃO PROFESSOR

// const body = document.body;

// h1.addEventListener('click', () => {
//   body.innerHTML = '';
// });