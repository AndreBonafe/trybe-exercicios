//exercicio 1

// const assert = require('assert');

// const arrays = [
//   ['1', '2', '3'],
//   [true],
//   [4, 5, 6],
// ];

// function flatten() {
//   return arrays.reduce((acc, curr) => acc.concat(curr), []);
// }

// assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

// const assert = require('assert');

// const books = [
//   {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: {
//       name: 'George R. R. Martin',
//       birthYear: 1948,
//     },
//     releaseYear: 1991,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: {
//       name: 'J. R. R. Tolkien',
//       birthYear: 1892,
//     },
//     releaseYear: 1954,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: {
//       name: 'Isaac Asimov',
//       birthYear: 1920,
//     },
//     releaseYear: 1951,
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: {
//       name: 'Frank Herbert',
//       birthYear: 1920,
//     },
//     releaseYear: 1965,
//   },
//   {
//     id: 5,
//     name: 'A Coisa',
//     genre: 'Terror',
//     author: {
//       name: 'Stephen King',
//       birthYear: 1947,
//     },
//     releaseYear: 1986,
//   },
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: {
//       name: 'H. P. Lovecraft',
//       birthYear: 1890,
//     },
//     releaseYear: 1928,
//   },
// ];

//exercicio 2

// const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

// function reduceNames() {
//   const names = books.reduce((acc, book, index, array) => {
//     if (index === array.length -1) return `${acc} ${book.author.name}.`;
//     return `${acc} ${book.author.name},`;
//   }, '');
//   return names.trim();
// }

// // console.log(reduceNames());

// assert.strictEqual(reduceNames(), expectedResult);

//exercicio 3

// const expectedResult = 43;

// function averageAge() {
//   const sum = books.reduce((acc, book) => {
//     return acc + (book.releaseYear - book.author.birthYear);
//   }, 0);
//   return sum / books.length;
// }

// // console.log(averageAge());

// assert.strictEqual(averageAge(), expectedResult);

// exercicio 4


// const expectedResult = {
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   genre: 'Fantasia',
//   author: {
//     name: 'George R. R. Martin',
//     birthYear: 1948,
//   },
//   releaseYear: 1991,
// };

// function longestNamedBook() {
//   return books.reduce((acc, book) => {
//     if (acc.name.length < book.name.length) return book;
//     return acc;
//   })
// }


// assert.deepStrictEqual(longestNamedBook(), expectedResult);

// exercicio 5

// const assert = require('assert');

// const names = [
//   'Aanemarie', 'Adervandes', 'Akifusa',
//   'Abegildo', 'Adicellia', 'Aladonata',
//   'Abeladerco', 'Adieidy', 'Alarucha',
// ];

// function containsA() {
//   return names.reduce((acc, words) => {
//    return acc + words.match(/a/gi).length;
//   }, 0);
// }

// console.log (containsA());

// assert.deepStrictEqual(containsA(), 20);

// exercicio 6

// const assert = require('assert');

// const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
// const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// function studentAverage() {
//   const mapStudents = students.map((student, index) => ({
//     name: student,
//     average: grades[index].reduce((acc, curr) => acc + curr) / grades[index].length
//   }))
//   return mapStudents;
// }

// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];

// assert.deepStrictEqual(studentAverage(), expected);

// console.log(studentAverage());