/*
  01

  - Crie um objeto de request;
  - Abra este website https://pokeapi.co/;
  - Baseado no exemplo de endpoint exibido no website, abra uma requisição do 
    tipo GET para obter dados do pokémon 'pikachu';
  - Envie a requisição e trackeie ela usando o listener de evento adequado;
  - Verifique se o estado da requisição representa que a operação foi completada
    e se o status http do request indica que a requisição foi bem sucedida;
  - Se as condições do item acima forem atendidas, exiba no console o texto da 
    resposta que a requisição obteve;
  - Se apenas a 1ª condição for atendida (o estado da requisição representa que 
    a operação foi completada), exiba no console a mensagem 'Não foi possível 
    obter os dados do pokémon';
  - Teste também a verificação do item acima.
*/


const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {

  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText);
  }

  if (request.readyState === 4 && request.status !== 200) {
    console.log('Não foi possivel obter os dados do pokémon');
  }

});


request.open('GET', 'https://pokeapi.co/api/v2/pokemon/pikachu');
request.send()



/*
  02

  - Crie um objeto que contém suas informações pessoais;
  - As propriedades devem armazenar: 
    - Seu nome;
    - Seu sobrenome;
    - Seu sexo;
    - Sua idade (number);
    - Sua altura (number);
    - Seu peso (number);
    - Se você está andando (boolean iniciado em false);
    - Quantos metros você caminhou (number iniciado em 0).
*/

const myInformation = {
  name: 'Renan',
  lastName: 'Maia',
  gender: 'Female',
  year: 2,
  height: 1.84,
  weight: 85,
  isWalking: false,
  howManyMetersWalked: 1
};




/*
  03

  - Logo abaixo, adicione ao objeto um método que adiciona 1 ao valor da 
    propriedade que armazena a idade;
  - A cada vez que o método é invocado, 1 deve ser somado à idade atual;
  - Após criar o método, adicione 5 anos à idade do objeto.
*/


myInformation.addYears = () => myInformation.year += 1;

// myInformation.addYears();
// myInformation.addYears();
// myInformation.addYears();
// myInformation.addYears();
// myInformation.addYears();





/*
  04

  - Logo abaixo, adicione ao objeto um método que soma a quantidade de metros 
    caminhados ao valor que foi recebido como parâmetro do método;
  - Este método também deve modificar o boolean do objeto que indica se a 
    pessoa representada pelo objeto está, ou não, andando;
  - Após criar o método, faça a pessoa caminhar alguns metros, invocando o 
    método 4x, com diferentes metragens passadas por parâmetro.
*/


myInformation.addMetersWalked = (meters) => {

  myInformation.howManyMetersWalked += meters

  if (myInformation.isWalking === false) {
    myInformation.isWalking = true;
  }
  
};


// myInformation.addMetersWalked(3);
// myInformation.addMetersWalked(5);
myInformation.addMetersWalked(1);
// myInformation.addMetersWalked(2);





/*
  05

  - Logo abaixo, adicione ao objeto um método que retorna a seguinte string:
  
  'Oi. Eu sou o NOME_COMPLETO, tenho IDADE anos, ALTURA metros de altura, 
  peso PESO quilos e, só hoje, eu já caminhei QUANTIDADE_DE_METROS_CAMINHADOS 
  metros.'
  
  - Antes de retornar a string, faça as seguintes validações:
    - Se o sexo do objeto for "Feminino", antes do nome da pessoa, substitua "o"
      por "a";
    - Se a idade for 1, substitua "anos" por "ano", no singular;
    - Se a quantidade de metros caminhados for 1, substitua "metros" por 
      "metro", no singular.
*/


myInformation.myResume = () => {

  let years = 'anos';
  let gender = 'o';
  let meters = 'metros';

  myInformation.year === 1 ? years = 'ano' : years;
  myInformation.gender === 'Female' ? gender = 'a' : gender;
  myInformation.howManyMetersWalked === 1 ? meters = 'metro' : meters;

  return `Oi. Eu sou ${gender} ${myInformation.name} ${myInformation.lastName}, tenho ${myInformation.year} ${years}, ${myInformation.height} metros de altura, peso ${myInformation.weight} quilos e, só hoje, eu já caminhei ${myInformation.howManyMetersWalked} ${meters}.`;
}


// console.log(myInformation.myResume());
// console.log(myInformation);

/*
  06

  - Crie uma função que recebe um valor como argumento e retorna um boolean 
    indicando se o valor é truthy ou falsy;
  - Invoque a função e, a cada invocação, passe como argumento um valor falsy.
    - Faça isso até passar todos os valores falsy;
  - Invoque a função e, desta vez, a cada invocação, passe como argumento um 
    valor truthy;
    - Faça isso até que 7 valores truthy sejam passados.
*/



/*
  07

  - Crie uma função que recebe um parâmetro, que será o nome de um livro;
  - Essa função deve conter um objeto com 3 propriedades, que são nomes de 
    livros;
  - Cada uma dessas 3 propriedades deve armazenar um novo objeto que terá 
    outras 3 propriedades que armazenam:
      - A quantidade de páginas (number);
      - Autor;
      - Editora.
  - Faça a função retornar o objeto que representa o livro passado por 
    parâmetro;
  - Se o parâmetro não for passado, faça a função retornar o objeto com todos 
    os livros.

  Dica: propriedades de objetos podem ser declaradas como strings.
*/
