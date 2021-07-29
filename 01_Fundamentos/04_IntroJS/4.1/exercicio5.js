//Prgrama 1

// let a = 7;
// let b = 3;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);


//Programa 2

// let a = 25;
// let b = 36;

// if (a > b) {
//     console.log('o maior numero é ' +  a);
// }
// else {
//     console.log('o maior numero é ' + b);
// }


//Programa 3

// let a = 400;
// let b = 400;
// let c = 400;

// if (a > b && a > c) {
//     console.log('o maior numero é ' +  a);
// }
// else if (b > a && b > c){
//     console.log('o maior numero é ' + b);
// }
// else if (c > a && c > b){
//     console.log('o maior numero é ' + c);
// }
// else {
//     console.log('todos os numeros tem o mesmo valor')
// }


//Programa 4

// 
// let number = 4;

// if (number > 0) {
//   console.log('positive');
// } else if (number < 0) {
//   console.log('negative');
// } else {
//   console.log('zero');
// };


//Programa 5

// let angulo1 = 30;
// let angulo2 = 20;
// let angulo3 = 130;

// let eValido = false;


// if (angulo1 + angulo2 + angulo3 == 180) {
//         eValido = true;
//     }
//     else{
//         eValido = false;
//     }
    
// if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
//         eValido = 'erro: numero inválido.';
//     }
//     else{
//     }

// console.log(eValido);


//Programa 6

// var piece = 'bishop';

// switch (piece) {
//     case 'bishop':
//         console.log('diagonals');
//         break;

//     default:
//         console.log('Erro: Peça Inválida');
//         break;
// }


//Programa 7

// var Porcentagem = 101;

// if (Porcentagem >= 90 && Porcentagem <= 100) {
//     Porcentagem = "A";

// } else if (Porcentagem >= 80 && Porcentagem < 90) {
//     Porcentagem = "B";

// } else if (Porcentagem >= 70 && Porcentagem < 80) {
//     Porcentagem = "C";

// } else if (Porcentagem >= 60 && Porcentagem < 70) {
//     Porcentagem = "D";

// } else if (Porcentagem >= 50 && Porcentagem < 60) {
//     Porcentagem = "E";

// } else if (Porcentagem < 50) {
//     Porcentagem = "F - Not Even Close";

// } else if (Porcentagem < 0 || Porcentagem > 100){
//     Porcentagem = "Erro: Valor Inválido!";

// }
// console.log(Porcentagem);


//Programa 8

// let a = 3;
// let b = 7;
// let c = 13;

// let isEven = false;

// if (a%2 == 0 || b%2 == 0 || c%2 == 0) {
//     isEven = true;
// } else {
//     isEven = false;
// }

// console.log(isEven);


//Programa 9

// let a = 0;
// let b = 2;
// let c = 4;

// let isOdd = false;

// if (a%2 == 1 || b%2 == 1 || c%2 == 1) {
//     isOdd = true;
// } else {
//     isOdd = false;
// }

// console.log(isOdd);


//Programa 10

// let custo = 300;
// let venda = 360;

// if (custo >=0 && venda >= 0) {
//     custo *= 1.2;
//     let lucro = (venda - custo) * 1000;
//     console.log(lucro);
// } else {
//     console.log('Erro, Numero inválido');   
// }


//Programa 11

let salarioBruto = 3000;
let salarioLiquido = null;
let salarioBase = null;

if (salarioBruto <= 1556.94) {
    let aliquotaINSS = (8 / 100) * salarioBruto;
    salarioBase = salarioBruto - aliquotaINSS;
} else if (salarioBruto <= 2594.92) {
    let aliquotaINSS = (9 / 100) * salarioBruto;
    salarioBase = salarioBruto - aliquotaINSS;
} else if (salarioBruto <= 5189.82) {
    let aliquotaINSS = (11 / 100) * salarioBruto;
    salarioBase = salarioBruto - aliquotaINSS;
} else if (salarioBruto > 5189.82) {
    let aliquotaINSS = 570.88;
    salarioBase = salarioBruto - aliquotaINSS;
}

if (salarioBase <= 1903.98) {
    let aliquotaIR = 0;
    salarioLiquido = salarioBase - aliquotaIR;
} else if (salarioBase <= 2826.65) {
    let aliquotaIR = (7.5 / 100) * salarioBase - 142.80;
    salarioLiquido = salarioBase - aliquotaIR;
} else if (salarioBase <= 3751.05) {
    let aliquotaIR = (15 / 100) * salarioBase - 354.80;
    salarioLiquido = salarioBase - aliquotaIR;
} else if (salarioBase <= 4664.68) {
    let aliquotaIR = (22.5 / 100) * salarioBase - 636.13;
    salarioLiquido = salarioBase - aliquotaIR;
} else if (salarioBase > 4664.68) {
    let aliquotaIR = (27.5 / 100) * salarioBase - 869.36;
    salarioLiquido = salarioBase - aliquotaIR;
}

console.log(salarioLiquido);