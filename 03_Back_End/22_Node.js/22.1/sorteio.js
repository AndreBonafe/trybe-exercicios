const readlineSync = require('readline-sync');

const randomNumberFunc = () => Math.floor(Math.random() * 11);

const betNumber = readlineSync.questionInt('Aposte em um número de 0 a 10');

const checkIfHits = (betNumber) => {
  const randomNumber = randomNumberFunc();
  return betNumber === randomNumber ? 'Parabéns, número correto!' : `Opa, não foi dessa vez. O número era ${randomNumber}`;
}

console.log(checkIfHits(betNumber));