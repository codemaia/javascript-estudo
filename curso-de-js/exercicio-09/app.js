/*
  Dica:

  - Alguns exercícios utilizarão métodos, propriedades e funcionalidades vistos  
    no começo do curso. Se for necessário, reveja partes das aulas anteriores  
    para relembrar.
*/

/*
  01

  - Converta a função abaixo em uma arrow function e utilize-gita para exibir um  
    valor no console.
*/

// function convertToString (value) {
//   return String(value)
// }

const convertToString = value => {
  return String(value);
}

console.log(typeof convertToString(true))

/*
  02

  - Crie uma função que retorne a quantidade de caracteres que uma string  
    recebida por parâmetro possui.
*/

const contCaracterString = value => {
  return String(value).length;
}

console.log(contCaracterString('Renan'));
// console.log(contCaracterString('          '));




/*
  03

  - Crie uma função que retorne todos os caracteres de uma string em letras  
    minúsculas;  
  - Utilize a função para exibir a string abaixo no console.

  "CHOCOTONE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO"
*/


const toLowerCaseString = value => {
  return String(value).toLowerCase();
};

console.log(toLowerCaseString('CHOCOTONE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO'));
// console.log(toLowerCaseString('ALO ALO ALO BROOO'));




/*
  04

  - Crie uma função que recebe 2 parâmetros: um caractere e uma string;
  - Ao ser invocada, a função deve retornar o index do caractere na string.
*/


const indexToString = (i, string) => {

  // const getString = string;
  // const getIndex = i;

  // return getString.indexOf(i);

  const showIndex = string.indexOf(i);

  return `O index é ${showIndex}`;
};

console.log(indexToString('@', 'renan@email.com'));



/*
  05

  - Crie uma função que, ao ser invocada, retorna um boolean indicando se o item  
    passado por argumento existe no array (também passado por argumento).
*/

//Resolução professor:
/*
const isItemIncluded = (item, array) => array.includes(item);
console.log(isItemIncluded(7, [7, 3, 1]));
*/

const detectedArray = (arg, arr = []) => {
  //utilizar include?
  if(arr.includes(arg)) {
    return true;
  } else {
    return false;
  }

}

console.log(detectedArray('pizza',['renan','maia','livia','tita','brisa','lux']));



/*
  06

  - Crie uma função que retorna a concatenação de 2 arrays, passados como  
    argumentos em sua invocação;
*/


const concatArrays = (arr1 = [], arr2 = []) => {
  
  return arr1.concat(arr2);

}


console.log(concatArrays(['renan', 31, 'livia', 31], ['Programador', 'Dentista', 'Analista de redes']));


/*
  07

  - Crie uma função que retorna o array passado como argumento em sua invocação,  
    mas com o último item removido.
*/


const popArray = (arr = []) => {

  // arr.pop(arr[arr.length - 1]);

  arr.pop();

  return arr;

}

console.log(popArray(concatArrays(['renan', 31, 'livia', 31], ['Programador', 'Dentista', 'Analista de Redes'])));


/*
  08

  - Crie uma função que retorna se o valor passado como argumento em sua  
    invocação é null.
*/


const isNull = (arg = 'digite') => {
  
  if(arg !== null) {

    return `not is null`;

  } else {

    return `is null`;

  }


}


console.log(isNull(null));




/*
  09

  - Crie uma função que apenas invoca uma função de callback recebida por  
    parâmetro;
  - Crie outra função que apenas exibe seu nome no console;
  - Invoque a função que recebe um callback por parâmetro, passando como  
    argumento a função que exibe seu nome no console e veja se o nome realmente  
    foi exibido.
*/




const myFuncCallBack = callback => {

  callback();

};


const myName = () => {
  return console.log('Livia');
};


myFuncCallBack(myName);




/*
  10

  - Crie uma função que invoca uma função de callback recebida por parâmetro.  
    A invocação da função recebida por parâmetro deve receber um valor como  
    argumento;
  - Crie uma função que retorna o triplo de um número recebido por parâmetro;
  - Faça com que a invocação da função descrita no 1º item deste exercício (10)  
    resulte no triplo de 33.
*/

//RESOLUÇÃO PROFESSOR:

const callCallBack = (value, callback) => {
  return callback(value);
}

const triple = (number) => {
  return number * 3;
}


console.log(callCallBack(33, triple));


/*
const myCalculator = (num = 0) => {
  const triple = num * 3;
  return triple;
}

const myDisplayerFunc = (callback) => {
  const value = callback;
  console.log(`The result: ${value}`);
};


myDisplayerFunc(myCalculator(33));
*/



/*
  11

  - Utilizando um forEach, baseado no array "numbers", a cada iteração, exiba a  
    mensagem abaixo no console, substituindo os "X" pelas informações corretas;
  
  "O Xº item do array [X, X, X] é X."
*/

const numbers = [1, 2, 3];
//let contNumbers = 0;
const showNumbersInfor = (item, index, array) => {
  // console.log(number, numbers, index);
  // contNumbers++;
  const itemPosition = index + 1;
  const itens = array.join(', ');
  
  console.log(`O ${itemPosition}º item do array [${itens}] é ${item}.`);
  
};

numbers.forEach(showNumbersInfor);





/*
  12

  - Converta o for loop abaixo em um forEach;
  - Após a conversão, verifique se a cópia do array lettersCopy realmente foi  
    criada.
*/

