const readlineSync = require('readline-sync');

const wichScript = readlineSync
  .questionFloat(
    'Qual Script você quer rodar? 1- calculadora de IMC // 2- Calculadora de velocidade média // 3- Teste de Sorte'
    );

switch(wichScript) {
  case 1:
    require('./imc');
    break;
  case 2:
    require('./velocidade');
    break;
  case 3:
    require('./sorteio');
    break;
  default:
    console.log('Número invalido, saindo...');
}