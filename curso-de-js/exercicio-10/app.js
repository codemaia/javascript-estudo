/*
  01

  - Crie um objeto "cat" que possui as seguintes propriedades:
    - name, que recebe o nome do gato;
    - age, que recebe a idade;
    - color, que recebe a cor;
    - bestFriends, que recebe um array com os melhores amigos do gato;
    - sound, que é um método que retorna o miado do gato.
  - Exiba o objeto no console.
*/


let cat = {
  name: 'Lux',
  age:  1,
  color: 'Mesclada',
  bestFriend: ['Tita', 'Brisa'],
  sound: function () {
    return 'MiaaaaaaaauUuUuUu!';
  }
}


console.log(cat);
cat.sound();
console.log(cat.bestFriend[0]);

/*
  02

  - Exiba a mensagem abaixo no console, substituindo os "X" pelas informações  
    corretas.

  Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "X", "age", que recebeu "X", "color", que recebeu "X", "bestFriends", que recebeu um array com os itens "X" e "X", e "sound", que recebeu uma função que retorna "X".
*/

// console.log(`Até  aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "${cat.name}", "age", que recebeu "${cat.age}", "color", que recebeu "${cat.color}", "bestFriends", que recebeu um array com os itens "${cat.bestFriend[0]}" e "${cat.bestFriend[1]}", e "sound", que recebeu uma função que retorna "${cat.sound()}".`)




/*
  03

  - Adicione 2 anos à idade do gato e exiba a idade atualizada no console.
*/


cat.age += 2;
console.log(cat.age);


/*
  04

  - Crie uma função que adiciona um amigo(a) no array de amigos do gato;
  - Exiba o array de amigos no console para verificar se o novo amigo(a) foi  
    adicionado.
*/


//adicionando utilizando object como parametro

const addFriendToObject = (string, object) => {
  object.bestFriend.push(string);
}



const addFriendsCat = (string) => {
  cat.bestFriend.push(string);
}

addFriendsCat('Livia');
addFriendToObject('Renan', cat);
console.log(cat.bestFriend);
console.log(cat);



/*
  05

  - Crie uma função que adiciona mais uma cor à cor do gato;
  - Utilize a sintaxe de colchetes para fazer isso;
  - Exiba a nova cor do gato no console, também utilizando a sintaxe de  
    colchetes.
*/


//EXEMPLO PROFESSOR:

const changeColor = object => {
  object['color'] += ` e azul`;
}

changeColor(cat);
const colorProperty = 'color';
console.log(cat[colorProperty]);

const addColorCat = (string) => {
  cat['color'] += `, ${string}`
}

console.log(cat['color']);
addColorCat('Malhadinha')
console.log(cat);
console.log(cat['color']);



/*
  06

  - Crie uma função que retorna um boolean indicando se um valor recebido por  
    parâmetro é um objeto;
  - Utilize a função para exibir no console se "cat" é um objeto.
*/

const isABoolean = value => typeof value === 'object';

console.log(isABoolean(cat));




/*
  07

  - Crie um objeto "dog" que possui as mesmas propriedades do objeto "cat";
  - Crie uma função que retorna a mensagem abaixo, com as informações corretas;
  - Exiba a mensagem no console.

  "A soma das idades de NOME_DO_GATO e NOME_DO_CACHORRO é RESULTADO_DA_SOMA."
*/

let dog = {
  name: 'Tita',
  age:  5,
  color: 'Caramelo',
  bestFriend: ['Lux', 'Brisa'],
  sound: function () {
    return 'AU AU AU AU!';
  }
}


const getAgeMessage = (cat, dog) => `A soma das idades de ${cat.name} e ${dog.name} é ${cat.age + dog.age}.`

const ageMessage = getAgeMessage(cat, dog);

console.log(ageMessage);

/*
  08

  - Se você descomentar os 2 console.log abaixo, verá que a função "isAnSUV"  
    está funcionando corretamente. Mas ela pode ser melhorada;
  - Como você refatoraria esta função?
*/

// const arrCar = ['Honda HR-V', 'Jeep Renegade', 'Ford EcoSport', 'Hyundai iX35'];


const isAnSUV = car => ['Honda HR-V', 'Jeep Renegade', 'Ford EcoSport', 'Hyundai iX35'].includes(car);

// OR


// const isAnSUV = car => {
//   if (arrCar.includes(car)) {
//     return true
//   }

//   return false
// }

// console.log(isAnSUV('GOL BOLA'))
// console.log(isAnSUV('Ford EcoSport'))


// OR

const checkCar = (arr, car = '') => {
  return arr.includes(car);
}

// console.log(checkCar(arrCar, 'Honda Civic'));

// OR


// const isAnSUV2 = car => {

//   switch(car) {
//     case 'Honda HR-V':
//       return true;
//     case 'Jeep Renegade':
//       return true;
//     case 'Ford EcoSport':
//       return true;
//     case 'Hyundai iX35':
//       return true;
//     default:
//       return false;
//   }

// }


// console.log(isAnSUV2('Jeep Renegade'))
// console.log(isAnSUV2('Golzinho bola'))




/*
  09

  - Crie uma função que recebe um parâmetro 'type';
  - Dentro da função, crie um objeto com as seguintes propriedades:
    - null, que recebe a mensagem 'Seta, explicitamente, uma variável sem valor.'
    - undefined, que recebe a mensagem 'Representa um valor não-setado.'
    - object, que recebe a mensagem 'Arrays, Datas, Objetos literais, Funções, etc.'
  - Se o valor que o parâmetro type receber corresponder à alguma das 3  
    propriedades, retorne a mensagem que a propriedade armazena;
  - Teste a função, exibindo no console a mensagem de cada propriedade.
*/



const verifyType = (type) => {
  
//   const obj = {
//     null: 'Seta, explicitamente, uma variável sem valor.',
//     undefined: 'Representa um valor não-setado.',
//     object: 'Arrays, Datas, Objetos literais, Funções, etc.'
//   }

//  return obj[type];

 // OR

 return {
  null: 'Seta, explicitamente, uma variável sem valor.',
  undefined: 'Representa um valor não-setado.',
  object: 'Arrays, Datas, Objetos literais, Funções, etc.'
}[type];

}

const arr = {};
let arr1 = typeof arr;
// console.log(arr1)

console.log(verifyType('null'));
console.log(verifyType('undefined'));
console.log(verifyType('object'));
