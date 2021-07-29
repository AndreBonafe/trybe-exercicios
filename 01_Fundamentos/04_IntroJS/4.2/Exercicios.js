//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];  <----- Usar isso até o Exercicio 7

// Exercicio 1
///////////////////////////////////////////////////////////////////////
// for (index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// }


// Exercicio 2 
///////////////////////////////////////////////////////////////////////
// let soma = null;

// for (index = 0; index < numbers.length; index +=1) {
//     soma += numbers[index];
// }
// console.log(soma);


// Exercicio 3
///////////////////////////////////////////////////////////////////////
// let soma = null;
// let somaAri = null

// for (index = 0; index < numbers.length; index +=1) {
//     soma += numbers[index];
// }
// somaAri = soma / numbers.length;

// console.log(somaAri);



// Exercicio 4
///////////////////////////////////////////////////////////////////////
// let soma = null;
// let somaAri = null

// for (index = 0; index < numbers.length; index +=1) {
//     soma += numbers[index];
// }
// somaAri = soma / numbers.length;

// if (somaAri > 20){
//     console.log('valor maior que 20');
// } else {
//     console.log('valor menor ou igual a 20');
// }


// Exercicio 5
///////////////////////////////////////////////////////////////////////
// let maiorValor = 0;

// for (index = 0; index < numbers.length; index +=1) {
//     let valor = numbers[index];
//     for (indexM = 0; indexM < numbers.length; indexM +=1){
//         let valorCompara = numbers[indexM];
    
//         if (valor > valorCompara && valor > maiorValor){
//         maiorValor = valor
//         }
//     }
// }
// console.log(maiorValor);


// Exercicio 6
///////////////////////////////////////////////////////////////////////
// let odd = 0;

// for (index = 0; index < numbers.length; index +=1) {
//     if (numbers[index] % 2 === 1) {
//         odd += 1
//     }
// }

// console.log ('existem ' + odd + ' numeros ímpares nessa array.')


// Exercicio 7
///////////////////////////////////////////////////////////////////////
// let menorValor = 10000000;

// for (index = 0; index < numbers.length; index +=1) {
//     let valor = numbers[index];
//     for (indexM = 0; indexM < numbers.length; indexM +=1){
//         let valorCompara = numbers[indexM];
    
//         if (valor < valorCompara && valor <= menorValor){
//         menorValor = valor
//         }
//     }
// }
// console.log(menorValor);



// Exercicio 8
///////////////////////////////////////////////////////////////////////
// let numeros = [];

// for (let counter = 1; counter <= 25; counter += 1) {
//     numeros.push(counter);
// }

// console.log(numeros);


// Exercicio 9
///////////////////////////////////////////////////////////////////////
let numeros = [];

for (let counter = 1; counter <= 25; counter += 1) {
    numeros.push(counter);
}

for (let index = 0; index < numeros.length; index += 1) {
    console.log(numeros[index] / 2);
}