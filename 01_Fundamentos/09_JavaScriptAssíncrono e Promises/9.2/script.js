// apiScript.js     
// const API_URL = 'https://icanhazdadjoke.com/';

// const teste = (data) => {
//     const h2 = document.querySelector('#jokeContainer');
//     h2.append(data.joke);
// }

// const fetchJoke = () => {
//   const myObject = {
//     method: 'GET',
//     headers: { 'Accept': 'application/json' }
//   };
//   fetch(API_URL, myObject)
//     .then(response => response.json())
//     .then(data => teste(data))
// };

// window.onload = () => fetchJoke();

const divideNumber = (number)  => {
  const result = [];
  for(let i = 1; i <= 4; i += 1) {
    i === 1 ? result.push(number / 2) : result;
    i === 2 ? result.push(number / 3) : result;
    i === 3 ? result.push(number / 5) : result;
    i === 4 ? result.push(number / 10) : result;
  }
  return result;
}

const promiseArray = new Promise((resolve, reject) => {
  const numbers = [];
  let sum = 0;
  for (let i = 0; i < 10; i += 1) {
    numbers.push(Math.floor(Math.random() * (50 - 1) + 1));
    numbers[i] *= numbers[i];
    sum += numbers[i];
  }
  if (sum < 8000) return  resolve(sum);
  
  reject('É mais de oito mil! Essa promise deve estar quebrada!');
})
.then((result) => divideNumber(result))
.then((numbersArray) => {
  let sum = 0;
  for (let i = 0; i < numbersArray.length; i += 1) {
    sum += numbersArray[i];
  }
  console.log(sum);
})
.catch((msgm) => console.log(msgm))