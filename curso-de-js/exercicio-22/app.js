/*
  01

  - Ordene o array de strings abaixo em ordem alfabética;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const names = ['Caio', 'André', 'Dário'];

const orderdNames = names.map(name => {
  return name;
}).sort();
// orderdNames.sort();
// console.log(orderdNames);





/*
  02

  - Ordene, de forma crescente, os objetos do array abaixo baseado em seus id's;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const characters = [
  { id: 03, name: 'Simba' },
  { id: 02, name: 'Nala' },
  { id: 01, name: 'Scar' },
  { id: 04, name: 'Mufasa' }
];

/**
 *  
 *  quando um array retorna um objeto se fizermos a copia somente com o map e return quando modificarmos
 *  o array original a copia também será modificada porque os objetos do array copia são os mesmos do original.
 *  então devemos junto com o map retornar um objeto
 * 
 *  ex : return { id: item.id, name: item.name }
 * 
 */
const orderCharacters = characters.map(character => {
  return { id: character.id, name: character.name };
});

orderCharacters.sort((item1, item2) => {
  return item1.id - item2.id;
});

// characters[0].name = 'teste de modificação'

console.log(characters, orderCharacters);


/*
  03

  - Ordene o array de números abaixo de forma crescente;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const numbers = [41, 15, 63, 349, 25, 22, 143, 64, 59, 291];

const orderNumbers = numbers.map(number => number);

orderNumbers.sort((number1, number2) => number1 - number2);

// console.log(orderNumbers);



/*
  04

  - Encontre e exiba no console o 1º item maior que 50 do array abaixo.

*/
// const randomNumbers = [10, 5, 0, 40, 60, 10, 20, 70];

const randomNumbers = [10, 5, 0, 40, 60, 10, 20, 70];

const numberGreaterThan50 = randomNumbers.filter(randomNumber => {
  if (randomNumber > 50) {
    return randomNumber;
  }
});

const teste1 = numberGreaterThan50.reduce((accumulator, number) => {
    
    if (number > 50) {

      return accumulator

    }    
  
});

// console.log(numberGreaterThan50);
// console.log(teste1);



/*
  05

  - Ordene o array de strings abaixo em ordem alfabética-invertida (Z-A);
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const people = ['Cauã', 'Alfredo', 'Bruno']
const peopleOrder = people.map(people => people);

peopleOrder.sort((string1, string2) => string2 < string1 ?  -1 : 1)

// console.log(peopleOrder);



/*
  06
  
  - Através do array abaixo, gere a mensagem "vinho cozido, tomate cozido, 
    cebola cozida, cogumelo cozido";
  - Exiba a string no console.
*/

const ingredients = ['vinho', 'tomate', 'cebola', 'cogumelo']

const newIngredients = ingredients.reduce((accumulator, ingredient) => {

  if (ingredient === 'cebola') {
  
    accumulator += ingredient + ' cozida, ';
  } else {

    accumulator += ingredient + ' cozido, '
  }
    
   return accumulator;
  
},''); 


// console.log(newIngredients.slice(0, newIngredients.length - 2));




/*
  07
  
  - À partir do array abaixo, obtenha e exiba no console o total de pessoas que 
    assistiram apenas os filmes da Disney.

    - 61494014
*/

const topBrazilmovies = [
  { title: 'Vingadores: Ultimato', peopleAmount: 19686119, distributedBy: 'Disney' },
  { title: 'Titanic', peopleAmount: 17050000, distributedBy: 'Paramount / 20th Century' },
  { title: 'O Rei Leão', peopleAmount: 16267649, distributedBy: 'Disney' },
  { title: 'Vingadores: Guerra Infinita', peopleAmount: 14572181, distributedBy: 'Disney' },
  { title: 'Tubarão', peopleAmount: 13035000, distributedBy: 'Universal' },
  { title: 'Nada a Perder', peopleAmount: 11944985, distributedBy: 'Paris Filmes' },
  { title: 'Os Dez Mandamentos', peopleAmount: 11259536, distributedBy: 'Paris / Downtown Filmes' },
  { title: 'Tropa de Elite 2', peopleAmount: 11204815, distributedBy: 'Zazen' },
  { title: 'Os Vingadores', peopleAmount: 10968065, distributedBy: 'Disney' },
  { title: 'Dona Flor e Seus Dois Maridos', peopleAmount: 10735524, distributedBy: 'Embrafilme' }
]


