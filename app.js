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
// const double = number => number * 2;


// const result = double(3);
// console.log(`O resultado é : ${result}`);






// AULA 02-03 - FUNÇÕES vs MÉTODOS


/*
    # funções
        são criadas sozinhas.


    # métodos.
        são funções que estao associadas a objetos ou tipos de dados como strings.
        são funções que fazem alguma ação. Utilizamos ' . ' para invocar
*/

// const name = 'Roger';


// // funções

// const sayHi = () => 'Oi';

// const greet = sayHi();

// console.log(greet);


// // métodos

// const nameToUpperCase = name.toUpperCase();

// console.log(nameToUpperCase);








// AULA 02-04 O método forEach e callbacks



/* 
    # callbacks -> São funções que passamos como argumentos da invoção de outras funções ou métodos.

    @ forEach => 'PARA CADA' item do array vamos executar alguma ação.
                 iterar em cada item do array (como um for porém mais elegante)


    Testes:

    console.log('My testers');
    const myDisplaer = (show) => {
        console.log(`It's the result: ${show}`);
    }


    const myCalculator = (num = 0) => {
        let triple = num * 3;
        return triple;
    }

    myDisplaer(myCalculator(0));


*/



// forEach e callbacks

//                 // 3 - CALLBACK: a arrow function de 'myFunc' foi passada como parametro para o parametro 'callback'
// const myFunc = callback => {  // 1 - função declarada
//     const value = 77;

//     callback(value);// 4 - podemos invocar essa função pois ela tem uma função como parametro
//                     // e essa função recebe 'number' como parametro estamos passando o 'value' como argumento da invocação da função
// }


// myFunc(number => { // 2 - função invocada recebendo uma função por argumento
//     console.log(number);
// });



// forEach

// const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook'];

// //podemos desacoprar a arrown function (callback) do forEach.
// const logArrayInfo = (socialNetwork, index, array) => {
//     console.log(index, socialNetwork, array);
// }

//                         //parametros recebíveis.
// socialNetworks.forEach(logArrayInfo);
// //ou
// // socialNetworks.forEach((socialNetwork, index, array) => {
// //     console.log(index, socialNetwork, array);
// // })








// AULA 02-05 Utilizando callbacks


/*

*/


// const ul = document.querySelector('[data-js="ul"]');

// const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook'];


// let HTMLTemplate = '';

// socialNetworks.forEach(socialNetwork => {
//     HTMLTemplate += `<li style="color: deeppink;">${socialNetwork}</li>`
// })

// console.log(HTMLTemplate);

// ul.innerHTML = HTMLTemplate;









// ETAPA 04 - OBJETOS ########################################################################################

// AULA 01-02 O que são objetos


/*
                                   METODOS (FUNÇÕES)
    Objetos possuem PROPRIEDADES e AÇÕES!



*/





// AULA 01-03 CRIANDO OBJETOS LITERAIS


// criando um objeto literal


// let user = {
//     name: 'Renan',
//     age: 31,
//     email: 'renanmaia@email.com',
//     city: 'Belém',
//     blogPosts: ['Empadão de frango', '4 receitas de purê de batata']
// }

//visualizando o objeto
// console.log(user);

// // acessando o valor da propriedade
// console.log(user.name);

// // atribuindo um novo valor para a propriedade
// user.age = 21;
// console.log(user.age);

// // outra opção para acessar o valor da propriedade
// // nessa opção precisar ser string ou variavel que armazena uma string
// console.log(user['name']);
// console.log(user['email']);

// //atribuindo novo valor com a notação de couchetes
// user['name'] = 'Livia';
// console.log(user['name']);


// //poderemos usar variaveis também;
// const key = 'email';
// console.log(user[key]);


// console.log(typeof user);





// AULA 01-04 ADICIONANDO METODOS (FUNCOES)

/*
    METODOS são funções criadas dentro do objeto!


*/


