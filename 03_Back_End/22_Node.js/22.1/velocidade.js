const readlineSync = require('readline-sync');

const calcVelMed = (distance, time) => {
  return (distance / time);
}

const Distance = readlineSync.questionFloat('Qual foi a distância percorrida?');
const Time = readlineSync.questionFloat('Em quanto tempo percorreu essa distancia?');

console.log(`A velocidade media do carro foi de ${calcVelMed(Distance, Time).toFixed(2)}km/h`);