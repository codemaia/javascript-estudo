/*
  01

  - Usando promises, faça um request para este endpoint:
    https://jsonplaceholder.typicode.com/users
  - Se o request estiver ok, exiba os objetos no console;
  - Se o request não estiver ok, exiba no console "Não foi possível obter os 
    dados dos usuários."
*/


const getUsers = url => new Promise((resolve, reject) => {

  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200;
    const isRequestNotOk = request.readyState === 4;

    if (isRequestOk) {
      const data = JSON.parse(request.responseText);
      resolve(data);
    }

    if (isRequestNotOk) {
      reject('Não foi possível obter os dados dos usuários.');
    }
    
  });

  request.open('GET', url);
  request.send();

});


getUsers('https://jsonplaceholder.typicode.com/users')
  .then(users => {
    console.log(users);
  })
  .catch(error => console.log(error));


/*
  02

  - Crie uma função chamada `calculator`, que funcione assim:
    - A função deve receber um parâmetro que dirá qual operação matemática ela
      vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
  - Essa função deve retornar uma segunda função que deve receber dois 
    parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a 
    mensagem: "Resultado da operação: NUMERO_1 OPERADOR NUMERO_2 = RESULTADO."
  - Se o operador não for válido, retorne a mensagem "Operação inválida."
*/ 


const getOperationMessage = (number1, operator, number2, operation) => 
  `Resultado da operação: ${number1} ${operator} ${number2} = ${operation} .`

const calculator = operator => (number1, number2) => {
  const operations = {
    '+': getOperationMessage(number1, operator, number2, number1 + number2 ),
    '-': `Resultado da operação: ${number1} ${operator} ${number2} = ${number1 - number2} .`,
    '*': `Resultado da operação: ${number1} ${operator} ${number2} = ${number1 * number2} .`,
    '/': `Resultado da operação: ${number1} ${operator} ${number2} = ${number1 / number2} .`,
    '%': `Resultado da operação: ${number1} ${operator} ${number2} = ${number1 % number2} .`,
  }

  return operations[operator] || 'Operação inválida.';

}

const sum = calculator('+');
const dif = calculator('-');
const mult = calculator('*');
const div = calculator('/');
const mod = calculator('%');
const outherOperation = calculator('$')

console.log(sum(2, 2));
console.log(dif(10, 3));
console.log(mult(2, 2));
console.log(div(553, 33));
console.log(mod(5, 2));
console.log(outherOperation(1, 1));



/*
  03

  - Crie 2 arrays, `sul` e `sudeste`, que serão as regiões do Brasil. Cada 
    array deve conter os estados dessa região;
  - Crie uma const chamada `brasil`, que irá receber as duas regiões 
    concatenadas. Mostre o `brasil` no console;
  - Adicione 3 novos estados da região Norte no início do array e mostre no 
    console. Pesquise pelo método "unshift" no MDN;
  - Remova o primeiro estado do array `brasil` e mostre-o no console;
  - Crie um novo array chamado `newSul`, que recebe somente os estados do sul,
    pegando do array `brasil`. Não remova esses itens de `brasil`.
*/

console.log('03 --------------------------- ')

const sul = ['Paraná', 'Santa Catarina', 'Rio Grande do Sul'];
const suldeste = ['São Paulo', 'Rio de Janeiro', 'Espírito Santo', 'Minas Gerais'];

const brasil = sul.concat(suldeste);

brasil.unshift('Amazônas', 'Pará');
brasil.shift();

const newSul = [];
newSul.push(brasil[1], brasil[2], brasil[3]);

const getState = (arr1, arr2) => {
  arr1.forEach(item => {
    if (arr2.includes(item)) {
      newSul.push(item);
    }
  });

  return newSul
}

console.log(newSul)
// console.log(brasil);
console.log(getState(brasil, sul));


/*
  04

  - Crie um novo array chamado `nordeste`, que tenha os estados do nordeste;

  - Remova de `brasil` os estados do `sudeste`, colocando-os em uma constante
    chamada `newSudeste`. Pesquise pelo método "splice";

  - Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
    ficar no mesmo nível que os estados já existentes, não em um array separado;

  - Percorra o array `brasil` e gere um novo array chamado `newBrasil`. Esse 
    array deve ter cada item como um objeto, com as propriedades:
      - `id`: que será o índice do array `brasil`;
      - `estado`: que será o estado do array `brasil`;

  - Percorra o array `brasil` e verifique se os estados tem mais de 7 letras 
    cada, atribuindo o resultado à uma constante. Se tiver, mostre no console a 
    mensagem "Sim, todos os estados tem mais de 7 letras.". Se não, mostre no 
    console: "Nem todos os estados tem mais de 7 letras.". Pesquise pelo método 
    every.
*/

console.log('04 ----------------------------------- ')


const nordeste = [
'Maranhão',
'Piauí',
'Ceará',
'Rio Grande do Norte',
'Paraíba',
'Pernambuco',
'Alagoas',
'Sergipe'
];


const newSudeste = brasil.splice(4);
console.log(newSudeste);

for (let i = 0; i < nordeste.length; i++) {
  brasil.push(nordeste[i]);
}
console.log(brasil);

const newBrasil = brasil.map((item, index) => {
  return { 'id': index, 'estado': item };
})

console.log(newBrasil);



const cbEvery = value => value.length > 7

const greaterThan7Letters = brasil.every(cbEvery) 
                          ? "Sim, todos os estados tem mais de 7 letras." 
                          : "Nem todos os estados tem mais de 7 letras.";


console.log(greaterThan7Letters);


/*
  05

  - Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
    resultado à uma constante. Se esse estado existir no array, mostre no 
    console "Ceará está incluído.". Se não, mostre "Ceará não foi incluído =/";

  - Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
    objeto desse array, e adicione a frase abaixo na propriedade `estado`:
    - "ESTADO pertence ao Brasil.";
  - Atribua o novo array a uma constante;

  - Filtre o array criado acima, retornando somente os estados que tiverem ID 
    par. Atribua este novo array à uma constante.
*/

console.log('05 ------- ');

const thereIsCeara = brasil.includes('Ceará') 
                    ? "Ceará está incluído." : "Ceará não foi incluído =/";

console.log(thereIsCeara);

const newBrasilTwo = newBrasil.map(({ id, estado }) => {
  return { id: id + 1, estado: `${estado} pertence ao Brasil.` }
})

console.log(newBrasilTwo)

const newBrasilTwoWithIdPair = newBrasilTwo.filter(({ id }) => id % 2 === 0);

console.log(newBrasilTwoWithIdPair);
console.log(newBrasilTwoWithIdPair);
console.log(newBrasilTwoWithIdPair);
console.log(newBrasilTwoWithIdPair);




