/* WELCOME TO THE FANTASTIC WORLD OF JAVASCRIPT */

//console.log(2, 1);


// AULA 01-06

/*let age = 33;
let currentYear = 2022;

console.log(age, currentYear);

age = 32;

console.log(age);

const points = 100; //não aceita atribuição
console.log(points);

*/




//AULA 02-03
// STRINGS

/*
const email = 'renanmaia@email.com';
const firstName = 'Renan';
const lastName = 'Maia';
const fullName = firstName + ' ' + lastName;

console.log(fullName);

// acessando caracteres

console.log(fullName[2]);


// comprimento de uma string

console.log(fullName.length);


// metodos de string

console.log(fullName.toUpperCase());

const result = fullName.toLocaleLowerCase();

console.log(result, fullName);

const index = email.indexOf('@');

console.log(index);
*/



//AULA 02-04
// Métodos de strings
// Não mudam o valor original

/*
const email = 'laracroft@rogermelo.com.br';

//# lastIndexOf -> Obtem a ultima ocorrencia do caracter passado como argumento

const lastIndexOfA = email.lastIndexOf('a');

console.log(lastIndexOfA);


//# slice -> 'fatiar' a string - 1arg. de onde quer começar, 2arg. onde quer ser cortada.

const emailSlice = email.slice(0, 9);

console.log(emailSlice); //laracroft


//# replace -> subistituir o caracter da string por outro

const emailReplace = email.replace('l', 'y');

console.log(emailReplace) //yaracroft@rogermelo.com.br
*/




//AULA 02-05
// Numbers

/*
//inteiros e decimais
const radius = 10;
const pi = 3.14;

console.log(radius, pi);


// operadores aritimeticos
const area = pi * radius ** 2;


// ordem de operação

const crazyOperations = 5 * (10 - 3) ** 2;

console.log(crazyOperations);

//1ª parênteses
//2ª expoentes ou raízes
//3ª multiplicação e divisão
//4ª adição e subtração


// operadores de incrementos e decremento
let postLikes = 10;

//postLikes = postLikes + 1;
// postLikes++;
// postLikes--;
//console.log(postLikes);


// operadores addition, substraction, multiplication e division assignment
//postLikes += 10;
//postLikes -= 5;
//postLikes *= 2;
//postLikes /= 2;

//console.log(postLikes);



// NaN - not a number
console.log(7 / 'oi');


// concatenação de string com número

const likesMessage = 'O post tem ' + postLikes + ' likes.';

console.log(likesMessage);
*/




//AULA 02-06
// Template strings

/*
const postTitle = 'É bolacha ou biscoito?';
const postAuthor = 'Matheus Saad';
const postComments = 15;


// usando concatenação


// usando template strings
// const postMessage = `O post "${postTitle}", do ${postAuthor}, tem ${postComments} comentários.`
// console.log(postMessage);

// cirando templates HTML

const html = `
    <h2>${postTitle}<h2>
    <p>Autor: ${postAuthor}</p>
    <span>Este post tem ${postComments} comentários</span>
`
console.log(html);

*/

