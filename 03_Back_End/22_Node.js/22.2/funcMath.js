const funcMath = async (a, b, c) => {
  try {
    const result = await (a + b) * c;
    if (result < 50) throw new Error('Valor muito Baixo');
    if(typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number') {
      throw new Error('Insira apenas numeros');
    } else {
      console.log(result);
    }
  } catch (err) {
      console.error(`Erro: ${err.message}`);
    }
  }

const randomNumber = Math.floor(Math.random() * 100 + 1);

funcMath(randomNumber, randomNumber, randomNumber);