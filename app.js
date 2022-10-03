// /* WELCOME TO THE FANTASTIC WORLD OF JAVASCRIPT */

// //console.log(2, 1);


// // AULA 01-06 ****************************************************************************

// /*let age = 33;
// let currentYear = 2022;

// console.log(age, currentYear);

// age = 32;

// console.log(age);

// const points = 100; //não aceita atribuição
// console.log(points);

// */




// //AULA 02-03 ****************************************************************************
// // STRINGS

// /*
// const email = 'renanmaia@email.com';
// const firstName = 'Renan';
// const lastName = 'Maia';
// const fullName = firstName + ' ' + lastName;

// console.log(fullName);

// // acessando caracteres

// console.log(fullName[2]);


// // comprimento de uma string

// console.log(fullName.length);


// // metodos de string

// console.log(fullName.toUpperCase());

// const result = fullName.toLocaleLowerCase();

// console.log(result, fullName);

// const index = email.indexOf('@');

// console.log(index);
// */



// //AULA 02-04 ****************************************************************************
// // Métodos de strings
// // Não mudam o valor original

// /*
// const email = 'laracroft@rogermelo.com.br';

// //# lastIndexOf -> Obtem a ultima ocorrencia do caracter passado como argumento

// const lastIndexOfA = email.lastIndexOf('a');

// console.log(lastIndexOfA);


// //# slice -> 'fatiar' a string - 1arg. de onde quer começar, 2arg. onde quer ser cortada.

// const emailSlice = email.slice(0, 9);

// console.log(emailSlice); //laracroft


// //# replace -> subistituir o caracter da string por outro

// const emailReplace = email.replace('l', 'y');

// console.log(emailReplace) //yaracroft@rogermelo.com.br
// */




// //AULA 02-05 ****************************************************************************
// // Numbers

// /*
// //inteiros e decimais
// const radius = 10;
// const pi = 3.14;

// console.log(radius, pi);


// // operadores aritimeticos
// const area = pi * radius ** 2;


// // ordem de operação

// const crazyOperations = 5 * (10 - 3) ** 2;

// console.log(crazyOperations);

// //1ª parênteses
// //2ª expoentes ou raízes
// //3ª multiplicação e divisão
// //4ª adição e subtração


// // operadores de incrementos e decremento
// let postLikes = 10;

// //postLikes = postLikes + 1;
// // postLikes++;
// // postLikes--;
// //console.log(postLikes);


// // operadores addition, substraction, multiplication e division assignment
// //postLikes += 10;
// //postLikes -= 5;
// //postLikes *= 2;
// //postLikes /= 2;

// //console.log(postLikes);



// // NaN - not a number
// console.log(7 / 'oi');


// // concatenação de string com número

// const likesMessage = 'O post tem ' + postLikes + ' likes.';

// console.log(likesMessage);
// */




// //AULA 02-06 ****************************************************************************
// // Template strings

// /*
// const postTitle = 'É bolacha ou biscoito?';
// const postAuthor = 'Matheus Saad';
// const postComments = 15;


// // usando concatenação


// // usando template strings
// // const postMessage = `O post "${postTitle}", do ${postAuthor}, tem ${postComments} comentários.`
// // console.log(postMessage);

// // cirando templates HTML

// const html = `
//     <h2>${postTitle}<h2>
//     <p>Autor: ${postAuthor}</p>
//     <span>Este post tem ${postComments} comentários</span>
// `
// console.log(html);

// */





// // AULA 03-02 ****************************************************************************

// // Arrays

// // Arrays são utilizados para armazenar uma lista de valores que geralmente tem relação entre si

// let heroes = ['Batman', 'Catwoman', 'Iron Man'];

// //sobrescrever um valor
// heroes[2] = 'Spider-Man';
// //

// //const age = [31, 25, 39, 40, 25];

// const randomArray = ['Parker', 'Diana', 19, 18];


