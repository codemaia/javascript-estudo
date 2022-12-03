  /*
  01

  - Implemente um código assíncrono entre os console.log() abaixo.
*/

// console.log('Linha 1')
// console.log('Linha 2')
// console.log('Linha 3')
// console.log('Linha 4')

// setTimeout(() => {
//   console.log(`I'm a assync code`);
// }, 2000);

// console.log('Linha 5')
// console.log('Linha 6')
// console.log('Linha 7')
// console.log('Linha 8')




/*
  02

  - Descomente o código abaixo e crie a função que fará a string dentro da 
    "logGreeting" ser exibida no console.

*/


function logGreeting (name) {
  console.log(`olá, ${name}`)
}

const x = (value) => {
  return value;
}


// x(logGreeting('renan'))





/*
  03

  - O código abaixo possui uma parte que pode ser isolada. Isole-a.
*/

const numbers = [3, 4, 10, 20];

const funcToNumber = (num) => {
  return num => num < 5
;}

const lesserThanFive = numbers.filter(funcToNumber(numbers));

// const lesserThanFive = numbers.filter(num => num < 5)

// console.log(lesserThanFive)



/*
  04

  - Refatore o código abaixo.
*/

const prices = [12, 19, 7, 209]
// let totalPrice = 0

const reducePrices = prices.reduce((acc, price) => {
  return acc + price;
}, 0);

// console.log(`Preço total: ${reducePrices}`)

// for (let i = 0; i < prices.length; i++) {
//   totalPrice += prices[i]
// }





/*
  05

  - Abaixo da declaração do objeto "car", modifique a cor do carro para 'azul';
  - Não insira `car.color = azul`.
*/


let car = { color: 'amarelo' }

car['color'] = 'azul';

// console.log(car);



/*
  06

  - Crie uma função que recebe 3 argumentos;
  - Se um dos 3 argumentos não for passado na invocação, a string 'A função 
    deve ser invocada com 3 argumentos' deve ser retornada;
  - Se todos os argumentos forem passados, retorne a string 'A função foi 
    invocada com 3 argumentos'.
*/

const onlyThreeArguments = (arg1, arg2, arg3) => {

  const arrArg = [arg1, arg2, arg3]
  
  const testArrArg = arrArg.some(item => item === undefined );
  // debugger

  return testArrArg ? 'A função deve ser invocada com 3 argumentos' : 'A função foi invocada com 3 argumentos' 
  

};


// console.log(onlyThreeArguments(1, 2, 3));


// const onlyThreeArguments = (arg1, arg2, arg3, ...n) => {

//   const arrArg = [arg1, arg2, arg3, ...n]  ;
//   console.log(arrArg.length)
//   const testArrArg = arrArg.some(item => item === undefined || arrArg.length !== 3);
//   // debugger

//   return testArrArg ? 'A função deve ser invocada com 3 argumentos' : 'A função foi invocada com 3 argumentos' 
  

// };


// console.log(onlyThreeArguments(1, 2, 3));





/*
  07

  - O objeto abaixo representa uma caixa de livros com espaço para 5 livros e 
    que, no momento em que foi declarado, possui nenhum livro dentro;
  - Crie um método que irá adicionar livros na caixa;
  
  Este método deve:
    - Receber por parâmetro o número de livros que serão colocados na caixa. 
      Esse número não precisa encher a caixa de uma só vez, os livros podem 
      ser acrescentados aos poucos;

    - Retornar a frase: "Já há 'X' livros na caixa";

    - Se a caixa já estiver cheia, com todos os espaços já preenchidos, o 
      método deve retornar a frase: "A caixa já está cheia";

    - Se ainda houverem espaços na caixa mas a quantidade de livros passada por
      parâmetro for ultrapassar o limite de espaços da caixa, mostre quantos 
      espaços ainda podem ser ocupados, com a frase: "Só cabem mais 
      QUANTIDADE_DE_LIVROS_QUE_CABEM livros";



    - Se couber somente mais um livro, mostre a palavra "livro" (no singular) 
      na frase acima.
*/

let booksBox = {
  spaces: 5,
  booksIn: 0,
  addBooks (num) {
    
    // const booksInBooksIn = this.booksIn;
    this.booksIn += num;

    
    if (this.booksIn < this.spaces) {
      
      return `Já há ${this.booksIn} livros na caixa`;
      
    }
    
    if (this.booksIn > this.spaces) {


      return `space : ${this.spaces}
booksIn: ${this.booksIn}`

    }

    
    

    if (this.booksIn === this.spaces) {

      return `A caixa já está cheia`

    }
      
      
    
    
    
    // return `A caixa já está cheia` 

  }
}



console.log(booksBox.addBooks(1));
console.log(booksBox.addBooks(5));
// console.log(booksBox.addBooks(1));
// console.log(booksBox.addBooks(1));
// console.log(booksBox.addBooks(1));




