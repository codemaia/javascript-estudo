// /*
//   01

//   - Exiba no console o index da 1ª (e única) ocorrência do mês "Fevereiro" do 
//     array "months".
// */

// const months = [
//   'Janeiro',
//   'Fevereiro',
//   'Março',
//   'Abril',
//   'Maio',
//   'Junho',
//   'Julho',
//   'Agosto',
//   'Setembro',
//   'Outubro',
//   'Novembro',
//   'Dezembro'
// ]

// console.log(months.indexOf('Fevereiro'));



// /*
//   02

//   - Crie um objeto de data que represente o momento presente;
//   - Exiba o objeto no console.
// */

// const present = new Date();
// console.log(present)
// console.log({ present })




// /*
//   03

//   - Baseado no objeto que você acabou de criar, exiba o ano atual no console.
// */

// console.log('currentYear:', present.getFullYear());


// /*
//   04

//   - Crie um objeto de data que represente um momento passado;
//   - Exiba o objeto no console.
// */


// const past = new Date('Sep 13 2022 23:59:59');
// console.log({past})

// /*
//   05

//   - Exiba, no console, a hora do objeto que você acabou de criar.
// */

// console.log('Hours:', past.getHours());



// /*
//   06

//   - Crie um objeto de data que represente um momento futuro;
//   - Exiba o objeto no console.
// */

// const future = new Date('Nov 30 2022 23:59:59');
// console.log({ future })



// /*
//   07

//   - Exiba no console a quantidade de dias entre o momento futuro e o passado.
// */

// const differencePastAndFuture = future.getTime() - past.getTime() 

// const second = Math.round(differencePastAndFuture / 1000);
// const minutes = Math.round(second / 60);
// const hours = Math.round(minutes / 60);
// const days = Math.round(hours / 24);
// //or
// const differenceInDays = Math.round(differencePastAndFuture / 1000 / 60 / 60 / 24)

// console.log(days)
// console.log(differenceInDays)


//relogio didital
const  divClock = document.querySelector('.clock-container');

const myClock = () => {
  const present = new Date();
  const hours = present.getHours();
  const minutes = present.getMinutes();
  const seconds = present.getSeconds();

  const clockHtml = `
    <span>${String(hours).length === 1 ? `0${hours}` : hours }</span>
    <span>${String(minutes).length === 1 ? `0${minutes}` : minutes }</span>
    <span>${String(seconds).length === 1 ? `0${seconds}` : seconds }</span>
  `

  divClock.innerHTML = clockHtml; 

};


setInterval(myClock, 1000);




/*
  08
  
  Assim como a 1ª aplicação que implementamos (Quiz), considere fazer 
  da aplicação To-do List uma peça do seu portfólio.

  Desenvolva a sua versão do To-do List e, se você sentir que a desenvolveu 
  por conta própria, considere inserí-la como parte de seu portfólio.

  Caso contrário, reveja as aulas e treine novamente até que você consiga 
  desenvolver a aplicação sozinho(a).

  Você pode hospedá-la no Netlify seguindo o mesmo tutorial que recomendei na 
  aplicação do Quiz: 
  https://www.youtube.com/playlist?list=PLlAbYrWSYTiMGMxQf9JSoZUU1rgVpGPth
*/
