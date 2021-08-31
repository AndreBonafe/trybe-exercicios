// Exercicios iniciais;
// const testingScope = escopo => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// // testingScope(true);

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sortElements = toSort => {
//   const sorted = toSort.sort(function(a, b){return a-b});
//   console.log(`Os números ${sorted} se encontram ordenados de forma crescente!`);
// }

// // sortElements(oddsAndEvens); // será necessário alterar essa linha 😉

// const calcFactorial = number => {
//   if (number < 0) {
//     console.log(`Numeros negativos não permitidos!`);
//     } else if (number === 0){
//     console.log('1');
//     } else {
//     let result = 1;
//     for(let i = 1; i <= number; i += 1) {
//       result *= i;
//     }
//     console.log(result);
//   }
// }

// // calcFactorial(-1);

// const longestWord = string => {
//   const space = ' ';
//   const stringSplited = string.split(space);
//   let largestString = stringSplited[0];
//   for (let i in stringSplited) {
//     largestString.length < stringSplited[i].length ? largestString = stringSplited[i] : largestString;
//   }
//   console.log(`A maior palavra é ${largestString}`);
// }

// longestWord('Antônio foi no banheiro e não sabemos o que aconteceu');

const button = document.querySelector('#button-counter');
const counter = document.querySelector('#click-counter');
button.addEventListener('click', () => {
  counter.innerText = parseInt(counter.innerText) + 1;
});

const skills = ['HTML', 'CSS', 'DOM', 'JavaScript', 'ES6'];
let result = '';

const insertName = name => {
const xPhrase = 'Tryber x aqui!';
const splitedX = xPhrase.split('x');
result = `${splitedX[0] + name + splitedX[1]}`;
}

const insertSkills = newPhrase => {
  const sortedSkills = skills.sort();
  const printInScreen = `${result} Minhas cinco principais habilidades são: 
  ${sortedSkills[0]}
  ${sortedSkills[1]}
  ${sortedSkills[2]}
  ${sortedSkills[3]}
  ${sortedSkills[4]}`;
  console.log(printInScreen);
}

insertName('André');
insertSkills(result);
