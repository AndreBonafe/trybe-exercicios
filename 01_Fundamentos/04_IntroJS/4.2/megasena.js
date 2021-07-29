let firstNumber = Math.floor(Math.random() * 60 + 1);
let secondNumber = Math.floor(Math.random() * 60 + 1);
let thirdNumber = Math.floor(Math.random() * 60 + 1);
let fourthNumber = Math.floor(Math.random() * 60 + 1);
let fifthNumber = Math.floor(Math.random() * 60 + 1);
let sixthNumber = Math.floor(Math.random() * 60 + 1);

let megaSenaNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber];

let playJoaoVictor = [7, 15, 28, 42, 56, 58];
let playEmily = [12, 49, 51, 36, 22, 8];
let playEmmanuelle = [13, 17, 23, 42, 51, 59];

let plays = [playJoaoVictor, playEmily, playEmmanuelle];
let numberOfHits = 0;
for (let indexPlays = 0; indexPlays < plays.length; indexPlays += 1) {
  let playArray = plays[indexPlays];
  for (let index = 0; index < playArray.length; index += 1) {
    let playNumber = playArray[index];
    for (let indexMega = 0; indexMega < megaSenaNumbers.length; indexMega += 1) {
      let megaNumber = megaSenaNumbers[indexMega];
      if (playNumber === megaNumber) {
        numberOfHits += 1;
      }
    }
  }
  console.log('Mega Sena: ' + megaSenaNumbers);
  console.log('Jogo ', indexPlays, ': ' + playArray);
  console.log('Acertos: ' + numberOfHits);
  console.log();
}


// let numberOfHitsEmily = 0;

// for (let index = 0; index < playEmily.length; index += 1) {
//   let playNumber = playEmily[index];
//   for (let indexMega = 0; indexMega < megaSenaNumbers.length; indexMega += 1) {
//     let megaNumber = megaSenaNumbers[indexMega];
//     if (playNumber === megaNumber) {
//       numberOfHitsEmily += 1;
//     }
//   }
// }

// console.log('Mega Sena: ' + megaSenaNumbers);
// console.log('Jogo da Emily: ' + playEmily);
// console.log('Acertos: ' + numberOfHitsEmily);

// let numberOfHitsEmmanuelle = 0;

// for (let index = 0; index < playEmmanuelle.length; index += 1) {
//   let playNumber = playEmmanuelle[index];
//   for (let indexMega = 0; indexMega < megaSenaNumbers.length; indexMega += 1) {
//     let megaNumber = megaSenaNumbers[indexMega];
//     if (playNumber === megaNumber) {
//       numberOfHitsEmmanuelle += 1;
//     }
//   }
// }

// console.log('Mega Sena: ' + megaSenaNumbers);
// console.log('Nosso jogo: ' + playEmmanuelle);
// console.log('Acertos: ' + numberOfHitsEmmanuelle);