// let user = {
//     name: 'Renan',
//     age: 31,
//     email: 'renanmaia@email.com',
//     city: 'Belém',
//     blogPosts: ['Empadão de frango', '4 receitas de purê de batata'],
    
//     login: function () {
//         console.log('Usuario logado');
//     },
//     logout: function () {
//         console.log('Usuario deslogado');
//     }
// }


// user.login();
// user.logout();







// AULA 02-02 Variáveis de escopo de bloco

/*
    CONST => não pode ter seu valor reatribuido (const number = 1 .... const number = 2 #ERROR)

    LET => pode ser reatribuido ( let number = 2 .... let number = 3 #SUCESSFUL)]

    VAR => NÃO OBEDECE ESCOPO


*/

// variáveis e escopo de bloco

// const age = 31;

// if (true) {
//     const age = 41;
//     const name = 'Renan'

//     console.log (`dentro do 1ª bloco de código: ${age} ${name}`);


//     if (true) {
//         const age = 51
//         console.log(`dentro do 2ª bloco de codigo: ${age}`);
//     }

// }



// console.log(`fora do bloco de código: ${age}`);






// AULA 02-03 A PALAVRA-CHAVE THIS

/*
    this: A PALVRA-CHAVE THIS REFERENCIA O OBJETO ONDE ELA ESTA
          é um objeto de contexto, ela representa o contexto no qual o codigo atual esta sendo executado!

          dependendo de onde usar o valor vai mudar, se usarmos na raiz ele muda, se usarmos dentro de um metodo(funcao) ele 
          obtem os valores do objeto.

          se utilizarmos ARROW FUNCTION para o this ele referencia o WINDOWS e não o metodo que ele foi criado.

          @ SEMPRE USAR FUNCTION DECLARETION COM O THIS

*/



// a palavra-chave this


// let user = {
//     name: 'Renan',
//     age: 31,
//     email: 'renanmaia@email.com',
//     city: 'Belém',
//     blogPosts: ['Empadão de frango', '4 receitas de purê de batata'],
    
//     login: function () {
//         console.log('Usuario logado');
//     },
//     logout: function () {
//         console.log('Usuario deslogado');
//     },
//     logBlogPosts () { // FUNCTION DECLARATION
//         console.log(`${this.name} escreveu os seguintes posts:`);

//         this.blogPosts.forEach(post => {
//             console.log(post);
//         })

//     }
// }


// user.login();
// user.logout();

// user.logBlogPosts();





// AULA 03-02 OBJETOS EM ARRAYS


// let user = {
//         name: 'Renan',
//         age: 31,
//         email: 'renanmaia@email.com',
//         city: 'Belém',
//         blogPosts: [
//             { title: 'Empadão de frango', likes: 30 },
//             { title: '4 receitas de purê de batata', likes: 50 }
//         ],
//         login: function () {
//             console.log('Usuario logado');
//         },
//         logout: function () {
//             console.log('Usuario deslogado');
//         },
//         logBlogPosts () { // FUNCTION DECLARATION
//             console.log(`${this.name} escreveu os seguintes posts:`);
    
//             this.blogPosts.forEach(post => {
//                 console.log(post.title, post.likes);
//             })
    
//         }
//     }
    
    
// user.login();
// user.logout();
// user.logBlogPosts();




// AULA 03-03 O OBJETO MATH

// o objeto Math

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.2;

// console.log(Math.round(area)); // ARREDONDA O NUMBER
// console.log(Math.floor(area)); // ARREDONDA O NUMBER SEMPRE PARA BAIXO
// console.log(Math.ceil(area));  // ARREDONDA O NUMBER SEMPRE PARA CIMA
// console.log(Math.trunc(area)); // RETIRA O DECIMAL DO NUMBER



// // numeros aleatorios

// const randomNumber = Math.random();

// console.log(randomNumber);
    
// // obter numeros aleatorios entre 0 e 100 (incluindo o 100);

// console.log(Math.round(randomNumber * 100));





