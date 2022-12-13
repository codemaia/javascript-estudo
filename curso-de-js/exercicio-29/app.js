/*
  01

  - Faça requests para a https://pokeapi.co/, da seguinte forma:
    - Encapsule o código do request em uma função que recebe os parâmetros 
      "url" e "callback";
    - Se o request estiver ok, exiba no console 'Pokémon obtido: 
      NOME_DO_POKEMON';
    - Se o request não estiver ok, exiba no console 'Não foi possível obter o 
      Pokémon';
    - Os pokémons buscados devem ser: 'bulbasaur', 'charmander' e 'squirtle';
    - Os requests devem ser sequenciais. Ou seja, um request só deve ser 
      executado quando o request anterior for finalizado.
*/



const getPokemons = (url, callback) => {

  const request = new XMLHttpRequest();
  
  request.addEventListener('readystatechange', () => {

    const isRequestOk = request.readyState === 4 && request.status === 200;
    const isRequestNotOk = request.readyState === 4;

    if (isRequestOk) {
      const data = JSON.parse(request.responseText);
      callback(null, data);
      return
    }
  
    if (isRequestNotOk) {
      callback('Não foi possível obter o Pokémon', null);
      
    }
   
  });
  
  request.open('GET', url);
  request.send();

}


const logPokemonData = (error, data) => error 
  ? console.log(error)
  : console.log(`Pokémon obtido: ${data.name}`);


const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;

const bulbasaur = getPokemonUrl(1);
const charmander = getPokemonUrl(4);
const squirtle = getPokemonUrl(7);

getPokemons(bulbasaur,(error, data) => {
  logPokemonData(error, data);
  getPokemons(charmander, (error, data) => {
    logPokemonData(error, data);
    getPokemons(squirtle, logPokemonData); // podemos fazer assim também, porém iria fazer chamada de uma vez só.
  });
});


// const getPokemons = (url, callback) => {

//   const request = new XMLHttpRequest ();
  
//   request.addEventListener('readystatechange', () => {
    
//     if (request.readyState === 4 && request.status === 200) {
//       callback(null, request.responseText);
//       return 
//     }

//     if (request.readyState === 4) {
//       callback('Não foi possível obter o Pokémon', null);
//     }

//   });
  
//   request.open('GET', url);
//   request.send();

// };


// getPokemons('https://pokeapi.co/api/v2/pokemon/bulbasaur',(error, data) => {
//   if (error) {
//     console.log(error);
//   }
//   if (data) {
//     console.log('Pokémon obtido: Bulbasaur');
//   }
//   getPokemons('https://pokeapi.co/api/v2/pokemon/charmander',(error, data) => {
//     if (error) {
//       console.log(error);
//     }
//     if (data) {
//       console.log('Pokémon obtido: Charmander')
//     }
//     getPokemons('https://pokeapi.co/api/v2/pokemon/squirtle', (error, data) => {
//       if (error) {
//         console.log(error);
//       }
//       if (data) {
//         console.log('Pokémon obtido: Squirtle');
//       }
//     });
//   });

// });



/*
  02

  - Há algumas etapas, implementamos o método some, do zero;
  - Neste exercício, seu desafio será criar o método map, do zero;
  - Implemente uma função "map" que possui a mesma funcionalidade do método  
    map original;
  - Você não poderá utilizar o método map de array, embutido na linguagem;
  - A assinatura da invocação desta função deve ser:
    - map([1, 2, 3], number => number * 2) // [2, 4, 6];
    - map([1, 2, 3], number => number * 3) // [3, 6, 9];
  - Se você não se lembra como o método map funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "O método map" - Aula 01-02 da etapa 08;
      - "Correção dos exercícios da aula 01 da etapa 08" - Aula 02-01 da etapa 
        08;
    2) Pesquisar no MDN.
*/

// Metodo MAP = retorna um array com o mesmo numero de elementos do array original so que modificado

const map = (arr, func) => {

  const newArr = []

  const addNewItemToNewArray = item => {
    const newItem = func(item)
    newArr.push(newItem);
  }

  arr.forEach(addNewItemToNewArray)
  
   return newArr;

}


console.log(map([1, 2, 3], number => number * 2));
console.log(map([10, 20, 30], number => number * 2));