// // Metodos de arrays
// //join -> retorna uma nova string do array concatenado e separado por ',' mas podemos passar um separador
// const joinHeroes = heroes.join(' | ');

// //indexOf -> obtem o index da primeira ocorrencia do valor passado. Valor passado que não existe no array retorna -1 ****
// //const indexOf25 = age.indexOf(25); 

// //concat -> concatena 2 arrays e nao modifica o array original.
// const moreHeroes = heroes.concat(['Superman', 'Wolverine']);

// //push -> adiciona valores passados ao fim do array e retorna o novo numero de itens do array. ALTERA O VALOR ORIGINAL DO ARRAY
// const pushToHeroes = heroes.push('Cyclops', 'Hulk');

// //pop -> remove o ultimo item de um array e retorna esse item removido
// const popHeroes = heroes.pop('Hulk');

// // console.log(heroes);



// // AULA 03-03 ****************************************************************************
// //Null e undefined





// // AULA 04-02 ****************************************************************************
// //Booleans e comparações
// // console.log(true, false, 'true', 'false');


// // Métodos podem retornar booleans
// // método includes -> PODE SER USADO EM STRINGS E ARRAYS  -verifica se uma string existe em outra string
// const email = 'brucewayne@renanmaia.com.br';
// const includes = email.includes('wayne');
// //const names = ['dio', 'roger', 'robert'];
// //const arrayIncludes = names.includes('rob');

// // console.log(includes);
// // console.log(arrayIncludes);


// //Operadores de comparação

// // const age = 31;
// const name = 'roger'; //letra minuscula é maior que caracteres MAIUSCULOS

// // console.log(age == 31);
// // console.log(age == 35);
// // console.log(age != 35); // age "!= não é igual" a 35
// // console.log(age != 31);
// // console.log(age > 30);
// // console.log(age > 31);
// // console.log(age < 31);
// // console.log(age < 32);
// // console.log(age <= 31);
// // console.log(age >= 31);

// // console.log(name == 'roger');
// // console.log(name == 'Roger');
// // console.log(name > 'belinha');
// // console.log(name > 'Roger');
// // console.log(name > 'Belinha');


// // AULA 04-03 ****************************************************************************

// const age = 31;

// // 'igual a' e 'diferente de'
// // console.log(age == 31);
// // console.log(age == '31'); //a string '31' é convertida para number devido ao sinal '=='
// // console.log(age != 31);
// // console.log(age != '31');//a string '31' é convertida para number devido ao sinal '=='


// // 'igual a, e do mesmo tipo' e 'diferente de, e do mesmo tipo'

// // console.log(age === 31);
// // console.log(age === '31');
// // console.log(age !== 31);
// // console.log(age !== '31');





// // AULA 04-04 ****************************************************************************
// //Conversao de tipos

// let score = '100';

// //score = Number(score); //converte string para NUMBER

// // utilizamos typreof para identificar o tipo de dado
// // console.log(score + 1);
// // console.log(typeof score);

// const crazyConversion = Number('Maça');
// const convertedNumber = String(97);
// const booleanConversion = Boolean(10);

// // console.log(crazyConversion);
// // console.log(convertedNumber, typeof convertedNumber); //""
// // console.log(booleanConversion);

// /* 
//     Valores falsy:
//     - false
//     - 0
//     - "", '', ``
//     - null
//     - undefined
//     - NaN

//     Valores truthy:
//     - Qualquer valor que nao é falsy, ou seja, qualquer valor que não esteja aprensentado no falsy a cima
// */






// /// ETAPA 2 CONTROLE DE FLUXO ***********************************************************************************************************

// /// AULA 01-03
// /// For loop  *************************************************************************************************************


// // for (let i = 0; i < 5; i++) {
// //     console.log(`Dentro do loop: ${i}`);
// // }

// // console.log('Loop concluido');



// // const names = ['Linus', 'Ada', 'Bill'];
// //                 //resulta em 3 que é a quantidade de itens do array, isso nos assegura que vamos executar o codigo baseado na quantidade
// //                 //de itens do array sem saber quantos itens possui.
// // for (let i = 0; i < names.length; i++) {
// //     //console.log(i) //0, 1, 2
// //     console.log(names[i]);
// // }


