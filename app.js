/* WELCOME TO THE FANTASTIC WORLD OF JAVASCRIPT */

//console.log(2, 1);


// AULA 01-06 ****************************************************************************

/*let age = 33;
let currentYear = 2022;

console.log(age, currentYear);

age = 32;

console.log(age);

const points = 100; //não aceita atribuição
console.log(points);

*/




//AULA 02-03 ****************************************************************************
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



//AULA 02-04 ****************************************************************************
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




//AULA 02-05 ****************************************************************************
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




//AULA 02-06 ****************************************************************************
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





// AULA 03-02 ****************************************************************************

// Arrays

// Arrays são utilizados para armazenar uma lista de valores que geralmente tem relação entre si

let heroes = ['Batman', 'Catwoman', 'Iron Man'];

//sobrescrever um valor
heroes[2] = 'Spider-Man';
//

//const age = [31, 25, 39, 40, 25];

const randomArray = ['Parker', 'Diana', 19, 18];


// Metodos de arrays
//join -> retorna uma nova string do array concatenado e separado por ',' mas podemos passar um separador
const joinHeroes = heroes.join(' | ');

//indexOf -> obtem o index da primeira ocorrencia do valor passado. Valor passado que não existe no array retorna -1 ****
//const indexOf25 = age.indexOf(25); 

//concat -> concatena 2 arrays e nao modifica o array original.
const moreHeroes = heroes.concat(['Superman', 'Wolverine']);

//push -> adiciona valores passados ao fim do array e retorna o novo numero de itens do array. ALTERA O VALOR ORIGINAL DO ARRAY
const pushToHeroes = heroes.push('Cyclops', 'Hulk');

//pop -> remove o ultimo item de um array e retorna esse item removido
const popHeroes = heroes.pop('Hulk');

// console.log(heroes);



// AULA 03-03 ****************************************************************************
//Null e undefined





// AULA 04-02 ****************************************************************************
//Booleans e comparações
// console.log(true, false, 'true', 'false');


// Métodos podem retornar booleans
// método includes -> PODE SER USADO EM STRINGS E ARRAYS  -verifica se uma string existe em outra string
const email = 'brucewayne@renanmaia.com.br';
const includes = email.includes('wayne');
const names = ['dio', 'roger', 'robert'];
const arrayIncludes = names.includes('rob');

// console.log(includes);
// console.log(arrayIncludes);


//Operadores de comparação

// const age = 31;
const name = 'roger'; //letra minuscula é maior que caracteres MAIUSCULOS

// console.log(age == 31);
// console.log(age == 35);
// console.log(age != 35); // age "!= não é igual" a 35
// console.log(age != 31);
// console.log(age > 30);
// console.log(age > 31);
// console.log(age < 31);
// console.log(age < 32);
// console.log(age <= 31);
// console.log(age >= 31);

// console.log(name == 'roger');
// console.log(name == 'Roger');
// console.log(name > 'belinha');
// console.log(name > 'Roger');
// console.log(name > 'Belinha');


// AULA 04-03 ****************************************************************************

const age = 31;

// 'igual a' e 'diferente de'
// console.log(age == 31);
// console.log(age == '31'); //a string '31' é convertida para number devido ao sinal '=='
// console.log(age != 31);
// console.log(age != '31');//a string '31' é convertida para number devido ao sinal '=='


// 'igual a, e do mesmo tipo' e 'diferente de, e do mesmo tipo'

// console.log(age === 31);
// console.log(age === '31');
// console.log(age !== 31);
// console.log(age !== '31');

console.log(age === 31);
