// // Utilizando o array abaixo, percorra-o somando todos os valores. 
// // Caso o valor final seja maior que 15, imprima-o.
// //  Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":

// //Adicionar o array;
// let fruits = [3, 4, 10, 1, 12];

// //Criar uma variável com valor 0;
// let somaValores = 0;

// //Criar um loop que percorre o array;
// for (let index = 0; index < fruits.length; index += 1){
//     //Incrementar a variável com o valor correspondente a cada loop;
//     somaValores = somaValores + fruits[index];
// }
// //Criar um if com a condição da variável ser maior que 15;
// if (somaValores > 15){
//     //Caso a variável obedeça a condição - Imprimir a variável;
//     console.log(somaValores);
// } //Caso não obedeça a condição;
// else {
//     //Imprimir a mensagem "valor menor que 16";
//     console.log("valor menor que 16");
// }


/////////////////////////////////////////////////////////////////////

// Exercicios

/////////////////////////////////////////////////////////////////////

// Exercicio 1;
// let n = 5
// let asterisco = '*';
// let input = '';

// for (let i = 1; i <= n; i += 1) {
//     input = asterisco + input;
// }
// for (let i = 1; i <= n; i += 1) {
//     console.log(input);
// }


/////////////////////////////////////////////////////////////////////


// Exercicio 2;
// let n = 50
// let asterisco = '*';
// let input = '';

// for (let i = 1; i <= n; i += 1) {
//     input = asterisco + input;
//     console.log(input);
// }


/////////////////////////////////////////////////////////////////////


// Exercicio 3;
// let n = 5
// let asterisco = '*';
// let input = '';
// let line = n-1;
// let imprimeAst = n - line;

// for (let i = 0; i < n; i +=1) {
//     input = '';
//     for (let index = 1; index <= line; index += 1){
//         input = input + ' ';
//     }
//     for (let index = 1; index <= imprimeAst; index += 1) {
//         input += asterisco;
//     }
//     line -= 1;
//     imprimeAst = n - line;
//     console.log(input);
// }