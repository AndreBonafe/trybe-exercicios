//Para Fixar 1
// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: { 
//         golden: 2, 
//         silver: 3 
//     }
// }

// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

// player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// console.log('A jogadora Marta Silva foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');

// console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata');

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

  
// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
//   nota: 'O último MacPatinhas',
//   recorrente: 'Sim'
// };


// //   console.log('Bem-vinda, ' + info.personagem); <--- exercicio 1


// info.recorrente = 'Sim';
// // console.log(info); <--- exercicio 2


// // for (keys in info) {
// //     console.log(keys);
// // }  <---- exercicio 3


// // for (keys in info) {
// //     console.log(info[keys]);
// // } <---- exercicio 4


// // for (i in info) {
// //     if (info[i] === info2[i]){
// //     console.log('Ambos recorrentes');
// //     break;
// //     }
// // console.log(info[i] + ' e ' + info2[i]);
// // }  <-------- exercicio 5

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function verificaPalindrome(string) {
//     let stringReversa = '';
//     for (let i = 0; i < string.length; i += 1){
//         stringReversa += string[string.length - 1 - i];
//     }    
//     return string === stringReversa;
// }

// console.log(verificaPalindrome('arara'));  <--- exercicio 1

// function biggestValor(array) {
//     let maiorIndice = 0;
//     for (let i in array) {
//         if (maiorIndice < array[i]){
//             maiorIndice = i;
//         }
//     }
//     return maiorIndice;
// }

// console.log (biggestValor([2, 3, 6, 7, 10, 1]));  <------ exercicio 2


// function lowestValor(array) {
//     let maiorIndice = 0;
//     for (let i in array) {
//         if (array[maiorIndice] > array[i]){
//             maiorIndice = i;
//         }
//     }
//     return maiorIndice;
// }

// console.log (lowestValor([2, 4, 6, 7, 10, 0, -3])); < ---- exercicio 3 

function biggestWord (array) {
    let maiorPalavra = '';
    for (let i in array) {
        if (array[i].length > maiorPalavra.length){
            maiorPalavra = array[i];
        }
    }
    return maiorPalavra;
}

console.log (biggestWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));