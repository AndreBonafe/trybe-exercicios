const readlineSync = require('readline-sync');

const imc = (height, weight) => {
  const imcCalc = parseInt((weight / Math.pow(height, 2)).toFixed(2));
    if(imcCalc < 18.5) {
      return 'Magreza'
    } else if(imcCalc > 18.5 && imcCalc < 24.9) {
      return 'Peso Normal'
    } else if(imcCalc > 25 && imcCalc < 29.9) {
      return 'Sobrepeso'
    } else if(imcCalc > 30 && imcCalc < 34.9) {
      return 'Obesidade grau I'
    }else if (imcCalc > 35 && imcCalc < 39.9) {
      return 'Obesidade grau II'
    }else if (imcCalc > 40) {
      return 'Obesidade grau III e IV'
    }
}

const name = readlineSync.question('Qual seu nome?');
const height = readlineSync.questionFloat('Qual sua Altura?');
const weight = readlineSync.questionFloat('Qual seu peso?');

console.log(`${name}, você esta com ${imc(height, weight)}`);