// AULA 03-04 TIPOS DE REFERENCIA vs TIPOS PRIMITIVOS


// valores primitivos
// SALVA O PRIMEIRO VALOR

// let scoreOne = 50;
// let scoreTwo = scoreOne;




// console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`);

// scoreOne = 100;

// console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`);



// valores de referencia
// APONTAM PRO MESMO OBJETO

// let userOne = { name: 'Renan', age: 31}
// let userTwo = userOne;

// console.log(userOne, userTwo);

// userOne.age = 32;

// console.log(userOne, userTwo);





// ETAPA 05 - O DOCUMENT OBJECT MODEL - DOM ##################################################################################



// AULA 01-03 - 3 escopos em JavaScript que você deve conhecers


/*
    Nao é possivel acessar variaveis fora do seu bloco de codigo
    a não ser que sejam variaveis globais.

    Com funções alinhadas, as funções mais internas conseguem acessar
    variaveis que se encontram fora do seu escopo ou seja nas funçoes externas
    , porém as funçoes
    que estao externas não conseguem acessar variaveis declaradas nas
    funções mais internas.
*/




// AULA 01-04 - Mozilla Developer Network - MDN DOCUMENTAÇÃO


/*
    pt-br
    https://developer.mozilla.org/pt-BR/

    en
    https://developer.mozilla.org/en-US/

*/





// AULA 01-05 - interagindo com o browser

/**
 *  Adicionar conteudo
 *  Modificar estilo CSS
 *  Reagir a eventos
 *  Criar interações menos discretas
 */





// AULA 01-06 - O que é o DOM - Document Object Model



/**
 *              HTML 
 *            /     \
 *          HEAD    BODY
 *          /       /  |  \
 *        title   h1  div  div
 *        texts nodes   \
 *                      / \
 *       text node ->  h1  p -> text node
 */                     





// AULA 01-07 - Query selector & query selector all

/**
 *  Botão direito no elemento HTML > botão direito no seletor em Elements
 *  selecionar COPY depois COPY SELECTOR
 * 
 */


// querySelector()

// const paragraph = document.querySelector('p'); // pegando primeiro 'p' do html
// const paragraphClass = document.querySelector('.error'); // pegando o valor pela class.
// const errorDiv = document.querySelector('div.error');
// const h1 = document.querySelector('body > h1');

// // console.log(paragraph);
// // console.log(paragraphClass);    
// // console.log(errorDiv)
// // console.log(h1);


// // querySelectorAll()

// const paragraphAll = document.querySelectorAll('p');

// // console.log(paragraphAll[0]);
// // paragraphAll.forEach((paragraph) => {
// //     console.log(paragraph);
// // })

// const errors = document.querySelectorAll('.error');

// console.log(errors);







// AULA 01-08 - Outras maneiras de fazer queries no DOM

/**
 *  
 * 
 */



// obter um elemento atraves do ID
// const title = document.getElementById('title');
// // console.log(title);

// // obter um elemento atraves do nome da classe
// const errors = document.getElementsByClassName('error');
// // console.log(errors[0]); // nao é possivel utilizar forEach


// // obter elementos atraves do nome da tag
// const paragraph = document.getElementsByTagName('p');

// console.log(paragraph);









// AULA 02-02 - Adicionando e modificando conteúdo em uma página

/**
 *  @ innerText -> para modificar o TEXTO do DOM
 *                 utilizando o += ele recebe o que já tem mais a nova atribuição
 *                 EX: hello world texto inserido pelo DOM
 *  
 *  @ innerHTML -> para modificar o HTML do DOM
 *                 utilizando o += ele recebe o HTML que ja tem lá e mais a nova atribuição
 *                 se a div estiver vazia, o innerHTML é inserido mesmo assim;
 * 
 * 
 *  # innerText e innerHTML são tanto GETTERS quanto SETTERS
 * 
 */



// //alterando apenas 1 item de TEXTO
// const paragraph = document.querySelector('p'); 