// // for (let i = 0; i < names.length; i++) {
// //     const HTMLTemplate = `<p>${names[i]}</p>`
// //     console.log(HTMLTemplate);
// // }





// // / AULA 01-04
// // / While loop  *************************************************************************************************************


// // let i = 0

// // while(i < 5) {
// //     console.log(`Dentro do loop while: ${i}`);
// //     i++;
// // }


// // const names = ['Lívia', 'Renan', 'Tita', 'Brisa'];
// // let i = 0;

// // while(i < names.length) {
// //     console.log(names[i]); //names[i] i terá o valor dos indixes dos arrays, ex: começa com i = 0, 0 é o primeiro index do array;
// //     i++;
// // }






// // / AULA 02-02
// // A Condicional if ***********************************************************************************************

// // if (se) se uma condição for verdadeira fazer algo, só executa se for TRUE.



// const age = 19;

// if (age > 18) {
//     console.log('Você é maior de idade');
// }


// const simpsons = ['Marge', 'Homer', 'Lisa', 'Bart'];

// if(simpsons.length >= 5) {
//     console.log('O array tem bastante personagens');
// }


// const password = 'oi123321';

// if (password.length >= 8) {
//     console.log('Essa senha tem 8 ou mais caracteres');
// }


// AULA 02-03
// Else e else if statements **********************************************************************
// ELSE (se não);

// const password = 'oi1233333333';

// if(password.length >= 12) { //se true
//     console.log('senha muito forte! :D');
// }else if (password.length >= 8) { //se true
//     console.log('Essa senha tem 8 ou mais caracteres');
// } else { //se não
//     console.log('a senha deve conter 8 ou mais caracteres');
// }





// AULA 02-04
// Operadores lógicos "OU" || e "E" && *********************************************************


// const password = 'oi123';

// if(password.length >= 12 && password.includes('1')) { //se true && "e" (&& as duas expressoes precisam retornar TRUE)
//     console.log('senha muito forte! :D');
// }else if (password.length >= 8 || password.includes('1') && password.length >= 5) { //se true || "ou" (|| apenas uma expressão precisar retornar TRUE. Podemos colocar mais de 2 expressoes, e precisamos que apenas 1 retorne TRUE. || com &&)
//     console.log('Senha forte!');
// } else { //se não
//     console.log('a senha deve conter 8 ou mais caracteres');
// }





//AULA 03-02
// O operador lógico not (!) ######################################################
/*
    (!) Esse operador quando inserido na frente de um boolean ele inverte o boolean.
Se o boolean é true vira false e vice e versa.

!true = false
!false = true

*/

// let isUserLoggedIn = false;

// if(!isUserLoggedIn) {
//     console.log('Você precisa fazer login para continuar');
// }


// console.log(!true);
// console.log(!false);





//AULA 03-03
// Break e continue ######################################################

/*
    Break = Parar/quebrar o loop.
            A iteração pelos elementos seguintes não vai continuar.

    continue = Pula uma iteração em particular. Se CONTINUE é chamada, o código a baixo é ignorado
               e a iteração continua (pulando a iteração em particular declarada);

*/


// const scores = [50, 25, 0, 30, 100, 20, 10];

// for (let i = 0; i < scores.length; i++) {
//     //continue => pular o valor/iteração 0 (zero).
//     if (scores[i] === 0) {
//         continue;
//     }

//     console.log(`sua pontuação: ${scores[i]}`);

//     //break => parar o loop na 'pontuação máxima'

//     if(scores[i] === 100) {
//         console.log('parabéns, você atingiu a pontuação máxima');

//         break;
//     }

// }






//AULA 03-04
// A condicional switch ######################################################

/*
    switch = Usado para verificar multiplos valores possíveis de uma variavel ou constante.
    
*/

// const grade = 'E';