/*
  03

  - Descomente o console.log abaixo e faça o this do método referenciar o 
    objeto person.
*/

// const person = {
//   name: 'Roger',
//   getName: () => this.name
// }

// const person = { // CORRETO
//   name: 'Roger',
//   getName: function () { return this.name } 
// }

// const person = {
//   name: 'Roger',
//   getName: () => person
// }


const person = { // CORRETO TAMBÉM 
  name: 'Roger',
  getName: () => person.name
}


console.log(person.getName());


/*
  04

  - Descomente a 2ª const abaixo e salve este arquivo;
  - Um erro será exibido no console;
  - Faça as duas const x coexistirem, sem modificar o nome de qualquer uma 
    delas.
*/

const x = 'x';

const getX = () => {
  const x = 'y';
  return x; 
}

console.log(x, getX());




/*
  05

  - O código abaixo está funcionando. Refatore-o da forma mais concisa que você 
    conseguir.
*/



const getFullName = ({ firstName, lastName }) => `${firstName} ${lastName}`

// const getFullName = (user) => {
//   const { firstName, lastName } = user;
  
//   return `${firstName} ${lastName}`
// }

console.log(getFullName({ firstName: 'Afonso', lastName: 'Solano' }))



// const getFullName = (user) => {
//   const firstName = user.firstName
//   const lastName = user.lastName

//   return `${firstName} ${lastName}`
// }

// console.log(getFullName({ firstName: 'Afonso', lastName: 'Solano' }))




/*
  06

  - Crie uma função chamada 'convertToHex', que recebe o nome de uma cor por 
    parâmetro. Exemplo: 'red';
  - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);

    black 	#000000
    red     #FF0000
    pink    #FFC0CB
    green   #00FF00
    yellow  #FFFF00



  - Verifique se a cor passada por parâmetro é algum hexa escolhido. Se for,
    retorne a frase 'O hexadecimal para a cor COR é HEXADECIMAL';
  - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a mensagem 'Não temos o equivalente hexadecimal para COR';
  - Exiba o hexadecimal de 8 cores diferentes usando a função criada acima.
*/



const convertToHex = (value) => {

  const colors = {
    black: '#000000',
    red: '#FF0000',
    pink: '#FFC0CB',
    green: '#00FF00',
    yellow: '#FFFF00',
  };

  return colors[value] 
  ? `O hexadecimal para a cor ${value} é ${colors[value]}` 
  : `Não temos o equivalente hexadecimal para ${value}`;
  
};


const colors = [
  'black', 
  'withe', 
  'red', 
  'pink', 
  'gray', 
  'green', 
  'yellow', 
  'blue'
];

const logColors = color => console.log(convertToHex(color));
colors.forEach(logColors);



/*
  07

  - Através do array abaixo, gere um objeto com a frequência de idades das 
    pessoas;

  - Ou seja, se o array contém 3 pessoas com 18 anos, o objeto gerado deve ter 
    uma propriedade 18 com o valor 3, se o array contém 2 pessoas com 19 anos,
    o objeto gerado deve ter uma propriedade 19 com o valor 2 e assim por 
    diante.
  
  Resultado desejado: { 18: 3, 19: 2, 20: 1 }

  Dica: pesquise por Computed Property Names.
    // 
*/

const people = [
  { id: 5 , name: 'Angelica', age: 18, federativeUnit: 'Pernambuco' },
  { id: 81, name: 'Thales', age: 19, federativeUnit: 'São Paulo' },
  { id: 47, name: 'Ana Carolina', age: 18, federativeUnit: 'Alagoas' },
  { id: 87, name: 'Felipe', age: 18, federativeUnit: 'Minas Gerais' },
  { id: 9 , name: 'Gabriel', age: 20, federativeUnit: 'São Paulo' },
  { id: 73, name: 'Aline', age: 19, federativeUnit: 'Brasília' }
];


// const frequencyAge = people.reduce((acc, { age }) => {
//   acc[age] = acc[age] + 1 || 1;
//   return acc;
// }, {});

// console.log(frequencyAge);

const createOrIncrementObjAge = (acc, { age }) => {
  //[age] -> expressão que vai ser computada como nome do objeto
acc[age] = acc[age] + 1 || 1

return acc
};

const objAge = people.reduce(createOrIncrementObjAge, {});


console.log(objAge)