// // paragraph.innerHTML += ' Texto inserido pelo DOM';

// // console.log(paragraph)



// //alterando vários itens de TEXTO de uma vez
// const paragraphs = document.querySelectorAll('p');
// console.log(paragraphs);

// // paragraphs.forEach((paragraph, index) => {
// //     paragraph.innerText += ` Novo texto ${index + 1}`;
// // });




// //adicionar ou modificar o HTML dos elementos
// const div = document.querySelector('.content');

// // div.innerHTML += '<h2>Novo h2</h2>';

// const people = ['Livia', 'Renan', 'Tita', 'Brisa', 'Lux'];

// people.forEach((person) => {
//     div.innerHTML += `<p>${person}</p>`;
// });









// AULA 02-03 - Obtendo e setando atributos
/**
 *   @ getAttribute('atributo "ex: href" ') -> Pegar o atributo, neste caso o link que esta no href
 * 
 *   possui dois parametros
 *      o atributo que quer modificar, novo valor do atributo
 *   @ setAttribute('href', 'https://twitter.com/codemaia') -> Colocar o novo valor no atributo.
 * 
 */

// getAttribute
// const link = document.querySelector('a');
// // console.log(link.getAttribute('href'));


// // setAttribute
// link.setAttribute('href', 'https://twitter.com/codemaia');

// link.innerText = 'Twitter codemaia';


// const paragraph = document.querySelector('p');
// console.log(paragraph.getAttribute('class'));

// paragraph.setAttribute('class', 'success');


// //INSERIR ATRIBUTOS QUE AINDA NÃO EXISTEM (EX: CSS)
// paragraph.setAttribute('style', 'color: green;')




// AULA 02-04 - Modificando estilos CSS (inline)
/**
 *  USAR A PROPRIEDADE:
 *   @ style.
 * 
 * 
 * 
 */


// const title = document.querySelector('h1');

// console.log(title.style);
// console.log(title.style.color);

// //adicionar CSS sem substituir o que ja existe
// title.style.margin = '50px';
// title.style.color = 'pink';
// title.style.fontSize = '50px';
// //remover o CSS
// title.style.margin = '';




// AULA 02-05 - Obtendo, adicionando, removendo e alterando classes CSS
/**
 *  Propriedades:
 * 
 *  Obter listagem das classes:
 *  @classList
 * 
 *  Inserir classe no elemento:
 * 
 *  @classList.add('nome da classe')
 * 
 *  Remover classe do elemento:
 * 
 *  @classList.remove('nome da classe')
 * 
 *  Pegar o texto dentro da propriedade. 'Ex: pegar o texto dentro da propriedade <p>texto</p>:
 *  
 *  @textContent -> ele pega o texto mesmo se não estiver visinal (diplay: none);
 * 
 *  Adicionar classe css:
 *  
 *  @toggle
 */



//ADICIONANDO CLASSE CSS
// const paragraph = document.querySelector('p');

// console.log(paragraph.classList);

// paragraph.classList.add('error');
// paragraph.classList.remove('error');
// paragraph.classList.add('success');

const paragraphs = document.querySelectorAll('p');

// console.log(paragraphs);

// console.log(paragraphs.innerText);

//MINHA RESOLUÇÃO
// paragraphs.forEach((paragraph, index, array) => {
//     console.log(paragraph.innerText);

//     if(paragraph.innerText.lastIndexOf('error') !== -1) {
//         paragraph.classList.add('error');
//     } else if (paragraph.innerText.lastIndexOf('success') !== -1) {
//         paragraph.classList.add('success');
//     }

// });


//RESOLUÇÃO PROFESSOR
// propriedade textContent

// paragraphs.forEach(paragraph => {
//     if(paragraph.textContent.includes('error')) {
//         paragraph.classList.add('error');
//     }

//     if(paragraph.textContent.includes('success')) {
//         paragraph.classList.add('success');
//     }
// })



