const main = async() => {
  const fizzBuzz = async(nmbr) => {
    return new Promise((resolve, reject) => {
      if(nmbr % 3 === 0 && nmbr % 5 === 0) resolve('FizzBuzz');
      if(nmbr % 3 === 0) resolve('Fizz');
      if(nmbr % 5 === 0) resolve('Buzz');
      if(nmbr % 3 !== 0 && nmbr % 5 !== 0) reject(nmbr);
    })
  }

  try {
    console.log(await fizzBuzz(30));
  } catch (err) {
    console.error(`Erro: numero inserido não é multiplo de 5 nem de 3: ${err}`);
  }
}

main();