const letters = ['v', 'e', 'p']
let lettersCopy = []

// for (let i = 0; i < letters.length; i++) {
//   lettersCopy.push(letters[i])
// }

letters.forEach((letter) => {
    lettersCopy.push(letter);
})

console.log(lettersCopy);



/*
  13

  - Inclua o markup abaixo em seu index.html;
  - Gere um template HTML com parágrafos. Cada parágrafo deve conter um item do  
    array "review";
  - Ao gerar o template, verifique no browser se os parágrafos foram incluídos  
    dentro da section vazia do markup abaixo.

  <article>
    <header>
      <h1>Sobre "Jurassic Park"</h1>
    </header>

    <section data-js="section"></section>
  </article>
*/

const section = document.querySelector('[data-js="section"]');

const review = [
  'Eu sempre adorei o filme e quando descobri que tinha o livro também fiquei doido. Demorei um pouco mas acabei comprando e finalmente li \o/.',
  'O primeiro filme foi baseado nesse livro, porém o livro (como sempre) é muito mais completo, com mais personagens, mais acontecimentos e até mesmo mais dinossauros. Na verdade nesse livro tem coisas do segundo e terceiro filme também, eles mudaram bastante nos filmes, acho que pra ficar mais comercial, e se o filme é bom, o livro é 100 vezes melhor.',
  'Michael é um ótimo autor, esse sim pesquisa muito antes de escrever um livro, além da história que já prende sua atenção, ele fala bastante de genética (pra explicar como os dinossauros foram criados) e acaba falando um pouco de programação (informática), por causa dos programas avançados e modernos que o parque tinha. E isso foi uma das coisas que eu achei muito legal, ele explica as coisas com gráficos, tabelas, códigos ... enfim, o cara é foda hahaha.',
  'Recomendo esse livro pra quem curte uma boa história de ficção. Apesar de muita gente pensar que o livro não tem graça, porque o legal mesmo é ver o dinossauro no filme, com todos os efeitos especiais, eu digo pra deixar esse pensamento de lado, pois a história é tão bem contada e os detalhes são tão bem relatados, que você passa a fazer parte da história, e vive todas as emoções hahaha.'
]

let paragraphs = '';
const createParagraphs = (paragraph) => {
  paragraphs += `<p>${paragraph}</p>`;
}

review.forEach(createParagraphs);

section.innerHTML = paragraphs;






/*
  14

  - Implemente uma função que retorna uma string com a quantidade de pessoas que  
    curtiram um post, conforme descrito a seguir;

  - A função deve receber por parâmetro um array com os nomes das pessoas que  
    curtiram o post/vídeo/foto;  

  - Se o array recebido estiver vazio, a mensagem que a função deve retornar é  
    "Ninguém curtiu isso";  

  - Se o array conter apenas um nome, como "Rafael", por exemplo, a mensagem  
    retornada deve ser "Rafael curtiu isso";  

  - Se o array conter 2 nomes, a mensagem retornada deve ser  
    "NOME_1 e NOME_2 curtiram isso";  

  - Se o array conter 3 nomes, a mensagem retornada deve ser  
    "NOME_1, NOME_2 e NOME_3 curtiram isso";  

  - Se o array conter 4 ou mais nomes, a mensagem retornada deve ser  
    "NOME_1, NOME_2 e mais X pessoas curtiram isso". O "X" deve ser substituído  
    pelo restante da quantidade de pessoas que curtiram o post (além das duas  
    pessoas já mencionadas no início da mensagem).

*/

const arrayLikes = ['Renan', 'Fulano', 'Ciclano', 'Beltrano', 'Loren Ipson', 'Ciclano', 'Beltrano', 'Loren Ipson'];
const arrayLikes2 = [] ;




const funcLikes = (arr = []) => {
  const firstName = arr[0];
  const secondName = arr[1];
  const thirdName = arr[2];
  const totalNamesMinusTwo = arr.length - 2;

  arr.forEach((index, arr, array) => {
  
    // console.log(index, arr, array);
  })

  if (arr.length === 0) {
    console.log("Ninguém curtiu isso");

  } else if (arr.length === 1) {
    console.log(`${firstName} curtiu isso`);

  } else if (arr.length === 2) {
    console.log(`${firstName} e ${secondName} curtiram isso`);

  } else if (arr.length === 3) {
    console.log(`${firstName}, ${secondName} e ${thirdName} curtiram isso`);

  } else {
    console.log(`${firstName}, ${secondName} e mais ${totalNamesMinusTwo} pessoas curtiram isso`);

  }
  
}


funcLikes(arrayLikes);


//RESOLUÇÃO PROFESSOR:

/*
const getLikesMessage = (names = []) => {
  const firstName = names[0];
  const secondName = names[1];
  const thirdName = names[2];
  const totalNamesMinusTwo = names.length - 2;

  switch (names.length) {
    case 0:
      return "Ninguém curtiu isso"
    case 1:
      return `${firstName} curtiu isso`
    case 2: 
      return `${firstName} e ${secondName} curtiram isso`
    case 3: 
      return `${firstName}, ${secondName} e ${thirdName} curtiram isso`
    default:
      return `${firstName}, ${secondName} e mais ${totalNamesMinusTwo} pessoas curtiram isso`
  }

}

console.log(getLikesMessage(['Roger', 'Christian', 'Edson', 'Neilson', 'Matheus']));
*/