//ADICIONANDO CLASS (toggle)


// const title = document.querySelector('h1');

// //adiciona a classe
// title.classList.toggle('teste');
// //se chamado mais uma vez REMOVE a class
// title.classList.toggle('teste');







// AULA 03-02 - Parents, children e siblings

/**
 *              HTML 
 *            /         \
 *          HEAD          BODY
 *          /       /      |      \
 *        title   h1  div(parent)  div -> SIBLINGS (elementos no mesmo nivel, no mesmo pai direto)
 *        texts nodes   \
 *                      / \
 *       text node ->  h1  p -> text node
 *                      \  /
 *                      (childrens)
 * 
 *  ## PEGAR OS CHILDRENS
 *  @ article.children
 * 
 * 
 *  ## CONVERTER HTMLCOLLECTION PARA ARRAY!
 *  @ Array.from('ARGUMENTO')
 *      -> const article = documento.querySelector('article);
 *      -> console.log(Array.from(article.children));
 * 
 * 
 */    


const article = document.querySelector('article');

// ## PAI -> FILHO
// ## PARENTS -> CHILDREN

// console.log(article.children);
// console.log(Array.from(article.children));
         //article.childre -> os filhos de article (5) [h2, p, p, p, div]
// Array.from(article.children).forEach(element => {
//     element.classList.add('article-element');
// });



// ## FILHO -> PAI
// ## CHILDREN -> PARENTS

// const title = document.querySelector('h2');
//retorna o PAI do h2
// console.log(title.parentElement);


//retorna o PAI do PAI (PAI DO article);
// console.log(title.parentElement.parentElement);


// SABER QUAL O PROXIMO IRMÃO (SIBLINGS)
// console.log(title.nextElementSibling);


// SABER QUAL O IRMÃO ANTERIOR (do h2)
// retorna NULL se não houver irmao anterior, se for o primeiro filho.
// console.log(title.previousElementSibling);






// AULA 03-03 - Eventos de clique

/**
 *  # EVENTLISTENER 
 *  @ addEventListener('click')
 *   -> 'escuta' o evento
 *  
 *    #Na callback do click, ou seja o 'event' é disponibilizado uma propriedade chamda target como a baixo.
 *  @ event.target -> PEGA O ELEMENTO QUE FOI CLICADO
 * 
 */


// ADICIONANDO EVENT NO BOTÃO BUTTON (E EM TUDO KKK)


// 1 - FAZER UMA QUERY NO DOM PARA OBTER A REFERENCIA DO ELEMENTO NA QUAL QUEREMOS QUE O EVENTO ACONTEÇA
// 2 - ADICIONAR NESSE ELEMENTO UM EVENTLISTENER
//    -> ESCUTAR O EVENTO EM UM ELEMENTO ESPECIFICO
// 3 - IMPLEMENTAR UMA FUNÇAO DE CALLBACK QUE VAI SER EXECUTADA QUANDO O EVENTO ACONTECER


// const button = document.querySelector('button');

// button.addEventListener('click', () => {
    
//     console.log('clicled')
// });

// const lis = document.querySelectorAll('li');

// lis.forEach(li => {
//     li.addEventListener('click', event => {
//         const clickedElement = event.target //PEGAR O ELEMENTO QUE FOI CLICADO
//         clickedElement.style.textDecoration = 'line-through';

//     });
// });







// AULA 03-04 - Criando e removendo  elementos do DOM

/**
 *   #recebe como paramentro o elemento que queremos criar
 *    @ append(li) -> ADICIONA O ELEMENTO AO FINAL / no ultimo filho
 *    @ prepend(li) -> ADICIONA O ELEMENTO NO INICIO / como primeiro filho.
 * 
 *    1 - CRIA O ELEMENTO
 *         const li = document.createElement('li');
 * 
 *    2 - Setta o conteudo e os atributos do elemento
 *         li.textContent = 'Novo item';
 * 
 *    3 - Adiciona como primeiro ou ultimo elemento filho no DOM
 *         ul.prepend(li);
 *  
 * 
 */