const peopleWatchedDisneyMovies = topBrazilmovies.reduce((accumulator, { peopleAmount, distributedBy }) => {
  if (distributedBy === 'Disney') {
    accumulator += peopleAmount
  }
  
  return accumulator;
}, 0);


// console.log(peopleWatchedDisneyMovies);


/*
  08
  
  - Considerando o array abaixo, gere um array de cães;
  - Os cães, ao invés da idade original, devem conter sua "idade humana";
    - Algumas pessoas dizem que 1 ano de um cachorro equivale à 7 anos de uma 
      pessoa. Cientificamente, não é tão simples assim, mas para fins didáticos,  
      se baseie nessa informação para fazer o cálculo.
  - Exiba no console o array dos cães com as idades convertidas.
*/

const pets = [
  { name: 'Boris', age: 4, gender: 'Male', type: 'Dog' },
  { name: 'Jimmy', age: 1, gender: 'Male', type: 'Cat' },
  { name: 'Pérola', age: 2, gender: 'Female', type: 'Dog' },
  { name: 'Lucy', age: 5, gender: 'Female', type: 'Cat' },
  { name: 'Cristal', age: 3, gender: 'Female', type: 'Dog' },
  { name: 'Chico', age: 6, gender: 'Male', type: 'Dog' }
]



const arrayDogs = pets.filter(({ type }) => {
  if (type === 'Dog') {
    return pets
  }
}).map(({ name, age, gender, type }) => {
  return {
    name: name, age: age * 7, gender: gender, type: type
  }
}); 

// console.log(arrayDogs);

const reduceArrayPets = pets.reduce((accumulator , pet) => {
  if (pet.type === 'Dog') {
    
    pet.age = pet.age * 7;
    accumulator.push(pet);
    
  }

  return accumulator;

}, []);

// console.log(reduceArrayPets);






/*
  09
  
  - Considerando o array topBrazilmovies, através do map ou do reduce, insira 
    os nomes dos filmes na ul do index.html.


const topBrazilmovies = [
  { title: 'Vingadores: Ultimato', peopleAmount: 19686119, distributedBy: 'Disney' },
  { title: 'Titanic', peopleAmount: 17050000, distributedBy: 'Paramount / 20th Century' },
  { title: 'O Rei Leão', peopleAmount: 16267649, distributedBy: 'Disney' },
  { title: 'Vingadores: Guerra Infinita', peopleAmount: 14572181, distributedBy: 'Disney' },
  { title: 'Tubarão', peopleAmount: 13035000, distributedBy: 'Universal' },
  { title: 'Nada a Perder', peopleAmount: 11944985, distributedBy: 'Paris Filmes' },
  { title: 'Os Dez Mandamentos', peopleAmount: 11259536, distributedBy: 'Paris / Downtown Filmes' },
  { title: 'Tropa de Elite 2', peopleAmount: 11204815, distributedBy: 'Zazen' },
  { title: 'Os Vingadores', peopleAmount: 10968065, distributedBy: 'Disney' },
  { title: 'Dona Flor e Seus Dois Maridos', peopleAmount: 10735524, distributedBy: 'Embrafilme' }
]



*/

const ul = document.querySelector('.list-group');

// const addListWithReduce = topBrazilmovies.reduce((acc, movie) => {
//     acc += `<li>${movie.title}</li>`;
//     return ul.innerHTML = acc;
// }, []);



// const addListWithReduce = topBrazilmovies.reduce((acc, movie) => {
//   const li = document.createElement('li');
//   li.textContent = movie.title;
  
//   acc += ul.appendChild(li);

//   return acc;
//   // return ul.appendChild(li);

// },[]);



// const addListWithMap = topBrazilmovies.map(movie => {
  
//     return movie.title;

// }).forEach((movieItem) => {
    
//     const li = `<li>${movieItem}</li>`
//     return ul.innerHTML += li;
    
// });


const addListWithMap = topBrazilmovies.map(movie => {
  const li = `<li>${movie.title}</li>`
  return ul.innerHTML += li

});


// console.log(addListWithReduce);
// console.log(addListWithMap);



/*
  10
  
  - Na sua versão do Quiz, teste se ao enviar o form pela 2ª vez consecutiva, a 
    pontuação do envio anterior é contabilizada;
  - Exemplo: exibe 100% no 1º envio e 200% no 2º envio (sem modificar as 
    alternativas entre os envios);
    - Se isso está acontecendo, proponha uma solução para que o 2º submit não 
      considere a pontuação do envio anterior.
*/