// switch(grade) {
//     case 'A':
//         console.log('você tirou um A');
//         break;
//     case 'B':
//         console.log('você tirou um B');
//         break;
//     case 'C':
//         console.log('você tirou um C');
//         break;
//     case 'D':
//         console.log('você tirou um D');
//         break;
//     case 'E':
//         console.log('você tirou um E');
//         break;
//     default:
//         console.log('nota invalida');
// }






// ETAPA 03 - FUNÇÕES E METODOS ########################################################################################

// AULA 01-02 - O que são funções 

/*
    @ Funções fazem parte do tipo OBJECT.
    Papel principal é permitir criar um bloco de código que podemos invocar e executar quando quiser.
    
    Função = UMA CAIXA DE CÓDIGO E PODEMOS EXECUTALAS VARIAIS VEZES NO CÓDIGO.
    podemos passar valores para uma função, a função vai pegar os valores.. fazer algo e devolver o resultado.
    
    EX: Pega a latitude e longitude, joga numa função e ela converte para um endereço. oss

    # Invocando função:

    showMessage()



*/






// AULA 01-03 - Function declaration, function expression and hoisting


/*
    @ Hoisting -> Içamento para o topo do arquivo.
    
    # Quanto menos contarmos com o que esta por debaixo do panos (hoisting/içamento) melhor para nossa aplicação
      e mais facil é para debugar.
    

*/


// Function declaration
// -> A function declaration é 'içada' para o topo do arquivo e com isso podemos declarar ela mesmo que a sua construção venha depois. 
//    podemos colocala em qualquer lugar do arquivo que o JavaScript vai puxala para o topo do arquivo e executar normalmente.

// sayHi(); // -> Por isso não é ocasionado erro. diferente de uma FUNCTION EXPRESSION.

// function sayHi () {
//     console.log('oi');
// }



// // Function expression
// // -> Aqui o hoisting 'Içamento' não funciona. É necessário criar/declarar a function expression antes da sua invocação.

// const showFood = function () {
//     console.log('pizza *.*');
// }

// showFood();






// AULA 01-04 - Argumentos, parametros e default parameters


/*
    @ Na função passa PARAMETRO!
      Na invocação da função passa ARGUMENTO!

      A ordem dos ARGUMENTOS (invocação) deve seguir a ordem dos PARAMETROS (função)
    # dentro da função os parametros nao precisam estar na ordem :) 
    # para evitar retornos UNDEFINED das função podemos passar valores defaults nos PARAMETROS.
    
    segue exemplo a baixo

*/

// Argumentos, parâmetros e default parameters

// const myFunc = function (name = 'Renan', lastName = 'Maia') {
//     console.log(`Salve, ${name} ${lastName}!`);
// }

// myFunc();
// myFunc('Livia', 'Ataide');
// myFunc('Livia');






// AULA 01-05 - Retornando valores

/*  



*/


// Retornando valores

// const double = function (number) {
//     const doubleResult = number * 2;
//     return doubleResult
// }

// const result = double(3);

// console.log(result);


// // -> Outra opção de criação

// const doubleV2 = function (number) {
//     return number * 2;
// }

// const resultV2 = double(3);
// console.log(resultV2);



// const showResult = function (value) {
//     return `O resultado é: ${value}`;
// }

// console.log(showResult(result));





// AULA 02-02 - ARROW FUNCTIONS

/*
    # Quando a função não houver parametro utilizar:
    
    os () são obrigatorios quando não houver parametro.

    () => {

    };

*/

// função tradicional

// const double = function (number) {
//     return number * 2;
// }


// arrow function

// 1. PREFIRO ESTA
// const double = (number = 0) => {
//     return number * 2
// }


// ou 
// utilizar somente quando houver somente 1 PARAMETRO
// const double = number => { 
//     return number * 2;
// }

//ou
// outra forma de utilizar quando só houver 1 parametro.
const double = number => number * 2;


const result = double(3);
console.log(`O resultado é : ${result}`);