// const ul = document.querySelector('ul');
// // ul.remove();

// const lis = document.querySelectorAll('li');

//  lis.forEach(li => {
//      li.addEventListener('click', event => {
//          const clickedElement = event.target //PEGAR O ELEMENTO QUE FOI CLICADO

//        //clickedElement.style.textDecoration = 'line-through';
//          clickedElement.remove(); //-> remover o elemento
//      });
//  });


//  //ADICIONANDO EVENTO NO BUTTON

//  const button = document.querySelector('button');

//  button.addEventListener('click', () => {
//     //outra forma de adicionar 
//     // ul.innerHTML += `<li>Novo item com o innerHTML</li>`;

//     //1
//     const li = document.createElement('li');
//     //2
//     li.textContent = 'Novo item';
//     //3
//     ul.append(li); //-> ADICIONANDO O ELEMENTO NO PAI;

//  });


 



// AULA 04-01s - destructuring em parâmetros de funções
/**
 *  #DESTRUCTURING OBJETOS 
 *  @ foi passado como parametro da função o
 *    mesmo nome das propriedades do objeto 'objTeste'
 *    utilizando ({name, job}) para assim se referenciar
 *    as propriedades do objeto. É necessário que tenham
 *    os mesmos nomes.
 */


// const objTeste = {
//     name: 'Lili',
//     job: 'Ser linda'
// }

// const showNameAndJob = ({name, job}) => {
//     console.log(name, job);
// }

// showNameAndJob(objTeste)







// AULA 04-02 - Event bubbling e event delegation
/**
 * #Event bubbling - Borbulhamento de eventos
 *  @ O evento é disparado/iniciado target do evento, ou seja, onde foi 'cliclado' ou chamado um evento
 *    e é propagado até o TOPO do DOM.
 *  Ex:
 *      no nosso estudo temos varias <li> dentro de um <ul>
 *      o event target é disparado na <li> e ira se propagar para o PAI 
 *      no caso a <ul> verificando se há eventListener na mesma, 
 *      caso tenha ira disparar a função de callback do evento, 
 *      depois irá subir novamente do <ul> para o PAI, 
 *      no caso o <body> e se houver eventos lá irá dispara-los.
 * 
 *  @ Para evitar a propagação do event podemos adicionar um
 *  @ event.stopPropagation() na função de callback principal para que não
 *                            se propague para os PAIS.
 * 
 * 
 * 
 *  #Event Delegation
 *    @ Adicionamos o event ao PAI <ul>, mesmo clicando nas <li> que são 
 *      filhas, o event target é disparado e propagado para o PAI <ul>
 *  
 *    @ devemos checar se realmente a TAG é a LI, utilizando .tagName
 * 
 */



// const ul = document.querySelector('ul');
// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     //1
//     const li = document.createElement('li');
//     //2
//     li.textContent = 'Novo item';
//     //3
//     ul.append(li); //-> ADICIONANDO O ELEMENTO NO PAI;

//  });


// // const lis = document.querySelectorAll('li');

// //  lis.forEach(li => {
// //      li.addEventListener('click', event => {
// //          const clickedElement = event.target //PEGAR O ELEMENTO QUE FOI CLICADO
         
// //          console.log('CLICOU NA LI');
        
// //          event.stopPropagation(); //-> EVITA QUE O EVENTO SE PROPAGUE PARA O PAI
// //                                  //NO CASO, PARA A <ul>
// //         //clickedElement.style.textDecoration = 'line-through';
// //          clickedElement.remove(); //-> remover o elemento
// //      }); 
// //  });


// //Exemplo de Event bubbling and Event delegation
//  ul.addEventListener('click', event => {
//     const clickedElement = event.target; //PEGANDO O target para saber onde foi clicado
    
//     if (clickedElement.tagName === 'LI') { // prop tagName para indicar a tag que queremos a ação
//         clickedElement.remove();
//     };
//  });
 





// AULA 04-03 - Mais eventos do DOM
/**
 *  # Events:
 *  @ copy
 * 
 *  @ mousemove 
 *    - offsetX
 *    - offsetY
 * 
 *  @ wheel 
 *    - pageX ->
 *    - pageY -> 
 *    - evento do scroll do mouse
 *    - ele é adicionado no proprio document. | document.addEventListener('wheel', ())
 * 
 *  Listagem de eventos - MDN
 *  https://developer.mozilla.org/en-US/docs/Web/Events
 */

// const paragraph = document.querySelector('.copy-me');

// paragraph.addEventListener('copy', () => {
//     console.log('texto copiado');
// })


// const div = document.querySelector('.box');

// div.addEventListener('mousemove', event => {
//     div.textContent = `X ${event.offsetX} | Y ${event.offsetY}`; //INSERINDO o texto com as propriedades de localização do mouse
//     // console.log(event.offsetX, event.offsetY);
// });


// document.addEventListener('wheel', event => {
//     console.log(event.pageX, event.pageY);
// });









// AULA 04-04 - Desenvolvendo um popup
/**
 *  @ Retorna as classes filhas para poder fazer a condição dos eventos
 *     event.target.classList[0];
 *  
 *  # Método de array .some() -> sempre retorna BOOLEAN;
 *   @ .some(função com condição) -> Itera sobre o ARRAY e 
 *                                   Retorna TRUE quando pelo menos 1 item do ARRAY
 *                                   atender a condição informada.
 *  
 * roadmap
 * 1 - pegar a referencia do button e da div do pop up
 * 2 - fazer o popup aparecer clicando no button
 * 3 - fazer o popup fechar clicando somente no X, 'saiba mais' ou fora do popup 
 * 4 - pegar a referencia desses itens com o event.target.classList
 * 
 */



// const button = document.querySelector('button');
// const popup = document.querySelector('.popup-wrapper');

// button.addEventListener('click', () => {
//     popup.style.display = 'block';
// });

// //quando clicar em 'popup-close', 'popup-wrapper', 'popup-link'
// //o popup deve fechar;

// popup.addEventListener('click', event => {
//     // console.log(event.target.classList[0]); //retorna o nome da classe, ou seja, o primeiro item do array
//     const getClassClicked = event.target.classList[0]; //mostra a classe html clicada
//     const arrClass = ['popup-close', 'popup-wrapper', 'popup-link']; //classes que devem fechar o popup quando clicadas
//     const shouldClosePopup = arrClass.some(arrClassItem => arrClassItem === getClassClicked);

//     if(shouldClosePopup) { //devera retornar true se a codição do metodo .some() retornar pelo menos 1 true;
//         popup.style.display = 'none';
//     }


// });












// ETAPA 06 - EVENTOS EM FORMULÁRIOS ##################################################################################

//AULA 01-02 -> EVENTOS EM FORMULÁRIOS
/**
 *  Subimit event:
 *  - capturar informações do usuário
 *      ex: email e senha
 *  
 */




//AULA 01-03 -> O EVENTO SUBMIT
/**
 *  # adicionamos o evento submit no FORM!
 *      
 *      @ event.preventDefault() -> para a pagina nao recarregar e conseguirmos capturar as informações
 *  
 *  # podemos pegar o valor do input usando :
 *      @ a referencia do input + value -> input.value
 *      @ form.username.value -> username sendo o ID/name no HTML
 *      @ event.target.username.value -> para usar no REACT
 * 
 */


// const form = document.querySelector('.signup-form');
// // const usernameInput = document.querySelector('#username');

// form.addEventListener('submit', event => {
//     event.preventDefault(); // -> para a pagina nao recarregar

//     //pegando o valor do imput: 
//     // console.log(usernameInput.value);
//     // ou 
//     console.log(form.username.value);
//     // ou assim para react
//     // console.log(event.target.username.value);
// })






//AULA 01-04 -> EXPRESSOES REGULARES
/**
 * 
 *  DOC MDN: 
 *    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
 * 
 *    https://regex101.com/
 * 
 * 
 * ^javascript$ -> O ^ e $ significa que não pode haver caracteres na frente ou depois da regex
 *                 ou seja, neste caso, somente se a palavra for javascript ira dar MATCH.
 * 
 * [] -> caracter set -> da MATCH com qualquer caracter que a gente inserir dentro.
 * ^[a-z]$ -> dar MATCH com qualquer caracter de 'a' a 'z' minusculo e sendo SOMENTE 1 caracter
 * ^[a-zA-Z]$ -> agora da MATCH com qualquer caracter de 'a' ou 'A' a 'z' ou 'Z' sendo somente 1 caracter
 * ^[a-zA-Z]{6,10}$ -> as {} representa um quantificador que presenta a quantidade de caracteres que queremos dar MATCH
 *                     entao agora aceitamos qualquer caracter de aA a zZ que tenham um comprimento de 6 a 10 caracteres
 * ^[a-zA-Z0-9]{6,10}$ -> agora vamos da MATCH com qualquer caracter de aA a zZ e que tenham numeros de 0 a 9
 *                        e que tenham um comprimento de 6 a 10 caracteres;
 * ^.{6,10}$ -> agora com o '.' aceitamos QUALQUER caracter 'auhsd11237102730@[]]{}
 * 
 */





//AULA 01-05 -> TESTANDO PADROES DE REGEX
/**
 *  # PAra testar a REGEX usamos o metodo .test que esta disponivel para regex
 *   Ex: 
 *     @ pattern.test(username) -> sempre retorna um boolean
 *  
 *  # utilizamos também o metodo search() -> ele retorna o INDEX que demos o MATCH
 *                                           sempre retorna um valor numerico.
 *                                           sempre que der valor negativo é porque não deu MATCH
 *                                           sempre que retornar 0 em diante é porque demos MATCH
 *                                           podemos utilizar também para descobrir em que indice/local deu MATCH
 *                                           se retirarmos o ^ e $ da regex; 
 * 
 */


// const form = document.querySelector('.signup-form');
// // const usernameInput = document.querySelector('#username');

// form.addEventListener('submit', event => {
//     event.preventDefault(); // -> para a pagina nao recarregar

//     //pegando o valor do imput: 
//     // console.log(usernameInput.value);
//     // ou 
//     console.log(form.username.value);
//     // ou assim para react
//     // console.log(event.target.username.value);
// });


// const username = 'rogerm';
// const pattern = /^[a-z]{6,}$/; //-> so aceita caracteres de 'a' a 'z' de no minimo 6 caracteres em diante

// const isAMatch = pattern.test(username); // chamando o metodo para testar a regex

// // if (isAMatch) {
// //     console.log('o teste da regex passou =)');
// // } else {
// //     console.log('o teste da regex não passou =(');
// // }


// const result = username.search(pattern); // retornando 0 ou um numero positivo é porque deu MATCH
// console.log(result);








//AULA 02-02 -> VALIDAÇÃO BASICA DE FORMULÁRIOS
/**
 * 
 *  6 a 12 caracteres, letras maiusculas ou minusculas, sem numero e sem caracter especial
 * 
 * 
 */



// const form = document.querySelector('.signup-form');
// const feedback = document.querySelector('.feedback');

// form.addEventListener('submit', event => {
//     event.preventDefault();// -> para a pagina nao recarregar
    
//     const inputUsername = event.target.username.value;
//     const regex = /^[a-zA-Z]{6,12}$/;
//     const result = regex.test(inputUsername);

//     if (result) {
//         feedback.textContent = 'username válido =D';
//         return
//     }
    
//     feedback.textContent = 'O username precisa ter de 6 a 12 caracter sem numeros e sem caracteres especiais';    
// });













